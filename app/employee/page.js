'use client'
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'
import { useAuth } from '../context/history';

export default function Home() {
  const { users, setUsers, employees, employeeLogin, activeEmployee, cart, activeUser, signUp, login, logout, updateUser, addOrder, addPickupOrder, pickupOrders, changePickupOrderStatus } = useAuth();
  const [location, setLocation] = useState(0);
  const [wwidth, setWidth] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [z, setZ] = useState(10)
  const [orders, confirm] = useState([]);
  const [filters, setFilters] = useState([
    {f:'pending', c:false},
    {f:'confirmed', c:false},
    {f:'sent', c:false},
    {f:'input', c:true}
  ])
  const [userFilters, setUserFilters] = useState([])
  const [newInput, addInput] = useState(false)
  const [newName, setName] = useState(null)
  const [filteredOptions, setFilteredOptions] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter()
  useEffect(() => {
      if (!activeEmployee) {
        router.replace("/employeeEnter?from=/employee")
      }
    }, [activeEmployee, router])
  useEffect(() => {
    if (pickupOrders && pickupOrders.length > 0) {
      confirm(pickupOrders);
    }
  }, [pickupOrders]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  useEffect(() => {
    setFilteredOptions(users)
  }, [])
  useEffect(() => {
    if (newName) {
      setFilteredOptions(
      users.filter(opt =>
        opt.name.toLowerCase().includes(newName.name.toLowerCase())
      )
    )
    }
  }, [newName]);

  // Handle outside clicks (but NOT blur input unless a dropdown item is clicked)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        // Don't hide dropdown if outside click
        return;
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsDropdownVisible(true);
  };

  const handleOptionClick = (option) => {
    setName(option);
    setIsDropdownVisible(false);
    inputRef.current.blur();
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <section style={{ display: 'flex', height: '100vh', position: 'relative',marginTop:'5rem' }}>
        
        {/* Sidebar (Hidden by Default) */}
        {wwidth > 680 ? (
          <section style={{ height: '100%', width: '25%', padding: '10px' }}>
            <div>{pickupOrders.map((o, ind) => (
              <p key={ind} style={{ margin: '20px 0', cursor: 'pointer' }} onClick={() => 
              {
                setLocation(ind)
              setFilters([
                {f:'pending', c:false},
                {f:'confirmed', c:false},
                {f:'sent', c:false}
              ])
            }
              }>
                {o.location}
              </p>
            ))}</div>
            <div>
                    {users.map(u => <div key={u.name} style={{display:'flex'}}>
              <p>{u.name}</p>
            <input
        type="checkbox"
        name={u.name}
        checked={userFilters.includes(u.name)}
        onChange={()=>setUserFilters(!userFilters.includes(u.name) ? userFilters.concat(u.name) : userFilters.filter(us => us !== u.name))}/>
            </div>)}
                  </div>
          </section>
        ) : (
          <>
            <svg 
              onClick={() => {
                setSidebarOpen(true)
                setZ(5)
              }} 
              style={{ cursor: 'pointer', zIndex: z, margin:'20px' }} 
              viewBox="0 0 50 45" width="50" height="50">
              <rect width="50" height="5"></rect>
              <rect y="20" width="50" height="5"></rect>
              <rect y="40" width="50" height="5"></rect>
            </svg>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
              <div 
                style={{ 
                  position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9 
                }} 
                onClick={() => {
                  setSidebarOpen(false)
                  setZ(10)
                }}
              >
                <div 
                  style={{position:'fixed',top:0,left:0,height:'100vh',width:'40vw',backgroundColor:'#fff',padding:'20px',boxShadow:'2px 0px 10px rgba(0,0,0,0.2)',marginTop:'5rem',overflowY:'scroll'}} 
                  onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside sidebar
                >
                  <div>{orders.map((o, ind) => (
                    <p key={ind} style={{ margin: '20px 0', cursor: 'pointer' }} onClick={() => {
                      setLocation(ind);
                      setSidebarOpen(false);
                      setFilters([
                        {f:'pending', c:false},
                        {f:'confirmed', c:false},
                        {f:'sent', c:false}
                      ])
                      }}>
                      {o.location}
                    </p>
                  ))}</div>
                  <div>
                    {users.map(u => <div key={u.name} style={{display:'flex'}}>
              <p>{u.name}</p>
            <input
        type="checkbox"
        name={u.name}
        checked={userFilters.includes(u.name)}
        onChange={()=>setUserFilters(!userFilters.includes(u.name) ? userFilters.concat(u.name) : userFilters.filter(us => us !== u.name))}/>
            </div>)}
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* Main Content */}
        {pickupOrders[location] && pickupOrders[location].location && <section style={{ height: '100%', flex: 1,display:'flex',flexDirection:'column',alignItems:'center' }}>
          <h1>{pickupOrders[location].location}</h1>
          <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
            {filters.slice(0, 3).map((f, i) => <div key={f.f} style={{display:'flex'}}>
              <p>{f.f}</p>
            <input
        type="checkbox"
        name={f.f}
        checked={f.c}
        onChange={()=>setFilters(filters.map((fi, ind) => i == ind ? {f:f.f, c:!f.c} : fi))}      />
            </div>)}
          </div>
          {pickupOrders.map(({location,orders})=>({location,orders: orders.filter(order => userFilters.length == 0 ? order : userFilters.includes(order.name))}))[location].orders.filter(f => filters.slice(0, 3).filter(f => f.c == false).length == 3 ? f : filters.filter(f => f.c == true).map(f => f.f).includes(f.status)).map((o, inner) => (
            <div key={inner} onClick={() => changePickupOrderStatus(pickupOrders[location].location,o._id,'input')}>
              <p>name: {o.name}</p>
              <p>date: {o.date}</p>
              <p>status: {o.status}</p>
              {o.status === 'confirmed' ? (
                <p>amount: {o.amount}</p>
              ) : o.status === 'input' ? (
                <input
                  type="text"
                  autoFocus
                  name="amount"
                  placeholder="amount"
                  value={o.amount}
                  onChange={e => changePickupOrderStatus(pickupOrders[location].location,o._id,o.status,e.target.value)}
                  onBlur={() => changePickupOrderStatus(pickupOrders[location].location,o._id,'confirmed',o.amount)}
                />
              ) : null}
            </div>
          ))}
          {newInput && <div ref={containerRef} style={{display:'flex',flexDirection:'column',width:'200px'}}>
      <input
        ref={inputRef}
        type="text"
        value={newName ? newName.name : ''}
        onFocus={handleInputFocus}
        onChange={e=>setName(e.target.value)}
        style={{border: '1px solid #ccc'}}
        onBlur={() => {
          setIsDropdownVisible(false);
                    const timestamp = Date.now();
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const finalDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                    if (newName && newName.name.length) {
                      addPickupOrder(pickupOrders[location].location, {
      user: newName,                  
      name: newName.name,
      date: finalDate,
      status: 'pending',
      amount: '',
    });
    addInput(false)
                    }}}
      />
      {isDropdownVisible && (
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: 1000,
          }}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  handleOptionClick(opt)}}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                }}
                onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
              >
                {opt.name}
              </li>
            ))
          ) : (
            <li style={{ padding: '8px', color: '#999' }}>No matches</li>
          )}
        </ul>
      )}
    </div>}
          {newInput == false &&<button onClick={()=>addInput(true)}>New order</button>}
        </section>}
      </section>
    </main>
  );
}
