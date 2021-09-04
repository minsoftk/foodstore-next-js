import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
/* components */
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
import StoreModal from '../components/Modal';

/* css */
import styles from './css/store.module.css';

export async function getStaticProps() {
	const res = await fetch(`http://localhost:9000/stores`);
	const data = await res.json();
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data }, // will be passed to the page component as props
	};
}

export default function Store(props) {
	let [modal, setModal] = useState(false);
	let [foodId, setFoodId] = useState(1); //음식점 List의 id값을 입력받음.
	console.log(props);
	useEffect(() => {
		console.log(modal);
	}, [modal, foodId]);
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
				<p className={styles.title}>EAT</p>
				<hr></hr>
			</div>
			<div className={styles.container}>
				<main className={styles.main}>
					<p className={styles.b_title}>EAT</p>
					<div className={styles.grid}>
						{props.data.map((stores, i) => {
							return (
								<a
									className={styles.linkBox}
									key={i}
									onClick={() => {
										setModal(true);
										setFoodId(i);
									}}>
									<Image
										src={stores.thumb}
										alt="food-store"
										width={150}
										height={150}
									/>
								</a>
							);
						})}
					</div>
					<StoreModal
						data={props.data[foodId]}
						show={modal}
						onHide={() => {
							setModal(false);
						}}></StoreModal>
				</main>
				<Footer />
			</div>
		</>
	);
}
