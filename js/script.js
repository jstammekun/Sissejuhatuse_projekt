const select = document.getElementById('spordiala')

function KuvaKava() {
    const valitud = select.value;
    const kavad = document.querySelectorAll('.kava')


    kavad.forEach(kava => {
        kava.style.display = 'none'
    });

    const nahtav = document.querySelector('.' + valitud);
    if (nahtav) {
        nahtav.style.display = 'block';
    }
}

select.addEventListener('change', KuvaKava);

window.addEventListener('load', KuvaKava)