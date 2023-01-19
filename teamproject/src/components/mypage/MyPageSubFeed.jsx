import { useState } from 'react'

export default function MypageSubFeed() {
  const itemStyle = `
  min-h-[150px]
  basis-[30%] 
  grow 
  bg-feedImg-img 
  bg-cover
  min-h-[150px] 
  rounded-[5px] 
  bg-no-repeat
  overflow-hidden
  flex-1 
  drop-shadow-md 
  shadow-black
  liFeed
  `

  return (
    <>
      <li className={itemStyle} >
      </li>
  </>
  )
}