//함수 -> scroll animation -> nav -> web, tablet, mobile
 import $ from 'jquery'
 $(function(){
    //현재 브라우저 사이즈 -> 조건
    let windowW = $(window).width();
    console.log(windowW);
    if(windowW >= 1320){
      nav();
      subMenu();
       topScroll();
       
      

    }
    else if(windowW < 1320 && windowW >=980){
      
      

    }
    else if(windowW < 980 && windowW >=580){

       mobileNav();
    }
    else if(windowW < 580){
      webNav();

    }
    // 함수 옮기기
  function nav(){
    $('nav>ul>li>a').on('click',function(e){
      let navHref = $(this).attr('href')
      let aPos = $(navHref).offset().top;
      console.log(aPos);
      $('html,body').animate({scrollTop:aPos},800);
      return false;
    })
  }
  function subMenu(){
    $('aside ul>li>a').on('click',function(e){
      let navHref = $(this).attr('href')
      let aPos = $(navHref).offset().top;
      console.log(aPos);
      $('html,body').animate({scrollTop:aPos},800);
      return false;

    })


  }
  function topScroll(){
     $('aside .top').on('click',function(e){
       $('html,body').animate({scrollTop:0},800);

     })
   }
   function mobileNav(){
    $('header>.btn').on('click',function(e){
      
      $('nav').animate({left:'0'},800);
      $(this).hide();
    });
    $('nav>ul>li>a').on('click',function(e){
      let navHref = $(this).attr('href')
      let aPos =$(navHref).offset().top
      $('nav').css('left','-480px')
      console.log(aPos);
      $('html,body').animate({scrollTop:aPos},800);
      $('header>.btn').show();
      return false;
    });
   $('nav .close').on('click',function(e){
    $('nav').animate({left:'-480px'},300);
    $('header>.btn').show();

   })
   $('aside .top').on('click',function(e){
       $('html,body').animate({scrollTop:0},800);

     })
  $('#galley p.prev').on('click',function(e){
    $('#galley #all ').prepend($("#galley figure:last"))

  })
  $('#galley p.next').on('click',function(e){
    $('#galley #all ').append($("#galley figure:first"))

  })
 
  
 
    
   }
   function webNav(){
    $('nav>ul>li>a').on('click',function(e){
      let navHref=$(this).attr('href')
      let aPos =$(navHref).offset().top
      $('html,body').animate({scrollTop:aPos},800);
    })
    $('aside .top').on('click',function(e){
       $('html,body').animate({scrollTop:0},800);

     })
     $('#galley p.prev').on('click',function(e){
    $('#galley #all ').prepend($("#galley figure:last"))

  })
  $('#galley p.next').on('click',function(e){
    $('#galley #all ').append($("#galley figure:first"))

  })
      

    
   }

})