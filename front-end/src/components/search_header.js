import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRepeat } from 'akar-icons';

const SearchHeader = () => {

	const [searchBtn, setSearchBtn] = useState(true);

	const searchBtnRef = useRef();

	useEffect(() => {
		// 이벤트 핸들러 함수
		const handler = (event) => {
				// mousedown 이벤트가 발생한 영역이 검색창이 아닐 때, default 검색창으로
				if (searchBtnRef.current && !searchBtnRef.current.contains(event.target)) {
						setSearchBtn(true);
				}
		};
		
		// 이벤트 핸들러 등록
		document.addEventListener('mousedown', handler);
		
		return () => {
				// 이벤트 핸들러 해제
				document.removeEventListener('mousedown', handler);
		};
});


	return (
		<>
			<div className="bg-[#120D0B] shadow-[3px_6px_16px_-4px_rgba(185,185,196,0.2)] w-full h-13">
				<div className='flex self-center justify-between py-3 mx-10'>
					<Link to='/'>
						<span className="text-white">NEXPOT</span>
					</Link>
					
					<div className="flex">
						{searchBtn ? <button onClick={() => {
							setSearchBtn(!searchBtn);
						}} className="inline-flex px-4 py-1 mx-2 text-xs font-medium border rounded-lg flex-01 border-stone-400 text-stone-400">
							
							<Search strokeWidth={2} size={15} className="mr-2" />
							검색
						</button> : <div ref={searchBtnRef} className="text-stone-400">
						<Search strokeWidth={2} size={15} className="absolute mt-1.5 ml-6" />
						<input type="text"
               name='todoItem'
               placeholder='영상 제목, 채널명, 지역으로 검색합니다.'
               className='py-1 mx-2 text-xs font-medium bg-transparent border rounded-lg w-72 px-9 border-stone-400 text-stone-400'
             />
						 </div>}
						

						 
						<button className="inline-flex px-4 py-1 mx-2 text-xs font-medium text-blue-600 border border-blue-600 rounded-lg">
							<ArrowRepeat strokeWidth={2} size={15} className="mr-2" />
							번역
						</button>
						
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchHeader;