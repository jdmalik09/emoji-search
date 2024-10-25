let search = document.getElementById("search");
let display = document.getElementById("display-emoji");
let button = document.querySelectorAll("button");


window.addEventListener("load", () => displayEmoji(""));


function displayEmoji(searchQuery) {

    let filteredEmoji = emojiList.filter((emoji) => {
        if (!searchQuery) {
            return true;
        }
        if (emoji.description.includes(searchQuery)) {
            return true;
        }
        if (emoji.aliases.includes(searchQuery)) {
            return true;
        }
        if (emoji.tags.includes(searchQuery)) {
            return true;
        }
        return false;
    });


    display.innerHTML = "";
    filteredEmoji.forEach((e) => {
        let emoji_box = document.createElement("div");
        emoji_box.innerText = e.emoji;
        emoji_box.classList.add('span');
        display.append(emoji_box);
    
    });
}


search.addEventListener("keyup", function(){
    let searchValue = search.value.toLowerCase();
    displayEmoji(searchValue);
});

display.addEventListener("click", (e) => {
    navigator.clipboard.writeText(e.target.innerText);
    alert(e.target.innerText + " "  +"Copied to clipboard");
});

button.forEach(btn => {
    btn.addEventListener("click", () => {
        event.preventDefault();
        if(btn.innerText.toLowerCase() === "all"){
            displayEmoji();
        }
        else{
            displayEmoji(btn.innerText.toLowerCase());
        }
    }) 
})