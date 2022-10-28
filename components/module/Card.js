import React from 'react'
import Typography from '../Typography'

export default function Card({url,title,role}) {
  return (
    <div className='from-primary-400  rounded text-left to-primary-500 bg-gradient-to-r shadow-2xl w-fit h-fit'>
        <img src={url} alt={title} className="object-contain"  />
        <div className='pl-5 my-2'>
        <Typography  size="sm" style="text-base font-bold text-primary-200" value={title}></Typography>
        <Typography  size="sm" style="text-[16px]" value={role}></Typography>
        </div>
    </div>
  )
}
