const switchBtn = document.getElementById("switch");
const display = document.getElementById("display");
const input = document.querySelectorAll("input");
let value = "";

/* 
switchBtn.addEventListener("click", ()=>{
    if(switchBtn.checked == true){
        document.body.setAttribute("data-theme", "dark");
        console.log('I am dark');
    }else{
        document.body.setAttribute("data-theme", "");
        console.log('I am light');
    }
});
 */

switchBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
});

input.forEach((e)=>{
    e.addEventListener("click", (event)=>{
        if(event.target.value == "="){
            if(value.length != 0){
                let newval = eval(value);
                value = newval;
                display.value = value;
            }
        }else if(event.target.value == 'C'){
            value = "";
            display.value = value;
        }else if(event.target.value == "switch"){
        }else{
            value += event.target.value;
            display.value = value;
        }

        if(!event.target.classList.contains("switch")){
            event.target.classList.add("active");
            setTimeout(()=>{
                event.target.classList.remove("active");
            },400);
        }
    });
});