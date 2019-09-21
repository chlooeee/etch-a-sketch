const container = document.querySelector(".container");

function createGrid(x)
{
    for(i = 0; i < x * x; i++)
    {
        let gridSpace = document.createElement('div');
        gridSpace.classList.add("squares");
        document.documentElement.style.setProperty(16,x);
        container.appendChild(gridSpace);
        gridSpace.addEventListener("mouseover", function(e){
            e.target.style.background = `lightgrey`;
        });
    }

}

var rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click',function(e){
    e.target.style.background = `lightgrey`;
});
createGrid(16);