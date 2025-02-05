/**
 * Example 1
 */
// export default async function ReviewDetails({ params }: { params: Promise<{ productId: string, reviewId: string }>}) {


//   const { productId, reviewId } = await params

//   return (<>
//     <h1>Review page</h1>
//     <p>Review: { reviewId } from product: { productId } </p>
//   </>)
// }


// ===========================================


import { notFound, redirect } from "next/navigation";

interface ProductReviewProps {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}

export default async function ProductReview({ params }: ProductReviewProps) {

  const { productId, reviewId } = await params

  if (parseInt(reviewId) > 1000) {
    // notFound() // Show not-found page in /product/[productId]/review
    redirect('/product') // redirect /product page 
  }

  return (<>
    <h1>Review page</h1>
    <p>Review: { reviewId } from product: { productId } </p>
  </>)
}
