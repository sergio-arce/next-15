import Link from "next/link";

export default function F1() {
  return (<>
    <h1>F1</h1>
    <Link href="/f1/f2">Link F2</Link>
    <Link href="/f3">Link F3</Link>
    <Link href="/f1/f2/inner-f2">Link inner F2</Link>
  </>);
}
