import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';

/* components */
import StoreModal from '../components/Modal';

/* css */
import styles from './store.module.css';

/** rest api 데이터 호출 **/
export const getStaticProps = async () => {
	const res = await fetch(`https://minsoftk.github.io/jsontest/db.json`);
	let data = await res.json();
	data = data.stores;
	console.log(data);
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: { data }, // will be passed to the page component as props
	};
};

/** getStaticProps를 통해서 Store 컴포넌트에 props로 데이터 전달 **/
const Store = (props) => {
	let [modal, setModal] = useState(false); // modal창 on,off
	let [foodId, setFoodId] = useState(1); // 음식점 List의 id값을 입력받음.
	let [haveurl, setHaveUrl] = useState(false); // Modal에 표시할 URL이 있는지 없는지 상태 저장

	// Modal 창 닫힐 때
	const onHide = () => {
		setModal(false);
		setHaveUrl(false);
	};

	return (
		<>
			<Head>
				<title>Food Store Lists</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta
					name="Keywords"
					content="next.js, next.js프로젝트, 맛집리스트, 맛집, foodstores"
				/>
				<meta name="Description" content="맛집리스트, food-store-list" />
				<meta httpEquiv="Title" content="맛집 리스트 페이지" />
			</Head>

			<div>
				<p className={styles.store_main__title}>EAT</p>
				<hr></hr>
			</div>

			<main>
				<p className={styles.store_sub__title}>EAT</p>
				<div className={styles.store_grid}>
					{props.data.map((stores, i) => {
						return (
							<div key={stores.id} className={styles.store_foodbox}>
								<a
									onClick={() => {
										setModal(true);
										setFoodId(i); // 어떤 idx의 store 인지 상태 저장
										//만약 가게의 url을 가지고 있다면 state에 저장
										if (stores.url) {
											setHaveUrl(true);
										} else setHaveUrl(false);
									}}>
									<Image
										className={styles.store_food__image}
										src={stores.thumb}
										alt="food-store"
										width={150}
										height={150}
									/>
								</a>
								<span>{stores.name}</span>
							</div>
						);
					})}
					<StoreModal
						data={props.data[foodId]} // 해당 가게의 데이터 전달
						haveurl={haveurl} //해당 가게의 url 유무
						show={modal}
						onHide={onHide}></StoreModal>
				</div>
			</main>
		</>
	);
};
export default Store;
