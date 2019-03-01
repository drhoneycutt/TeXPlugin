document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form');
    //Submit - occurs when the user presses the "Submit" button
    //Should copy image to clipboard
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let value = 'http://latex.codecogs.com/gif.latex?' + e.target.children.code.value
        var img = document.createElement('img');
        img.src = value;
        document.body.appendChild(img);
        var r = document.createRange();
        r.setStartBefore(img);
        r.setEndAfter(img);
        r.selectNode(img);
        var sel = window.getSelection();
        sel.addRange(r);
        document.execCommand('Copy');
    })

    //This version opens a new tab with the image instead of copying to clipboard
    //Currently do not know how to have both options available, buttons were being weird if they didn't have the submit attribute attached
    //form.addEventListener('submit', function (e) {
    //    e.preventDefault();
    //    let value = 'http://latex.codecogs.com/gif.latex?' + e.target.children.code.value
    //    window.open(value, '_blank');
    //    console.log(code)
    //})

}, false);