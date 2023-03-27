const plusBtn = document.querySelector('.sizeUp')
const minusBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const p1 = document.querySelector('.text p ')
const styles = window.getComputedStyle(p1);
const paragraphFontSize = styles.getPropertyValue('font-size'); 
let basicFontSize = parseInt(paragraphFontSize)


const fontIncrease = () => {
    basicFontSize += 5
    p1.style.fontSize = basicFontSize + 'px'
}

const fontDecrease = () => {
    basicFontSize -= 5
    p1.style.fontSize = basicFontSize + 'px'
}



const colorChange = () => {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    p1.style.color = `rgb(${r},${g},${b})`
}




plusBtn.addEventListener('click', fontIncrease)
minusBtn.addEventListener('click', fontDecrease)
colorBtn.addEventListener('click', colorChange)