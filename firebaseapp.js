var myData = new Firebase('https://aamujuydtdf.firebaseio-demo.com/');

var thisCode = myData.child('code');
var someScript = myData.child('script');
var counter = 0;

thisCode.on('value', function(snapshot){
  $('.textbox').value(snapshot.val());
})

$('.textbox').on('input', function(){
  thisCode.update({text:$('.textbox').val()})
})

thisCode.on('child_changed', function(snapshot){
  var updatedCode = snapshot.val();
  $('.textbox').val(updatedCode);
});
  
someScript.on('child_changed', function(snapshot){
  counter = snapshot.val();
  var scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.text = $('.textbox').val();
  console.log(scriptTag);
  $('body').append(scriptTag);
});

$('.danger').on('click', function(){
  counter++;
  someScript.update({script: counter});
});