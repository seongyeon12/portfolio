import tw from "tailwind-styled-components"
import image from "../../image/keyboard.jpg"

export default function MypageGoods() {
  const Item = tw.li`
  min-h-[150px]
  items-center
  rounded-[5px]
  bg-keyboard-img
  bg-cover
  bg-no-repeat
  basis-[30%]
  grow
  overflow-hidden
  drop-shadow-md
  shadow-black
  `

  return (
    <Item></Item>
  )
}