import styles from './404.module.css';

const Custom404 = () => {
	let str = (
		<div>
			<span>존재하지 않는 페이지입니다😥</span>
			<br />
			<span>5초 뒤에 메인페이지로 이동합니다~</span>
		</div>
	);
	return <div className={styles.error}>{str}</div>;
};

export default Custom404;
