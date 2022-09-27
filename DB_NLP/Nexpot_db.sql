create database IF NOT EXISTS Nexpot;

set foreign_key_checks = 0;   -- 외래키 체크하지 않는 것으로 설정
drop table IF EXISTS youtube2 cascade;   -- 기존 youtube 테이블 제거  
drop table IF EXISTS reviews cascade;   -- 기존 review 테이블 제거  
drop table IF EXISTS places cascade;   -- 기존 places 테이블 제거  
set foreign_key_checks = 1;   -- 외래키 체크하는 것으로 설정

create table youtube ( 
	videoID CHAR(11) NOT NULL, 
	channelname varchar(15) NOT NULL, 
    region varchar(10) NOT NULL,
	title varchar(100) NOT NULL,
    thumbnail char(48) NOT NULL,
    youtime date NOT NULL,
	views int DEFAULT 0,
    primary key (videoID)
    ) ;
    
    
create table places ( 
	idx int NOT NULL,
    videoID CHAR(11) NOT NULL, 
	placeID varchar(12) NOT NULL, 
	pname varchar(20) NOT NULL,
    paddress varchar(50) NOT NULL,
	pX float NOT NULL,
    pY float NOT NULL,
	primary key (videoID,placeID),
    foreign key(videoID) references youtube(videoID)
		ON DELETE CASCADE ON UPDATE CASCADE
    ) ;

create table tour ( 
	placeID varchar(12) NOT NULL, 
    exist int NOT NULL default 0,
    contentid varchar(12) NULL,
	title varchar(20) NULL,
    addr varchar(50) NULL,
    tel varchar(20) NULL,
    overview TEXT NULL,
    infocenter varchar(300) NULL,
    restdate varchar(100) NULL,
    usetime varchar(300) NULL,
    parking varchar(10) NULL,
    chkbabycarriage varchar(10) NULL,
    chkpet varchar(10) NULL,
    chkcreditcard varchar(10) NULL,
	primary key (placeID),
	CHECK (exist IN (0,1))
    ) ;
ALTER TABLE tour MODIFY parking varchar(30);
create table description(
	videoID char(11) NOT NULL,
    descript TEXT,
    primary key(videoID),
    foreign key(videoID) references youtube(videoID)
		ON UPDATE CASCADE
    );
create table score(
	placeID varchar(12) NOT NULL,
    lenreview int NOT NULL,
    service DECIMAL(3,2) NOT NULL,
    atmosphere DECIMAL(3,2) NOT NULL,
    cost DECIMAL(3,2) NOT NULL,
    visit DECIMAL(3,2) NOT NULL,
    taste DECIMAL(3,2) NOT NULL,
    primary key(placeID)
);

use Nexpot;

select distinct places.placeID, places.pname, tour.title from tour,places where places.placeID = tour.placeID and exist = 0;
select region2, count(videoID) from youtube group by region2 order by count(videoID);
select * from youtube where title like '%어서와~ 고양시는 처음이지%';
select * from places where videoID like '78PIhQRIORo%';
select * from youtube where videoID = '78PIhQRIORo';
select videoID, count(videoID) from places group by videoID having count(videoID) < 3;
delete from youtube where videoID = 'lNfsa56ZQKY';
delete from places where videoID = 'lNfsa56ZQKY';
select distinct youtube.region, places.pname, tour.placeID from youtube,places,tour where youtube.videoID = places.videoID and places.placeID = tour.placeID and tour.exist = 0;
select distinct places.placeID, places.pname from places,tour where places.placeID = tour.placeID and exist = 0;
select parking from tour where length(parking) > 19;
UPDATE tour SET parking = '없음' where parking in ('없음(진주성 주차장', '만차시', '만차시', '자체주', '공영주차장, 민영주','있음(460여대 주','있음(2개소/소형차','있음(단양 시설관리','있음(내소사주차장,','있음(내변산주차장,','주차 가능 (소형기');
UPDATE tour SET tel = '054-270-5855' where contentid = '127131';

