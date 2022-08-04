const boxes = document.querySelectorAll(".box");
boxes.forEach(box =>{
    box.addEventListener('click', ()=>{
        removeActiveclass();
        box.classList.add('active');

    });
});
function removeActiveclass(){
    boxes.forEach(box =>{
        box.classList.remove('active')

    });
  
}
