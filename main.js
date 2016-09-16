/*var a,s;
a=s;//
if(a>0){
	s=1;
}
else if (a<0){
	s=2;
}
else {
	s=3;
}
console.log(s);


var b,c;
b=5;
switch(b){	
case i;{
c=i;	
}
break;
case -1;{
	c=2;
}
break;
default;{
c=3;
}
break;
}
console.log(c);//*/
$(function(){
  $('button').click(function(){
    $('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
  });
  $('.closer,.popup_overlay').click(function(){
    $('.popup,.popup_overlay').fadeOut(400); //скрываем всплывающее окно
  });
});

