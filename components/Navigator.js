import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigator.module.css';

export default function Navigator() {
	return (
		<>
			<header className={styles.header}>
				<Navbar bg="light" variant="light" fixed="top">
					<Container>
						<Link className={styles.link} href="/" passHref scroll={false}>
							<a className={styles.main}>AWESOME FOOD STORE</a>
						</Link>
						<Nav className="me-auto">
							<Link href="/about" passHref scroll={false}>
								<a className={styles.a}>ABOUT</a>
							</Link>
							<Link href="/store" passHref scroll={false}>
								<a className={styles.a}>STORE</a>
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
