const music = new Audio('MP3\Headlights.mp3');
//music.play();


//Array of Songs List 

const songs = [{
        id: 1,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h1.jpg"
    },
    {
        id: 2,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h2.jpg"
    },
    {
        id: 3,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h3.jpg"
    },
    {
        id: 4,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h4.jpg"
    },
    {
        id: 5,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h5.jpg"
    },
    {
        id: 6,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h6.jpg"
    },
    {
        id: 7,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h7.jpg"
    },
    {
        id: 8,
        songName: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h8.jpg"
    },
    {
        id: 9,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h9.jpg"
    },
    {
        id: 10,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h10.jpg"
    },
    {
        id: 11,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h11.jpg"
    },
    {
        id: 12,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h12.jpg"
    },
    {
        id: 13,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h13.jpg"
    },
    {
        id: 14,
        songName_1: 'On My way<br> <div class="subtitle_h1">Alan Walker</div>',
        poster: "images\h14.jpg"
    }



]

//Array songs List

Array.from(document.getElementsByClassName("SongItem")).forEach((e, i) => {
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    //e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName_1;

});


//Master Play Button start

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('');

    } else {
        music.pause();
    }
});





let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});


pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});


let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let artist_bx = document.getElementsByClassName('artist_bx')[0];



pop_art_right.addEventListener('click', () => {
    artist_bx.scrollLeft += 330;
});


pop_art_left.addEventListener('click', () => {
    artist_bx.scrollLeft -= 330;
});