var name = "Harshita";
console.log("Line number 3", name);

function sayName(){
    var name = "my Name";
    console.log("Line number 7",name);
    
    sayNameTwo()
    function sayNameTwo(){
        var name = "S";
        console.log("Line number 11",name);
    }
}
sayName();