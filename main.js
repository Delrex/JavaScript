
var arr = [2,4,6,8];
average(arr);
function average(arr)
{
    var sum = 0;
    for(var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    var average = sum / arr.length;
    console.log("Average: " + average);
}