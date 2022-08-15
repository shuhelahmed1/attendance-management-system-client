import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  { useEffect, useRef, useState } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const [teacher, setTeacher] = useState(false);
    const [message, setMessage] = useState('')
    const professionRef = useRef();
    const attendanceRef = useRef();

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }

    const handleName = e =>{
        setName(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handleAddress = e =>{
        setAddress(e.target.value)
    }

    const profession = professionRef?.current?.value;
    const attendance = attendanceRef?.current?.value;
    
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
            const newUser = {email, displayName: name, profession: profession, address: address, attendance: attendance}
            setUser(newUser)
            setMessage('Registration successful')
            if(profession==='student'){
            // save student to the database
            saveStudent(email,name,profession,address,attendance, 'POST');
            }
            else if(profession==='teacher'){
            // save teacher to the database
            saveTeacher(email,name,profession,'POST');
            }
            setError('')
        })
        
        .catch(error=>{
            setError(error.message)
        })
    }
    const processLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email,password)
        .then((result)=>{
            setUser(result.user);
            setMessage('Login successful')
            setError('')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const logOut = ( ) =>{
        signOut(auth)
        .then(() => {
            setUser({})
          }).catch((error) => {
          })
    }
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
        });
        return ()=> unsubscribed;
    },[auth])

    const saveStudent = (email, displayName,profession,address, attendance, method) =>{
        const user = {email, displayName,profession, address, attendance}
        fetch('https://secure-harbor-22669.herokuapp.com/students',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
        })
    }

    const saveTeacher = (email, displayName,profession, method) =>{
        const user = {email, displayName,profession}
        console.log(user)
        fetch('https://secure-harbor-22669.herokuapp.com/teachers',{
            method: method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            
        })
    }

    useEffect(()=>{
        fetch(`https://secure-harbor-22669.herokuapp.com/teachers/${user.email}`)
        .then(res=>res.json())
        .then(data=> setTeacher(data.teacher))
    },[user.email])

    return {
        handleEmail,
        handlePass,
        handleName,
        professionRef,
        attendanceRef,
        handleAddress,
        handleRegister,
        error,
        user,
        isLogin,
        toggleLogin,
        logOut,
        teacher, 
        message
    };
};

export default useFirebase;