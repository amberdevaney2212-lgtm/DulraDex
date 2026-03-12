/* -------------------- ICONS -------------------- */
const typeIcons = { fire:"🔥", water:"💧", grass:"🌿", ice:"🧊", flying:"🕊️", dark:"🌑", poison:"☣️", bug:"🐛", electric:"⚡" };
const habitatIcons = { forest:"🌲", grassland:"🌾", mountain:"⛰️", freshwater:"🏞️", ocean:"🌊", urban:"🏙️", wetland:"🪷", desert:"🏜️", polar:"❄️", rainforest:"🌴" };
const continentIcons = { Africa:"🌍", Europe:"🌍", Asia:"🌏", "North America":"🌎", "South America":"🌎", Oceania:"🦘", Antarctica:"🐧" };

/* -------------------- ANIMALS -------------------- */
const animals = [
  {name:"African Lion",scientific:"Panthera leo",type:"fire",continent:"Africa",rarity:"rare",atk:80,def:70,move:"Flame Pounce", habitat:"grassland"},
  {name:"Bald Eagle",scientific:"Haliaeetus leucocephalus",type:"flying",continent:"North America",rarity:"uncommon",atk:60,def:50,move:"Sky Dive", habitat:"forest"},
  {name:"Polar Bear",scientific:"Ursus maritimus",type:"ice",continent:"Antarctica",rarity:"rare",atk:75,def:80,move:"Frozen Swipe", habitat:"polar"},
  // ... include all the rest of your animals here ...
];

/* -------------------- DATALIST -------------------- */
const datalist = document.getElementById("animals");
animals.forEach(a => {
  let o = document.createElement("option");
  o.value = a.name;
  datalist.appendChild(o);
});

/* -------------------- LOCAL STORAGE & XP -------------------- */
let logged = JSON.parse(localStorage.getItem("wilddex_logged")) || [];
let xp = Number(localStorage.getItem("wilddex_xp")) || 0;

function addXP(rarity){
  const xpTable = { common:5, uncommon:10, rare:25, legendary:50 };
  xp += xpTable[rarity] || 5;
  localStorage.setItem("wilddex_xp", xp);
  updateXPDisplay();
}

function updateXPDisplay(){
  let level = Math.floor(xp / 50);
  let nextLevel = (level+1)*50;
  const xpDisplay = document.getElementById("xpDisplay");
  if(xpDisplay) xpDisplay.textContent = `Level ${level} Researcher • XP ${xp} / ${nextLevel}`;
}

/* -------------------- WORLD MAP -------------------- */
function updateWorldMap(){
  const continents = [...new Set(logged.map(a => a.continent))];
  document.querySelectorAll(".continent-shape").forEach(el => el.classList.remove("discovered"));
  continents.forEach(c => {
    const id = "map-" + c.replace(/\s/g,"").toLowerCase();
    const el = document.getElementById(id);
    if(el) el.classList.add("discovered");
  });
}

/* -------------------- LOG ANIMAL -------------------- */
function logAnimal(){
  let name = document.getElementById("animalInput").value.trim();
  let animal = animals.find(a => a.name === name);
  const message = document.getElementById("logMessage");

  if(!animal){
    message.textContent="Animal not found.";
    message.style.color="red";
    return;
  }

  if(logged.some(a => a.name === animal.name)){
    message.textContent="You've already logged this animal.";
    message.style.color="orange";
    return;
  }

  logged.push({...animal, recordedAt: new Date().toISOString()});
  addXP(animal.rarity);
  localStorage.setItem("wilddex_logged", JSON.stringify(logged));

  message.textContent="🐾 Animal Discovered!";
  message.style.color="green";
  message.classList.add("foundAnim");
  setTimeout(()=>message.classList.remove("foundAnim"),800);

  document.getElementById("animalInput").value="";
  document.getElementById("animalInput").focus();

  document.body.classList.add("discoveryFlash");
  setTimeout(()=>document.body.classList.remove("discoveryFlash"),500);

  renderCollection();
  updateBadges();
  updateStats();
  updateWorldMap();
}

