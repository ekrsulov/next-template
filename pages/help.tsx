import Head from "next/head"
import Image from "next/image";

import { Layout } from "@/components/layout"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { DynaPuff } from "@next/font/google";
const dynapuff = DynaPuff({ subsets: ["latin"] });


const faq = [
  {
      question: "¿De qué material son las poleras?",
      answer: "Las poleras son de algodón 100%."
  },
  {
      question: "¿Qué colores pueden ser las poleras?",
      answer: "Blanco o negro."
  },
  {
      question: "¿Cuáles son las tallas?",
      answer: "Disponible poleras S, M, L, XL y XXL."
  },
  {
      question: "¿Cuáles son las medidas de las poleras?",
      answer: "Las medidas varían si es una polera de mujer u hombre.",
      images: ["medidas-mujer.png","medidas-hombre.png",]
  },
]

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
          <div className={dynapuff.className}>Ayuda Poleras Mágicas</div>
        </h1>
      
        <div>
          Revisa respuestas a preguntas frecuentes
        </div>

        <div>
          <Accordion type="single" collapsible>
            {faq.map((item, index) => {return (
            <AccordionItem value={"item-" + index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
                {item.images?(
                  <>
                    {item.images.map((image, index) => {return (
                      <img src={"/help/" + image} width="600"/>
                    )})}
                  </>
                ):(<></>)}
                
              </AccordionContent>
            </AccordionItem>
            )})}
          </Accordion>
        </div>

      </section>
    </Layout>
  )
}
