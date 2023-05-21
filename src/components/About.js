import React from 'react'

const About = () => {
  const link = 'https://github.com/harshitha-2201/moviesearchapp';
  return (
    <div>
    <center>
      <h1 className='text-blue-300 pt-16'>This is  About of React Movie App</h1>
      <p className='text-white pt-3'>This is an React Movie Search App It Includes Movie Name , Poster,Geners,RealsedDate</p>
      <p className='text-white'>If In case This Showing Nothing to related to movie Please Try Again with Correct Spell</p>
      <p className='text-blue-100'>If you have Detail Information About this App Check Out Here</p>
      <a href={link} className='text-blue-500 pt-3'>React Movie App</a>
    </center>
    </div>
  )
}

export default About
