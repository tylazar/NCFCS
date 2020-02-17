function changeFontSize(pos, value) {
    let txt = document.getElementById("test");
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let current = parseFloat(style);
    if (pos == 1) {
        txt.style.fontSize = (current + value) + 'em';
    } else {
        txt.style.fontSize = (current - value) + 'em';
    }
}