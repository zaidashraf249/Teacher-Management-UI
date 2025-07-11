import "./globals.css";

export const metadata = {
  title: "Teacher Management UI",
  description: "Modernized frontend for managing teachers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
