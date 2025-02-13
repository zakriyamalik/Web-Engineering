function process(arr,passedFunction)
{
    console.log(passedFunction(arr));
}
process([1,2,3,4,5],double);
process([1,2,3,4,5],square);
function double(arr)
{
    let size=arr.length;
    for(let i=0;i<size;i++)
    {
        arr[i]=arr[i]*2;
    }
    return arr;

}
function square(arr)
{
    let size=arr.length;
    for(let i=0;i<size;i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    return arr;

}