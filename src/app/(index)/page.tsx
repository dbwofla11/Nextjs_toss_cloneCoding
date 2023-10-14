import React from 'react'
import Image from 'next/image'
import Navbar from '../../../components/Navbar'
import LandingMain from '../../../components/LandingMain'

type Props = {}

const page = (props: Props) => {
  return (
    <>
  {/* <div className='font-bold'>김유빈컴퍼니</div>
  <div className='h-[65px] bg-white drop-shadow-md flex flex-row justify-evenly it'>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>회사소개</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>FQA</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>고객센터</button>
      <button  className='p-3 hover:bg-slate-100 rounded-lg'>채용</button>
  </div>

  <div>
      <Image className="-z-10" src={"/image/nextjs.png"} alt='next.js' width={1920} height={1080}></Image>
  </div> */}
  <Navbar></Navbar>
  <LandingMain></LandingMain>
    </>
  )
}

export default page