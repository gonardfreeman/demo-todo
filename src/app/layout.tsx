import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/server/layout/Header";
import Footer from "@/components/server/layout/Footer";
import Providers from "@/components/client/services/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Todo App",
	description: "Todo App. Add and remove your todos",
};

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} text-slate-700 dark:text-slate-100 bg-slate-50 dark:bg-slate-600`}>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

export default RootLayout;
