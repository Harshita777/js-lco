// for(let i = 0;i<10;i++){
//     console.log(i);

// }

const myStates = [
    "Rajasthan", 
    "Delhi",
    "Assam",
    1947 ,
    "Jharkhand", 
    "Maharastra",
];
// for (let i = 0;i<= myStates.length;i++){
//    if (typeof myStates[i]!=="string") break;
//     console.log(myStates[i]);
// }



// let i = 0;

// while (i < myStates.length){
//  console.log(myStates[i]);
//  i++;
// }


// let i = 20


// do{
//     console.log(i);
//     i++;
// }
// while(i < 10)



// myStates.forEach((s) => (console.log(s)))
const names = ["Youtube", "Facebook", "Instagram", "netflix", "Amazon"];

for(const n in names){
    console.log(n)
}


const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    hk: "Harshita Kumari"
};

for(const n in symbols){
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
