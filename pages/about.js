import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
/* components */
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

/* css */
import styles from './css/about.module.css';

const fetchData = () => {};

export default function About() {
	return (
		<>
			<Head>
				<title>Food Store Lists</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta name="Keywords" content="음식 맛집 리스트" />
				<meta name="Description" content="맛집 리스트" />
				<meta httpEquiv="Title" content="맛집 리스트 food store list" />
				<meta httpEquiv="Author" content="minsoftk" />

				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
					integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
					crossorigin="anonymous"
				/>
			</Head>
			<Navigator />

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
				<Footer />
			</div>
		</>
	);
}

{
	/* <Navigator />
			<main className={styles.main}>
				<h1 className={styles.title}>AWESOME FOOD STORE</h1>
				<p className={styles.description}>
					React 기반인 Next.js를 사용해서 Store 페이지 개발하기.
				</p>
			</main>
			<Footer /> */
}
