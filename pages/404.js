import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './404.module.css';

const Custom404 = () => {
	let [count, setCount] = useState(5);
	const router = useRouter();
	let str = (
		<div>
			<span>존재하지 않는 페이지입니다😥</span>
			<br />
			<span>{count}초 뒤에 메인페이지로 이동합니다~</span>
		</div>
	);

	//404페이지로 접속 되었을 때, 5초후 메인페이지로 이동
	useEffect(() => {
		setTimeout(() => {
			router.replace('/');
		}, 5000);
	}, []);

	//5초 카운트 다운 로직
	useEffect(() => {
		count > 0 &&
			setTimeout(() => {
				setCount(count - 1);
			}, 1000);
	}, [count]);

	return <div className={styles.error}>{str}</div>;
};

export default Custom404;
