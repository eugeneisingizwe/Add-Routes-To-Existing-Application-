const goBackBtn = document.getElementById("back");

const goBack = (e) =>{
    e.preventDefault();

    //Build-in broswer interface that allows that allows chaning the brower session history, or in this case to back 

    history.back();
}

goBackBtn.addEventListener("click", goBack);