import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const clickRouter = (e: any, link: string) => {
    e.preventDefault()
    router.push(link)
  }

  return (
    <header id="header">
      <a className="logo no-select" onClick={(e) => clickRouter(e, "/")}>
        <img id="header-icon" src="/img/logo.png" alt="Logo Hardwarehulp" />
      </a>
      <nav className="no-select">
        <a
          className="nav-link"
          rel="canonical"
          onClick={(e) => clickRouter(e, "/")}
        >
          Home
        </a>
        <a
          className="nav-link"
          rel="canonical"
          onClick={(e) => clickRouter(e, "/diensten")}
        >
          Diensten
        </a>
        <a
          className="nav-link"
          rel="canonical"
          onClick={(e) => clickRouter(e, "/tarieven")}
        >
          Tarieven
        </a>
      </nav>
    </header>
  )
}

export default Header
