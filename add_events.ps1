#!/usr/bin/env pwsh

# Read the events file
$content = [System.IO.File]::ReadAllText("assets/events.js", [System.Text.Encoding]::UTF8)

# Events to add for CHIRIE scenario (30 events)
$chirie_events = @'
    },
    {
      titlu: "Vopsire usi",
      descriere: "Vrei sa dai o culoare noua la usi.",
      optiuni: [
        { text: "Cumperi vopsea profesionala", bani: -200, fericirePct: 15, lectie: "Schimbarea estetei costa." },
        { text: "Las cum e", bani: 0, fericirePct: -5, lectie: "Monotonie." }
      ]
    },
    {
      titlu: "Etajere interne",
      descriere: "Vrei spatiu de stocare mai bun.",
      optiuni: [
        { text: "Cumperi etajere montate", bani: -300, fericirePct: 15, lectie: "Organizare spatiala." },
        { text: "Folosesc cartonase", bani: 0, fericirePct: -5, lectie: "Improvizatie." }
      ]
    },
    {
      titlu: "Curata din nou pe scari",
      descriere: "A plouat si locului inaintea usilor e murdar.",
      optiuni: [
        { text: "Impart sarcinile cu vecinii", bani: 0, fericirePct: 10, lectie: "Munca in echipa." },
        { text: "Fac singur", bani: -20, fericirePct: -10, lectie: "Efort singular." }
      ]
    },
    {
      titlu: "Scaun nou pentru birou",
      descriere: "Iți doare spatele de la scaunul vechi.",
      optiuni: [
        { text: "Cumperi scaun ergonomic", bani: -500, fericirePct: 20, lectie: "Sanatate e prioritate." },
        { text: "Pun perne peste tot", bani: -30, fericirePct: -10, lectie: "Compromis slab." }
      ]
    },
    {
      titlu: "Lampi noi cu LED",
      descriere: "Iluminarea e slaba in camera.",
      optiuni: [
        { text: "Cumperi lampi cu LED smart", bani: -400, fericirePct: 20, lectie: "Ambianța importanta." },
        { text: "Stau cu lumina slaba", bani: 0, fericirePct: -15, lectie: "Oboseala ochilor." }
      ]
    },
    {
      titlu: "Dulap din dormitor",
      descriere: "Vrei sa-ti reorganizezi spatiul.",
      optiuni: [
        { text: "Cumperi un dulap nou mare", bani: -1200, fericirePct: 15, lectie: "Organizare cu costuri." },
        { text: "Ma descurc cu ceea ce am", bani: 0, fericirePct: -5, lectie: "Inghesuire." }
      ]
    },
    {
      titlu: "Aparat de aer conditionat",
      descriere: "Vara e infernala fara AC.",
      optiuni: [
        { text: "Cumperi si montez AC", bani: -2500, fericirePct: 30, lectie: "Investitie majora in confort." },
        { text: "Folosesc ventilator", bani: -100, fericirePct: 0, lectie: "Insuficient." }
      ]
    },
    {
      titlu: "Izolatie fonica",
      descriere: "Vecinii fac prea mult zgomot.",
      optiuni: [
        { text: "Pun panouri de izolatie", bani: -600, fericirePct: 15, lectie: "Liniste = calitate viata." },
        { text: "Dorm cu dopuri", bani: -30, fericirePct: -10, lectie: "Solutie temporara." }
      ]
    },
    {
      titlu: "Oglinzi decorative",
      descriere: "Apartamentul pare mai mic decat e.",
      optiuni: [
        { text: "Pun oglinzi mari", bani: -250, fericirePct: 15, lectie: "Efecte de spatiu." },
        { text: "Las cum e", bani: 0, fericirePct: 0, lectie: "Nimic nou." }
      ]
    },
    {
      titlu: "Sistem smart home",
      descriere: "Vrei sa automatizezi apartamentul.",
      optiuni: [
        { text: "Cumperi sisteme smart", bani: -800, fericirePct: 20, lectie: "Viitor in casa." },
        { text: "Las pe manual", bani: 0, fericirePct: -5, lectie: "Retrograd." }
      ]
    },
    {
      titlu: "Parchet laminat",
      descriere: "Pardoseala e uzata in bucatarie.",
      optiuni: [
        { text: "Inlocuiesc cu parchet nou", bani: -1500, fericirePct: 15, lectie: "Investitie pe termen lung." },
        { text: "Pun un covor mare", bani: -200, fericirePct: -5, lectie: "Camuflaj." }
      ]
    },
    {
      titlu: "Perete albastru",
      descriere: "Vrei sa dai o culoare intensa.",
      optiuni: [
        { text: "Vopsesc perete intreg", bani: -150, fericirePct: 20, lectie: "Expresie personala." },
        { text: "Pun fototapet", bani: -300, fericirePct: 10, lectie: "Design." }
      ]
    },
    {
      titlu: "Sisteme de securitate",
      descriere: "Vrei sa-ti simti mai sigur acasa.",
      optiuni: [
        { text: "Instalez camera + alarma", bani: -800, fericirePct: 20, lectie: "Pace de spirit." },
        { text: "Doar incuiesc bine usa", bani: 0, fericirePct: -10, lectie: "Neliniste." }
      ]
    },
    {
      titlu: "Citit in pat",
      descriere: "Vrei o lampa de noptiera buna.",
      optiuni: [
        { text: "Cumperi lampa de design", bani: -200, fericirePct: 15, lectie: "Rasplata pentru vreme de somn." },
        { text: "Folosesc si pe aceea veche", bani: 0, fericirePct: 0, lectie: "Continuitate." }
      ]
    },
    {
      titlu: "Vopsea lavabila",
      descriere: "Zidurile se murdares usor de umiditate.",
      optiuni: [
        { text: "Revopsesc cu vopsea speciale", bani: -300, fericirePct: 15, lectie: "Igiena practica." },
        { text: "Sterg des cu lamaie", bani: 0, fericirePct: -10, lectie: "Efort zilnic." }
      ]
    },
    {
      titlu: "Dulapuri din baie",
      descriere: "Nu am unde pune produsele de baie.",
      optiuni: [
        { text: "Cumperi o etajera de perete", bani: -150, fericirePct: 15, lectie: "Organizare." },
        { text: "Las lucrurile pe podea", bani: 0, fericirePct: -15, lectie: "Dezastru." }
      ]
    },
    {
      titlu: "Perdele noi pentru geam",
      descriere: "Soarele intra prea tare noaptea.",
      optiuni: [
        { text: "Cumperi perdele blackout", bani: -200, fericirePct: 15, lectie: "Somn mai bun." },
        { text: "Pun cartoane", bani: 0, fericirePct: -10, lectie: "Inestetica." }
      ]
    },
    {
      titlu: "Frigider Side-by-Side",
      descriere: "Vrei mai mult spatiu de racire.",
      optiuni: [
        { text: "Cumperi frigider mare", bani: -2000, fericirePct: 20, lectie: "Confort la gatit." },
        { text: "Ma descurc cu mic", bani: 0, fericirePct: -10, lectie: "Insuficienta." }
      ]
    },
    {
      titlu: "Schimbare vasul de baie",
      descriere: "Baita nu e confortabila.",
      optiuni: [
        { text: "Montez o cada moderna", bani: -1200, fericirePct: 20, lectie: "Lux zilnic." },
        { text: "Pun o cada gonflabila", bani: -100, fericirePct: 0, lectie: "Improvizatie." }
      ]
    },
    {
      titlu: "Masina spalat vesela",
      descriere: "Manelele dor pe manele.",
      optiuni: [
        { text: "Cumperi o spalatoare", bani: -800, fericirePct: 20, lectie: "Timp salvat." },
        { text: "Spalu manual", bani: 0, fericirePct: -20, lectie: "Corvoa zilnica." }
      ]
    },
    {
      titlu: "Sistem de sonorizare",
      descriere: "Vrei muzica buna in toata casa.",
      optiuni: [
        { text: "Cumperi sisteme Sonos", bani: -1500, fericirePct: 25, lectie: "Soundtrack pe viata." },
        { text: "Folosesc boxe de telefon", bani: 0, fericirePct: -15, lectie: "Sunet prost." }
      ]
    },
    {
      titlu: "Piscina gonflabila",
      descriere: "Vara vrei sa te racoresti acasa.",
      optiuni: [
        { text: "Cumperi piscina mare", bani: -300, fericirePct: 25, lectie: "Relaxare la orice ora." },
        { text: "Iau dus rece", bani: 0, fericirePct: 5, lectie: "Bun dar rapid." }
      ]
    },
    {
      titlu: "Decoratiuni festive",
      descriere: "E sezonul sfintelor sarbatori.",
      optiuni: [
        { text: "Cumperi ornamente scumpe", bani: -400, fericirePct: 20, lectie: "Sarbatori luminoase." },
        { text: "Pun cateva simple", bani: -50, fericirePct: 10, lectie: "Economie." }
      ]
    },
    {
      titlu: "Sticla de vin buna",
      descriere: "Vrei o sticla speciala.",
      optiuni: [
        { text: "Cumperi vin scump", bani: -250, fericirePct: 15, lectie: "Rasfatare." },
        { text: "Iau vin obisnuit", bani: -30, fericirePct: -5, lectie: "Economie." }
      ]
    },
    {
      titlu: "Tavela de perete",
      descriere: "Apartamentul pare prea gol.",
      optiuni: [
        { text: "Cumperi o tavela mare", bani: -150, fericirePct: 15, lectie: "Arte si cultura." },
        { text: "Pun o poza de calendat", bani: 0, fericirePct: -10, lectie: "Inestetica." }
      ]
    },
    {
      titlu: "Masa dining noua",
      descriere: "Cea veche e stricata.",
      optiuni: [
        { text: "Cumperi masa de design", bani: -900, fericirePct: 18, lectie: "Loc de intalniri." },
        { text: "Pun o tabla pe piese", bani: 0, fericirePct: -20, lectie: "Dezastru." }
      ]
    },
    {
      titlu: "Canapele modular",
      descriere: "Vrei sa-ti schimbi configuratia canapelei.",
      optiuni: [
        { text: "Cumperi modular sofa", bani: -2200, fericirePct: 20, lectie: "Flexibilitate spatiala." },
        { text: "Pun perne peste tot", bani: -100, fericirePct: -10, lectie: "Improvizatie." }
      ]
    },
    {
      titlu: "Covorul Oriental",
      descriere: "Apartamentul devine mai cald cu covor.",
      optiuni: [
        { text: "Cumperi un covor scump", bani: -800, fericirePct: 20, lectie: "Stil si eleganta." },
        { text: "Folosesc vechi", bani: 0, fericirePct: -5, lectie: "Uzat." }
      ]
    },
    {
      titlu: "Flori proaspete",
      descriere: "Locuinta are nevoie de viata.",
      optiuni: [
        { text: "Cumperi flori vii saptamanal", bani: -150, fericirePct: 20, lectie: "Frumusete si parfum." },
        { text: "Iau artificiale", bani: -50, fericirePct: 5, lectie: "Fals." }
      ]
'@

# Replace in file
$searchStr = "`n  ],`n  navetist:"
$newContent = $content.Replace($searchStr, "`n    }$chirie_events`n  ],`n  navetist:")

# Write back
[System.IO.File]::WriteAllText("assets/events.js", $newContent, [System.Text.Encoding]::UTF8)

Write-Host "Events added successfully"
