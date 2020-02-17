function changeFontSize(value) {
    let txt = document.getElementById("test");
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let current = parseFloat(style);
    txt.style.fontSize = (current + value) + 'px';
}