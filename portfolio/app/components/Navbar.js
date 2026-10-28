import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0 z-20 border-b border-[#243050] bg-[#0B1020]/75 backdrop-blur-md'>
            <div className='flex justify-between items-center p-4 text-white w-6xl mx-auto'>
                <a href='#top' className='text-xl font-bold'>
                    Ahmad<span className='text-[#5B8CFF]'>Mehboob</span>
                </a>
                <ul className='flex gap-7 text-[#9AA6C0] cursor-pointer text-center items-center'>
                    <a className='hover:text-[#E8ECF5] transition-colors' href='#project'>Project</a>
                    <a className='hover:text-[#E8ECF5]' href='#skill'>Skills</a>
                    <a className='hover:text-[#E8ECF5]' href='#about'>About</a>
                    <a className='text-[#5B8CFF] border border-[#5B8CFF] py-2 px-4 rounded-xl hover:bg-[#5B8CFF]/12 font-semibold transition-[transform,box-shadow,background-color] duration-200' href='#contact'>Contact</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
