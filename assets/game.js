// Configurarea scenariilor
const API_URL = window.CONFIG?.API_URL || 'http://localhost:3000';

const scenarii = {
  camin: {
    nume: "Student la cămin",
    descriere:
      "Chirie mică, venituri mici din bursă și ocazional job part-time. Accent pe disciplină la cheltuieli.",
    venitLunar: 900,
    cheltuieliFixe: [
      { nume: "Chirie cămin", suma: 350 },
      { nume: "Internet", suma: 80 },
    ],
  },
  chirie: {
    nume: "Student în chirie",
    descriere:
      "Chirie mai mare, dar venit suplimentar din job part-time. Accent pe echilibru între muncă și timp liber.",
    venitLunar: 2000,
    cheltuieliFixe: [
      { nume: "Chirie apartament", suma: 1200 },
      { nume: "Utilități / internet", suma: 250 },
    ],
  },
  garsoniera: {
    nume: "Student într-o garsonieră cu job full-time",
    descriere:
      "Locuiești singur într-o garsonieră, ai job full-time și cursuri. Venitul este mai mare, dar cheltuielile și oboseala cresc.",
    venitLunar: 4000,
    cheltuieliFixe: [
      { nume: "Chirie garsonieră", suma: 1250 },
      { nume: "Utilități / internet", suma: 300 },
    ],
  },
  navetist: {
    nume: "Student Navetist",
    descriere:
      "Locuiești cu părinții și faci naveta. Nu plătești chirie, dar pierzi timp pe drum și ai mai puțină libertate.",
    venitLunar: 1200,
    cheltuieliFixe: [
      { nume: "Abonament transport", suma: 400 },
      { nume: "Contribuție casă", suma: 200 },
    ],
  },
};

// Configurarea dificultăților
const dificultati = {
  usor: {
    nume: "Dificultate: Ușor",
    baniMultiplier: 1.3,
    fericireMultiplier: 1.3,
  },
  mediu: {
    nume: "Dificultate: Mediu",
    baniMultiplier: 1,
    fericireMultiplier: 1,
  },
  greu: {
    nume: "Dificultate: Greu",
    baniMultiplier: 0.7,
    fericireMultiplier: 0.7,
  },
};

// Configurarea banilor și fericirii de start în funcție de scenariu și dificultate
const startConfig =
  (window.gameConfig && window.gameConfig.startConfig) || {
    camin: {
      usor: { bani: 4000, fericire: 100 },
      mediu: { bani: 2500, fericire: 95 },
      greu: { bani: 2000, fericire: 90 },
    },
    chirie: {
      usor: { bani: 3600, fericire: 95 },
      mediu: { bani: 2900, fericire: 90 },
      greu: { bani: 2400, fericire: 85 },
    },
    garsoniera: {
      usor: { bani: 3000, fericire: 90 },
      mediu: { bani: 2500, fericire: 85 },
      greu: { bani: 2000, fericire: 80 },
    },
  };

// Stare joc
let baniCurenti = 0;
let fericireCurenta = 100;
let saptamanaCurenta = 0;  // Total săptămâni (0 = înainte de start, 1-48 = joc activ)
let lunaCurenta = 0;       // Luna curentă (1-12)
let saptamanaInLuna = 0;   // Săptămâna din luna curentă (1-4)
const saptamaniTotale = 48; // 12 luni * 4 săptămâni
const luniTotale = 12;
let scenariuCurent = null;
let istoricDecizii = [];
let dificultateCurenta = dificultati.mediu;
let evenimentCurent = null;
let evenimenteJoc = []; // Evenimentele alese pentru acest joc
let isEndlessMode = false; // Stare mod endless

// Elemente DOM
const elLuna = document.getElementById("luna-curenta");
const elBaniText = document.getElementById("bani-text");
const elFericireText = document.getElementById("fericire-text");
const elBaniBar = document.getElementById("bani-bar");
const elFericireBar = document.getElementById("fericire-bar");
const elScenarioName = document.getElementById("scenario-name");
const elScenarioDescription = document.getElementById("scenario-description");
const elDifficultyLabel = document.getElementById("difficulty-label");
const elCheltuieliList = document.getElementById("cheltuieli-list");
const elStatusMessage = document.getElementById("status-message");
const btnNextMonth = document.getElementById("btn-next-month");
const btnStopEndless = document.getElementById("btn-stop-endless");
const historyList = document.getElementById("history-list");

