// function sayHello() {
//     console.log("Harshita")
// }
// sayHello();
// sayHello;




// function getUserRole(name , role){


//     switch(role) {
//         case "admin":
//             return`${name} is admin with all access`;
//             break;
//         case "subadmin":
//             return`${name} is sub-admin with all access to create and delete courses`;
//             break;
//         case "testprep":
//             return`${name} is a test prep with access to create and delete courses`;
//             break;  
//         case "user":
//             return`${name} is a user to consume content`;
//             break;  
//        default:
//             return`${name} is is a trial user`;
//             break;
//     }   
// }

// console.log(getUserRole("Harshita", "admin"));




function doAddition(x){
    return function(y){
        return x + y;
    }
}


var add5 = doAddition(4);
console.log(add5(5));
