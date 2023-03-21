$(document).ready(function(){
  //슬릭 외부요인
  $('.banner').slick()
    
    // 직접 제작 : 모달 
    $('.berger').click(function(){
      $('.berger, .overlay, .gnb').toggleClass('active')
    })
    $('.gnb a').click(function(){
      $('.berger, .overlay, .gnb').removeClass('active')
    });
   
    // 직접 제작 :슬라이드 탭 메뉴
    $('.faq-title').click(function(){
       $(this).next().slideToggle('')
       $(this).toggleClass('active')
      })
})