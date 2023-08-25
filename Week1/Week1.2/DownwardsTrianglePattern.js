function pattern(i)
{
    var pt=""
    for(var j=1;j<=i;j++)
    {
        pt+=" "
        for(var k=i;k>=j;k--)
        {
            pt+="*"
        }
        pt+="\n"
    }
    console.log(pt)
}

pattern(5)