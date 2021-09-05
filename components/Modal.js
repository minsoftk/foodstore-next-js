import Image from 'next/image';
import React, { useEffect, useState } from 'react';
/** components **/
import { Modal } from 'react-bootstrap';

/** css **/
import styles from './Modal.module.css';

export default function StoreModal(props) {
	//개행을 못읽는 오류 split으로 나누고 map을 활용해 <br/>을 삽입.
	let str = props.data.description.split('\n');
	let newStr = str.map((line, i) => {
		return (
			<span key={i}>
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
				<Modal.Body className={styles.modal_food_store}>
					<div>
						<Image src={props.data.image} width={800} height={1000}></Image>
					</div>
					<div className={styles.modal_body}>
						<p className={styles.modal_body__title}>{props.data.name}</p>
						<p className={styles.modal_body__text}>{newStr}</p>
					</div>
				</Modal.Body>
				{props.haveurl ? (
					<div className={styles.modal_footer}>
						<a
							target="_blank"
							className={styles.modal_footer__url}
							href={props.data.url}>
							매장 사이트 바로 가기
						</a>
					</div>
				) : null}
			</Modal>
		</>
	);
}
