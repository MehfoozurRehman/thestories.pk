import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import dbConnect from "@/libs/dbConnect";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theStories - Pakistan News",
  description: "A news site about pakistan",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
