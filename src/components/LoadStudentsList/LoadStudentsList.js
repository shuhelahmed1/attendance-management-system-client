import React from 'react';
import './LoadStudentsList.css';

const LoadStudentsList = ({student}) => {
    
    return (
        <>
            { 
                <div className='single-student'>
                    <p>Name: {student.displayName}</p>
                    <p>Student ID: {student._id}</p>
                    <p>Age: {student.age}</p>
                    <p>Religion: {student.religion}</p>
                    <p>Address: {student.address}</p>
                </div>
            }  
        </>
    );
};

export default LoadStudentsList;