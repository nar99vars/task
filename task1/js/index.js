const sliderElem = document.getElementById('slider'),
outColorVal = document.getElementById('out-color-val'),
thumbElem = sliderElem.children[0],
thumbElemWidth = thumbElem.offsetWidth,
subSlider = sliderElem.children[1];
let red = 34,green = 134,blue = 75;

thumbElem.onmousedown = function(e) {
    const thumbCoords = getCoords(thumbElem);
    const shiftX = e.pageX - thumbCoords.left;
    const sliderCoords = getCoords(sliderElem);
    let newLeft = e.pageX - shiftX - sliderCoords.left;

    document.onmousemove = function(e) {
        let check = newLeft;
        newLeft = e.pageX - shiftX - sliderCoords.left;
        subSlider.style.width = newLeft + thumbElemWidth +'px';
        if (newLeft < 0) {
            newLeft = 0;
        }
        const rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
            subSlider.style.width = sliderElem.offsetWidth +'px';
        }
        if(newLeft > 0 && newLeft < rightEdge){
            red =(red>=255 ||red<=0)?Math.floor(Math.random() * (255 - 1)) + 1:(check < newLeft)? ++red:--red;
            green =(green >=255 || green<=0 )?Math.floor(Math.random() * (255 - 1)) + 1:(check < newLeft)? ++green :--green ;
            blue =(blue>=255 || blue<=0)?Math.floor(Math.random() * (255 - 1)) + 1:(check < newLeft)? ++blue:--blue;
            setColor(red,green,blue);
        }
        thumbElem.style.left = newLeft + 'px';
    };

    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
    return false;
};

function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
        left: box.left + pageXOffset
    };
}

function setColor(r,g,b){
    let red = r.toString(16),
        green = g.toString(16),
        blue = b.toString(16),
        hex = "#" + red + green + blue;
    subSlider.style.backgroundColor = hex ;
    outColorVal.innerText = hex;
}