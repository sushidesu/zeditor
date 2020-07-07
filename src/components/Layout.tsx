import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Global styles={GlobalCSS} />

    <Header>Zeditor</Header>
    <main>
      {children}
    </main>
    <Footer>© sushidesu</Footer>
  </Wrapper>
)

const GlobalCSS = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,body,#__next {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: sans-serif;
    font-size: 16px;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus,
  video:focus {
    outline: none;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 44px 1fr 44px;
  grid-template-areas:
    "header"
    "main"
    "footer";

  & > header {
    grid-area: header;
  }
  & > main {
    grid-area: main;
  }
  & > footer {
    grid-area: footer;
  }
`
