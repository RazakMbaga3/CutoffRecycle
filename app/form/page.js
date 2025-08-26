"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import citiesData1 from "../../public/data1.json";
import citiesData2 from "../../public/data2.json";
import citiesData3 from "../../public/data3.json";

const allCities = [...citiesData1,
  ...citiesData2,
  ...citiesData3,
];

export default function FormPage() {
const [form, setForm] = useState(null)
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [collectors, setCollectors] = useState(null)
const [time, setTime] = useState(null)
const [query, setQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    if (query.length < 2) {
      setFilteredCities([]);
      return;
    }

    const results = allCities.filter((c) =>
      `${c.city} ${c.country}`.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCities(results.slice(0, 10));  // limit to 10 results
  }, [query]);

  const handleSelect = (city) => {
    setQuery(`${city.city}, ${city.country}`);
    setShowDropdown(false);
  };
  const handleSubmit = async () => {
  const data = {name,email,phone,location: query,collectors,time,formType: form};

  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Form submitted successfully!");
    } else {
      alert("Failed to submit form.");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting form.");
  }
};

  return (
    form ? <div style={{marginTop:'5rem',display:'flex',flexDirection:'column',alignItems:'center',height:'70vh',justifyContent:'space-evenly'}}>
      <h1>Become a collector</h1>
      <div>
        <label>Name: {form == 'center' && '(The name of the collection center)'}</label>
        <input style={{border: '1px solid #ccc'}} type="text"name="name"required value={name}onChange={e=>setName(e.target.value)}/>
      </div>
      <div>
        <label>Email</label>
        <input style={{border: '1px solid #ccc'}} type="text"name="email"required value={email}onChange={e=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Phone number</label>
        <input style={{border: '1px solid #ccc'}} type="text"name="phone"required value={phone}onChange={e=>setPhone(e.target.value)}/>
      </div>
      <div className="relative w-80">
        <label>Location</label>
        <input style={{border: '1px solid #ccc'}} type="text"name="location"required value={query}
        onChange={e => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}/>
        {showDropdown && query.length > 1 && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <li
                key={`${city.city}-${city.country}`}
                onClick={() => handleSelect(city)}
                className="cursor-pointer px-3 py-2 hover:bg-blue-100"
              >
                {city.city}, {city.country}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500">No results</li>
          )}
        </ul>
      )}
      </div>
      {form == 'center' && <div>
        <p>About how many collectors do you have</p>
        <div style={{display:'flex'}}>
                    <div>
                        <input type="radio"id="0 - 10"value="0 - 10"
                            checked={collectors === "0 - 10"}
                            onChange={() => setCollectors("0 - 10")}/>
                        <label htmlFor="0 - 10">0 - 10</label>
                    </div>
                    <div>
                        <input type="radio"id="10 - 20"value="10 - 20"
                            checked={collectors === "10 - 20"}
                            onChange={() => setCollectors("10 - 20")}/>
                        <label htmlFor="10 - 20">10 - 20</label>
                    </div>
                    <div>
                        <input type="radio"id="20 - 30"value="20 - 30"
                            checked={collectors === "20 - 30"}
                            onChange={() => setCollectors("20 - 30")}/>
                        <label htmlFor="20 - 30">20 - 30</label>
                    </div>
                    <div>
                        <input type="radio"id="More than 30"value="More than 30"
                            checked={collectors === "More than 30"}
                            onChange={() => setCollectors("More than 30")}/>
                        <label htmlFor="More than 30">More than 30</label>
                    </div>
                </div>
      </div>}
      <div>
        <p>About how long do you think it will take to ship the hair to our factory in arusha</p>
        <div style={{display:'flex'}}>
                    <div>
                        <input type="radio"id="less than 2 days"value="less than 2 days"
                            checked={time === "less than 2 days"}
                            onChange={() => setTime("less than 2 days")}/>
                        <label htmlFor="less than 2 days">less than 2 days</label>
                    </div>
                    <div>
                        <input type="radio"id="2 - 5 days"value="2 - 5 days"
                            checked={time === "2 - 5 days"}
                            onChange={() => setTime("2 - 5 days")}/>
                        <label htmlFor="2 - 5 days">2 - 5 days</label>
                    </div>
                    <div>
                        <input type="radio"id="more than 5 days"value="more than 5 days"
                            checked={time === "more than 5 days"}
                            onChange={() => setTime("more than 5 days")}/>
                        <label htmlFor="more than 5 days">more than 5 days</label>
                    </div>
                </div>
      </div>
      <button onClick={handleSubmit} className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg">Submit</button>
    </div>
    : <div style={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'space-evenly',flexWrap:'wrap'}}>
        <button className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg" onClick={()=>setForm('center')}>Collection center</button>
        <button className="px-8 py-4 bg-brand-green text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-500 transform hover:-translate-y-1 inline-flex items-center text-lg" onClick={()=>setForm('ind')}>Individual collector</button>
    </div>
  );
}