// Modal eveniment
const eventModal = document.getElementById("event-modal");
const eventTitle = document.getElementById("event-title");
const eventDescription = document.getElementById("event-description");
const eventEffects = document.getElementById("event-effects");
const eventOptionsContainer = document.getElementById("event-options");

// Verifică dacă containerul de opțiuni există
if (!eventOptionsContainer) {
  console.error("EROARE: Element #event-options nu a fost găsit în HTML!");
} else {
  console.log("OK: Element #event-options găsit corect");
}

// Modal final
const gameoverModal = document.getElementById("gameover-modal");
const gameoverTitle = document.getElementById("gameover-title");
const gameoverReason = document.getElementById("gameover-reason");
const finalBani = document.getElementById("final-bani");
const finalLuni = document.getElementById("final-luni");
const finalHistoryList = document.getElementById("final-history-list");
const usernameInput = document.getElementById("username");
const btnSaveScore = document.getElementById("btn-save-score");
const btnStartEndless = document.getElementById("btn-start-endless");
const saveStatus = document.getElementById("save-status");

const loginRequiredModal = document.getElementById("login-required-modal");
const usernameLabel = gameoverModal ? gameoverModal.querySelector('label.small') : null;

function getScenarioFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const scen = params.get("scenario");
  return scenarii[scen] ? scen : "camin";
}

function getDifficultyFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const diff = params.get("difficulty");
  return dificultati[diff] ? diff : "mediu";
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initGame() {
  const scenKey = getScenarioFromUrl();
  const diffKey = getDifficultyFromUrl();

  scenariuCurent = scenarii[scenKey];
  dificultateCurenta = dificultati[diffKey];

  // Luăm TOATE evenimentele disponibile pentru scenariul curent
  const rawEvents = (window.gameEvents && window.gameEvents[scenKey]) || [];
  
  // Amestecăm toate evenimentele pentru acest joc
  evenimenteJoc = shuffleArray([...rawEvents]);

  const cfgScen = startConfig[scenKey] || startConfig.camin;
  const start = cfgScen[diffKey] || cfgScen.mediu;

  baniCurenti = start.bani;
  fericireCurenta = start.fericire;
  saptamanaCurenta = 0;
  lunaCurenta = 0;
  saptamanaInLuna = 0;
  istoricDecizii = [];

  elScenarioName.textContent = scenariuCurent.nume;
  elScenarioDescription.textContent = scenariuCurent.descriere;
  if (elDifficultyLabel) {
    elDifficultyLabel.textContent = dificultateCurenta.nume;
  }

  elCheltuieliList.innerHTML = "";
  scenariuCurent.cheltuieliFixe.forEach((ch) => {
    const li = document.createElement("li");
    li.textContent = `${ch.nume}: ${ch.suma} RON`;
    elCheltuieliList.appendChild(li);
  });

  historyList.innerHTML = "";
  updateUI();
  elStatusMessage.textContent =
    "Apasă „Avansează la săptămâna următoare” pentru a vedea cum îți influențează deciziile bugetul și energia.";

  // Verificăm dacă utilizatorul este logat (localStorage)
  const username = localStorage.getItem('currentUser');
  const token = localStorage.getItem('token');
  if (username) {
    const saveScoreSection = document.querySelector('.save-score');
    if (saveScoreSection) {
      const label = saveScoreSection.querySelector('label');
      if (label) label.style.display = 'none';
      if (usernameInput) {
        usernameInput.style.display = 'none';
        usernameInput.value = username; // pentru consistență, deși nu se folosește
      }
      const h3 = saveScoreSection.querySelector('h3');
      if (h3) h3.textContent = `Salvează scorul pentru ${username}`;
    }
  }
}

function updateUI() {
  // Calculez luna și săptămâna la care am ajuns
  const lunaDisplay = Math.max(1, Math.ceil(saptamanaCurenta / 4));
  const saptamanaDisplay = saptamanaCurenta === 0 ? 1 : ((saptamanaCurenta - 1) % 4) + 1;
  
  elLuna.textContent = `Săptămâna ${saptamanaDisplay} din Luna ${Math.min(lunaDisplay, luniTotale)} / 12`;
  elBaniText.textContent = `${baniCurenti.toFixed(0)} RON`;
  elFericireText.textContent = `${Math.round(fericireCurenta)}%`;

  const moneyPercent = Math.max(0, Math.min(100, (baniCurenti / 4000) * 100));
  elBaniBar.style.width = `${moneyPercent}%`;

  const happyPercent = Math.max(0, Math.min(100, fericireCurenta));
  elFericireBar.style.width = `${happyPercent}%`;

  if (baniCurenti < 0) {
    elStatusMessage.textContent =
      "Ai intrat pe minus. În următoarea săptămână riști să nu îți mai poți acoperi cheltuielile esențiale.";
  } else if (baniCurenti < 300) {
    elStatusMessage.textContent =
      "Fond de siguranță foarte mic. Încearcă să eviți cheltuielile impulsive.";
  } else if (baniCurenti > 2000) {
    elStatusMessage.textContent =
      "Ai reușit să păstrezi un mic fond de urgență. Poți lua decizii mai relaxat.";
  }
}

