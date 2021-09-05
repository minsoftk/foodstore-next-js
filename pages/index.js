import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

/** css **/
import styles from './index.module.css';

/** image **/
import mainpicture from '../public/img/italiancuisine.jpg';

const Home = () => {
	return (
		<>
			<Head>
				<title>AWESOME FOOD STORE</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="Keywords" content="next.js, next.js프로젝트" />
				<meta
					name="Description"
					content="next.js로 food store shop 만들기 프로젝트"
				/>
				<meta httpEquiv="Title" content="맛집 리스트 메인페이지" />
			</Head>

			<div className={styles.main_container}>
				<main>
					<Image
						className={styles.main_image}
						src={mainpicture}
						alt="main-food-picture"
					/>
					<h1 className={styles.main_title}>Awesome Food Store</h1>

					<p className={styles.sub_title}>
						Let's find a good restaurant. go to &rarr;{' '}
						<Link href="/store" scroll={false}>
							<code className={styles.code}>Store page!</code>
						</Link>
					</p>
					<p className={styles.main_description}>
						200개의 컨테이너로 구성된 국내 최대 컨테이너 팝업 쇼핑몰
						커먼그라운드에서는
						<br />
						색다른 쇼핑의 재미와 다양한 미식 브랜드들을 만나보실 수 있습니다.
						<br />
						젊고 유니크한 CULTURE를 향유하는 YOUTH를 위한 복합문화공간,
						<br />
						커먼그라운드에서 기존의 쇼핑몰에서 느낄 수 없었던 다채로운 즐거움을
						경험해보세요.
					</p>
				</main>
			</div>
		</>
	);
};
export default Home;
