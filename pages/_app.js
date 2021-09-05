import '../styles/global.css';
import Footer from '../components/Footer';
import Navigator from '../components/Navigator';
export default function App({ Component, pageProps }) {
	return (
		<>
			<Navigator />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
