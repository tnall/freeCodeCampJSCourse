let count = 0;
let runningCount = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let welcomeEL = document.getElementById("welcome-el");
let myName = "Tim";
let greeting = "I missed you.";

welcomeEL.textContent = welcomeEL.textContent + ", " + myName + ". " + greeting;

//add emoji
welcomeEL.textContent = welcomeEL.innerText + "❤️‍🔥";


function increment(){
    count += 1;
    //set countEl's inner text to count
    countEL.textContent = count;
}
function save(){
runningCount += count;
    saveEL.textContent = "Previous entries: " + runningCount;
    //reset the count
    countEL.textContent = 0;
    count = 0;
}


console.log("Let's count people on the subway!")


