import React from 'react'

export default function footer() {
	return (
		<div className='text-[#737A7A] w-full mt-40 sm:pb-24 min-h-min bg-[#120D0B]'>
			<div className='px-10 text-base font-medium pt-11 md:text-lg'>
				Project Members
			</div>
			<div className='flex flex-col sm:flex-row'>
				<div className='flex-none pt-4 pl-10 font-normal'>
					<span className='block text-[#525959] text-xs'>PM/FE</span>
					<span className='text-sm md:text-base'>Eun Lee</span>
				</div>
				<div className='flex-none pt-4 pl-10 font-normal'>
					<span className='block text-[#525959] text-xs'>Design/FE</span>
					<span className='text-sm md:text-base'>Ahhyun Kim</span>
				</div>
				<div className='flex-none pt-4 pl-10 font-normal'>
					<span className='block text-[#525959] text-xs'>BE</span>
					<span className='text-sm md:text-base'>Jihoo Kim</span>
				</div>
				<div className='flex-none pt-4 pl-10 font-normal'>
					<span className='block text-[#525959] text-xs'>DB/NLP</span>
					<span className='text-sm md:text-base'>Jiseok Kim</span>
				</div>

				<span className='flex-auto px-10 mb-4 text-sm font-medium text-end pt-7 sm:mb-0 md:text-lg'>2022 TourApi x KaKao</span>

			</div>
		</div>
	)
}
