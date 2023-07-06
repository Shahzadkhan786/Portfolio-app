import "./globals.css";
import React from "react"
import  Footer  from "./components/footer";
import  Header  from "./components/header";
import { aboutMeData, pages} from "./data/data";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<title>Portfolio.Shahzad</title>
			<head />
			<body>
				<Header name={aboutMeData.name} pages={pages} />
				<main className='sm:mb-32 mb-16'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}