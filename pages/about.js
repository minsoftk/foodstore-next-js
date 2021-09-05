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
				<p className={styles.main_title}>About</p>
				<hr></hr>
			</div>

			<div className={styles.about_ontainer}>
				<main className={styles.about_main}>
					<div className={styles.about_grid}>
						<h1 className={styles.sub_title}>Food Store Project</h1>
						<p className={styles.about_project_description}>
							React 프레임워크 Next.js를 사용해서 Store 페이지 개발하기.
							<br />
							<br />
							Next.js 쓰는 이유
							<br />
							1. 모든 페이지를 Pre-rendering한다. getStaticProps를 활용해,
							렌더링 전에 data를 가져오는 것도 가능.
							<br />
							2. Head 태그를 이용해 SEO 최적화
							<br />
							3. Image 태그를 이용한 이미지 최적화. lazy-loading default.
							<br />
							4. 코드 스플리팅 자동화
						</p>
					</div>
				</main>
			</div>
		</>
	);
};
export default About;
