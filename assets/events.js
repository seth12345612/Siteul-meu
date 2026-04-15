window.gameEvents = {
  camin: [
    {
      titlu: "Petrecere în cameră",
      descriere: "Colegii de palier organizează o petrecere chiar la tine în cameră.",
      optiuni: [
        { text: "Mă alătur lor (costă gustări)", bani: -150, fericirePct: 15, lectie: "Socializarea e vitală la cămin, dar costă." },
        { text: "Îi rog să facă liniște", bani: 0, fericirePct: -10, lectie: "Liniștea e rară și prețioasă." },
        { text: "Organizez petrecerea mea în altă parte", bani: -200, fericirePct: 10, lectie: "Flexibilitatea socială salvează relațiile." }
      ]
    },
    {
      titlu: "Taxa de fond a căminului",
      descriere: "Se strâng bani pentru renovarea băilor comune.",
      optiuni: [
        { text: "Contribui", bani: -200, fericirePct: 5, lectie: "Condițiile mai bune costă." },
        { text: "Nu am de unde", bani: 0, fericirePct: -5, lectie: "Refuzul poate atrage priviri urâte." },
        { text: "Contribui mai puțin decât ceilalți", bani: -100, fericirePct: -5, lectie: "Compromisul social salvează bani." }
      ]
    },
    {
      titlu: "Mâncare de acasă",
      descriere: "Ți-au trimis părinții un pachet cu mâncare.",
      optiuni: [
        { text: "O împart cu colegii", bani: 0, fericirePct: 20, lectie: "Dărnicia îți face prieteni." },
        { text: "O păstrez doar pentru mine", bani: 100, fericirePct: 5, lectie: "Economisești bani de mâncare pe o săptămână." },
        { text: "O vând colegilor cu profit mic", bani: 150, fericirePct: 5, lectie: "Micul entrepreneur din tine." }
      ]
    },
    {
      titlu: "Pană de curent",
      descriere: "S-a luat curentul în tot căminul în sesiune.",
      optiuni: [
        { text: "Merg la o cafenea să învăț", bani: -100, fericirePct: 5, lectie: "Mediul contează pentru productivitate." },
        { text: "Învăț la lumina lanternei", bani: 0, fericirePct: -10, lectie: "Adaptabilitatea este cheia supraviețuirii." }
      ]
    },
    {
      titlu: "Colegul sforăie",
      descriere: "Nu te poți odihni deloc noaptea asta.",
      optiuni: [
        { text: "Îmi cumpăr dopuri de urechi bune", bani: -120, fericirePct: 10, lectie: "Investiția în somn merită." },
        { text: "Îl trezesc mereu", bani: 0, fericirePct: -15, lectie: "Conflictele cu colegii sunt obositoare." }
      ]
    },
    {
      titlu: "Taxă refacere an",
      descriere: "Ai picat prea multe examene și trebuie să repeți anul cu taxă.",
      optiuni: [
        { text: "Plătesc taxa", bani: -2500, fericirePct: -20, lectie: "Eșecul academic costă enorm." },
        { text: "Mă las de facultate", bani: 0, fericirePct: -50, lectie: "Renunțarea are un preț psihologic." }
      ]
    },
    {
      titlu: "Ziua de curățenie",
      descriere: "Administratorul verifică curățenia în camere.",
      optiuni: [
        { text: "Cumpăr produse de curățenie", bani: -150, fericirePct: 5, lectie: "Igiena e obligatorie." },
        { text: "Fac curat doar cu apă", bani: 0, fericirePct: -5, lectie: "Efortul fizic poate compensa lipsa banilor." }
      ]
    },
    {
      titlu: "Mașina de spălat stricată",
      descriere: "Spălătoria căminului e închisă.",
      optiuni: [
        { text: "Merg la o spălătorie publică", bani: -100, fericirePct: 5, lectie: "Serviciile externe sunt mai scumpe." },
        { text: "Spăl la mână", bani: 0, fericirePct: -15, lectie: "Timpul pierdut e tot un cost." }
      ]
    },
    {
      titlu: "Internet lent",
      descriere: "Nu poți încărca proiectul pentru facultate.",
      optiuni: [
        { text: "Fac hotspot de pe telefon (date extra)", bani: -150, fericirePct: 5, lectie: "Backup-ul e necesar." },
        { text: "Aștept să își revină", bani: 0, fericirePct: -10, lectie: "Răbdarea e o virtute, dar poate costa note." }
      ]
    },
    {
      titlu: "Concert în campus",
      descriere: "O trupă locală cântă în campus.",
      optiuni: [
        { text: "Merg la concert (bilet modic)", bani: -150, fericirePct: 20, lectie: "Distracția ieftină e avantajul studenției." },
        { text: "Stau în cameră", bani: 0, fericirePct: -5, lectie: "FOMO (Fear of Missing Out) e real." },
        { text: "Organizez vânzarea de mâncare la concert", bani: 200, fericirePct: 15, lectie: "Creativitatea financiară." }
      ]
    },
    {
      titlu: "Frigiderul comun",
      descriere: "Ți-a dispărut iaurtul din frigider.",
      optiuni: [
        { text: "Cumpăr altul și trec peste", bani: -30, fericirePct: -5, lectie: "Bunurile comune sunt riscante." },
        { text: "Negociez ca furatorul să-mi plătească", bani: 50, fericirePct: 5, lectie: "Uneori assertivitatea merită." },
        { text: "Fac scandal pe grup", bani: 0, fericirePct: -10, lectie: "Energia consumată pe certuri nu merită." }
      ]
    },
    {
      titlu: "Cantina e închisă",
      descriere: "Azi nu poți mânca ieftin la cantină.",
      optiuni: [
        { text: "Comand pizza", bani: -120, fericirePct: 15, lectie: "Comoditatea costă mult." },
        { text: "Mănânc pâine cu ceva", bani: -20, fericirePct: -5, lectie: "Supraviețuirea e prioritară." }
      ]
    },
    {
      titlu: "Vânzare de cărți",
      descriere: "Târg de cărți vechi în hol.",
      optiuni: [
        { text: "Cumpăr o carte rară", bani: -200, fericirePct: 15, lectie: "Cultura e o investiție personală." },
        { text: "Doar privesc", bani: 0, fericirePct: 0, lectie: "Nu tot ce îți place trebuie cumpărat." },
        { text: "Vând cărțile mele vechi", bani: 300, fericirePct: 5, lectie: "Acumulările se transformă în bani." }
      ]
    },
    {
      titlu: "Vizită neanunțată",
      descriere: "Un prieten din alt oraș vrea să doarmă la tine.",
      optiuni: [
        { text: "Îl primesc (costuri extra mâncare)", bani: -200, fericirePct: 20, lectie: "Ospitalitatea întărește relațiile." },
        { text: "Îl refuz politicos", bani: 0, fericirePct: -5, lectie: "Limitele personale trebuie respectate." }
      ]
    },
    {
      titlu: "Bilet de autobuz",
      descriere: "Ai uitat să îți reînnoiești abonamentul.",
      optiuni: [
        { text: "Cumpăr bilet (cost întreg)", bani: -20, fericirePct: 0, lectie: "Corectitudinea te scutește de stres." },
        { text: "Merg pe blat", bani: 0, fericirePct: -5, lectie: "Riscul amenzii e mare." }
      ]
    },
    {
      titlu: "Cafeaua de dimineață",
      descriere: "Ai nevoie de energie pentru cursuri.",
      optiuni: [
        { text: "Cafea de specialitate", bani: -50, fericirePct: 10, lectie: "Micile plăceri costă." },
        { text: "Cafea la plic", bani: -5, fericirePct: 5, lectie: "Eficiența înainte de gust." }
      ]
    },
    {
      titlu: "Șosete pierdute",
      descriere: "Mașina de spălat a mâncat șosetele.",
      optiuni: [
        { text: "Cumpăr set nou", bani: -100, fericirePct: 5, lectie: "Cheltuielile banale se adună." },
        { text: "Port desperecheate", bani: 0, fericirePct: -2, lectie: "Nu contează aparențele." }
      ]
    },
    {
      titlu: "Proiect de grup",
      descriere: "Trebuie să printați planșe mari.",
      optiuni: [
        { text: "Plătesc partea mea", bani: -100, fericirePct: 5, lectie: "Munca în echipă implică costuri." },
        { text: "Conving pe altcineva să plătească", bani: 0, fericirePct: -10, lectie: "Profitorii sunt izolați în timp." }
      ]
    },
    {
      titlu: "Gripă sezonieră",
      descriere: "Te simți rău.",
      optiuni: [
        { text: "Medicamente de calitate", bani: -300, fericirePct: 10, lectie: "Sănătatea e prioritară." },
        { text: "Ceai și somn", bani: -20, fericirePct: -5, lectie: "Remediile naturale durează mai mult." }
      ]
    },
    {
      titlu: "Ziua unui coleg",
      descriere: "Se strâng bani de cadou.",
      optiuni: [
        { text: "Contribui", bani: -100, fericirePct: 10, lectie: "Apartenența la grup costă." },
        { text: "Mă scuz", bani: 0, fericirePct: -5, lectie: "Excluderea socială doare." }
      ]
    },
    {
      titlu: "Film la cinema",
      descriere: "Toată gașca merge la film.",
      optiuni: [
        { text: "Merg și eu", bani: -120, fericirePct: 15, lectie: "Experiențele contează." },
        { text: "Mă uit pe laptop", bani: 0, fericirePct: 0, lectie: "Conținutul e același, experiența diferă." },
        { text: "Îi conving să vină la mine", bani: -50, fericirePct: 12, lectie: "Gazda economisește bani." }
      ]
    },
    {
      titlu: "Abonament streaming",
      descriere: "Netflix/Spotify a expirat.",
      optiuni: [
        { text: "Reînnoiesc", bani: -60, fericirePct: 10, lectie: "Divertismentul e un cost fix." },
        { text: "Renunț o lună", bani: 0, fericirePct: -5, lectie: "Pauza digitală poate fi bună." }
      ]
    },
    {
      titlu: "Gustare noaptea",
      descriere: "Ți se face foame la 2 AM.",
      optiuni: [
        { text: "Automatul de pe hol", bani: -30, fericirePct: 5, lectie: "Prețul comodității." },
        { text: "Beau apă și mă culc", bani: 0, fericirePct: -5, lectie: "Autocontrolul e greu." }
      ]
    },
    {
      titlu: "Taxi spre gară",
      descriere: "Ai întârziat și pierzi trenul spre casă.",
      optiuni: [
        { text: "Iau taxi", bani: -150, fericirePct: 5, lectie: "Timpul înseamnă bani." },
        { text: "Aștept următorul tren", bani: 0, fericirePct: -15, lectie: "Lipsa punctualității te costă timp." }
      ]
    },
    {
      titlu: "Cursuri printate",
      descriere: "Ai nevoie de suportul de curs fizic.",
      optiuni: [
        { text: "Xerox", bani: -50, fericirePct: 5, lectie: "Materialele fizice ajută la învățat." },
        { text: "Citesc PDF", bani: 0, fericirePct: -5, lectie: "Ecranul obosește ochii." }
      ]
    },
    {
      titlu: "Donație caritabilă",
      descriere: "Campanie umanitară în campus.",
      optiuni: [
        { text: "Donez", bani: -50, fericirePct: 15, lectie: "Faptele bune te fac fericit." },
        { text: "Trec mai departe", bani: 0, fericirePct: -2, lectie: "Nu poți ajuta mereu." }
      ]
    },
    {
      titlu: "Haine de iarnă noi",
      descriere: "Geaca ta s-a rupt și afară e ger.",
      optiuni: [
        { text: "Cumpăr o geacă bună", bani: -1800, fericirePct: 10, lectie: "Investiția în confort termic e obligatorie." },
        { text: "O cos pe cea veche", bani: -20, fericirePct: -15, lectie: "Înduri frigul pentru economie." }
      ]
    },
    {
      titlu: "Taxă bibliotecă",
      descriere: "Ai returnat o carte cu întârziere.",
      optiuni: [
        { text: "Plătesc amenda", bani: -50, fericirePct: 0, lectie: "Responsabilitatea se învață." },
        { text: "Mă cert cu bibliotecara", bani: 0, fericirePct: -10, lectie: "Nu câștigi nimic cu agresivitate." }
      ]
    },
    {
      titlu: "Gaming PC Upgrade",
      descriere: "Placa video s-a ars și vrei să te joci.",
      optiuni: [
        { text: "Îmi iau placă nouă", bani: -2500, fericirePct: 25, lectie: "Pasiunile sunt scumpe." },
        { text: "Joc Solitaire", bani: 0, fericirePct: -10, lectie: "Sacrifici hobby-ul pentru buget." }
      ]
    },
    {
      titlu: "Cadou pentru părinți",
      descriere: "E ziua mamei.",
      optiuni: [
        { text: "Trimit flori", bani: -200, fericirePct: 20, lectie: "Familia e importantă." },
        { text: "O sun doar", bani: 0, fericirePct: 10, lectie: "Gândul contează cel mai mult." }
      ]
    }
  ],
  chirie: 
  [
    {
      titlu: "Factura la încălzire",
      descriere: "A venit regularizarea la gaze. E imensă.",
      optiuni: [
        { text: "Plătesc tot", bani: -1500, fericirePct: -10, lectie: "Iarna costă scump." },
        { text: "Cer bani de acasă", bani: 0, fericirePct: -20, lectie: "Independența financiară e grea." },
        { text: "Plătesc în rate furnizorului", bani: -200, fericirePct: -5, lectie: "Întârzierea plății costă dobânzi." }
      ]
    },
    {
      titlu: "Proprietarul mărește chiria",
      descriere: "Vrea 200 RON în plus pe lună.",
      optiuni: [
        { text: "Accept", bani: -200, fericirePct: -5, lectie: "Piața imobiliară e dură." },
        { text: "Negociez", bani: -50, fericirePct: 0, lectie: "Negocierea poate salva bani." },
        { text: "Caut apartament nou", bani: -300, fericirePct: -10, lectie: "Schimbarea aduce costuri suplimentare." }
      ]
    },
    {
      titlu: "Vecini gălăgioși",
      descriere: "Vecinii de sus dau petrecere.",
      optiuni: [
        { text: "Chem poliția", bani: 0, fericirePct: -10, lectie: "Conflictele cu vecinii sunt stresante." },
        { text: "Îmi iau căști bune", bani: -300, fericirePct: 5, lectie: "Soluțiile personale sunt mai rapide." },
        { text: "Merg la un hotel pentru noapte", bani: -200, fericirePct: 10, lectie: "Uneori evadarea e cea mai bună opțiune." }
      ]
    },
    {
      titlu: "Inundație de la vecin",
      descriere: "Vecinul a uitat apa deschisă. Totul e distrus.",
      optiuni: [
        { text: "Renovare completă baie", bani: -4000, fericirePct: -20, lectie: "Dezastrele casnice te pot falimenta." },
        { text: "Cârpesc ce pot", bani: -500, fericirePct: -10, lectie: "Trăiești în condiții proaste." },
        { text: "Cer despăgubiri de la vecin", bani: 500, fericirePct: 0, lectie: "Responsabilitatea trebuie asumată." }
      ]
    },
    {
      titlu: "Pat rupt complet",
      descriere: "Patul s-a rupt de tot, dormi pe jos.",
      optiuni: [
        { text: "Cumpăr pat nou și saltea", bani: -3000, fericirePct: 20, lectie: "Somnul bun necesită investiții majore." },
        { text: "Dorm pe o saltea gonflabilă", bani: -200, fericirePct: -15, lectie: "Spatele te va durea zilnic." },
        { text: "Împrumut pat de la prieteni", bani: 0, fericirePct: -5, lectie: "Soluție temporară incomodă." }
      ]
    },
    {
      titlu: "Job extra",
      descriere: "Poți lucra ore suplimentare.",
      optiuni: [
        { text: "Lucrez cu tot efortul (+800 RON)", bani: 800, fericirePct: -15, lectie: "Banii vin cu efort serios." },
        { text: "Mă odihnesc", bani: 0, fericirePct: 10, lectie: "Timpul liber e necesar." },
        { text: "Lucrez doar jumătate (+350 RON)", bani: 350, fericirePct: -5, lectie: "Compromis între bani și timp." }
      ]
    },
    {
      titlu: "Cumpărături mari",
      descriere: "Trebuie să umpli frigiderul și cămara.",
      optiuni: [
        { text: "Supermarket (stoc mare)", bani: -600, fericirePct: 10, lectie: "Cumpărăturile rare și mari sunt eficiente." },
        { text: "Magazinul din colț", bani: -200, fericirePct: 0, lectie: "Comoditatea costă pe termen lung." },
        { text: "Cumpărături online cu livrare", bani: -550, fericirePct: 15, lectie: "Confortul digital salvează timp." }
      ]
    },
    {
      titlu: "Internet picat",
      descriere: "Routerul s-a stricat.",
      optiuni: [
        { text: "Cumpăr unul performant", bani: -500, fericirePct: 10, lectie: "Tehnologia e esențială." },
        { text: "Unul second-hand", bani: -100, fericirePct: 0, lectie: "Riscul produselor vechi." },
        { text: "Folosește hotspot de la telefon", bani: -50, fericirePct: -5, lectie: "Soluție temporară costisitoare." }
      ]
    },
    {
      titlu: "Cheie pierdută",
      descriere: "Nu îți găsești cheile de la apartament.",
      optiuni: [
        { text: "Schimb yala", bani: -400, fericirePct: -5, lectie: "Siguranța costă." },
        { text: "Copie de la coleg", bani: -50, fericirePct: 0, lectie: "E bine să ai backup." },
        { text: "Sparg ușa cu ajutorul pompierilor", bani: -200, fericirePct: -10, lectie: "Urgențele sunt costisitoare." }
      ]
    },
    {
      titlu: "Taxă întreținere bloc",
      descriere: "Se repară acoperișul blocului.",
      optiuni: [
        { text: "Plătesc cota parte", bani: -300, fericirePct: 0, lectie: "Proprietatea comună implică costuri." },
        { text: "Mă cert cu administratorul", bani: 0, fericirePct: -10, lectie: "Datoriile se adună." },
        { text: "Plătesc în rate", bani: -100, fericirePct: -5, lectie: "Întârzierea plății aduce penalizări." }
      ]
    },
    {
      titlu: "Mucegai",
      descriere: "A apărut mucegai într-un colț.",
      optiuni: [
        { text: "Soluție profesională", bani: -200, fericirePct: 5, lectie: "Rezolvă problemele din timp." },
        { text: "Șterg cu o cârpă", bani: 0, fericirePct: -5, lectie: "Soluțiile temporare nu țin." },
        { text: "Instalez dezumidificator", bani: -150, fericirePct: 10, lectie: "Prevenția e mai ieftină decât tratamentul." }
      ]
    },
    {
      titlu: "Frigider stricat",
      descriere: "Mâncarea se strică, frigiderul a murit.",
      optiuni: [
        { text: "Cumpăr frigider nou", bani: -3500, fericirePct: 15, lectie: "Electrocasnicele sunt cheltuieli mari neprevăzute." },
        { text: "Iau unul mic SH", bani: -600, fericirePct: -5, lectie: "Soluție de compromis." },
        { text: "Împrumut frigider de la vecini", bani: 0, fericirePct: -10, lectie: "Dependența de alții e incomodă." }
      ]
    },
    {
      titlu: "Cină romantică",
      descriere: "Vrei să gătești ceva special pentru partener.",
      optiuni: [
        { text: "Ingrediente premium", bani: -300, fericirePct: 20, lectie: "Momentele speciale costă." },
        { text: "Paste simple", bani: -50, fericirePct: 10, lectie: "Gestul contează." },
        { text: "Mergem la restaurant", bani: -400, fericirePct: 25, lectie: "Experiența completă merită." }
      ]
    },
    {
      titlu: "Decorare",
      descriere: "Camera pare goală.",
      optiuni: [
        { text: "Plante și tablouri", bani: -200, fericirePct: 15, lectie: "Mediul influențează starea." },
        { text: "O las așa", bani: 0, fericirePct: -5, lectie: "Minimalism forțat." },
        { text: "Cumpărături second-hand", bani: -50, fericirePct: 10, lectie: "Creativitatea găsește soluții ieftine." }
      ]
    },
    {
      titlu: "Detergent scump",
      descriere: "Hainele nu se spală bine.",
      optiuni: [
        { text: "Marcă premium", bani: -100, fericirePct: 5, lectie: "Calitatea costă." },
        { text: "Cel mai ieftin", bani: -30, fericirePct: -5, lectie: "Uneori ieftin e scump." },
        { text: "Detergent natural DIY", bani: -20, fericirePct: 0, lectie: "Soluții ecologice și ieftine." }
      ]
    },
    {
      titlu: "Taximetristul",
      descriere: "Ai nevoie să ajungi rapid undeva.",
      optiuni: [
        { text: "Uber/Bolt", bani: -80, fericirePct: 5, lectie: "Confort și rapiditate." },
        { text: "Autobuz", bani: -3, fericirePct: -5, lectie: "Economie dar disconfort." },
        { text: "Împrumut mașina de la prieten", bani: 0, fericirePct: 10, lectie: "Relațiile ajută în situații de urgență." }
      ]
    },
    {
      titlu: "Zi de naștere coleg apartament",
      descriere: "Trebuie să luați cadou.",
      optiuni: [
        { text: "Cotizez 100 RON", bani: -100, fericirePct: 10, lectie: "Relațiile bune cu colegii ajută." },
        { text: "Nu am bani", bani: 0, fericirePct: -10, lectie: "Tensiuni în casă." },
        { text: "Fac un cadou handmade", bani: -20, fericirePct: 15, lectie: "Creativitatea înlocuiește banii." }
      ]
    },
    {
      titlu: "Abonament TV",
      descriere: "Vreți cablu TV în apartament.",
      optiuni: [
        { text: "Facem abonament", bani: -60, fericirePct: 10, lectie: "Relaxare acasă." },
        { text: "Doar net", bani: 0, fericirePct: 0, lectie: "Streaming-ul e suficient." },
        { text: "Antenă digitală gratuită", bani: 0, fericirePct: 5, lectie: "Soluții gratuite există." }
      ]
    },
    {
      titlu: "Produse igienă",
      descriere: "S-a terminat totul în baie.",
      optiuni: [
        { text: "Refac stocul", bani: -150, fericirePct: 5, lectie: "Necesități de bază." },
        { text: "Împrumut de la coleg", bani: 0, fericirePct: -5, lectie: "Nu e sustenabil." },
        { text: "Cumpărături în vrac online", bani: -100, fericirePct: 10, lectie: "Planificarea aduce economii." }
      ]
    },
    {
      titlu: "Becuri arse",
      descriere: "S-au ars 3 becuri.",
      optiuni: [
        { text: "LED (economice)", bani: -80, fericirePct: 5, lectie: "Investiție pe termen lung." },
        { text: "Incandescente", bani: -20, fericirePct: 0, lectie: "Consumă mult curent." },
        { text: "Stau la lumina naturală", bani: 0, fericirePct: -10, lectie: "Adaptabilitatea are limite." }
      ]
    },
    {
      titlu: "Gândaci",
      descriere: "Ai văzut un gândac în bucătărie.",
      optiuni: [
        { text: "Dezinsecție pro", bani: -300, fericirePct: 10, lectie: "Sănătatea e vitală." },
        { text: "Spray insecticid", bani: -50, fericirePct: -5, lectie: "S-ar putea să nu fie destul." },
        { text: "Capcane și prevenire", bani: -30, fericirePct: 0, lectie: "Soluții naturale mai ieftine." }
      ]
    },
    {
      titlu: "Vizită proprietar",
      descriere: "Vine proprietarul în inspecție.",
      optiuni: [
        { text: "Fac curățenie lună", bani: -50, fericirePct: -10, lectie: "Efort pentru aparențe." },
        { text: "Îl primesc așa", bani: 0, fericirePct: -5, lectie: "Risc de discuții." },
        { text: "Îmi iau coleg să ajute", bani: -30, fericirePct: 5, lectie: "Munca în echipă ușurează povara." }
      ]
    },
    {
      titlu: "Mâncare comandată",
      descriere: "Nu ai chef să gătești.",
      optiuni: [
        { text: "Glovo/Tazz", bani: -100, fericirePct: 15, lectie: "Luxul costă." },
        { text: "Sandvișuri", bani: -15, fericirePct: -5, lectie: "Economie maximă." },
        { text: "Merg la cantină", bani: -25, fericirePct: 5, lectie: "Soluție echilibrată." }
      ]
    },
    {
      titlu: "Sport acasă",
      descriere: "Vrei să faci mișcare.",
      optiuni: [
        { text: "Greutăți/Saltea", bani: -200, fericirePct: 15, lectie: "Investiție unică." },
        { text: "Flotări pe covor", bani: 0, fericirePct: 5, lectie: "Gratis și eficient." },
        { text: "Alerg în parc", bani: 0, fericirePct: 10, lectie: "Aer curat și socializare." }
      ]
    },
    {
      titlu: "Haine de casă",
      descriere: "Ai nevoie de ceva comod.",
      optiuni: [
        { text: "Pijama nouă", bani: -150, fericirePct: 10, lectie: "Confortul contează." },
        { text: "Tricou vechi", bani: 0, fericirePct: 0, lectie: "Reciclare." },
        { text: "Împrumut de la coleg", bani: 0, fericirePct: 5, lectie: "Relațiile economisesc bani." }
      ]
    },
    {
      titlu: "Trusă medicală",
      descriere: "Te-ai tăiat la deget.",
      optiuni: [
        { text: "Cumpăr trusă completă", bani: -100, fericirePct: 5, lectie: "Siguranță." },
        { text: "Doar un plasture", bani: -5, fericirePct: 0, lectie: "Minimum necesar." },
        { text: "Împrumut de la coleg", bani: 0, fericirePct: -2, lectie: "Dependența de alții." }
      ]
    },
    {
      titlu: "Covor pătat",
      descriere: "Ai vărsat vin pe covor.",
      optiuni: [
        { text: "Curățătorie", bani: -100, fericirePct: 0, lectie: "Greșelile costă." },
        { text: "Frec cu oțet", bani: -10, fericirePct: -5, lectie: "Soluții băbești." },
        { text: "Îl întorc pe partea cealaltă", bani: 0, fericirePct: -10, lectie: "Soluții temporare inestetice." }
      ]
    },
    {
      titlu: "Uscător de rufe",
      descriere: "Nu ai unde usca hainele.",
      optiuni: [
        { text: "Cumpăr uscător pliabil", bani: -150, fericirePct: 5, lectie: "Util." },
        { text: "Pe calorifer/scaune", bani: 0, fericirePct: -10, lectie: "Umezeală în casă." },
        { text: "Dau la spălătorie automată", bani: -50, fericirePct: 10, lectie: "Profesionalismul merită." }
      ]
    },
    {
      titlu: "Petrecere de casă nouă",
      descriere: "Vrei să chemi prietenii.",
      optiuni: [
        { text: "Băutură și mâncare", bani: -400, fericirePct: 25, lectie: "Amintiri frumoase." },
        { text: "Fiecare aduce ceva", bani: -50, fericirePct: 15, lectie: "Sistem BYOB (Bring Your Own Bottle)." },
        { text: "Doar cafea și discuții", bani: -20, fericirePct: 10, lectie: "Calitatea compensează cantitatea." }
      ]
    },
    {
      titlu: "Draperii",
      descriere: "Soarele bate dimineața în ochi.",
      optiuni: [
        { text: "Draperii black-out", bani: -250, fericirePct: 15, lectie: "Somn odihnitor." },
        { text: "Pun o pătură în geam", bani: 0, fericirePct: -5, lectie: "Improvizație inestetică." },
        { text: "Mă mut în cealaltă cameră", bani: 0, fericirePct: 5, lectie: "Flexibilitatea spațială." }
      ]
    }
  ],
  garsoniera: [
    {
      titlu: "Promovare la job",
      descriere: "Șeful îți oferă o poziție mai înaltă, dar cu mai mult stres.",
      optiuni: [
        { text: "Accept (+1000 RON/lună)", bani: 1000, fericirePct: -15, lectie: "Bani semnificativi pentru efort suplimentar." },
        { text: "Refuz și cer bonus în loc", bani: 300, fericirePct: 8, lectie: "Negociare inteligentă aduce compromisuri bune." },
        { text: "Refuz - îmi place echilibrul actual", bani: 0, fericirePct: 15, lectie: "Echilibrul e important pentru pace." }
      ]
    },
    {
      titlu: "Motor calat",
      descriere: "Mașina a cedat complet. Reparația e mai scumpă decât mașina.",
      optiuni: [
        { text: "Repar motorul", bani: -5000, fericirePct: -10, lectie: "Mașina e un pasiv costisitor." },
        { text: "O vând la fier vechi", bani: 200, fericirePct: -20, lectie: "Rămâi pieton, dar scapi de cheltuială." },
        { text: "Cumpăr o bicicletă electrică", bani: -1500, fericirePct: 5, lectie: "Alternativă ecologică și sănătoasă." }
      ]
    },
    {
      titlu: "Oboseală cronică",
      descriere: "Jobul full-time te epuizează.",
      optiuni: [
        { text: "Vitamine și SPA", bani: -400, fericirePct: 20, lectie: "Recuperarea costă." },
        { text: "Dorm tot weekendul", bani: 0, fericirePct: 10, lectie: "Timpul vindecă." },
        { text: "Mă apuc de hobby relaxant", bani: -100, fericirePct: 15, lectie: "Pasiunile energizează." }
      ]
    },
    {
      titlu: "Delivery zilnic",
      descriere: "Nu ai timp să gătești din cauza jobului.",
      optiuni: [
        { text: "Mănânc în oraș zilnic", bani: -800, fericirePct: 10, lectie: "Costuri uriașe de confort." },
        { text: "Gătesc în weekend pentru tot", bani: -250, fericirePct: -10, lectie: "Meal prep salvează bani." },
        { text: "Mănânc la birou/sală de mese", bani: -200, fericirePct: 5, lectie: "Soluție echilibrată pentru angajați." }
      ]
    },
    {
      titlu: "Colegii de muncă",
      descriere: "Te invită la un teambuilding neoficial.",
      optiuni: [
        { text: "Merg (costa)", bani: -250, fericirePct: 15, lectie: "Networking." },
        { text: "Nu merg", bani: 0, fericirePct: -5, lectie: "Risc de izolare profesională." },
        { text: "Merg dar plec devreme", bani: -100, fericirePct: 5, lectie: "Participare fără suprasolicitare." }
      ]
    },
    {
      titlu: "Haine office",
      descriere: "Ai nevoie de cămăși noi pentru birou.",
      optiuni: [
        { text: "Haine de calitate", bani: -600, fericirePct: 15, lectie: "Imaginea contează la job." },
        { text: "Outlet", bani: -150, fericirePct: 5, lectie: "Smart shopping." },
        { text: "Împrumut de la familie", bani: 0, fericirePct: 10, lectie: "Relațiile familiale ajută." }
      ]
    },
    {
      titlu: "Bonus de performanță",
      descriere: "Ai primit un bonus neașteptat (1000 RON).",
      optiuni: [
        { text: "Investesc în acțiuni", bani: -1000, fericirePct: 5, lectie: "Gândește pe termen lung (economic)." },
        { text: "Pun bani deoparte pentru urgențe", bani: 500, fericirePct: 15, lectie: "Siguranța financiară e prioritară - economisită inteligentă." },
        { text: "Îi cheltui pe toți pe divertisment", bani: 0, fericirePct: 25, lectie: "Plăceri imediate versus securitate viitoare." }
      ]
    },
    {
      titlu: "Cafeaua de la birou",
      descriere: "S-a stricat espressorul de la muncă.",
      optiuni: [
        { text: "Cumpăr zilnic de la cafenea", bani: -300, fericirePct: 10, lectie: "Costul 'Latte factor'." },
        { text: "Beau apă", bani: 0, fericirePct: -10, lectie: "Sevraj cofeină." },
        { text: "Aduc termos de acasă", bani: -50, fericirePct: 5, lectie: "Pregătirea aduce economii." }
      ]
    },
    {
      titlu: "Abonament parcare",
      descriere: "Nu găsești loc de parcare la bloc.",
      optiuni: [
        { text: "Plătesc locul", bani: -200, fericirePct: 10, lectie: "Confort mental." },
        { text: "Parchez la 10 minute distanță", bani: 0, fericirePct: -10, lectie: "Efort zilnic." },
        { text: "Vând mașina și folosesc transport public", bani: 1000, fericirePct: -5, lectie: "Schimbare majoră de lifestyle." }
      ]
    },
    {
      titlu: "Sală de fitness premium",
      descriere: "Vrei să mergi la World Class.",
      optiuni: [
        { text: "Abonament full", bani: -400, fericirePct: 15, lectie: "Servicii de top." },
        { text: "Alerg în parc", bani: 0, fericirePct: 5, lectie: "Gratis." },
        { text: "Sală universitară", bani: -50, fericirePct: 10, lectie: "Accesibil și de calitate." }
      ]
    },
    {
      titlu: "Laptop nou",
      descriere: "Vrei un Macbook pentru productivitate.",
      optiuni: [
        { text: "Rate lunare", bani: -500, fericirePct: 20, lectie: "Datoriile lunare se adună." },
        { text: "Rămân cu cel vechi", bani: 0, fericirePct: -5, lectie: "Frustrare tehnologică." },
        { text: "Cumpăr refurbished", bani: -800, fericirePct: 10, lectie: "Calitate la preț mai mic." }
      ]
    },
    {
      titlu: "Curățenie profesională",
      descriere: "Nu ai timp de curățenie.",
      optiuni: [
        { text: "Chem o firmă", bani: -300, fericirePct: 20, lectie: "Cumperi timp liber." },
        { text: "Fac eu sâmbăta", bani: -30, fericirePct: -10, lectie: "Weekend pierdut." },
        { text: "Împart sarcinile cu colegul de apartament", bani: 0, fericirePct: 5, lectie: "Responsabilitatea împărțită." }
      ]
    },
    {
      titlu: "Taxe și impozite",
      descriere: "Impozitul pe mașină și locuință.",
      optiuni: [
        { text: "Plătesc tot", bani: -400, fericirePct: 0, lectie: "Datorie cetățenească." },
        { text: "Amân (penalizări)", bani: 0, fericirePct: -5, lectie: "Datoriile cresc în timp." },
        { text: "Negociez cu autoritățile", bani: -50, fericirePct: 5, lectie: "Uneori poți obține reduceri." }
      ]
    },
    {
      titlu: "Urgență stomatologică",
      descriere: "Ai nevoie de implant dentar urgent.",
      optiuni: [
        { text: "Intervenție rapidă", bani: -4500, fericirePct: 10, lectie: "Sănătatea dinților e extrem de scumpă." },
        { text: "Extracție simplă", bani: -300, fericirePct: -20, lectie: "Soluție ieftină dar ireversibilă." },
        { text: "Tratament la clinică universitară", bani: -800, fericirePct: 0, lectie: "Opțiuni mai accesibile există." }
      ]
    },
    {
      titlu: "Vacanta de vară",
      descriere: "Planifici concediul.",
      optiuni: [
        { text: "Grecia all-inclusive", bani: -3000, fericirePct: 40, lectie: "Merită după atâta muncă." },
        { text: "La țară", bani: -300, fericirePct: 15, lectie: "Relaxare bugetară." },
        { text: "City break în București", bani: -800, fericirePct: 25, lectie: "Explorare locală fără călătorii lungi." }
      ]
    },
    {
      titlu: "Cursuri de calificare",
      descriere: "Vrei să înveți ceva nou pentru job.",
      optiuni: [
        { text: "Curs plătit + devin instructor pe Udemy", bani: 400, fericirePct: 15, lectie: "Investiție cu return financiar." },
        { text: "Curs online pe platformă ieftin", bani: -200, fericirePct: 8, lectie: "Optim între cost și calitate." },
        { text: "Tutoriale YouTube gratuite", bani: 0, fericirePct: 5, lectie: "Autodidact - greu dar gratuit." }
      ]
    },
    {
      titlu: "Cadou nuntă",
      descriere: "Un coleg se însoară.",
      optiuni: [
        { text: "Merg la nuntă", bani: -1500, fericirePct: 15, lectie: "Obligații sociale scumpe." },
        { text: "Nu merg", bani: 0, fericirePct: -5, lectie: "Relații răcite." },
        { text: "Trimit cadou și scuze", bani: -300, fericirePct: 5, lectie: "Respect fără suprasolicitare financiară." }
      ]
    },
    {
      titlu: "Telefon spart",
      descriere: "Ai scăpat telefonul pe jos.",
      optiuni: [
        { text: "Schimb ecranul", bani: -600, fericirePct: 0, lectie: "Accidentele costă." },
        { text: "Stau cu el crăpat", bani: 0, fericirePct: -10, lectie: "Imagine neîngrijită." },
        { text: "Îmi iau telefon refurbished", bani: -800, fericirePct: 10, lectie: "Alternativă mai ieftină." }
      ]
    },
    {
      titlu: "Streaming servicii",
      descriere: "Netflix, HBO, Disney+, YouTube Premium.",
      optiuni: [
        { text: "Le țin pe toate", bani: -200, fericirePct: 15, lectie: "Confort maxim." },
        { text: "Păstrez doar unul", bani: -40, fericirePct: 5, lectie: "Raționalizare." },
        { text: "Fac share cu prietenii", bani: -25, fericirePct: 10, lectie: "Economie prin cooperare." }
      ]
    },
    {
      titlu: "Air Conditioning",
      descriere: "E caniculă.",
      optiuni: [
        { text: "Merg AC non-stop", bani: -400, fericirePct: 15, lectie: "Factura la curent explodează." },
        { text: "Ventilator", bani: -80, fericirePct: 0, lectie: "Compromis." },
        { text: "Ies afară seara și noaptea", bani: 0, fericirePct: 5, lectie: "Adaptare naturală." }
      ]
    },
    {
      titlu: "Telefon flagship nou",
      descriere: "Vrei ultimul model de smartphone.",
      optiuni: [
        { text: "Îl cumpăr cash", bani: -5500, fericirePct: 30, lectie: "Moft tehnologic care îți golește contul." },
        { text: "Rămân cu cel vechi", bani: 0, fericirePct: -5, lectie: "Economie înțeleaptă." },
        { text: "Flagship din anul trecut", bani: -2000, fericirePct: 20, lectie: "Flagship cu preț de mid-range." }
      ]
    },
    {
      titlu: "Restaurant de fițe",
      descriere: "Cină de afaceri.",
      optiuni: [
        { text: "Merg și plătesc", bani: -500, fericirePct: 10, lectie: "Imaginea costă." },
        { text: "Refuz", bani: 0, fericirePct: -5, lectie: "Oportunitate pierdută." },
        { text: "Propun alternative mai ieftine", bani: -150, fericirePct: 5, lectie: "Negocierea poate fi plăcută." }
      ]
    },
    {
      titlu: "Cărți de dezvoltare",
      descriere: "Vrei să citești mai mult.",
      optiuni: [
        { text: "Cumpăr 5 cărți", bani: -300, fericirePct: 10, lectie: "Hrana minții." },
        { text: "Bibliotecă", bani: 0, fericirePct: 5, lectie: "Efort de logistică." },
        { text: "E-books pe kindle", bani: -50, fericirePct: 8, lectie: "Comod și ieftin." }
      ]
    },
    {
      titlu: "Donare sânge",
      descriere: "Campanie la birou.",
      optiuni: [
        { text: "Donez regulat (+50 RON + bonuri)", bani: 150, fericirePct: 15, lectie: "Sănătatea și bonusuri merită." },
        { text: "Donez o dată", bani: 50, fericirePct: 10, lectie: "Orice ajutor conteaza." },
        { text: "Mi-e frică de ace", bani: 0, fericirePct: 0, lectie: "Frica te blochează." }
      ]
    },
    {
      titlu: "Vânzare haine vechi",
      descriere: "Ai făcut curat în dulap.",
      optiuni: [
        { text: "Vând agresiv pe Vinted - 1500 RON", bani: 1500, fericirePct: 10, lectie: "Antreprenoriat serios." },
        { text: "Vând selectiv - 500 RON", bani: 500, fericirePct: 10, lectie: "Compromis între efort și bani." },
        { text: "Le donez unui prieten", bani: 0, fericirePct: 15, lectie: "Dărnicia face fericit." }
      ]
    },
    {
      titlu: "Investiție crypto",
      descriere: "Un coleg îți zice de un coin nou.",
      optiuni: [
        { text: "Bag 1000 RON", bani: -1000, fericirePct: 5, lectie: "Risc maxim (poți pierde tot)." },
        { text: "Nu mă bag", bani: 0, fericirePct: 0, lectie: "Siguranță." },
        { text: "Bag 100 RON", bani: -100, fericirePct: 2, lectie: "Risc calculat." }
      ]
    },
    {
      titlu: "Amendă radar",
      descriere: "Te-a prins radarul.",
      optiuni: [
        { text: "Plătesc în 24h", bani: -500, fericirePct: -10, lectie: "Graba strică treaba." },
        { text: "Contest", bani: -100, fericirePct: -5, lectie: "Avocații costă și ei." },
        { text: "Negociez cu agenția", bani: -250, fericirePct: -8, lectie: "Compromis între costuri." }
      ]
    },
    {
      titlu: "Vin prietenii la meci",
      descriere: "Bere și pizza pentru toți.",
      optiuni: [
        { text: "Fac cinste", bani: -400, fericirePct: 20, lectie: "Generozitate costisitoare." },
        { text: "Împărțim nota", bani: -100, fericirePct: 15, lectie: "Corectitudine." }
      ]
    },
    {
      titlu: "Abonament revistă",
      descriere: "Revistă de specialitate.",
      optiuni: [
        { text: "Abonament anual", bani: -300, fericirePct: 5, lectie: "Informație constantă." },
        { text: "Citesc titlurile online", bani: 0, fericirePct: 0, lectie: "Superficialitate." }
      ]
    },
    {
      titlu: "Cafea vărsată pe laptop",
      descriere: "Accident la birou.",
      optiuni: [
        { text: "Service rapid", bani: -600, fericirePct: -10, lectie: "Neatenția costă." },
        { text: "Îl usuc în orez", bani: 0, fericirePct: -5, lectie: "Soluție incertă." }
      ]
    }
  ],
  navetist: [
    {
      titlu: "Tren întârziat",
      descriere: "Trenul are 60 de minute întârziere și îngheți pe peron.",
      optiuni: [
        { text: "Iau un taxi/Uber", bani: -250, fericirePct: 5, lectie: "Confortul costă." },
        { text: "Aștept în frig", bani: 0, fericirePct: -15, lectie: "Răbdarea e amară." }
      ]
    },
    {
      titlu: "Pachet de la bunici",
      descriere: "Ai primit o sacoșă cu mâncare și zacuscă.",
      optiuni: [
        { text: "Mănânc tot săptămâna asta", bani: +100, fericirePct: 15, lectie: "Economie la mâncare." },
        { text: "Împart cu colegii de facultate", bani: 0, fericirePct: 20, lectie: "Generozitatea aduce prieteni." }
      ]
    },
    {
      titlu: "Abonament expirat",
      descriere: "Ai uitat să îți reînnoiești abonamentul de tren.",
      optiuni: [
        { text: "Plătesc bilet întreg", bani: -50, fericirePct: 0, lectie: "Corectitudinea costă." },
        { text: "Merg pe nașpa", bani: 0, fericirePct: -5, lectie: "Risc de amendă mare." }
      ]
    },
    {
      titlu: "Ajutor la curățenie",
      descriere: "Mama te roagă să o ajuți la curățenia generală sâmbătă.",
      optiuni: [
        { text: "O ajut", bani: 0, fericirePct: 5, lectie: "Armonie în familie." },
        { text: "Plec în oraș", bani: -100, fericirePct: -10, lectie: "Discuții și bani cheltuiți." }
      ]
    },
    {
      titlu: "Accident ușor",
      descriere: "Ai zgâriat mașina părinților în parcare.",
      optiuni: [
        { text: "Plătesc reparația", bani: -2000, fericirePct: -10, lectie: "Greșelile la volan se plătesc scump." },
        { text: "Nu zic nimic", bani: 0, fericirePct: -20, lectie: "Vinovăția te macină." }
      ]
    },
    {
      titlu: "Chef acasă",
      descriere: "Vrei să dai o petrecere, dar ai tăi sunt acasă.",
      optiuni: [
        { text: "Îi conving să plece (le plătesc cinema)", bani: -200, fericirePct: 25, lectie: "Spațiul costă." },
        { text: "Nu mai fac nimic", bani: 0, fericirePct: -10, lectie: "Lipsă de intimitate." }
      ]
    },
    {
      titlu: "Cumpărături casă",
      descriere: "E rândul tău să iei pâine și lapte.",
      optiuni: [
        { text: "Iau și ceva dulce", bani: -80, fericirePct: 5, lectie: "Micile plăceri." },
        { text: "Strictul necesar", bani: -30, fericirePct: 0, lectie: "Datorie." }
      ]
    },
    {
      titlu: "Mâncare la pachet",
      descriere: "Te-ai săturat de sandvișuri de acasă.",
      optiuni: [
        { text: "Shaorma în oraș", bani: -40, fericirePct: 10, lectie: "Gustos dar costisitor." },
        { text: "Mănânc ce am", bani: 0, fericirePct: -5, lectie: "Economie." }
      ]
    },
    {
      titlu: "Seara de film",
      descriere: "Familia vrea să vă uitați la TV împreună.",
      optiuni: [
        { text: "Stau cu ei", bani: 0, fericirePct: 10, lectie: "Timp de calitate." },
        { text: "Stau pe telefon în camera mea", bani: 0, fericirePct: -5, lectie: "Izolare." }
      ]
    },
    {
      titlu: "Reparații prin casă",
      descriere: "S-a stricat gardul.",
      optiuni: [
        { text: "Repar eu", bani: -100, fericirePct: 5, lectie: "Materialele costă, manopera nu." },
        { text: "Chemăm un meșter", bani: -800, fericirePct: 0, lectie: "Scump dar comod." }
      ]
    },
    {
      titlu: "Vecini curioși",
      descriere: "Vecina te întreabă de facultate mereu.",
      optiuni: [
        { text: "Răspund politicos", bani: 0, fericirePct: 0, lectie: "Diplomație." },
        { text: "O ignor", bani: 0, fericirePct: -5, lectie: "Tensiuni în cartier." }
      ]
    },
    {
      titlu: "Internetul de acasă",
      descriere: "Merge prost când ai nevoie pentru proiecte.",
      optiuni: [
        { text: "Upgrade abonament (plătesc eu diferența)", bani: -50, fericirePct: 10, lectie: "Investiție în productivitate." },
        { text: "Mă chinui așa", bani: 0, fericirePct: -10, lectie: "Frustrare." }
      ]
    },
    {
      titlu: "Haine spălate",
      descriere: "Mama ți-a micșorat puloverul preferat.",
      optiuni: [
        { text: "Cumpăr altul", bani: -200, fericirePct: -5, lectie: "Accidente se întâmplă." },
        { text: "Îl port așa", bani: 0, fericirePct: -10, lectie: "Imagine șifonată." }
      ]
    },
    {
      titlu: "Discuții despre viitor",
      descriere: "Părinții te presează cu cariera.",
      optiuni: [
        { text: "Îi ascult", bani: 0, fericirePct: -5, lectie: "Presiune." },
        { text: "Le explic planul meu", bani: 0, fericirePct: 5, lectie: "Comunicare." }
      ]
    },
    {
      titlu: "Fratele mai mic",
      descriere: "Vrea să îl ajuți la teme.",
      optiuni: [
        { text: "Îl ajut", bani: 0, fericirePct: 10, lectie: "Altruism." },
        { text: "Nu am timp", bani: 0, fericirePct: -5, lectie: "Egoism necesar uneori." }
      ]
    },
    {
      titlu: "Facturi utilități",
      descriere: "A venit factura la curent mare.",
      optiuni: [
        { text: "Contribui și eu", bani: -200, fericirePct: 5, lectie: "Responsabilitate." },
        { text: "Nu e treaba mea", bani: 0, fericirePct: -5, lectie: "Parazitare." }
      ]
    },
    {
      titlu: "Musafiri neanunțați",
      descriere: "Au venit rudele de la țară.",
      optiuni: [
        { text: "Stau la masă", bani: 0, fericirePct: 5, lectie: "Familie." },
        { text: "Plec de acasă", bani: -80, fericirePct: -5, lectie: "Fugă costisitoare." }
      ]
    },
    {
      titlu: "Grădinărit",
      descriere: "Trebuie săpată grădina.",
      optiuni: [
        { text: "Pun mâna la treabă", bani: 0, fericirePct: 5, lectie: "Efort fizic gratuit." },
        { text: "Mă dau lovit", bani: 0, fericirePct: -5, lectie: "Minciuna are picioare scurte." }
      ]
    },
    {
      titlu: "Câinele familiei",
      descriere: "Trebuie dus la veterinar.",
      optiuni: [
        { text: "Plătesc eu consultația", bani: -250, fericirePct: 10, lectie: "Iubirea pentru animale." },
        { text: "Să plătească ai mei", bani: 0, fericirePct: -5, lectie: "Indiferență." }
      ]
    },
    {
      titlu: "Renunțare la navetă",
      descriere: "Te gândești să te muți în chirie.",
      optiuni: [
        { text: "Pun bani deoparte pt avans", bani: -500, fericirePct: 5, lectie: "Planificare." },
        { text: "Cheltui tot", bani: 0, fericirePct: 10, lectie: "Trăiești clipa." }
      ]
    },
    {
      titlu: "Laptop gaming necesar",
      descriere: "Laptopul vechi a murit și ai nevoie de putere de procesare.",
      optiuni: [
        { text: "Cumpăr laptop performant", bani: -2500, fericirePct: 20, lectie: "Unelte bune costă mult." },
        { text: "Îl repar pe cel vechi", bani: -400, fericirePct: 0, lectie: "Cârpeală." }
      ]
    },
    {
      titlu: "Nuntă cu dar mare",
      descriere: "Verișoara primară se mărită și e obligatoriu să mergi.",
      optiuni: [
        { text: "Merg și dau darul", bani: -2000, fericirePct: 10, lectie: "Obligațiile de familie sunt scumpe." },
        { text: "Mă îmbolnăvesc subit", bani: 0, fericirePct: -15, lectie: "Rușinea rămâne." }
      ]
    },
    {
      titlu: "Vacanță cu părinții",
      descriere: "Te invită la mare, gratis.",
      optiuni: [
        { text: "Merg", bani: 0, fericirePct: 10, lectie: "Relaxare bugetară." },
        { text: "Refuz, vreau cu prietenii", bani: -800, fericirePct: 20, lectie: "Independența costă." }
      ]
    },
    {
      titlu: "Job în oraș",
      descriere: "Ai găsit ceva part-time, dar pierzi ultimul tren.",
      optiuni: [
        { text: "Accept (dorm la un prieten)", bani: +500, fericirePct: -10, lectie: "Sacrificiu." },
        { text: "Refuz", bani: 0, fericirePct: 0, lectie: "Confort." }
      ]
    },
    {
      titlu: "Cafea de acasă",
      descriere: "Îți faci cafea la termos.",
      optiuni: [
        { text: "Beau din termos", bani: +100, fericirePct: 5, lectie: "Economie zilnică." },
        { text: "Iau de la automat", bani: -50, fericirePct: 5, lectie: "Comoditate." }
      ]
    },
    {
      titlu: "Pierdut trenul",
      descriere: "Ai întârziat la gară.",
      optiuni: [
        { text: "Iau ocazia", bani: -50, fericirePct: -5, lectie: "Risc." },
        { text: "Aștept următorul (3 ore)", bani: 0, fericirePct: -15, lectie: "Timp pierdut." }
      ]
    },
    {
      titlu: "Citit pe drum",
      descriere: "Ai 2 ore pe zi în tren.",
      optiuni: [
        { text: "Învăț pentru examen", bani: 0, fericirePct: 5, lectie: "Eficiență." },
        { text: "Dorm", bani: 0, fericirePct: 5, lectie: "Odihnă." }
      ]
    },
    {
      titlu: "Muzică în căști",
      descriere: "S-au stricat căștile.",
      optiuni: [
        { text: "Iau unele scumpe", bani: -300, fericirePct: 15, lectie: "Calitate audio." },
        { text: "Chinezării", bani: -50, fericirePct: 0, lectie: "Soluție temporară." }
      ]
    },
    {
      titlu: "Sandvișuri de drum",
      descriere: "Ți-e foame în tren.",
      optiuni: [
        { text: "Am pachet de acasă", bani: 0, fericirePct: 5, lectie: "Prevăzător." },
        { text: "Cumpăr chipsuri", bani: -20, fericirePct: 5, lectie: "Scump și nesănătos." }
      ]
    },
    {
      titlu: "Investiție proastă",
      descriere: "Ai încercat să investești economiile și ai pierdut.",
      optiuni: [
        { text: "Accept pierderea", bani: -2000, fericirePct: -20, lectie: "Riscul investițional e real." },
        { text: "Mă panichez", bani: 0, fericirePct: -30, lectie: "Stresul financiar afectează sănătatea." }
      ]
    }
  ],
  erasmus: [
    {
      titlu: "Întârziere bursă",
      descriere: "Banii de bursă intră cu 2 săptămâni întârziere.",
      optiuni: [
        { text: "Mă împrumut la colegi", bani: 0, fericirePct: -10, lectie: "Situație jenantă." },
        { text: "Mănânc doar orez", bani: -100, fericirePct: -20, lectie: "Supraviețuire." }
      ]
    },
    {
      titlu: "Party internațional",
      descriere: "Toți studenții ies în club.",
      optiuni: [
        { text: "Merg și eu (intrare+băutură)", bani: -200, fericirePct: 20, lectie: "Socializare." },
        { text: "Stau în cămin", bani: 0, fericirePct: -15, lectie: "Izolare." }
      ]
    },
    {
      titlu: "Excursie în țara vecină",
      descriere: "Se organizează un trip de weekend.",
      optiuni: [
        { text: "Merg (cost transport)", bani: -800, fericirePct: 25, lectie: "Amintiri unice." },
        { text: "Prea scump", bani: 0, fericirePct: -10, lectie: "Oportunitate ratată." }
      ]
    },
    {
      titlu: "Curs de limbă",
      descriere: "Vrei să înveți limba locală.",
      optiuni: [
        { text: "Curs intensiv plătit", bani: -500, fericirePct: 10, lectie: "Investiție în tine." },
        { text: "Duolingo", bani: 0, fericirePct: 5, lectie: "Gratis dar lent." }
      ]
    },
    {
      titlu: "Chirie scumpă",
      descriere: "Proprietarul cere o garanție extra.",
      optiuni: [
        { text: "Plătesc", bani: -1500, fericirePct: -10, lectie: "Piața imobiliară e dură." },
        { text: "Caut altceva", bani: -200, fericirePct: -5, lectie: "Stresul mutării." }
      ]
    },
    {
      titlu: "Mâncare tradițională",
      descriere: "Vrei să guști specialitățile locale.",
      optiuni: [
        { text: "Restaurant", bani: -250, fericirePct: 15, lectie: "Experiență culinară." },
        { text: "Supermarket", bani: -80, fericirePct: 5, lectie: "Compromis." }
      ]
    },
    {
      titlu: "Vizită prieteni",
      descriere: "Vin prieteni din țară la tine.",
      optiuni: [
        { text: "Îi cazez (consum extra)", bani: -200, fericirePct: 20, lectie: "Ospitalitate." },
        { text: "Îi trimit la hostel", bani: 0, fericirePct: -5, lectie: "Distanțare." }
      ]
    },
    {
      titlu: "Zboruri anulate",
      descriere: "Trebuie să ajungi acasă urgent și zborul tău s-a anulat. Iei altul pe loc.",
      optiuni: [
        { text: "Cumpăr bilet nou", bani: -6000, fericirePct: -10, lectie: "Urgențele de transport sunt extrem de scumpe." },
        { text: "Aștept 2 zile în aeroport", bani: -300, fericirePct: -30, lectie: "Timpul și confortul pierdut." }
      ]
    },
    {
      titlu: "Spitalizare neacoperită",
      descriere: "Ai ajuns la spital și asigurarea nu acoperă tot.",
      optiuni: [
        { text: "Plătesc spitalizarea", bani: -8000, fericirePct: -20, lectie: "Sistemele medicale diferă mult între țări." },
        { text: "Mă împrumut la consulat", bani: 0, fericirePct: -15, lectie: "Birocrație extremă." }
      ]
    },
    {
      titlu: "Pierdut acte",
      descriere: "Ți-ai pierdut buletinul.",
      optiuni: [
        { text: "Drum la ambasadă (taxe)", bani: -300, fericirePct: -15, lectie: "Neatenția costă timp și bani." },
        { text: "Stau fără (risc)", bani: 0, fericirePct: -5, lectie: "Periculos." }
      ]
    },
    {
      titlu: "Bicicletă SH",
      descriere: "Transportul e scump, vrei bicicletă.",
      optiuni: [
        { text: "Cumpăr bicicletă", bani: -500, fericirePct: 10, lectie: "Investiție amortizată." },
        { text: "Merg pe jos", bani: 0, fericirePct: -5, lectie: "Obositor." }
      ]
    },
    {
      titlu: "Haine groase",
      descriere: "E mai frig decât credeai.",
      optiuni: [
        { text: "Geacă tehnică", bani: -600, fericirePct: 10, lectie: "Confort termic." },
        { text: "Multe straturi", bani: 0, fericirePct: -10, lectie: "Disconfort." }
      ]
    },
    {
      titlu: "Taxă club",
      descriere: "Intrarea la evenimentul ESN.",
      optiuni: [
        { text: "Plătesc", bani: -80, fericirePct: 15, lectie: "Distracție." },
        { text: "Nu merg", bani: 0, fericirePct: -5, lectie: "FOMO." }
      ]
    },
    {
      titlu: "Suveniruri",
      descriere: "Vrei să iei cadouri pentru acasă.",
      optiuni: [
        { text: "Cumpăr magneți și dulciuri", bani: -300, fericirePct: 15, lectie: "Atenție." },
        { text: "Doar poze", bani: 0, fericirePct: 5, lectie: "Gândul contează." }
      ]
    },
    {
      titlu: "Muzee gratis",
      descriere: "E ziua porților deschise.",
      optiuni: [
        { text: "Vizitez tot", bani: 0, fericirePct: 15, lectie: "Cultură gratuită." },
        { text: "Dorm", bani: 0, fericirePct: 5, lectie: "Odihnă." }
      ]
    },
    {
      titlu: "Bilet avion scump",
      descriere: "Vrei să vii acasă de sărbători.",
      optiuni: [
        { text: "Iau biletul acum", bani: -2000, fericirePct: 20, lectie: "Prețul dorului." },
        { text: "Rămân aici", bani: -300, fericirePct: -20, lectie: "Sărbători singur." }
      ]
    },
    {
      titlu: "Colegi de apartament",
      descriere: "Nu fac curățenie.",
      optiuni: [
        { text: "Angajăm pe cineva", bani: -100, fericirePct: 10, lectie: "Soluție scumpă." },
        { text: "Fac eu scandal", bani: 0, fericirePct: -10, lectie: "Tensiuni." }
      ]
    },
    {
      titlu: "Abonament telefon",
      descriere: "Ai nevoie de date mobile.",
      optiuni: [
        { text: "Cartelă locală", bani: -150, fericirePct: 5, lectie: "Conectivitate." },
        { text: "Doar WiFi", bani: 0, fericirePct: -5, lectie: "Limitare." }
      ]
    },
    {
      titlu: "Gătit românesc",
      descriere: "Vrei sarmale, dar varza e scumpă.",
      optiuni: [
        { text: "Fac orice ar fi", bani: -150, fericirePct: 20, lectie: "Gustul de acasă." },
        { text: "Mănânc paste", bani: -30, fericirePct: 0, lectie: "Adaptare." }
      ]
    },
    {
      titlu: "Ieșire cu mentorul",
      descriere: "Profesorul te invită la cafea.",
      optiuni: [
        { text: "Merg", bani: -50, fericirePct: 10, lectie: "Networking." },
        { text: "Refuz", bani: 0, fericirePct: 0, lectie: "Timiditate." }
      ]
    },
    {
      titlu: "Cărți străine",
      descriere: "Ai nevoie de bibliografie.",
      optiuni: [
        { text: "Le cumpăr", bani: -300, fericirePct: 5, lectie: "Biblioteca personală." },
        { text: "Le scanez la bibliotecă", bani: -20, fericirePct: 0, lectie: "Efort." }
      ]
    },
    {
      titlu: "Transport public",
      descriere: "Controlorii sunt stricți.",
      optiuni: [
        { text: "Abonament lunar", bani: -300, fericirePct: 5, lectie: "Siguranță." },
        { text: "Risc amendă", bani: 0, fericirePct: -5, lectie: "Stres." }
      ]
    },
    {
      titlu: "Spălătorie publică",
      descriere: "Nu ai mașină de spălat.",
      optiuni: [
        { text: "Spăl la laundromat", bani: -50, fericirePct: 5, lectie: "Haine curate." },
        { text: "Spăl la mână", bani: 0, fericirePct: -10, lectie: "Timp pierdut." }
      ]
    },
    {
      titlu: "Vizită părinți",
      descriere: "Vin ai tăi în vizită.",
      optiuni: [
        { text: "Le plătesc o cină", bani: -500, fericirePct: 20, lectie: "Recunoștință." },
        { text: "Plătesc ei tot", bani: 0, fericirePct: 10, lectie: "Copil răsfățat." }
      ]
    },
    {
      titlu: "Pierdut portofel",
      descriere: "Ți-a dispărut portofelul în autobuz.",
      optiuni: [
        { text: "Blochez carduri, refac acte", bani: -200, fericirePct: -20, lectie: "Coșmar birocratic." },
        { text: "Sper să îl găsesc", bani: 0, fericirePct: -5, lectie: "Naivitate." }
      ]
    },
    {
      titlu: "Job part-time",
      descriere: "Găsești de spălat vase.",
      optiuni: [
        { text: "Mă angajez", bani: +600, fericirePct: -15, lectie: "Bani dar oboseală." },
        { text: "Mă focusez pe studii", bani: 0, fericirePct: 5, lectie: "Priorități." }
      ]
    },
    {
      titlu: "Festival local",
      descriere: "Cel mai mare festival din oraș.",
      optiuni: [
        { text: "Bilet VIP", bani: -600, fericirePct: 25, lectie: "Experiență totală." },
        { text: "Ascult de afară", bani: 0, fericirePct: 0, lectie: "Buget redus." }
      ]
    },
    {
      titlu: "Daune inventate de proprietar",
      descriere: "Proprietarul nu vrea să dea garanția și cere extra pentru 'daune'.",
      optiuni: [
        { text: "Plătesc să scap", bani: -5000, fericirePct: -20, lectie: "Uneori ești victima abuzurilor." },
        { text: "Îl dau în judecată", bani: -800, fericirePct: -10, lectie: "Luptă lungă și costisitoare." }
      ]
    },
    {
      titlu: "Trimis colet acasă",
      descriere: "Nu îți încap hainele în bagaj.",
      optiuni: [
        { text: "Trimit prin curier", bani: -250, fericirePct: 5, lectie: "Logistică." },
        { text: "Las haine aici", bani: 0, fericirePct: -5, lectie: "Pierdere." }
      ]
    },
    {
      titlu: "Rămas fără bani",
      descriere: "Mai sunt 3 zile până la bursă și ai 0 euro.",
      optiuni: [
        { text: "Cer de acasă", bani: +100, fericirePct: -5, lectie: "Dependență." },
        { text: "Post negru", bani: 0, fericirePct: -15, lectie: "Disciplina foamei." }
      ]
    }
  ]
};
