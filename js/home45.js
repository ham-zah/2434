/* Home Setting */
var NamaSold = '<span class="bb_yellow">62</span>';

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
  "rachmadbagus.com",
  "12",
  "26",
  "7%",
  "5.555",
  "/?exp=rachmadbagus.com&d=1",
  "Rp100.000"
],
[
  "transinema.com",
  "14",
  "20",
  "0%",
  "213",
  "/?exp=transinema.com&d=2",
  "Rp140.000"
],
[
  "iliamember.com",
  "4",
  "30",
  "2%",
  "316",
  "/?exp=iliamember.com&d=3",
  "Rp70.000"
],
[
  "contohsurat.me",
  "18",
  "30",
  "0%",
  "961",
  "/?exp=contohsurat.me&d=5",
  "Rp75.000"
],
[
  "domainiac.tech",
  "11",
  "20",
  "0%",
  "378",
  "/?exp=domainiac.tech&d=6",
  "Rp50.000"
],
[
  "bisnis.live",
  "7",
  "15",
  "0%",
  "112",
  "/?exp=bisnis.live&d=7",
  "Rp120.000"
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
