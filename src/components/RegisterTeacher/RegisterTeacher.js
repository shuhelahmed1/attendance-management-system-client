import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const RegisterTeacher = () => {
    const {handleRegister,isLogin,handleEmail,handlePass,handleName,error, toggleLogin, professionRef, message} = useFirebase();
    return (
        <>
            <div className='register-form-container row row-cols-lg-10 row-cols-md-10 row-cols-10 mx-auto my-4'>
        <h2 style={{fontWeight: 'bold'}}>{isLogin ? 'Login' : 'Register'} as a Teacher: </h2>
            <form className='col' onSubmit={handleRegister}>
                <p className='text-container'>Name: <input className='text-input' required  onBlur={handleName} type="text" placeholder=''/></p>
                <p className='text-container'>Email: <input className='text-input' required  onBlur={handleEmail} type="email" placeholder=''/></p>
                <p className='text-container'>Profession: <input className='text-input' defaultValue='teacher' readOnly ref={professionRef} type="text"/></p>
                <p className='text-container'>Password: <input className='text-input' required onBlur={handlePass} type="password" placeholder=''/></p>
                <div className='text-container'>
                <input onChange={toggleLogin} type="checkbox" id='check1' placeholder='pass'/>
                <label htmlFor='check1' className='mx-2'>Already registered?</label>
                </div>
                
                <button className='common-button d-block mx-auto' type='submit'>{isLogin ? 'Login' : 'Register'}</button>
                </form>
                <h5 className='text-danger mt-3'>{error}</h5>
                <h5 className='text-success text-center my-0'>{message}</h5>
             
                <div>
                </div>
        </div>
        </>
    );
};

export default RegisterTeacher;