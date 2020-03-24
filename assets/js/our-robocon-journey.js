const set = () => {
   
    const img = document.getElementById("base-img");
    const y15 = document.getElementById("y-15");
    let len = img.width;
    let ht = img.height;

    const arr = [
        {
            left : 108,
            top : 327
        },
        {
            left : 489,
            top : 310
        },{
            left : 201,
            top : 156
        },{
            left : 470,
            top : 160
        },{
            left : 687,
            top : 56
        }
    ]
    for(let i = 0 ; i < 5 ; i++){
        let bbtn = document.getElementById(`b${i+1}`);
        let l = arr[i].left * len / 849;
        let t = arr[i].top * ht / 539;
        let btnHt = 100 * len / 849;
        let btnWd = 100 * ht / 539;
        bbtn.style.left = `${l}px`
        bbtn.style.top = `${t}px`
        bbtn.style.height = `${btnHt}px`
        bbtn.style.width = `${btnWd}px`
    }
    const r2 = document.getElementById("p-top-row")
    r2.style.marginTop = `${ht + 20}px`
}

window.onload = set;