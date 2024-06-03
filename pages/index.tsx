import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

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
      <main>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="max-w-[600px] md:max-w-[800px] md:place-self-center xl:place-self-auto xl:max-w-[600px]">
          
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-wide sm:text-3xl md:text-5xl lg:text-6xl">
              <div className={dynapuff.className}>Poleras Mágicas</div>
            </h1>
            <div className="text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
              Escríbenos por WhatsApp y envíanos 10 imágenes, recibirás tu diseño en horas y tu polera en pocos días.
            </div>
          </div>
          
          <div className="flex gap-4 my-8">
            <Link href="https://yendaapp.apanio.store/" target="_blank" rel="noreferrer" className={buttonVariants({ size: "lg" })} >
              Comprar
            </Link>
            <Link target="_blank" rel="noreferrer" href="https://wa.me/56920602700" className={buttonVariants({ variant: "outline", size: "lg" })} >
              WhatsApp
            </Link>
          </div>
          
          <Icons.headImg className="p-1 max-w-[600px] xl:max-w-[600px] xl:absolute xl:top-24 xl:left-1/2 fill-slate-900 dark:bg-slate-100 rounded-md" />
            
          <div className="text-base text-slate-700 dark:text-slate-400 sm:text-lg">
            <div className="font-extrabold dark:text-slate-300 my-4 text-xl sm:text-2xl">
              ¡Haz realidad tu diseño soñado!
            </div>

            <div className="my-4">
              Para comenzar, realiza la compra en nuestra tienda online {" "}
              <Link href="https://yendaapp.apanio.store/" target="_blank" rel="noreferrer" className="underline">apanio.com/yenda</Link> y 
              recibirás un código de activación para interactuar a través de {" "}
              <Link target="_blank" rel="noreferrer" href="https://wa.me/56920602700" className="underline">WhatsApp</Link>, 
              donde podrás enviarnos 10 fotos que reflejen lo que quieres personalizar en tu polera.
              ¡No importa si se trata de una mujer, hombre, niña, niño, pareja o incluso tu mascota!
            </div>

            <div className="my-4">
              En pocas horas, recibirás propuestas de poleras personalizadas basadas en las imágenes que nos enviaste.
              Una vez que selecciones la que más te guste, en pocos días recibirás tu polera en la dirección que nos indiques.
            </div>

            <div className="italic">
              En Yenda, nos comprometemos a ofrecerte un servicio personalizado y de calidad. 
              ¡Haz tu compra hoy mismo y convierte tu diseño en realidad!.
            </div>
          </div>
          
         </div>
      </section>
      </main>
    </Layout>
  )
}
