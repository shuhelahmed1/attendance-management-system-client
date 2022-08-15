import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './RegisterStudent.css';

const RegisterStudent = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,handleName,error, toggleLogin, professionRef,attendanceRef, handleAddress,message} = useFirebase();
    return (
        <>
            <div className='register-form-container row row-cols-lg-10 row-cols-md-10 row-cols-10 mx-auto my-4'>
        <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} as a Student: </h2>
            <form className='colm my-3' onSubmit={handleRegister}>
                <p className='text-container'>Name:<input className='text-input' required  onBlur={handleName} type="text" placeholder=''/></p>
                <p className='text-container'>Email: <input className='text-input' required  onBlur={handleEmail} type="email" placeholder=''/></p>
                <p className='text-container'>Address: <input className='text-input' required  onBlur={handleAddress} type="text" placeholder=''/></p>
                <p className='text-container'>Profession: <input className='text-input' defaultValue='student' readOnly ref={professionRef} type="text"/></p>
                <p className='text-container'>Attendance: <input className='text-input' defaultValue='present' readOnly ref={attendanceRef} type="text"/></p>
                <p className='text-container'>Password: <input className='text-input' required onBlur={handlePass} type="password" placeholder=''/></p>
                <div className='text-container my-2'>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1' className='mx-2'>Already registered?</label>
                </div>
                
                <button className='common-button mx-auto d-block' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <h5 className='text-danger mt-3'>{error}</h5>
                <h5 className='text-success text-center my-0'>{message}</h5>
                <div>
                </div>
        </div>
        </>
    );
};

export default RegisterStudent;