document.querySelectorAll("h1"[0]).innerText="pravalika";
document.querySelector('#one').innerHTML="<h1>hello everyone</h1>";
function Change()
{
    document.querySelector("#one").style.backgroundColor="orange";
    document.querySelector("#one").style.borderRadius="20px";
    document.querySelector("#one").style.boxshadow="0 0 20px gray";
    document.querySelector("#one").style.marginLeft="100px";
}
Change();
