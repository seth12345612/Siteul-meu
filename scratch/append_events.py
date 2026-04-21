import os

file_path = r"d:\XAMPP\htdocs\joc financiar\assets\events.js"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# New events for Camin
camin_events = """    ,{
      titlu: "Filtru de apă stricat la bucătărie",
      descriere: "Filtru comun de apă de pe palier s-a defectat și apa are un gust ciudat.",
      optiuni: [
        { text: "Cumpăr apă îmbuteliată pe o lună", bani: -80, fericirePct: 5, lectie: "Sănătatea primează, dar implică un cost de confort." },
        { text: "Fierb apa înainte să o beau", bani: 0, fericirePct: -10, lectie: "Economisești bani, dar pierzi mult timp și te enervezi." }
      ]
    },
    {
      titlu: "Inspecție sanitară inopinată",
      descriere: "Administrația căminului anunță o inspecție la curățenie în 2 ore.",
      optiuni: [
        { text: "Cumpăr urgent soluții și curăț impecabil", bani: -50, fericirePct: -5, lectie: "Curățenia pe ultima sută de metri e stresantă și costă." },
        { text: "Fac o curățenie de mântuială", bani: 0, fericirePct: -15, lectie: "Primești un avertisment și trebuie să cureți mai bine data viitoare." }
      ]
    },
    {
      titlu: "Animal de companie pe ascuns",
      descriere: "Colegul de cameră a adus un pisoi și te roagă să nu zici nimic.",
      optiuni: [
        { text: "Îl acopăr și ajut cu mâncarea", bani: -40, fericirePct: 15, lectie: "Un animal de companie aduce bucurie, dar și responsabilitate financiară." },
        { text: "Îl oblig să-l ducă înapoi", bani: 0, fericirePct: -15, lectie: "Ai evitat o problemă administrativă, dar atmosfera din cameră e stricată." }
      ]
    },
    {
      titlu: "Ofertă cantină studențească",
      descriere: "Cantina universității oferă un abonament redus pentru următoarele 3 săptămâni.",
      optiuni: [
        { text: "Cumpăr abonamentul acum", bani: -150, fericirePct: 10, lectie: "O decizie bună: vei economisi bani pe termen scurt, având mese asigurate." },
        { text: "Prefer să îmi gătesc singur", bani: -50, fericirePct: 0, lectie: "Gătitul poate fi ieftin, dar necesită planificare și timp." }
      ]
    },
    {
      titlu: "Gândaci în cameră",
      descriere: "Ai observat insecte nedorite sub pat și dulapuri.",
      optiuni: [
        { text: "Cumpăr spray și capcane profesioniste", bani: -70, fericirePct: 5, lectie: "Rezolvarea rapidă a unei probleme igienice costă, dar merită liniștea." },
        { text: "Ignor situația și aștept dezinsecția căminului", bani: 0, fericirePct: -20, lectie: "Problema se agravează, afectându-ți grav starea de spirit." }
      ]
    },
    {
      titlu: "Zgomot de bormașină",
      descriere: "Încep renovări la baia comună, chiar înainte de parțiale.",
      optiuni: [
        { text: "Merg la biblioteca universității", bani: -20, fericirePct: 5, lectie: "Biblioteca e gratuită, dar transportul sau cafeaua costă puțin." },
        { text: "Rămân și încerc să mă concentrez", bani: 0, fericirePct: -25, lectie: "Nu poți să înveți și intri în panică pentru examene." }
      ]
    },
    {
      titlu: "Frigiderul comun stricat",
      descriere: "Frigiderul de pe palier s-a defectat și o parte din mâncarea ta s-a stricat.",
      optiuni: [
        { text: "Fac chetă cu vecinii să chemăm un mecanic", bani: -40, fericirePct: 0, lectie: "Costurile comune împarțite te scutesc de o plată întreagă." },
        { text: "Aștept administrația și mănânc în oraș", bani: -100, fericirePct: 5, lectie: "Birocrația căminului durează, iar tu cheltui mai mult mâncând la restaurant." }
      ]
    },
    {
      titlu: "Reducere bilete de tren",
      descriere: "Se vând bilete foarte ieftine pentru un weekend la munte cu colegii de an.",
      optiuni: [
        { text: "Merg și mă distrez", bani: -150, fericirePct: 25, lectie: "Experiențele cu colegii sunt neprețuite în studenție." },
        { text: "Rămân în cămin să fac economii", bani: 0, fericirePct: -10, lectie: "Păstrezi bugetul intact, dar te simți izolat." }
      ]
    },
    {
      titlu: "Răceală în sesiune",
      descriere: "Ai prins un virus puternic și trebuie să stai în pat.",
      optiuni: [
        { text: "Cumpăr medicamente și comand supă", bani: -120, fericirePct: 0, lectie: "Sănătatea trebuie tratată urgent, chiar dacă îți consumă bugetul." },
        { text: "Beau ceai și sper să treacă de la sine", bani: -10, fericirePct: -20, lectie: "Vindecarea durează mult mai mult și pierzi zile prețioase de studiu." }
      ]
    },
    {
      titlu: "Haine la mașina de spălat",
      descriere: "E mereu coadă la mașinile de spălat din cămin.",
      optiuni: [
        { text: "Folosesc o spălătorie privată", bani: -40, fericirePct: 10, lectie: "Timpul salvat și hainele impecabile justifică prețul." },
        { text: "Stau la coadă până târziu în noapte", bani: 0, fericirePct: -15, lectie: "Economisești bani, dar pierzi noaptea și ești obosit a doua zi." }
      ]
    },
    {
      titlu: "Reprezentant de cămin",
      descriere: "Se caută un responsabil de palier. Primești reducere la chirie, dar trebuie să mediezi conflictele.",
      optiuni: [
        { text: "Accept provocarea", bani: 100, fericirePct: -10, lectie: "Ai un mic plus la buget, dar stresul organizatoric e ridicat." },
        { text: "Refuz", bani: 0, fericirePct: 5, lectie: "Timpul tău liber rămâne neafectat." }
      ]
    },
    {
      titlu: "Invitație onomastică",
      descriere: "Un coleg apropiat dă o masă în oraș de ziua lui.",
      optiuni: [
        { text: "Îi cumpăr un cadou frumos și merg", bani: -120, fericirePct: 20, lectie: "Prietenia presupune și efort financiar, dar aduce fericire." },
        { text: "Îl felicit doar prin mesaje și inventez o scuză", bani: 0, fericirePct: -15, lectie: "Colegul e dezamăgit de lipsa ta de implicare." }
      ]
    }"""

