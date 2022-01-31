/* Gen Setting */
var top_info = '<p>Pendaftaran domain .com Rp65.000 1 tahun, stok terbatas setiap harinya ^_^</p><a href="https://hamdaniazzah.my.id" target="_blank">Order Sekarang &raquo;</a>',
    footyear = '2022 &middot; ';

/* Gen Variable */
var getheader = doc.getElementsByTagName("header")[0],
    getfoota = doc.getElementById("foota");

/* Home Function */
function addAfter(newNode,existingNode) {existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling)}

/* Info */
let createinfo=doc.createElement("div");
createinfo.innerHTML='<div class="top-info text-center">'+top_info+'</div>';
addAfter(createinfo,getheader);

/* Copyright Year */
var createfootyear = doc.createElement("span");
createfootyear.innerHTML=footyear;
getfoota.parentNode.insertBefore(createfootyear,getfoota);
