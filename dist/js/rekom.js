const satu = document.querySelector('#satu');
const dua = document.querySelector('#dua');
const tiga = document.querySelector('#tiga');
const empat = document.querySelector('#empat');
const container = document.querySelector('#containerAcc');
const hero = document.querySelector('#hero');
const isi = document.querySelector('#isi');

const isisatu = document.createElement('div');
isisatu.innerHTML = `
<div id="isi" class="isi w-[330px]">
<div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-11 ml-8 bg-opacity-60">
   <a href="model/model1.html"><img class="m-3" src="img/m1m.png" alt="" srcset="">
   <div class="detail mt-3">
       <h1>Model 1</h1>
       <p class="text-sm">Luas 7.4m x 6m</p>
       <p class="text-sm text-slate-500 mt-1"> <i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
   </div>
   <div class="third mt-3">
       <br>
       <br>
       <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
   </div>
   </div>
   <a href="model/model3.html"><div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-2 ml-8 bg-opacity-60">
   <img class="m-3" src="img/m3m.png" alt="" srcset="">
   <div class="detail mt-3">
       <h1>Model 3</h1>
       <p class="text-sm">Luas 6m x 6m</p>
       <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
   </div>
   <div class="third mt-3">
       <br>
       <br>
       <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
   </div>
   </div>
   <div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-2 ml-8 bg-opacity-60">
   <a href="model/model4.html"><img class="m-3" src="img/m4m.png" alt="" srcset="">
       <div class="detail mt-3">
           <h1>Model 4</h1>
           <p class="text-sm">Luas 7m x 6m</p>
           <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
       </div>
       <div class="third mt-3">
           <br>
           <br>
           <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
       </div>
   </div>
  `
isisatu.setAttribute('id', 'isisatu');

const isidua = document.createElement('div');
isidua.innerHTML = `
<div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-11 ml-8 bg-opacity-60">
<a href="model/model5.html"><img class="m-3" src="img/m5m.png" alt="" srcset="">
<div class="detail mt-3">
    <h1>Model 5</h1>
    <p class="text-sm">Luas 8m x 7.5m</p>
    <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
</div>
<div class="third mt-3">
    <br>
    <br>
    <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
</div>
</div>
<div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-2 ml-8 bg-opacity-60">
<a href="model/model6.html"><img class="m-3" src="img/m6m.png" alt="" srcset="">
<div class="detail mt-3">
    <h1>Model 6</h1>
    <p class="text-sm">Luas 9m x 6m</p>
    <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
</div>
<div class="third mt-3">
    <br>
    <br>
    <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
</div>
</div>
  `
isidua.setAttribute('id', 'isidua');

const isitiga = document.createElement('div');
isitiga.innerHTML = `
<div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-11 ml-8 bg-opacity-60">
<a href="model/model8.html"><img class="m-3" src="img/m8m.png" alt="" srcset="">
<div class="detail mt-3">
    <h1>Model 8</h1>
    <p class="text-sm">Luas 8.5m x 8m</p>
    <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
</div>
<div class="third mt-3">
    <br>
    <br>
    <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
</div>
</div>
<div class="isi grid grid-cols-3 w-[330px] rounded-lg bg-white mt-2 ml-8 bg-opacity-60">
<a href="model/model9.html"><img class="m-3" src="img/m9m.png" alt="" srcset="">
<div class="detail mt-3">
    <h1>Model 9</h1>
    <p class="text-sm">Luas 8m x 8m</p>
    <p class="text-sm text-slate-500 mt-1"><i class="fa-solid fa-bed"></i>&nbsp&nbsp 2 Bedroom </p></a>
</div>
<div class="third mt-3">
    <br>
    <br>
    <p class="text-sm text-slate-500"><i class="fa-solid fa-bath"></i>&nbsp&nbsp 1 Bathroom</p>
</div>
</div>
  `
isitiga.setAttribute('id', 'isitiga');

const isiempat = document.createElement('div');
isiempat.innerHTML = `
<h1 class="text-4xl font-bold text-center mr-6 ml-6">Sorry, item not found. Try something else</h1>
  `
isiempat.setAttribute('id', 'isiempat');
isiempat.setAttribute('class', 'pt-44');

function ubahAktif(x){
    x.style.backgroundColor = '#5B339B';
    x.style.color = 'white';
}

function ubahNonaktif(x){
    x.style.backgroundColor = 'white';
    x.style.color = 'black';
}

satu.addEventListener('click', function () {
    container.style.paddingBottom = '260px';
    ubahAktif(satu);
    ubahNonaktif(dua);
    ubahNonaktif(tiga);
    ubahNonaktif(empat);
        hero.remove();
        isiempat.remove();
        isidua.remove();
        isitiga.remove();
        container.appendChild(isisatu);
});

dua.addEventListener('click', function () {
    container.style.paddingBottom = '350px';
    ubahAktif(dua);
    ubahNonaktif(satu);
    ubahNonaktif(tiga);
    ubahNonaktif(empat);
        hero.remove();
        isisatu.remove();
        isitiga.remove();
        isiempat.remove();
        container.appendChild(isidua);
});

tiga.addEventListener('click', function () {
    container.style.paddingBottom = '330px';
    ubahAktif(tiga);
    ubahNonaktif(dua);
    ubahNonaktif(satu);
    ubahNonaktif(empat);
        hero.remove();
        isisatu.remove();
        isidua.remove();
        isiempat.remove();
        container.appendChild(isitiga);
});
empat.addEventListener('click', function () {
    container.style.paddingBottom = '330px';
    isi.classList.add('mx-auto')
    isi.classList.remove('grid.grid-cols-3.rounded-lg.bg-white.mt-11.ml-8.bg-opacity-60')

    ubahAktif(empat);
    ubahNonaktif(dua);
    ubahNonaktif(tiga);
    ubahNonaktif(satu);
        hero.remove();
        isisatu.remove();
        isidua.remove();
        isitiga.remove();
        container.appendChild(isiempat);
});