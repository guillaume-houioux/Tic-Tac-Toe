Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function yourTurn()
{
    return function()
    {
        if(g.turn && g.gridId.includes(parseInt(this.id)))
        {
            g.gridId.remove(parseInt(this.id));
            this.innerHTML = "X";
            g.grid[this.id] = "X";
            g.turn = false;
            g.globalCounter++;
            g.win("X");
            g.globalCounter < 8 ? computerTurn() : init();
        }
    };
}

function computerTurn()
{
    if(!g.turn)
    {
        var c = Math.floor(Math.random() * g.gridId.length);

        if(g.gridId.includes(parseInt(g.gridId[c])))
        {
            var c = Math.floor(Math.random() * g.gridId.length);

            setTimeout(function() {
                $(g.gridId[c].toString()).classList.add("animate__animated");
                $(g.gridId[c].toString()).classList.add("animate__fadeIn");
                $(g.gridId[c].toString()).innerHTML = "O";
                g.grid[g.gridId[c]] = "O";
                g.gridId.remove(parseInt(g.gridId[c]));
                g.turn = true;
                g.globalCounter++;
                g.win("O");
            }, 500);
        }
        else 
        {
            computerTurn();
        }
    } 
}

function init()  
{
    g = new Game();
    g.draw();
}

(function() 
{
    var fired = 0;
    var timer = null;
	function onReady(ev) 
	{
		if (timer) 
		{
            clearTimeout(timer);
        }
		if (fired) 
		{
            return false;
        }
		if (document.readyState == "complete") 
		{
            fired = 1;
            window.removeEventListener("load", onReady, false);
            document.removeEventListener("DOMContentLoaded", onReady, false);
            document.removeEventListener("readystatechange", onReady, false);
            init();
		} 
		else 
		{
            timer = setTimeout(onReady, 1);
        }
    }
    window.addEventListener("load", onReady, false);
    document.addEventListener("DOMContentLoaded", onReady, false);
    document.addEventListener("readystatechange", onReady, false);
    timer = setTimeout(onReady, 10);
	if (document.readyState == "complete") 
	{
        onReady();
    }
} ());