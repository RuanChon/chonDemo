import { useEffect } from "react"

export default function useListenScroll(scrollFn) {
  useEffect(() => {
    document.addEventListener("scroll", scrollFn)

    return () => {
      document.removeEventListener("scroll", scrollFn)
    }
  }, [])
}
