let str1 = "Aa";
let str2 = "Bb";
let str3 = "Cc";
let output = separation(str1,str2,str3);
console.log(output);

function separation(str1,str2,str3)
{
    let result = '';
    let calculation;
    for (let i = 0; i <= str1.length-1; i++)
    {
        calculation = str1[i] + str2[i] + str3[i];
        result += calculation;
    }
    return result;
}
