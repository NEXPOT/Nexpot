import React from 'react'
import VideoList from '../components/video_list'

export default function Main() {
	const region2 = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '제주',
		'강릉', '원주', '속초', '평창', '양양',
		'수원', '용인', '고양', '가평', '양평', '대부도', '파주', '포천',
		'청주', '충주', '제천', '단양',
		'천안', '보령', '부여', '태안', '당진',
		'전주', '군산', '고창', '부안',
		'여수', '해남', '보성', '담양', '목포',
		'포항', '경주', '울릉도', '안동', '문경',
		'진주', '통영', '거제', '남해'
	];

	/** 무작위 지역 5개 추출(중복없이)) */
	let mainRegion = [];
	while(mainRegion.length < 5){
		let pickRegion = region2.splice(Math.floor(Math.random() * region2.length), 1)[0];
		mainRegion.push(pickRegion);
	}
	
	// 	광역시 = ['서울','부산','대구','인천','광주','대전','울산','세종','제주']
	// 강원 = ['강릉','원주','속초','평창','양양']
	// 경기 = ['수원','용인','고양','가평','양평','대부도','파주','포천']
	// 충북 = ['청주','충주','제천','단양']
	// 충남 = ['천안','보령','부여','태안' ,'당진']
	// 전북 = ['전주','군산','고창','부안']
	// 전남 = ['여수','해남','보성','담양','목포']
	// 경북 = ['포항','경주','울릉도','안동' ,'문경']
	// 경남 = ['진주','통영','거제','남해']

	return (
		<>
			<div className="mx-10 mt-20">
				<p className="mb-5 text-5xl font-bold text-white">넥스팟</p>
				<p className="mb-5 text-5xl font-bold text-white">카피 문구 카피문구</p>
				<p className="text-base font-medium text-white mb-28">넥스팟 카피 문구 카피문구 넥스팟 카피 문구 카피문구를<br /> 생각해서 넣어보면 어떠할런지요 삶은 달걀이다 삶은 여행<br />이다 라이프 이즈 트레블
				</p>
			</div>
			{mainRegion.map((regionName, idx) =>
				<div key={idx}>
					<VideoList regionName={regionName} />
				</div>
			)}
		</>
	)
}
