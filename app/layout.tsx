import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const lufga = localFont({
  src: [
    {
      path: '../fonts/LufgaThin.ttf',
      weight: '100',
    },
    {
      path: '../fonts/LufgaExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../fonts/LufgaLight.ttf',
      weight: '300',
    },
    {
      path: '../fonts/LufgaRegular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/LufgaMedium.ttf',
      weight: '500',
    },
    {
      path: '../fonts/LufgaSemiBold.ttf',
      weight: '600',
    },
    {
      path: '../fonts/LufgaBold.ttf',
      weight: '700',
    },
    {
      path: '../fonts/LufgaExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../fonts/LufgaBlack.ttf',
      weight: '900',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Aashay Dedhia',
  description: 'A Product Designer from India',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#171717" />
      <meta name="theme-color" content="#171717"></meta>

      <body className={lufga.className}>{children}</body>
    </html>
  )
}
