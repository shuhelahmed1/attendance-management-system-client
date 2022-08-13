import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const RegisterStudent = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,handleName,error, toggleLogin, handleProfession, handleAge,handleReligion, handleAddress} = useFirebase();
    return (
        <>
            <div className='register-form-container row row-cols-lg-10 row-cols-md-10 row-cols-10 mx-auto my-4'>
        <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} as a Student: </h2>
            <form className='cam-pavilion-form col' onSubmit={handleRegister}>
                <input className='text-input' required  onBlur={handleName} type="text" placeholder='Name'/>
                <input className='text-input' required  onBlur={handleEmail} type="email" placeholder='Email'/>
                <input className='text-input' required  onBlur={handleAge} type="text" placeholder='Age'/>
                <input className='text-input' required  onBlur={handleReligion} type="text" placeholder='Religion'/>
                <input className='text-input' required  onBlur={handleAddress} type="text" placeholder='Address'/>
                <input className='text-input' onBlur={handleProfession} type="text" placeholder='profession: student/teacher'/>
                <input className='text-input' required onBlur={handlePass} type="password" placeholder='Password'/>
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