function calculeazaImpact(valoare, tip) {
  const diffName = getDifficultyFromUrl();
  let multiplier = 1;

  if (tip === 'bani') {
    if (diffName === 'usor') {
      multiplier = valoare < 0 ? 0.8 : 1.1;
    } else if (diffName === 'greu') {
      multiplier = valoare < 0 ? 1.0 : 0.8;
    }
  } else if (tip === 'fericire') {
    if (diffName === 'usor') {
      multiplier = valoare < 0 ? 0.8 : 1.2;
    } else if (diffName === 'greu') {
      multiplier = valoare < 0 ? 1.0 : 0.8;
    }
  }
  return valoare * multiplier;
}

function aplicaVenitSiCheltuieli() {
  let venitAdjusted = scenariuCurent.venitLunar;
  const diffName = getDifficultyFromUrl();
  if (diffName === 'usor') venitAdjusted *= 1.0;
  if (diffName === 'mediu') venitAdjusted *= 0.9;
  if (diffName === 'greu') venitAdjusted *= 0.8;

  baniCurenti += venitAdjusted;
  
  let totalCheltuieli = 0;
  scenariuCurent.cheltuieliFixe.forEach((ch) => {
    totalCheltuieli += ch.suma;
  });
  baniCurenti -= totalCheltuieli;
}

function afiseazaEveniment(eveniment) {
  console.log("Afișez eveniment:", eveniment);
  
  if (!eveniment) {
    console.error("Eveniment este null/undefined!");
    return;
  }
  
  evenimentCurent = eveniment;
  eventTitle.textContent = eveniment.titlu;
  eventDescription.textContent = eveniment.descriere;

  eventEffects.innerHTML = "";
  eveniment.optiuni.forEach((opt) => {
    const li = document.createElement("li");
    const baniDelta = calculeazaImpact(opt.bani, 'bani');
    const fericireDelta = calculeazaImpact(opt.fericirePct, 'fericire');
    const semnBani = baniDelta >= 0 ? "+" : "";
    const semnFer = fericireDelta >= 0 ? "+" : "";
    li.textContent = `Dacă alegi: bani ${semnBani}${baniDelta.toFixed(0)} RON, fericire ${semnFer}${Math.round(fericireDelta)}%`;
    eventEffects.appendChild(li);
  });

  // Generează dinamic butoane pentru fiecare opțiune
  console.log("Container:", eventOptionsContainer);
  console.log("Opțiuni:", eveniment.optiuni.length);
  
  eventOptionsContainer.innerHTML = "";
  eveniment.optiuni.forEach((opt, index) => {
    const button = document.createElement("button");
    button.textContent = opt.text;
    button.className = index === 0 ? "btn-primary" : "btn-secondary";
    button.addEventListener("click", () => aplicaOptiune(index));
    eventOptionsContainer.appendChild(button);
  });
  
  console.log("Modal state before:", eventModal.classList);
  eventModal.classList.remove("hidden");
  console.log("Modal state after:", eventModal.classList);
}

function aplicaOptiune(indexOptiune) {
  const opt = evenimentCurent.optiuni[indexOptiune];
  const baniDelta = calculeazaImpact(opt.bani, 'bani');
  const fericireDelta = calculeazaImpact(opt.fericirePct, 'fericire');

  baniCurenti += baniDelta;
  fericireCurenta += fericireDelta;

  if (fericireCurenta > 100) fericireCurenta = 100;
  if (fericireCurenta < 0) fericireCurenta = 0;

  const li = document.createElement("li");
  const lunaDisplay = Math.max(1, Math.ceil(saptamanaCurenta / 4));
  const saptamanaDisplay = saptamanaCurenta === 0 ? 1 : ((saptamanaCurenta - 1) % 4) + 1;
  li.textContent = `Luna ${lunaDisplay}, Săptămâna ${saptamanaDisplay}: ${evenimentCurent.titlu} — ai ales „${opt.text}". Lecție: ${opt.lectie}`;
  historyList.appendChild(li);

  istoricDecizii.push({
    luna: lunaDisplay,
    saptamana: saptamanaDisplay,
    titlu: evenimentCurent.titlu,
    alegere: opt.text,
    lectie: opt.lectie,
  });

  eventModal.classList.add("hidden");
  verificaConditiiFinal();
  updateUI();
}

