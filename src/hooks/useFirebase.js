import {  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  { useState } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }

    const handleName = e =>{
        setName(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePass = e =>{
        setPassword(e.target.value)
    }
    const handleRegister = e =>{
        e.preventDefault()
        if(isLogin){
            processLogin(email,password)
        }
        else{
            registerNewUser(email,password)
        }
        e.target.reset();
        
    }
    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            const newUser = {email, displayName: name}
            setUser(newUser)
            // // save user to the database
            // saveUser(email,name,'POST');
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return {
        handleEmail,
        handlePass,
        handleName,
        handleRegister,
        error,
        user,
        isLogin,
        toggleLogin
    };
};

export default useFirebase;