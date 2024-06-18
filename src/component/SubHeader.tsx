import Image from 'next/image'
import React from 'react'
import home from '../assets/subheader/home.svg'

const SubHeader = () => {
  return (
    <div className='main_subheader_container flex justify-around items-center h-16 text-aprenda_text_color border-b-[1px] border-gray-700 border-opacity-85 '>
        <p className='text-white'>Aprenda a programar</p>
        <div className='flex  gap-6 text-[13px]'>
            <Image src={home} alt='home'/>/
            <p>Cursos</p>/
            <p>Aprenda a programar</p>
        </div>
      
    </div>
  )
}

export default SubHeader
