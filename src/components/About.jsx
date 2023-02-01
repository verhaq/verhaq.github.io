import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-300'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Nice to meet you! Please take a look around.</p>
            </div>
            <div>
                <p>
            I entered the tech world about 5 months ago and am currently attending Hackbright's Bright Paths Program in partnership with Devmountain. 
            Throughout the bootcamp, I developed my front end and back end skills using programs such as Javascript, HTML, CSS, SQL, and Axios.
            I have experience building databases, utilizing APIs, and creating apps. I am currently learning React and am very excited to continue building my knowledge.
             In my free time, I enjoy embroidering, spending time outdoors, and playing video games.

                </p>
            </div>

                </div>


        </div>

    </div>
  )
}

export default About