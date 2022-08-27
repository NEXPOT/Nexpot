import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRepeat } from 'akar-icons';

const SearchHeader = () => {
	return (
		<>
			<div className="bg-[#120D0B] shadow-[3px_6px_16px_-4px_rgba(185,185,196,0.2)] w-full h-13">
				<div className='flex self-center justify-between py-3 mx-10'>
					<Link to='/'>
					<span className="text-white">NEXPOT</span>
					</Link>
					<div>
						<button className="inline-flex px-4 py-1 mx-2 text-xs font-medium border rounded-lg border-stone-400 text-stone-400">
							<Search strokeWidth={2} size={15} className="mr-2" />
							검색
						</button>
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