import React from "react"
import Head from 'next/head'
import { Layout } from "../src/components/Layout"
import { Editor } from "../src/components/Editor"

export default () => {
  return (
    <Layout>
      <Head>
        <title>Zeditor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Simple Editor for Zdog.</h1>
      <Editor />
    </Layout>
  )
}

