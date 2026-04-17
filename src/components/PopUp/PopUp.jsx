import { useEffect, useRef } from "react";

export default function PopUp({ title, onclick, setPopUp }) {
    const popupRef = useRef(null);
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);
    return (
        <div
            className="layout fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setPopUp(false)}
        >
            <div
                ref={popupRef}
                className="popup px-10 py-13 md:px-20 md:py-23 bg-bg rounded-[20px] z-20 flex flex-col items-center gap-9 md:gap-12.5"
                onClick={(event) => event.stopPropagation()}
            >
                <h1 className="font-semibold text-[16px] md:text-[24px] ">
                    {title}
                </h1>
                <div className="btns flex justify-center gap-6.5">
                    <button
                        onClick={() => {
                            onclick();
                            setPopUp(false);
                        }}
                        className="text-bg text-[13px] md:text-[15px] px-6 py-2 bg-main hover:bg-transparent border border-main border-solid hover:text-main cursor-pointer"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => setPopUp(false)}
                        className="text-bg text-[13px] md:text-[15px] px-6 py-2 bg-red hover:bg-transparent border border-red border-solid hover:text-red cursor-pointer"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
}