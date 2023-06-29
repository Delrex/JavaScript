
var arr = [2, 4, 6, 8];
average(arr);
function average(arr)
{
    if (arr.length == 0)
    console.error("Array is empty");
    else
    {
        var sum = 0;
        for(var i = 0; i < arr.length; i++)
        {
            sum += arr[i];
        }
        var averageNum = sum / arr.length;
        console.log("Average: " + averageNum);  
    }  
}

