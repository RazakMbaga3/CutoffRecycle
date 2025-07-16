"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useAuth } from "../context/history";

export default function Home() {
  const {users, activeUser, signUp, login, logout, updateUser} = useAuth()
  const router = useRouter();
  const searchParams = useSearchParams()
  const from = searchParams.get('from')
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => signUp(name, email, password)
  useEffect(() => {
    if (activeUser) {
    router.push(from || "/")
    }
  }, [users, activeUser, from, router])
  return (
    <div className={styles.page}>
      <main style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'5rem'}}>
      <div style={{ padding: "20px",display:'flex',flexDirection:'column',alignItems:'center' }}>
      <h1>Sign Up</h1>
      <div style={{display:'flex', margin:'20px 0'}} className={styles.inputs}>
      <input type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{border:'1px solid black',borderRadius:'10px',paddingLeft: '10px'}}
      />
      <input type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.middle}
        style={{border:'1px solid black',borderRadius:'10px',paddingLeft: '10px'}}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{border:'1px solid black',borderRadius:'10px',paddingLeft: '10px'}}
      />
      </div>
      <button onClick={handleSignUp} className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg">Sign Up</button>
    </div>
    <p>Already have an account <Link style={{color:'rgb(80 173 50/1)'}} href={from ? `/login?from=${from}` : "/login"}>Login</Link></p>
      </main>
    </div>
  );
}
