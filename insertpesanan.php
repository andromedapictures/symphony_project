<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include "koneksi.php";

// Ambil data POST secara aman
$nama_pemesan   = mysqli_real_escape_string($conn, $_POST['namaPemesan']);
$jenis_paket    = mysqli_real_escape_string($conn, $_POST['paket']);
$harga_paket    = mysqli_real_escape_string($conn, $_POST['hargaPaketValue']);
$harga_display  = mysqli_real_escape_string($conn, $_POST['hargadisplay']);
$nama_pengantin = mysqli_real_escape_string($conn, $_POST['namaPengantin']);
$tanggal_acara  = mysqli_real_escape_string($conn, $_POST['tanggalAcara']);
$alamat_acara   = mysqli_real_escape_string($conn, $_POST['alamatacara']); 
$link_gmaps     = mysqli_real_escape_string($conn, $_POST['alamat']);
$no_hp          = mysqli_real_escape_string($conn, $_POST['noHP']);

// Query Insert
$sql = "INSERT INTO datapesanan 
        (nama_pemesan, jenis_paket, harga_paket, nama_pengantin, tanggal_acara, alamat_acara, link_gmaps, no_hp)
        VALUES 
        ('$nama_pemesan', '$jenis_paket', '$harga_paket', '$nama_pengantin', '$tanggal_acara', '$alamat_acara', '$link_gmaps', '$no_hp')";

if (mysqli_query($conn, $sql)) {
    // Pesan WhatsApp
    $pesan = "Hai Symphony Project\n" .
             "Saya *$nama_pemesan* ingin booking jasa kamu dengan keterangan sebagai berikut:\n\n" .
             "PAKET PEMESANAN : $jenis_paket\n" .
             "HARGA PAKET : $harga_display\n" .
             "PADA TANGGAL : $tanggal_acara\n" .
             "BERTEMPAT DI : $alamat_acara\n" .
             "LINK TO GMAPS : $link_gmaps\n" .
             "NO. HP : $no_hp\n\n" .
             "Mohon konfirmasi ketersediaan bookingnya.";

    $whatsappNumber = '6285333441651';
    $waLink = "https://wa.me/$whatsappNumber?text=" . urlencode($pesan);

    header("Location: $waLink");
    exit();
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
