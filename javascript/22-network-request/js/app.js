const form = document.querySelector("form");
const songDisplay = document.querySelector(".song-diplay");

// for the music player
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const playList = document.querySelector("select");
    const song = playList.value;

    const url = `files/${song}.txt`;
    // fetch api
    fetch(url).then(function (res) {
        return res.text();
        // console.log(res.ok); //was the request successful
        // console.log(res.status); //gives us the status code
    }).then(function (text) {
        songDisplay.textContent = text;
    });

})
