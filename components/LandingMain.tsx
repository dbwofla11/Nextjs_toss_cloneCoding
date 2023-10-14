import React from 'react'
import Image from 'next/image'

type Props = {}

const LandingMain = (props: Props) => {
  return (
    <div>
      <Image className="-z-10" src={"/image/nextjs.png"} alt='next.js' width={1920} height={1080}></Image>
    </div>
  )
}

export default LandingMain