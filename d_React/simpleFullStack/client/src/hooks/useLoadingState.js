import { useState } from "react"

export default function useLoadingState() {
  const [loading, setLoding] = useState(false)

  const loadingRequest = async promiseFn => {
    setLoding(true)
    const res = await promiseFn()
    console.log("loading-res", res)
    if (res.status !== 200) {
      alert("寄了...")
    }
    setLoding(false)
  }

  return {
    loading,
    loadingRequest,
  }
}
