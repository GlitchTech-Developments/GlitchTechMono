import { useEffect, useState } from "react"
import { BsArrowUpSquare } from "react-icons/bs"

const GoToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentPageHeight = window.innerHeight + 63
      const PageHeightEnding = currentPageHeight - 30

      if (window.scrollY > PageHeightEnding) {
        setShowTopBtn(false)
      } else {
        if (window.scrollY > 400) {
          setShowTopBtn(true)
        } else {
          setShowTopBtn(false)
        }
      }
    })
  }, [])

  return (
    <>
      {showTopBtn == true ? (
        <div className="fixed bottom-10 right-8 w-[3rem] rounded-xl bg-black text-[3rem] active:bg-glitchtech active:text-black active:opacity-70 md:bottom-10 md:right-10 md:text-[3rem]">
          <BsArrowUpSquare />
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
export default GoToTopBtn
