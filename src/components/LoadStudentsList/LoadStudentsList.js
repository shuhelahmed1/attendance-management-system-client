import React from 'react';
import './LoadStudentsList.css';

const LoadStudentsList = ({student}) => {
    const {displayName,_id,address,attendance} = student;

    const handleAttendance = ()=>{
        fetch(`http://localhost:5000/students/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(student)
            })
            .then(res=>res.json())
            .then(data=>{
                alert('Attendance update successful')
                window.location.reload()
        }
        )
    }
    return (
        <>
            { 
                <div className='single-student'>
                    <p>Name: {displayName}</p>
                    <p>Student ID: {_id}</p>
                    <p>Address: {address}</p>
                    <p>Attendance: {attendance}</p>
                    {
                        attendance === 'present' ? <button className='common-button' onClick={handleAttendance}>Absent</button> : <button className='common-button' onClick={handleAttendance}>Present</button>
                    }
                    

                </div>
            }  
        </>
    );
};

export default LoadStudentsList;