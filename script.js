function submitBooking(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima.\nKami akan menghubungi Anda lewat email: ${email}`);

  e.target.reset();
}
