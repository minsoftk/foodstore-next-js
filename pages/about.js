import Head from 'next/head';
import Link from 'next/link';

/* components */
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';

/* css */
import styles from './about.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>FOOD ABOUT</title>
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
				<h1 className={styles.title}>EAT</h1>

				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href="https://nextjs.org/docs" className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href="https://nextjs.org/learn" className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className={styles.card}>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						className={styles.card}>
						<h3>Deploy &rarr;</h3>
						<p>
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a>
				</div>
			</main>
			<Footer />
		</div>
	);
}
