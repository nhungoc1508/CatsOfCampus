var sections = document.getElementsByClassName("section")
for (let i=0; i<sections.length; i++) {
    var description = ""
    var typeText;
    // var photo = sections[i].children[0].children[0]
    sections[i].addEventListener("mouseenter", function(event) {
        var descDiv = sections[i].children[1].children[3]
        description = descDiv.innerText
        descDiv.innerText = ""
        var j = 0
        typeText = setInterval(function() {
            if (j < description.length) {
                descDiv.textContent += description[j]
                j++
            }
        }, 25);
        var photo = sections[i].children[0].children[0]
        photo.style.filter = "grayscale(0%)"
    })
    sections[i].addEventListener("mouseleave", function(event) {
        clearInterval(typeText)
        var descDiv = sections[i].children[1].children[3]
        descDiv.innerText = description
        var photo = sections[i].children[0].children[0]
        photo.style.filter = "grayscale(100%)"
    })
}

var hearts = document.getElementsByClassName("heart")
for (let i=0; i<hearts.length; i++) {
    hearts[i].clicked = false
    hearts[i].addEventListener("click", function(event) {
        hearts[i].clicked = !hearts[i].clicked
        if (hearts[i].clicked == true) {
            hearts[i].style.color = "salmon"
        } else {
            hearts[i].style.color = "skyblue"
        }
    })
}