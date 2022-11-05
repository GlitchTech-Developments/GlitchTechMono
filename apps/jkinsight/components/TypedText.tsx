/* eslint-disable @typescript-eslint/no-explicit-any */
import Typed from "typed.js"
import { useEffect, useState } from "react"

export default function TypedText(props: any) {
  const el: any = useState()

  let preStringChoice = ""
  let loopStringChoice = false
  let stringVarChoice = ["my website"]

  if (props.PageName == "Home") {
    preStringChoice = "Welcome to "
  } else if (props.PageName == "AboutMe") {
    preStringChoice = "Thanks for"
  }

  const getVariation = () => {
    if (props.PageName == "Home") {
      preStringChoice = "Welcome to "
      loopStringChoice = false
      stringVarChoice = ["my website", "JKinsight"]
    } else if (props.PageName == "AboutMe") {
      preStringChoice = "Thanks for"
      loopStringChoice = true
      stringVarChoice = ["your interest", "checking", "a Tech Enthusiast"]
    }

    const typed = new Typed(el.current, {
      strings: stringVarChoice,
      startDelay: 350,
      typeSpeed: 180,
      backSpeed: 50,
      backDelay: 125,
      smartBackspace: true,
      loop: loopStringChoice,
      showCursor: true,
      cursorChar: "|",
    })

    // Destropying
    return () => {
      preStringChoice
      typed.destroy()
    }
  }

  useEffect(() => {
    getVariation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="typed-text-div">
      <strong>
        {preStringChoice}{" "}
        <span ref={el} className="typed-text font-bold"></span>
      </strong>
    </div>
  )
}
