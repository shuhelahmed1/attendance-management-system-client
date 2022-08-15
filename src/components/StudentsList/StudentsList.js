import React, { useEffect, useState } from 'react';
import LoadStudentsList from '../LoadStudentsList/LoadStudentsList';
import './StudentsList.css';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const date = new Date();
    const dateString = date.toDateString();
    
    useEffect(()=>{
        fetch(`https://secure-harbor-22669.herokuapp.com/students`)
        .then(res=>res.json())
        .then(data=>{
            setStudents(data)
        })
    },[])
    return (
        <>
        <div className='text-center my-4'>
        <h2>Attendance List</h2>
        <h4>Date: {dateString}</h4>
        <div className='d-grid students-section'>
            
            { students.length === 0 ? <h4>Loading data...</h4> :
                students.map(student=> <LoadStudentsList key={student._id} student={student}></LoadStudentsList>)
            }
        </div>
        </div>
        </>
    );
};

export default StudentsList;