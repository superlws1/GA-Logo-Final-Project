// logo = document.querySelector(".lnXdpd")
// logo.setAttribute("src","https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg")
// logo.setAttribute("srcset","")

// search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")
// search.value = "Yahooo!"

// const  newH3 = document.createElement('h3');
// newH3.innerHTML = 'Also created by JS'
// newH3.style.fontSize = '30px'
// newH3.style.color = 'green'

// document.body.insertBefore(newH3,document.querySelector('h2'));

// let img = document.querySelector("img");
// function increase () {
//     let style = getComputedStyle(img);
//     currWidth = parseInt(style.width);
//     newWidth = currWidth + 50;
//     img.style.width = newWidth + "px";
//     console.log("move")
// }

// setTimeout(increase,5000);
// setInterval(increase,500);

document.body.style.fontFamily = 'Arial, sans-serif';
document.querySelector('#nickname').innerHTML = document.querySelector('#nickname').innerHTML + "LWS";
document.querySelector('#favorites').innerHTML = document.querySelector('#favorites').innerHTML + "sleep"; 
document.querySelector('#hometown').innerHTML = document.querySelector('#hometown').innerHTML + "secret";

let liList = document.querySelectorAll('li');
liList.forEach(element => {
    element.classList.add('list-item')
});

let img = document.createElement('img');
img.setAttribute('src',"https://picsum.photos/id/64/400/500")
document.querySelector('ul').appendChild(img)


const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false,
      url: "https://m.media-amazon.com/images/I/41WVtoodZFL._AC_SY780_.jpg"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true,
      url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1427068429l/23346740.jpg"
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true,
      url: "https://kbimages1-a.akamaihd.net/80c31cad-62cd-4e17-bc44-79860a0c4c5d/1200/1200/False/a-really-short-history-of-nearly-everything-1.jpg"
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true,
      url: "https://litbooks.com.my/wp-content/uploads/2021/05/9781529108286.jpg"
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false,
      url: "https://upload.wikimedia.org/wikipedia/en/9/91/Cosmos_book.gif"
    }
  ];

books.forEach(element => {
    const newTitle = document.createElement('li');
    const newAuthor = document.createElement('li');
    const newImg = document.createElement('img');

    if (element.alreadyRead) {
        newTitle.style.color = 'green'
        newAuthor.style.color = 'green'
    } else {
        newTitle.style.color = 'red'
        newAuthor.style.color = 'red'
    }

    newTitle.innerHTML = "Title: " + element.title
    liTerm = document.getElementById("booklist").appendChild(newTitle)

    const tempUL = document.createElement('ul');
    liTerm.appendChild(tempUL)

    newAuthor.innerHTML = "Author: " + element.author
    tempUL.appendChild(newAuthor)

    newImg.setAttribute('src',element.url)
    newImg.style.width = '200px';
    newImg.style.height = '200px';
    tempUL.appendChild(newImg)

});

width = 300;
img.style.width = width + 'px';

function increaseWidth(){
    newWidth = parseInt(getComputedStyle(img).width) + 5
    // console.log(parseInt(getComputedStyle(img).width))
    img.style.width = newWidth + 'px';
    if (newWidth >= 600 ) {
        // setTimeout(increaseWidth,100)
        clearInterval(a);
        console.log(newWidth)
    }
}

// increaseWidth()
a = setInterval(increaseWidth,50);