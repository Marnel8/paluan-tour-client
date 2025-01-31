import "./globals.css";
import { Flowbite } from "flowbite-react";
import { customTheme } from "@/lib/customTheme";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const DynamicProviders = dynamic(() => import("@/hoc/Providers"), {
	loading: () => <Loader />,
	ssr: false,
});

const poppins = localFont({
	src: "./fonts/Poppins-Regular.ttf",
	variable: "--font-poppins",
	weight: "100 300 400 900",
});

export const metadata = {
	title: "PTMS",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${poppins.className} antialiased`}>
				<Flowbite theme={{ theme: customTheme }}>
					<DynamicProviders>
						{children}
						<Toaster position="bottom-center" />
					</DynamicProviders>
				</Flowbite>
			</body>
		</html>
	);
}