/* -------------------- STATS -------------------- */
function updateStats(){
  const habitats = [...new Set(logged.map(a => a.habitat).filter(Boolean))];
  const continents = [...new Set(logged.map(a => a.continent).filter(Boolean))];
  const rareCount = logged.filter(a => a.rarity==="rare" || a.rarity==="legendary").length;

  document.getElementById("statTotal")?.textContent = `🐾 Animals Logged: ${logged.length}`;
  document.getElementById("statRare")?.textContent = `💎 Rare Animals: ${rareCount}`;
  document.getElementById("statHabitats")?.textContent = `🌿 Habitats Explored: ${habitats.length}`;
  document.getElementById("statContinents")?.textContent = `🌍 Continents Explored: ${continents.length}`;

  // Explorer map
  document.querySelectorAll(".continent").forEach(el => el.classList.remove("discovered"));
  continents.forEach(c => {
    const el = document.getElementById("cont-" + c.replace(/\s/g,"").toLowerCase());
    if(el) el.classList.add("discovered");
  });
}

/* -------------------- IMAGE CACHE -------------------- */
const imageCache = {};
async function getImage(name){
  if(imageCache[name]) return imageCache[name];
  try{
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
    let res = await fetch(url);
    let data = await res.json();
    const img = data.thumbnail ? data.thumbnail.source : "";
    imageCache[name] = img;
    return img;
  }catch{
    return "";
  }
}

/* -------------------- RENDER COLLECTION -------------------- */
async function renderCollection(){
  const area = document.getElementById("collection");
  area.innerHTML = "";

  const search = document.getElementById("searchBox").value.toLowerCase();
  const filter = document.getElementById("filterElement").value;
  const habitat = document.getElementById("filterHabitat").value;

  // Remove only theme classes (do not remove body classes like discoveryFlash)
  document.body.classList.remove(
    "fireTheme","waterTheme","grassTheme","iceTheme","darkTheme","poisonTheme","bugTheme","electricTheme"
  );
  if(filter!=="all") document.body.classList.add(filter+"Theme");

  const animalsToShow = logged.filter(a=>{
    if(search && !a.name.toLowerCase().includes(search)) return false;
    if(filter!=="all" && a.type!==filter) return false;
    if(habitat!=="all" && a.habitat!==habitat) return false;
    return true;
  });

  for(const a of animalsToShow){
    const stars = {
      common:"⭐",
      uncommon:"⭐⭐",
      rare:"⭐⭐⭐",
      legendary:"⭐⭐⭐⭐"
    }[a.rarity] || "⭐";

    const img = await getImage(a.name);

    const card = document.createElement("div");
    card.className = `card ${a.type} ${a.rarity}`;
    if(a.type2) card.dataset.type2 = a.type2;
    card.onclick = ()=>openAnimal(a,img);
    card.innerHTML = `
      <div class="rarity">${stars}</div>
      <div class="card-header"><span>${a.name}</span></div>
      <div class="image-container"><img src="${img}" alt="${a.name}"></div>
      <div class="card-body">
        <div class="card-overlay"></div>
        <div class="scientific">${a.scientific}</div>
        <div><b>${a.move}</b></div>
        <div class="stats"><span>ATK ${a.atk}</span><span>DEF ${a.def}</span></div>
        <div class="footer">
          <span>${typeIcons[a.type]}${a.type2 ? ` ${typeIcons[a.type2]}` : ""}</span>
          ${a.habitat ? `<span class="habitat-badge">${habitatIcons[a.habitat]} ${a.habitat}</span>` : ""}
          <span>${continentIcons[a.continent]}</span>
        </div>
      </div>
    `;
    area.appendChild(card);
  }
}

