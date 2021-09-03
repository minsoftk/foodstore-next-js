import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Footer() {
	return (
		<>
			<footer>
				<a
					href="https://github.com/minsoftk"
					target="_blank"
					rel="noopener noreferrer">
					@ 2021 김민성
				</a>
			</footer>

			<style jsx>{`
				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}
				a {
					color: inherit;
					text-decoration: none;
				}
			`}</style>
		</>
	);
}