chirie_events = """    ,{
      titlu: "Taxă de mentenanță ascunsă",
      descriere: "Administratorul blocului afișează o taxă specială pentru reparația liftului.",
      optiuni: [
        { text: "O plătesc fără discuții", bani: -150, fericirePct: 0, lectie: "Costurile la bloc pot apărea oricând din senin." },
        { text: "Mă cert cu el la asociație", bani: 0, fericirePct: -20, lectie: "Câștigi timp, dar stresul și certurile te epuizează mental." }
      ]
    },
    {
      titlu: "Ofertă de internet superior",
      descriere: "Furnizorul tău îți propune dublarea vitezei la net pentru un cost mic lunar.",
      optiuni: [
        { text: "Accept oferta", bani: -30, fericirePct: 15, lectie: "Un net mai bun ajută și la relaxare și la învățat online." },
        { text: "Păstrez abonamentul vechi", bani: 0, fericirePct: -5, lectie: "Din cauza vitezei slabe, ai probleme la apelurile video." }
      ]
    },
    {
      titlu: "Scurgere la baie",
      descriere: "Țeava de la chiuvetă s-a spart și apa a curs pe podea.",
      optiuni: [
        { text: "Chem un instalator urgent", bani: -200, fericirePct: 5, lectie: "Intervenția rapidă costă, dar previne inundația vecinilor." },
        { text: "Încerc să o repar singur cu bandă", bani: -30, fericirePct: -15, lectie: "Reparația e proastă și stai mereu cu frica să nu cedeze de tot." }
      ]
    },
    {
      titlu: "Control al proprietarului",
      descriere: "Proprietarul vrea să treacă să verifice apartamentul.",
      optiuni: [
        { text: "Fac o curățenie generală amplă", bani: -30, fericirePct: -10, lectie: "Produsele și efortul consumat te obosesc, dar proprietarul e fericit." },
        { text: "Cumpăr câteva gustări și bere pentru el", bani: -40, fericirePct: 10, lectie: "Diplomația funcționează de minune pentru a câștiga încrederea proprietarului." }
      ]
    },
    {
      titlu: "Colegul de apartament amână chiria",
      descriere: "Colegul tău nu are bani luna asta și te roagă să acoperi tu chiria și pentru el o săptămână.",
      optiuni: [
        { text: "Îl împrumut (plătesc eu integral)", bani: -600, fericirePct: -5, lectie: "Ai evitat penalizările de la proprietar, dar bugetul tău a încasat o lovitură." },
        { text: "Refuz și îi spun proprietarului", bani: 0, fericirePct: -25, lectie: "Relația cu colegul este distrusă și atmosfera devine insuportabilă." }
      ]
    },
    {
      titlu: "Zgomot noaptea de la vecini",
      descriere: "Vecinii de deasupra ascultă muzică tare la ora 2 AM.",
      optiuni: [
        { text: "Chem poliția locală", bani: 0, fericirePct: 10, lectie: "Rezolvi problema legal, dar riști antipatii pe viitor." },
        { text: "Îmi pun dopuri în urechi și ignor", bani: -10, fericirePct: -10, lectie: "Calitatea somnului e compromisă." }
      ]
    },
    {
      titlu: "Promoție la mobilă",
      descriere: "Vezi un scaun de birou ergonomic foarte bun la reducere.",
      optiuni: [
        { text: "Îl cumpăr (pentru spate)", bani: -350, fericirePct: 20, lectie: "Sănătatea posturii e foarte importantă dacă studiezi/lucrezi mult la PC." },
        { text: "Rămân pe scaunul de lemn incomod", bani: 0, fericirePct: -15, lectie: "Spatele începe să te doară din ce în ce mai tare." }
      ]
    },
    {
      titlu: "Colegul aduce prieteni",
      descriere: "Colegul de chirie a adus 4 prieteni care stau tot weekendul.",
      optiuni: [
        { text: "Mă închid în cameră și comand mâncare", bani: -60, fericirePct: -5, lectie: "Evitarea conflictului te costă, dar obții liniștea dorită." },
        { text: "Stau cu ei și facem cinste", bani: -100, fericirePct: 20, lectie: "Pierzi bani, dar îți faci prieteni noi și petreci pe cinste." }
      ]
    },
    {
      titlu: "Aerul condiționat defect",
      descriere: "Vara devine insuportabilă și AC-ul nu mai suflă aer rece.",
      optiuni: [
        { text: "Aduc un tehnician", bani: -150, fericirePct: 15, lectie: "Confortul termic face minuni pentru starea ta generală." },
        { text: "Cumpăr doar un ventilator ieftin", bani: -40, fericirePct: -10, lectie: "E mai bine ca nimic, dar tot transpiri abundent." }
      ]
    },
    {
      titlu: "Petrecere în apartament",
      descriere: "Ai oportunitatea să găzduiești o petrecere mare în apartament.",
      optiuni: [
        { text: "Cumpăr provizii și organizez o super seară", bani: -250, fericirePct: 30, lectie: "Toți colegii de facultate te vor respecta și vei avea amintiri grozave." },
        { text: "Renunț, e prea multă bătaie de cap", bani: 0, fericirePct: -5, lectie: "Ai evitat murdăria, dar și ocazia unei seri legendare." }
      ]
    },
    {
      titlu: "Scumpire bruscă a utilităților",
      descriere: "A venit factura la încălzire/gaz mult mai mare decât te așteptai.",
      optiuni: [
        { text: "Plătesc factura și fac economii", bani: -250, fericirePct: -15, lectie: "Traiul independent te lovește în plin iarna." },
        { text: "Folosesc banii de economii destinați vacanței", bani: -250, fericirePct: -10, lectie: "Te-ai salvat temporar, dar planurile de viitor sunt afectate." }
      ]
    },
    {
      titlu: "Renovări în bloc",
      descriere: "Administrația a început să refacă fațada blocului și geamurile.",
      optiuni: [
        { text: "Cumpăr folii speciale împotriva prafului", bani: -50, fericirePct: 5, lectie: "Curățenia este menținută, deși zgomotul persistă." },
        { text: "Ignor situația", bani: 0, fericirePct: -20, lectie: "Praful de afară intră peste tot și te simți mizerabil." }
      ]
    }"""

