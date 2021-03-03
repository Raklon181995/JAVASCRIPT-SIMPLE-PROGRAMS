// Q1. Write a JavaScript program that prints even numbers from 1 to 100 in descending order the output should show: 

// 100 98 96 . . . 2 

const EvenDescending = (number) => {
    console.log("Even numers in descending order of $(number)");

        for ( let i = number; i > 0; i -=2 ){
                console.log(i);

         }
}

EvenDescending(100);


// Q2. Write a JavaScript function that takes an array and a value and search that value in the given array. Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not found, the function should return "-1". 

// Test the code by defining an array and pass that array as an argument in your function. 

function Number(array,x){
    var index = -1
    array.find(function(item,i){
        if(item==x){
            index=i
            return true;
        }
        else{
            return false;
        }
     
    })
    return index;
}
 var array = [1,8,2,4,58,54,5,7,8,5,1,15,9,4,25,8,45,65,]
 var found = Number(array,54)
 console.log(found)


//  Q3. Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside. 

// create 2 <p> tags one having no attributes to it and another having class=”blue-white” and have some text inside. 

 

// I) change the text color of the element with  id=”root” to red on mouseover event. 

// ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event. 

// iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event; 

var divRf = document.getElementById('root')
 div.addEventListener("mouseover",function(){
     divRf.style.color = 'red'
 })

 divRf.addEventListener("mouseout",function(){
     divRf.style.color = "black"
 })
 
  
 function ChangeColor(){

    var getelem = document.getElementsByClassName("blue-white")
    getelem.addEventListener("mouseover",function(){

        getelem.style.color = 'blue'
        getelem.style.fontsize = '50px'
        getelem.style.color = 'White'

    })

    var getelem = document.getElementsByClassName("blue-white")
    getelem.addEventListener("mouseover",function(){

        getelem.style.backgroundColor = 'white'
        getelem.style.fountSize = '16px'
        getelem.style.color = 'black'

    })

}
