const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;

const Length = images.length;

//right-arrow
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 800}px)`;
  slideNumber++;
};

//left-arrow
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
  slideNumber--;
};

//right-arrow
const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

//left-arrow
const getLastSlide = () => {
  slider.style.transform = `translateX(-${(Length - 1) * 800}px)`;
  slideNumber = Length;
};

right.addEventListener("click", ()=>{
  slideNumber < Length ? nextSlide(): getFirstSlide();
  resetBg();
  buttons[slideNumber-1].style.backgroundColor = "white";
});

left.addEventListener("click", ()=>{
  slideNumber > 1 ? prevSlide() : getLastSlide
  ();
  resetBg();
  buttons[slideNumber-1].style.backgroundColor = "white";
});

//Buttons
for (let i = 0; i < Length; i++){
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () =>{
  buttons.forEach((button) =>{
    button.style.backgroundColor = "transparent";
  })
}
buttons.forEach((button, i) =>{
  button.addEventListener("click", ()=>{
    slider.style.transform = `translateX(-${i *800}px)`;
    slideNumber = i +1;
    resetBg()
    button .style.backgroundColor = "white";
  })
})