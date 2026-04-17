import axios from 'axios';
import MainBtn from "../components/MainBtn/MainBtn";
import { FaPlus } from "react-icons/fa6";
import Table from "../components/Table/Table";
import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Products() {
    const { openPopUp } = useOutletContext();
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('https://vica.website/api/items', {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                }
            });
            setProducts(res.data.data || res.data);
        } catch (error) {
            console.log('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (product) => {
        openPopUp(
            `Are you sure you want to delete ${product.name}?`,
            async () => {
                try {
                    await axios.delete(`https://vica.website/api/items/${product.id}`, {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': localStorage.getItem('token'),
                        }
                    });
                    await fetchProducts();
                } catch (error) {
                    console.log('Error deleting product:', error);
                }
            }
        );
    };

    return (
        <div className="bg-third-bg md:w-[80vw]">
            <div className="text flex justify-between flex-col md:flex-row md:items-center mb-6">
                <h1 className="font-bold text-[20px] mb-3 md:text-[28px] md:mb-10">
                    Manage Products
                </h1>
                <Link to="add" className='w-fit'>
                    <MainBtn btn={' Add Product'} style={'text-[12px]'} >
                        <FaPlus />
                    </MainBtn>
                </Link>
            </div>
            <Table products={products} onDelete={handleDelete} />
        </div>
    )
}
