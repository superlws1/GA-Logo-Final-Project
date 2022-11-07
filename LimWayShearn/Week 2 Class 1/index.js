function cl(text) {
    console.log(text)
}

const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];

function printUser(users) {
    let temp = [];
    users.forEach(element => {
        temp.push(element)
    });
    cl(temp);
    
}
function login(email,password) {
    let index = -1;
    let match = false;
    users.forEach((e,currindex) => {
        if(e.email == email && e.password == password) {
            index = currindex;
            match = true;
        }
    });

    return {index:index, match:match};
}

if (login("gummo@ga.co","pinkFairyArmadillo").match) {
    cl("You are logged in");
} else {
    cl("Sorry, something went wrong");
}

if (login("gummo@ga.co","pinkFairyArmadillo1").match) {
    cl("You are logged in");
} else {
    cl("Sorry, something went wrong");
}

function createAccount(email,password,isAdmin) {
    users.push({
        email:email,
        password:password,
        isAdmin:isAdmin
    });
    
    printUser(users);
}
createAccount("chico@gmail.com", "redLippedBatfish", false);

function deleteAccount(email,password) {
    let currUser = login(email,password);
    if(currUser.match) {
        users.splice(currUser.index,1);
        cl(email + " deleted");
    } else {
        cl("No accounts deleted");
    }

    let temp = [];
    users.forEach(element => {
        temp.push(element)
    });
    printUser(users);

}
deleteAccount("zeppo@ga.co","dumboOctopus");
deleteAccount("zeppo@ga.co","dumboOctopus");

function updateAccount(email, password, details) {
    let currUser = login(email,password);
    if(currUser.match) {
        Object.keys(details).forEach(element => {
            if (Object.keys(users[currUser.index]).includes(element)) {
                users[currUser.index][element] = details[element];
                cl(element + " updated");
                cl(users)
            }
        });
        cl(email + " updated");
    } else {
        cl("No accounts updated");
    }

    printUser(users);
}

updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });

document.querySelector("title")
document.querySelector(".navi_banner_logo")
document.querySelector(".navi_menu_item.highlight a")
document.querySelector(".home-hero__billboard h1")
document.querySelector(".g-row.medium-flex")
document.querySelector(".facts_list_item_quantity")
document.querySelectorAll(".facts_list_item")[2]
document.querySelector(".Employers__list___1cuG_")
document.querySelector(".navi_footer-grid-one-half.navi_footer-main-col a")
document.querySelector(".navi_footer-signup-input")

document.querySelector("a").innerHTML = "GOOGLE"
document.querySelector("a").setAttribute("href","https://www.google.com")
document.querySelector("input").value = "WWW"

document.querySelector("h1").style.textDecoration = 'underline';