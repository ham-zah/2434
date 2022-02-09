/* Home Setting */
var NamaSold = '<span class="bb_yellow">41</span>';

/* Home Variable */
var getTreg = doc.getElementById("t-register"),
    getTrank = doc.getElementById("t-ranked"),
    getTpro = doc.getElementById("t-premium");

/* TABLE REGISTER DOMAIN */
for(var treg=[
["com","Rp65.000","Terbatas"],
["co","Rp45.000","Tersedia"],
["xyz","Rp20.000","Tersedia"],
["me","Rp30.000","Terbatas"],
["info","Rp40.000","Tersedia"],
["tech","Rp30.000","Terbatas"],
["biz","Rp25.000","Tersedia"],
["us","Rp35.000","Tersedia"],
["uk","Rp35.000","Terbatas"],
["co.uk","Rp40.000","Terbatas"],
["life","Rp40.000","Tersedia"],
["live","Rp40.000","Tersedia"],
["cloud","Rp40.000","Tersedia"],
["cyou","Rp20.000","Tersedia"],
["company","Rp50.000","Tersedia"],
["business","Rp50.000","Tersedia"]
],i=0;i<treg.length;i++){const e=doc.createElement("tr");for(var j=0;j<treg[i].length;j++){const r=doc.createElement("td");r.innerHTML=treg[i][j],e.appendChild(r)}getTreg.appendChild(e)}

/* TABLE RANKED DOMAIN */
for(var trank=[
[
  "foxpop.co.uk",
  "22",
  "30",
  "0%",
  "844",
  "https://foxpop.co.uk",
  "Rp70.000"
],
[
  "phosfor.co",
  "26",
  "41",
  "48%",
  "242.018",
  "/?exp=phosfor.co&d=2",
  "Rp50.000"
],
[
  "iliamember.com",
  "4",
  "30",
  "2%",
  "319",
  "/?exp=iliamember.com&d=3",
  "Rp70.000"
],
[
  "transinema.com",
  "14",
  "20",
  "0%",
  "213",
  "/?exp=transinema.com&d=4",
  "Rp140.000"
],
[
  "rachmadbagus.com",
  "12",
  "26",
  "7%",
  "4.904",
  "/?exp=rachmadbagus.com&d=5",
  "Rp100.000"
],
[
  "contohsurat.me",
  "18",
  "30",
  "0%",
  "962",
  "https://contohsurat.me",
  "Rp75.000"
],
[
  "domainiac.tech",
  "11",
  "20",
  "0%",
  "378",
  "https://domainiac.tech",
  "Rp50.000"
]
],i=0;i<trank.length;i++){const a=doc.createElement("tr");for(var j=0;j<trank[i].length;j++){const e=doc.createElement("td");e.innerHTML=trank[i][j],a.appendChild(e)}getTrank.appendChild(a)}

/* TABLE PREMIUM DOMAIN */
for(var tpro=[
[
  "idn.social",
  "Social",
  "Rp300.000"
],
[
  "lyrics.rocks",
  "Music",
  "Rp250.000"
]
],i=0;i<tpro.length;i++){const a=doc.createElement("tr");for(var j=0;j<tpro[i].length;j++){const e=doc.createElement("td");e.innerHTML=tpro[i][j],a.appendChild(e)}getTpro.appendChild(a)}

/* LINK IN TABLE */
var getTlink=doc.querySelectorAll(".t-link td:nth-child(6)"),addTlink;for(addTlink=0;addTlink<getTlink.length;addTlink++){
getTlink[addTlink].innerHTML='<a href="'+getTlink[addTlink].innerText+'"></a>'
}

/* SOLD */
doc.getElementById("nsold").innerHTML=NamaSold;