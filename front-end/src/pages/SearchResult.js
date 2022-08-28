import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

export default function SearchResult() {
	const location = useLocation();

	const [video, setVideo] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("http://13.209.16.143:3306/api/youtube/search/", {
					params: {
						search: location.state.keyword,
					},
				});
				const _video = await res.data.map(item => ({
					videoid: item.videoid,
					title: item.title,
					thumbnail: item.thumbnail,
					channelname: item.channelname,
					date: item.youtime,
					views: item.views,
				}))
				setVideo(video.concat(_video));
			} catch (e) {
				console.error(e.message);
			}
		}
		getData();
	}, [location.state.keyword]);

	return (
		<>
			<div className="mx-10 mt-20 text-white">
				<span className="mb-5 text-5xl font-bold">‘{location.state.keyword}’</span>
				{video.length
					? <div className='inline'><span className='font-medium text-[#c4c4c4] text-3xl'>의 검색 결과입니다.</span>

						<div className='flex flex-wrap'>
							{video.map((item, idx) =>
								<div className="mx-2 mt-16" key={idx}>
									<Link to={`/detail/${item.videoid}`} state={{
										thumbnail: item.thumbnail.replace('mqdefault.jpg', 'maxresdefault.jpg'),
										channelname: item.channelname,
										title: item.title
									}}>
										<img alt="thumbnail" src={item.thumbnail} />
										<p className='my-3 text-base font-bold'>{item.channelname}</p>
										<p className='text-sm w-80'>{item.title}</p>
									</Link>
								</div>
							)}
						</div>
					</div>
					: <span className='font-medium text-[#c4c4c4] text-3xl'>의 검색 결과가 없어요! 🧐</span>}
			</div>
		</>
	);
}
