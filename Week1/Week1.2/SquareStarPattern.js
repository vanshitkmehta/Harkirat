function pattern(i)
{
    var pt=""
    for(var j=0;j<i;j++)
    {   
        pt+="\n"
        for(var k=0;k<i;k++)
        {
            pt+="*"
        }
    }
    console.log(pt)
}

pattern(5)