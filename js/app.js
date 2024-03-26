// Mendapatkan semua elemen gambar
var images = document.querySelectorAll('.image img');
var index = 0; // Indeks gambar saat ini

// Fungsi untuk menampilkan gambar berikutnya
function showNextImage() {
  // Sembunyikan semua gambar
  images.forEach(image => {
    image.style.display = 'none';
  });
  // Tampilkan gambar berikutnya
  index = (index + 1) % images.length; // Menggunakan modulus untuk mengulangi slide
  images[index].style.display = 'block';
}

// Tampilkan gambar pertama saat halaman dimuat
showNextImage();

// Fungsi untuk menampilkan gambar secara otomatis setiap beberapa detik
setInterval(showNextImage, 3000); // Ganti 3000 dengan interval yang Anda inginkan (dalam milidetik)

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

function validateForm() {
  // Mengambil nilai input dari formulir
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var interest = document.getElementById('option').value;

  // Membuat ekspresi reguler untuk memeriksa hanya huruf abjad dan spasi
  var lettersWithSpaceRegex = /^[a-zA-Z\s]+$/;

  // Memeriksa apakah input nama tidak kosong dan hanya berisi huruf abjad dan spasi
  if (name === "") {
    alert("Please enter your name");
    return false;
  } else if (!lettersWithSpaceRegex.test(name)) {
    alert("Name should only contain alphabetical characters and spaces");
    return false;
  }

  // Memeriksa apakah input email tidak kosong dan memiliki format email yang valid
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (email === "") {
    alert("Please enter your email address");
    return false;
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Memeriksa apakah input minat tidak kosong
  if (interest === "") {
    alert("Please select your interest");
    return false;
  }

  // Jika semua validasi berhasil, formulir akan disubmit
  alert("Form berhasil dikirim dengan Nama: " + name);
  return true;
}