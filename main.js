var yourMark = 8;
var isMarkBest = false;
var marks = [5, 6, 9, 6, 7];
average(marks,yourMark);

function average(marks,yourMark)
{
    if (marks.length == 0)
    console.error("Array is empty");
    else
    {
        var sum = 0;
        marks.push(yourMark);
        for(var i = 0; i < marks.length; i++)
        {
            sum += marks[i];
        }
        var averageMark = sum / marks.length;
        console.log("Average mark: " + averageMark);
        if(yourMark > averageMark)
        return isMarkBest = true;
        else 
        return isMarkBest;
    }  
}
console.log("Your score is above average? " + isMarkBest);