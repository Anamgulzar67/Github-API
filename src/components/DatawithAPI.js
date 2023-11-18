// import { data } from 'autoprefixer';
import React,{useEffect} from 'react'
import { useState } from 'react';
const DatawithAPI = () => {
  const [users,setUsers]=useState([])
  const getUsers= async ()=>{
     const response= await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
     setUsers( await response.json());
    
  }
    useEffect(()=>{
      getUsers();
    },[]);
    
  return (
    <>
    <h2 className='text-center my-4'>Get APIs using useEffect</h2>
    <div className='container-fluid my-4 '>
        <div className='row text-center'>
          {
            users.map((curElem)=>{
          return(
           
              
          <div className='col-10 col-md-4 mt-5 '>
            <div className='card p-2 border bottom-2'>
                <div className='d-flex flex-row justify-content-between'>
                    <div className='image mx-4'><img src={curElem.thumbnailUrl} alt='block' className='rounded' width="150"/></div>
                    <div className=' w-50'>
                        <h4 className='mb-0 mt-0 textLeft'>ID= {curElem.id}</h4>
                        
                        
                        <span className='textLeft'><strong>Title=</strong>{curElem.title}</span>

                        
                        <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                             <div className='d-flex flex-column'> <span className='articles'>articles</span><span className='number1'>90</span></div>
                             <div className='d-flex flex-column'> <span className='articles'>Reviews</span><span className='number2'>23</span></div>
                             <div className='d-flex flex-column'> <span className='articles'>comments</span><span className='number3'>43</span></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

           
          )

            })
          }
        </div>

    </div>
    </>
  )
}

export default DatawithAPI
