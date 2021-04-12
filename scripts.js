var buttons=document.querySelectorAll(".btn");
buttons.forEach(butn => {
    butn.addEventListener('click',(e)=>{
        let x=e.clientX - e.target.offsetLeft;
        let y=e.clientY - e.target.offsetTop;
        let ripples=document.createElement("span");
        ripples.style.left=x+'px';
        ripples.style.top=y+'px';
        this.appendChild(ripples);
        setTimeout(()=>
        {
            ripples.remove()
        },1000)
    }
})