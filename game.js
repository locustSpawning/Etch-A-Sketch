
//store user's input in a variable numOfDivs



function widthAndHeight(gameboard, container){
    var b = gameboard.clientWidth;
    console.log(b);
    var B = container.clientWidth;
    console.log(B);
    var w = b/B;

    var g = gameboard.clientHeight;
    var G = container.clientHeight;

    var h = g/G;

    document.getElementById('container').style.transform = 'scale(' + w + ', '+ h +')';
};




addEventListener('load', (event) => {
    const container = document.querySelector('#container');
    const gameboard = document.querySelector('#gameBoard');

    function createDivs(num){
        container.style.width = (60 * num) + 'px';
        for (i=0; i<num*num; i++){
            const div = document.createElement('div');
            div.classList.add('box');
            container.appendChild(div);
        };

        const nodelist = document.querySelectorAll("div.box");
        nodelist.forEach(element => {
            element.ondragstart = () => {
                return false;
              }
        });
    };


    createDivs(30);
    widthAndHeight(gameboard, container);



    document.getElementById('container').addEventListener("mousemove", (event) => {
        console.log(event.buttons);
        if (event.buttons == 1){
            underdiv = document.elementFromPoint(event.clientX, event.clientY);
            underdiv.style = "background-color: black;";
    }
    });
});


