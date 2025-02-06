import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog"
}

export default async function Blog() {

  await new Promise((resolve) => {
    setInterval(() => {
      resolve("Intentional delay!")
    }, 2000)
  })
  
  return (
    <div>
      <h1>Blog</h1>
    </div>
  )
}