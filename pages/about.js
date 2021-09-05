import Head from 'next/head';

/* css */
import styles from './about.module.css';

const About = () => {
	return (
		<>
			<Head>
				<title>About page</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="Keywords" content="AWESOME FOOD STORE1" />
				<meta name="Description" content="맛집 리스트 about 페이지" />
				<meta httpEquiv="Title" content="맛집 리스트 about 페이지" />
			</Head>

			<div>
				<p className={styles.title}>About</p>
				<hr></hr>
			</div>

			<div className={styles.container}>
				<main className={styles.main}>
					<div className={styles.grid}>
						<h1 className={styles.btitle}>Food Store Project</h1>
						<p className={styles.description}>
							React 프레임워크 Next.js를 사용해서 Store 페이지 개발하기.
						</p>
						<div>1. Link를 사용한 pre-rendering</div>
					</div>
				</main>
			</div>
		</>
	);
};
export default About;
