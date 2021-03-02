let postAuthorInput = document.getElementById("postAuthor")
let postTextInput = document.getElementById("postText")
let postImgUrlInput = document.getElementById("postImgUrl")
let postImgFileInput = document.getElementById("postImgFile")
let postSubmitInput = document.getElementById("postSubmit")
let postImgDisplay = document.getElementById("postImgDisplay")
let left = document.querySelector(".left")
let leftBody = document
let posts = document.getElementById("posts")
let clearFeed = document.getElementById("clearFeed")
// let leftBodyBtnsLeftBtn = document.querySelector("#likeBtn")

clearFeed.addEventListener("click", ()=> {
    localStorage.clear()
    location.reload()
})
class Post {
    constructor(postAuthor, postText, postImgUrl) {
        this.postAuthor = postAuthor;
        this.postText = postText;
        this.postImgUrl = postImgUrl;
    } 
}


function createNewPost() {
    let newPost = new Post(
        postAuthor = postAuthorInput.value,
        postText = postTextInput.value,
        postImgUrl = postImgUrlInput.value,
    )
    console.log(newPost)

    let today = new Date()
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    let leftBody = document.createElement("div")
    leftBody.classList.add("left__body")
    let leftBodyNameDate = document.createElement("div")
    leftBodyNameDate.classList.add("left__body-namedate")
    let leftBodyNameDateName = document.createElement("p")
    leftBodyNameDateName.classList.add("left__body-namedate-name")
    leftBodyNameDateName.innerHTML = newPost.postAuthor
    let leftBodyNameDateDate = document.createElement("p")
    leftBodyNameDateDate.classList.add("left__body-namedate-date")
    leftBodyNameDateDate.innerHTML = date
    let leftBodyImg = document.createElement("div")
    leftBodyImg.classList.add("left__body-img")
    let leftBodyImgImg = document.createElement("img")
    leftBodyImgImg.src = newPost.postImgUrl
    let leftBodyText = document.createElement("div")
    leftBodyText.classList.add("left__body-text")
    let leftBodyTextText = document.createElement("p")
    leftBodyTextText.innerHTML = newPost.postText
    let leftBodyTextShowMore = document.createElement("h1")
    leftBodyTextShowMore.innerHTML = "Show More..."
    let leftBodyBtns = document.createElement("div")
    leftBodyBtns.classList.add("left__body-btns")
    let leftBodyBtnsLeft = document.createElement("div")
    leftBodyBtnsLeft.classList.add("left__body-btns-left")
    let leftBodyBtnsLeftBtn = document.createElement("button")
    leftBodyBtnsLeftBtn.id = "likeBtn"
    var counter = 0;
    leftBodyBtnsLeftBtn.addEventListener("click", ()=> {
        counter++
        console.log(counter)
        leftBodyBtnsLeftBtnCounter.innerHTML = `(${counter})`
        leftBodyBtnsLeftBtn.appendChild(leftBodyBtnsLeftBtnCounter)
    })
    leftBodyBtnsLeftBtn.innerHTML = "LIKES"
    let leftBodyBtnsLeftBtnCounter = document.createElement("p")
    leftBodyBtnsLeftBtnCounter.innerHTML = `(${counter})`
    let leftBodyBtnsLeftBtnImg = document.createElement("img")
    leftBodyBtnsLeftBtnImg.src="img/heart.svg"
    let leftBodyBtnsRight = document.createElement("div")
    leftBodyBtnsRight.classList.add("left__body-btns-right")
    let leftBodyBtnsRightComments = document.createElement("button")
    leftBodyBtnsRightComments.classList.add("left__body-btns-right-comments")
    leftBodyBtnsRightComments.innerHTML = `Comments <p>(${"1"})</p>`
    let leftBodyBtnsRightWrite = document.createElement("button")
    leftBodyBtnsRightWrite.classList.add("left__body-btns-right-write")
    leftBodyBtnsRightWrite.innerHTML = "Write Comment"

    posts.appendChild(leftBody)
    leftBody.appendChild(leftBodyNameDate)
    leftBodyNameDate.appendChild(leftBodyNameDateName)
    leftBodyNameDate.appendChild(leftBodyNameDateDate)
    leftBody.appendChild(leftBodyImg)
    leftBodyImg.appendChild(leftBodyImgImg)
    leftBody.appendChild(leftBodyText)
    leftBodyText.appendChild(leftBodyTextText)
    leftBodyText.appendChild(leftBodyTextShowMore)
    leftBody.appendChild(leftBodyBtns)
    leftBodyBtns.appendChild(leftBodyBtnsLeft)
    leftBodyBtnsLeft.appendChild(leftBodyBtnsLeftBtn)
    leftBodyBtnsLeftBtn.appendChild(leftBodyBtnsLeftBtnImg)
    leftBodyBtnsLeftBtn.appendChild(leftBodyBtnsLeftBtnCounter)
    leftBodyBtns.appendChild(leftBodyBtnsRight)
    leftBodyBtnsRight.appendChild(leftBodyBtnsRightComments)
    leftBodyBtnsRight.appendChild(leftBodyBtnsRightWrite)
    console.log(left.querySelectorAll(".left__body"))

    localStorage.setItem("allPosts", posts.innerHTML)


    postAuthorInput.value = "";
    postTextInput.value = "";
    postImgUrlInput.value = "";
    postImgDisplay.innerHTML="";
    
}

postSubmitInput.addEventListener("click", createNewPost)

postImgUrlInput.addEventListener("input", () => {
    postImgDisplay.innerHTML = `<img src="${postImgUrlInput.value}">`
})


window.addEventListener("load", () => {
    posts.innerHTML = localStorage.getItem("allPosts")
})
