import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
/* components */
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

/* css */
import styles from './about.module.css';

const fetchData = () => {};

export default function About() {
	return (
		<>
			<Head>
				<title>About page</title>
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
						<h1 className={styles.title}>AWESOME FOOD STORE</h1>
						<p className={styles.description}>
							React 기반인 Next.js를 사용해서 Store 페이지 개발하기.
						</p>
					</div>
				</main>
			</div>
		</>
	);
}
