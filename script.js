// login/logout button change back and forth when clicked

function logOut(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    } else {
        element.innerText = "Login";
    }
}

// hide "add definition" button when clicked

function hide(element) {
    element.remove();
}

// increase like count by 1 and alert that it was liked

function ninjaAlert(element) {
    element.parentElement.querySelector("#addLike").innerHTML++
    alert("Ninja was liked!")
}

// old solution, before I learned about parentElement

// first like button increases by 1 and alerts that it was liked when clicked

// let addLike1 = document.querySelector("#addLike1")
// let likeCount1 = 13

// function ninjaAlert1() {
//     likeCount1++
//     addLike1.innerText = likeCount1
//     alert("Ninja was liked!")
// }

// second like button increases by 1 and alerts that it was liked when clicked

// let addLike2 = document.querySelector("#addLike2")
// let likeCount2 = 37

// function ninjaAlert2() {
//     likeCount2++
//     addLike2.innerText = likeCount2
//     alert("Ninja was liked!")
// }