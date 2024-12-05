let user = 0;
let comp = 0;
let choices = document.querySelectorAll(".cho");
let choices2 = document.querySelectorAll("img");
let msg1 = document.querySelector("#msg1")
let msg = document.querySelector(".msg")
let user1 = document.querySelector("#user");
let comp1 =document.querySelector("#comp")


choices.forEach((choi) => {
    choi.addEventListener("click", () => {
        let choiceid = choi.getAttribute("id");
        // console.log("choices is click" ,choiceid)
        playgame(choiceid);
    })
});
const compchoi2 =() =>{
    let opt =["rock" ,"paper","Scissors"];
    let idx = Math.floor(Math.random()*3);
    return opt[idx]
}
const playgame = (choiceid) => {
    console.log("user choice = " ,choiceid)
    let compchoi = compchoi2();
    console.log("comp choice = ", compchoi);
    if (choiceid === compchoi){
        drawgame();
    }
    else{
        let userwin = true;
        if(choiceid ==="rock"){
            userwin = compchoi === "paper"? false:true
            // if(userwin == false){
            //     document.querySelector(".gif").querySelector("#rock1").style.animation ="rock 3s "
            //     document.querySelector("header").style.animation ="opacity 3s"
            // }
        }
        else if(choiceid ==="paper"){
            userwin = compchoi === "Scissors"? false:true
        }
        else{
            userwin = compchoi === "rock"?false:true
        }
        showWinner(userwin , choiceid , compchoi)
        
        
}

    
}
let drawgame =() =>{
    // console.log("Game was draw..")
    msg1.innerText ="Opps... it's draw"
    msg1.style.backgroundColor ="brown";
}
let showWinner = (userwin,choiceid,compchoi) => {
    if(userwin){
        user++;
        user1.innerText = user
        msg1.innerText =`You Win...your ${choiceid} beats ${compchoi}`;
        msg1.style.backgroundColor ="green";
    }
    else{
        comp++;
        comp1.innerText = comp
        msg1.innerText =`You Lose...${compchoi} beats your ${choiceid}`;
        msg1.style.backgroundColor ="red";
    }

};
