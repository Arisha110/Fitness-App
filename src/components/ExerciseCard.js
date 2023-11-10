import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
  return (
    
    <Box width="300px" height="150px" marginBottom="10rem" borderTop='2px orange' gap='3px'>
    
      <Link to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl}></img>
      </Link>
      

      <Stack direction="row" gap="1rem">
        <Box sx={{width:'auto', paddingInline: '2rem', backgroundColor: 'yellow', borderRadius: '20px', height: '2rem'}} display="flex" alignItems="center" justifyContent="center">{exercise.bodyPart}</Box>
        <Box sx={{width:'auto', paddingInline: '2rem', backgroundColor: 'red', borderRadius: '20px', height: '2rem'}} display="flex" alignItems="center" justifyContent="center">{exercise.target}</Box>
        
      </Stack>

     <Typography variant='h4' textTransform='capitalize' marginTop='3px'>{exercise.name}</Typography>
    </Box>
    
    
  )
}

export default ExerciseCard