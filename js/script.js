/* 
- ALLIKAD
- https://www.youtube.com/watch?v=FE2Ku3MOlEs
- https://www.w3schools.com/js/js_htmldom.asp
- chatgpt
*/

const select = document.getElementById('spordiala');


function KuvaKava() {
    /*
    Funtsioon leiab select kasti vaartuse,
    peidab kõik kavad for tsükliga,
    leiab select kasti vaartusele vastava kava 
    paneb ekraanile select kasti väärtusele vastava kava.
    */
    const valitud = select.value;
    const kavad = document.querySelectorAll('.vorkpall_kava, .jalgpall_kava, .kikkpoks_kava');


    for (let i = 0; i < kavad.length; i++) {
        kavad[i].style.display = 'none';
    }

    const nahtav = document.querySelector('.' + valitud);
    if (nahtav) {
        nahtav.style.display = 'block';
    }
}

select.addEventListener('change', KuvaKava);
window.addEventListener('load', KuvaKava);  