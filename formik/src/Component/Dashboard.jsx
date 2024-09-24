
import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import AxiosService from '../utility/ApiService';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Dashboard() {
  let [user,setUser] = useState([])
  let navigate = useNavigate();
  const getData = async() => {
    try{
      let res = await AxiosService.get('/formikbookauthor');
      if(res.status === 200){
        setUser(res.data)
      }
    }
    catch(error){
      console.log('Something went wrong while fetching data')
    }
  }
  let handleDelete = async(id) => {
    try{
      let res =  await AxiosService.delete(`/formikbookauthor/${id}`)
      if(res.status === 200){
        getData()
      }

    }
    catch(error){
         console.log('Something wrong while Deleting')
    }
  }
  


  useEffect(()=>{getData()},[]);
  return (
    <div className='bookRecords'>
      <div className="container">
      <div className="bookRecordsBlock">
          <div className="detailsOfBook">
            <h2  className='mb-3'>Details of Books</h2>
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN No</th>
                  <th>Publication Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((e,i)=>{
                    return <tr key={e.id}>
                    <td>{i+1}</td>
                    <td>{e.bookTitle}</td>
                    <td>{e.bookAuthor}</td>
                    <td>{e.bookISBNNo}</td>
                    <td>{e.booksPublishDate}</td>
                    <td  style={{width:"133px"}}>
                      <button className="btn editBtn" onClick={()=> navigate(`/editrecords/${e.id}`)}>Edit</button>
                      <button className="btn delBtn" onClick={()=>{handleDelete(e.id)}}>Delete</button>
                      </td>
                  </tr>
                  })
                }
                
              </tbody>
             </Table>
          </div>
          <div className="mt-5 detailsOfAuthor">
            <h2 className='mb-4'>Details of Author</h2>
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Author Name</th>
                  <th>Date Of Birth</th>
                  <th>Bio</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((e,i)=>{
                    return <tr key={e.id}>
                    <td>{i+1}</td>
                    <td>{e.authorName}</td>
                    <td>{e.dateOfBirth}</td>
                    <td>{e.authorbio}</td>
                    <td style={{width:"133px"}}>
                    <button className="btn editBtn" onClick={()=> navigate(`/editrecords/${e.id}`)}>Edit</button>
                    <button className="btn delBtn" onClick={()=>{handleDelete(e.id)}}>Delete</button></td>
                  </tr>
                  })
                }
                
              </tbody>
             </Table>
          </div>
      </div>
      </div>      
    </div>
  )
}

export default Dashboard
