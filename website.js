<html>
    <head>

    <script>
    function openmenu()
    {
        document.getElementById("side-menu").style.display="block";
        document.getElementById("menu-btn").style.display="none";
        document.getElementById("close-btn").style.display="block";     
    }
    function closemenu()
    {
        document.getElementById("side-menu").style.display="none";
        document.getElementById("menu-btn").style.display="block";
        document.getElementById("close-btn").style.display="none";     
    }

    {
    var noti = document.querySelector('ul');
    var select= document.querySelector('select');
    var button= document.getElementsByTagName('button');
     }
    for(but of button)
    {
        but.addEventListener('click',(e)=>{
            var add = Number(noti.getAttribute('data-count')|| 0);
            noti.setAttribute('data-count', add + 1);
            noti.classList.add('zero');
        })
    }
    </script>
    </head>

</html>
