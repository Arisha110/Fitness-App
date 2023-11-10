import React, {useContext} from 'react'
import { Box, Typography, Stack} from '@mui/material'
import BodyPart from './BodyPart'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard'

  // const LeftArrow = () => {
  //   const { scrollPrev } = useContext(VisibilityContext);
  
  //   return (
  //     <Typography onClick={() => scrollPrev()} className="right-arrow">
  //       <img src={LeftArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };
  
  // const RightArrow = () => {
  //   const { scrollNext } = useContext(VisibilityContext);
  
  //   return (
  //     <Typography onClick={() => scrollNext()} className="left-arrow">
  //       <img src={RightArrowIcon} alt="right-arrow" />
  //     </Typography>
  //   );
  // };
const HorizontalScrollBar = ({ data, setBodyParts, bodyParts }) => {


  return (
 
    <Stack direction="row" overflowX='scroll' alignItems='center' justifyContent='center' flexWrap={{sm:'wrap'}} >
    {
      data.map((item)=>(
        <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 20px"
        gap="20px"
        marginBlock="20px"
        >
          <BodyPart item={item} bodyParts={bodyParts} setBodyParts={setBodyParts}></BodyPart>
          
        </Box>
      ))
      }
    
</Stack>
  )
}

export default HorizontalScrollBar