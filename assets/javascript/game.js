


var songData = [

    {
        "songTitle":"Square Biz",
        "songArtistFirstName":"TEENA",
        "songArtistLastName":"MARIE",
        "songArtistFullName":"TEENA MARIE",
        "songImg":"./assets/images/TeenaMarieSquareBiz.jpg",
        "songSrc":"./assets/music/TeenaMarieSquareBiz.mp3",
    },
    {
        "songTitle":"How Will I Know",
        "songArtistFirstName":"WHITNEY",
        "songArtistLastName":"HOUSTON", 
        "songArtistFullName":"WHITNEY HOUSTON",
        "songImg":"./assets/images/WhitneyHoustonHowWillIKnow.jpg",
        "songSrc":"./assets/music/WhitneyHoustonHowWillIKnow.mp3",
    },
    {
        "songTitle":"Billie Jean",
        "songArtistFirstName":"MICHAEL",
        "songArtistLastName":"JACKSON",
        "songArtistFullName":"MICHAEL JACKSON",
        "songImg":"./assets/images/MichaelJacksonBillieJean.jpg",
        "songSrc":"./assets/music/MichaelJacksonBillieJean.mp3",
    },
    {
        "songTitle":"Sheila E",
        "songArtistFirstName":"SHEILA",
        "songArtistLastName":"E",
        "songArtistFullName":"SHEILA E",
        "songImg":"./assets/images/SheilaEGlamorousLife.png",
        "songSrc":"./assets/music/SheilaEGlamorousLife.mp3",
    },
    {
        "songTitle":"Sexual Healing",
        "songArtistFirstName":"MARVIN",
        "songArtistLastName":"GAYE",
        "songArtistFullName":"MARVIN GAYE",
        "songImg":"./assets/images/MarvinGayeSexualHealing.jpg",
        "songSrc":"./assets/music/MarvinGayeSexualHealing.mp3",
    },
    {
        "songTitle":"My Perogative",
        "songArtistFirstName":"BOBBY",
        "songArtistLastName":"BROWN",
        "songArtistFullName":"BOBBY BROWN",
        "songImg":"./assets/images/BobbyBrownMyPerogative.jpg",
        "songSrc":"./assets/music/BobbyBrownMyPerogative.mp3",
    },
    {
        "songTitle":"Don't Be Cruel",
        "songArtistFirstName":"BOBBY",
        "songArtistLastName":"BROWN",
        "songArtistFullName":"BOBBY BROWN",
        "songImg":"./assets/images/BobbyBrownMyPerogative.jpg",
        "songSrc":"./assets/music/BobbyBrownDontBeCruel.mp3",
    },
    {
        "songTitle":"Just Got Paid",
        "songArtistFirstName":"JOHNNY",
        "songArtistLastName":"KEMP",
        "songArtistFullName":"JOHNNY KEMP",
        "songImg":"./assets/images/JohnnyKempJustGotPaid.jpg",
        "songSrc":"./assets/music/JohnnyKempJustGotPaid.mp3",
    },
    {
        "songTitle":"Just Got Paid",
        "songArtistFirstName":"PRINCE",
        "songArtistLastName":"",
        "songArtistFullName":"PRINCE",
        "songImg":"./assets/images/PrinceWhenDovesCry.jpg",
        "songSrc":"./assets/music/PrinceWhenDovesCry.mp3",
    },
    {
        "songTitle":"Happy",
        "songArtistFirstName":"SURFACE",
        "songArtistLastName":"",
        "songArtistFullName":"SURFACE",
        "songImg":"./assets/images/SurfaceHappy.jpg",
        "songSrc":"./assets/music/SurfaceHappy.mp3",
    },
    {
        "songTitle":"P.Y.T",
        "songArtistFirstName":"MICHAEL",
        "songArtistLastName":"JACKSON",
        "songArtistFullName":"MICHAEL JACKSON",
        "songImg":"./assets/images/MichaelJacksonPYT.jpeg",
        "songSrc":"./assets/music/MichaelJacksonPYT.mp3",
    },
    {
        "songTitle":"Saturday Love",
        "songArtistFirstName":"CHERELLE",
        "songArtistLastName":"",
        "songArtistFullName":"CHERELLE",
        "songImg":"./assets/images/CherelleSaturdayLove.jpg",
        "songSrc":"./assets/music/CherelleSaturdayLove.mp3",
    },
    {
        "songTitle":"Forget Me Nots",
        "songArtistFirstName":"CHERELLE",
        "songArtistLastName":"",
        "songArtistFullName":"PATRICE RUSHEN",
        "songImg":"./assets/images/PatriceRushenForgetMeNots.jpg",
        "songSrc":"./assets/music/PatriceRushenForgetMeNots.mp3",
    },
    {
        "songTitle":"Take Your Time Do It Right",
        "songArtistFirstName":"SOS BAND",
        "songArtistLastName":"",
        "songArtistFullName":"SOS BAND",
        "songImg":"./assets/images/SOSBANDTAKEYOURTIMEDOITRIGHT.jpg",
        "songSrc":"./assets/music/SOSBANDTAKEYOURTIMEDOITRIGHT.mp3",
    },


    

] //End of Song Centra Database Array


