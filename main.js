var arr = [5, 2, 9, 3, 7];
replacement(arr);
function replacement(arr)
{
    if (arr.length == 0)
    console.error("Array is empty");
    else
    {
        for(var i = 0; i < arr.length; i++)
        {
            if(arr[i] <= 5)
            arr[i] = 0;
            else
            arr[i] = 1;
        }
    }
    console.log(arr);
}