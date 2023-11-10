import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyParts, setBodyParts }) => {
  

  return (

    <Stack
      className='bodyPart-card'
      type="button"
      justifyContent="center"
      alignItems="center"
      sx={{
        borderTop: bodyParts == item ? '4px solid #ff2625' : {
          backgroundColor: '#fff',
          borderBottomLeftRadius: '20px',
          width: '170px',
          height: '170px',
          cursor: 'pointer',
          gap: '37px'
        }
      }
      }
    >
      <img src={Icon} width='40px' height='40px'></img>
      <Typography>{item}</Typography>
    </Stack>


  )
}

export default BodyPart