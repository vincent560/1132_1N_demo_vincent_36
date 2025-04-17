const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');
let h1 = 1.75,
  w1 = 55;
let s1 = w1 / (h1 ^ 2);
let h2 = 1.75,
  w2 = 70;
let s2 = w2 / (h2 ^ 2);
let h3 = 1.75,
  w3 = 85;
let s3 = w3 / (h3 ^ 2);
result1.textContent = `BMI=${bmiCalc_xx(h1, w1).toFixed(
  1
)},(h,w)=(${h1},${w1})`;
result2.textContent = `BMI=${bmiCalc_xx(h2, w2).toFixed(
  1
)},(h,w)=(${h2},${w2})`;
result3.textContent = `BMI=${bmiCalc_xx(h3, w3).toFixed(
  1
)},(h,w)=(${h3},${w3})`;

console.log(result1);
function bmiCalc_xx(height, weight) {
  return weight / (height * height);
}
