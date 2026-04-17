import {useEffect, useState } from "react";
import Form from "../components/Form/Form"
import { useNavigate } from "react-router-dom";

export default function SignIn() {
        const [parentData, setParentData] = useState({});
        const navigate = useNavigate();
        useEffect(() => {
            if (parentData.email && parentData.password) {
                
                fetch('https://vica.website/api/task-login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'},
                    body:JSON.stringify(parentData)
            }).then(res => res.json())
            .then(res => {
                localStorage.setItem('token', `Bearer ${res.token}`);
                localStorage.setItem('user', JSON.stringify(res.user));
                navigate('/dashboard');
            })
            .catch(error => console.error('Error submitting data:', error)); 
        }
    }, [parentData]);
            
    const inputs = [
        {
            htmlFor:'email',
            label:'Email',
            placeholder:'Email',
            type:'email',
            name:'email',
            id:'email'
        },
        {
            htmlFor:'password',
            label:'password',
            placeholder:'*********',
            type:'password',
            name:'password',
            id:'password'
        },
    ]
    return (
        <div className="bg-[url(/assets/img/authbg.jpg)] h-screen bg-no-repeat bg-cover flex justify-center items-center">
            <Form
                title={'Sign In'}
                subTitle={'Please enter your email and password to continue'}
                inputs={inputs}
                submit={'Sign In'}
                link={
                    {
                        content:'Don’t have an account?',
                        url:'/',
                        linkContent:'Sign up'
                    }
                }
                setParentData={setParentData}
                style={true}
            ></Form>
        </div>
    )
}
