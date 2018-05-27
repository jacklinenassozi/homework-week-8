//An array with the numbers from 1 to 1000.
let array = [];
for(let i= 1; i<=1000;i++){
    array.push(i);
}

console.log(array);

let array30 = [];
for(let x=1; x<=30; x++){
    array30.push(x);
}

function divisibleFactory(z){
    return function(y){
        if(y % z === 0){
            return true;
        }
    };
}



let divisibleBy3 = divisibleFactory(3);
let divisibleBy10 = divisibleFactory(10);
let divisibleBy21 = divisibleFactory(21);



const divisibleArrayBy3 = array.filter(arrayItem => divisibleBy3(arrayItem));
console.log(divisibleArrayBy3);
const divisibleArrayBy10 = array.filter(arrayItem => divisibleBy10(arrayItem));
console.log(divisibleArrayBy10);
const divisibleArrayBy21 = array.filter(arrayItem => divisibleBy21(arrayItem));
console.log(divisibleArrayBy21);

//
for(let x=1; x<array30.length;x++){
    let divisbleBynumber = divisibleFactory(x);
    const divisibleArrayByNumbersBetween1_30 =array.filter(arrayItem => divisbleBynumber(arrayItem));
    console.log(divisibleArrayByNumbersBetween1_30.length);
}


 /*
 for (let counter = 1; counter <= 30; counter++) {
-  //console.log('counter', counter);
   const divisibleByNum = divisibleFactory(counter);
   divisibleBy1To30.push(divisibleByNum().length);
 }
 */