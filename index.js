let highlightFront = "<span class=\"highlight\">";
let highlightBack = "</span>";
let glossaryTerm = document.querySelectorAll(".GlossaryTerm");
const searchBox = document.querySelector("#inputBox");
const movieID = document.querySelector("#regionID");
const resetBtn = document.querySelector("#resetBtn");

/*Initialize*/
function Initialize (glossary) {
  glossary.forEach(element => {
    const newGlossaryTerm = document.createElement('li');
    const newGlossaryClass = document.createElement('li');
    const newGlossaryDef = document.createElement('li');
    const newGlossaryImg = document.createElement('img');
    
    newGlossaryTerm.classList.add("GlossaryTerm")
    // newGlossaryDef.classList.add("GlossaryDef")
    
    newGlossaryTerm.innerHTML = element.name.common
    liTerm = document.getElementById("main").appendChild(newGlossaryTerm)
    
    const tempUL = document.createElement('ul');
    liTerm.appendChild(tempUL)
    
    newGlossaryClass.innerHTML = "Region: " + element.region
    newGlossaryClass.setAttribute("data-","1");
    tempUL.appendChild(newGlossaryClass)
    newGlossaryDef.innerHTML = "Definition: " + element.cca2
    newGlossaryDef.setAttribute("data-","1");
    tempUL.appendChild(newGlossaryDef)
    newGlossaryImg.setAttribute("src",element.flags.png)
    newGlossaryImg.style.width = '200px';
    newGlossaryImg.style.height = 'auto';
    tempUL.appendChild(newGlossaryImg)
  });
  glossaryTerm = document.querySelectorAll(".GlossaryTerm");
}

/*Display element*/
function displayElement (showList,element) {
    if (showList[0].getAttribute('data-') + showList[1].getAttribute('data-') == '11') {
        element.style.display = "list-item"
    } else {
        element.style.display = "none"
    }
}

/*Clear highlight*/
function clearHighlight (element) {
  let highlightFrontRE = new RegExp(highlightFront,'g');
  let highlightBackRE = new RegExp(highlightBack,'g');

  element.innerHTML = element.innerHTML.replace(highlightFrontRE,'');
  element.innerHTML = element.innerHTML.replace(highlightBackRE,'');
}

/*Reset Button*/
resetBtn.addEventListener("click", function() {
    searchBox.value = "";
    movieID.value = -1;
    
    glossaryTerm.forEach(element => {
        listItem = element.getElementsByTagName("li");

        for (let i = 0; i < listItem.length; i++) {
            listItem[i].setAttribute('data-','1')
        }

        element.style.display = "list-item"
        clearHighlight(element)
    });
});

function getIndicesOf(searchStr, str) {
  let searchStrLen = searchStr.length;

  if (searchStrLen == 0) {
      return [];
  }
  let startIndex = 0, index, indices = [];

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
  }
  return indices;
}

/*Search Description*/
searchBox.addEventListener("keyup", function() {
    // console.log(searchBox.value)
    glossaryTerm.forEach(element => {
        let showList = element.getElementsByTagName("li");
        // console.log(element.innerHTML.split('<')[0])

        clearHighlight(element)

        const countryName = element.innerHTML.split('<')[0];
        // console.log(countryName)

        if (!searchBox.value) {
            showList[0].setAttribute('data-','1');
            displayElement(showList,element);
        } else {
            if (countryName.toUpperCase().includes(searchBox.value.toUpperCase())) {
              showList[0].setAttribute('data-','1');
              displayElement(showList,element);

              /*Highlight text*/
              let descriptionItemIndex = getIndicesOf(searchBox.value.toUpperCase(),countryName.toUpperCase())

              // console.log(descriptionItemIndex)
              let newText = countryName.slice(0,descriptionItemIndex[0]);
              for (let i = 0; i < descriptionItemIndex.length; i++) {
                newText = newText + highlightFront + countryName.slice(descriptionItemIndex[i],descriptionItemIndex[i] + searchBox.value.length) + highlightBack
                newText = newText + countryName.slice(descriptionItemIndex[i] + searchBox.value.length,descriptionItemIndex[i+1])
          
                if (i + 1 == descriptionItemIndex.length) {
                  newText = newText + element.innerHTML.slice(countryName.length)
                }
              }
              // console.log(newText)
              element.innerHTML = newText;

            } else {
                showList[0].setAttribute('data-','0');
                displayElement(showList,element);

            }
        }
        
    });
    
});

/*Drop down selection*/
movieID.addEventListener("change", function() {
    // console.log(movieID.value)
    glossaryTerm.forEach(element => {
        let showList = element.getElementsByTagName("li");

        const classItem = element.getElementsByTagName("li")[0].innerHTML.slice(7).trim()
        // console.log(classItem)

        if (movieID.value == -1) {
            showList[1].setAttribute('data-','1');
            displayElement(showList,element);
        } else {
            if (classItem == movieID.value) {
                showList[1].setAttribute('data-','1');
                displayElement(showList,element);
            } else {
                showList[1].setAttribute('data-','0');
                displayElement(showList,element);
            }
        }
    });
});

// doFoo.onclick = () => {
//     const myNode = document.getElementById("foo");
//     while (myNode.firstChild) {
//       myNode.removeChild(myNode.lastChild);
//     }
//   }

let url = "https://restcountries.com/v3.1/all";

fetch(url).then((response)=> {
  return response.json()
}).then((data) => {
  Initialize(data)

    // let {name:name, cca2:countryCode, region:region, flags:image} = data;
    // console.log(data[0].name)

}).catch((error) => {
    console.log(error)
})