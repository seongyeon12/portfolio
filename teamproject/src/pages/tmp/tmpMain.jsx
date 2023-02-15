import TmpComponents from '@components/tmp/TmpComponents'

export default function TmpMain() {
  return (
  <div className="container w-screen h-screen">

    <div className="
    w-[30rem]
    h-96 
    absolute 
    top-2/4
    left-2/4
    -translate-x-1/2
    -translate-y-1/2
    p-3
    rounded 
    bg-gray-700
    text-white
    ">
      <div className="deco flex justify-between w-20">
        <div className="w-5 h-4 bg-red-500 rounded-full"></div>
        <div className="w-5 h-4 bg-yellow-500 rounded-full"></div>
        <div className="w-5 h-4 bg-green-500 rounded-full"></div>
      </div>
        <hr className='mt-3 mb-5' />

      {/* 메인페이지 */}
      <TmpComponents c="mypage" text="마이페이지" link="/my">
      </TmpComponents>

      {/* 상품 상세페이지 */}
      <TmpComponents c="feed" text="상품 상세페이지" link="/products/detail/1">
            </TmpComponents>

      {/* 피드 작성페이지 */}
      <TmpComponents c="feed" text="피드 작성페이지" link="/social/feed/write">
      </TmpComponents>
    </div>
  </div>
  )
}