function verificaConditiiFinal() {
  if (baniCurenti < 0) {
    afiseazaEcranFinal("Game Over - Faliment", "Banii au ajuns sub 0.");
    return true;
  }
  if (fericireCurenta <= 0) {
    afiseazaEcranFinal("Game Over - Epuizare", "Fericirea a ajuns la 0.");
    return true;
  }
  if (saptamanaCurenta >= saptamaniTotale && !isEndlessMode) {
    afiseazaEcranFinal(
      "Felicitări! Ai ajuns la finalul celor 12 luni",
      "Ai reușit să supraviețuiești financiar un an întreg. Analizează-ți deciziile și gândește-te ce ai putea îmbunătăți în viața reală."
    );
    return true;
  }
  return false;
}

function afiseazaEcranFinal(titlu, motiv) {
  gameoverTitle.textContent = titlu;
  gameoverReason.textContent = motiv;
  finalBani.textContent = baniCurenti.toFixed(0);
  const lunaFinal = Math.min(Math.max(1, Math.ceil(saptamanaCurenta / 4)), luniTotale);
  finalLuni.textContent = isEndlessMode ? lunaFinal : lunaFinal;

  finalHistoryList.innerHTML = "";
  istoricDecizii.forEach((d) => {
    const li = document.createElement("li");
    li.textContent = `Luna ${d.luna}, Săptămâna ${d.saptamana} - ai ales „${d.alegere}" la „${d.titlu}". Lecție: ${d.lectie}`;
    finalHistoryList.appendChild(li);
  });

  gameoverModal.classList.remove("hidden");
  btnNextMonth.disabled = true;
  
  // Arătăm butonul de endless doar dacă am terminat cele 12 luni cu succes
  if (saptamanaCurenta >= saptamaniTotale && baniCurenti >= 0 && fericireCurenta > 0 && !isEndlessMode) {
    btnStartEndless.classList.remove("hidden");
  } else {
    btnStartEndless.classList.add("hidden");
  }
}

btnStartEndless.addEventListener("click", () => {
  isEndlessMode = true;
  gameoverModal.classList.add("hidden");
  btnNextMonth.disabled = false;
  btnStopEndless.classList.remove("hidden");
  elStatusMessage.textContent = "Mod Endless activat! Continuă să supraviețuiești cât poți.";
  
  // Reîncărcăm lista de evenimente pentru endless (le refolosim pe toate)
  const scenKey = getScenarioFromUrl();
  const rawEvents = (window.gameEvents && window.gameEvents[scenKey]) || [];
  evenimenteJoc = shuffleArray([...rawEvents]);
});

btnStopEndless.addEventListener("click", () => {
  const lunaFinal = Math.max(1, Math.ceil(saptamanaCurenta / 4));
  afiseazaEcranFinal(
    "Joc Oprit - Mod Endless",
    `Ai decis să te oprești după ${lunaFinal} luni. Felicitări pentru parcurs!`
  );
  btnStartEndless.classList.add("hidden"); // Nu mai poți continua după ce ai oprit manual
});

