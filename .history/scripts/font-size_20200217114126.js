function changeFontSize(pos, value) {
    let txt = document.getElementById("test");
    let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    window.alert(style);
    let current = parseFloat(style);
    txt.style.fontSize = (current - value) + 'px';
}