const text1 = document.querySelector("#colorText1");
const text2 = document.querySelector("#colorText2");

const color1 = document.querySelector("#colorPicker1");
const color2 = document.querySelector("#colorPicker2");

const colorMix1 = document.getElementsByClassName("mix1");
const colorMix2 = document.getElementsByClassName("mix2");

const colorChange1 = () => {
  for (let i = 0; i < 9; i++) {
    colorMix1[i].style.backgroundColor = color1.value;
  }
  text1.textContent = `ベースカラー：${color1.value}`;
};

const colorChange2 = () => {
  for (let i = 0; i < 9; i++) {
    colorMix2[i].style.backgroundColor = color2.value;
  }
  text2.textContent = `重ねるカラー：${color2.value}`;
};

color1.addEventListener("input", colorChange1);
color2.addEventListener("input", colorChange2);
