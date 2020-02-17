function changeFontSize(value) {
    let elements = document.getElementsByClassName('text');

    for (let i = 0; i < elements.length; i++) {
        let txt = elements[i];
        let style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        let current = parseFloat(style);
        txt.style.fontSize = (current + value) + 'px';
    }
}