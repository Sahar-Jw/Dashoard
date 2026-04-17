
export default function MainBtn({btn,children,style}) {
    return (
        <button className={`main-btn flex gap-1 items-center justify-center h-12.5 rounded-lg bg-main font-bold md:text-base border-none text-white transition duration-700 ease-linear cursor-pointer hover:bg-white hover:text-main hover:border hover:border-solid hover:border-main p-2.5 ${style}`}>
            {children}{btn}
        </button>
    )
}
