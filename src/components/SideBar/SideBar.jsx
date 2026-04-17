import { IoMdSpeedometer } from "react-icons/io";
import MainBtn from "../MainBtn/MainBtn";
import { LuGrid2X2 } from "react-icons/lu";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function SideBar({ openPopUp, handleLogout }) {
    return (
        <div className="sidebar pr-5.5 pl-5.5 bg-bg p-4 h-screen w-[28.9vw] md:w-[18.9vw] flex flex-col items-center">
            <h1 className="font-extrabold text-[18px] md:text-[20px] mb-12.5">
                <span className="text-main">Dash</span>
                Stack
            </h1>
            <button className="flex items-center gap-1 md:gap-3 font-semibold md:text-[16px] text-[14px] text-text mb-7.5">
                <IoMdSpeedometer />
                Dashboard
            </button>
            <div className="btns w-full h-[70%] flex flex-col justify-between">
                <button className="w-10 bg-main rounded-lg h-12.5 absolute -left-8">gg</button>
                <Link to="/dashboard" className="w-full">
                    <MainBtn btn={'Products'} style={'w-full md:text-[14px] text-[12px]'}>
                        <LuGrid2X2 />
                    </MainBtn>
                </Link>
                <button onClick={() => openPopUp('Are you sure you want to Logout?', handleLogout)} className="flex items-center justify-center rounded-lg cursor-pointer w-full h-10 md:gap-4 gap-1 font-semibold text-[14px] text-text transition duration-700 ease-linear hover:border ">
                    <AiOutlinePoweroff className="md:text-[22px] text-[18px]" />
                    Logout
                </button>
            </div>
        </div>
    )
}
