import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import { useState, useEffect } from 'react'


export default function Form({title,subTitle,inputs,link,submit,setParentData,style,initialData,formWidth}) {
    const [data, setData] = useState(initialData || {});
    const dataHandler =(event) => {
        event.preventDefault();
        if (setParentData) {
            setParentData(data,true);
        }
    }
    useEffect(() => {
        if (initialData) {
            setData(initialData);
        }
    }, [initialData]);
    return (
        <form onSubmit={dataHandler} className={`pb-6.5 md:pr-8 md:pl-8 rounded-2xl flex justify-between items-center  flex-wrap ${formWidth ? 'w-62.5 pr-5 pl-3 pt-0': 'w-100 pr-8 pl-8 pt-5.5' }  md:w-110  ${style ? 'bg-bg' : 'bg-transparent'}`}>
            <div className='w-full text-center mb-7.75'>
                <h1 className='font-bold text-[20px] md:text-[24px]  text-text'>
                {title}
            </h1>
            <p className='text-[14px] md:text-[16px] text-text font-semibold'>
                {subTitle}
            </p>
            </div>
            {inputs.map((input,index) => {
                return(
                    <Input key={index}
                        htmlFor={input.htmlFor}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        id={input.id}
                        attribute={input.attribute}
                        hidden={input.hidden}
                        file={input.file}
                        fileCard={input.fileCard}
                        customWidth={input.customWidth}
                        customHeight={input.customHeight}
                        customBg={input.customBg}
                        value={input.type !== 'file' ? data[input.name] || '' : data[input.name] || initialData?.[input.name]}
                        onChange={(e) => {const value = input.type === 'file' ? e.target.files[0] :e.target.value;
                            setData((perv) => ({...perv,[input.name]: value}))}
                        }
                    />
                )
            })}
            <input type="submit" value={submit} className='main-btn lg:h-12.5 md:h-10.5 h-10 rounded-lg bg-main font-bold text-[13px] md:text-[14px] lg:text-base border-none text-white transition duration-700 ease-linear hover:bg-white hover:text-main hover:border hover:border-solid hover:border-main w-full cursor-pointer mb-2' />
            {link && (
                <p className='text-text font-semibold text-[13px] md:text-[14px] m-auto '>
                    {link.content}
                    <Link to={link.url} className='text-main font-bold text-[13px] md:text-[14px] underline ml-1'>
                        {link.linkContent}
                    </Link>
                </p>
            )}
        </form>
    )
}