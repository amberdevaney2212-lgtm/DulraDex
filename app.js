const typeIcons={fire:"🔥", water:"💧", grass:"🌿", ice:"🧊", flying:"🕊️", dark:"🌑", poison:"☣️", bug:"🐛",electric:"⚡"};
 const habitatIcons = {
  forest:"🌲",
  grassland:"🌾",
  mountain:"⛰️",
  freshwater:"🏞️",
  ocean:"🌊",
  urban:"🏙️",
  wetland:"🪷",
  desert:"🏜️",
  polar:"❄️",
  rainforest:"🌴",
};
const continentIcons={
  Africa:"🌍",
  Europe:"🌍",
  Asia:"🌏",
  "North America":"🌎",
  "South America":"🌎",
  Oceania:"🦘",
  Antarctica:"🐧"
};
const animals = [
  {name:"African Lion",scientific:"Panthera leo",type:"fire",continent:"Africa",rarity:"rare",atk:80,def:70,move:"Flame Pounce", habitat:"grassland"},
  {name:"Bald Eagle",scientific:"Haliaeetus leucocephalus",type:"flying",continent:"North America",rarity:"uncommon",atk:60,def:50,move:"Sky Dive", habitat:"forest"},
  {name:"Polar Bear",scientific:"Ursus maritimus",type:"ice",continent:"Antarctica",rarity:"rare",atk:75,def:80,move:"Frozen Swipe", habitat:"polar"},
  {name:"Poison Dart Frog",scientific:"Dendrobatidae",type:"poison",continent:"South America",rarity:"uncommon",atk:40,def:30,move:"Toxic Jump", habitat:"rainforest"},
  {name:"Horseshoe Bat",scientific:"Rhinolophus hipposideros",type:"dark",type2:"flying",continent:"Europe",rarity:"rare",atk:50,def:40,move:"Night Dive", habitat:"forest"},
  {name:"Gray Wolf",scientific:"Canis lupus",type:"dark",continent:"North America",rarity:"uncommon",atk:65,def:55,move:"Shadow Hunt", habitat:"forest"},

  {name:"Komodo Dragon",scientific:"Varanus komodoensis",type:"fire",type2:"poison",continent:"Asia",rarity:"rare",atk:85,def:70,move:"Venom Bite", habitat:"desert"},

  {name:"Red Fox",scientific:"Vulpes vulpes",type:"fire",continent:"Europe",rarity:"common",atk:50,def:40,move:"Blaze Dash", habitat:"forest"},
  {name:"Snowy Owl",scientific:"Bubo scandiacus",type:"ice",type2:"flying",continent:"North America",rarity:"uncommon",atk:55,def:45,move:"Frost Glide", habitat:"polar"},
  {name:"Praying Mantis",scientific:"Mantodea",type:"bug",continent:"Asia",rarity:"common",atk:45,def:35,move:"Blade Strike", habitat:"forest"},
  {name:"Jaguar",scientific:"Panthera onca",type:"dark",type2:"fire",continent:"South America",rarity:"rare",atk:80,def:65,move:"Night Pounce", habitat:"rainforest"},
  {name:"Emperor Penguin",scientific:"Aptenodytes forsteri",type:"ice",continent:"Antarctica",rarity:"uncommon",atk:40,def:60,move:"Glacier Slide", habitat:"polar"},
  {name:"Honey Bee",scientific:"Apis mellifera",type:"bug",type2:"flying",continent:"Europe",rarity:"common",atk:30,def:25,move:"Sting Swarm", habitat:"grassland"},
  {name:"European Hedgehog",scientific:"Erinaceus europaeus",type:"grass",continent:"Europe",rarity:"common",atk:35,def:50,move:"Spike Roll", habitat:"forest"},
  {name:"Red Deer",scientific:"Cervus elaphus",type:"grass",continent:"Europe",rarity:"common",atk:60,def:55,move:"Antler Charge", habitat:"forest"},
  {name:"European Badger",scientific:"Meles meles",type:"dark",continent:"Europe",rarity:"uncommon",atk:55,def:60,move:"Burrow Strike", habitat:"forest"},
  {name:"Barn Owl",scientific:"Tyto alba",type:"flying",continent:"Europe",rarity:"uncommon",atk:50,def:40,move:"Silent Glide", habitat:"grassland"},
  {name:"European Robin",scientific:"Erithacus rubecula",type:"flying",continent:"Europe",rarity:"common",atk:25,def:20,move:"Quick Chirp", habitat:"forest"},
  {name:"Wild Boar",scientific:"Sus scrofa",type:"dark",continent:"Europe",rarity:"uncommon",atk:70,def:65,move:"Tusk Rush", habitat:"forest"},
  {name:"European Otter",scientific:"Lutra lutra",type:"water",continent:"Europe",rarity:"uncommon",atk:55,def:50,move:"River Dash", habitat:"freshwater"},
  {name:"Common Frog",scientific:"Rana temporaria",type:"water",continent:"Europe",rarity:"common",atk:30,def:25,move:"Leap Splash", habitat:"wetland"},
  {name:"European Green Lizard",scientific:"Lacerta viridis",type:"grass",continent:"Europe",rarity:"common",atk:40,def:35,move:"Sun Dash", habitat:"grassland"},
  {name:"European Brown Bear",scientific:"Ursus arctos arctos",type:"dark",continent:"Europe",rarity:"rare",atk:85,def:80,move:"Forest Smash", habitat:"forest"},
  {name:"Eurasian Lynx",scientific:"Lynx lynx",type:"dark",continent:"Europe",rarity:"rare",atk:75,def:60,move:"Silent Pounce", habitat:"forest"},
  {name:"Alpine Ibex",scientific:"Capra ibex",type:"grass",continent:"Europe",rarity:"uncommon",atk:65,def:70,move:"Cliff Charge", habitat:"mountain"},
  {name:"Chamois",scientific:"Rupicapra rupicapra",type:"grass",continent:"Europe",rarity:"common",atk:55,def:50,move:"Mountain Dash", habitat:"mountain"},
  {name:"Roe Deer",scientific:"Capreolus capreolus",type:"grass",continent:"Europe",rarity:"common",atk:50,def:45,move:"Swift Bound", habitat:"forest"},
  {name:"European Hare",scientific:"Lepus europaeus",type:"grass",continent:"Europe",rarity:"common",atk:40,def:30,move:"Rapid Hop", habitat:"grassland"},
  {name:"Mountain Hare",scientific:"Lepus timidus",type:"ice",continent:"Europe",rarity:"uncommon",atk:45,def:40,move:"Snow Dash", habitat:"mountain"},
  {name:"Grey Seal",scientific:"Halichoerus grypus",type:"water",continent:"Europe",rarity:"uncommon",atk:60,def:65,move:"Wave Slam", habitat:"ocean"},
  {name:"Harbour Seal",scientific:"Phoca vitulina",type:"water",continent:"Europe",rarity:"common",atk:55,def:55,move:"Tidal Roll", habitat:"ocean"},
  {name:"Atlantic Puffin",scientific:"Fratercula arctica",type:"flying",continent:"Europe",rarity:"uncommon",atk:40,def:35,move:"Dive Peck", habitat:"ocean"},
  {name:"Common Buzzard",scientific:"Buteo buteo",type:"flying",continent:"Europe",rarity:"common",atk:55,def:45,move:"Sky Swoop", habitat:"grassland"},
  {name:"Golden Eagle",scientific:"Aquila chrysaetos",type:"flying",continent:"Europe",rarity:"rare",atk:80,def:65,move:"Royal Dive", habitat:"mountain"},
  {name:"European Magpie",scientific:"Pica pica",type:"flying",continent:"Europe",rarity:"common",atk:35,def:30,move:"Flash Peck", habitat:"forest"},
  {name:"Common Raven",scientific:"Corvus corax",type:"dark",type2:"flying",continent:"Europe",rarity:"uncommon",atk:60,def:50,move:"Shadow Call", habitat:"forest"},
  {name:"European Mole",scientific:"Talpa europaea",type:"dark",continent:"Europe",rarity:"common",atk:35,def:40,move:"Tunnel Strike", habitat:"forest"},
  {name:"Grass Snake",scientific:"Natrix natrix",type:"poison",continent:"Europe",rarity:"common",atk:45,def:35,move:"Venom Snap", habitat:"wetland"},
  {name:"European Adder",scientific:"Vipera berus",type:"poison",continent:"Europe",rarity:"uncommon",atk:60,def:40,move:"Toxic Bite", habitat:"forest"},
  {name:"Fire Salamander",scientific:"Salamandra salamandra",type:"poison",continent:"Europe",rarity:"uncommon",atk:50,def:45,move:"Poison Blaze", habitat:"forest"},
  {name:"Common Newt",scientific:"Lissotriton vulgaris",type:"water",continent:"Europe",rarity:"common",atk:30,def:25,move:"Ripple Hop", habitat:"wetland"},
  {name:"European Perch",scientific:"Perca fluviatilis",type:"water",continent:"Europe",rarity:"common",atk:40,def:35,move:"Fin Strike", habitat:"freshwater"},
  {name:"Northern Pike",scientific:"Esox lucius",type:"water",continent:"Europe",rarity:"uncommon",atk:70,def:50,move:"Ambush Bite", habitat:"freshwater"},
  {name:"Irish Hare",scientific:"Lepus timidus hibernicus",type:"grass",continent:"Europe",rarity:"common",atk:45,def:35,move:"Bog Dash", habitat:"grassland"},
  {name:"Sika Deer",scientific:"Cervus nippon",type:"grass",continent:"Europe",rarity:"uncommon",atk:60,def:55,move:"Forest Charge", habitat:"forest"},
  {name:"Hooded Crow",scientific:"Corvus cornix",type:"dark",type2:"flying",continent:"Europe",rarity:"common",atk:45,def:40,move:"Shadow Call", habitat:"forest"},
  {name:"European Wasp",scientific:"Vespula vulgaris",type:"bug",continent:"Europe",rarity:"common",atk:35,def:25,move:"Sting Dart", habitat:"forest"},
  {name:"Smooth Newt",scientific:"Lissotriton vulgaris",type:"water",continent:"Europe",rarity:"common",atk:28,def:25,move:"Ripple Hop", habitat:"wetland"},
  {name:"Three-Spined Stickleback",scientific:"Gasterosteus aculeatus",type:"water",continent:"Europe",rarity:"common",atk:30,def:30,move:"Spine Strike", habitat:"freshwater"},
  {name:"Ladybird Beetle",scientific:"Coccinellidae",type:"bug",continent:"Europe",rarity:"common",atk:20,def:30,move:"Lucky Glide", habitat:"forest"},
  {name:"Buff-Tailed Bumblebee",scientific:"Bombus terrestris",type:"bug",continent:"Europe",rarity:"common",atk:35,def:25,move:"Buzz Sting", habitat:"grassland"},
  {name:"European Dragonfly",scientific:"Anisoptera",type:"bug",type2:"flying",continent:"Europe",rarity:"common",atk:35,def:25,move:"Wing Flash", habitat:"wetland"},
  {name:"Stoat",scientific:"Mustela erminea hibernica",type:"dark",continent:"Europe",rarity:"uncommon",atk:50,def:40,move:"Swift Strike", habitat:"forest"},
  {name:"Pygmy Shrew",scientific:"Sorex minutus",type:"grass",continent:"Europe",rarity:"common",atk:20,def:15,move:"Tiny Bite", habitat:"forest"},
  {name:"Garden Spider",scientific:"Araneus diadematus",type:"bug",continent:"Europe",rarity:"common",atk:30,def:35,move:"Web Trap", habitat:"forest"},
  {name:"Wood Ant",scientific:"Formica rufa",type:"bug",continent:"Europe",rarity:"common",atk:25,def:30,move:"Colony Rush", habitat:"forest"},
  {name:"Brown Rat",scientific:"Rattus norvegicus",type:"dark",continent:"Europe",rarity:"common",atk:30,def:25,move:"Gnaw Attack", habitat:"urban"},
  {name:"Wood Mouse",scientific:"Apodemus sylvaticus",type:"grass",continent:"Europe",rarity:"common",atk:25,def:20,move:"Forest Scurry", habitat:"forest"},
  {name:"Mute Swan",scientific:"Cygnus olor",type:"flying",continent:"Europe",rarity:"uncommon",atk:55,def:60,move:"Wing Bash", habitat:"freshwater"},
  {name:"European Glowworm",scientific:"Lampyris noctiluca",type:"bug",continent:"Europe",rarity:"uncommon",atk:20,def:25,move:"Glow Pulse", habitat:"forest"},
  {name:"Mallard Duck",scientific:"Anas platyrhynchos",type:"water",type2:"flying",continent:"Europe",rarity:"common",atk:35,def:35,move:"Splash Peck", habitat:"freshwater"},
  {name:"Grey Heron",scientific:"Ardea cinerea",type:"water",type2:"flying",continent:"Europe",rarity:"uncommon",atk:50,def:45,move:"Spear Strike", habitat:"freshwater"},
  {name:"Blackbird",scientific:"Turdus merula",type:"flying",continent:"Europe",rarity:"common",atk:30,def:25,move:"Dawn Song", habitat:"forest"},
  {name:"Eurasian Beaver",scientific:"Castor fiber",type:"water",continent:"Europe",rarity:"uncommon",atk:55,def:60,move:"Dam Slam", habitat:"freshwater"},
  {name:"Starling",scientific:"Sturnus vulgaris",type:"flying",continent:"Europe",rarity:"common",atk:30,def:25,move:"Flock Burst", habitat:"urban"},
  {name:"Common Gull",scientific:"Larus canus",type:"flying",continent:"Europe",rarity:"common",atk:35,def:30,move:"Coastal Cry", habitat:"ocean"},
  {name:"Razorbill",scientific:"Alca torda",type:"water",type2:"flying",continent:"Europe",rarity:"uncommon",atk:45,def:40,move:"Cliff Dive", habitat:"ocean"},
  {name:"European Wildcat",scientific:"Felis silvestris",type:"dark",continent:"Europe",rarity:"rare",atk:70,def:55,move:"Forest Slash", habitat:"forest"},
  {name:"European Eel",scientific:"Anguilla anguilla",type:"water",continent:"Europe",rarity:"uncommon",atk:50,def:35,move:"River Coil", habitat:"freshwater"},
  {name:"Atlantic Mackerel",scientific:"Scomber scombrus",type:"water",continent:"Europe",rarity:"common",atk:40,def:30,move:"Silver Dash", habitat:"ocean"},
  {name:"Blue Mussel",scientific:"Mytilus edulis",type:"water",continent:"Europe",rarity:"common",atk:10,def:40,move:"Shell Guard", habitat:"ocean"},
  {name:"Common Shore Crab",scientific:"Carcinus maenas",type:"water",continent:"Europe",rarity:"common",atk:30,def:35,move:"Claw Snap", habitat:"ocean"},
  {name:"Red Squirrel",scientific:"Sciurus vulgaris",type:"grass",continent:"Europe",rarity:"rare",atk:45,def:40,move:"Forest Leap", habitat:"forest"},
  {name:"Pine Marten",scientific:"Martes martes",type:"dark",continent:"Europe",rarity:"rare",atk:70,def:55,move:"Tree Ambush", habitat:"forest"},
  {name:"White-Tailed Eagle",scientific:"Haliaeetus albicilla",type:"flying",continent:"Europe",rarity:"rare",atk:85,def:70,move:"Sky Tyrant", habitat:"forest"},
  {name:"Basking Shark",scientific:"Cetorhinus maximus",type:"water",continent:"Europe",rarity:"rare",atk:90,def:85,move:"Ocean Surge", habitat:"ocean"},
  {name:"Electric Eel",scientific:"Electrophorus electricus",type:"electric",type2:"water",continent:"South America",rarity:"rare",atk:85,def:60,move:"Volt Shock", habitat:"freshwater"},
  {name:"Torpedo Ray",scientific:"Torpedo nobiliana",type:"electric",type2:"water",continent:"Europe",rarity:"rare",atk:80,def:70,move:"Shock Wave", habitat:"ocean"},
{name:"Killer Whale",scientific:"Orcinus orca",type:"water",type2:"fire", continent:"Europe",rarity:"rare",atk:95,def:80,move:"Tidal Hunt",habitat:"ocean"},
{name:"Leatherback Sea Turtle",scientific:"Dermochelys coriacea",type:"water",continent:"Europe",rarity:"rare",atk:70,def:90,move:"Deep Current",habitat:"ocean"},
{name:"Manx Shearwater", scientific:"Puffinus puffinus", type:"flying", continent:"Europe", rarity:"uncommon", atk:50, def:45, move:"Ocean Glide", habitat:"ocean"},
{name:"Sand Lizard", scientific:"Lacerta agilis", type:"grass", continent:"Europe", rarity:"rare", atk:45, def:40, move:"Sun Dash", habitat:"desert"},
{name:"Irish Mountain Goat",scientific:"Capra aegagrus hircus",type:"grass",continent:"Europe",rarity:"uncommon",atk:65,def:60,move:"Cliff Charge",habitat:"mountain"},
{name:"Seven-Spot Ladybird",scientific:"Coccinella septempunctata",type:"bug",continent:"Europe",rarity:"common",atk:20,def:25,move:"Lucky Glide",habitat:"forest"},
{name:"Stag Beetle",scientific:"Lucanus cervus",type:"bug",continent:"Europe",rarity:"uncommon",atk:50,def:45,move:"Mandible Clamp",habitat:"forest"}


];

