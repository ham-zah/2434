/* Home Setting */
var NamaSold = '<span class="bb_yellow">31</span>';

/* Home Variable */
var getTrank = doc.getElementById("t-ranked"),
    getTpro = doc.getElementById("t-premium")

/* TABLE RANKED DOMAIN */
for(var trank=[
[
  "foxpop.co.uk",
  "22",
  "30",
  "0%",
  "844",
  "/?exp=foxpop.co.uk&d=1",
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
  "jurnalku.me",
  "18",
  "25",
  "5%",
  "3.073",
  "/?exp=jurnalku.me&d=5",
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
