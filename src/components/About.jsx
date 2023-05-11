import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Education & Tech Stack </p>
            </div>
            <div>
              <p>Full stack web development bootcamp - Moringa School</p>
              <p>Bachelor of Economics (3rd year) -UON</p>  
            
   
     <p>I am proficient in Reactjs, JavaScript, tailwindcss </p>
  
       <p>I am currently learning Ruby on Rails & working with restful apis</p >
</div>
          </div>
      </div>
    </div>
  );
};

export default About;
