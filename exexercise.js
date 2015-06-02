

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE
    array.forEach(callback);
}
// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var sum= 0;
    args.forEach(function(value) {
      sum += value;
      // console.log("this is the value: " + value);
      // console.log("this is the sum: " + sum);
    });
    return sum;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    var numb = 0;
    var total = 0;
    args.forEach(function(value){
      total += value;
      // console.log("this is the value: " + value);
      // console.log("this is the total: " + total);
      numb += 1;
      // console.log("this is how many numbers we have seen: " + numb);
    });
    var avrg= total / numb;
    // console.log("this is the average: " + avrg);
    return avrg;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var x = 0;
    args.forEach(function(value){
      if( value > x){
        x = value;
        // console.log("this is the largest value: " + x);
      }
    });
    // console.log("Largest: " + x);
    return x;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    var tleng= 0;
    var leng = 0;
    var strin;
    args.forEach(function(value){
      leng= value.length;
      // console.log("this is the length of " + leng + " " + value);
      if( leng > tleng){
        tleng = leng;
        strin = value;
      }
    });
    // console.log("this is the length of the longest " + strin + " with value " + tleng);
    return strin;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
    function PutInOrder(){
      var args = [].slice.call(arguments);
      var array2 = args.sort();
      // console.log(array2);
      return array2;
    }

    PutInOrder("zebra", "apple", "purple", "orange");

// .concat()
    var arr1 = ["apple", "orange", "banana"];
    var arr2 = ["red", "orange", "yellow"];
    var narr= arr1.concat(arr2);
    console.log("this is the array concat example: " + narr);

// .indexOf()
    var arr= ["pete", "david", "jack", "jim", "phil"];
    var x = arr.indexOf("david");
    console.log("this is the index of david: " + x);
    x = arr.indexOf("jim");
    console.log("this is the index of jim: " + x);

// .split()
    var str="ThisJIsJMyJNewJArray";
    var nstr= str.split("J");
    console.log(nstr);

// .join()
    var sstr= nstr.join(" ");
    console.log(sstr);


// .pop()
    var pstr= ["yellow", "green", "purple", "apple"];
    var z = pstr.pop();
    console.log("this is what was popped off " + z);

// .push()
    var pushStr= ["one", "two", "three", "four"];
    var nLength= pushStr.push("five");
    console.log(nLength); //logs 5

// .slice()
    var fullArray= ["stove", "microwave", "fridge", "sink", "pots", "pans", "coffeepot "];
    var shortArray= fullArray.slice(1, 3);
    console.log(shortArray);  //logs "microwave", "fridge"

// .splice()
    var spArray= fullArray.splice(6, 1, "dishes");
    console.log(spArray); //coffeepot

// .shift()
    var remove= fullArray.shift();
    console.log(remove); //"stove" was removed

// .unshift()
    var shiftAddLength = fullArray.unshift("stove");
    console.log("new length of array " + shiftAddLength);

// .filter()
    function less100(value){
      if(value < 100){
        return value;
      }
    }
    var numArray= [5, 200, 30, 50];
    var filtArray= numArray.filter(less100);
    console.log(filtArray); //logs [5, 30, 50]

// .map()

    var mapArray= [10, 20, 30, 40, 50, 60];
    var divArray = mapArray.map(function(value){
        return value / 2;
    });
    console.log(divArray); //logs the new mapped array with all elements divided by 2
