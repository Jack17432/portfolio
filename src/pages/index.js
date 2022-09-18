import * as React from "react"
import '../styles/style.css'
import '../styles/linkStyle.css'
import Menubar from "../components/menubar"
import LandingPage from "../components/landingPage"

const IndexPage = () => {
  return (
    <main>
      <Menubar/>
      <LandingPage/>
    </main>
  )
}

export const Head = () => <title>Chris's Portfolio</title>
export default IndexPage
