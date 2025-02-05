'use client'

import Link from "next/link";

import { use } from "react" // important
/**
 * ¿Cómo funciona use()?
 * - use() suspende la renderización hasta que la promesa se resuelva.
 * - Cuando la promesa se resuelve, devuelve el valor resultante directamente.
 * - Es útil en componentes Client Components ('use client') donde se manejan datos asíncronos de manera más declarativa.
 */

import "./styles.css"

export default  function NewArticle({ params, searchParams }: { 
  params: Promise<{ articleId: string }>,
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>,
}) {

  // Extraemos los valores de las promesas directamente con use()
  const { articleId } =  use(params)
  const { lang } =  use(searchParams)

  return <div>
    <h1>News article <span className="text-red-500">{ articleId }</span></h1>
    <p>Reading in <span className="text-red-500">{ lang }</span></p>

    <div className="flex gap-4 text-blue-500">
      <Link href={`/articles/${articleId}?lang=en`}>English</Link>
      <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      <Link href={`/articles/${articleId}?lang=fr`}>Frech</Link>
    </div>
  </div>;
}


/**
 * [ Work in Server ]
 */

// import Link from "next/link";

// import "./styles.css"

// export default async function NewArticle({ params, searchParams }: { 
//   params: Promise<{ articleId: string }>,
//   searchParams: Promise<{ lang: string }>,
// }) {

//   const { articleId } = await params
//   const { lang } = await searchParams

//   return <div>
//     <h1>News article <span className="text-red-500">{ articleId }</span></h1>
//     <p>Reading in <span className="text-red-500">{ lang }</span></p>

//     <div className="flex gap-4 text-blue-500">
//       <Link href={`/articles/${articleId}?lang=en`}>English</Link>
//       <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
//       <Link href={`/articles/${articleId}?lang=fr`}>Frech</Link>
//     </div>
//   </div>;
// }
