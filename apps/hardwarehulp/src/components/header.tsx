import Image from "next/image"

import ImageLoader from "../utils/ImageLoader"
import Link from "next/link"

const Header = () => {
  return (
    <header id="header">
      <Link className="logo no-select" href="/">
        <Image
          id="header-icon"
          src="/img/logo.webp"
          alt="Logo Hardwarehulp"
          height={70}
          width={70}
          loader={ImageLoader}
        />
      </Link>
      <nav className="no-select">
        <Link className="nav-link" rel="canonical" href="/">
          Home
        </Link>
        <Link className="nav-link" rel="canonical" href="/diensten">
          Diensten
        </Link>
        <Link className="nav-link" rel="canonical" href="/tarieven">
          Tarieven
        </Link>
      </nav>
    </header>
  )
}

export default Header
