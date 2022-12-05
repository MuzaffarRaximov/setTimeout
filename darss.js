const text=document.querySelector("#text");
const text2=document.querySelector("#text2");
const text3=document.querySelector("#text3");
const date=new Date();


text.innerHTML=date.getFullYear();


// setTimeout =>  biror bir  funksiyani malumbir vaqtdan keyin ishga tushiradi.

function myFunction(){
   text2.innerHTML="Hello setTimeout"
}
 const setFunction=setTimeout(myFunction,3000);
 const clearFunction=()=>clearTimeout(setFunction);
 

 // setInterval => biror bir funsiyani ma'lum bir vaqda ishga tushiradi.


function myInterval(){
    const dates=new Date();
    text3.innerHTML=dates.toLocaleTimeString();
}
const setFunction2=setInterval(myInterval,1000)







const list=document.querySelector(".list");
const next=document.querySelector(".next");
const prev=document.querySelector(".prev");
const items=document.querySelectorAll(".item");

let index=0;
function nextSlide(){
    index++;
    console.log(index);
    getSlide();
}
function prevSlide(){
    index--;
    console.log(index);
    getSlide();
}
function getSlide(){
    if(index>items.length-1){
        index=0;
    }
    if(index<0){
        index=items.length-1;
    }
    list.style.transform=`translateX(${-index*1504}px)`;
}
