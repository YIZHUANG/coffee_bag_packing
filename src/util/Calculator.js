//facts :

//200g bags 16 cm (width) x 23 cm (height) x 2 cm (length)  // 734 in volume
//400g bags are sized 22 cm x 26 cm x 2 cm     //1144  in volume
//1000g bags are sized 14 cm x 26 cm x 10 cm    // 3460 in volume

//boxes edeges 30cm to 100cm

// example input
// box=[70,70,70]
// bagArray=[
//{"volume":"734","quantity":10},
//{"volume":"1144","quantity":20},
//]

// coffeeBags is the coffee bags that the user is buying.
// box is the cubic boxes
// count is the number of boxes needed
const Calculator = (coffeeBags, box, count = 1) => {
  //facts
  let boxVolume = Math.pow(box[0], 3);

  ////// edge cases
  const numberOfDigits = coffeeBags.reduce(
    (count, value) => count + value.quantity,
    0
  );
  if (!box.length) {
    return 'Invalid input! Please specify the box edeges';
  } else if (!coffeeBags.length) {
    return 'Invalid input! Please specify the coffee bags';
  } else if (numberOfDigits.toString().length > 5 && count === 1) {
    return 'Invalid input! Your input is too large';
    // prevent the app from crashing. specify the count =1 so it doesnt need to be run everytime
  } else if (box[0] < 30 || (box[0] > 100 && count === 1)) {
    return 'Invalid input! The edeges of the cubic box has to be 30 to 100';
    //specify the count =1 so it doesnt need to be run everytime
  } else if (coffeeBags.some(item => item.quantity <= 0) && count === 1) {
    return 'Invalid input, the quantity of your bags have to be larger than 0';
    // input's quantity  can not be 0 or null;
  } else if (coffeeBags.every(item => item.quantity <= 0)) {
    return count; //the condition to break the recursion
  }
  coffeeBags.sort((a, b) => b.volume - a.volume); // sort it from descending order
  ///////  Content
  for (let x = 0; x < coffeeBags.length; x++) {
    if (coffeeBags[x].quantity <= 0) {
      coffeeBags.splice(x, 1); // if a type of coffee bag has been filled already, remove it from the array
    }
    while (
      coffeeBags[x].quantity >= 0 &&
      boxVolume - coffeeBags[x].volume >= 0
    ) {
      boxVolume = boxVolume - coffeeBags[x].volume;
      coffeeBags[x].quantity = coffeeBags[x].quantity - 1;
    }
    while (
      boxVolume - coffeeBags[x].volume < 0 && //if the remaining space is large then other boxes' volume, then go to this loop
      coffeeBags.some(item => boxVolume - item.volume >= 0 && item.quantity > 0) //and also those boxes' quantities larger than 0
    ) {
      let nextToBeFilled = coffeeBags.findIndex(
        //the index of those boxes that can fit into the remaining space
        item => boxVolume - item.volume >= 0
      );
      boxVolume = boxVolume - coffeeBags[nextToBeFilled].volume; //do the same things as above, which is packing!!!
      coffeeBags[nextToBeFilled].quantity =
        coffeeBags[nextToBeFilled].quantity - 1;
    }
    if (boxVolume - coffeeBags[x].volume < 0) {
      //if none of the coditions fit above, then do this.
      // if there are remaining of quantity and the box has no other space to fit all those bags
      return Calculator(coffeeBags, box, (count = count + 1));
    }
  }
  return count;
};

export default Calculator;
