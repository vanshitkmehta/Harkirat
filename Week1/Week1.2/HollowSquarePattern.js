function printSingleRow(i)
{
    var pt=""
    for(var j=1;j<=i;j++)
    {
        pt+="*"
    }
    console.log(pt)
}

function printMiddlePart(i)
{
    var pt=""
    pt+="*"
    for(var k=1;k<=i-2;k++)
    {
        pt+=" "
    }
    pt+="*"
    console.log(pt)
}

function printPattern(i)
{
    printSingleRow(i)
    for(var j=1;j<=i-2;j++)
    {
        printMiddlePart(i)
    }
    printSingleRow(i)
}


printPattern(5)