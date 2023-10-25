(function init(){
    console.log("initialized!")
})(); //initialized
init(); //ReferenceError: init is not define

(function sum(a,b){
    console.log(a + b);
})(10, 20); //30