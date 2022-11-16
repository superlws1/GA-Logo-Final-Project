function cl(text) {
    console.log(text)
}
cl(1)
cl(2)
setTimeout(() => {
    cl(20)
}, 0);
cl(3)

let h1 = document.querySelector('h1')

function myExecutor(resolve, reject) {
    if (!true) {
    resolve("This will run the .then method");
    } else {
    reject("This will run the .catch method");
    }
   }
let myPromise = new Promise(myExecutor);
function successHandler(data) {
cl(data)
}
function errorHandler(error) {
cl(error+"a")
}
myPromise.then((data) => {
cl(data+"aaa");
}).catch(errorHandler);

let request = new XMLHttpRequest()
request.open('get','https://jsonplaceholder.typicode.com/todos')

cl(request)

const colOne = document.querySelector(".col-1")
const colTwo = document.querySelector(".col-2")
const btn1 = document.querySelector("#btn1")


let url = "http://www.omdbapi.com/?t=Jaws&apikey=aa2a6edc&plot=full"

fetch(url).then((response)=> {
    cl("data success")
    return response.json()
}).then((data) => {
    cl(data)
    let {Title:title, Year:years, Poster} = data;
    cl(title + years + Poster)

    colOne.innerHTML = `
    <h2>${title}</h2>
    <p>Years: ${years}</p>
    <img src=${Poster}>
    `;
    colTwo.innerHTML = years




}).catch((error) => {
    cl(error)
    cl("error")
})

let optionMethod = {
    method: "POST"
}