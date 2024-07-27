const signout = document.querySelector('#signout');
const hapus = document.querySelector('#hapus');
const atas = document.querySelectorAll('.atas');
const main = document.querySelectorAll('.main');
const backAcc = document.querySelector('#backAcc');
const containerAcc = document.querySelector('#containerAcc');

const deleteX = document.querySelectorAll('.delete');
let jumlahtersimpan = deleteX.length;

deleteX.forEach(e => {
  e.addEventListener('click', function () {
    e.parentElement.parentElement.remove();
    jumlahtersimpan--

    if (jumlahtersimpan == 1) {
      containerAcc.style.paddingBottom = '430px';
    } else if (jumlahtersimpan == 2) {
      containerAcc.style.paddingBottom = '330px';
    } else if (jumlahtersimpan == 3) {
      containerAcc.style.paddingBottom = '230px';
    } else if (jumlahtersimpan == 0) {
      containerAcc.style.paddingBottom = '530px';
    }
  });
});

const isiHapus = document.createElement('div');
isiHapus.innerHTML = `
<div class="flash h-30 w-[330px] rounded bg-white ml-7 mr-7 text-center pb-6 mt-32">
<h1 class="pt-4 text-[34px] ml-3 mr-3 mb-2"><b>are you sure want to sign out?</b></h1>
<p class="ml-3 text-slate-400 mb-4">We definetly don't want that</p>
<div class="mr-3 ml-3 text-md">
<button id="bagus" class="flex items-center justify-center mx-auto rounded-lg h-10 p-3 text-black bg-slate-400" style="padding:10px;">No, I want to stay</button>
<button id="yes" class="flex items-center justify-center mx-auto rounded-lg h-10 mt-3 text-black bg-slate-200" style="padding:10px;" ><a href="index.html"> Yep, sign out</a></button>
</div>
  `
isiHapus.setAttribute('id', 'isiHapus');
isiHapus.setAttribute('class', 'isisign');

signout.addEventListener('click', function () {
  hapus.remove();
  containerAcc.style.paddingBottom = '230px';
  containerAcc.appendChild(isiHapus);
  atas.forEach(e => {
    e.classList.add('hidden');
  });
});

backAcc.addEventListener('click', function () {
  console.log("back");
  containerAcc.style.paddingBottom = '112px';
  isiHapus.remove();
  containerAcc.appendChild(hapus);
  atas.forEach(e => {
    e.classList.remove('hidden');
  });

});

document.addEventListener('click', function (e) {
  console.log(e.target)
  if (e.target.id == 'bagus') {
    console.log("bagus");
    containerAcc.style.paddingBottom = '112px';
    isiHapus.remove();
    containerAcc.appendChild(hapus);
    atas.forEach(e => {
      e.classList.remove('hidden');
    });
  }
});
