const calculateBtn = document.querySelector('.calculate');
const bmiResult = document.querySelector('.show-result');

const suggest = document.querySelector('.give-suggestion');

function bmiCalc_xx(height, weight) {
  return (weight / (height * height)).toFixed(1);
}

function bmi_normal_low(height) {
  return 18.5 * height * height;
}

function bmi_normal_high(height) {
  return 24 * height * height;
}

function calculateBMI() {
  const weight = parseFloat(document.querySelector('.weight').value);
  const height = parseFloat(document.querySelector('.height').value) / 100;

  const bmi = bmiCalc_xx(height, weight);
  const normal_low = bmi_normal_low(height);
  const normal_high = bmi_normal_high(height);

  let status;
  let suggestion;

  if (bmi < 18.5) {
    status = 'underweight';
    suggestion = `add at least ${(normal_low - weight).toFixed(1)} to normal`;
  } else if (bmi <= 24) {
    status = 'normal';
    suggestion = '';
  } else {
    status = 'overweight';
    suggestion = `reduce at least ${(weight - normal_high).toFixed(
      1
    )} to normal`;
  }

  bmiResult.innerHTML = ``;
  suggest.innerHTML = `Your BMI is ${bmi}.${status}.
  ${suggestion}.`;
}

calculateBtn.addEventListener('click', calculateBMI);
