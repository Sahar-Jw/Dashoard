import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form/Form";
import { useEffect, useState } from "react";

export default function Edit() {

    const [oldData, setOldData] = useState({});
    const navigate = useNavigate();
    const params = useParams();

    const submitData = (data) => {
        console.log('data sent',data)
        const formData = new FormData();

        formData.append('name', data.name || oldData.name);
        formData.append('price', data.price || oldData.price);

        if (data.image_url instanceof File) {
            formData.append('image', data.image_url);
        }
        formData.append('_method', 'PUT');
        fetch(`https://vica.website/api/items/${params.id}`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            navigate('/dashboard');
        })
        .catch(error => console.log('Error submitting data:', error));
    };

    const handleData = (data) => {
        submitData(data);
    };

    useEffect(() => {
        fetch(`https://vica.website/api/items/${params.id}`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log('Fetched item:', res);
            setOldData(res.data || res);
        })
        .catch(error => console.log(error));
    }, [params.id]);

    const inputs = [
        {
            label:'Product Name',
            type:'text',
            name:'name',
            id:'name'
        },
        {
            label:'Price',
            type:'text',
            name:'price',
            id:'price'
        },
        {
            label:'Product Image',
            type:'file',
            name:'image_url',
            id:'profileImage',
            fileCard: true,
            customWidth: 'w-[424px]',
            customHeight: 'h-[214px]',
            customBg: 'bg-white'
        },
    ];

    return (
        <div>
            <h1 className="font-bold text-[22px] mb-3 md:text-[28px] md:mb-10">
                Edit Product
            </h1>

            <div className="flex gap-22.5">
                <div className="inputs w-[40%]">
                    <Form
                        inputs={inputs}
                        setParentData={handleData}
                        submit={'Save'}
                        initialData={oldData}
                        formWidth={true}
                    />
                </div>
            </div>
        </div>
    );
}