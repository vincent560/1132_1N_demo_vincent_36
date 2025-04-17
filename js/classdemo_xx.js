const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_36':
      p.innerHTML = `<iframe src='./demo/w01_dom_36/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_36':
      p.innerHTML = `<iframe src='./demo/w02_dom_36/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_starter_36':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_starter_36/tictactoe_36.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_36':
      p.innerHTML = `<iframe src='./demo/w03_basics_36/p1_36.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_36':
      p.innerHTML = `<iframe src='./demo/w04_basics_36/p2_36/p2_36.html' width="100%" height="100%" />`;
      break;
  }
}
function showMid(item) {
  switch (item) {
    case 'm1_xx':
      p.innerHTML = `<iframe src='./exams/mid1_36/m1_xx/src/p1_36.html' width='100%' height='100%' />`;
      break;
    case 'm2_xx':
      p.innerHTML = `<iframe src='./exams/mid1_36/m2_xx/p2_36.html' width='100%' height='100%' />`;
      break;
    case 'm3_xx':
      p.innerHTML = `<iframe src='./exams/mid1_36/m3_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
  }
}
function showQuiz1(item) {
  switch (item) {
    case 'p1_36':
      p.innerHTML = `<iframe src='./exams/quiz1_36/p1_xx/src/p1_xx.html' width='100%' height='100%' />`;
      break;
    case 'p2_36':
      p.innerHTML = `<iframe src='./exams/quiz1_36/p2_xx/src/p2_xx.html' width='100%' height='100%' />`;
      break;
    case 'p3_36':
      p.innerHTML = `<iframe src='./exams/quiz1_36/p3_xx/p3_xx.html' width="100%" height="100%" />`;
      break;
    case 'p4_36':
      p.innerHTML = `<iframe src='./exams/quiz1_36/p4_xx/p4_xx.html' width="100%" height="100%" />`;
      break;
  }
}
