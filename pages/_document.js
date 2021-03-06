import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="Date" content="2021-09-06T07:45:37+09:00" />
					<meta
						httpEquiv="Content-Script-Type"
						content="text/javascript"
					/>{' '}
					<meta httpEquiv="Content-Style-Type" content="text/css" />
					<meta httpEquiv="Subject" content="next.js를 활용한 프로젝트" />
					<meta httpEquiv="Author" content="minsoftk" />
					<link
						href="https://fonts.googleapis.com/css2?family=Capriola&display=optional"
						rel="stylesheet"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
						integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
						crossOrigin="anonymous"
					/>
					<script
						src="https://kit.fontawesome.com/6a5db0a2e0.js"
						crossOrigin="anonymous"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