/* -------------------- BADGES -------------------- */
function updateBadges(){
  const badgeArea = document.getElementById("badgeArea");
  badgeArea.innerHTML = "";

  const continents = [...new Set(logged.map(a=>a.continent))];
  const elements = [...new Set(logged.map(a=>a.type))];
  const rareCount = logged.filter(a=>a.rarity==="rare"||a.rarity==="legendary").length;
  const dualTypes = logged.filter(a=>a.type2).length;
  const legendaryCount = logged.filter(a=>a.rarity==="legendary").length;

  const createBadge = (text,title,extraClass="")=>{
    const b = document.createElement("div");
    b.className = `badge ${extraClass} animate`;
    b.textContent = text;
    b.title = title;
    badgeArea.appendChild(b);
  };

  if(continents.length>=5) createBadge("🌏 World Explorer","Collected animals from 5+ continents!","badge-world");
  else if(continents.length>=3) createBadge("🌍 Explorer Badge",`Collected animals from 3+ continents. ${5-continents.length} more to World Explorer!`,"badge-world");

  if(elements.length>=6) createBadge("⚡ Element Master","Caught 6+ elements!","badge-element");
  else if(elements.length>=3) createBadge("⚡ Elementalist Badge",`Caught 3+ elements. ${6-elements.length} more to Element Master!`,"badge-element");

  if(logged.length>=10) createBadge("📘 Field Researcher","Logged 10+ animals!","badge-research");
  else if(logged.length>=5) createBadge("📖 Junior Researcher",`Logged 5+ animals. ${10-logged.length} more to Field Researcher!`,"badge-research");

  if(rareCount>=5) createBadge("💎 Elite Collector","Collected 5+ rare or legendary animals!","badge-rare");
  else if(rareCount>=3) createBadge("💎 Collector Badge",`Collected 3+ rare or legendary animals. ${5-rareCount} more to Elite Collector!`,"badge-rare");

  if(dualTypes>=3) createBadge("🔗 Dual-Type Explorer","Caught 3+ dual-type animals!");
  if(legendaryCount>=1) createBadge("🌟 Legendary Hunter",`Caught ${legendaryCount} legendary animal(s)!`,"badge-legendary");
}

/* -------------------- MODAL -------------------- */
let currentAnimal=null;

function openAnimal(a,img){
  currentAnimal=a;
  document.getElementById("modalName").textContent = a.name;
  document.getElementById("modalImg").src = img;
  document.getElementById("modalScientific").textContent = "Scientific: "+a.scientific;
  document.getElementById("modalMove").textContent = "Move: "+a.move;
  document.getElementById("modalStats").textContent = `ATK ${a.atk} | DEF ${a.def} | HP ${a.atk+a.def}`;
  document.getElementById("modalType").textContent = `Type: ${a.type}${a.type2?" / "+a.type2:""}`;
  document.getElementById("modalContinent").textContent = "Continent: "+a.continent;
  document.getElementById("modalHabitat").textContent = a.habitat ? "Habitat: "+a.habitat : "Habitat: Unknown";
  document.getElementById("modalDate").textContent = a.recordedAt ? "Recorded: "+new Date(a.recordedAt).toLocaleString() : "Recorded: Unknown";
  document.getElementById("animalModal").style.display="flex";
}

function closeModal(e){
  if(!e || e.target.id==="animalModal" || e.target.className==="close"){
    document.getElementById("animalModal").style.display="none";
  }
}

function releaseAnimal(){
  if(!currentAnimal) return;
  logged = logged.filter(a=>a.name!==currentAnimal.name);
  localStorage.setItem("wilddex_logged", JSON.stringify(logged));
  closeModal();
  renderCollection();
  updateBadges();
  updateStats(); 
}

/* -------------------- PAGE TABS -------------------- */
function openPage(e,id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  if(e && e.currentTarget) e.currentTarget.classList.add("active");
}

/* -------------------- INIT -------------------- */
renderCollection();
updateBadges();
updateStats();
updateXPDisplay();
updateWorldMap();
