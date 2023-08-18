function trianglePattern(numberOfRows)
{
    var string="";
    for(var i=1;i<=numberOfRows;i++)
    {
        //Spaces
        for(var j=numberOfRows-i;j>=0;j--)
        {
            string+=" ";
        }

        //Stars
        for(var k=1;k<=i;k++)
        {
            string+="* ";
        }
        string+="\n";
    }
    console.log(string);
}

trianglePattern(4)