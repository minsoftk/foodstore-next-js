import Image from 'next/image';
import React, { useEffect, useState } from 'react';
/** components **/
import { Modal } from 'react-bootstrap';

/** css **/
import styles from './Modal.module.css';

export default function StoreModal(props) {
	let str = props.data.description.split('\n');
	let newStr = str.map((line) => {
		return (
			<span>
				{line}
				<br />
			</span>
		);
	});

	return (
		<>
			<Modal
				{...props}
				centered
				size="lg"
				aria-labelledby="example-modal-sizes-title-lg">
				<Modal.Header closeButton>
					<Modal.Title>{props.data.name}</Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.foodStore}>
					<div>
						<Image src={props.data.image} width={800} height={1000}></Image>
					</div>
					<div className={styles.description}>
						<p className={styles.descriptionTitle}>{props.data.name}</p>
						<p className={styles.descriptionText}>{newStr}</p>
					</div>
				</Modal.Body>
				{props.haveUrl ? (
					<div className={styles.foodStoreInfo}>
						<a
							target="_blank"
							className={styles.foodStoreInfo__Url}
							href={props.data.url}>
							매장 사이트 바로 가기
						</a>
					</div>
				) : null}
			</Modal>
		</>
	);
}
