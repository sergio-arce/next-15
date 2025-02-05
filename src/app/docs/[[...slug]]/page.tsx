
/**
 * Example 1. 
 */

// export default async function Docs({ params }: { params: Promise<{ slug: string[]}>}) {
//   const { slug } = await params

//   if (slug.length === 2) {
//     return <h1>Viewing docs for feature {slug[0]} and { slug[0]}</h1>
//   }

//   if (slug.length === 1) {
//     return <h1>Viewing docs for feature { slug[0]}</h1>
//   }

//   return <div>Docs</div>;
// }

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Docs..."
}


interface DocsProps {
  params: Promise<{
    slug: string[]
  }>
}

export default async function Docs({ params }: DocsProps ) {
  const { slug } = await params

  if (slug?.length === 2) {
    return <h1>{slug[0]} and {slug[1]}</h1>
  }

  if (slug?.length === 1) {
    return <h1>{slug[0]}</h1>
  }

  return <div>Docs</div>;
}