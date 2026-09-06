import "./globals.css";

export const metadata = {
  title: "Cloud, AI & Brand Builder",
  description: "I engineer cloud systems, build intelligent products, and shape brands people remember.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
