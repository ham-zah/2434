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
if(ls.match(/\bexp=example.com$/)){
exp=[
  "example.com",
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
]}

/* INFOMEREK.XYZ */
if(ls.match(/\bexp=infomerek.xyz$/)){
exp=[
  "infomerek.xyz",
  "60.000",
  "2017",
  "18-05-2022",
  "18-05-2022",
  "8",
  "29",
  "10%",
  "3",
  "2.9",
  "2.709",
  "6",
  "0"
]}
/* FOXPOP.CO.UK */
if(ls.match(/\bexp=foxpop.co.uk$/)){
exp=[
  "foxpop.co.uk",
  "100.000",
  "2001",
  "13-01-2022",
  "13-01-2023",
  "21",
  "30",
  "0%",
  "3",
  "3.0",
  "838",
  "289",
  "0"
]}
/* DOMAINIAC.TECH */
if(ls.match(/\bexp=domainiac.tech$/)){
exp=[
  "domainiac.tech",
  "50.000",
  "2018",
  "07-02-2022",
  "07-02-2023",
  "10",
  "20",
  "0%",
  "2",
  "2.0",
  "375",
  "0",
  "0"
]}
/* BISNIS.LIVE */
if(ls.match(/\bexp=bisnis.live$/)){
exp=[
  "bisnis.live",
  "120.000",
  "2018",
  "13-02-2022",
  "13-02-2023",
  "8",
  "15",
  "0%",
  "2",
  "1.5",
  "111",
  "0",
  "0"
]}
/* SELAGU.ME */
if(ls.match(/\bexp=selagu.me$/)){
exp=[
  "selagu.me",
  "90.000",
  "2019",
  "23-03-2022",
  "23-03-2023",
  "15",
  "31",
  "9%",
  "3",
  "3.1",
  "5.020.210",
  "40",
  "0"
]}
/* KIOS.STORE */
if(ls.match(/\bexp=kios.store$/)){
exp=[
  "kios.store",
  "120.000",
  "2021",
  "19-04-2022",
  "19-04-2023",
  "8",
  "27",
  "2%",
  "3",
  "2.7",
  "137",
  "0",
  "0"
]}

/* TITLE */
doc.title = exp[0]+" - Nama Business Registrant";

var ket = '<h2>Keterangan :</h2><ul class="square"><li>HISTORY = Riwayat domain</li><li>REGISTER = Waktu pendaftaran domain</li><li>EXPIRED = Waktu expired domain (dapat diperpanjang)</li><li>DA = Domain Authority</li><li>PA = Page Authority</li><li>SS = Spam Score</li><li>MT = Moz Trust</li><li>MR = Moz Rank</li><li>BL = Backlink</li><li>BL EDU = Backlink dari website .edu (pendidikan)</li><li>BL GOV = Backlink dari website .gov (pemerintah)</li></ul>';

/* TABLE */
rwID.innerHTML='<div id="nexp"><table class="borderless tab1 text-center"><thead class="thead1"><tr><th scope="col"><b id="nama">'+exp[0]+'</b> &gt; Rp<b id="rp">'+exp[1]+'</b> <a href="https://wa.me/message/KQ6YMLX3M62ZJ1" id="wa" target="_blank" rel="nofollow noopener">WA</a></th></tr></thead><tbody><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">HISTORY</th><th scope="col">REGISTER</th><th scope="col">EXPIRED</th></tr></thead><tbody><tr><td id="hi">'+exp[2]+'</td><td id="reg">'+exp[3]+'</td><td id="exp">'+exp[4]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><tr><th scope="col">DA</th><th scope="col">PA</th><th scope="col">SS</th><th scope="col">MT</th><th scope="col">MR</th></tr></thead><tbody><tr><td id="da">'+exp[5]+'</td><td id="pa">'+exp[6]+'</td><td id="ss">'+exp[7]+'</td><td id="mt">'+exp[8]+'</td><td id="mr">'+exp[9]+'</td></tr></tbody></table></td></tr><tr><td><table class="borderless bordered tab-in"><thead><th scope="col">BL</th><th scope="col">BL EDU</th><th scope="col">BL GOV</th></tr></thead><tbody><tr><td id="bl">'+exp[10]+'</td><td id="edu">'+exp[11]+'</td><td id="gov">'+exp[12]+'</td></tr></tbody></table></td></tr></tbody></table>'+ket+'</div>';

getID.parentNode.replaceChild(rwID,getID);
