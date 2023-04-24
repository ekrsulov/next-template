import Head from "next/head"
import Image from "next/image"

import { Layout } from "@/components/layout"

import { DynaPuff } from "@next/font/google";
const dynapuff = DynaPuff({ subsets: ["latin"] });

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export default function IndexPage() {
  var samples = [
    "26e6ddce-be5b-4c1c-ac2a-e1dadd82d45c_182673-transparent.png",
    "27f66896-2055-47ad-9e9e-f281acd7d00c_776729-transparent.png",
    "61e6ff9c-7242-4945-8f98-2d888618bb4d_413618-transparent.png",
    "76b2cbc0-0968-4ce7-9e33-221a6466c888_608576-transparent.png",
    "7814b644-be44-4886-80e4-32c209ee6f90_456484-transparent.png",
    "9330f128-a588-46e8-83d8-72a0593e7baa_768431-transparent.png",
    "ad22405d-76ab-4c80-be45-6444822823ee_482935-transparent.png",
    "af6dcb00-78f9-460f-821e-1e4578ff244b_255404-transparent.png",
    "d8adeb2c-e2a2-449c-8971-2e79a1a30563_213372-transparent.png",
    "df32c5e6-45b6-48b8-a991-896d308a4f06_896809-transparent.png",
    "ef438419-a8c3-4f91-a64a-a53fe8c53991_120516-transparent.png",
    "fdf1ca25-3627-4d5f-885f-578fc49a0363_223423-transparent.png",
  ]

  shuffleArray(samples);
  
  return (
    <Layout>
      <Head>
        <title>Yenda - Poleras Mágicas</title>
        <meta name="description" content="Venta de poleras personalizadas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wide sm:text-3xl md:text-5xl lg:text-6xl">
          <div className={dynapuff.className}>Ejemplos de Poleras Mágicas</div>
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {samples.map((img, index) => {
                return (<Image alt={"example-"+index} src={"/examples/" + img} width="512" height="512"/>);
          })}
        </section>
      </section>
    </Layout>
  )
}
