import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

const Layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default Layout