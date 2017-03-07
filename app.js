function drawPyramid(height, brick) {
    //clear the board
    document.getElementById("pyramidSlide").innerHTML = "";

    var input = document.querySelector('input');
    var output = document.querySelector('output');
    output.innerHTML = input.value;

    var brick = document.querySelector('select');
    // print row

    for (var row = 0; row < height; row++) {

        // bricks + spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // create string + space
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var space = "&nbsp";
            rowStr += space;
        }

        //get value of brick input
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick.value;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramidSlide").appendChild(rowElem);

    }
};
