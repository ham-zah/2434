/* Home Setting */
var NamaSold = '<span class="bb_yellow">28</span>';

/* Home Variable */
var getTrank = doc.getElementById("t-ranked"),
    getTpro = doc.getElementById("t-premium")

/* TABLE RANKED DOMAIN */
for(var trank=[
[
  "teratasi.com",
  "8",
  "40",
  "3%",
  "2000",
  "https://teratasi.com",
  "Rp90.000"
],
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
  "https://nama.business/?exp=phosfor.co&d=3",
  "Rp50.000"
],
[
  "guruasik.com",
  "10",
  "34",
  "9%",
  "10.095",
  "https://nama.business/?exp=guruasik.com&d=4",
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
