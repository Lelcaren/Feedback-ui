const ratingsEls = document.querySelectorAll(".rating");
const btnEl =document.getElementById("btn")

const containerEl=document.getElementById("container")


let selectedRating= "";




ratingsEls.forEach((ratingsEl) => {
   ratingsEl.addEventListener("click",(event) => {
    removeActive();
    selectedRating = 
    event.target.innerText || event.target.
    parentNode.innerText;
    event.target.classList.add("active");
   event.target.parentNode.ClassList.add("active")
   });
}) ;

btnEl.addEventListener("click", ()=> {
 if(selectedRating !==""){
    containerEl.innerHTML =`
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use feedback to improve our
    customer support.</p>
    `;
 }
});

function removeActive(){
    ratingsEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    });
}