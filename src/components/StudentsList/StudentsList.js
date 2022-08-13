import React, { useEffect, useState } from 'react';
import LoadStudentsList from '../LoadStudentsList/LoadStudentsList';
import './StudentsList.css';

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/students`)
        .then(res=>res.json())
        .then(data=>{
            setStudents(data)
        })
    },[])
    return (
        <>
        <div className='d-grid students-section'>
            {
                students.map(student=> <LoadStudentsList key={student._id} student={student}></LoadStudentsList>)
            }
        </div>
        </>
    );
};

export default StudentsList;