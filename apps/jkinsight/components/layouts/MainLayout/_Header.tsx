import React from "react"
import Link from "next/link"

export default function Header() {
  return (
    <div className="header">
      <b>
        <Link href={"https://jkinsight.nl"} target="_blank">
          JKinsight
        </Link>
      </b>
    </div>
  )
}
