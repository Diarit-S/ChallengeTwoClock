var second = document.querySelector('.clock__face__second');
var minute = document.querySelector('.clock__face__min');
var hour = document.querySelector('.clock__face__hour')


function setDate() {
  const now = new Date();

  
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) -90;
  second.style.transform = `rotate(${secondsDegrees}deg)`


  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) -90;
  minute.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 60) * 360) -90;
  hour.style.transform = `rotate(${hoursDegrees}deg)`;


  // if ((secondsDegrees === -90) || (minsDegrees === -90) || (hoursDegrees === -90)) {
  //   second.style.transition = "none";
  // };

 
  
 
  

}

setInterval(setDate, 1000);