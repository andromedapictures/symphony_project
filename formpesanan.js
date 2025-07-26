document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Floating Contact Toggle
  const toggleBtn = document.getElementById('contactToggle');
  const contactOptions = document.getElementById('contactOptions');
  if (toggleBtn && contactOptions) {
    toggleBtn.addEventListener('click', () => {
      contactOptions.classList.toggle('show');
    });
  }})
  
  //tampilan harga otomatis//
const paketSelect = document.getElementById('paket');
const hargaDisplay = document.getElementById('hargaPaketDisplay');
const hargaValue = document.getElementById('hargaPaketValue');

paketSelect.addEventListener('change', function() {
  let harga = 0;
  switch (this.value) {
    case "Paket Wedding 1":
      harga = 2200000;
      break;
    case "Paket Wedding 2":
      harga = 2000000;
      break;
    case "Paket Wedding 3":
      harga = 1500000;
      break;
    case "Paket Hajatan 1":
      harga = 2000000;
      break;
    case "Paket Hajatan 2":
      harga = 1800000;
      break;
    case "Paket Hajatan 3":
      harga = 1200000;
      break;
    default:
      harga = 0;
  }

  if (harga > 0) {
    hargaDisplay.value = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(harga);
    hargaValue.value = harga;
  } else {
    hargaDisplay.value = "";
    hargaValue.value = "";
  }
});