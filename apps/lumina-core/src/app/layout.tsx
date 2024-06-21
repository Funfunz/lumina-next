import "../app/globals.scss"

type TRootLayout = {
  children: React.ReactNode
}

export const metadata = {
  title: "Lumina",
  description: "Entry page for Lumina webapp",
}

export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
