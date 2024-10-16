"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import dynamic from "next/dynamic";

const ReactQueryDevtools = dynamic(
	() =>
		import("@tanstack/react-query-devtools").then(
			(mod) => mod.ReactQueryDevtools
		),
	{ ssr: false }
);

export default function Providers({ children }) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{process.env.NODE_ENV === "development" && (
				<ReactQueryDevtools initialIsOpen={false} />
			)}
		</QueryClientProvider>
	);
}
