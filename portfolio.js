
// when the document of the webpage is ready

$(document).ready(function () {

  //for opening sidebar

  $("#side_icon").click(function () {
    $(".sidebar").show(300);

  });

 //for closing sidebar

  $(".cross").click(function () {
    $(".sidebar").hide(300);
  });


  //skill sets

    let count = -1;
    arr = ["Competitive Programmer", "Web Developer", "IIESTIAN"];
    setInterval(function () {
      $("#skill_set").fadeOut(1000, function () {
        $(this).text(arr[(count+1) % arr.length]).fadeIn(1000);
        count=(count+1) % arr.length;
      });
    }, 1000);


    //scooling

   let c= 0;
    arr2 = ["Sahebnagar High School (2011-2017)", "Palashipara MGS Vidyapith (2017-2019)", "IIEST SHIBPUR (2019-present)"];
    setInterval(function () {
      $("#content").fadeOut(1200, function () {
        $(this).text(arr2[c % arr2.length]).fadeIn(1200);
        c++;
      });
    }, 3000);

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