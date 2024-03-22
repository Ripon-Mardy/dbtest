'use client'
import React, { useEffect, useState } from 'react'


const About = () => {
const [getData, setGetData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/data');
            if(!response.ok) {
                throw new Error('Fetching data failed')
            }

            const jsonData = await response.json();
            setGetData(jsonData)
        } catch (error) {
            console.log(error);
        } // end try catch
    } // end fetchDAta
    fetchData()
}) // end useEffect

  return (
    <>
    <h1 className='text-4xl text-center uppercase font-semibold'>About section</h1>

    <div>
       {
        getData.map(item => (
            <div key={item._id}>
                <h1> {item.name} </h1>
                <p> {item.message} </p>
            </div>
        ))
       }
    </div>
    </>
  )
}

export default About
