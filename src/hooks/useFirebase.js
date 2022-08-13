import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import  { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [religion, setReligion] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const [teacher, setTeacher] = useState(false);

    const toggleLogin = e =>{
        setIsLogin(e.target.checked)
    }

    const handleName = e =>{
        setName(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handleAge = e =>{
        setAge(e.target.value)
    }
    const handleReligion = e =>{
        setReligion(e.target.value)
    }
    const handleAddress = e =>{
        setAddress(e.target.value)
    }
    const handleProfession = e =>{
        setProfession(e.target.value)
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
            const newUser = {email, displayName: name, profession: profession, age: age, religion: religion, address: address}
            setUser(newUser)
            if(profession==='student'){
            // save student to the database
            saveStudent(email,name,profession,age,religion,address,'POST');
            }
            else if(profession==='teacher'){
            // save student to the database
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

    const saveStudent = (email, displayName,profession,age,religion,address, method) =>{
        const user = {email, displayName,profession,age,  religion, address}
        console.log(user)
        fetch('http://localhost:5000/students',{
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
        fetch('http://localhost:5000/teachers',{
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
        fetch(`http://localhost:5000/teachers/${user.email}`)
        .then(res=>res.json())
        .then(data=> setTeacher(data.teacher))
    },[user.email])

    return {
        handleEmail,
        handlePass,
        handleName,
        handleProfession,
        handleAge,
        handleReligion,
        handleAddress,
        handleRegister,
        error,
        user,
        isLogin,
        toggleLogin,
        logOut,
        teacher
    };
};

export default useFirebase;