
let likeBtn = document.querySelectorAll(".like-btn")



likeBtn.forEach((btn) => {
    let counter = 0;
    btn.addEventListener("click", () =>{
        let likeSection = btn.closest(".like-section")
        let likeCounter = likeSection.querySelector(".like-counter")
        counter +=1
        likeCounter.innerText = `${counter} `
    })
})
