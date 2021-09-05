import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Navigator.module.css';

export default function Navigator() {
	return (
		<>
			<header>
				<Navbar className={styles.nav} bg="light" variant="light" fixed="top">
					<Container className={styles.nav_container}>
						<Link href="/" scroll={false} passHref>
							<Navbar.Brand className={styles.nav_main_link}>
								AWESOME FOOD STORE
							</Navbar.Brand>
						</Link>
						<Nav className="me-auto" style={{ marginLeft: '20px' }}>
							<Link href="/about" scroll={false} passHref>
								<Nav.Link className={styles.nav_sub_link}>About</Nav.Link>
							</Link>
							<Link href="/store" scroll={false} passHref>
								<Nav.Link className={styles.nav_sub_link}>Store</Nav.Link>
							</Link>
						</Nav>
					</Container>
				</Navbar>

				<Navbar
					className={styles.nav_dropdown}
					bg="light"
					variant="light"
					fixed="top">
					<Container className={styles.nav_container}>
						<Nav className="me-auto">
							<NavDropdown title="AWESOME FOOD STORE" id="basic-nav-dropdown">
								<Link href="/" passHref>
									<NavDropdown.Item className={styles.nav_sub_link}>
										Main
									</NavDropdown.Item>
								</Link>
								<Link href="/about" passHref>
									<NavDropdown.Item className={styles.nav_sub_link}>
										About
									</NavDropdown.Item>
								</Link>
								<Link href="/store" passHref>
									<NavDropdown.Item className={styles.nav_sub_link}>
										Store
									</NavDropdown.Item>
								</Link>
							</NavDropdown>
						</Nav>
					</Container>
				</Navbar>
			</header>
		</>
	);
}
