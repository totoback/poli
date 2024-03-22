
var body = null;

if (typeof document !== 'undefined') {
    // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
}

const contents = document.querySelectorAll('.history-con');
const yearBtns = document.querySelectorAll(".year-grp > li > div");
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

console.log(yearBtns)

yearBtns.forEach(function(item, array){
    console.log(array)
    item.addEventListener('click',function(){
        yearBtns.forEach(function(e){
            e.classList.remove('active');
      });
      item.classList.add('active');
    });
});


// function tabBtn(v){
//     $('.year-btn').removeClass('active')
//     $('.year-btn'+v).addClass('active')

//     $('.history-con').removeClass('active')
//     $('.history-con'+v).addClass('active')
    
//     $('.year-tit .tit').removeClass('active')
//     $('.year-tit .tit'+v).addClass('active')
// }


// //nextBtn
// function nextBtn(){
//     var li_length = $('.year-grp > li').length;

//     var activeYear = $('.year-btn.active').attr('class').split('_').pop().split(' ');
//     var activeNum = activeYear[1].substr(-1);
//     var vv = Number(activeNum) + 1;

//     if(vv > li_length ){
//         vv = 1;
//     }
    
//     $('.year-btn').removeClass('active');
//     $('.year-btn'+vv).addClass('active');

//     $('.history-con').removeClass('active');
//     $('.history-con'+vv).addClass('active');
    
//     $('.year-tit .tit').removeClass('active');
//     $('.year-tit .tit'+vv).addClass('active');
// }

// //prevBtn
// function prevBtn(){
//     var li_length = $('.year-grp > li').length;

//     var activeYear = $('.year-btn.active').attr('class').split('_').pop().split(' ');
//     var activeNum = activeYear[1].substr(-1);
//     var vv = Number(activeNum) - 1;

//     if(vv < 1 ){
//         vv = li_length;
//     }
    
//     $('.year-btn').removeClass('active');
//     $('.year-btn'+vv).addClass('active');

//     $('.history-con').removeClass('active');
//     $('.history-con'+vv).addClass('active');
    
//     $('.year-tit .tit').removeClass('active');
//     $('.year-tit .tit'+vv).addClass('active');
// }
	