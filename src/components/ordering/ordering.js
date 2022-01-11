 // Селекты
  function select() {
    var time = 300,
        trigger = null;
    $('body').on('click', '.select__trigger', function () {
      var drop = $(this).siblings('.select__drop');
      trigger = $(this);
      trigger.toggleClass('active');
      drop.fadeToggle(time);


      $(document).mouseup(function (e) {
        if (!trigger.is(e.target)
          && trigger.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          trigger.removeClass('active');
          drop.fadeOut(time);
        }
      });


      $('body').on('change', '.select__drop input', function () {
        console.log(trigger);
        if ($(this).is(':checked')) {
          trigger.find('span').text($(this).siblings('label').text());
        }
        trigger.removeClass('active');
        drop.fadeOut(time);
      });



    })
  }
  select();

//scroll
(function ($) {
  $(window).on('load', function () {
    $('.select__scroll').mCustomScrollbar({
      theme: "dark",
    });
  });
})(jQuery);


function tabs() {
   const js__orderingBtn = document.querySelectorAll('.js__ordering-btn');
   const js__orderingBody = document.querySelector('.js__ordering-body');
   const js__orderingInnerbtn = document.querySelector('.js__ordering-innerbtn');
   
   for (let i = 0; i < js__orderingBtn.length; i++) {
      js__orderingBtn[i].addEventListener('click', function () {
      js__orderingInnerbtn.querySelector('.active').classList.remove('active');
      js__orderingInnerbtn.querySelectorAll('.js__ordering-btn')[i].classList.add('active');
   
       js__orderingBody.querySelector('.active').classList.remove('active');
       js__orderingBody.querySelectorAll('.js__ordering-item')[i].classList.add('active'); 
     })
   }
}

tabs()
 