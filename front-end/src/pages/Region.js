import React from 'react'

export default function Region() {

	const region = ["전국", "서울", "광역시", "강원", "경기", "충북", "충남", "전북", "전남", "경북", "경남"];

	// 광역시 = ['부산','대구','인천','광주','대전','울산','세종','제주']
	// 서울 = ['서울']
	// 강원 = ['강릉','원주','속초','평창','양양']
	// 경기 = ['수원','용인','고양','가평','양평','대부도','파주','포천']
	// 충북 = ['청주','충주','제천','단양']
	// 충남 = ['천안','보령','부여','태안' ,'당진']
	// 전북 = ['전주','군산','고창','부안']
	// 전남 = ['여수','해남','보성','담양','목포']
	// 경북 = ['포항','경주','울릉도','안동' ,'문경']
	// 경남 = ['진주','통영','거제','남해']

	return (
		<div className='mx-10 mt-20 text-white'>
			<p className='mb-5 text-2xl font-bold'>관광지 선택</p>
			<div className='overflow-scroll'>
			
			{region.map((regionName, idx) =>
				<button key={idx} className='hover:cursor-default mb-2 px-6 mr-3 py-0.5 border-[#0D6EFD] border-[1px] rounded-2xl text-sm font-semibold text-[#0D6EFD]'>
					{regionName}
				</button>
			)}
			
			</div>

		</div>
	)
}
