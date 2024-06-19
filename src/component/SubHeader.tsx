import Image from 'next/image'
import React from 'react'
import home from '../assets/subheader/home.svg'

const SubHeader = () => {
  return (
    <div className='main_subheader_container flex justify-around items-center h-16 text-aprenda_text_color border-b-[1px] border-gray-700 border-opacity-85 gap-60 '>
        <p className='text-white cursor-pointer'>Aprenda a programar</p>
        <div className='flex  gap-6 '>
            <Image src={home} alt='home'className='text-[14px] cursor-pointer '/>/
            <p className='h-6 cursor-pointer text-[14px]'>Cursos</p>/
            <p className='h-6 cursor-pointer text-[14px]'>Aprenda a programar</p>
        </div>
      
    </div>
  )
}

export default SubHeader
