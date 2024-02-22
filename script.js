let display=document.querySelector("input");
let buttons=document.querySelectorAll("button");
let buttonsArr=Array.from(buttons);
let str="";
buttonsArr.forEach(btn=>{
    btn.addEventListener("click",(event)=>{
            if(event.target.innerText=="DEL"){
            str=str.substring(0,str.length-1);
            display.value=str;
        }
            else if(event.target.innerText=="RESET"){
                str="";
                display.value=str;
        }

            else if(event.target.innerText=="="){
                str=eval(str);
                display.value=str;
            }
            
        else{
        str+=event.target.innerText
            display.value=str;
        }
        })
    })
