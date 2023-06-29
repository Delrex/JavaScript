var n = 2;
var m = 9;
var sum = 0;
if (n < m)
{
    for(var i = n; i < m; i+=n)
    {
        sum +=i;
    }
    console.log("Сумма " + sum);
}
else
console.error("Занчение m меньше n!!!")