var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, man, letters, lives, currentWord, numLettersMatched, messages, fullName;




var InitialState = {
    "highScore": 0,
    "numberOfWins": 0, 
    "songIndex": 0,
    "maxSongIndex":songData.length-1,
    "strikes":0,
    "livesRemaining":3,
    "keyPressed":false,
    "lengthOfChars":0

}


GenerateRandomNumberBetweenZeroAndArrayLength = Math.floor(Math.random() * songData.length)

loadInitialSong = songData[GenerateRandomNumberBetweenZeroAndArrayLength]
loadInitialSongWordLength = loadInitialSong.songArtistFullName.length
var loadAlbumArtPlaying = loadInitialSong.songImg
nameToGuess = loadInitialSong.songArtistFullName
console.log(nameToGuess)
InitialState.lengthOfChars = loadInitialSongWordLength
InitialState.songIndex = GenerateRandomNumberBetweenZeroAndArrayLength

//


var wordIntoArray = nameToGuess.split('')
console.log('Word Into Array: ', wordIntoArray)
var wordArrayWithIndexes = []

for(var i=0;i<wordIntoArray.length;i++){
    
    wordArrayWithIndexes.push({"letter":wordIntoArray[i],"index":i})
}


console.log(wordArrayWithIndexes)




/*

If timer runs out without guessing a word you get one strike
<button onclick="setTimeout(myFunction, 3000)">Try it</button> Setting execution
onkeypress="myFunction()"


1a)  Initial Display: Initially plays a random song on trigger event (Function 1). On keyboard click Begins game (Function 2)
1b)  Indicators:, 'Guess the song playing. Press any key to get started.(2A) 'All lights on border off (2B)',  
1c)  Number of wins starts off at 0 (Function 3), increments by +1 if entire word guessed correctly and then you start a new song. Go through list of songs 1 by 1. Start at 0 (Function 3)

*/


//On any key press on body grabs ID of element and controls actively associated classes

// create a one-time event

window.addEventListener('load', function() {
    console.log('All assets are loaded')
   
    
})




//document.getElementById('hangmanImage').src = "./assets/images/hangmanlive3Transparent.png"

document.getElementById('lettersUnguessed').addEventListener('click', function(){
    document.getElementById('letter').placeholder=''
    document.getElementById('letter').focus()
    
})

console.log(JSON.stringify(InitialState))



function onetime(node, type, callback) {

	// create event
	node.addEventListener(type, function(e) {
		// remove event
		e.target.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback(e);
	});

}

function upperCaseAll(){
    letterInput = document.getElementById('letter')
    letterInput.style.fontSize = "x-large"
    letterInput.style.color="white"
    var start = letterInput.selectionStart;
    var end = letterInput.selectionEnd;
    letterInput.value = letterInput.value.toUpperCase();
    letterInput.setSelectionRange(start, end);

}

var correctGuessesArray = []
console.log("Correct Guesses Array: ", correctGuessesArray)


var availableLetters = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
var space = " "
var whereIsSpace;
var spaceindices = []
let ids = wordIntoArray.indexOf(space)

while(ids != -1){
    spaceindices.push(ids);
    ids = wordIntoArray.indexOf(space, ids+1)
}
console.log('Index of Space: ',spaceindices)
whereIsSpace = spaceindices[0]



// Create Guessed Letter Array
var guessedLetters = []
//Push Underscores for Each character in word.
function createUnderscoresFromWordLength(){
   
  
    for(var i=0;i<loadInitialSongWordLength; i++){
         guessedLetters.push("_");
    }
 }
 
 createUnderscoresFromWordLength()
 
//Replace Underscore with space depending on space indices
 guessedLetters[whereIsSpace] = " "
console.log('Guessed Letters: ', guessedLetters)





function submitLetter(){
letterInput = document.getElementById('letter')
var guessedLetter = letterInput.value
letterInput.style.fontSize = "16px"
var matchOrNotArray = wordIntoArray.indexOf(letterInput.value)
console.log(matchOrNotArray)

var letterindices = []
let letterids = wordIntoArray.indexOf(guessedLetter)

while(letterids != -1){
    letterindices.push(letterids);
    letterids = wordIntoArray.indexOf(guessedLetter, letterids+1)
}
letterInput.value = ""
return addGuessedLettersToGuessedLettersArray(letterindices, guessedLetter)

}

