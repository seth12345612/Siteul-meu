@"
# Script to add 30 events to each scenario

# Read file
`$file = "assets/events.js"
`$content = [System.IO.File]::ReadAllText(`$file, [System.Text.Encoding]::UTF8)

# Replace for garsoniera (add 30 events before  ],`n  navetist)
`$gars_replacement = @'
    },
    {
      titlu: "Promovare senior",
      descriere: "Oferta pentru o pozitie mai inalta la munca.",
      optiuni: [
        { text: "Accept (+500 RON/luna extra)", bani: 500, fericirePct: -20, lectie: "Banii vin cu responsabilitate." },
        { text: "Refuz si raman acolo", bani: 0, fericirePct: 10, lectie: "Status quo." }
      ]
    },
    {
      titlu: "Laptop gaming",
      descriere: "Vrei sa joci jocurile noi.",
      optiuni: [
        { text: "Cumperi Alienware", bani: -3500, fericirePct: 30, lectie: "Gaming e scump." },
        { text: "Raman cu cel vechi", bani: 0, fericirePct: -15, lectie: "Frustrat de performanta." }
      ]
    },
    {
      titlu: "Masa de yoga",
      descriere: "Vrei sa mediti acasa.",
      optiuni: [
        { text: "Cumperi o masa profesionala", bani: -800, fericirePct: 20, lectie: "Wellness acasa." },
        { text: "Folosesc podeaua", bani: 0, fericirePct: -10, lectie: "Disconfort fizic." }
      ]
    },
    {
      titlu: "Curso de certificare",
      descriere: "Vrei sa iei o certificare de specialitate.",
      optiuni: [
        { text: "Platesc cursul online + examen", bani: -1200, fericirePct: 15, lectie: "Investitie in cariera." },
        { text: "Astept angajatorul sa plateasca", bani: 0, fericirePct: -10, lectie: "Risc sa ma antreneze." }
      ]
    },
    {
      titlu: "Delegare munca",
      descriere: "Poti angaja un asistent virtual pentru taskuri.",
      optiuni: [
        { text: "Angajez 10 ore pe saptamana", bani: -300, fericirePct: 20, lectie: "Timp e mai valoros decat bani." },
        { text: "Fac totul singur", bani: 0, fericirePct: -20, lectie: "Burnout aproape." }
      ]
    },
    {
      titlu: "Curs de bucatarie gastro",
      descriere: "Vrei sa inveti sa gatesci ceva fancy.",
      optiuni: [
        { text: "Iau curs cu chef profesionist", bani: -600, fericirePct: 25, lectie: "Skills de viata." },
        { text: "Invat din internet", bani: 0, fericirePct: 5, lectie: "Hit or miss." }
      ]
    },
    {
      titlu: "Sarcina sociala",
      descriere: "Esti invitat sa participi la eveniment corporate.",
      optiuni: [
        { text: "Merg si dau o mana cu organizarea", bani: -100, fericirePct: 15, lectie: "Networking si implicare." },
        { text: "Refuz polites", bani: 0, fericirePct: -10, lectie: "Pierd contact social." }
      ]
    },
    {
      titlu: "Masaj profesional",
      descriere: "Spate ti doare de la birou.",
      optiuni: [
        { text: "Iau 10 sesiuni de masaj", bani: -1000, fericirePct: 20, lectie: "Recuperare fizica." },
        { text: "Incerc pe Youtube", bani: 0, fericirePct: -15, lectie: "Nu e la fel." }
      ]
    },
    {
      titlu: "Coaching personal",
      descriere: "Vrei sa iti atingi obiectivele de fitness.",
      optiuni: [
        { text: "Angajez un coach profesionist", bani: -1500, fericirePct: 25, lectie: "Transformare garantata." },
        { text: "Lucrez singur", bani: 0, fericirePct: -10, lectie: "Lipsa de disciplina." }
      ]
    },
    {
      titlu: "Bilet avion premium",
      descriere: "Trebuie sa calatoresc intr-o directie grea.",
      optiuni: [
        { text: "Iau business class", bani: -2000, fericirePct: 25, lectie: "Confort maxim." },
        { text: "Economy Class", bani: -500, fericirePct: 0, lectie: "Greu dar ieftin." }
      ]
    },
    {
      titlu: "Abonament fitness premium",
      descriere: "Vrei acces la toate clasele de yoga.",
      optiuni: [
        { text: "Platesc unlimited", bani: -600, fericirePct: 25, lectie: "Sănătate e inveestie." },
        { text: "Merg cand pot", bani: -100, fericirePct: -10, lectie: "Inconsistent." }
      ]
    },
    {
      titlu: "Retragere de bani",
      descriere: "ATM taxa taxa oculta.",
      optiuni: [
        { text: "Folosesc ATM banc proprii", bani: 0, fericirePct: 0, lectie: "Smart banking." },
        { text: "Retrag de oriunde", bani: -30, fericirePct: 0, lectie: "Taxe ascunse." }
      ]
    },
    {
      titlu: "Cumpara inchiriaturile",
      descriere: "Ai sansa sa cumperi casa cu credit ipotecar.",
      optiuni: [
        { text: "Aplic pentru credit si cumpar", bani: -2000, fericirePct: 20, lectie: "Investitie pe viitor." },
        { text: "Continui sa inchiriez", bani: 0, fericirePct: -5, lectie: "Flexibilitate dar instabilitate." }
      ]
    },
    {
      titlu: "Interzis - proiect freelance",
      descriere: "Client oferit proiect secundar lucratiu.",
      optiuni: [
        { text: "Accept si lucrez indeauna", bani: 800, fericirePct: -25, lectie: "Bani extra dar oboseala." },
        { text: "Refuz - focus pe job", bani: 0, fericirePct: 10, lectie: "Balans." }
      ]
    },
    {
      titlu: "Investitii bursiere",
      descriere: "Oferta de a investi 5000 in fonduri mutuale.",
      optiuni: [
        { text: "Investesc agresiv (risc inalt)", bani: -5000, fericirePct: 5, lectie: "Riscul poate aduce profit." },
        { text: "Sunt prea conservator", bani: 0, fericirePct: 0, lectie: "Siguranta banca." }
      ]
    },
    {
      titlu: "Oferta de transfer",
      descriere: "Se ofera transfer intr-o sediu mai buna.",
      optiuni: [
        { text: "Accept transfer (risc schimbare)", bani: 300, fericirePct: 5, lectie: "Oportunitate vs siguranta." },
        { text: "Refuz si raman", bani: 0, fericirePct: 10, lectie: "Comfort zone." }
      ]
    },
    {
      titlu: "Asigurare medicala privata",
      descriere: "Companie ofera assigurare medicala privata.",
      optiuni: [
        { text: "Accept beneficiul", bani: 200, fericirePct: 15, lectie: "Sanatate asigurata." },
        { text: "Refuz si tin statu quo", bani: 0, fericirePct: -5, lectie: "Risc de sanatate." }
      ]
    },
    {
      titlu: "Bonus anual",
      descriere: "Ai primit bonus neastetptat de 3000 RON.",
      optiuni: [
        { text: "Investesc in crypto", bani: -3000, fericirePct: 5, lectie: "High risk high reward." },
        { text: "Pun in depozit sigur", bani: 3000, fericirePct: 10, lectie: "Siguranta financiara." }
      ]
    },
    {
      titlu: "Retragere 401k",
      descriere: "Nevoie urgenta de bani.",
      optiuni: [
        { text: "Retrag din pensie (impozit)", bani: -2000, fericirePct: -20, lectie: "Penalizari pe retragere." },
        { text: "Imprumut bancar", bani: -300, fericirePct: -10, lectie: "Dobanzi dar nu pierd pensia." }
      ]
    },
    {
      titlu: "Achizitie birou acasa",
      descriere: "Vrei birou ergonomic pentru WFH.",
      optiuni: [
        { text: "Cumperi birou complet din Italia", bani: -2500, fericirePct: 25, lectie: "Design si functionalitate." },
        { text: "Improvizez cu masa veche", bani: 0, fericirePct: -20, lectie: "Ineficient spatial." }
      ]
    },
    {
      titlu: "Curs de leadership",
      descriere: "Manager propune curs de development.",
      optiuni: [
        { text: "Particip activ la curs", bani: 0, fericirePct: 20, lectie: "Growth professional." },
        { text: "Ignor si continui cum sunt", bani: 0, fericirePct: -10, lectie: "Stagnare." }
      ]
    },
    {
      titlu: "Retragere pentru urgenta",
      descriere: "Apartin bolnav - trebuie bani.",
      optiuni: [
        { text: "Retrag din savings (pierd investitii)", bani: -5000, fericirePct: 0, lectie: "Familie in pericol." },
        { text: "Cer imprumut la banca", bani: 0, fericirePct: -10, lectie: "Debit pe viitor." }
      ]
    },
    {
      titlu: "Promovare si relocare",
      descriere: "Promovare dar trebuie sa ma mut.",
      optiuni: [
        { text: "Accept relocare (costuri +salariu)", bani: -3000, fericirePct: 15, lectie: "Cariera vs stabilitate." },
        { text: "Refuz si raman local", bani: 0, fericirePct: 10, lectie: "Familie si prieteni." }
      ]
    },
    {
      titlu: "Vand masina veche",
      descriere: "Vand masina si cumpar alta mai noua.",
      optiuni: [
        { text: "Cumpar BMW nou", bani: -15000, fericirePct: 25, lectie: "Status si confort." },
        { text: "Cumpar Toyota second-hand", bani: -5000, fericirePct: 10, lectie: "Rational si economic." }
      ]
    },
    {
      titlu: "Investitie in curs online",
      descriere: "Curs expensive dar de value pe skill nou.",
      optiuni: [
        { text: "Cumpar cursul scump", bani: -2000, fericirePct: 20, lectie: "Skil = earning power." },
        { text: "Pun pe lista de asteptare", bani: 0, fericirePct: -10, lectie: "Procrastinare." }
      ]
    },
    {
      titlu: "Haine noi pentru job interview",
      descriere: "Job interview la corporatie mare.",
      optiuni: [
        { text: "Cumperi costum de firma", bani: -600, fericirePct: 15, lectie: "First impression matters." },
        { text: "Port ce am deja", bani: 0, fericirePct: -10, lectie: "Risc de impresie proasta." }
      ]
    },
    {
      titlu: "Plan de pensie privata",
      descriere: "Agent vinde plan penisie privata.",
      optiuni: [
        { text: "Platesc abonament lunar", bani: -200, fericirePct: 10, lectie: "Asigurare viitor." },
        { text: "Conteaza pe stat", bani: 0, fericirePct: -15, lectie: "Risc siguranta pensiei." }
      ]
    },
    {
      titlu: "Carjacking insurance",
      descriere: "Oferta de extended warranty pe masina.",
      optiuni: [
        { text: "Platesc extended warranty", bani: -500, fericirePct: 10, lectie: "Protectie pe termen lung." },
        { text: "Refuz - riscul e mic", bani: 0, fericirePct: -5, lectie: "Riscul se intampla." }
      ]
    }
'@

# Find the closing bracket before navetist and add events
`$lines = `$content.Split("`n")
`$garsonieraStartIdx = -1
`$navetistIdx = -1

# Find indices
for(`$i = 0; `$i -lt `$lines.Count; `$i++) {
    if(`$lines[`$i] -match "garsoniera:") {
        `$garsonieraStartIdx = `$i
    }
    if(`$lines[`$i] -match "navetist:") {
        `$navetistIdx = `$i
        break
    }
}

if(`$garsonieraStartIdx -gt -1 -and `$navetistIdx -gt -1) {
    # Insert before navetist
    `$lines[`$navetistIdx - 2] += "`n`n" + `$gars_replacement
    `$newContent = `$lines -join "`n"
    [System.IO.File]::WriteAllText("assets/events.js", `$newContent, [System.Text.Encoding]::UTF8)
    Write-Host "Events added successfully"
} else {
    Write-Host "Error: Could not find section boundaries"
}
"@ | Out-File -Path "build_events.ps1" -Encoding UTF8
