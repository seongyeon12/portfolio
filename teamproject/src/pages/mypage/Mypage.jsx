import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import MypageProfile from '@components/mypage/MyPageProfile'
import MypageTitle from '@components/mypage/MyPageTitle'
import MypageGoods from '@components/mypage/MyPageGoods'
import MyPageMainReview from '@components/mypage/MyPageMainReview'
import MypageSubFeed from '@components/mypage/MyPageSubFeed'

import Navigation from '@components/mainpage/header/Navigation'

import bird from '@image/bird.jpg'

export default function MyPage() {
  /* 리뷰 - 좋아요 상품 - 나의 피드 순번 */
  const [reviews, setreviews] = useState([])
  const [likes, setLikes] = useState([])
  const [feeds, setFeeds] = useState([])

  /* 나의 리뷰 */
  useEffect(() => {
		const fetchData = async() => {
          const res = await fetch(`http://localhost:3001/review?_limit=3`);
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setreviews(res));
    }, []);

    /* 좋아요 상품 */
     useEffect(() => {
		const fetchData = async() => {
          const res = await fetch(`http://localhost:3001/product?_limit=3`);
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setLikes(res));
    }, []);

    /* 나의 피드 */
  useEffect(() => {
		const fetchData = async() => {
          const res = await fetch(`http://localhost:3001/board?_limit=3`);
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => setFeeds(res));
    }, []);

  return (
    <>
    <Navigation />
      <div className='md:flex sm:block justify-between w-10/12 m-auto mt-12 text-black'>
        <div className='md:w-3/12 sm:w-full mb-12'>
        <div className="md:fixed md:w-[21%]">
          <MypageProfile img={bird}/>
          </div>
        </div>
        <div className='md:w-8/12 sm:w-full'>
          <div className='reviews'>
            <MypageTitle title="나의 리뷰" btn={<Link to="/my/review">더보기</Link>}/>
            <ul className='flex justify-between flex-wrap gap-[1em] mt-3'>
            {reviews.map(review => (
              <MyPageMainReview
              name={review.name}
              title={review.title}  
              star={review.star}
              review={review.review}
              ></MyPageMainReview>
            ))}
            </ul>
          </div>
          
          <div className='likes mt-12'>
            <MypageTitle title="좋아요한 상품" btn={<Link to="/my/like">더보기</Link>}/>
            <ul className='flex justify-between flex-wrap gap-[1em] mt-6'>
            {likes.map(like => (
              <MypageGoods title={like.title}
              ></MypageGoods>
            ))}
            </ul>
          </div>
          
          <div className='feeds mt-12'>
            <MypageTitle title="나의 피드" btn={<Link to="/my/feed" state={{ name: "나의 피드" }}>더보기</Link>}/>
            <ul className='flex justify-between flex-wrap gap-[1em] mt-6'>
              {feeds.slice(0, 3).map(feed => (
                <MypageSubFeed
                id={feed.id}
                img={feed.createdByImg}
                ></MypageSubFeed>
              ))}
            </ul>
          </div>

          <div className='나머지'>
            {/* <button className='btn'><Link to="/my/userFeed">다른 유저피드</Link></button> */}
            <button className='btn'><Link to="/my/follow">팔로잉 페이지</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}