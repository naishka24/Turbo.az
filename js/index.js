const article = document.getElementById('article');
const btn = document.getElementById('btn');
const marka = document.getElementById('marka');
const model = document.getElementById('model');
const city = document.getElementById('city');
const val = document.getElementById('val');
const il = document.getElementById('il');
const maks = document.getElementById('maks');
const banType = document.getElementById('banType');
const allSelects = document.querySelectorAll('select')
const markaArr = Array.from(new Set(data.map(item => item.brand)));
const modelArr = Array.from(new Set(data.map(item => item.model)));
const cityArr = Array.from(new Set(data.map(item => item.city)));
const valArr = Array.from(new Set(data.map(item => item.currency)));
const ilArr = Array.from(new Set(data.map(item => item.year)));
const banTypeArr = Array.from(new Set(data.map(item => item.banType)));
// const maksArr = Array.from(new Set(data.map(item => item.year)));
const likedStuff = document.getElementById('likedStuff')
const likedDiv = document.getElementById('likedDiv')

let count = 8
function show() {
  article.innerHTML = ''
  data
  .slice(0, count)
  .map(item => {
    article.innerHTML += `
    <article class="max-w-[235px] w-[100%] xs:w-[50%] m:w-[25%] overflow-hidden relative">
     <div class="h-[180px] rounded-t-[8px] overflow-hidden">
     <i class="fa-regular fa-heart text-white text-2xl absolute right-2 top-2"></i>
      <img class="w-[100%] h-[100%] bg-center bg-cover" src="${item.images[0]}" alt="avto" />
      </div>
        <div class="bg-white p-3 rounded-b-[8px]">
          <h2 class="font-bold">${item.price} ${item.currency}</h2>
          <h6>${item.brand} ${item.model}</h6>
          <p>${item.year}, ${item.engine}, ${item.odometer}${item.odometerUnit}</p>
          <span>${item.city}, ${item.dates}</span>
        </div>  
    </article>
    `
  })
  likedDiv.innerHTML = `
  <div class="h-[180px] rounded-t-[8px] overflow-hidden">
  <img class="w-[100%] h-[100%] bg-center bg-cover" src="${data[0].images[0]}" alt="avto" />
  </div>
    <div class="bg-white p-3 rounded-b-[8px]">
      <h2 class="font-bold">${data[0].price} ${data[0].currency}</h2>
      <h6>${data[0].brand} ${data[0].model}</h6>
      <p>${data[0].year}, ${data[0].engine}, ${data[0].odometer}${data[0].odometerUnit}</p>
      <span>${data[0].city}, ${data[0].dates}</span>
    </div>  
  `
}
show()

function artir() {
  if (count < data.length) {
    count += 8;
}
if (count > data.length) {
    count = data.length;
    btn.style.display = "none"
}
  show()
}

function selectOption() {
   markaArr.map(item => marka.innerHTML += `<option>${item}</option>`)
   modelArr.map(item => model.innerHTML += `<option>${item}</option>`)
   cityArr.map(item => city.innerHTML += `<option>${item}</option>`)
   valArr.map(item => val.innerHTML += `<option>${item}</option>`)
   ilArr.map(item => il.innerHTML += `<option>${item}</option>`)
   ilArr.sort((a, b) => b - a).map(item => maks.innerHTML += `<option>${item}</option>`)
   banTypeArr.map(item => banType.innerHTML += `<option>${item}</option>`)
}
selectOption()

function handleSelect(xana) {
  const arg = xana.value
  const elem = xana.name
  data = zapaz.filter(item => item[elem] == arg)
  show()
}
handleSelect()

function sifirla() {
  marka.innerHTML += new Set(markaArr[0])
  model.innerHTML += new Set(modelArr[0])
  val.innerHTML += new Set(valArr[0])
  il.innerHTML += new Set(ilArr[0])
  banType.innerHTML += new Set(banTypeArr[0])
  // maksArr.innerHTML += new Set(ilArr[0])
  data = zapaz
  show()
}

function likedSepet() {
 likedStuff.classList.toggle("hidden")
}

function likedElem() {
  if (data.length > 0) {
  
  }
}
likedElem()