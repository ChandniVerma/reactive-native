const average=function(){
var sum=0;
var avg=0;
for(var i in arguments){
    sum+=arguments[i];
}
var avg=sum/arguments.length;
return avg;
}
console.log('Average(12,3,4) '+average(12,3,4));


let multi=(x,y)=>(x*y);
console.log("now",multi(6,5));