var character=
document.getElementById("character");
var block=
document.getElementById("block");
var count=0;
function jump()
{
    if(character.classList != ("animate"))
    {
        character.classList.add("animate");
    }
    setTimeout(function()
    {
        character.classList.remove("animate");
    },500)
}
var checkDead=setInterval(function(){

    var charTop=
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=
    parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    if(blockLeft<40 && blockLeft>20 && charTop>=130)
    {
        block.style.animation="none";
        block.style.display="none";
        alert("game over. Score:" + count);
    }
    else
    {
        count++;
    }

},10);
