///////////////////////////////////////////////////////////////// Increment Function
let count = 0

let countEl = document.getElementById("count-el")

console.log(countEl)

function increment()
{
    count += 1
    countEl.textContent = count
    console.log("The button was clicked")
}

// OR

// let count = 0

// function increment()
// {
//     count += 1
//     document.getElementById("count-el").innerText = count
//     console.log("The button was clicked")
// }

///////////////////////////////////////////////////////////////// Save Function

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function save()
{
    countStr = count + " - "
    saveEl.textContent += countStr
    console.log(count)
    
    // reseting counter
    count = 0
    countEl.textContent = count
}

// OR

// function save()
// {
//     console.log(countEl.innerText)
// }

///////////////////////////////////////////////////////////////// Reset Function

function reset()
{
    count = 0
    countEl.textContent = count
    saveEl.textContent = "Previous entries: "
}