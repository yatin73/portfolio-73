

var spans = document.querySelectorAll('span')
spans.forEach(span => span.addEventListener('mouseover',function(obj)
{
  span.classList.add('animate')
}))

spans.forEach(span => span.addEventListener('mouseout',function(obj)
{
  span.classList.remove('animate')
}))


function circlle(el){
  $(el).circleProgress({fill: {color: ' #05dfd7'}})
  .on('circle-animation-progress', function(event,progress,stepValue){
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
  });
};

circlle('.round');







$(window).scroll(function(){
  if($(this).scrollTop() > 40){
    $('#topBtn').fadeIn();
  }
  else{
    $('#topBtn').fadeOut();
  }

});

$("#topBtn").click(function(){
  $('html , body').animate({scrollTop : 0},800);
});
