function createPattern(numberOfRows)
{
    let string ="";
    for(var i=1;i<=numberOfRows;i++)
    {
        for(var j=1;j<=i;j++)
        {
            string+="*";
        }
        string+="\n";
    }
    console.log(string);
}

createPattern(3)