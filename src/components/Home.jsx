import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

      {/* {container} */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-400'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Verdah Haq.</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a student Front End Developer</h2>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-400 hover:border-purple-400'><Link to="work">View Projects</Link>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
             </button>
          </div>

      </div>

    </div>
  )
}

export default Home