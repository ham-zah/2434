var nd = [
  "example.com",
  "teratasi.com",
  "foxpop.co.uk",
  "phosfor.co"
];

var exp= [
  "#domain",
  "#PRICE",
  "#HI",
  "#REG",
  "#EXP",
  "#DA",
  "#PA",
  "#SS",
  "#BL",
  "#MT",
  "#MR",
  "#AR",
  "#DR",
  "#UR",
  "#EDU",
  "#GOV"
];
/* EXAMPLE */
if(ls.indexOf(nd[0]+"&d=0")>-1)
exp=[nd[0],
  "65.000",
  "2021",
  "25-10-2021",
  "25-10-2022",
  "20",
  "21",
  "0%",
  "1000.000.000.000",
  "2",
  "2",
  "44.000.000",
  "8",
  "9",
  "10",
  "10"
];
/* TERATASI.COM */
if(ls.indexOf(nd[1]+"&d=1")>-1)
exp=[nd[1],
  "90.000",
  "2016",
  "16-12-2021",
  "16-12-2022",
  "8",
  "40",
  "3%",
  "2.796",
  "4",
  "4.0",
  "90.459.121",
  "0",
  "54",
  "212",
  "9"
];
/* FOXPOP.CO.UK */
if(ls.indexOf(nd[2]+"&d=2")>-1)
exp=[nd[2],
  "70.000",
  "2001",
  "13-01-2021",
  "13-01-2022",
  "22",
  "30",
  "0%",
  "844",
  "3",
  "3.0",
  "22.438.708",
  "8",
  "14",
  "289",
  "0"
];
/* PHOSFOR.CO */
if(ls.indexOf(nd[3]+"&d=3")>-1)
exp=[nd[3],
  "50.000",
  "2013",
  "16-11-2021",
  "16-11-2022",
  "26",
  "41",
  "48%",
  "242.018",
  "4",
  "4.1",
  "26.875.410",
  "6",
  "8",
  "43",
  "0"
];

/* Title */
document.title = exp[0]+" - Nama Business Registrant";

var ket = '<h2>Keterangan :</h2><ul class="square"><li>HISTORY = Riwayat domain<li>REGISTER = Waktu pendaftaran domain<li>EXPIRED = Waktu expired domain (dapat diperpanjang)<li>DA = Domain Authority<li>PA = Page Authority<li>SS = Spam Score<li>BL = Backlink<li>MT = Moz Trust<li>MR = Moz Rank<li>AR = Ahrefs Rank<li>DR = Domain Rating<li>UR = Url Rating<li>BL EDU = Backlink dari website .edu (pendidikan)<li>BL GOV = Backlink dari website .gov (pemerintah)</ul>';

/* Table */
rwID.innerHTML='<div id="nexp"><table class="borderless tab1 text-center"><thead class="thead1"><tr><th scope="col"><b id="nama">'+exp[0]+'</b> &gt; Rp<b id="rp">'+exp[1]+'</b> <a href="https://wa.me/message/QC3K6M45LU7RI1" id="wa" target="_blank" rel="nofollow noopener">WA</a></th></tr></thead><tbody><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">HISTORY</th><th scope="col">REGISTER</th><th scope="col">EXPIRED</th></tr></thead><tbody><tr><td id="hi">'+exp[2]+'</td><td id="reg">'+exp[3]+'</td><td id="exp">'+exp[4]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">DA</th><th scope="col">PA</th><th scope="col">SS</th><th scope="col">BL</th><th scope="col">MT</th><th scope="col">MR</th></tr></thead><tbody><tr><td id="da">'+exp[5]+'</td><td id="pa">'+exp[6]+'</td><td id="ss">'+exp[7]+'</td><td id="bl">'+exp[8]+'</td><td id="mt">'+exp[9]+'</td><td id="mr">'+exp[10]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">AR</th><th scope="col">DR</th><th scope="col">UR</th><th scope="col">BL EDU</th><th scope="col">BL GOV</th></tr></thead><tbody><tr><td id="ar">'+exp[11]+'</td><td id="dr">'+exp[12]+'</td><td id="ur">'+exp[13]+'</td><td id="edu">'+exp[14]+'</td><td id="gov">'+exp[15]+'</td></tr></tbody></table></td></tr></tbody></table>'+ket+'</div>';

getID.parentNode.replaceChild(rwID,getID);
