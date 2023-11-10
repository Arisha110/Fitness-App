import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

const ExerciseDetail = () => {
    const[exeriseDetail, setExerciseDetail]=useState({});
    const[exerciseVideos, setExerciseVideos]= useState([])
    const {id} = useParams();

    useEffect(()=>{
        const fetchExercisesData = async() =>{
          
          const exerciseDbUrl= 'https://exercisedb.p.rapidapi.com';
          const youtubeUrl= 'https://youtube-search-and-download.p.rapidapi.com';
          const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
         const youtubeSearch= await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);          
          console.log(youtubeSearch.contents)
          setExerciseDetail(exerciseDetailData);
          setExerciseVideos(youtubeSearch.contents);
        }
        fetchExercisesData();
    }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exeriseDetail}></Detail>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exeriseDetail.name}></ExerciseVideos>
      
    </Box>
  )
}

export default ExerciseDetail