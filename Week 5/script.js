let isShown = true;
document.getElementById("menuIcon").addEventListener("click", showHide);

function showHide() {

    let sideBarHideShow = document.getElementsByClassName('sidebar')[0];

    let content = document.getElementsByClassName('content')[0];
    if (isShown) {
        sideBarHideShow.style.display = "none";
        if (window.innerWidth <= 1000) {
            content.style.position = "absolute";
            content.style.left = "0px";
            content.style.width = "100%";
            isShown = false;
        }
        else{content.style.position = "absolute";
        content.style.left = "50px";
        content.style.width = "calc(100%-50px)";
        isShown = false;
        }
    }
    else{
        sideBarHideShow.style.display = "block";
        if (window.innerWidth <= 1000) {
            content.style.position = "absolute";
            content.style.left = "0px";
            content.style.width = "100%";
            isShown = true;
        }
        else{
        content.style.position = "absolute";
        content.style.left = "200px";
        content.style.width = "calc(100%-200px)";
        isShown = true;
    }
    }
} 

document.getElementById("one").addEventListener("click", changeColors);

function changeColors() {
    let content = document.getElementsByClassName('content')[0];

    if(content.style.color == '')
    {
        content.style.color = 'var(--blue)'
    }
    else if(content.style.color == 'var(--blue)')
    {
        content.style.color = 'white'
    }
    else if(content.style.color == 'white')
    {
        content.style.color = 'var(--blue)'
    }
}
