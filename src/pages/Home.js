import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { useState } from 'react'

const Home = () => {
  const[exercise, setExercise]=useState([]);
  const[bodyParts, setBodyParts]=useState([]);
// console.log(bodyParts)
  return (
    <Box style={{ height: '100vh', overflow: 'scroll' }}>
        <HeroBanner/>
      <SearchExercises 
      exercise={exercise} 
      setExercise={setExercise} 
      bodyParts={bodyParts}
      setBodyParts={setBodyParts}/>
      
      <Exercises
      setExercise={setExercise} 
      bodyParts={bodyParts}
      setBodyParts={setBodyParts}
      exercise={exercise}
      />
    </Box>
    
    
    
  )
}

export default Home