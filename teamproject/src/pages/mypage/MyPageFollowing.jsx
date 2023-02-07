import { useState, useEffect } from 'react'
import MypageFollow from '@components/mypage/MyPageFollow'
import MypageProfile from '@components/mypage/MyPageProfile'

import Load from '@image/Load.png'

export default function MypageFollowing() {
  const [follower, setFollower] = useState([])
  const [target, setTarget] = useState(null);
  
  // 데이터 페칭 함수
  // const page = 1;
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3001/user?_limit=9`);
    const data = await response.json();
    setFollower((prev) => prev.concat(data));
    // page++;
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 옵져버 생성
  useEffect(() => {
    let observer;
    if (target) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await fetchData();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

    console.log(follower)

  return (
    <div className='md:flex justify-between w-10/12 m-auto'>
      <div className='md:w-3/12 w-full'> 
        <div className="md:fixed md:w-[21%]">
        <MypageProfile />
        </div>
      </div>
      <div className='md:w-8/12 bg-white'>
        <ul>
        {follower.map(follow => (
          <MypageFollow
          name={follow.name} 
          ></MypageFollow>
        ))}
        </ul> 
        <img src={Load} ref={setTarget}/>
      </div>
    </div>
  )
}