const datalist = document.getElementById("animals");
animals.forEach(a=>{let o=document.createElement("option");o.value=a.name;datalist.appendChild(o);});

let logged = JSON.parse(localStorage.getItem("wilddex_logged")) || [];
let xp = Number(localStorage.getItem("wilddex_xp")) || 0;
let level = Math.floor(xp / 50);
function addXP(rarity){

  const xpTable = {
    common:5,
    uncommon:10,
    rare:25,
    legendary:50
  };

  xp += xpTable[rarity] || 5;
  localStorage.setItem("wilddex_xp",xp);

  updateXPDisplay();
}
function updateWorldMap(){

  const continents = [...new Set(logged.map(a=>a.continent))];

  document.querySelectorAll(".continent-shape")
    .forEach(el => el.classList.remove("discovered"));

  continents.forEach(c => {

    const id = "map-" + c.replace(/\s/g,"").toLowerCase();
    const el = document.getElementById(id);

    if(el) el.classList.add("discovered");

  });

}
function updateXPDisplay(){

  let level = Math.floor(xp / 50);
  let nextLevel = (level+1)*50;

  document.getElementById("xpDisplay").textContent =
    "Level "+level+" Researcher • XP "+xp+" / "+nextLevel;
}

function logAnimal(){
  let name = document.getElementById("animalInput").value.trim();
  let animal = animals.find(a => a.name === name);
  let message = document.getElementById("logMessage");

  if(!animal){
    message.textContent="Animal not found.";
    message.style.color="red";
    return;
  }

  // check using the animal's official name
  if(logged.some(a => a.name === animal.name)){
    message.textContent="You've already logged this animal.";
    message.style.color="orange";
    return;
  }

  logged.push({
  ...animal,
  recordedAt: new Date().toISOString()
});
addXP(animal.rarity);
updateStats();
localStorage.setItem("wilddex_logged", JSON.stringify(logged));

message.textContent="🐾 Animal Discovered!";
message.classList.add("foundAnim");
message.style.color="green";
setTimeout(()=>message.classList.remove("foundAnim"),800);

  document.getElementById("animalInput").value="";
  document.getElementById("animalInput").focus();
document.body.classList.add("discoveryFlash");

setTimeout(()=>{
document.body.classList.remove("discoveryFlash");
},500);
 
  renderCollection();
  updateBadges();
  updateWorldMap();
}
;
function updateStats(){

  const habitats = [...new Set(logged.map(a=>a.habitat).filter(Boolean))];
  const continents = [...new Set(logged.map(a=>a.continent).filter(Boolean))];

  const rareCount = logged.filter(a =>
    a.rarity==="rare" || a.rarity==="legendary"
  ).length;

  const totalEl = document.getElementById("statTotal");
  const rareEl = document.getElementById("statRare");
  const habitatEl = document.getElementById("statHabitats");
  const continentEl = document.getElementById("statContinents");

  if(totalEl) totalEl.textContent = "🐾 Animals Logged: " + logged.length;
  if(rareEl) rareEl.textContent = "💎 Rare Animals: " + rareCount;
  if(habitatEl) habitatEl.textContent = "🌿 Habitats Explored: " + habitats.length;
  if(continentEl) continentEl.textContent = "🌍 Continents Explored: " + continents.length;

// ✅ Explorer map update lives here (has access to `continents`)
  document.querySelectorAll(".continent").forEach(el => el.classList.remove("discovered"));
  continents.forEach(c => {
    const id = "cont-" + c.replace(/\s/g,"").toLowerCase();
    const el = document.getElementById(id);
    if (el) el.classList.add("discovered");
  });
}



