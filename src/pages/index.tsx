import { useEffect } from "react"
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from "Src/components/layout";
import VideoPlayer from 'Src/components/video-player'

import { makeServer } from 'Src/mirage';

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  makeServer({ environment });
}

const inter = Inter({ subsets: ['latin'] })

export default function Root() {
  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.videos);
      })
  }, [])
  return (
    <>
      <Head>
        <title>insider.video</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          Пустой шаблон c плеером
          <VideoPlayer />
        </Layout>
      </main>
    </>
  )
}
