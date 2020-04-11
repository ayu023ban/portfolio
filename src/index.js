third = document.getElementsByClassName("third")[0]
firstcontent = third.getElementsByClassName("firstcontent")[0];
secondcontent = third.getElementsByClassName("secondcontent")[0];
secondcontent.addEventListener("mouseenter",()=>{
    firstcontent.classList.add("s-white")
})
secondcontent.addEventListener("mouseleave",()=>{
    firstcontent.classList.remove("s-white")
})

second = document.getElementsByClassName("second")[0]
about = second.getElementsByClassName("about")[0]
latin = about.getElementsByTagName("p")[2]
latin.addEventListener("mouseenter",()=>{
    latin.innerHTML = "I shall either find a way or make one"
})
latin.addEventListener("mouseleave",()=>{
    latin.innerHTML="Aut inveniam viam aut faciam"
})