import React from 'react'

export default function footer() {
	return (
		<div className='text-[#737A7A] w-full h-full mt-40 sm:pb-24 h-56 bg-[#120D0B]'>
			<div className='px-10 font-medium pt-11 text-base md:text-lg'>
				Project Members
			</div>
			<div className='flex flex-col sm:flex-row'>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>PM</span>
					<span className='text-sm md:text-base'>Eun Lee</span>
				</div>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>Marketing</span>
					<span className='text-sm md:text-base'>Seoyun Oh</span>
				</div>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>DB/NLP</span>
					<span className='text-sm md:text-base'>Jiseok Kim</span>
				</div>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>Backend</span>
					<span className='text-sm md:text-base'>JiHoo Kim</span>
				</div>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>Frontend</span>
					<span className='text-sm md:text-base'>Eun Lee</span><br />
					<span className='text-sm md:text-base'>Ahhyun Kim</span>
				</div>
				<div className='flex-none pl-10 font-normal pt-4'>
					<span className='block text-[#525959] text-xs'>Design</span>
					<span className='text-sm md:text-base'>Ahhyun Kim</span>
				</div>

				<span className='flex-auto px-10 text-sm font-medium text-end pt-7 mb-4 sm:mb-0 md:text-lg'>2022 TourApi x KaKao</span>

			</div>
		</div>
	)
}
