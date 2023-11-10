import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'

function App() {



  return (
    <Box height="100%" width="400px" sx={{width:{xl:'1488px'}}} m="auto" overflow="scroll">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>

      
    </Box>
  );
}

export default App;
