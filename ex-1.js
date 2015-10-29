var x=7 ,y=15,
    a=3,b=-7,c=2,z,
    m=0,n=-1,k=4,
    d=-5,e=-2,f=-6,g=0,h=-1
    David=80,Vinoth=77,Divya=88,Ishitha=95,Thomas=68,avarage=0;

if (x > y){               
 console.log(x);
}
else {
 console.log(y);
    }
    
z= a+b+c;                        
if (z> 0){
 console.log("the sign is + ");
}
else  {
 console.log("the sign is - ");
    }

 if( (m >n) && (n >k))  {             
 console.log(m,n,k);
}
else  if ( (n > m) && (m >k)) {
 console.log(n,m,k);
    }    
 else  if( (k > m) && (m >n)){
 console.log(k,m,n);
    }  
else if( (m > k) && (k >n)){
 console.log(m,k,n);
    } 
 else if( (n > k) && (k >m)){
 console.log(n,k,m);
    }  
 else  if( (k > n) && (n >m)){
 console.log(k,n,m);
    } 
    
  if ((d>e) && (d >f) &&(d>g) && (d >h)) {  
  	console.log(d);
    }      
  else if ((e>d) && (e>f) &&(e>g) && (e >h)) {  
  	console.log(e);
    } 
  else if ((f>d) && (f>e) &&(f>g) && (f >h)) {  
  	console.log(f);
    }
  else if ((g>d) && (g>e) &&(g>f) && (g >h)) {  
  	console.log(g);
    } 
   else if ((h>d) && (h>e) &&(h>f) && (h >g)) {  
  	console.log(h);
    }  
      
    avarage= (David+Vinoth+Divya+Ishitha+Thomas)/5;
    console.log(avarage);
    if (avarage<60){
     console.log("גרוע מאוד");	
    }
    else if (avarage<70){
     console.log("גרוע");	
    }
     else if (avarage<80){
     console.log("בינוני");	
    }
     else if (avarage<90){
     console.log("טוב");	
    }   
    else if (avarage<100){
     console.log("טוב מאוד");	
    }                           