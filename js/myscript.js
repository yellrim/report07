        //메뉴
        $('.nav-level1>li').mouseover(function(){
            $(this).children('.nav-level2').slideDown(300);
        })
        $('.nav-level1>li').mouseleave(function(){
            $(this).children('.nav-level2').slideUp(300);
        })

        //슬라이드
        let nowSlide = 1;
        setInterval(function(){
            let slideEls = $('.slide');
            if(nowSlide>=3){
                nowSlide=1;
                for(let idx=0;idx<slideEls.length;idx++){
                    let leftVal = slideEls.eq(idx).position().left;
                    slideEls.eq(idx).css('left',leftVal+=2400);
                }
            }else{
                for(let idx=0;idx<slideEls.length;idx++){
                let leftVal = slideEls.eq(idx).position().left;
                slideEls.eq(idx).css('left',leftVal-=1200);
                }
                nowSlide++;
            }
        },3000);


        //모달 팝업 창
        let notTit = document.querySelectorAll('.notice-txt .title');
        let modal = document.querySelector('.modal-popup');
        let BtnClose = document.querySelector('.btn-close');
        let modalTxt = document.querySelectorAll('.modal-txt');


        for(let idx=0; idx<notTit.length; idx++){
            notTit[idx].onclick = function(){           
                for(let sIdx=0; sIdx<notTit.length; sIdx++){
                    modalTxt[sIdx].style.display = 'none';
                }               
                modal.style.display = 'block';
                modalTxt[idx].style.display = 'block';
            }
        }

        // 모달 창 닫기
        BtnClose.onclick = function(){
            modal.style.display = 'none';
        }