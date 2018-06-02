var pet ={
    words:'...',
    speak:function (say)
    {
        console.log(say + ' ' +this.words);
    }
}

//pet.speak("Speak");

var dog={
    words:'wang'
}

pet.speak.call(dog,'speak');

//不够友好，在用的时候才有了这种能力。
