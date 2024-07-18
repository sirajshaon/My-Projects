// let counter = document.querySelector('.counter');
// let count = 1;
// setInterval(() => {
//   if (count<300) {
//     count++;
//     counter.innerText = count;
//   }
// }, 100);

let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter => {
  let updateCount = () => {
    let target = +counter.getAttribute('data-target');
    let count = +counter.innerText;
    let increament = target/time;

    if (count < target) {
      counter.innerText = Math.ceil(count + increament);
      setTimeout(updateCount,1);
    } else{
    counter.innerText=target;
  }
};
  updateCount();
});
let healthCondition = document.querySelector('.health');
setTimeout(() => {
  healthCondition.innerText = 'You are totally FIT';
}, 2000);