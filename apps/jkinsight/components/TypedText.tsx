/* eslint-disable @typescript-eslint/no-explicit-any */
import Typed from "typed.js"
import { useEffect, useRef } from "react"

export default function TypedText() {
  const element: any = useRef(null)
  const typed: any = useRef(null)

  const preStringChoice = "Welcome to "
  let loopStringChoice = false
  let stringVarChoice = ["my website"]

  const getVariation = () => {
    loopStringChoice = false
    stringVarChoice = ["my website", "JKinsight"]

    const options = {
      strings: stringVarChoice,
      startDelay: 350,
      typeSpeed: 180,
      backSpeed: 50,
      backDelay: 125,
      smartBackspace: true,
      loop: loopStringChoice,
      showCursor: true,
      cursorChar: "|",
    }

    typed.current = new Typed(element.current, options)

    // Destroying
    return () => {
      typed.current.destroy()
    }
  }

  useEffect(() => {
    getVariation
    return () => {
      getVariation()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="typed-text-div">
      <strong>
        {preStringChoice}
        <span
          ref={element}
          className="typed-text font-bold"
          style={{ whiteSpace: "pre" }}
        />
      </strong>
    </div>
  )
}