garsoniera_events = """    ,{
      titlu: "Cumpărături inteligente",
      descriere: "Ai găsit un set de vase și o tigaie foarte bune, dar costă destul.",
      optiuni: [
        { text: "Le cumpăr ca investiție", bani: -250, fericirePct: 15, lectie: "Poți găti mese mai complexe, bucurându-te de viața independentă." },
        { text: "Continui să mănânc semi-preparate", bani: -30, fericirePct: -10, lectie: "Mâncarea la microunde începe să devină o corvoadă tristă." }
      ]
    },
    {
      titlu: "Invazie de furnici",
      descriere: "Ai lăsat vase nespălate și bucătăria s-a umplut de furnici.",
      optiuni: [
        { text: "Cumpăr produse chimice și curăț temeinic", bani: -60, fericirePct: 5, lectie: "O casă curată presupune disciplină." },
        { text: "Dau cu soluții naturale slabe", bani: -10, fericirePct: -15, lectie: "Furnicile continuă să apară, iar asta te stresează maxim." }
      ]
    },
    {
      titlu: "Jobul full-time te epuizează",
      descriere: "Șeful ți-a cerut să stai peste program de două ori săptămâna asta.",
      optiuni: [
        { text: "Accept pentru bonus", bani: 200, fericirePct: -25, lectie: "Banii în plus vin mereu la pachet cu sacrificiul timpului și energiei." },
        { text: "Refuz politicos ca să mă odihnesc", bani: 0, fericirePct: 15, lectie: "Ai ales sănătatea mintală în locul banilor." }
      ]
    },
    {
      titlu: "Mărire la chirie",
      descriere: "Proprietarul îți crește chiria pentru că au crescut impozitele.",
      optiuni: [
        { text: "Accept noua chirie fără scandal", bani: -150, fericirePct: -10, lectie: "Stabilitatea costă suplimentar în piețele imobiliare instabile." },
        { text: "Caut o altă garsonieră (costuri mutare)", bani: -400, fericirePct: -15, lectie: "Mutatul e foarte scump și stresant pe termen scurt." }
      ]
    },
    {
      titlu: "Defecțiune la centrala termică",
      descriere: "Apa caldă nu mai funcționează, centrala afișează o eroare.",
      optiuni: [
        { text: "Chem un tehnician autorizat", bani: -250, fericirePct: 5, lectie: "Reparațiile specializate rezolvă problema pe termen lung." },
        { text: "Fac duș cu apă rece o perioadă", bani: 0, fericirePct: -30, lectie: "Lipsa apei calde distruge orice urmă de confort zilnic." }
      ]
    },
    {
      titlu: "Abonament sală",
      descriere: "Viața de birou și lipsa de mișcare te afectează fizic.",
      optiuni: [
        { text: "Fac un abonament lunar", bani: -150, fericirePct: 20, lectie: "Sportul este cea mai bună investiție în energie și fericire." },
        { text: "Rămân sedentar", bani: 0, fericirePct: -15, lectie: "Oboseala și durerile de spate se acumulează." }
      ]
    },
    {
      titlu: "Comandă pachet premium",
      descriere: "Deoarece câștigi mai bine, vrei să te recompensezi cu un monitor 4K.",
      optiuni: [
        { text: "Îl comand", bani: -1200, fericirePct: 35, lectie: "Te bucuri de munca ta, deși bugetul ia o lovitură masivă." },
        { text: "Abandonez ideea și economisesc", bani: 0, fericirePct: -5, lectie: "Economiile sunt bune, dar ai rămas cu o ușoară frustrare." }
      ]
    },
    {
      titlu: "Prea obosit să gătești",
      descriere: "Vii de la muncă târziu, iar la facultate ai teste a doua zi.",
      optiuni: [
        { text: "Comand mâncare caldă de la restaurant", bani: -70, fericirePct: 15, lectie: "Banii pot cumpăra timp, ceea ce reduce din stres." },
        { text: "Mănânc un sandwich rece", bani: -5, fericirePct: -10, lectie: "Economisești, dar te simți secătuit de puteri." }
      ]
    },
    {
      titlu: "Taxe ascunse la utilități",
      descriere: "Ai primit o factură de regularizare la curent electric pe 6 luni.",
      optiuni: [
        { text: "Plătesc suma mare direct", bani: -350, fericirePct: -20, lectie: "Aceste regularizări te lovesc din plin când stai singur." },
        { text: "Fac rate la furnizor (taxă mică lunară)", bani: -70, fericirePct: -5, lectie: "Eșalonarea datoriilor te ajută să supraviețuiești lunii în curs." }
      ]
    },
    {
      titlu: "Prieten în vizită din alt oraș",
      descriere: "Un vechi prieten vine în oraș și te roagă să-l găzduiești o săptămână.",
      optiuni: [
        { text: "Îl primesc și ne distrăm", bani: -200, fericirePct: 25, lectie: "Revederile cu prietenii îți încarcă complet bateriile sufletești." },
        { text: "Îi spun că am mult de lucru", bani: 0, fericirePct: -10, lectie: "Alegi munca în locul socializării, devenind mai izolat." }
      ]
    },
    {
      titlu: "Singurătatea garsonierei",
      descriere: "Începi să simți monotonia de a locui și lucra singur.",
      optiuni: [
        { text: "Merg la un eveniment de networking", bani: -50, fericirePct: 15, lectie: "Ieșirile active te ajută să scapi de sentimentul de izolare." },
        { text: "Stau acasă pe rețele sociale", bani: 0, fericirePct: -20, lectie: "Izolarea digitală doar înrăutățește singurătatea." }
      ]
    },
    {
      titlu: "Investiție în curățenie",
      descriere: "Nu mai ai energie pentru curățenie generală în weekend.",
      optiuni: [
        { text: "Chem o firmă de curățenie o dată pe lună", bani: -200, fericirePct: 20, lectie: "Serviciile delegate îți oferă un weekend liber prețios." },
        { text: "Mă forțez să curăț tot", bani: -20, fericirePct: -15, lectie: "Rămâi cu bani, dar îți pierzi duminica și energia de odihnă." }
      ]
    }"""

