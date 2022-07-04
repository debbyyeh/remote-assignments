const Content = () => {
  return (
    <section className="content">
      <h3>Section Title</h3>
      <div className="container contentArea">
        <div className="contentBox">
          <p>Content Box 1</p>
        </div>
        <div className="contentBox">
          <p>Content Box 2</p>
        </div>
        <div className="contentBox">
          <p>Content Box 3</p>
        </div>
        <div className="contentBox">
          <p>Content Box 4</p>
        </div>
      </div>
      <a href="#" className="actionBtn">
        call to Action
      </a>
      <div className="container contentAreaMore">
        <div className="contentBox">
          <p>Content Box 1</p>
        </div>
        <div className="contentBox">
          <p>Content Box 2</p>
        </div>
        <div className="contentBox">
          <p>Content Box 3</p>
        </div>
        <div className="contentBox">
          <p>Content Box 4</p>
        </div>
      </div>
    </section>
  )
}

//渲染到網頁
export default Content
