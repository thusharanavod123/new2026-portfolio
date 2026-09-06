import "./globals.css";

export const metadata = {
  title: "Thushara Navod — Cloud, AI & Brand Builder",
  description: "Thushara Navod engineers cloud systems, builds intelligent products, and shapes brands people remember.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
