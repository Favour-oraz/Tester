let icon = document.querySelector('.icon-container')
let bar = document.querySelector('.fa-bars')
let container = document.querySelector('.main-navigation-bar')
let imageContainer = document.querySelector('.--image-content')


icon.addEventListener('click', () => {
  container.classList.toggle('inner')
  bar.classList.toggle('fa-bars')
  bar.classList.toggle('fa-times')
})


let imagecontent = new Array (
  'images/dog.jpg',
  'images/afican.jpg',
  'images/glassed.jpg',
  'images/internatl.jpg',
  'images/motorcycle.jpg',
  'images/secondary.jpg',
  'images/nft art.jpg'
)

len = imagecontent.length
let i = 0

function load() {
  if (i > len-1) {
    i = 0
  }

  imageContainer.src = imagecontent[i]
  i++
  setTimeout('load()', 5000)
}