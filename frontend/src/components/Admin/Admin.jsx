import React, { useEffect, useState } from 'react'

export default function Admin() {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(data=> setData(data || []))
        .catch(err=> console.log(err))
    },[]);
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>parent name</th>
                    <th>email</th>
                    <th>number</th>
                </tr>
                
            </thead>
            <tbody>
                {data.map((d,i)=>(
                    <tr key={i} >
                        <td>{d.name}</td>
                        <td>{d.parent_name}</td>
                        <td>{d.email}</td>
                        <td>{d.mobile_number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

  )
}
