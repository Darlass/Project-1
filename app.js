//slider
$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
$(document).ready(function(){
    $('.slider').slick({
       //settings
    });
  });
//calendar
let dpMin, dpMax;

dpMin = new AirDatepicker('#airdatepicker1', {
    onSelect({date}) {
        dpMax.update({
            minDate: date
        })
    }
})

dpMax = new AirDatepicker('#airdatepicker2', {
    onSelect({date}) {
        dpMin.update({
            maxDate: date
        })
    }
})

  