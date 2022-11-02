function cl(text) {
    console.log(text)
}

const rainbowColors = []

rainbowColors.push("orange")
rainbowColors.unshift("red")
rainbowColors.push("yellow")
rainbowColors.push("green","blue","indigo","violet")

cl(rainbowColors.length)
cl(rainbowColors[1])
cl(rainbowColors[rainbowColors.length - 1])
cl(rainbowColors.indexOf("blue"))

const twoColors = rainbowColors.slice(1,3)
cl(twoColors)
const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5]
nums.splice(3,3)
cl(nums)

const arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]]
cl(arrOfArrs[0][0])
cl(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1])
for (let i=0; i < arrOfArrs[arrOfArrs.length-1].length; i++) {
    cl(arrOfArrs[arrOfArrs.length-1][i])
}

const topchoice = ["dogs", "books", "presidents", "whatever", "you want"]

for (let i = 0; i < topchoice.length; i++) {
    switch((i+1) % 10) {
        case 1: suffix = "st";
        break;
        case 2: suffix = "nd";
        break;
        case 3: suffix = "rd";
        break;
        default: suffix = "th";
    }

    cl("My #" + (i+1) + " choice is " + topchoice[i] + ".")
    cl("My " + (i+1) + suffix + " choice is " + topchoice[i] + ".")
}

const readingList = [
    {
    title: "Sapiens", 
    author: "Yuval Noah Harari",
    alreadyRead: false
    },
    {
    title: "A Life on Our Planet", 
    author: "David Attenborough",
    alreadyRead: true
    }
]
    
for (i=0; i < readingList.length; i++) {
    if(readingList[i].alreadyRead){
        cl("You have already read \"" + readingList[i].title + "\", by " + readingList[i].author)
    } else {
        cl("You still need to read \"" + readingList[i].title + "\", by " + readingList[i].author)
    }
}

const recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    serves: 2,
    ingredients: [
            "- 500ml Milk",
            "- 2/3 cups of vanilla protein powder",
            "- 2 tbs rolled oats",
            "- Pinch of cinnamon",
            "- 2 cups of baby spinach leaves",
            "- 2 frozen bananas",
            "- 2 roughly chopped apples",
            "- 1/2 avocado",
            "- 2 tsp fresh ginger",
            "- 6 ice cubes"
            ]
   };

cl(`${recipe.title}\n\nServes: ${recipe.serves}\n\nIngredients:\n\n${recipe.ingredients.join('\n')}`)

const movie = {
    title: "The Life Aquatic",
    duration: 118,
    director: "Wes Anderson",
    stars: [
        "Bill Murray",
        "Cate Blanchett",
        "Anjelica Huston",
        "Jeff Goldblum",
        "Willem Dafoe"
        ]
   };

cl(`'${movie.title}' lasts for ${movie.duration} minutes, and was directed by ${movie.director}. Stars: ${movie.stars.join(', ')}`)
