{/* <div id = "joke" class= "joke">Next Joke</div>
<button id = "jokebtn" class = "btn">Next Joke</button> */}

// PROMISES 

// 2cond => succ => fail  

// fetch("https://restcountries.eu/rest/v2/name/nepal")

// milega=> sahi Hai 
// nai milega => Inter error. ser error

// fulfilled
// reject

//90% promise consumed na ki create
//GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");


const setHeader = {
    headers:{
        Accept:"application/json"
    }
}

const generateJokes = () => {
    fetch("https://icanhazdadjoke.com",setHeader)
    .then((res)=> res.json())
    .then((data) =>{
        jokes.innerHTML = data.joke;
    }).catch((error) => {
        console.log(error);
    })
    //.catch((error)=>{
    //         console.log(error);
    // })
}

jokeBtn.addEventListener('click',generateJokes)
 generateJokes();