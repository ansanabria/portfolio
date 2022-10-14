import { Footer, Navbar } from "@/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          defer
          data-website-id="59a244ab-718a-4fde-bc60-7bad842c59c4"
          src="https://jandrev-analytics.vercel.app/umami.js"
        ></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
