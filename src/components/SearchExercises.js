import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({exercise, setExercise, bodyParts, setBodyParts}) => {

  const [search, setSearch] = useState('');
  // const[exercise, setExercise]=useState([]);
  // const[bodyParts, setBodyParts]=useState([]);
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);
  

  async function searchHandler() {
    if (search) {
      
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      // const searchedExercises= exercisesData.json();
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)

      )
      // console.log(exercisesData);
      setSearch('');
      setExercise(searchedExercises);
      window.scrollTo({top:2300, behavior:'smooth'})
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '280px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}

          placeholder="Search Exercises"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={searchHandler}
          className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
      </Box>
      <Box>
        <HorizontalScrollBar data={bodyParts} setBodyParts={setBodyParts} />
      </Box>
        
   
      
    </Stack>
  )
}

export default SearchExercises