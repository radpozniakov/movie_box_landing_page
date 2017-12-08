$(function (){
  var initialState = {
    heightWindow: $(window),
    introPage: $('#intro-page'),

    render: function() {
      var windowState = {
        height: this.heightWindow.height(),
      };
      try{
        this.introPage.height(windowState.height);

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
