function pattern(i)
{
    var pt=""
    for(var j=1;j<=i;j++)
    {
        for(var k=1;k<=j;k++)
        {
            pt+="*"
        }
        pt+="\n"
    }
    console.log(pt)
}

pattern(5)
