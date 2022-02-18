var nd = [
  "example.com",
  "rachmadbagus.com",
  "transinema.com",
  "iliamember.com",
  "foxpop.co.uk",
  "contohsurat.me",
  "domainiac.tech",
  "bisnis.live"
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
  "#MT",
  "#MR",
  "#BL",
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
  "2",
  "2",
  "1.000.000",
  "10",
  "10"
];

/* RACHMADBAGUS.COM */
if(ls.indexOf(nd[1]+"&d=1")>-1)
exp=[nd[1],
  "100.000",
  "2018",
  "31-01-2022",
  "31-01-2023",
  "12",
  "26",
  "7%",
  "3",
  "2.6",
  "5.555",
  "14",
  "35"
];
/* TRANSINEMA.COM */
if(ls.indexOf(nd[2]+"&d=2")>-1)
exp=[nd[2],
  "140.000",
  "2002",
  "24-01-2022",
  "24-01-2023",
  "14",
  "20",
  "0%",
  "2",
  "2.0",
  "213",
  "0",
  "0"
];
/* ILIAMEMBER.COM */
if(ls.indexOf(nd[3]+"&d=3")>-1)
exp=[nd[3],
  "70.000",
  "2020",
  "31-12-2021",
  "31-12-2022",
  "4",
  "30",
  "2%",
  "3",
  "3.0",
  "316",
  "0",
  "0"
];
/* FOXPOP.CO.UK */
if(ls.indexOf(nd[4]+"&d=4")>-1)
exp=[nd[4],
  "70.000",
  "2001",
  "13-01-2021",
  "13-01-2022",
  "22",
  "30",
  "0%",
  "3",
  "3.0",
  "844",
  "289",
  "0"
];
/* CONTOHSURAT.ME */
if(ls.indexOf(nd[5]+"&d=5")>-1)
exp=[nd[5],
  "75.000",
  "2016",
  "03-02-2022",
  "03-02-2023",
  "18",
  "30",
  "0%",
  "3",
  "3.0",
  "962",
  "145",
  "0"
];
/* DOMAINIAC.TECH */
if(ls.indexOf(nd[6]+"&d=6")>-1)
exp=[nd[6],
  "50.000",
  "2018",
  "07-02-2022",
  "07-02-2023",
  "11",
  "20",
  "0%",
  "2",
  "2.0",
  "378",
  "0",
  "0"
];
/* BISNIS.LIVE */
if(ls.indexOf(nd[7]+"&d=7")>-1)
exp=[nd[7],
  "120.000",
  "2018",
  "13-02-2022",
  "13-02-2023",
  "7",
  "15",
  "0%",
  "2",
  "1.5",
  "112",
  "0",
  "0"
];

/* TITLE */
document.title = exp[0]+" - Nama Business Registrant";

var ket = '<h2>Keterangan :</h2><ul class="square"><li>HISTORY = Riwayat domain</li><li>REGISTER = Waktu pendaftaran domain</li><li>EXPIRED = Waktu expired domain (dapat diperpanjang)</li><li>DA = Domain Authority</li><li>PA = Page Authority</li><li>SS = Spam Score</li><li>MT = Moz Trust</li><li>MR = Moz Rank</li><li>BL = Backlink</li><li>BL EDU = Backlink dari website .edu (pendidikan)</li><li>BL GOV = Backlink dari website .gov (pemerintah)</li></ul>';

/* TABLE */
rwID.innerHTML='<div id="nexp"><table class="borderless tab1 text-center"><thead class="thead1"><tr><th scope="col"><b id="nama">'+exp[0]+'</b> &gt; Rp<b id="rp">'+exp[1]+'</b> <a href="https://wa.me/message/QC3K6M45LU7RI1" id="wa" target="_blank" rel="nofollow noopener">WA</a></th></tr></thead><tbody><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">HISTORY</th><th scope="col">REGISTER</th><th scope="col">EXPIRED</th></tr></thead><tbody><tr><td id="hi">'+exp[2]+'</td><td id="reg">'+exp[3]+'</td><td id="exp">'+exp[4]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">DA</th><th scope="col">PA</th><th scope="col">SS</th><th scope="col">MT</th><th scope="col">MR</th></tr></thead><tbody><tr><td id="da">'+exp[5]+'</td><td id="pa">'+exp[6]+'</td><td id="ss">'+exp[7]+'</td><td id="mt">'+exp[8]+'</td><td id="mr">'+exp[9]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><th scope="col">BL</th><th scope="col">BL EDU</th><th scope="col">BL GOV</th></tr></thead><tbody><tr><td id="bl">'+exp[10]+'</td><td id="edu">'+exp[11]+'</td><td id="gov">'+exp[12]+'</td></tr></tbody></table></td></tr></tbody></table>'+ket+'</div>';

getID.parentNode.replaceChild(rwID,getID);