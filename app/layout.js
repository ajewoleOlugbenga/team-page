import './globals.css'


export const metadata = {
  title: 'Team Page',
  description: 'A team page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