ALTER TABLE tour MODIFY parking varchar(100);
select places.placeID, places.pname from tour where usetime = '';
select * from places where placeID not in (select places.placeID from youtube, places where youtube.videoID = places.videoID);
select * from places where pname = '틸트틸트';
select * from score;
delete from score where service = 0 and atmosphere = 0 and cost = 0 and visit = 0 and taste = 0;
update score set taste = 0.69
where placeID = '1849914946';
update score set taste = 0.69
where placeID = '1849914946';
update score set taste = 0.72
where placeID = '800181130';
update score set taste = 0.97
where placeID = '59253169';
update score set taste = 0.88
where placeID = '8892997';
update score set taste = 0.71
where placeID = '24159571';
update score set taste = 0.67
where placeID = '697202264';
update score set taste = 0.77
where placeID = '1088218950';
update score set taste = 0.80
where placeID = '18097384';
update score set taste = 0.89
where placeID = '804618077';
update score set taste = 0.62
where placeID = '8254061';
select * from tour where exist = 1;
select * from places;
UPDATE tour SET contentid = 'None'
WHERE placeID = '854448879';
UPDATE tour SET chkcreditcard = NULL
WHERE chkcreditcard in ("None","NULL","");
select distinct placeID from places;
select * from score;
select * from tour where placeID = '17027131';
delete from tour where placeID = '530432745';
select distinct youtube.region, places.placeID, places.pname from youtube, places,score
where youtube.videoID = places.videoID
and places.placeID = score.placeID
and score.taste != 0;
INSERT INTO tour
VALUES ('1051163190', 0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL) ;
#contentid,title,addr,tel,overview,infocenter,restdate,usetime,parking,chkbabycarriage,chkpet,chkcreditcard
select places.placeID, places.pname, tour.exist from tour,places where places.placeID = tour.placeID and tour.exist = 0;
select distinct places.placeID, youtube.region,places.pname, tour.exist
from tour,places,youtube
where places.placeID = tour.placeID 
and youtube.videoID = places.videoID
and exist = 0;
select * from places where placeID not in (select tour.placeID from places, tour where places.placeID = tour.placeID);
select distinct places.placeID, places.pname, youtube.region from places,youtube where youtube.videoID = places.videoID;
select distinct count(placeID) from places;
select * from youtube3;
alter table places add foreign key(videoID) references youtube(videoID) on delete cascade on update cascade;
DELETE FROM youtube WHERE videoID in ( 
select videoID from places group by videoID having count(videoID) < 3);
DELETE FROM youtube3 WHERE videoID not in ( 
SELECT distinct youtube.videoID FROM youtube,places3 where youtube.videoID = places3.videoID);
DELETE FROM places WHERE videoID not in ( 
SELECT distinct youtube.videoID FROM youtube,places3 where youtube.videoID = places.videoID);
SELECT DISTINCT pname FROM places;
select * from youtube where region1 = 'Metropolitan';
select * from youtube where title like '%🎡 당일치기 당진 여행💚 뚜벅이는 비추합니다.. 서유기짬뽕, 로드1950, 삽교호 놀이동산%';
select * from tour where exist = '0';
select * from youtube where videoID = '1PfM3j1yWSA';
select * from places where pname like '%삽교호%';
select * from places where placeID not in (select tour.placeID from places, tour where places.placeID = tour.placeID);
select * from tour where title is NULL;
select places.placeID, places.pname, youtube.region from youtube, places, tour where youtube.videoID = places.videoID and places.placeID = tour.placeID and tour.title is NULL;
select youtube.region, tour.addr, places.placeID, places.pname, tour.title
from youtube,places,tour
where youtube.videoID = places.videoID
and places.placeID = tour.placeID
and tour.exist = 1;
select * from tour where placeID = '10821532';
select * from places where placeID = '10821532';
select * from places where placeID not in (select tour.placeID from places, tour where places.placeID = tour.placeID);
delete from places where videoID = '-fOl2j708d4';
delete from youtube where videoID = 'lpYw601JPH8';
select region2, count(videoID) from youtube group by region2;
select distinct places.placeID, youtube.region,places.pname, tour.exist
from tour,places,youtube
where places.placeID = tour.placeID 
and youtube.videoID = places.videoID
and exist = 0;
UPDATE tour SET place = "1663950781"
WHERE channelname = "킴스트래블 Kims Travel";
select * from youtube where videoID in (select videoID from places group by videoID having count(videoID) <10);
select videoID, count(videoID) from places group by videoID having count(videoID) > 8;
select count(*) from youtube where videoID in (select videoID from places group by videoID having count(videoID) > 8);
select distinct region2 from youtube order by region2;
select distinct youtube.videoID, youtube.region2, youtube.title
from youtube,places 
where youtube.videoID = places.videoID and 
youtube.videoID in (select videoID from places group by videoID having count(videoID) < 4);
delete from places where videoID = 'OwtVnbxnKxs' and 
placeID in ('98340297','9855102','1070254263','10731896','12609920','720011755','15482458','8161524','556297681','24544632','8008973');
select places.idx, youtube.videoID, youtube.region2, places.placeID, youtube.title, places.pname, places.paddress 
from youtube,places where youtube.videoID = places.videoID and 
youtube.videoID in (select videoID from places group by videoID having count(videoID) > 7)
order by youtube.videoID, places.idx desc;
select * from youtube group by region2 order by region;
select videoID, title, region2, count(videoID) from youtube group by region2;
select * from places where pname like "문경에코랄라";
delete from places where videoID = 'NWqzyc8NS18' and 
paddress not like '%진주%';
delete from places where videoID ='0lH03faiXHQ';
delete from youtube where videoID ='0lH03faiXHQ';
delete from places where placeID = '197380010';
select region from youtube where length(region) < 10;
select distinct places.placeID, places.pname, youtube.region, places.paddress from places,youtube where places.videoID = youtube.videoID;

