let button = document.getElementById("myButton")    
let ball = document.querySelectorAll(".circle");
let adet = document.getElementById("adet");
ball = Array.from(ball);


button.addEventListener("click", ()=> { 
    if (adet.value > 5) {
        alert("Please Max 5 ticket. Other customer need a Ticket :D");
        adet.value="";
    }
    else {
    let j= 0;
    for (let k=0; k < adet.value; k++){
        let liste = [];
        while (liste.length<8){
           let m = 0;
            while (liste.length <6){
                let number = randomNumber(1,99)
                if(liste.includes(number)){
                    continue
                }
                else{
                liste.push(number);  
                ball[j].value = liste[m];
                ball[j].style.backgroundColor = generateRandomColor() ;
                ball[j].style.visibility = "visible" ;
                j++;
                m++;
                }
            }
            let number2 = randomNumber(1,90);
            if(liste.includes(number2)){
                continue
            }
            else{
            liste.push(number2);
            ball[j].value = liste[6];
            ball[j].style.visibility = "visible" ;
            j++;
            }
            let number3 = randomNumber(1,90)
            liste.push(number3);
            ball[j].value = liste[7];
            ball[j].style.visibility = "visible" ;
            j++;
        }
    }
    if (adet.value != 5) {
        for (let d = (adet.value*8); d < 40; d++) {
            ball[d].style.visibility = "hidden" ;
        }
    }
    adet.value="";
} 
})
    

function randomNumber(min,max) {
    return Math.floor(Math.random() * max-min+1)+min;
}

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
