class Game 
{
    constructor()
    {
        this.turn = true;
        this.gridId = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.globalCounter = 0;
        this.k = 0;
        this.yourScore = 1;
        this.computerScore = 1;
    }

    draw()
    {
        var game = $("game");
        game.innerHTML = "";

        var table = document.createElement("TABLE");
        for(var i = 0; i < 3; i ++)
        {
            var tr = document.createElement("TR");
            for(var j = 0; j < 3; j++)
            {
                var td = document.createElement("TD");
                td.innerHTML = "  ";
                td.id = this.k;
                td.onclick = yourTurn();
                tr.appendChild(td);
                this.k++;
            }
            table.appendChild(tr);
        }
        game.appendChild(table);
    }
    
    win(s)
    {
        // Horizontal
        for(var i = 0; i <= 6; i += 3)
        {
            if((this.grid[i]==s&&this.grid[i+1]==s&&this.grid[i+2]==s))
            {
                this.changeBackgroundColor(i.toString());
                this.changeBackgroundColor((i+1).toString());
                this.changeBackgroundColor((i+2).toString());
                s == "X" ? $("you").innerHTML = (parseInt($("you").innerHTML))+1 : $("computer").innerHTML = (parseInt($("computer").innerHTML))+1;
                init();
            }
        }

        // Vertical
        for(var i = 0; i < 3; i++)
        {
            if((this.grid[i]==s&&this.grid[i+3]==s&&this.grid[i+6]==s))
            {
                this.changeBackgroundColor(i.toString());
                this.changeBackgroundColor((i+3).toString());
                this.changeBackgroundColor((i+6).toString());
                s == "X" ? $("you").innerHTML = (parseInt($("you").innerHTML))+1 : $("computer").innerHTML = (parseInt($("computer").innerHTML))+1;
                init();
            }
        }

        // Diagonal
        if((this.grid[0]==s&&this.grid[4]==s&&this.grid[8]==s))
        {
            this.changeBackgroundColor("0");
            this.changeBackgroundColor("4");
            this.changeBackgroundColor("8");
            s == "X" ? $("you").innerHTML = (parseInt($("you").innerHTML))+1 : $("computer").innerHTML = (parseInt($("computer").innerHTML))+1;
            init();
        }
        if(this.grid[2]==s&&this.grid[4]==s&&this.grid[6]==s)
        {
            this.changeBackgroundColor("2");
            this.changeBackgroundColor("4");
            this.changeBackgroundColor("6");
            s == "X" ? $("you").innerHTML = (parseInt($("you").innerHTML))+1 : $("computer").innerHTML = (parseInt($("computer").innerHTML))+1;
            init();
        }

        if(this.globalCounter==9)
        {
            init();
        }
    }

    changeBackgroundColor(id)
    {
        $(id).style.backgroundColor = "#72E96B";
    }
}