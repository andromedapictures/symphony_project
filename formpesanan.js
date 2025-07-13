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

  // Dropdown Provinsi → Kota/Kabupaten → Kecamatan
  const provinsi = document.getElementById('provinsi');
  const kota = document.getElementById('kota');
  const kecamatan = document.getElementById('kecamatan');

  const dataAlamat = {
    "Aceh": {
      "Aceh Barat": ["Johan Pahlawan", "Meureubo", "Arongan Lambalek"],
      "Aceh Barat Daya": ["Blangpidie", "Lembah Sabil", "Tangan-Tangan"],
      "Aceh Besar": ["Ingin Jaya", "Darussalam", "Kuta Baro"],
      "Aceh Jaya": ["Calang", "Teunom", "Krueng Sabee"],
      "Aceh Selatan": ["Tapaktuan", "Kluet Selatan", "Meukek"],
      "Aceh Singkil": ["Singkil", "Gunung Meriah"],
      "Aceh Tamiang": ["Karang Baru", "Kota Kualasimpang"],
      "Aceh Tengah": ["Takengon", "Bebesen"],
      "Aceh Tenggara": ["Kutacane", "Babul Makmur"],
      "Aceh Timur": ["Peureulak", "Rantau Selamat"],
      "Aceh Utara": ["Lhoksukon", "Tanah Jambo Aye"],
      "Bener Meriah": ["Bukit", "Wih Pesam"],
      "Bireuen": ["Jeumpa", "Peudada"],
      "Gayo Lues": ["Blangkejeren", "Putri Betung"],
      "Kota Banda Aceh": ["Baiturrahman", "Kuta Alam"],
      "Kota Langsa": ["Langsa Kota", "Langsa Barat", "Langsa Timur", "Langsa Lama", "Langsa Baroe"],
      "Kota Lhokseumawe": ["Banda Sakti", "Muara Dua"],
      "Kota Sabang": ["Sukakarya", "Sukajaya"],
      "Kota Subulussalam": ["Simpang Kiri", "Sultan Daulat"],
      "Nagan Raya": ["Suka Makmue", "Beutong"],
      "Pidie": ["Sigli", "Grong-Grong"],
      "Pidie Jaya": ["Meureudu", "Trienggadeng"],
      "Simeulue": ["Sinabang", "Teluk Dalam"]
    },
    "Sumatera Utara": {
      "Medan": ["Medan Timur", "Medan Barat"],
      "Binjai": ["Binjai Kota", "Binjai Utara"]
    }
  };

  if (provinsi && kota && kecamatan) {
    provinsi.addEventListener('change', () => {
      const selectedProv = provinsi.value;
      kota.innerHTML = `<option value="">-- Pilih Kota/Kabupaten --</option>`;
      kecamatan.innerHTML = `<option value="">-- Pilih Kecamatan --</option>`;
      kota.disabled = true;
      kecamatan.disabled = true;

      if (dataAlamat[selectedProv]) {
        kota.disabled = false;
        Object.keys(dataAlamat[selectedProv]).forEach(kab => {
          const opt = document.createElement('option');
          opt.value = kab;
          opt.textContent = kab;
          kota.appendChild(opt);
        });
      }
    });

    kota.addEventListener('change', () => {
      const selectedProv = provinsi.value;
      const selectedKota = kota.value;
      kecamatan.innerHTML = `<option value="">-- Pilih Kecamatan --</option>`;
      kecamatan.disabled = true;

      if (dataAlamat[selectedProv] && dataAlamat[selectedProv][selectedKota]) {
        kecamatan.disabled = false;
        dataAlamat[selectedProv][selectedKota].forEach(kec => {
          const opt = document.createElement('option');
          opt.value = kec;
          opt.textContent = kec;
          kecamatan.appendChild(opt);
        });
      }
    });
  }

  // Form Submit → Kirim ke WhatsApp
  const form = document.getElementById('formPemesanan');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nama = document.getElementById('namaPemesan').value;
      const paket = document.getElementById('paket').value;
      const pengantin = document.getElementById('namaPengantin').value;
      const tanggal = document.getElementById('tanggalAcara').value;
      const prov = document.getElementById('provinsi').value;
      const kab = document.getElementById('kota').value;
      const kec = document.getElementById('kecamatan').value;
      const gampong = document.getElementById('gampong').value;
      const nohp = document.getElementById('noHP').value;

      const pesan = `
Halo Symphony Project 👋%0A
Saya ingin melakukan pemesanan dengan data berikut:%0A
=========================%0A
👤 Nama Pemesan: ${nama}%0A
🎁 Jenis Paket: ${paket}%0A
💑 Nama Pengantin/Pemilik Acara: ${pengantin}%0A
📅 Tanggal Acara: ${tanggal}%0A
📍 Lokasi: ${gampong}, Kec. ${kec}, ${kab}, Provinsi ${prov}%0A
📱 No HP Aktif: ${nohp}%0A
=========================%0A
Mohon konfirmasi lebih lanjut ya. Terima kasih 🙏`;

      const url = `https://wa.me/6285333441651?text=${encodeURIComponent(pesan)}`;
      window.open(url, '_blank');
    });
  }
});
