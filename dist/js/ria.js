const wlc = document.querySelector('#wlc');
const login = document.querySelector('#login');
const src = document.querySelector('#src');
const x = document.querySelector('#x');
const removeable = document.querySelector('#removeable');
const container = document.querySelector('#container');
const signout = document.querySelector('#signout');
const containerAcc = document.querySelector('#containerAcc');
const search = document.querySelector('#search');

const isi = document.createElement('div');
isi.innerHTML = `
  <div class="flex flex-col justify-center items-center">
  <img src="img/src.png" alt="Ria" class=" invisible h-full mt-80">
  </div>
  `
isi.setAttribute('id', 'isi');
isi.setAttribute('class', 'flex flex-col justify-center items-center');

setTimeout(function() {
    wlc.style.opacity = '0'; // Mengatur tampilan elemen menjadi 'none' untuk menghilangkannya
 // Mengatur tampilan elemen menjadi 'none' untuk menghilangkannya
    login.classList.add('absolute')
  }, 1000);

  setTimeout(function() {
    wlc.remove(); // Menghapus elemen
  }, 1100);

  src.addEventListener('mouseover', function() {
    x.classList.remove('hidden');
    x.classList.add('inline');
    container.appendChild(isi);
    container.classList.remove(`bg-[url('main.jpg')]`);
    container.classList.add(`bg-[url('img/src.png')]`);
    removeable.remove();
  });

  src.addEventListener('mouseout', function() {
    x.classList.remove('inline');
    x.classList.add('hidden');
    isi.remove();
    container.appendChild(removeable);
    container.classList.add(`bg-[url('main.jpg')]`);
    container.style.
    container.classList.remove(`bg-[url('img/src.png')]`);
  });

  document.onkeydown=function(evt){
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if(keyCode == 13)
    {
        //your function call here
        document.search.submit();
    }
}

  x.addEventListener('click', function() {
    x.classList.remove('inline');
    x.classList.add('hidden');
    isi.remove();
    container.appendChild(removeable);
    container.classList.add(`bg-[url('main.jpg')]`);
    container.classList.remove(`bg-[url('img/src.png')]`);
  });

  signout.addEventListener('click', function() {
    // containerAcc.remove();
    console.log("rrrr");
  });

