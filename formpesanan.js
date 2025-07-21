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
  }

  // Form Submit → Kirim ke WhatsApp
  const formPemesanan = document.getElementById('formPemesanan');
  if (formPemesanan) {
    formPemesanan.addEventListener('submit', function(e) {
      e.preventDefault();

      const namaPemesan = document.getElementById('namaPemesan').value.trim();
      const paket = document.getElementById('paket').value.trim();
      const namaPengantin = document.getElementById('namaPengantin').value.trim();
      const tanggalAcara = document.getElementById('tanggalAcara').value.trim();
      const alamatAcara = document.getElementById('alamatacara').value.trim();
      const alamatLink = document.getElementById('alamat').value.trim();
      const noHP = document.getElementById('noHP').value.trim();

      const pesan = `Hai Symphony Project,
Saya *${namaPemesan}* ingin booking jasa kamu dengan keterangan sebagai berikut:

PAKET PEMESANAN : ${paket}
PADA TANGGAL : ${tanggalAcara}
BERTEMPAT DI : ${alamatAcara}
LINK TO GMAPS : ${alamatLink}
NO. HP : ${noHP}

Mohon konfirmasi ketersediaan bookingnya.`;

      const whatsappNumber = '6285333441651';
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(pesan)}`;

      window.open(whatsappLink, '_blank');
    });
  }
});
