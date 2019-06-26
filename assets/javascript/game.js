
var songData = [
    {
        "songTitle":"Square Biz",
         "songArtist":"Teena Marie",
         "songImg":"./assets/images/TeenaMarieSquareBiz.jpg",
         "songSrc":"./assets/music/TeenaMarieSquareBiz.mp3",
    },
    {
        "songTitle":"How Will I Know",
        "songArtist":"Whitney Houston",
        "songImg":"./assets/images/WhitneyHoustonHowWillIKnow.jpg",
        "songSrc":"./assets/music/WhitneyHoustonHowWillIKnow.mp3",
    },
    {
        "songTitle":"Billie Jean",
        "songArtist":"Michael Jackson",
        "songImg":"./assets/images/MichaelJacksonBillieJean.jpg",
        "songSrc":"./assets/music/MichaelJacksonBillieJean.mp3",
    }


]


function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

var ListOfVideoURLS = ['https://www.youtube.com/watch?v=-ucqEW0dDl4', ]


var MichaelJacksonSongID = youtube_parser('https://www.youtube.com/watch?v=o9wotiDai5U')

console.log(MichaelJacksonSongID)




var songSource = document.getElementById('boomboxSource')


console.log(songData.length)


GenerateRandomNumberBetweenZeroAndArrayLength = Math.floor(Math.random() * (songData.length-0 + 0) + 0)

loadInitialSong = songData[GenerateRandomNumberBetweenZeroAndArrayLength]
loadInitialSongWordLength = loadInitialSong.songTitle.length

function createUnderscoresFromWordLength(){
   var placeHolderUnderscores = "";
   var i
   for(i=0;i<loadInitialSongWordLength; i++){
        placeHolderUnderscores += "_ ";
   }
   console.log(placeHolderUnderscores)
   var underscoresInput = document.getElementById('underscoresInput')
   underscoresInput.setAttribute('placeholder', placeHolderUnderscores)
}

createUnderscoresFromWordLength()




console.log(GenerateRandomNumberBetweenZeroAndArrayLength)

var playTM = document.getElementById('playTM')
playTM.addEventListener('click', function(){
    songSource.setAttribute('src', songData[GenerateRandomNumberBetweenZeroAndArrayLength].songSrc)
    var song = document.getElementById('boombox')
song.autoplay = true
song.load()
})




