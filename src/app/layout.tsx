import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISWIW — I Search What I Want",
  description: "A simple independent web search experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
