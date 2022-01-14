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

function scrollselect() {
  (function ($) {
    $(window).on('load', function () {
      $('.select__scroll').mCustomScrollbar({
        theme: "dark",
      });
    });
  })(jQuery);
}
scrollselect()


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



function validation() {
  const js__orderingValue = document.querySelectorAll('.js__ordering-value');
  const js__orderingValue2 = document.querySelectorAll('.js__ordering-value2');
  const js__orderingValue0 = document.querySelectorAll('.js__ordering-value0');
  const button = document.querySelector('[type="submit"]');
  const js__orderingeError = document.querySelectorAll('.js__ordering-error');
  const js__orderingeError2 = document.querySelectorAll('.js__ordering-error2');
  const js__orderingeError0 = document.querySelectorAll('.js__ordering-error0');
  let error = 0;

  for (let i = 0; i < js__orderingValue.length; i++) {
    js__orderingValue[i].addEventListener('input', () => {
      value3()
      console.log(js__orderingValue[1].value);
      
    });
  }

  for (let i = 0; i < js__orderingValue2.length; i++) {
    js__orderingValue2[i].addEventListener('input', () => {
      value2()
    });
  }

  for (let i = 0; i < js__orderingValue0.length; i++) {
    js__orderingValue0[i].addEventListener('input', () => {
      value0()
    });
  }
  
  button.addEventListener('click', (e) => {
    e.preventDefault()
    value3()
    value0()
    value2()
    if(value3() && value0()) {
      /* можно отправлять */
    } else {
    }

    if(value2()) {
      /* можно отправлять */
    } else {
    }
  });

  function value3() {
    for (let i = 0; i < js__orderingValue.length; i++) {
      if (js__orderingValue[i].value.length > 3) {
        error = 0
        removeError(js__orderingeError[i])
        console.log(true);
        
      } else {
        error++
        addError(js__orderingeError[i])
        console.log(false);
      }
    }

    return error === 0
  }

  function value2() {
    for (let i = 0; i < js__orderingValue2.length; i++) {
      if (js__orderingValue2[i].value.length > 3) {
        error = 0
        removeError(js__orderingeError2[i])
      } else {
        error++   
        addError(js__orderingeError2[i])
      }
    }

    return error === 0
  }

  function value0() {
    for (let i = 0; i < js__orderingValue0.length; i++) {
      if (js__orderingValue0[i].value.length > 0) {
        error = 0
        removeError0(js__orderingeError0[i])
      } else {
        error++
        addError0(js__orderingeError0[i])
      }
    }

    return error === 0
  }


  function addError(js__orderingeError) {
    js__orderingeError.classList.add('error')
    
  }

  function removeError(js__orderingeError) {
    js__orderingeError.classList.remove('error')
  }

  function addError0(js__orderingeError) {
    js__orderingeError.classList.add('error')
    
  }

  function removeError0(js__orderingeError) {
    js__orderingeError.classList.remove('error')
  }
  
}




function maska() {
  /*Маска для инпута*/
  $(function(){
    $(".phone").mask("8(999) 999-9999");
  });
  
}

maska()
validation()