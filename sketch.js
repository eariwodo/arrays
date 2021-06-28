
function setup() 
{
  createCanvas(400,400);
  average()
  var wieght=[67,45,43,87,21]
  var sum=wieght[0]+ wieght[1]+ wieght[2]+ wieght[3]+ wieght[4]
  var avg= sum/wieght.length
  console.log(avg)
}

function draw()

{
background(51);
average()
}

function average(){
  var wieght=[67,45,43,87,21]
  var sum=wieght[0]+ wieght[1]+ wieght[2]+ wieght[3]+ wieght[4]
  var avg= sum/wieght.length
  console.log(avg)
  
}