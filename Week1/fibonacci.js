function fibo(limit)
{
    var n1=0;
    var n2=1;
    var nextTerm;
    for(var i=0;i<=limit;i++)
    {
        console.log(n1);
        nextTerm = n1+n2;
        n1=n2;
        n2=nextTerm;
    }
}

fibo(6)