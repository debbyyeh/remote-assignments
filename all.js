//Request 1: Click to Change Text
const bannerText = document.querySelector('.banner')

bannerText.addEventListener('click', function () {
  if (bannerText.innerHTML === '<h2> Welcome Message</h2>') {
    bannerText.innerHTML = '<h2>Have a Good Time!</h2>'
  } else {
    bannerText.innerHTML = '<h2> Welcome Message</h2>'
  }
})

//Request 2: Click to Show/Close Menu
//點選bar連結，list的right會變成0
const menuBurger = document.querySelector('.menuBurger')
const burgerBar = document.querySelector('.burgerBar')
// x button
const closeBtn = document.querySelector('.closeBtn')
menuBurger.addEventListener('click', function () {
  burgerBar.classList.toggle('active')
})
closeBtn.addEventListener('click', function (e) {
  event.preventDefault()
  burgerBar.classList.remove('active')
})

//Request 3: Click to Show More Content Boxes
//選到按鈕
const actionBtn = document.querySelector('.actionBtn')
const contentAreaMore = document.querySelector('.contentAreaMore')
actionBtn.addEventListener('click', function () {
  contentAreaMore.classList.toggle('active')
})
