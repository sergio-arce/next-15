import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Link to blog</Link>
      <Link href="/product">Link to products</Link>
    </div>
  )
}
