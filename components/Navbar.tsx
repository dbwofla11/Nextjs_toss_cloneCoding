import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <>
  <div className='font-bold flex flex-row it'>김유빈컴퍼니</div>
  <div className='h-[65px] bg-white drop-shadow-md flex flex-row justify-evenly it'>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>회사소개</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>FQA</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>고객센터</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>채용</button>
  </div>
  </>
  )
}

export default Navbar