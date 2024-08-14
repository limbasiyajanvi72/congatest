import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

function Jobs() {
    const[job,setJob]=useState([]);
    const[indexToDisplay,setIndexToDisplay]=useState(4);

    useEffect(()=>{
       getData();  
        
    },[])
    console.log("data:",job);
    

    function getData(){
        
        axios.get("https://ca5fbb7b-18a4-488c-ae84-93fc375771c7.mock.pstmn.io/listings")
        .then((res)=>
        setJob(res.data)
        )
        .catch((err)=>err.message)
    }

    const applyForJob=(e)=>{
            job;;;
             prompt("Please enter your name:", "Janvi");
             prompt("Enter location:");

        


    }

   

  return (
    <div>
        {job.map((data)=> 
        
        
        (
        <section className=''>
            <section className='flex justify-center items-center gap-5 bg-[#353935]   text-[#F2F0EF] '>
            <section className='bg-[#353935]'>

        <section className='border rounded-[10px] w-[600px] my-5 p-4'>
            <article className='flex justify-between gap-8 '>
                <div className='flex flex-col'>
                <div className='font-semibold'>{data.title}</div>
                <div>{data.company}</div>
                <div>{data.location}</div>
                </div>
                <div className='flex flex-col text-right'>
                <div>{data.id}</div>
                <div>{data.contact}</div>
                </div>
            </article>
            <article className='flex flex-col'>
                <div>salary from: {data.salary_from}</div>
                <div>Salary to: {data.salary_to}</div>
            </article>
            <article className='flex justify-between '>
                <div className='felx flex-col'>
                    <div>{data.emp_type}</div>
                    <div>{data.job_cat}</div>
                    <button className='bg-indigo-500 text-white px-5 py-2 rounded-md' onClick={(e)=>applyForJob(e)}>Apply</button>
                </div>
                <div className='felx flex-col'>
                    <div>{data.is_remote}</div>
                    <div>{data.opening}</div>
                </div>
            </article>
          
         
          </section>
          </section>
          </section>
          </section>)
  

)}
<button onClick={()=>setIndex(index+4)} >Load More</button>
     
    </div>
  )
}

export default Jobs
