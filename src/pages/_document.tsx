import { Head, Html, Main, NextScript } from "next/document"

export default function MyDocument() {
  return (
    <Html className="dark scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="mx-auto max-w-sm px-4 dark:bg-primary dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
