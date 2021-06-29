
// when the document of the webpage is ready

$(document).ready(function () {

  //for opening sidebar

  $("#side_icon").click(function () {
    $(".sidebar").show(300);

  });

 //for closing sidebar

  $(".close-icon").click(function () {
    $(".sidebar").hide(300);
  });


  //skill sets

    let __count = 0;
    arr1 = ["Programmer", "Developer","IIESTian"];
    setInterval(function () {
      $("#skill_set").fadeOut(1000, function () {
        $(this).text(arr1[__count %  arr1.length]).fadeIn(1000);
        __count++;
      });
    }, 2500);


    // smooth scroll page 

  $("a").on('click', function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });

});
