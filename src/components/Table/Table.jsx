import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Table({ products = [], onDelete }) {
    return (
        <table className='w-[90%] md:w-full bg-bg rounded-tl-lg rounded-tr-lg overflow-hidden border border-border border-solid border-collapse'>
            <thead className='bg-white '>
                <tr className='font-bold text-[14px] border-b border-border border-solid '>
                    <th className='rounded-tl-lg px-2 md:px-3 py-3 text-center border-t border-l border-border border-solid text-[12px]
                        md:text-[16px] md:w-fit '>#</th>
                    <th className='px-2 md:px-3 py-3 text-center border-t border-border border-solid text-[12px]
                        md:text-[16px] md:w-fit '>Product Name</th>
                    <th className='px-2 md:px-3 py-3 text-center border-t border-border border-solid text-[12px]
                        md:text-[16px] md:w-fit '>Price</th>
                    <th className='px-2 md:px-3 py-3 text-center border-t border-border border-solid text-[12px]
                        md:text-[16px] md:w-fit '>Image</th>
                    <th className='rounded-tr-lg px-2 md:px-3 py-3 text-center border-t border-r border-border border-solid text-[12px]
                        md:text-[16px] md:w-fit'>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} className='border-b border-border border-solid font-semibold text-[14px] text-[#292c2e] '>
                        <td className='pl-2 md:pl-5 py-3 text-center text-[12px]
                        md:text-[16px]'>
                            {product.id}
                        </td>
                        <td className='px-3 md:px-3 py-3 text-center text-[12px]
                        md:text-[16px]'>
                            {product.name}
                        </td>
                        <td className='px-3 md:px-3 py-3 text-center text-[12px]
                        md:text-[16px]'>
                            ${parseFloat(product.price).toFixed(2)}
                        </td>
                        <td className='px-2 md:px-3 py-3'>
                            <img src={product.image_url} alt={product.name} className='rounded-2xl  m-auto w-15 object-contain md:object-fill h-15 md:w-30 md:h-28.5' />
                        </td>
                        <td className='px-4 md:px-3 py-3 flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-0 '>
                            <Link to={`/dashboard/edit/${product.id}`}>
                                <button  className='w-8.75 h-8 bg-[#FAFBFD] rounded-lg  m-0 md:rounded-bl-lg md:rounded-br-none md:rounded-tr-none  md:rounded-tl-lg border border-border border-solid flex items-center justify-center cursor-pointer text-[#565656] text-[16px] transition duration-500 ease-linear hover:text-[18px] '>
                                    <FaRegEdit />
                                </button>
                            </Link>
                            <button onClick={() => onDelete?.(product)} className='w-8.75 h-8 bg-[#FAFBFD] rounded-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none md:rounded-tl-none border border-border border-solid flex justify-center items-center cursor-pointer text-red text-[16px] transition duration-300 ease-linear hover:text-[18px]'>
                                <FaRegTrashAlt />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
