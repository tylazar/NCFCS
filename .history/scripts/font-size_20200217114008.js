function changeFontSize(pos, value) {
    let txt = document.getElementById("test");
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    let current = parseFloat(style);
    window.alert(current);
    txt.style.fontSize = (current - value) + 'em';
}