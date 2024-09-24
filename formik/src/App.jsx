import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import AddRecord from './Component/AddRecord'
import NavBar from './Component/NavBar';
import EditRecords from './Component/EditRecords';
import './App.css'


function App() {
  

  return (
    <>
       <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/add-records' element={<AddRecord/>}/>
            <Route path='/editrecords/:id' element= {<EditRecords/>}/>
           </Routes>
        </BrowserRouter>
    </>
  )
}

export default App