import Head from 'next/head';

/* css */
import styles from './about.module.css';

const About = () => {
	return (
		<>
			<Head>
				<title>Food Store Project</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="Keywords" content="next.js, next.js프로젝트" />
				<meta
					name="Description"
					content="next.js로 food store shop 만들기 프로젝트"
				/>
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
							React 프레임워크 Next.js를 사용해서 Food Store 페이지 개발하기.
							<br />
							<br />
							Next.js의 특징
							<br />
							1. 모든 페이지를 Pre-rendering을 한다는 점. getStaticProps를
							활용해, 빌드하면서 fetch로 Data를 가져온다.
							<br />
							2. 각각의 페이지마다 head 태그를 커스터마이징해 SEO 최적화
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
