/* eslint-disable @typescript-eslint/no-explicit-any */
// NextJS
import Head from "next/head"
// NextUI
import { CssBaseline, Grid } from "@nextui-org/react"
// Layout components
import Footer from "./_Footer"
import Header from "./_Header"
import LoadingScreen from "../LoadingScreen"

const MainLayout = ({ children }: any) => {
  const NUIStyles = CssBaseline.flush()

  return (
    <>
      <Head>{NUIStyles}</Head>
      <LoadingScreen>
        <Header />
        <Grid.Container gap={2} className="container">
          <Grid xs={12} className="main">
            {children}
          </Grid>
        </Grid.Container>
        <Footer />
      </LoadingScreen>
    </>
  )
}
export default MainLayout
