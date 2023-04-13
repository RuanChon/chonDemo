import { useState } from "react"

export default function useLoadingState() {
  const [loading, setLoding] = useState(false)

  const loadingFn = async promiseFn => {
    setLoding(true)
    const res = await promiseFn()
    setLoding(false)
  }

  return {
    loading,
    loadingFn,
  }
}
