import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

import { DynaPuff } from "@next/font/google";
const dynapuff = DynaPuff({ subsets: ["latin"] });

export default function IndexPage() {
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
          <div className={dynapuff.className}>Contacto Yenda - Poleras Mágicas</div>
        </h1>
      
        <div>
          Puedes contactarnos por los siguientes medios:
        </div>

        <div className="flex gap-4 my-8">
          <Link href="mailto:poleras@yenda.app" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })} >
            E-mail
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://wa.me/56920602700" className={buttonVariants({ variant: "outline", size: "lg" })} >
            WhatsApp
          </Link>
        </div>
      </section>
    </Layout>
  )
}
