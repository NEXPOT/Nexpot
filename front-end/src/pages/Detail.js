import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function Detail() {
	let { videoid } = useParams();
	const location = useLocation();
	console.log("videoid: " + videoid);
	console.log(location);

	return (
		<div className='mx-10'>
			<img className='m-auto' alt="thumbnail" src={location.state.thumbnail} />
			{/* TODO: 썸네일 그라디언트 */}

			<div className='mx-10 text-white'>
				<p className='mt-24 text-5xl font-bold truncate'>{location.state.title}</p>
				<p className='mt-6 text-sm font-bold'>{location.state.channelname}</p>
			</div>
			<div className='text-white'>
				<p className='mx-5 text-base font-bold mt-28'>관광코스</p>
				<p className='mt-6 text-sm text-[#808080] font-bold'>해동용궁사 스카이라인 루지 코스를 적어봅시다. 코스A 코스B 스테이크 요리 </p>
				<p className='mx-5 mt-6 text-base font-bold'>여행지 정보</p>
				<p className='mx-5 mt-6 text-base font-bold'>상세 정보</p>
			</div>
		</div>
	)
}