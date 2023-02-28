let resultText = $(".result-text")
let toggleMode = $(".toggle-mode")

$(".user-text").change(function() {
        let text = $(".user-text").val()
        if (palindromeCheck(text)){
            resultText.text(`"${text}" is a palindrome.`)
        } else {
            resultText.text(`"${text}" is not palindrome.`)
        }
});

function palindromeCheck(text) {
    return text.toLowerCase().split("").reverse().join("") === text.toLowerCase()
}

toggleMode.click(function() {
    $(".main-section").toggleClass("dark-mode")
    $("body").toggleClass("dark-mode-body")
    $(".user-text").toggleClass("dark-user-text")

    if (toggleMode.attr("src") === "images/sun.png") {
        toggleMode.attr("src", "images/moon.png")
    } else {
        toggleMode.attr("src", "images/sun.png")
    }
})
