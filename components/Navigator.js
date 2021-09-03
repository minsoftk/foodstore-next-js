import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigator() {
	return (
		<>
			<header>
				<Navbar bg="light" variant="light" fixed="top">
					<Container>
						<Link href="/">
							<Navbar.Brand href="/">AWESOME FOOD STORE</Navbar.Brand>
						</Link>
						<Nav className="me-auto">
							<Nav.Link href="/about">ABOUT</Nav.Link>
							<Nav.Link href="/store">STORE</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
			</header>
		</>
	);
}
