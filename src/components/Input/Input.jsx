
import { SlCloudUpload } from "react-icons/sl";

export default function Input({htmlFor,label,type,placeholder,name,attribute,hidden,onChange,noLabel,fileCard,value}) {

    return (
        <div className={`input flex flex-col mb-4 ${placeholder === 'First Name' || placeholder === 'Last Name' || placeholder === '********' ? 'w-[48%]' : 'w-full'}`}>
            {!hidden && !noLabel && type !== 'file' && <label htmlFor={htmlFor} className='font-semibold text-[11px] md:text-[12px] lg:text-sm text-text'>{label}</label>}

                {type === "file" ? (
                    <label className={`flex justify-center items-center rounded-md border-2 border-dashed border-[#4880FF4D] cursor-pointer p-5 ${fileCard}`}>
                        
                        {value && typeof value === 'string' ? (
                            <img src={value} alt="product img"  className={`w-[80%] h-[80%] object-contain m-auto rounded-2xl! `} />
                        ) : (value && typeof value === 'object' ? (
                            <img src={URL.createObjectURL(value)} alt="product img" className="rounded-2xl!"/>
                        ) : (<SlCloudUpload  className={`text-main w-full h-full`}/>
                        ))}
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={onChange}
                            name={name}
                        />
                    </label>
            )
            : (
            <>
            
            <input type={type} placeholder={placeholder} name={name} id={htmlFor} value={value} onChange={onChange}  hidden={attribute} className={`
            md:h-10
            h-9
            rounded-md
            border
            border-solid
            border-border
            bg-sec-bg
            placeholder:font-semibold
            md:placeholder:text-[12px]
            placeholder:text-[11px]
            placeholder:text-sec-text
            md:placeholder:ps-3
            placeholder:ps-2
            md:ps-3
            ps-2
            md:text-[16px]
            text-[14px]
            `} />
            </>
        )}
            
        </div>
    )
}