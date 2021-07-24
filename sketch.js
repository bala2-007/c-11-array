var weight = [35,38,42,45,43,34,36,41,48,32];
var sum=0;
var avg;
function b_array()
{
  for(i=0;i<weight.length;i++){
    sum=sum+weight[i];

  }
  console.log("sum="+sum);

avg=sum/weight.length;
console.log("avg="+avg);
}


function setup() {
  createCanvas(400,400);
 b_array();
  
}




function draw() 
{
  background(30);
}

 

