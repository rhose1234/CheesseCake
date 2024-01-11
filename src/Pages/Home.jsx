import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <section className='hero vh-100' id='hero'>
       <div className="container">
        <div className="row d-flex align-items-center ">
            <div className="col-lg-6 col-md-12">
           <h1 className='display-5 font-bold mt-5  mb-5'>Bite The World of Cheesecake Wonders</h1>
           <span className='mt-5 mb-5'>We always make our customer happy by providing <br /> as many choices as possible </span>

           <div className="d-flex btns ">
            <Link className='rounded-pill font-bold'> Get Started</Link>
            <Link className='watch rounded-pill font-bold'> Watch Demo &nbsp; <FaCirclePlay /> </Link>
           </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src="/src/assets/img/Heroimage.svg" alt="cake" className='w-100 h-100' />
            </div>
        </div>
       </div>
       </section>

       <section className='About' id='about'>
            
       </section>
    </div>
  )
}

export default Home