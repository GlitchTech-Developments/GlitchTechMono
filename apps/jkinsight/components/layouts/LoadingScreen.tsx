/* eslint-disable @typescript-eslint/no-explicit-any */
import { Loading } from "@nextui-org/react"
import { useEffect, useState } from "react"
import delay from "../functions/utils/delay"

const LoadingScreen = ({ children }: any) => {
  const [loading, setLoading] = useState(true)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const loader = async () => {
      await delay(750)
      setLoading(false)
      await delay(0)
      setInteractive(true)
    }
    loader()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {interactive ? (
        children
      ) : (
        <>
          <div
            className={
              loading ? "isLoading loadingscreen" : "loaded loadingscreen"
            }
          >
            <Loading
              size="lg"
              className={loading ? "isLoading loader" : "loaded loader"}
            />
          </div>
        </>
      )}
    </>
  )
}

export default LoadingScreen
