
//store user's input in a variable numOfDivs



function widthAndHeight(gameboard, container){
    var b = gameboard.clientWidth;
    var B = container.clientWidth;
    var w = b/B;

    var g = gameboard.clientHeight;
    var G = container.clientHeight;
    var h = g/G;

    document.getElementById('container').style.transform = 'scale(' + w + ', '+ h +')';
};




addEventListener('load', (event) => {
    const container = document.querySelector('#container');
    const gameboard = document.querySelector('#gameBoard');

    function clearDivs(){
        const nodelist = document.querySelectorAll("div.box");
        nodelist.forEach(element => {
            element.remove();
        });
    }

    function clearPaint(){
        const nodelist = document.querySelectorAll('div.box');
        nodelist.forEach(element => {
            element.style = "background-color: white;";
        });
    }

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
        widthAndHeight(gameboard, container);
    };

    var slider = document.getElementById('myRange');
    slider.addEventListener("input", (e) => {
        clearDivs();
        createDivs(e.target.value);
    });


    createDivs(16);
    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', clearPaint);

    var rainbowButton = document.getElementById('rainbow');


    document.getElementById('container').addEventListener("mousemove", (event) => {
        var randomColor = "000000";
        if (rainbowButton.checked){
            randomColor = Math.floor(Math.random()*16777215).toString(16);
        }
        if (event.buttons == 1){
            underdiv = document.elementFromPoint(event.clientX, event.clientY);
            underdiv.style = "background-color:" + "#" + randomColor;;
    }
    });
});


