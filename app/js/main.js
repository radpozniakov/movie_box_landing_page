$(function (){
  var initialState = {
    render: function () {
      var windowState =  { height: $(window).height()};
      try{
        var introSection = $('.introSection');
        var backgroundURL = introSection.data("bg");
        if(windowState.height <= 560 ){
          introSection.height(560);
        }else{
          introSection.height(windowState.height);
        }

        introSection.parallax({imageSrc: backgroundURL, positionX: '0px'});
      }catch(e){
        console.log(e);
      }
    }
  }
  initialState.render();
  $(window).resize(function(){
    initialState.render();
  })
});



