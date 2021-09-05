import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigator.module.css';

export default function Navigator() {
	return (
		<>
			<header>
				<Navbar
					className={styles.navbar}
					bg="light"
					variant="light"
					fixed="top">
					<Container className={styles.container}>
						<Link className={styles.link} href="/" passHref scroll={false}>
							<a className={styles.mainurl}>AWESOME FOOD STORE</a>
						</Link>
						<Nav className="me-auto">
							<Link href="/about" scroll={false}>
								<a className={styles.url}>ABOUT</a>
							</Link>
							<Link href="/store" scroll={false}>
								<a className={styles.url}>STORE</a>
							</Link>
						</Nav>
					</Container>
				</Navbar>
			</header>
			<style jsx>{`
				a {
					text-decoration: none;
					margin: 10px;
				}
			`}</style>
		</>
	);
}
