'use client'
import { useState, useEffect } from "react";
import {useAuth} from '../context/history'
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'
export default function Products() {
  const {users, activeUser, cart, signUp, login, logout, updateUser, updateCustomerData, updateBarberData, addOrder, addPickupOrder, pickupOrders} = useAuth()
  const [orders, setOrders] = useState([])
  const [display, setDisplay] = useState('order')
  const [firstColumn, setFirst] = useState('list')
  const [locations, setLocations] = useState([])
const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [payment, setPayment] = useState('')
    const [paymentMethod, setPaymentMethod] = useState(null)
    const router = useRouter()
    useEffect(() => {
        if (!activeUser) {
          router.replace("/sign?from=/send")
        }
      }, [])
  useEffect(() => {
      if (pickupOrders && pickupOrders.length > 0) {
        setLocations(pickupOrders.map(p => {return {city: p.location,address:'123 Main st'}}));
      }
    }, [pickupOrders]);
    useEffect(() => {
      if (activeUser) {
        setOrders(activeUser.newBarber.orders)
      }
    }, [activeUser])
    useEffect(() => {
      if (activeUser) {
        setName(activeUser.name)
        setEmail(activeUser.email)
        setPayment(activeUser.newBarber.paymentInfo)
        setPaymentMethod(activeUser.newBarber.paymentType)
      }
    }, [])
  return (
    <div style={{marginTop:'5rem'}}>
    <div style={{width:'100%',display:'flex',marginBottom:'50px'}} className={styles.top}>
            <h1 style={{flex:1,margin:'10px',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom: display == 'order' ? 'solid 1px #4fad33' : 'none'}} onClick={()=>setDisplay('order')}>Orders</h1>
            <h1 style={{flex:1,margin:'10px',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom: display == 'account' ? 'solid 1px #4fad33' : 'none'}} onClick={()=>setDisplay('account')}>Account info</h1>
          </div>
    {display == 'order' ?
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>{firstColumn == 'list' ? <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      {orders.length == 0 ? <h1>when you send in your hair, the information will appear here</h1>
      : orders.map((o, ind) => <div key={ind}>
                <p>Date: {o.date}</p>
                <p>amount: {o.amount}</p>
                <p>address: {o.address}</p>
                <p>payment: {o.paymentMethod}: {o.payment}</p>
              </div>)}
      <button className="ml-3 btn btn-md btn-primary btn-icon-right" onClick={()=>setFirst('form')}>Send</button>
    </div>
    : <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>send you hair to one of the following locations or bring it in person, we will weigh it there and pay you 100$ per KG</h1>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>{locations.map((l, ind) => <div key={l} style={{margin:'10px',padding:'10px',borderRadius:'50px',border:'1px solid black'}}>
                <p>{l.city}</p>
                <p>{l.address}</p>
                </div>)}</div>
                <h1>Payment method</h1>
                <div className={styles.payment} style={{ display: 'flex'}}>
          <button onClick={()=>{
            setPaymentMethod('paypal')
            }} style={{backgroundColor:paymentMethod=='paypal'?'#4fad33':'white',border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Paypal</button>
          <button onClick={()=>{
            setPaymentMethod('zelle')
            }} style={{backgroundColor:paymentMethod=='zelle'?'#4fad33':'white', border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Zelle</button>
          <button onClick={()=>{
            setPaymentMethod('bit')
            }} style={{backgroundColor:paymentMethod=='bit'?'#4fad33':'white', border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Bitcoin</button>
          </div>
         {paymentMethod && <div>
          <p>{paymentMethod == 'paypal' || paymentMethod == 'zelle' ? 'Email' : 'Bitcoin wallet address'}</p>
          <input type="text"
        name="info"
        placeholder={paymentMethod == 'paypal' || paymentMethod == 'zelle' ? 'Email' : 'Bitcoin wallet address'}
        value={payment}
        onChange={e => setPayment(e.target.value)}/>
         </div>}
                <button className="ml-3 btn btn-md btn-primary btn-icon-right" onClick={()=>setFirst('list')}>My orders</button>
    </div>}
    </div>
    : <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'50px'}}>
            <h1>Change account info</h1>
            <div>
            <p>Change Name</p>
            <input type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <p>Change Email</p>
            <input type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <p>Change Payment method</p>
            <div className={styles.payment} style={{ display: 'flex'}}>
          <button onClick={()=>{
            setPaymentMethod('paypal')
            }} style={{backgroundColor:paymentMethod=='paypal'?'#4fad33':'white',border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Paypal</button>
          <button onClick={()=>{
            setPaymentMethod('zelle')
            }} style={{backgroundColor:paymentMethod=='zelle'?'#4fad33':'white', border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Zelle</button>
          <button onClick={()=>{
            setPaymentMethod('bit')
            }} style={{backgroundColor:paymentMethod=='bit'?'#4fad33':'white', border:'1px solid black',padding:'5px 10px', borderRadius:'50px',fontSize:'1.5em'}}>Bitcoin</button>
          </div>
          </div>
          <div>
            <p>Change Payment info</p>
            <input type="text"
        name="payment"
        placeholder="payment"
        value={payment}
        onChange={e => setPayment(e.target.value)}/>
          </div>
          <button onClick={()=>{
            updateUser({name, email})
            updateBarberData({paymentType:paymentMethod,paymentInfo:payment})
            }}>Submit</button>
            </div>}
    </div>
  );
}
