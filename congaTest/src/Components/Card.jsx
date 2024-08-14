import React from 'react'

function Card({title,company,location,id,salary_from,salary_to,emp_type,job_cat,is_remote,opening}) {
  return (
    <section className='border rounded-[10px]'>
        <article className='flex jsutify-between '>
            <div className='flex flex-col'>
            <div>{title}</div>
            <div>{company}</div>
            <div>{location}</div>
            </div>
            <div className='flex flex-col'>
            <div>{id}</div>
            <div>{contact}</div>
            </div>
        </article>
        <article className='flex flex-col'>
            <div>{salary_from}</div>
            <div>{salary_to}</div>
        </article>
        <article className='flex justify-between '>
            <div className='felx flex-col'>
                <div>{emp_type}</div>
                <div>{job_cat}</div>
            </div>
            <div className='felx flex-col'>
                <div>{is_remote}</div>
                <div>{opening}</div>
            </div>
        </article>

      
    </section>
  )
}

export default Card
