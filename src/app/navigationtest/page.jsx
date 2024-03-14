"use client"
import Link from "next/link"
import {  useRouter ,usePathname, useSearchParams} from "next/navigation"

export default  function NavigationTestPage () {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")
    console.log(pathname,q)

    const handleClick = ()=>{
        console.log("clicked")
        router.push("/")
      }

  return (
    <div>
    <Link href="/" prefetch={false}>Click here</Link>
    <button onClick={handleClick}>Write and Redirect</button>
  </div>
  )
}
