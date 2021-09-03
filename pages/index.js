import Head from 'next/head';
import Link from 'next/link';

/** components **/
import Footer from '../components/Footer';
import Navigator from '../components/Navigator';

/** css **/
import styles from './index.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>AWESOME FOOD STORE</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
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

			<main className={styles.main}>
				<img
					className={styles.img}
					src="https://cdn.pixabay.com/photo/2017/06/06/22/37/italian-cuisine-2378729_960_720.jpg"
				/>
				<h1 className={styles.title}>Awesome food!</h1>

				<p className={styles.description}>
					Let's find a good restaurant. go to{' '}
					<Link href="/about">
						<code className={styles.code}>About page!</code>
					</Link>
				</p>
			</main>
			<Footer />
		</div>
	);
}
