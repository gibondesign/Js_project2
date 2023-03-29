const plusBtn = document.querySelector(".sizeUp");
const minusBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const p1 = document.querySelector(".text p ");
const resetBtn = document.querySelector(".reset");
const styles = window.getComputedStyle(p1);
const paragraphFontSize = styles.getPropertyValue("font-size");
let basicFontSize = parseInt(paragraphFontSize);

const fontIncrease = () => {
	if (basicFontSize <= 51) basicFontSize += 5;
	p1.style.fontSize = basicFontSize + "px";
};

const fontDecrease = () => {
	if (basicFontSize >= 16) basicFontSize -= 5;
	p1.style.fontSize = basicFontSize + "px";
};

const colorChange = () => {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	p1.style.color = `rgb(${r},${g},${b})`;
};

const resetStyle = () => {
	p1.removeAttribute("style");
};

plusBtn.addEventListener("click", fontIncrease);
minusBtn.addEventListener("click", fontDecrease);
colorBtn.addEventListener("click", colorChange);
resetBtn.addEventListener("click", resetStyle);
