console.log("Hello");

// variables declaration.
let songIndex = 1;
let song = new Audio('musics/1.mp3')
let masterPlay = document.getElementById('play');
let masterControlar = document.getElementById('controler');


let musics = [
    { songName: "Inferno", filePath: "musics/Inferno.m4a", coverpath: "images/inferno.png" },
    { songName: "Lily", filePath: "musics/Lily.mp3", coverpath: "images/Lily.png" },
    { songName: "Grandeur", filePath: "musics/Grandeur.mp3", coverpath: "images/Grandeur.png" },
    { songName: "Phoenix", filePath: "musics/Phoenix.mp3", coverpath: "images/Phoenix.png" },
    { songName: "On my way", filePath: "musics/On my way.mp3", coverpath: "images/On my way.png" },
    { songName: "Safari", filePath: "musics/Safari.mp3", coverpath: "images/Safari.png" },
    { songName: "Alone", filePath: "musics/Alone.mp3", coverpath: "images/On my way.png" },
    { songName: "Legends Never Die", filePath: "musics/Legends never die.mp3", coverpath: "images/ldn.png" },
    { songName: "Enemy", filePath: "musics/Enemy.m4a", coverpath: "images/Enemy.png" },
    { songName: "Kings & Queens", filePath: "musics/Kings and queens.mp3", coverpath: "images/Kings & Queens.png " },
]

//  event listener

masterPlay.addEventListener('click', () => {
    if (song.paused || song.currentTime === 0) {
        song.play();
        masterPlay.hidden = true;
        document.getElementById('pause').removeAttribute("hidden");
    }
})

document.getElementById('pause').addEventListener('click', () => {
    song.pause()
    document.getElementById('pause').hidden = true;
    masterPlay.hidden = false;
})

// update controler
song.addEventListener('timeupdate', () => {
    progress = parseInt(((song.currentTime) / (song.duration)) * 100)
    masterControlar.value = progress
})

masterControlar.addEventListener('change', () => {
    song.currentTime = masterControlar.value * song.duration / 100;
})

const makePlay = () => {
    Array.from(document.getElementsByClassName('hello')).forEach(element => {
        element.hidden = false
        element.nextElementSibling.hidden = true
    });
}
Array.from(document.getElementsByClassName('hello')).forEach(element => {
    element.addEventListener('click', (e) => {
        makePlay();
        songIndex = parseInt(e.target.id)
        e.target.hidden = true
        element.nextElementSibling.hidden = false
        song.src = `musics/${songIndex}.mp3`
        song.currentTime = 0
        song.play()
        element.nextElementSibling.addEventListener('click', (e) => {
            element.nextElementSibling.hidden = true
            element.hidden = false
            song.pause()
            document.getElementById('pause').hidden = true;
            masterPlay.hidden = false;
        })
        document.getElementById('pause').hidden = false;
        masterPlay.hidden = true;
    })
});


document.getElementById('backward').addEventListener('click', () => {
    if (songIndex < 1) {
        songIndex = 1
        console.error('this is limit')
    }
    else {
        songIndex -= 1
    }
    document.getElementById(`${songIndex}`).hidden = true
    document.getElementById(`${songIndex}`).nextElementSibling.hidden = false

    song.src = `musics/${songIndex}.mp3`
    song.currentTime = 0
    song.play()
    document.getElementById(`${songIndex + 1}`).hidden = false
    document.getElementById(`${songIndex + 1}`).nextElementSibling.hidden = true

    document.getElementById(`${songIndex}`).nextElementSibling.addEventListener('click', () => {
        document.getElementById(`${songIndex}`).nextElementSibling.hidden = true
        document.getElementById(`${songIndex}`).hidden = false
        document.getElementById('pause').hidden = true
        masterPlay.hidden = false
        song.pause()
    })
})

masterPlay.addEventListener('click', () => {
    document.getElementById(`${songIndex}`).hidden = true
    document.getElementById(`${songIndex}`).nextElementSibling.hidden = false
    document.getElementById(`${songIndex}`).nextElementSibling.addEventListener('click', () => {
        document.getElementById(`${songIndex}`).nextElementSibling.hidden = true
        document.getElementById(`${songIndex}`).hidden = false
        document.getElementById('pause').hidden = true
        masterPlay.hidden = false
        song.pause()
    })
})

document.getElementById('pause').addEventListener('click', () => {
    document.getElementById(`${songIndex}`).hidden = false
    document.getElementById(`${songIndex}`).nextElementSibling.hidden = true
})

document.getElementById('forward').addEventListener('click',()=>{
    if (songIndex>9) {
        songIndex=9; 
        console.error('this is limit')      
    }
    else{
        songIndex +=1
    }
    song.src = `musics/${songIndex}.mp3`
    song.currentTime = 0
    song.play()
    document.getElementById(`${songIndex }`).hidden = true
    document.getElementById(`${songIndex }`).nextElementSibling.hidden = false
    document.getElementById(`${songIndex-1}`).hidden = false
    document.getElementById(`${songIndex-1 }`).nextElementSibling.hidden = true
    document.getElementById(`${songIndex}`).nextElementSibling.addEventListener('click',()=>{
        document.getElementById(`${songIndex}`).nextElementSibling.hidden=true
        document.getElementById(`${songIndex}`).hidden=false
        document.getElementById('pause').hidden=true
        masterPlay.hidden=false
        song.pause()
    })


})

