/* TITLE */
doc.title = "Metode Pembayaran - Nama Business";

/* PART */
var PB1 = '<div id="',
    PB2 = '" class="paybox"><div class="paybox-content"><div class="paybox-header"><span class="payclose">&times;</span><img src="',
    PB3 = '"/></div><div class="paybox-body">',
    PB4 = '</div></div></div>',

/* IMAGES */
    imgLOGO = 'https://nama.business/img/logo/',
    imgJAGO = imgLOGO+'jago1.svg',
    imgBCAD = imgLOGO+'bcad1.svg',
    imgDANA = imgLOGO+'dana1.svg',
    imgVA = imgLOGO+'va1.svg',

/* PAY */
    payTAP = '<h2 class="text-center">Payment Method</h2><p>Silakan klik metode pembayaran yang diinginkan untuk melihat nomor pembayaran. Kirim bukti transfer untuk divalidasi.</p><div class="paylist text-center"><div id="tapjago"><span><img src="'+imgJAGO+'"/></span></div><div id="tapbcad"><span><img src="'+imgBCAD+'"/></span></div><div id="tapdana"><span><img src="'+imgDANA+'"/></span></div><div id="tapva"><span><img src="'+imgVA+'"/></span></div></div>',
    payJAGO = PB1+'payjago'+PB2+imgJAGO+PB3+'<p>Nama Bank : Bank Jago / Artos Indonesia</p><p>Nomor Rekening : <span>106054160430</span></p><p>Kode Bank : <span>542</span></p><p>Untuk transfer dari bank lain yang berbeda, pilihlah menu transfer antar bank/transfer ke bank lain, pilih nama bank, lalu masukan kode bank + nomor rekening bank, lanjutkan transaksi sampai selesai.</p>'+PB4,
    payBCAD = PB1+'paybcad'+PB2+imgBCAD+PB3+'<p>Nama Bank : Bank Digital BCA (BCA Digital atau Bank Royal)</p><p>Nomor Rekening : <span>002174930321</span></p><p>Kode Bank : <span>501</span></p><p>Untuk transfer dari bank lain yang berbeda, pilihlah menu transfer antar bank/transfer ke bank lain, pilih nama bank, lalu masukan kode bank + nomor rekening bank, lanjutkan transaksi sampai selesai.</p>'+PB4,
    payDANA = PB1+'paydana'+PB2+imgDANA+PB3+'<p>Nomor : <span>08881088893</span></p><ul><li>Buka aplikasi DANA</li><li>Tap <strong>Kirim</strong></li><li>Tap <strong>Kirim ke Teman</strong></li><li>Masukkan nomor tujuan</li><li>Masukkan nominal yang akan dikirimkan</li><li>Pilih metode pembayaran menggunakan saldo DANA</li><li>Pastikan nomor dan jumlah transfer sudah sesuai</li><li>Tap <strong>Bayar</strong></li><li>Masukkan PIN DANA</li><li>Kirim uang berhasil!</li></ul>'+PB4,
    payVA = PB1+'payva'+PB2+imgVA+PB3+'<p>BCA : <span>390108881088893</span></p><p>BRI : <span>88810008881088893</span></p><p>BNI : <span>8810008881088893</span></p><p>Mandiri : <span>89508008881088893</span></p><p>CIMB Niaga : <span>8059008881088893</span></p><p>BTPN : <span>800000908881088893</span></p>'+PB4;

rwID.innerHTML = '<div class="taptopay">'+payTAP+payJAGO+payBCAD+payDANA+payVA+'</div>';
getID.parentNode.replaceChild(rwID,getID);

/* TAP */
doc.querySelector("#tapjago").addEventListener("click",function(){
doc.querySelector("#payjago").style.display="block"});
doc.querySelector("#tapbcad").addEventListener("click",function(){
doc.querySelector("#paybcad").style.display="block"});
doc.querySelector("#tapdana").addEventListener("click",function(){
doc.querySelector("#paydana").style.display="block"});
doc.querySelector("#tapva").addEventListener("click",function(){
doc.querySelector("#payva").style.display="block"});

/* CLOSE */
var payCLOSE = doc.querySelectorAll(".payclose"),
    payBOX = doc.querySelectorAll(".paybox");
for(let e=0;e<payCLOSE.length;e++)payCLOSE[e].addEventListener("click",function(){
  for(let e=0;e<payBOX.length;e++)payBOX[e].style.display="none"});
