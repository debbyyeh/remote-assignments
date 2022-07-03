// Assignment 1: Callback Function

function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  result = n1 + n2
  setTimeout(function () {
    console.log(result)
    // window.alert(result)
  }, delayTime)
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result)
})
// delayedResult(-5, 10, 2000, function (result) {
//   window.alert(result)
// })

// Assignment 2: Callback Function and Advanced HTML DOM
var dataUrl =
  'https://appworks-school.github.io/Remote-Aassigiment-Data/products'
var xhr = new XMLHttpRequest()
xhr.open('GET', dataUrl)
xhr.send()
xhr.onload = function () {
  var data = JSON.parse(this.responseText)
  render(data)
}

function ajax(src, callback) {
  // your code here
}

function render(dataSet) {
  // your code here
  dataSet.forEach((data, index) => {
    let newProduct = document.createElement('div')
    document.querySelector('.productInfo').appendChild(newProduct)
    let newProductInfo = `
    <span class="order">${index + 1}</span>
    <h2 class="phoneName">${data.name}</h2>
    <p class="price">${data.price}</p>
    <p class="description">${data.description}</p> 
    `
    newProduct.innerHTML = newProductInfo
  })
}
ajax(
  'https://appworks-school.github.io/Remote-Aassigiment-Data/products',
  function (response) {
    render(response)
  },
) // you should get product information in JSON format and render data in the page
