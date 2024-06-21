import "../app/globals.scss";

export const metadata = {
  title: "Lumina",
  description: "Entry page for Lumina webapp",
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
