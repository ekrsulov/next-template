import Head from "next/head"

import { Layout } from "@/components/layout"

export default function IndexPage() {
  var samples = [
"26e6ddce-be5b-4c1c-ac2a-e1dadd82d45c_182673.jpg",
"27f66896-2055-47ad-9e9e-f281acd7d00c_776729.jpg",
"61e6ff9c-7242-4945-8f98-2d888618bb4d_413618.jpg",
"76b2cbc0-0968-4ce7-9e33-221a6466c888_608576.jpg",
"7814b644-be44-4886-80e4-32c209ee6f90_456484.jpg",
"9330f128-a588-46e8-83d8-72a0593e7baa_768431.jpg",
"989a5f62-2e96-4871-acc6-71c600a69e6b_651523.jpg",
"ad22405d-76ab-4c80-be45-6444822823ee_482935.jpg",
"af6dcb00-78f9-460f-821e-1e4578ff244b_255404.jpg",
"d8adeb2c-e2a2-449c-8971-2e79a1a30563_213372.jpg",
"df32c5e6-45b6-48b8-a991-896d308a4f06_896809.jpg",
"ef438419-a8c3-4f91-a64a-a53fe8c53991_120516.jpg",]
  
  
  return (
    <Layout>
      <Head>
        <title>Yenda - Poleras Mágicas</title>
        <meta name="description" content="Venta de poleras personalizadas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 pt-6 pb-8 md:py-10">
        {samples.map((img, index) => {
              let file = "/examples/" + img
              return (<img src={file} className="border-4 border-white rounded-2xl" />);
        })}
      
      </section>
    </Layout>
  )
}
