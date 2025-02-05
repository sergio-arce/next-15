// export default async function ProductDetails({ params }: { params: Promise<{ productId: string }> }) {
//   /**
//    * 1. para acceder al id se puede utilizar parentesis:  const productId = (await params).productId
//    * 2. De otra manera es destructurar de paramas:  const { productId } = await params
//    */
//   const { productId } = await params
//   return <div>Product { productId }</div>;
// }

import { Metadata } from 'next'

interface Props {
  params: Promise<{ productId: string }>
}

/**
 * Metadatos de enrutamiento
 */
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

  const { productId } = await params

  return {
    title: `Product ${ productId }`,
    description: 'Metadatos de enrutamiento'
  }
}


export default async function ProducDetials({ params }: Props) {
  
  const { productId } = await params 

  return (<>
    <h1>Details about product { productId }</h1>
  </>)
}