var appendedLetters =  document.getElementById('lettersUnguessed').appendChild(document.createElement("li"))
appendedLetters.classList.add("d-inline", "text-light", "underscore", "display-3")
appendedLetters.innerHTML = guessedLetters.join('')


function addGuessedLettersToGuessedLettersArray(letterindices, guessedLetter){
    console.log(letterindices)
    console.log('Guessed Letter: ', guessedLetter)

    var lives = InitialState.livesRemaining

    if(letterindices.length!==0){
        for(var i=0;i<guessedLetters.length;i++){
            guessedLetters[letterindices[i]] = guessedLetter
        }
        var string = guessedLetters.join('')
        appendedLetters.innerHTML = string
        if(string==nameToGuess){
            appendedLetters.classList.add("glowOn")
            playWinSound()
            var albumArtImage = document.createElement('img')
            albumArtImage.classList.add('center-block')
            albumArtImage.src = loadAlbumArtPlaying
            document.getElementById('instructions').innerHTML = "You're a Winner!"
            document.getElementById('container').prepend(albumArtImage)
            setTimeout(function(){
                alert('You Win')
            },800)
        }
        return playDing()
   
    
    }
    else{
        
        
        subtractLife()
        playWrong()
        
        


    }
}

var lives = InitialState.livesRemaining

function subtractLife(){
    document.getElementById(`hangmanImage${lives}`).remove()
    let parentLives = document.getElementById('lives')
    let nestedLife = document.getElementById(`live${lives}`)
    parentLives.removeChild(nestedLife)

    lives--
   
    document.getElementById('man').innerHTML = `You have ${lives} Lives remaining. Guess Wisely.`
    

    if(lives>0){
        alert(`Wrong! ${lives} Lives Left!`)
        }
    if(lives==0){
        document.getElementById('man').innerHTML = `You have 0 Lives remaining. Game over buster.`
        var gameovertext = document.createElement('li')
        gameovertext.style.color ="white"
        gameovertext.style.fontSize="130px"
        gameovertext.style.listStyle="none"
        gameovertext.classList.add('glowOn')
        gameovertext.innerHTML = 'Game Over!'
        document.getElementById('hangmanController').appendChild(gameovertext)
        document.getElementById('')
        playGameOver()
        document.getElementById('glowTitle').classList.remove('glowOn')
        document.getElementById('glowTitle').classList.add('glowOff')
        var songSource = document.getElementById('boomboxSource')

        songSource.stop()
        alert('Game over. Try again later.')
    }
    console.log('Lives Left: ', lives)
    return lives
}


var startSound = new Audio("./assets/music/Climb.mp3");

var winningSound = new Audio("./assets/music/Win.mp3");

var gameOver = new Audio("./assets/music/GameOverRickJames.mp3"); //download in 10 minutes

var myBad = new Audio("./assets/music/Wrong.mp3");

var myDing = new Audio("./assets/music/Ding.mp3");


function playDing(){
    myDing.play()
}

function playWrong(){
    myBad.play()
}

function startGameSound(){
    startSound.play()
}

function playWinSound(){
    winningSound.play()
}

function playGameOver(){
    gameOver.play()
}

function youWin(){
    alert('You Win!')
}
console.log(guessedLetters)


//On Start Game Click Do these Things
function startGame() {
    document.getElementById('instructions').innerHTML = "Guess the name of the artist, letter by letter."
    startGameSound()
    playSong()
    document.getElementById('container').style.visibility="visible"
    document.getElementById('glowTitle').classList.add('glowOn')
    InitialState.keyPressed = "true"
    /* for(var j =0;j<loadInitialSongWordLength;i++){
        nameToGuess[i] = 
    }
 */
    
}

//Gran body
body = document.getElementById('body')

//Do something with body tag, startGame() will only run one time on keydown of anywhere in the body.
onetime(body, "keyup", startGame);   


var songSource = document.getElementById('boomboxSource')
songSource.onloadedmetadata = function () {
    alert(songSource.duration)    
}

console.log('Number of Songs in Game: ', songData.length)








console.log(GenerateRandomNumberBetweenZeroAndArrayLength)

function playSong(){
songSource.setAttribute('src', loadInitialSong.songSrc)
var song = document.getElementById('boombox')
song.autoplay = true
song.load()
   

}


console.log()


document.onload = function(){
    console.log('Loaded')
}

