
export default function Nav({ logo, profileImg, profile }) {
    return (
        <nav className='flex justify-between items-center bg-white w-full px-8 py-4'>
            <h1 className='font-semibold text-[14px] md:text-[16px]'>{logo}</h1>
            <div className='profile flex gap-3 items-center'>
                <div className='profile-img rounded-full overflow-hidden w-10 h-10 bg-[#dad9d9]'>
                    <img src={profileImg} alt='profile img' className='w-full h-full object-cover' />
                </div>
                <div className='profile-text'>
                    <h5 className='font-bold text-[13px] md:text-[14px] text-[#404040]'>{profile.name}</h5>
                    <p className='text-[#565656] font-semibold text-[12px]'>{profile.role}</p>
                </div>
            </div>
        </nav>
    )
}