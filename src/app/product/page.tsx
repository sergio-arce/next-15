import Link from "next/link";

export default function ProductList() {
  const productId = 10;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2>
        <Link href="product/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="product/2">Product 2</Link>
      </h2>
      <h2>
        {/* replace sirve para volver a la raiz desde el navegador */}
        <Link href="product/3" replace> 
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`product/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}