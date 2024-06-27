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
          <div className={dynapuff.className}>Políticas de Privacidad - Yenda Poleras Mágicas</div>
        </h1>
      
        <div>
          Política de Privacidad de Yenda
        </div>

        <div>
          <pre>
Última actualización: 01 de abril de 2024
1. Introducción
En Yenda, valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta política de privacidad explica cómo recopilamos, utilizamos, y protegemos tus datos cuando utilizas nuestra aplicación.
2. Información que Recopilamos
* Información de Registro: Cuando te registras en nuestra app, recopilamos información como tu nombre, dirección de correo electrónico, y número de teléfono.
* Información de Uso: Recopilamos datos sobre cómo interactúas con la app, incluyendo las funciones que utilizas y las acciones que realizas.
* Datos del Dispositivo: Recopilamos información sobre el dispositivo que utilizas para acceder a la app, incluyendo el tipo de dispositivo, el sistema operativo, y el identificador único del dispositivo.
* Datos de Ubicación: Con tu consentimiento, podemos recopilar y utilizar datos precisos de ubicación para proporcionar servicios basados en la ubicación.
* Información de Redes Sociales: Si decides conectar tu cuenta de redes sociales con nuestra app, recopilaremos información de tu perfil público, como tu nombre y foto de perfil.
3. Cómo Utilizamos tu Información
* Provisión de Servicios: Utilizamos tus datos para ofrecer y mejorar nuestros servicios, personalizar tu experiencia y responder a tus consultas.
* Comunicaciones: Podemos utilizar tu información de contacto para enviarte actualizaciones, notificaciones y otras comunicaciones relacionadas con la app.
* Análisis y Mejoras: Analizamos el uso de la app para entender tendencias y mejorar nuestras funcionalidades y servicios.
* Seguridad: Utilizamos tu información para detectar y prevenir fraudes y otros usos no autorizados de la app.
4. Compartición de tu Información
No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
* Proveedores de Servicios: Compartimos información con proveedores de servicios que nos ayudan a operar y mejorar la app.
* Requisitos Legales: Podemos divulgar tu información si así lo requiere la ley o en respuesta a una solicitud válida de las autoridades.
* Protección de Derechos: Podemos compartir información para proteger los derechos, propiedad o seguridad de [Nombre de la App], nuestros usuarios u otros.
5. Seguridad de la Información
Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger tus datos personales contra el acceso, uso o divulgación no autorizados.
6. Retención de Datos
Retenemos tus datos personales durante el tiempo necesario para cumplir con los fines descritos en esta política, a menos que se requiera o permita un período de retención más largo por la ley.
7. Tus Derechos
Tienes derecho a acceder, corregir, eliminar y oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, por favor contacta con nosotros a poleras@yenda.app.
8. Cambios a esta Política de Privacidad
Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestra app y/o enviándote una notificación.
9. Contacto
Si tienes preguntas o preocupaciones sobre esta política de privacidad, por favor contáctanos a:
poleras@yenda.app
          
Agradecemos tu confianza y el uso de [Nombre de la App]. Nos comprometemos a proteger tu privacidad y a brindarte la mejor experiencia posible.
</pre>
        </div>

      </section>
    </Layout>
  )
}
