/* Home Setting */
var NamaSold = '<span class="bb_yellow">64</span>';

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
  "4.892",
  "/?exp=rachmadbagus.com",
  "Rp90.000"
],
[
  "transinema.com",
  "13",
  "20",
  "0%",
  "212",
  "/?exp=transinema.com",
  "Rp140.000"
],
[
  "iliamember.com",
  "4",
  "30",
  "2%",
  "318",
  "/?exp=iliamember.com",
  "Rp65.000"
],
[
  "foxpop.co.uk",
  "21",
  "30",
  "0%",
  "838",
  "/?exp=foxpop.co.uk",
  "Rp100.000"
],
[
  "domainiac.tech",
  "10",
  "20",
  "0%",
  "375",
  "/?exp=domainiac.tech",
  "Rp50.000"
],
[
  "bisnis.live",
  "8",
  "15",
  "0%",
  "111",
  "/?exp=bisnis.live",
  "Rp120.000"
],
[
  "selagu.me",
  "15",
  "31",
  "9%",
  "5.020.210",
  "/?exp=selagu.me",
  "Rp90.000"
]
],i=0;i<trank.length;i++){const a=doc.createElement("tr");for(var j=0;j<trank[i].length;j++){const e=doc.createElement("td");e.innerHTML=trank[i][j],a.appendChild(e)}getTrank.appendChild(a)}

/* TABLE PREMIUM DOMAIN */
for(var tpro=[
[
  "idn.social",
  "Social",
  "Rp180.000"
],
[
  "lyrics.rocks",
  "Music",
  "Rp220.000"
]
],i=0;i<tpro.length;i++){const a=doc.createElement("tr");for(var j=0;j<tpro[i].length;j++){const e=doc.createElement("td");e.innerHTML=tpro[i][j],a.appendChild(e)}getTpro.appendChild(a)}

/* LINK IN TABLE */
var getTlink=doc.querySelectorAll(".t-link td:nth-child(6)"),addTlink;for(addTlink=0;addTlink<getTlink.length;addTlink++){
getTlink[addTlink].innerHTML='<a class="text-center" style="vertical-align:middle" href="'+getTlink[addTlink].innerText+'"></a>'
}

/* SOLD */
doc.getElementById("nsold").innerHTML=NamaSold;