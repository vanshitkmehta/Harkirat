function pattern (i)
{
    var pt=""
    for(var j=1;j<=i;j++)
    {
        for(var k=j;k<=i;k++)
        {
            pt+=" "
        }

        for(var l=1;l<=j;l++)
        {
            pt+="*"
        }

        pt+="\n"
    }
    console.log(pt)
}

pattern(5)