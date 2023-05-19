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
  <div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-2xl font-bold'>
              <p>Tech experience </p>
            </div>
         
         <p>Proficient in HTML and CSS: I am skilled in writing clean and semantic HTML code to structure web pages effectively. Additionally, I have expertise in CSS styling, allowing me to create visually appealing designs and layouts.

Utilized React components and state management: I have experience in breaking down user interfaces into reusable React components, promoting code reusability and maintainability. I am also familiar with state management libraries such as Redux or React Context API to efficiently manage the application's state.

Integrated APIs with React: I have successfully integrated APIs into React applications, fetching and displaying data from the server. This enables me to create dynamic and data-driven web applications.

Implemented routing with Next.js: I am proficient in using Next.js's built-in routing system to create multi-page applications and handle client-side navigation. This allows for a seamless user experience with fast page transitions.

Implemented responsive design principles: I am skilled in using CSS media queries and responsive design techniques to ensure that web pages I develop adapt and display optimally across different devices and screen sizes.
         </p>
         </div>
          </div>
      </div>
    </div>
  );
};

export default About;
