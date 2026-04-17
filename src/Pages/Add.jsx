import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form"
import { useEffect, useState } from "react"

export default function Add() {
    const [parentData, setParentData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        if (parentData.name && parentData.price) {
            const formData = new FormData();
            formData.append('name', parentData.name);
            formData.append('price', parentData.price);
            if (parentData.image_url) {
                formData.append('image', parentData.image_url);
            }
            fetch('https://vica.website/api/items',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Authorization': localStorage.getItem('token')
                },
                body: formData
            }).then(res => res.json())
            .then(res => {
                console.log(res);
                navigate('/dashboard');
            })
            .catch(error => console.log('Error submitting data:', error));
        }
    }, [parentData])
    const inputs = [
        {
            htmlFor:'Product Name',
            label:'Product Name',
            placeholder:'Product Name',
            type:'text',
            name:'name',
            id:'Product Name'
        },
        {
            htmlFor:'Price',
            label:'Price',
            placeholder:'Price',
            type:'text',
            name:'price',
            id:'Price'
        },
        {
            htmlFor:'profileImage',
            label:'Product Image',
            placeholder:'Upload an image',
            type:'file',
            name:'image_url',
            id:'profileImage',
            noLabel: true,
            fileCard:'w-full h-[180px] md:h-[250px] bg-bg',
        },
    ]
    return (
        <div>
            <h1 className="font-bold text-[22px] mb-3 md:text-[28px] md:mb-10">
                Add Product
            </h1>
            <div className="flex gap-22.5">
                
                <div className="inputs w-[40%]">
                    <Form
                        inputs={inputs}
                        setParentData={setParentData}
                        submit={'Save'}
                        isVertical={false}
                        customClass='w-full p-0 bg-transparent rounded-none'
                        style={false}
                        formWidth={true}
                    />
                </div>
            </div>
        </div>
    )
}