navetist_events = """    ,{
      titlu: "Scumpirea abonamentului de transport",
      descriere: "Compania de transport a scumpit biletele cu 20%.",
      optiuni: [
        { text: "Plătesc noul preț", bani: -80, fericirePct: -5, lectie: "Ești dependent de transport și trebuie să suporți scumpirile." },
        { text: "Caut alternative (ocazii/ride-sharing)", bani: -40, fericirePct: -15, lectie: "Costă mai puțin, dar te expui riscurilor și stresului zilnic." }
      ]
    },
    {
      titlu: "Tren / Autobuz anulat",
      descriere: "S-a anulat cursa chiar în dimineața unui examen important.",
      optiuni: [
        { text: "Iau un taxi/rideshare de urgență", bani: -120, fericirePct: 5, lectie: "Ai rezolvat problema, dar la un cost ridicat." },
        { text: "Întârzii la examen și mă rog de profesor", bani: 0, fericirePct: -25, lectie: "Situația e stânjenitoare și pierzi o parte din punctaj." }
      ]
    },
    {
      titlu: "Eveniment seara cu colegii",
      descriere: "Colegii te cheamă la o petrecere, dar ultimul autobuz pleacă la 22:00.",
      optiuni: [
        { text: "Rămân la petrecere și plătesc taxi scump târziu", bani: -150, fericirePct: 20, lectie: "Viața socială de navetist presupune mereu costuri suplimentare logistice." },
        { text: "Plec devreme acasă", bani: 0, fericirePct: -15, lectie: "Simți mereu că ratezi momentele cele mai frumoase (FOMO)." }
      ]
    },
    {
      titlu: "Vreme extremă",
      descriere: "A nins viscolit și drumul este blocat parțial. Naveta durează dublu.",
      optiuni: [
        { text: "Cumpăr cafea și o carte audio pentru drum", bani: -30, fericirePct: 10, lectie: "Transformi timpul pierdut într-un moment de relaxare." },
        { text: "Stau pe telefon și mă enervez", bani: 0, fericirePct: -20, lectie: "Frustrarea traficului te consumă psihic complet." }
      ]
    },
    {
      titlu: "Părinții cer contribuție",
      descriere: "Părinții ți-au spus că luna aceasta facturile sunt prea mari și trebuie să ajuți mai mult.",
      optiuni: [
        { text: "Contribui cu mai mult din banii mei", bani: -200, fericirePct: -5, lectie: "Ajutându-ți familia eviți tensiunile de acasă." },
        { text: "Le spun că am nevoie de bani pentru facultate", bani: 0, fericirePct: -25, lectie: "Alegi bugetul tău, dar relația de acasă devine foarte încordată." }
      ]
    },
    {
      titlu: "Echipament pentru drum",
      descriere: "Geaca ta de iarnă nu e destul de groasă pentru așteptatul în stație.",
      optiuni: [
        { text: "Cumpăr o geacă tehnică bună", bani: -350, fericirePct: 15, lectie: "Sănătatea și confortul primează în sezonul rece." },
        { text: "Pun 3 pulovere pe mine", bani: 0, fericirePct: -15, lectie: "Ești zgârcit, iar disconfortul frigului zilnic te epuizează." }
      ]
    },
    {
      titlu: "Oportunitate de proiect seara",
      descriere: "Profesorul a făcut o grupă de studiu seara târziu la facultate.",
      optiuni: [
        { text: "Particip și stau peste noapte la un coleg", bani: -50, fericirePct: 15, lectie: "Te implici academic, iar colegialitatea te ajută logistic." },
        { text: "Refuz pentru că am navetă", bani: 0, fericirePct: -10, lectie: "Dezavantajul major al navetistului: pierzi oportunități academice extra." }
      ]
    },
    {
      titlu: "Căști cu Noise Cancelling",
      descriere: "Gălăgia din tren/autobuz nu te lasă să înveți.",
      optiuni: [
        { text: "Cumpăr căști de calitate", bani: -400, fericirePct: 25, lectie: "Transformi 2 ore de gălăgie în 2 ore de focus productiv." },
        { text: "Învăț cu dopuri de urechi ieftine", bani: -20, fericirePct: -5, lectie: "Faci economii, dar zgomotul trenului încă te deranjează." }
      ]
    },
    {
      titlu: "Tensiuni acasă",
      descriere: "Părinții te tratează ca pe un copil de liceu, cerând explicații pentru unde mergi.",
      optiuni: [
        { text: "Stau seara în oraș să scap de ei (bani pe cafele)", bani: -60, fericirePct: 10, lectie: "Ieșirile dese îți mențin independența mentală, dar consumă bani." },
        { text: "Stau acasă și mă cert cu ei", bani: 0, fericirePct: -30, lectie: "Lipsa de intimitate e prețul pe care-l plătești stând acasă gratuit." }
      ]
    },
    {
      titlu: "Mâncare de acasă stricată",
      descriere: "Pachetul pus de mama s-a stricat pentru că ai stat prea mult în căldură.",
      optiuni: [
        { text: "Cumpăr meniul zilei la cantină", bani: -30, fericirePct: 5, lectie: "Masa e salvată, dar costă un pic." },
        { text: "Rămân nemâncat toată ziua", bani: 0, fericirePct: -20, lectie: "Ești flămând și nu te poți concentra la cursuri deloc." }
      ]
    },
    {
      titlu: "Întârziere mare a trenului",
      descriere: "Trenul a rămas oprit în câmp 3 ore.",
      optiuni: [
        { text: "Merg la vagonul restaurant să iau o cafea", bani: -20, fericirePct: 0, lectie: "Un mic răsfăț te ajută să scapi de nervi." },
        { text: "Stau pe scaun, mor de cald și înjur CFR-ul", bani: 0, fericirePct: -20, lectie: "Unele lucruri sunt în afara controlului tău; acceptă-le sau te vei distruge." }
      ]
    },
    {
      titlu: "Cameră de cămin ocazională",
      descriere: "Un prieten îți propune să închiriezi un pat la negru în cămin pentru 2 zile/săptămână.",
      optiuni: [
        { text: "Accept, am un loc al meu în oraș", bani: -200, fericirePct: 25, lectie: "Combini avantajele casei cu independența căminului." },
        { text: "Refuz, mă descurc cu naveta", bani: 0, fericirePct: -10, lectie: "Oboseala navetei zilnice își spune cuvântul tot mai tare." }
      ]
    }"""

# Insert string into matching spots
content = content.replace('],\n  chirie:', camin_events + '\n  ],\n  chirie:')
content = content.replace('],\n  garsoniera:', chirie_events + '\n  ],\n  garsoniera:')
content = content.replace('],\n  navetist:', garsoniera_events + '\n  ],\n  navetist:')
content = content.replace(']\n};', navetist_events + '\n  ]\n};')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Events appended successfully.")
