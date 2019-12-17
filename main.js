document.getElementById("btnSave").addEventListener("click",addUser);
document.getElementById("btnStartGame").addEventListener("click",startGame);
/* document.getElementById("btnNext").addEventListener("click",saveScore); */

console.log(detectmobile());

let data = [];
let holes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

$("#startBtn").on("click",function(){
    $("#popupLogin").popup("open");
});

/* Helpers */
function _id(id){
    return document.getElementById(id);
}

hideTabContent();
let check = false;


function toggleContent(i){
    
    // hämta förälder-div
 
    
    // hämta nu div med aktuellt innehåll
    const content = document.getElementsByClassName("tabContent")[i];
    
    if(content.style.display === "block")
    {
        hideTabContent();
    }
    else
    {
        hideTabContent();
        content.style.display = "block";
    }
}

// funktion som döljer allt tab-innehåll...
function hideTabContent(){
    let tabContent = document.getElementsByClassName("tabContent");
    tabContent = Array.from(tabContent);

    tabContent.forEach(el=>{
        el.style.display = "none";
    });

} 

/* Spara användarnamnet i data variabeln */

function addUser(event){

    if(checkName() == true){
        event.preventDefault();

        let username = _id("un").value;
    
        let object = {username};
    
        data.push(object);
    
        alert("Ny spelare tillagd")
        clearForm();
    
        console.log(data);
    }
    else{
        event.preventDefault();
        alert("Namn måste innehålla minst en bokstav");
    }

}

/* Printar ut spelarna */

function startGame(event){

    event.preventDefault();

    let content = _id("holeContent");
    
    let html = data.map((item)=>{
        return `
        <form id="scoreForms">
        <h2 class="scoreName">${item.username}</h2>  
        <input type="text" name="score" class="scores" value="" placeholder="Score" data-theme="a">
        </form>
            `;
        })

    content.innerHTML = html.join("");
     
    $("#popupLogin").popup("close");
    $("#gameStart").hide(1000);
    $("#holeContent").show(2000);
    
}

/* Printa nuvarande håls namn vid klick på nästa hål */

function printHoleName(){
    let content = _id("currentHole");
    let hole = 0;
    let btn = _id("btnNext");
    
    let html = btn.addEventListener("click",function(){
        for(let i = 0; i<holes;i++){

            hole++;

            return `
            <h2>${hole[0]}</h2>
        `;
            
        }
        
        content.innerHTML = html.join(""),
        
        startGame();

    });

}
printHoleName();


/* Man måste fylla i minst en bokstav/siffra på popupen */

function checkName(){
    let username = _id("un");

    if(username.value.toString().length>=1){
        return true;
    }
    else{
        return false;
    }

}

/* Sparar inskriven score vid klick på nästa hål */

/* 
function saveScore(){
    
    let content = _id("liveUpdate");

    content.style.display = "block";

    let html = data.map((item)=>{

        return `
            <h2>${item.score.value}</h2>
        `
    });
          
    content.innerHTML = html.join("");
        
}
 */
/* Clearar formuläret */

function clearForm(){
    _id("popupForm").reset();
}


function detectmobile() {
   if(window.innerWidth <= 900 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}
