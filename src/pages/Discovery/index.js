import React from 'react';
import WSSwiper from './components/WSSwiper';

function Discovery() {
	const pages = [{"id":1548,"coverUrl":"https://i.gsxcdn.com/476071139_105nvrf5.jpg","clickUrl":"https://w.url.cn/s/AC5xROe"},{"id":1549,"coverUrl":"https://p.gsxcdn.com/502365383_abft359c.jpg","clickUrl":"https://m.weishi100.com/mweb/series/?id=1093203"},{"id":1550,"coverUrl":"https://p.gsxcdn.com/476070815_zxxb75ul.jpg","clickUrl":"https://w.url.cn/s/AOf5OXm"},{"id":1551,"coverUrl":"https://p.gsxcdn.com/508170986_h58wkf9x.jpg","clickUrl":"https://m.weishi100.com/mweb/series/?id=1061308"},{"id":1552,"coverUrl":"https://i.gsxcdn.com/500277985_wvo42kbq.jpg","clickUrl":"https://m.weishi100.com/mweb/series/?id=1190346"}]

	return (
		<WSSwiper pages={pages} height={150} width={'100%'}/>
	);
}

export default Discovery;