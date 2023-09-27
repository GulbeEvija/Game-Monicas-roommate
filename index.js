const videoFriends = document.querySelector("#myVideo");

const muteBtn = document.querySelector("#btnMute");
muteBtn.addEventListener("click", function() {
    videoFriends.muted = true;
    muteBtn.classList.toggle('clicked');
})

const unmuteBtn = document.querySelector("#btnUnMute");
unmuteBtn.addEventListener("click", function() {
    videoFriends.muted = false;
    unmuteBtn.classList.toggle('clicked');
})



const text = document.querySelector("h2");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click", rachel);
buttonTwo.addEventListener("click", phoebe);

function rachel() {
    videoFriends.setAttribute("src", "whyRachel.mp4");
    text.innerHTML = "Will Rachel be a good roommate?";
    buttonOne.innerHTML = "YES!";
    buttonTwo.innerHTML = "NO!";

    buttonOne.addEventListener("click", goodRachel);
    buttonTwo.addEventListener("click", badRachel);

}

function goodRachel() {
    videoFriends.setAttribute("src", "rachelYes.mp4");
    text.innerHTML = "Monica and Rachel were friends in high school.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";

}

function badRachel() {
    videoFriends.setAttribute("src", "rachelNo.mp4");
    text.innerHTML = "Rachel and Monica fight too much!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function phoebe() {
    videoFriends.setAttribute("src", "whyPhoebe.mp4");
    text.innerHTML = "Will Phoebe be a good roommate?";
    buttonOne.innerHTML = "YES!";
    buttonTwo.innerHTML = "NO!";

    buttonOne.addEventListener("click", goodPhoebe);
    buttonTwo.addEventListener("click", badPhoebe);
}

function goodPhoebe() {
    videoFriends.setAttribute("src", "phoebeRoommate.mp4");
    text.innerHTML = "Phoebe cares about the peace!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}

function badPhoebe() {
    videoFriends.setAttribute("src", "smellyCat.mp4");
    text.innerHTML = "Phoebe sings Smelly cat too much!";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
}
