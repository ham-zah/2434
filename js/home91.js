/* Home Setting */
var NamaSold = '<span class="bb_yellow">93</span>';

/* Home Variable */
var getTreg0 = doc.querySelector(".t-reg"),
    getTreg = doc.getElementById("t-register"),
    getTrank = doc.getElementById("t-ranked"),
    getTpro = doc.getElementById("t-premium"),
    svgCHECK = "<i class='svg-check'></i>",
    iconFIRE = "<i class='icon-fire'></i>";

/* TABLE REGISTER DOMAIN */
for(var treg=[
["com","Rp65.000",iconFIRE],
["co","Rp45.000",svgCHECK],
["xyz","Rp20.000",svgCHECK],
["me","Rp30.000",iconFIRE],
["info","Rp40.000",svgCHECK],
["tech","Rp30.000",iconFIRE],
["biz","Rp25.000",svgCHECK],
/* COUNTRY Start */
["us","Rp35.000",svgCHECK],
["uk","Rp35.000",iconFIRE],
["co.uk","Rp45.000",iconFIRE],
["ru.com","Rp15.000",svgCHECK],
["sa.com","Rp15.000",svgCHECK],
["za.com","Rp15.000",svgCHECK],
/* COUNTRY End */
["online","Rp25.000",svgCHECK],
["site","Rp25.000",svgCHECK],
["website","Rp30.000",svgCHECK],
["life","Rp40.000",svgCHECK],
["live","Rp40.000",svgCHECK],
["cloud","Rp40.000",svgCHECK],
["cyou","Rp20.000",svgCHECK],
["link","Rp35.000",svgCHECK],
["pro","Rp70.000",svgCHECK],
["shop","Rp55.000",iconFIRE],
["store","Rp55.000",iconFIRE],
["company","Rp50.000",svgCHECK],
["business","Rp50.000",svgCHECK]
],i=0;i<treg.length;i++){const e=doc.createElement("tr");for(var j=0;j<treg[i].length;j++){const r=doc.createElement("td");r.innerHTML=treg[i][j],e.appendChild(r)}getTreg.appendChild(e)}

let noteTreg=doc.createElement("div");
noteTreg.innerHTML='<p class="text-center" style="margin-top:1rem"><i class="svg-check va-5"></i> = Stok Tersedia, '+iconFIRE+' = Stok Terbatas!';
addAfter(noteTreg,getTreg0);

/* TABLE RANKED DOMAIN */
for(var trank=[
[
  "netuter.xyz",
  "45",
  "33",
  "24%",
  "2.511",
  "Rp60.000",
  "/?exp=netuter.xyz"
],
[
  "malaysiapos.com",
  "21",
  "36",
  "5%",
  "17.624",
  "Rp150.000",
  "/?exp=malaysiapos.com"
]
],i=0;i<trank.length;i++){const a=doc.createElement("tr");for(var j=0;j<trank[i].length;j++){const e=doc.createElement("td");e.innerHTML=trank[i][j],a.appendChild(e)}getTrank.appendChild(a)}

/* TABLE PREMIUM DOMAIN */
for(var tpro=[
[
  "nama.ekstensi",
  "Tag1, Tag2",
  "Rp100.000"
]
],i=0;i<tpro.length;i++){const a=doc.createElement("tr");for(var j=0;j<tpro[i].length;j++){const e=doc.createElement("td");e.innerHTML=tpro[i][j],a.appendChild(e)}getTpro.appendChild(a)}

/* LINK IN TABLE */
var getTlink=doc.querySelectorAll(".t-link td:nth-child(7)"),addTlink;for(addTlink=0;addTlink<getTlink.length;addTlink++){
getTlink[addTlink].innerHTML='<a href="'+getTlink[addTlink].innerText+'" oncontextmenu="return false"></a>'
}

/* SET ATTR */
var setTrans = document.querySelectorAll("#t-premium td:nth-child(2)");
for (let i = 0; i < setTrans.length; i++) {
  setTrans[i].setAttribute("translate", "yes");
}

/* SOLD */
doc.getElementById("nsold").innerHTML=NamaSold;
