import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './RegisterStudent.css';

const RegisterStudent = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,handleName,error, toggleLogin, professionRef, handleAddress} = useFirebase();
    return (
        <>
            <div className='register-form-container row row-cols-lg-10 row-cols-md-10 row-cols-10 mx-auto my-4'>
        <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} as a Student: </h2>
            <form className='cam-pavilion-form col' onSubmit={handleRegister}>
                <p>Name:<input className='text-input' required  onBlur={handleName} type="text" placeholder=''/></p>
                <p>Email: <input className='text-input' required  onBlur={handleEmail} type="email" placeholder=''/></p>
                <p>Address: <input className='text-input' required  onBlur={handleAddress} type="text" placeholder=''/></p>
                <p>Profession: <input className='text-input' defaultValue='student' readOnly ref={professionRef} type="text"/></p>
                <p>Password: <input className='text-input' required onBlur={handlePass} type="password" placeholder=''/></p>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1' className='mx-2'>Already registered?</label>
                <button className='common-button' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <h5 className='text-danger mt-3'>{error}</h5>
                <div>
                </div>
        </div>
        </>
    );
};

export default RegisterStudent;