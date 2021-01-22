/* Github Repository Link: 
  */

//1. Kilometer to Meter Convert Problem Solve Code 
function kilometerToMeter( kilometer) {
    let meter;

    if (kilometer < 0) {
        return meter = "Meter Value Not Allow Negative Number";
    } else {
        return meter = kilometer * 1000; // 1 kilometer = 1000 meter. 
    }
}
/*
const meterConvert = kilometerToMeter(20);
console.log(meterConvert); */


//2. Budget Calculator Function Code, 3 type product  
function budgetCalculator(watch, mobile, laptop) {
    let totalAmount = 0;

    if (watch < 0 && mobile < 0 && laptop < 0) {
        return totalAmount = "negative value not allowed";
    } else {
        return totalAmount = (watch * 50) + (mobile * 100) + (laptop *200);
    }
}
/* 
let totalPerchesAmount = budgetCalculator(2, 3, 2);
console.log(totalPerchesAmount); */

// 3. Hotel Cost function code 
function hotelCost(day) {
    let amount = 0;

    // when negative value input, error massage 
    if (day < 0) {
      return amount =('Negative Value not allow');
    } 
    // First 10 days, amount per day 80 
    else if (day <= 10) {
      amount = day * 100;
    } 
    // Second 10 days, 11th to 20th, amount per day 80
    else if (day <= 20) {
      let firstPart = 10 * 100;
      let remainingDays = day - 10;
      let secondPart = remainingDays * 80;
      amount = firstPart + secondPart;
    } 
    // Third part 21th day to unlimited, amount per day 50 
    else {
      let firstPart = 10 * 100;
      let secondPart = 10 * 80;
      let remainingDays = day - 20;
      let thirdPart = remainingDays * 50;
      amount = firstPart + secondPart + thirdPart;
    }
  
    return amount;
  }
  /* This is function output consol 
  console.log(hotelCost(10)); */
  

// 4. Mega Friend name show function 
  function megaFriend(friendsName) {
    let megaFriendName = '';
    for (var i = 0; i < friendsName.length; i++) {
      if (friendsName[i].length <= 0) {
        return megaFriendName=("please enter a valuable name");//error massage 
      } 
      else if (friendsName[i].length > megaFriendName.length) {
        megaFriendName = friendsName[i];
      }
    }
    return megaFriendName;
  }
  /* this is output commend 
  console.log(megaFriend(['naeem', 'aziz', 'chowdhury', 'jhankermahbub', 'hero'])); */