const imageCache = {};  
async function getImage(name){
  if(imageCache[name]) return imageCache[name];
  try{
    let url=`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`;
    let res=await fetch(url);
    let data=await res.json();
    let img = data.thumbnail ? data.thumbnail.source : "";
    imageCache[name] = img;
    return img;
  }catch{
    return "";
  }

}

async function renderCollection(){

  const area = document.getElementById("collection");

  // Clear grid immediately
  area.innerHTML = "";

  const search = document.getElementById("searchBox").value.toLowerCase();
  const filter = document.getElementById("filterElement").value;
const habitat = document.getElementById("filterHabitat").value;
   document.body.className="";
if(filter!="all"){
  document.body.classList.add(filter+"Theme");
}
  const animalsToShow = logged.filter(a => {
    if (search && !a.name.toLowerCase().includes(search)) return false;
    if (filter !== "all" && a.type !== filter) return false;
    if (habitat !== "all" && a.habitat !== habitat) return false;
    return true;
  });
 
let stars = ({
  common:"⭐",
  uncommon:"⭐⭐",
  rare:"⭐⭐⭐",
  legendary:"⭐⭐⭐⭐"
}[a.rarity]) || "⭐";
    let img=await getImage(a.name);
    let card=document.createElement("div");
card.onclick=()=>openAnimal(a,img);
    card.className=`card ${a.type} ${a.rarity}`;
    if(a.type2) card.dataset.type2=a.type2;
    card.innerHTML=`
      <div class="rarity">${stars}</div>
      <div class="card-header">
        <span>${a.name}</span>
        
      </div>
      <div class="image-container">
        <img src="${img}" alt="${a.name}">
      </div>
      <div class="card-body">
        <div class="card-overlay"></div>
        <div class="scientific">${a.scientific}</div>
        <div><b>${a.move}</b></div>
        <div class="stats">
          <span>ATK ${a.atk}</span>
          <span>DEF ${a.def}</span>
        </div>
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

function updateBadges() {
  const badgeArea = document.getElementById("badgeArea");
  badgeArea.innerHTML = "";

  const continents = [...new Set(logged.map(a => a.continent))];
  const elements = [...new Set(logged.map(a => a.type))];
  const rareCount = logged.filter(a => a.rarity === "rare" || a.rarity === "legendary").length;
  const dualTypes = logged.filter(a => a.type2).length;
  const legendaryCount = logged.filter(a => a.rarity === "legendary").length;

  const createBadge = (text, title, extraClass="") => {
    const b = document.createElement("div");
    b.className = `badge ${extraClass} animate`;
    b.textContent = text;
    b.title = title;
    badgeArea.appendChild(b);
  };

  // Continent Badges
  if (continents.length >= 5) createBadge("🌏 World Explorer", "Collected animals from 5+ continents!", "badge-world");
  else if (continents.length >= 3) createBadge("🌍 Explorer Badge", `Collected animals from 3+ continents. ${5 - continents.length} more to World Explorer!`, "badge-world");

  // Element Badges
  if (elements.length >= 6) createBadge("⚡ Element Master", "Caught 6+ elements!", "badge-element");
  else if (elements.length >= 3) createBadge("⚡ Elementalist Badge", `Caught 3+ elements. ${6 - elements.length} more to Element Master!`, "badge-element");

  // Logged Animals Count
  if (logged.length >= 10) createBadge("📘 Field Researcher", "Logged 10+ animals!", "badge-research");
  else if (logged.length >= 5) createBadge("📖 Junior Researcher", `Logged 5+ animals. ${10 - logged.length} more to Field Researcher!`, "badge-research");

  // Rare/Legendary Collector
  if (rareCount >= 5) createBadge("💎 Elite Collector", "Collected 5+ rare or legendary animals!", "badge-rare");
  else if (rareCount >= 3) createBadge("💎 Collector Badge", `Collected 3+ rare or legendary animals. ${5 - rareCount} more to Elite Collector!`, "badge-rare");

  // Dual-Type Explorer
  if (dualTypes >= 3) createBadge("🔗 Dual-Type Explorer", "Caught 3+ dual-type animals!");

  // Legendary Hunter
  if (legendaryCount >= 1) createBadge("🌟 Legendary Hunter", `Caught ${legendaryCount} legendary animal(s)!`, "badge-legendary");
}
function openPage(e, id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
  if (e && e.currentTarget) {
    e.currentTarget.classList.add("active");
  }
}
let currentAnimal=null;
function openAnimal(a,img){
  currentAnimal=a;
  document.getElementById("modalName").textContent=a.name;
  document.getElementById("modalImg").src=img;
  document.getElementById("modalScientific").textContent="Scientific: "+a.scientific;
  document.getElementById("modalMove").textContent="Move: "+a.move;
  document.getElementById("modalStats").textContent=`ATK ${a.atk} | DEF ${a.def} | HP ${a.atk+a.def}`;
  document.getElementById("modalType").textContent=`Type: ${a.type}${a.type2?" / "+a.type2:""}`;
  document.getElementById("modalContinent").textContent="Continent: "+a.continent;
document.getElementById("modalHabitat").textContent =
    a.habitat ? "Habitat: " + a.habitat : "Habitat: Unknown";
  // ✅ Add this line
  document.getElementById("modalDate").textContent =
    a.recordedAt ? "Recorded: " + new Date(a.recordedAt).toLocaleString() : "Recorded: Unknown";

  document.getElementById("animalModal").style.display="flex";
}

function closeModal(e){
  if(!e || e.target.id==="animalModal" || e.target.className==="close"){
    document.getElementById("animalModal").style.display="none";
  }
}

function releaseAnimal(){
  if(!currentAnimal) return;

  logged = logged.filter(a => a.name !== currentAnimal.name);
 localStorage.setItem("wilddex_logged", JSON.stringify(logged));
  closeModal();
  renderCollection();
  updateBadges();
  updateStats(); 
}

/* ADD THIS AT THE END */
renderCollection();
updateBadges();
updateStats();
updateXPDisplay();
updateWorldMap();
