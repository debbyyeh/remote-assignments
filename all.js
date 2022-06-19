//Assignment 1: Function and Array
// max([1, 2, 4, 5]); // result to 5
// max([5, 2, 7, 1, 6]); // result to 7

function max(arrayList) {
  const arrayLen = arrayList.length //4
  maxNum = arrayList[arrayLen - 1] //3 順序越後數字越大
  for (let i = 0; i < arrayLen; i++) {
    if (arrayList[i] > maxNum) {
      //如果array1[0]>array1[3]就會return值
      maxNum = arrayList[i]
    }
  }
  return maxNum
}

const arrayList = [5, 2, 1, 7, 6]
const result = max(arrayList)
console.log(result)

// Assignment 2: Object
const args = { n1: 1, n2: 6, op: 'x' }
function calculate1(args) {
  if (args.op === 'x') {
    return 'Not supported'
  } else {
    return eval(`${args.n1}${args.op}${args.n2}`)
  }
}
console.log(calculate1(args))
calculate1(args) // result to 5
// calculate({ n1: 5, n2: 2, op: '-' }); // result to 3
// calculate({ n1: 1, n2: 6, op: 'x' }); // result to 'Not supported'

// Assignment 3: Function, Array, and Object
// show the total price of all products after applying a discount
const data = [
  {
    discount: 0.1,
    products: [
      {
        name: 'Product 1',
        price: 100,
      },
      {
        name: 'Product 2',
        price: 700,
      },
      {
        name: 'Product 3',
        price: 250,
      },
    ],
  },
]

function calculate2(data) {
  let discountNum = data[0].discount
  let totalPrice = 0
  for (let i = 0; i < data[0].products.length; i++) {
    totalPrice += data[0].products[i].price
  }
  return totalPrice * discountNum
}

console.log(calculate2(data))

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
