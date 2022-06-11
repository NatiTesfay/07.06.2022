// function click() {
//     setInterval(() => {
//         document.write('timer')},
//         4000);
// }
// click()

// var counter = 0;
// function click() {
//     setInterval(() => {
//         document.write('counter');
//         counter ++;
        
//     }, 6000);
// }
// click();



// var IntervalID;
//  function click() {
//     IntervalID = setInterval(() => {
//     document.getElementById('piska').innerHTML += 'I love timers' + '</br>';
    
//     }, 5000);
// }
// click();
// function btn() {
//     clearInterval(IntervalID);
// }getSeconds
// var timer = new Date()
// // var x = timer.getHours() + ":"+ timer.getMinutes() + ":" + timer.getSeconds() + "</br>";  
// // function btn() {
// //     setInterval(() => {
// //         document.body.innerHTML += x;
// //     }, 1000);
// // }
// // btn();


// var IntervalID;
// var timer = new Date();
// var getMin = timer.getMinutes();
// var getSec = timer.getSeconds();
// var counter = getMin + getSec;
// function btnStart() {
//     IntervalID = setInterval(() => {
//         getSec--
//         if (getSec == 0 ) {
//             getSec = 59
//             getMin -- ;
//         }
//         document.getElementById('piska1').innerText= getMin +":"+ getSec ;
//     }, 1000);
// }

// function btnStop() {
//     clearInterval(IntervalID);
// }



// var intervalId;
// function print_Time() {
//    var dateObject = new Date();
//    var secondsFromDate = dateObject.getSeconds();
//    var secondsFromInput = parseInt(time_input.value.substr(6));
   
//    var minutesFromDate = dateObject.getMinutes();
//    var minutesFromInput = parseInt(time_input.value.substr(3,2))
   
//    var hoursFromDate = dateObject.getHours()
//    var hoursFromInput = parseInt(time_input.value.substr(0,2))
   
//    intervalId = setInterval (()=> {
//       var seconds = secondsFromDate - secondsFromInput;
//       time_element.innerHTML = hoursFromDate + ":" +minutesFromDate + ":" + seconds;
//       secondsFromDate++;
//       if(seconds == -1){
//          secondsFromDate = 59;
//          minutesFromDate --;
//          if(minutesFromDate == -1){
//             minutesFromDate = 59;
//             hoursFromDate--;
//             if (hoursFromDate == -1) {
//             hoursFromInput = 23;
//             }
//          }
//       }
//       if(dateObject.getTime() == dateObject.setHours(hoursFromInput,minutesFromInput,secondsFromInput)){
//          clearInterval(intervalId);
//          console.log();
//       }

//    },1000)
// }


