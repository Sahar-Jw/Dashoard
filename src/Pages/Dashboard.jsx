import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import SideBar from "../components/SideBar/SideBar";
import { useEffect, useState } from "react";
import PopUp from "../components/PopUp/PopUp";

export default function Dashboard() {
    const [popUp, setPopUp] = useState(false);
    const [popUpTitle, setPopUpTitle] = useState('');
    const [popUpAction, setPopUpAction] = useState(() => {});
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const openPopUp = (title, action = () => {}) => {
        setPopUpTitle(title);
        setPopUpAction(() => action);
        setPopUp(true);
    };

    const handleLogout = () => {
        fetch('https://vica.website/api/logout',{
            method:'POST',
            headers:{
                'content-Type':'application/json',
                'Accept':'application/json',
                'Authorization': localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(res =>{
            localStorage.removeItem('token');
            navigate('/');
        })
        .catch(error => console.error('Error submitting data:', error));
    };

    const location = useLocation();
    const currentPath = location.pathname.replace('/dashboard', '') || '';
    const logoText = currentPath
        ? `Products${currentPath.toLowerCase()}`
        : 'Products';

    return (
        <div className="flex min-h-screen">
            {popUp && <PopUp title={popUpTitle} setPopUp={setPopUp} onclick={popUpAction} />}
            <SideBar openPopUp={openPopUp} handleLogout={handleLogout} />
            <div className="flex-1 bg-[#f7f7f7]">
            <Nav
            logo={logoText}
            profile={{name: user ? user.user_name :'', role:'Admin'}}
            profileImg={user?.profile_image ? `https://vica.website/${user.profile_image}` :'assets/img/profile.png'}
            />
            <main className=" pl-5 pt-7.5 md:p-7 overflow-y-scroll h-[calc(100vh-80px)]">
                <Outlet context={{ openPopUp }} />
            </main>
            </div>
        </div>
    );
}
