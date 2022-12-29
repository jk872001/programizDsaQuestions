// JavaScript Program to Find the Square Root
let num=6;
console.log(Math.sqrt(num));

// we can also find using binary search algorithm
let number=25
let low=0;
let high=number;
let temp=0;
let mid=low+(high-low)/2
while(mid!==temp)
{
    if(mid*mid>temp)
    {
        high=mid
    }
    else(mid*mid<temp)
    {
      low=mid
    }
}
