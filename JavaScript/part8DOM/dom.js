
// Example 1
document.getElementById("changeTextButton").addEventListener('click',function(){
   let paraghraph = document.getElementById("myParaghraph");
    paraghraph.textContent = "the paraghraph is changed"
})

// Example 2
document
.getElementById("highlightFirstCity")
.addEventListener('click',function () {
   let citiesList = document.getElementById("citiesList")
   citiesList.firstElementChild.classList.add("highlight")
})

// Example 3
document.getElementById('changeOrder').addEventListener('click',function () {
   let coffeeType = document.getElementById('coffeeType')
   coffeeType.textContent = "Espressp"
   coffeeType.style.backgroundColor = "brown"
   coffeeType.style.borderRadius = "5px"
   coffeeType.style.border = "white solid 1px"
})

// Example 4
document.getElementById('addNewItem').addEventListener('click',function () {
  let newItem=  document.createElement('li')
  newItem.textContent = "Eggs"
    document.getElementById("shoppingList").appendChild(newItem)
})

// Example 5
document.getElementById('removeLastTask').addEventListener('click',function () {
    let removedTask = document.getElementById('taskList')
    removedTask.lastElementChild.remove()
})

// Example 6 
document.getElementById('clickMeButton').addEventListener('dblclick',function () {
   alert("hello")
})

// Example 7
document.getElementById('teaList').addEventListener('click',function(event){
   if (event.target && event.target.matches(".teaItem")){
      alert("you have selected: " + event.target.textContent)
   }
}
)

// Example 8

document.getElementById("feedbackForm").addEventListener("submit",function (event) {
   event.preventDefault();
   let feedback = document.getElementById('feedbackInput').value
   document.getElementById('feedbackDisplay').textContent = `Feedback is ${feedback}`
})

// Example 9

document.addEventListener('DOMContentLoaded', function () {
   document.getElementById('domStatus').textContent = "DOM fully loaded"
})
// Example 10

document.getElementById('toggleHighlight').addEventListener('click',function(){
   let descriptionText = document.getElementById('descriptionText')
   descriptionText.classList.toggle("highlight")
})