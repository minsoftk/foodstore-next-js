import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
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
						<Link href="/" scroll={false} passHref>
							<Navbar.Brand className={styles.mainurl}>
								AWESOME FOOD STORE
							</Navbar.Brand>
						</Link>
						<Nav className="me-auto" style={{ marginLeft: '20px' }}>
							<Link href="/about" scroll={false} passHref>
								<Nav.Link className={styles.link__url}>About</Nav.Link>
							</Link>
							<Link href="/store" scroll={false} passHref>
								<Nav.Link className={styles.link__url}>Store</Nav.Link>
							</Link>
						</Nav>
					</Container>
				</Navbar>

				<Navbar
					className={styles.dropdown}
					bg="light"
					variant="light"
					fixed="top">
					<Container className={styles.container}>
						<Nav className="me-auto">
							<NavDropdown title="AWESOME FOOD STORE" id="basic-nav-dropdown">
								<Link href="/" passHref>
									<NavDropdown.Item className={styles.dropdown__url}>
										Main
									</NavDropdown.Item>
								</Link>
								<Link href="/about" passHref>
									<NavDropdown.Item className={styles.dropdown__url}>
										About
									</NavDropdown.Item>
								</Link>
								<Link href="/store" passHref>
									<NavDropdown.Item className={styles.dropdown__url}>
										Store
									</NavDropdown.Item>
								</Link>
							</NavDropdown>
						</Nav>
					</Container>
				</Navbar>
			</header>
			<style jsx>{`
				a {
					text-decoration: none;
					margin: 10px;
				}
				a:hover {
					color: cornflowerblue;
				}
			`}</style>
		</>
	);
}
