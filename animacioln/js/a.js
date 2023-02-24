function move(){
    if(pos >=150){
     clearInterval(x);
    }
    else {
         pos += 1;
         box.style.top = pos+'px';
    }
 }
 function move(){
    if(pos >=150){
     clearInterval(y);
    }
    else {
         pos += 1;
         box.style.right = pos+'px';
    }
 }
 function move(){
    if(pos >=150){
     clearInterval(z);
    }
    else {
         pos += 1;
         box.style.bottom = pos+'px';
    }
 }