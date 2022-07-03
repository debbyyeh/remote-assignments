// import React from 'react'
// import styled from 'styled-components'

const Header = () => {
  return (
    <nav className="menuBar">
      <h1 className="logo">
        <a>Website Title/Logo</a>
      </h1>
      <Menubar />
      <Menuphone />
    </nav>
  )
}

const Menubar = () => {
  return (
    <ul className="barList">
      <li>
        <a>item1</a>
      </li>
      <li>
        <a>item2</a>
      </li>
      <li>
        <a>item3</a>
      </li>
      <li>
        <a>item4</a>
      </li>
    </ul>
  )
}

const Menuphone = () => {
  return (
    <ul className="burgerBar">
      <li>
        <a href={'#'} className="item1">
          Item 1
        </a>
        <a href={'#'} className="closeBtn">
          <i className="fa-solid fa-x"></i>
        </a>
      </li>
      <li>
        <a href={'#'}>Item 2</a>
      </li>
      <li>
        <a href={'#'}>Item 3</a>
      </li>
      <li>
        <a href="#">Item 4</a>
      </li>
    </ul>
  )
}

//渲染到網頁
ReactDOM.render(<Header />, document.getElementById('root'))
