let t= document.querySelector("a");
t.style.color= '#000000';

function changeHeaderColor(){
    t.style.color = '#f80c03';

}
function love()
{
    t.style.color ="#000000";
}
setInterval("love()",800);
setInterval("changeHeaderColor()",600);

