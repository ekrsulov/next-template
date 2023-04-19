import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Poleras Mágicas
          </h1>
          <p className="max-w-[600px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl text-justify">
            Escríbenos por WhatsApp y envíanos 10 imágenes, recibe tu diseño en horas y tu polera en pocos días.
          </p>
        </div>
        
        <div className="flex gap-4">
          <Link href="https://apanio.com/yenda" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })} >
            Comprar
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://wa.me/56920602700" className={buttonVariants({ variant: "outline", size: "lg" })} >
            WhatsApp
          </Link>
        </div>
        
        <Icons.headImg className="max-w-[600px] xl:max-w-[500px] xl:absolute xl:top-44 xl:left-1/2" />
        
        <div className="max-w-[600px] text-base text-slate-700 dark:text-slate-400 sm:text-lg text-justify">
          <p>¡Haz realidad tu diseño soñado!</p>
        <br/>


        

          <p>Para comenzar, realiza la compra en nuestra tienda online {" "}
            <Link href="https://apanio.com/yenda" target="_blank" rel="noreferrer" className="underline">apanio.com/yenda</Link> y 
            recibirás un código de activación para interactuar a través de WhatsApp. 
            De esta manera, podrás enviarnos 10 fotos que reflejen lo que quieres personalizar en tu polera.
            ¡No importa si se trata de un mujer, hombre, niña, niño, pareja o incluso tu mascota!</p>
        <br/>

          <p>En pocas horas, recibirás propuestas de poleras personalizadas basadas en las imágenes que nos enviaste.
            Una vez que selecciones la que más te guste, en pocos días recibirás tu polera única en la dirección que nos indiques.</p>
        <br/>

          <p>En Yenda, nos comprometemos a ofrecerte un servicio personalizado y de calidad. 
            ¡Haz tu compra hoy mismo y convierte tu diseño en realidad!</p>
        </div>
      </section>
    </Layout>
  )
}
