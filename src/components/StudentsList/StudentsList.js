import React, { useEffect, useState } from 'react';
import LoadStudentsList from '../LoadStudentsList/LoadStudentsList';

const StudentsList = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/users`)
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])
    return (
        <>
        <div className=''>
            {
                users.map(user => <LoadStudentsList key={user._id} user={user}></LoadStudentsList>)
            }
        </div>
        </>
    );
};

export default StudentsList;