
    var bobaleft;
    var bobatop;
    
    var x=document.getElementById ('content');
    // puts the 500 bobas in the random position of the screen only with the top and left px
    function strop (bobaleft,bobatop,bobanum)
    {
        if (x==null) 
            x="<div class='punct' id='"+bobanum+"' style='top:"+bobatop+"px;left:"+bobaleft+"px'></div>";
        else 
             x=x+"<div class='punct' id='"+bobanum+"' style='top:"+bobatop+"px;left:"+bobaleft+"px'></div>";
    
        document.getElementById ('content').innerHTML=x;
    }
    
    // generates the random positions for the bobas
    function randomFromInterval(from,to)
    {
        return Math.floor(Math.random()*(to-from+1)+from);
    }
    
    var bobanum=500; // number of bobas
    var speed = 2;
    var toggle= true;
    var width = window.innerWidth;
    var height = window.innerHeight;
    function start ()
    {
        if (bobanum!=0){
            var a; //left
            var b; //top
            
            a=randomFromInterval (20,width);
            b=randomFromInterval (10,height);
            // strop puts the bobas in the random positions
            strop(a,b,bobanum);
            bobanum--;
        }
    
        // Move existing Bobas
        for (var i=1; i<=500; i++)
        {
            var el = document.getElementById(i.toString());
            if (el !== null)
            {
                // changes the bobas top position to the bottom
                var tp = parseInt(el.style.top) + speed + i*.0125;
                if (tp > height) 
                    tp -= height;
                    // incrementing the top px
                el.style.top = tp + "px";
            }
        }
    
        setTimeout (function () {start ()},10);
    }
    