btnNextMonth.addEventListener("click", () => {
  console.log("Buton clickuit! Săptămâna:", saptamanaCurenta);
  if (!isEndlessMode && saptamanaCurenta >= saptamaniTotale) return;

  saptamanaCurenta += 1;
  
  // Calculez luna și săptămâna curentă
  lunaCurenta = Math.max(1, Math.ceil(saptamanaCurenta / 4));
  saptamanaInLuna = saptamanaCurenta === 0 ? 1 : ((saptamanaCurenta - 1) % 4) + 1;
  
  // La sfârșitul fiecărei luni (după 4 săptămâni), aplica venit și cheltuieli
  if (saptamanaCurenta % 4 === 0) {
    aplicaVenitSiCheltuieli();
  }
  
  updateUI();

  if (baniCurenti < 0 || fericireCurenta <= 0) {
    verificaConditiiFinal();
    return;
  }

  // Logică selecție eveniment - reamestecă automat când se termina lista
  let eventToPlay = null;
  
  // Dacă lista de evenimente s-a terminat, o reamestecăm
  if (evenimenteJoc.length === 0) {
    const scenKey = getScenarioFromUrl();
    const rawEvents = (window.gameEvents && window.gameEvents[scenKey]) || [];
    evenimenteJoc = shuffleArray([...rawEvents]);
    console.log("Evenimente reamestecate! Noul total:", evenimenteJoc.length);
  }
  
  // Luăm un eveniment din lista (ultimul din array prin pop)
  eventToPlay = evenimenteJoc.pop();
  
  console.log("Event to play:", eventToPlay);
  console.log("Evenimente rămase în coadă:", evenimenteJoc.length);
  
  if (eventToPlay) {
    // Afișăm evenimentul doar după ce am terminat toate update-urile
    // Un mic delay ajută la evitarea conflictelor de UI
    setTimeout(() => {
      afiseazaEveniment(eventToPlay);
    }, 100);
  } else if (isEndlessMode) {
    // Fallback rar
    console.warn("Niciun eveniment găsit pentru endless, reîncercare...");
  } else {
    console.error("Niciun eveniment pentru săptămâna", saptamanaCurenta, "din totalitate de", evenimenteJoc.length);
  }
});

btnSaveScore.addEventListener("click", async () => {
  const loggedInUser = localStorage.getItem('currentUser');

  const scoreValue = Math.max(0, Math.round(baniCurenti));
  const monthsValue = Math.min(lunaCurenta, luniTotale);

  async function doSaveScore(usernameToUse) {
    if (!usernameToUse) {
      saveStatus.textContent = "Te rugăm să introduci un nume de jucător.";
      return;
    }

    saveStatus.textContent = "Se salvează scorul...";
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_URL}/scores`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({
          username: usernameToUse,
          score: scoreValue,
          months: monthsValue,
        }),
      });

      const data = await response.json();
      if (data.success) {
        saveStatus.textContent = "Scor salvat cu succes! Îl poți vedea în clasament.";
      } else {
        saveStatus.textContent = data.message || "A apărut o eroare la salvare. Încearcă din nou.";
      }
    } catch (e) {
      saveStatus.textContent = "Serverul Node.js nu a răspuns (verifică portul 3000).";
    }
  }

  if (loggedInUser) {
    // Când e logat, salvăm automat cu username-ul din cont (fără input).
    return doSaveScore(loggedInUser);
  }

  // Când nu e logat: memorăm scorul și afișăm modal pentru logare.
  localStorage.setItem(
    "pendingScore",
    JSON.stringify({ score: scoreValue, months: monthsValue })
  );
  if (loginRequiredModal) loginRequiredModal.classList.remove("hidden");

  // Nu salvăm încă până nu alege utilizatorul o acțiune în modal.
});

document.addEventListener("DOMContentLoaded", initGame);

// ---- Modal pentru logare la salvarea scorului ----
let __pendingGuestSaveOnce = false;

window.closeLoginRequiredModal = function () {
  if (loginRequiredModal) loginRequiredModal.classList.add("hidden");
  __pendingGuestSaveOnce = false;
};

window.loginFromGameForScore = function () {
  // pendingScore este deja salvat în localStorage.
  window.location.href = "index.html";
};

window.continueGuestSave = async function () {
  // Utilizatorul vrea să salveze fără cont: permitem inputul și facem salvarea acum.
  if (loginRequiredModal) loginRequiredModal.classList.add("hidden");

  const scoreDataStr = localStorage.getItem("pendingScore");
  let scoreData = null;
  try {
    scoreData = scoreDataStr ? JSON.parse(scoreDataStr) : null;
  } catch {
    scoreData = null;
  }
  if (!scoreData) return;

  const usernameToUse = (usernameInput && usernameInput.value ? usernameInput.value.trim() : "");
  if (!usernameToUse) {
    saveStatus.textContent = "Te rugăm să introduci un nume de jucător pentru modul invitat.";
    return;
  }

  saveStatus.textContent = "Se salvează scorul ca invitat...";
  try {
    const response = await fetch(`${API_URL}/scores`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameToUse,
        score: scoreData.score,
        months: scoreData.months,
      }),
    });
    const data = await response.json();
    if (data.success) {
      saveStatus.textContent = "Scor salvat cu succes! (invitat)";
    } else {
      saveStatus.textContent = data.message || "A apărut o eroare la salvare. Încearcă din nou.";
    }
    localStorage.removeItem("pendingScore");
  } catch (e) {
    saveStatus.textContent = "Serverul Node.js nu a răspuns (verifică portul 3000).";
  }
};