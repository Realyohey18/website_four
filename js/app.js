$(function(){

    //for iPad
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    $('.menu-link').on('click', function () {
        $('.js-toggle-sp-menu').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });
    
    var targetHeight = $('.js-float-menu-target').height();
    console.log('トップバーのheightは' + targetHeight + 'です');
    $(window).on('scroll',function(){
        $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight );
        
    });
    



    
    var arrowHeight = $('.fa-arrow-up').height();
    var footerHeight = $('.last').height();
    console.log('アローマークのheightは'+ arrowHeight + 'です' );
    console.log('footerのheightは'+ footerHeight + 'です' );
    
    
    var p_props = {
        color:'red',
        opacity:'.5',
        transition:'all .5s'
    };
    var b_props = {
        color:'black',
        opacity:'1',
        transition:'all .5s'
    }

    $('.menu-link').hover(
        function(){   
        $(this).css(p_props);
        console.log('hover-in func success')
    },function(){
        $(this).css(b_props);
         console.log('hover-out func success')
    });


    $('.about,.fa-arrow-up').click(function(){
        var targetHeight = $('#bg-color').height();
        console.log('aboutの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':targetHeight},'slow');
        console.log('成功');
    });
    /*
    $('.think').click(function(){
        var targetHeight = $('#service').height();
        console.log('thinkの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':'#think'},'slow');
        console.log('成功');
    });

    $('.service').click(function(){
        var targetHeight = $('#service').height();
        console.log('serviceの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':3200 },'slow');
        console.log('成功');
    });

    $('.news').click(function(){
        var targetHeight = $('#news').height();
        console.log('newsの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':4550},'slow');
        console.log('成功');
    });

    $('.recruit').click(function(){
        var targetHeight = $('#recruit').height();
        console.log('newsの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':6000},'slow');
        console.log('成功');
    });

    $('.contact').click(function(){
        var targetHeight = $('#contact-us').height();
        console.log('newsの高さは' + targetHeight + 'です');
        $('html,body').animate({'scrollTop':6800},'slow');
        console.log('成功');
    });
    
     $('.js-company').click(function(){
       var targetHeight = $('#company-profile').height();
        console.log('js-companyの高さは' + targetHeight + 'です');
        $('html,body').animate({scrollTop: '#company-profile'},'slow');
        console.log('成功');
    });

    
    */
    



   







});