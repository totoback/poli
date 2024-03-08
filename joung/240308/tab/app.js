
const tabBtnAll = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content')
const about = document.querySelector(".about");


about.addEventListener("click", function (e) {
    const tab = e.target.dataset.id;//해당 dataset이름

    if(tab){
        tabBtnAll.forEach(function (btn){
            btn.classList.remove("active");
        })
        e.target.classList.add("active");

        contents.forEach(function(content){
            content.classList.remove("active");
        })

        const element = document.getElementById(tab);//id값을 클릭했으때 dataset으로 불러오도록
        element.classList.add("active")
    }
})
