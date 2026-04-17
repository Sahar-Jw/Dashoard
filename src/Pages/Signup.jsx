import { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [parentData, setParentData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('first_name', parentData.first_name);
        formData.append('last_name', parentData.last_name);
        formData.append('user_name', parentData.user_name);
        formData.append('email', parentData.email);
        formData.append('password', parentData.password);
        formData.append('password_confirmation', parentData.password_confirmation);
        if (parentData.image_url) {
            formData.append('profile_image', parentData.image_url);
        }

        try {
            const res = await fetch('https://vica.website/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                },
                body: formData,
            });
            const data = await res.json();
            console.log('API response:', data);
            localStorage.setItem('token', `Bearer ${data.data.token}`);
            localStorage.setItem('user', JSON.stringify(data.data.user));
            navigate('/dashboard');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    const inputs = [
        {
            htmlFor:'firstName',
            label:'First Name',
            placeholder:'First Name',
            type:'text',
            name:'first_name',
            id:'firstName'
        },
        {
            htmlFor:'lastName',
            label:'Last Name',
            placeholder:'Last Name',
            type:'text',
            name:'last_name',
            id:'lastName'
        },
        {
            htmlFor:'userName',
            label:'User Name',
            placeholder:'User Name',
            type:'text',
            name:'user_name',
            id:'userName'
        },
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
            placeholder:'********',
            type:'password',
            name:'password',
            id:'password'
        },
        {
            htmlFor:'password',
            label:'Confirm',
            placeholder:'********',
            type:'password',
            name:'password_confirmation',
            id:'password'
        },
        {
            htmlFor:'profileImage',
            label:'Profile Image',
            type:'file',
            hidden:false,
            name:'image_url',
            id:'profileImage',
            fileCard:'lg:w-[90px] lg:h-[90px] md:w-[80px] md:h-[80px] w-[70px] h-[70px] bg-sec-bg',


        },
    ]
    return (
        <div className="py-8 bg-[url(/assets/img/authbg.jpg)] h-screen bg-no-repeat bg-cover flex justify-center items-center">
        <Form
            title={'Sign Up'}
            subTitle={'Create a account to continue'}
            inputs={inputs}
            submit={'Sign Up'}
            link={
                {
                    content:'Already have an account?',
                    url:'/signin',
                    linkContent:'Sign In'
                }
            }
            setParentData={(data) => {
                setParentData(data);
                handleSubmit();
            }}
            style={true}
        >
        </Form>
        </div>
    )
}
