var bullets = Math.random(0, 20);
var dragons = Math.random(2, 5); 
var isAlive = fight(bullets,dragons,isAlive);
function fight(bullets,dragons,isAlive)
{
    var result = (bullets/2)/dragons;
    console.log(result);
    if(result >= 1)
    {
        return isAlive = true;
    }
    else
    {
        return isAlive = false;
    }
}
console.log(isAlive);