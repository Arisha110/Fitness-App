import React, { useEffect } from 'react'
import { Box, Typography , Stack} from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utils/fetchData'


const Exercises = ({ exercise, setExercise, bodyParts }) => {

  return (
    <Box id="exercises">
      <Typography variant='h3' padding="1rem" fontWeight="semi-bold">
        Showing Results
      </Typography>
<Stack marginTop="30px" direction="row" gap="200px" display="flex" flexWrap="wrap " alignItems="center" justifyContent="center">
  {
        exercise.map((exercise, index)=>{
          return(
            <ExerciseCard exercise={exercise} key={index}>

            </ExerciseCard>
          );
        })
      }
</Stack>
      

    </Box>
  )
}

export default Exercises