import React from 'react';
import './search_header.module.css';
import { Search, ArrowRepeat } from 'akar-icons';


const SearchHeader = () => {
	return (
		<>
			<div className='bg-zinc-900 w-full h-10 py-2 '>
				<div className='w-1000 h-6 mx-10 align-middle flex justify-between'>
					<span className="text-white">NEXPOT</span>
					<div>
					<button className="mx-2 px-4 py-1 inline-flex rounded-lg border border-stone-400 text-stone-400 text-xs font-medium">
						<Search strokeWidth={2} size={15} className="mr-2" />
						검색
					</button>
					<button className="mx-2 px-4 py-1 inline-flex rounded-lg border border-blue-600 text-blue-600 text-xs font-medium">
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