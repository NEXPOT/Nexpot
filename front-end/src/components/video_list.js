import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const VideoList = ({ regionName }) => {
	const [video, setVideo] = useState([]);

	/** ~으로 떠나볼까요? */
	let regionTitle;
	if (regionName === "서울" || regionName === "대구" || regionName === "광주" || regionName === "경기") {
		regionTitle = "로 떠나볼까요?";
	} else {
		regionTitle = "으로 떠나볼까요?";
	}

	const region = {
		"서울": "seoul",
		"부산": "busan",
		"인천": "incheon",
	}

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await axios.get("http://13.209.16.143:3306/api/youtube", {
					params: {
						region: region[regionName],
					},
				});
				const _video = await res.data.map(item => ({
					videoid: item.videoid,
					title: item.title,
					thumbnail: item.thumbnail,
					channelname: item.channelname,
				}))
				setVideo(video.concat(_video))
			} catch (e) {
				console.error(e.message);
			}
		}
		getData();
	}, [])

	//console.log(video);
	
	return (
		<>
			<div className="mx-10 mt-8 text-white">
				<p className="mb-5 text-2xl font-bold">{regionName}
					<span className="text-[#c4c4c4]">{regionTitle}
					</span>
				</p>
				
				<div className='flex overflow-scroll'>

				{video.map((item, idx) =>				 
					<div className="inline mr-6" key={idx}>
						<Link to={`/detail/${item.videoid}`} state={{ thumbnail: item.thumbnail.replace('mqdefault.jpg', 'maxresdefault.jpg'),
						channelname: item.channelname,
						region: regionName,
						title: item.title}}>
						<img alt="thumbnail" src={item.thumbnail} />
						<p className='text-sm w-80'>{item.title}</p>
						</Link>
					</div>
				
				)}
				</div>
				
			</div>
		</>
	);
};

export default VideoList;