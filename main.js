document.getElementById("btnSave").addEventListener("click",addUser);
document.getElementById("btnStartGame").addEventListener("click",startGame);

let data = [];


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

    event.preventDefault();

    let username = _id("un").value;

    let object = {username};

    data.push(object);

    alert("Ny spelare tillagd")
    clearForm();

    console.log(data);
}

/* Printar ut spelarna */

function startGame(event){

    event.preventDefault();

    let content = _id("holeContent");
       
    let html = data.map((item)=>{
        return `
        <h2>${item.username}</h2>  
            `;
        })

    content.innerHTML = html.join("");
     
    $("#popupLogin").popup("close");
}


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
