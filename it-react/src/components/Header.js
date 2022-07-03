import React from 'react'
const Header = () => {
  return (
    <div>
      <nav className="menuBar">
        <h1 className="logo">
          <a>Website Title/Logo</a>
        </h1>
        <Menubar />
        <Menuphone />
      </nav>
      <Section />
    </div>
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
        <a>Item 4</a>
      </li>
    </ul>
  )
}

const Section = () => {
  return (
    <section className="banner">
      <h2 onClick={ChangeText}>Welcome Message</h2>
    </section>
  )
}

function ChangeText(e) {
  e.preventDefault()
  console.log(e)
  if (e.innerHTML === '<h2> Welcome Message</h2>') {
    props.innerHTML = '<h2>Have a Good Time!</h2>'
  } else {
    props.innerHTML = '<h2> Welcome Message</h2>'
  }
}

//渲染到網頁
export default Header
