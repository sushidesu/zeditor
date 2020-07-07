import React from "react"
import styled from "@emotion/styled"

export const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Header>Zeditor</Header>
    <main>
      {children}
    </main>
    <Footer>© sushidesu</Footer>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: "44px 1fr 44px";
  grid-template-columns: "1fr";

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

const Header = styled.header`
  background-color: #ccc;
`

const Footer = styled.footer`
  background-color: #3e3e3e;
  color: #eee;
`
