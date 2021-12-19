//bacground animation
function bacgroundanimation(){
    const rows=7,cols=10;
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            const div = document.createElement('div');
            div.className = `col-${j+1}`;
            document.querySelector(".bacground-animation").appendChild(div);
        }
    }
}
bacgroundanimation();

let navtoggaler = document.querySelector('.nav-toggaler');
    navtoggaler.addEventListener('click',togglenavbar);
function togglenavbar(){
    navtoggaler.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    overlayanimationtoggal();
};

function overlayanimationtoggal(){
    document.querySelector('.overlay-animation').classList.toggle('active');
}

//hide and show pages
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('link-item') && e.target.hash !==""){
        const hash = e.target.hash;
        if(e.target.classList.contains('nav-item')){
            activeSection(hash);
            togglenavbar();
        }
        else{
            togglescrollinghidden();
            overlayanimationtoggal();
            setTimeout(()=>{
                activeSection(hash);
                overlayanimationtoggal();
                togglescrollinghidden();
            },950)
        }
    }
});
function activeSection(sectionid){
    document.querySelector('section.active').classList.remove('active');
    document.querySelector(sectionid).classList.add('active');
    window.scrollTo(0,0);
}
//pop-up ditails
document.addEventListener("click",(e)=>{
    if(e.target.closest(".portfolio-item")){
        const curruntitem = e.target.closest(".portfolio-item");
        portfolioindex = Array.from(portfolioitem).indexOf(curruntitem);    
        togglescrollinghidden();
        toggleup();
        portfolioitemdetail();
        updatprvnext();
    }
});
let portfolioitem = document.querySelectorAll(".portfolio-item");
 

function toggleup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    togglescrollinghidden();
}

//close portfolio-item
document.querySelector(".pp-close-btn").addEventListener("click", toggleup);

function portfolioitemdetail(){
    document.querySelector('.pp-thumbnail img').src = 
    portfolioitem[portfolioindex].querySelector("img").src;

    document.querySelector('.pp-header h3').innerHTML = 
    portfolioitem[portfolioindex].querySelector(".portfolio-tital").innerHTML;

    document.querySelector('.pp-body').innerHTML = 
    portfolioitem[portfolioindex].querySelector(".portfolio-item-discription").innerHTML;

    document.querySelector(".pp-counter").innerHTML = `${portfolioindex + 1} of ${portfolioitem.length}`;
}
function updatprvnext(){
    if(portfolioindex !== 0){
        document.querySelector(".pp-footer-left").classList.remove("hidden");

        document.querySelector(".pp-footer-left h3").innerHTML =
        portfolioitem[portfolioindex-1].querySelector("h3").innerHTML;

        document.querySelector(".pp-footer-left img").src =
        portfolioitem[portfolioindex-1].querySelector("img").src;
    }
    else{
        document.querySelector(".pp-footer-left").classList.add("hidden");

    }

    if(portfolioindex !== portfolioitem.length-1){
        document.querySelector(".pp-footer-right").classList.remove("hidden");

        document.querySelector(".pp-footer-right h3").innerHTML =
        portfolioitem[portfolioindex+1].querySelector("h3").innerHTML;

        document.querySelector(".pp-footer-right img").src =
        portfolioitem[portfolioindex+1].querySelector("img").src;
    }
    else{
        document.querySelector(".pp-footer-right").classList.add("hidden");
    }
}

document.querySelector(".pp-prev-btn").addEventListener("click",() =>{
   chengeportfolioitem('prev');     
});
document.querySelector(".pp-next-btn").addEventListener("click",() =>{
   chengeportfolioitem('next');     
});

function chengeportfolioitem(dir){
    
    if(dir == "prev"){
        portfolioindex--;
    }
    else{
        portfolioindex++;
    }
    document.querySelector('.pp-overlay').classList.add(dir);
    setTimeout(()=>{
        document.querySelector('.pp-iner').scrollTo(0,0);
        portfolioitemdetail();
        updatprvnext();
        togglescrollinghidden();
    },400);

    setTimeout(()=>{
        document.querySelector('.pp-overlay').classList.remove(dir);
    },1000);

};

function togglescrollinghidden(){
    document.body.classList.toggle('hidde-scroling');
};

//contect form
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('toggal-btn-form')){
        document.querySelector(".contect-form").classList.toggle('opens')
        togglescrollinghidden();
    }
});
document.querySelector('.close-btn').addEventListener('click',()=>{
    document.querySelector('.contect-form').classList.remove('opens');
    togglescrollinghidden();
});

//form validation 