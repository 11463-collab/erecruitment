// Tambahkan library CryptoJS di head untuk enkripsi yang lebih kuat
// <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>

const form = document.getElementById('recruitmentForm');
const secretKey = "DCS-SECRET-KEY"; // Kunci enkripsi

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Mengambil data dari input
    const formData = {
        nama: form.querySelector('input[type="text"]').value,
        email: form.querySelector('input[type="email"]').value,
        phone: form.querySelector('input[type="tel"]').value,
        posisi: form.querySelector('select').value,
        daop: form.querySelectorAll('select')[1].value
    };

    // Enkripsi data menjadi string
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(formData), secretKey).toString();
    
    // Simpan ke URL params dan pindah ke halaman ujian
    window.location.href = `ujian.html?data=${encodeURIComponent(ciphertext)}`;
});