select places.idx, youtube.videoID, places.placeID, youtube.region1, youtube.region, youtube.region2, youtube.title, places.pname, places.paddress 
from youtube,places where youtube.videoID = places.videoID order by youtube.youtime desc,videoID, idx;
delete from places where videoID ='_kCiU9cK7MA' and placeID = '10741773';
delete from places where videoID ='_kCiU9cK7MA' and placeID = '8368983';
delete from places where videoID ='_kCiU9cK7MA' and placeID = '1886456435';
select channelname, title from youtube where region2 = 'Buyeo' ;
select places.idx, youtube.videoID, youtube.region2, youtube.title, places.pname, places.paddress 
from youtube,places 
where youtube.videoID = places.videoID and 
youtube.videoID = 'EfQi0PrSqQo' order by videoID, idx;
select places3.idx, youtube3.videoID, youtube3.region2, youtube3.title, places3.pname, places3.paddress from youtube3,places3 where youtube3.videoID = places3.videoID and 
youtube3.region1 = 'Gyeonggi' order by videoID, idx;
select * from places where pname like '%휴게소%';
delete from places where pname like '%휴게소%';
select videoID, channelname, region2, title from youtube where region2 = 'wonju';
select region2, count(videoID) from youtube group by region2 order by count(videoID);
select region1 from youtube group by region1 ;
select distinct places.placeID, places.pname, youtube.region from places, youtube where places.videoID = youtube.videoID;
select distinct region1 from youtube order by region1;
select * from places where videoID = '3xfzDbgAYtQ';
UPDATE youtube SET region1 = REPLACE(region1, 'Taean', 'Chungnam')
WHERE region LIKE '충남%';
select * from youtube where region1 = 'Chungname';
select region2, count(videoID) from youtube group by region2;
select places.idx, youtube.videoID, places.placeID,  youtube.region, youtube.title, places.pname, places.paddress 
from youtube,places where youtube.videoID = places.videoID order by videoID, idx;
UPDATE youtube SET channelname = "킴스트래블 Kim's Travel"
WHERE channelname = "킴스트래블 Kims Travel";
select * from places where videoID = '36sdp9_lqao';
select * from youtube where videoID = 'lN7WZco3Avg';
delete from places where videoID ='36sdp9_lqao';
delete from youtube where videoID ='36sdp9_lqao';
delete from places where videoID ='pB5STtuIb9g' and placeID = '11387607';
delete from places where videoID ='pB5STtuIb9g' and placeID = '26113615';
delete from places where videoID ='pB5STtuIb9g' and placeID = '7919606';
delete from places where videoID ='pB5STtuIb9g' and placeID = '12396493';
delete from places where videoID ='pB5STtuIb9g' and placeID = '1108275753';
select * from youtube where region like '%평창%';
select * from youtube where title like '%강원도 평창 여행 브이로그 1박%';
select * from places where pname = '채석강';
DELETE FROM places WHERE videoId = '3xfzDbgAYtQ';
INSERT INTO places
VALUES (2, '3xfzDbgAYtQ', 'Dangjin', 1606898895, '🥳친구 취뽀기념🥳 당일치기 충남당진여행 브이로그!', '모구바', '충남 당진시 신평면 운정리 965-4') ;
select * from youtube where videoID in (
select videoID from places group by videoID having count(videoID) < 3);
set foreign_key_checks = 0;   -- 외래키 체크하지 않는 것으로 설정
drop table IF EXISTS youtube cascade;
drop table IF EXISTS places3 cascade;   -- 기존 places 테이블 제거  
set foreign_key_checks = 1;   -- 외래키 체크하는 것으로 설정
create table youtube as select * from youtube3;
create table places3 as select * from places;
SELECT COLUMN_TYPE FROM information_schema.COLUMNS WHERE TABLE_NAME='youtube' AND COLUMN_NAME='thumbnail';



select version();