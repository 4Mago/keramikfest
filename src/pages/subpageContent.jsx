function LegacyEmail() {
  return <span>jeannette@keramikfest.com</span>;
}

function LegacySignature() {
  return (
    <section style={{ marginTop: '18px' }}>
      <div className="section-head">Varje kruka har med sig en del av mig,</div>
      <p>
        <em>mina känslor, händer och hjärta</em>
      </p>

      <div className="content-two-cols">
        <div className="col" style={{ flex: '0 0 220px' }}>
          <img
            src="/media/home/jstorafatdiplom.jpg"
            alt=""
            style={{ width: '220px', maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <div className="col">
          <p>
            Min specialitet efter 19 år som keramiker och som pedagog i hela 26 år, är att lära ut hur du känner att
            du gör rätt… och hur du ska göra för att komma dit…
          </p>
          <p>
            Mitt motto är: <strong>&quot;det finns inga dåliga elever, det är läraren det hänger på…&quot;</strong>
          </p>
        </div>
        <div className="col" style={{ flex: '0 0 80px' }}>
          <img src="/media/home/smalvas.jpg" alt="" style={{ width: '80px', maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>

      <div className="img-row">
        <img src="/media/home/tavling_fat.jpg" alt="" />
        <img src="/media/home/tavling_hog_star.jpg" alt="" />
        <img src="/media/home/ljdrejar.jpg" alt="" />
      </div>

      <p>
        <strong>Jeannette Andersson</strong>
        <br />
        Tallgatan 10, Sundbyberg
        <br />
        <strong>070-733 88 18</strong>
        <br />
        <a href="mailto:info@jeannetteskeramik.se">se@keramikfest.se</a>
      </p>
      <p>
        Kontakta oss så skräddarsyr vi ett evenemang efter era önskemål och behov.
      </p>
    </section>
  );
}

function LegacyCentered({ children }) {
  return <div style={{ textAlign: 'center' }}>{children}</div>;
}

function Img({ src, alt = '' }) {
  return <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />;
}

export const PAGES = {
  julbord: {
    title: 'Julbord',
    content: (
      <>
        <LegacyCentered>
          <p>
            <strong>Julbord med mycket kladd och stor glädje.</strong>
            <br />
            Ett annorlunda julbord.
          </p>
          <Img src="/media/home/mat70.jpg" alt="Julbord" />
        </LegacyCentered>

        <p>
          <strong>Gör dina egna Julklappar</strong>
          <br />
          Glögg muggar, Öl Bägare, Konjakskupor, Whiskyglas
          <br />
          <span style={{ color: '#c00' }}>vi kan ta 120 deltagare som skapar samtidigt i våra stora lokaler</span>
        </p>

        <p>
          Välj på svenskt traditionellt julbord eller olika bufféer, ni kan även laga maten själva här och göra
          keramikskålar som passar till måltiden.
        </p>

        <p>
          Gör själv en vacker och rolig julklapp med känsla! Det är endast fantasin som sätter gränserna.
          <br />
          Ni kommer först få en ordentlig genomgång hur man arbetar med lera för att sedan sätta er vid drejskivan och
          skapa.
          <br />
          Vi har haft många lyckade julfester och julbord där glädjen och barnasinnet var stort.
        </p>

        <p>
          <strong>
            <em>Kontakta oss redan idag så hjälper vi Er att göra en lyckad julfest!</em>
          </strong>
        </p>

        <LegacyCentered>
          <p>
            <strong>Härlig stämning med mycket skratt</strong>
            <br />
            dreja vinbägare, baileys-, whiskyglas, cognacskupor
            <br />
            <span style={{ color: '#c00' }}>hela verkstaden full med drejskivor</span>
            <br />
            <span style={{ color: '#c00' }}>vi kan ta 120 deltagare i våra stora lokaler</span>
          </p>
          <p style={{ color: '#c00' }}>
            mycket kunnig ledning som får er att skapa stora skålar eller tunna fina muggar även om ni aldrig drejat
            <br />
            <strong>Grundlig genomgång</strong> så att ni klarar av det ni tänkt, även som helt nybörjare
          </p>
          <p style={{ color: '#00f' }}>
            mer info och bokning 070-7338818 Jeannettes Keramik &amp; Event
            <br />
            <LegacyEmail />
          </p>
        </LegacyCentered>

        <div className="content-two-cols">
          <div className="col">
            <Img src="/media/home/liten_drejning_2_4.jpg" alt="" />
          </div>
          <div className="col" />
          <div className="col">
            <Img src="/media/home/liten_olsejdel.jpg" alt="" />
          </div>
        </div>

        <LegacyCentered>
          <p>
            <strong>anmälan gör du per tel 070-733 88 18</strong>
          </p>
          <Img src="/media/home/mohipp2.jpg" alt="" />
        </LegacyCentered>

        <p>
          Du får inspiration av utställningsföremålen som finns runt omkring dig och som du kan se vill vänster om du
          klickar på galleriet.
        </p>
        <p>mer info på tel 070-733 88 18</p>

        <LegacySignature />
      </>
    ),
  },

  event: {
    title: 'Event',
    content: (
      <>
        <p>Skapa gruppkänsla och utveckling genom keramik o drejning. Roliga event, kickoff, teambuilding, arrangemang, evenemang, dreja en happening. Även möhippa, svensexa, drejkurs i keramik minskar stress.</p>
        <p>Teambuilding spännande och lärorikt – deltagarna får lösa olika problem, mycket rolig och bra samarbetsövning. En rolig happening – samla gruppen runt ett speciellt ämne, skapa gruppkänsla. Bli ihågkommen, skapa fantastiska alster. Många vittnar om förbättrade samarbeten, ökad inspiration och kreativitet. De övervinner sina begränsningar och utvecklas i sina roller. Det är kul. Skräddarsytt efter era önskemål och behov. Kick-off, kundaktivitet, teambuilding, belöningar eller helt enkelt när ni vill ha roligt.</p>
        <p>Speciella ämnen kan belysas: ekonomi, stress, utbrändhet, noggrannhet, samarbete och allas betydelse. Många "känsliga" ämnen kan tas upp på ett avslappnat och roligt sätt.</p>
        <p><strong>Allt från nybörjardrejning till mer avancerade utbildningar inom keramik, skräddarsydda privatlektioner på precis den nivån som just du behöver!</strong></p>
      </>
    ),
  },

  personalvard: {
    title: 'Personalvård',
    content: (
      <>
        <p>På ett lekande roligt och avslappnat sätt: lära känna varandra ännu mera, utveckla och stärka självkänslan. Personalvård – en rolig gruppaktivitet.</p>
        <p>Kreativa, utvecklande, roliga aktiviteter som ökar välmående. Allt från ett enkelt föredrag, prova en timmes drejning till heldagar och återkommande tillfällen med specialtema. Målsättning: att personalen får en rolig gruppaktivitet i ett avslappnat läge. Kontakta oss 070-733 88 18.</p>
      </>
    ),
  },

  firmafest: {
    title: 'Firmafest',
    content: (
      <>
        <p>Hos oss på Jeannettes Keramik & Event kan Ni göra den där lite udda firmafesten som kommer bli enormt uppskattad ifrån personalen. Vi börjar dagen med en samling där vi bestämmer vårt gemensamma mål om vad vi skall skapa med hjälp av leran. Sedan förklara vi hur man skall arbeta med leran för att kunna uppnå det bästa resultatet. Därefter kommer hela personalen få fria händer att skapa Ert gemensamma mål.</p>
        <p>Drejningen och skapandet kommer tillbringa mycket skratt och skaparglädje åt personalen. Låt oss t ex. säga att ni arbetar på en bilverkstad. Varför inte göra en bil, ett däck, ett verktyg osv. för att sedan ställa upp det på företaget som en liten påminnelse över Er senaste firmafest.</p>
        <p>Självklart så finns det mat & dryck som väntar efter all lek. Kanske en härlig Buffé?</p>
        <p>Kontakta oss redan idag så vi kan skräddarsy ett program för Era behov & önskemål.</p>
        <p>Jeannettes Keramik & Event AB – Mobil: 070-733 88 18</p>
      </>
    ),
  },

  dreja: {
    title: 'Dreja',
    content: (
      <>
        <p>Dreja så mycket du vill, lär dig andra tekniker såsom att färglägga, ringla, kavla osv. Du får möjlighet att arbeta när du vill, bränningarna sköter jag, ingen kunskap krävs. Allt material som behövs handlar du här.</p>
        <p>Som elev hos mig får du alla de där tipsen som gör att du lyckas. Olika knep som jag har jobbat fram under mina 19 år som keramiker och pedagog inom keramiken.</p>
        <p>Att arbeta med keramik har blivit en väldigt populär sysselsättning för alla människor. Gamla som unga kan lära sig att arbeta med keramik och skapa – bara viljan finns. Att arbeta med keramik, att skapa, stimulerar både kropp och själ, perfekt för den som vill koppla av. Jag har över 19 års erfarenhet av drejning och har nu utvecklat ett eget sätt hur man lär nybörjaren att känna hur leran ska behandlas för att lyckas med drejningen.</p>
        <p>Allt från nybörjardrejning till mer avancerade utbildningar inom keramik, skräddarsydda privatlektioner på precis den nivån som just du behöver – dreja så mycket du vill, eller lär dig andra tekniker såsom att färglägga, ringla, kavla. Du får inspiration av utställningsföremålen som finns runt omkring dig – se galleriet till vänster.</p>
        <p>Anmälan gör du per tel 070-733 88 18.</p>
      </>
    ),
  },

  team: {
    title: 'Teambuilding',
    content: (
      <>
        <LegacyCentered>
          <Img src="/media/home/team.h10.jpg" alt="Teambuilding" />
        </LegacyCentered>

        <ul>
          <li>
            Team-Building är en oerhört viktig del i dagens samhälle. Om vi inte kan lära oss att arbeta tillsammans så
            kommer vi må fruktansvärt dåligt och få ångest varje dag vi skall gå till arbetet.
          </li>
          <li>
            Hos oss kan vi lära ut hur man skall fungera i ett team. Vi leker in nya tankemönster hos personalen och
            lär oss samarbeta med nytt material.
          </li>
          <li>
            Vi kommer även lära ut hur man bearbetar stress genom olika roliga och spännande övningar. Vi kommer även
            åskådliggöra vad jag tjänar på att samarbeta med övningar där fler deltar runt samma projekt.
          </li>
        </ul>

        <div className="section-head">Varför lera</div>
        <p>
          För att det oftast är ett helt nytt område, det är en återkoppling till barndomen, leken, då man sög in
          kunskapen. Det är skratt, roligt, kladdigt och det finns inga måsten. Man ger sig i kast med leran för att det
          är kul och då suger man in den nya kunskapen.
        </p>
        <p>
          Efter all lek och skratt avslutar vi med en god Buffé och summerar dagen tillsammans.
        </p>

        <div className="section-head">Kedjan och den svagaste länken...</div>
        <p>
          På ett roligt och kladdigt sätt får vi inblick i olika roller och hur viktigt det är för resultatet att var
          och en gör det han ska, bjuder till för det gemensamma målet och ej gör annat som han kanske själv anser är mer
          intressant.
        </p>
        <p>
          Vad är viktigt att alla är medvetna om? Hur skapa en gemensamhetskänsla och ett mål fokus? Ansvar och
          delaktighet?
        </p>
        <p>
          Här ser man tydligt vad som händer om ej alla gör det man ska och hjälps åt. Det ser man på leran omgående, i
          det vardagliga jobbet kanske det visar sig först hos kund...
        </p>
        <p>Utvärdering och diskussion.</p>
        <p>Detta ger förståelse för alla inblandade: ledning - säljare - produktion - städare - kund.</p>

        <LegacySignature />
      </>
    ),
  },

  samarbete: {
    title: 'Samarbete',
    content: (
      <>
        <LegacyCentered>
          <Img src="/media/legacy/samarb13.jpg" alt="" />
        </LegacyCentered>

        <p style={{ textAlign: 'center' }}>
          <strong>Är ni många eller inte vill åka någonstans kommer jag till er</strong>
        </p>

        <p style={{ textAlign: 'center' }}>
          Detta kan bli resultatet av en tävling eller en team övning.
          <br />
          Här skräddarsyr jag allt efter erat behov,
          <br />
          vad vill ni bearbeta och utveckla inom gruppen?
          <br />
          de olika uppgifterna kommer på ett roligt sätt belysa
          <br />
          en möjlig arbetsmetod eller ett nytt sätt att tänka
        </p>

        <p style={{ textAlign: 'center' }}>
          Öppenhet för nya arbetsuppgifter?
          <br />
          Sjukskrivningar, utbrändhet?
          <br />
          Smärtor i kroppen?
          <br />
          Delegering?
          <br />
          Trötthet?
          <br />
          Eller bara en rolig tävling?
          <br />
          vilken grupp är konstnärligast?
        </p>

        <LegacySignature />
      </>
    ),
  },

  stress: {
    title: 'Stressgestaltning',
    content: (
      <>
        <h2 className="section-head">Problembeskrivning</h2>
        <p>Företag har idag en större stressituation, kraven ökar hela tiden. Alla ledtider förkortas och allt måste gå fortare. Sjukskrivningar ökar och personalen mår sämre. Det är svårt att påverka utomstående faktorer för företaget.</p>
        <p>Vi kan tycka vad vi vill om denna eviga cirkel men den finns där och det bästa enligt mitt sätt att se det är att utbilda och visa på stressfaktorer så att det går att hantera situationen.</p>
        <p>Hela arbetssituationen kan vara stressande där nedskärningar och arbetsplatsförändringar ständigt finns. Att vi behöver bli mer flexibla är också klart. Att tro att inga förändringar kommer att ske är inte realistiskt. Men i samma situation på samma arbetsplats är några stressade andra inte – varför?</p>
        <p><strong>Vad kan företaget vinna på att utbilda, åskådliggöra stressen!</strong></p>

        <h2 className="section-head">En tanke: Vad är det för skillnad på flexibilitet och kaos = hur man upplever det</h2>
        <p>Idag är de anställdas hjärnor det viktigaste för företagens framgång. Vad händer då när den anställde blir sjukskriven eller går till konkurrenten – och vad händer innan, under vägen när man mår dåligt? Hur påverkas företagets goodwill av en "slutkörd" medarbetare?</p>
        <p>Kanske det viktigaste för ett företag är att ta hand om den enskilda människan vars bidrag blir avgörande framgångsfaktor för företaget. Ge personalen en lugn situation och att bygga upp självkänsla och styrka att ändra sitt beteende och ta tillvara kunskap, kreativitet, motivation och social förmåga.</p>

        <h2 className="section-head">Mina produkter</h2>
        <p><strong>Hantera, utveckla skydd mot stress i arbetet.</strong> Genom att visa på den enskildes beteende i olika situationer – först då kan man ändra sitt beteende i en viss situation.</p>
        <p><strong>Skapa engagemang, laganda</strong> genom olika aktiviteter. Visa hur laganda byggs upp på samarbete, förståelse för varandras problem – genom att arbeta med lera kan man göra detta mycket lättförståeligt.</p>

        <h2 className="section-head">Varför välja mig i stället för en vanlig stresskonsult?</h2>
        <p>Många stänger öronen inför psykologi, stress, utbrändhet – "ja det är bra men jag hinner inte nu". Jag försöker visa stressens ansikte! Sätter bild och känsla på abstrakta ord som stress, utbrändhet. Jag väver in budskapet i kladdig lera, på ett roligt, avslappnat sätt – det går in förbi spärrarna som man byggt upp. Detta är ett känt faktum inom reklam, t.ex. sekundkorta inslag som inte syns i en film.</p>
        <p>Detta kan kombineras i ett festligt arrangemang – skapa i lera, äta o dricka till. Jag vill stärka personen i sin omgivning inte förändra omgivningen, genom att skapa självkänsla, se möjligheter. Träna personalen att se sitt eget beteende under stressituationer, därigenom ändra sitt beteende så att man inte upplever stress. Jag brinner för detta och mitt engagemang smittar av sig.</p>
        <p>Min långa erfarenhet har lärt mig att se individen, se de små byggstenarna som bygger gruppen. Har egen erfarenhet som jag relaterar till – vet hur det är när man brinner för något och jobbar gärna dygnet runt… alla varnar men man lyssnar inte, sen inser man men sitter liksom fast, ser inget man kan ändra på och så blir man än mer stressad över det – ett ekorrhjul. Det tar lång tid att ta sig ur den onda cirkeln, det har jag gjort och det jag lärt mig delar jag med mig av.</p>

        <h2 className="section-head">Min Bakgrund</h2>
        <ul>
          <li>Erfarenheter under 27 år inom olika självkänsostärkande övningar, inom barnens utveckling, idrott, statlig verksamhet, småföretag, konsthantverk</li>
          <li>Pedagog sedan 1975. Arbetat aktivt med laganda och självtillit och lagt till stresshantering de senaste 8 åren</li>
          <li>Konsthantverkare inom keramik sedan 86, vunnit 2 pris i NM i Drejning-94</li>
          <li>Personal och produktionsansvarig i ett elektronikföretag under 13 år</li>
          <li>Sekreterare i en statlig organisation under 4 år, erfarenhet av flera omorganisationer</li>
          <li>Utbildad barnskötare med påbyggnad "beteende och inlärning"</li>
        </ul>

        <h2 className="section-head">Mina Arbetsmetoder</h2>
        <ul>
          <li>Jag använder mig av inlärning genom glädjen, kroppen, känna, göra, se – något som förbises idag</li>
          <li>Varför lera? För att det oftast är ett helt nytt område, det är en återkoppling till barndomen, leken, då man sög in kunskap. Det är skratt och roligt, kladdigt och det finns inga måsten. Man ger sig i kast med leran för att det är kul och då suger man in den nya kunskapen</li>
          <li>Sammanfattar aktiviteten på slutet för att visa vad jag gjort. T.ex. genom drejning – först kaos, sen efter träning är det lätt att hitta samarbetet</li>
          <li>Går igenom skillnaderna i ens eget tänkande och tillvägagångssätt</li>
          <li>Jag arbetar med den här metoden för att få fram beteendet och kunna förändra det genom att man ser sitt beteende – jag sätter bild på det beteendet man har genom att tvinga fram en stressad situation, visa på var och ens beteende i situationen, sedan utföra samma uppgift, på samma tid, men med ett harmoniskt, genomtänkt o lugnt beteende</li>
          <li>Träna personalen, organisationen i stresshantering genom en gemensam produkt t.ex. keramik</li>
        </ul>

        <p><em>Lennart Levi ger ett exempel: "Ett amerikanskt företag köpte upp ett svenskt för 7,3 miljarder kronor, det svenska företaget hade 50 anställda, det blir över 140 miljoner per skalle! Det var de anställda som var företagets hela värde. Såväl lokaler som datorer hyrde man. Då är det en logisk slutsats att kapitalet sitter mellan öronen på folk, och det måste man vårda. Ett sådant kapital kan nämligen förstöras. En tillräckligt stressad hjärna är inte kreativ, är heller inte empatisk, bryr sig inte om sina medmänniskor, kan inte hitta på nya lösningar."</em></p>

        <p>Min specialitet efter 19 år som keramiker och som pedagog i hela 26 år, är att lära ut hur du känner att du gör rätt – och hur du ska göra för att komma dit. Mitt motto är: "det finns inga dåliga elever, det är läraren det hänger på".</p>
        <p>Bilderna är från Norska Drejarmästerskapen -94, jag kom på 2:a plats.</p>
        <p>Jeannette Andersson, Tallgatan 10 Sundbyberg. 070-733 88 18. Kontakta oss så skräddarsyr vi ett evenemang efter era önskemål och behov.</p>
      </>
    ),
  },

  mohippa: {
    title: 'Möhippa / Svensexa',
    content: (
      <>
        <p>Jag skapar en härlig stämning med mycket skratt – dreja vinbägare, baileys-, whiskyglas, cognacskupor. 18 drejskivor och en mycket kunnig ledning som får er att skapa stora skålar eller tunna fina muggar även om ni aldrig drejat. Grundlig genomgång så att ni klarar av det ni tänkt, även som helt nybörjare. Mer info och bokning 070-7338818 Jeannettes Keramik & Event.</p>

        <h2 className="section-head">Drejning Möhippespecial</h2>
        <p>Det finns alla varianter att välja på – från 30 min till en halvdag, ni kan vara hur många ni vill, det är stora lokaler och 18 drejskivor. Priserna ligger på 100:- till 495:-/pers. Välj mellan en kort prova-på eller en längre mer gedigen drejkurs där ni får massa hjälp. Ni har möjlighet att önska vad ni vill skapa och få hjälp att klara av att göra det även om det är första gången ni provar. Presentkort – så får de göra sin egen service som bröllopspresent.</p>
        <p>Grundlig genomgång så att ni klarar av tekniken och det ni tänkt, även som helt nybörjare.</p>

        <table className="subpage-table">
          <tbody>
            <tr><td><strong>Sushi fat</strong></td><td>Ett helt sushiset till bruden, det blir en fin bröllopspresent och ett fint minne av möhippan</td></tr>
            <tr><td><strong>Äktenskapets budord</strong></td><td>Här är det många viktiga tankar som ni kan dela med er av eller hon kan själv göra en undersökning</td></tr>
            <tr><td><strong>"Papyrusrulle"</strong></td><td>Tänk att ha en fin tavla i form av en papyrusrulle hemma och komma ihåg alla viktiga händelser…</td></tr>
            <tr><td><strong>Skulptur av sin blivande man…</strong></td><td>Brudgummen kan bli föremål för en hel del i denna kreativa aktivitet</td></tr>
            <tr><td><strong>Skulptur av sin brudklänning</strong></td><td>Tänk att få drömma sig bort och skapa en helt perfekt bröllopsklänning</td></tr>
            <tr><td><strong>Bröllopsresan</strong></td><td>Fäst ner drömmar o tankar om lianer och bananer…</td></tr>
            <tr><td><strong>Tårta</strong></td><td>Släpp fantasin fri i denna goda bakelse</td></tr>
            <tr><td><strong>Brudbuketten</strong></td><td>Skapa en blomsterbukett som håller för alltid</td></tr>
          </tbody>
        </table>

        <p><strong>Keramikkurs</strong> – kavling, ringling, skulptur, visning av drejning sedan självständigt arbete. Har ni egna idéer men ingenstans att vara? Hyr då min keramikverkstad – ni jobbar själva i elevverkstaden.</p>
        <p>Anmälan gör du per tel 070-733 88 18.</p>
        <p>Allt från nybörjardrejning till mer avancerade utbildningar inom keramik, skräddarsydda privatlektioner på precis den nivån som just du behöver – dreja så mycket du vill, eller lär dig andra tekniker såsom att färglägga, ringla, kavla. Du får inspiration av utställningsföremålen – se galleriet till vänster.</p>
        <p>Varje kruka har med sig en del av mig, mina känslor, händer och hjärta. Jeannette Andersson. Tallgatan 10, Sundbyberg 070-733 88 18 www.keramikfest.com.</p>
        <p>Bilderna är från Norska Drejarmästerskapen -94, då jag placerade mig på andra plats, på Nordiska Drejarmästerskapen -95 blev jag 4:a.</p>
      </>
    ),
  },

  svensexa: {
    title: 'Svensexa',
    content: (
      <>
        <p><strong>Starta dagen med mycket kladd och stor glädje.</strong> Hos oss kan du göra en annorlunda svensexa. Gör dina egna Konjakskupor, Whiskyglas och Öl Bägare.</p>
        <p>Låt Brudgumen göra en vacker present till bruden, kompisarna eller en prydnad till bokhyllan! Eller varför inte låta brudgumen göra en skulptur av sin blivande brud? Här är det endast fantasin som sätter gränserna. Ni kommer först få en ordentlig genomgång hur man arbetar med lera för att sedan sätta er vid drejskivan och skapa. Vi har haft många lyckade svensexor där glädjen och barnasinnet var stort. Detta är det perfekta sättet att börja en svensexa på. Kontakta oss redan idag så hjälper vi Er att göra en lyckad svensexa!</p>
        <p>Härlig stämning med mycket skratt – dreja vinbägare, baileys-, whiskyglas, cognacskupor. 18 drejskivor och en mycket kunnig ledning som får er att skapa stora skålar eller tunna fina muggar även om ni aldrig drejat. Grundlig genomgång så att ni klarar av det ni tänkt, även som helt nybörjare. Mer info och bokning 070-7338818 Jeannettes Keramik & Event.</p>

        <h2 className="section-head">Drejning special</h2>
        <p>Det finns alla varianter att välja på – från 30 min till en halvdag, stora lokaler och 18 drejskivor. Priserna ligger på 100:- till 495:-/pers. Välj mellan en kort prova-på eller en längre mer gedigen drejkurs där ni får massa hjälp. Ni har möjlighet att önska vad ni vill skapa och få hjälp att klara av att göra det även om det är första gången ni provar. Presentkort – så får de göra sin egen service som bröllopspresent.</p>
        <p>Grundlig genomgång så att ni klarar av tekniken och det ni tänkt, även som helt nybörjare.</p>

        <table className="subpage-table">
          <tbody>
            <tr><td><strong>Sushi fat</strong></td><td>Ett helt sushiset – fint o överraska med hemma sen</td></tr>
            <tr><td><strong>Äktenskapets budord</strong></td><td>Här är det många viktiga tankar som ni kan dela med er av eller han kan själv göra en undersökning</td></tr>
            <tr><td><strong>"Papyrusrulle"</strong></td><td>Tänk att ha en fin tavla i form av en papyrusrulle hemma och komma ihåg alla viktiga händelser…</td></tr>
            <tr><td><strong>Skulptur av sin blivande fru…</strong></td><td>Bruden kan bli föremål för en hel del i denna kreativa aktivitet</td></tr>
            <tr><td><strong>Baccus Minne – Dryckes glas</strong></td><td>Whisky, cognac kupor och öl sejdlar</td></tr>
            <tr><td><strong>Bröllopsresan</strong></td><td>Fäst ner drömmar o tankar om lianer och bananer…</td></tr>
          </tbody>
        </table>

        <p>Anmälan gör du per tel 070-733 88 18.</p>
        <p>Allt från nybörjardrejning till mer avancerade utbildningar inom keramik, skräddarsydda privatlektioner på precis den nivån som just du behöver – dreja så mycket du vill, eller lär dig andra tekniker såsom att färglägga, ringla, kavla. Du får inspiration av utställningsföremålen – se galleriet till vänster.</p>
        <p>Varje kruka har med sig en del av mig, mina känslor, händer och hjärta. Jeannette Andersson. Tallgatan 10, Sundbyberg 070-733 88 18.</p>
        <p>Bilderna är från Norska Drejarmästerskapen -94, då jag placerade mig på andra plats, på Nordiska Drejarmästerskapen -95 blev jag 4:a.</p>
      </>
    ),
  },

  medeltid: {
    title: 'Medeltid',
    content: (
      <>
        <LegacyCentered>
          <p>
            <strong>historiens vingslag</strong>
            <br />
            ett av de äldsta yrken
          </p>
        </LegacyCentered>

        <p>
          Stämning, glädje och skratt, självkänsla och en fin medeltidsmugg som man har gjort alldeles själv.
        </p>

        <div className="content-two-cols">
          <div className="col">
            <LegacyCentered>
              <Img src="/media/legacy/medelt17.jpg" alt="" />
            </LegacyCentered>
          </div>
          <div className="col">
            <LegacyCentered>
              <p>
                <strong>skapa dig ett ölkrus</strong>
                <br />
                precis som de hade på medeltiden...
              </p>
              <p>
                Min medeltidsserie är framtagen efter utgrävningarna som finns att skåda på Medeltidsmuseet.
              </p>
            </LegacyCentered>
          </div>
        </div>

        <div className="content-two-cols">
          <div className="col">
            <LegacyCentered>
              <p>Bygger självkänsla</p>
              <p>Roligt och en massa skratt</p>
              <p>Hjälp, stöd och uppmuntran där det behövs</p>
              <p>Avslutas på vikingavis med kycklingklubba och en öl</p>
            </LegacyCentered>
          </div>
          <div className="col">
            <LegacyCentered>
              <Img src="/media/legacy/medelt18.jpg" alt="" />
            </LegacyCentered>
          </div>
        </div>

        <p><strong>Dessa medeltidsmuggar som finns på bild går även att köpa</strong></p>
        <p>Design och tillverkning Jeannette Andersson</p>

        <LegacySignature />
      </>
    ),
  },

  'prova-pa-dreja': {
    title: 'Prova på dreja',
    content: (
      <>
        <p>Kort prova-på-dreja eller längre drejkurs. Ni får hjälp, god mat och dryck. Önska vad ni vill skapa – vi hjälper er att klara av att göra det även om det är första gången ni drejar eller skapar. Allt från nybörjardrejning till mer avancerade utbildningar inom keramik, skräddarsydda privatlektioner på precis den nivån som just du behöver!</p>
        <p>Grundlig genomgång så att ni klarar av tekniken och det ni tänkt, även som helt nybörjare. Det finns alla varianter – från 30 min till en halvdag, stora lokaler och 18 drejskivor. Priserna ligger på 100:- till 495:-/pers. Anmälan per tel 070-733 88 18.</p>
      </>
    ),
  },

  'sushi-skapa-o-at': {
    title: 'Sushi skapa o ät',
    content: (
      <>
        <LegacyCentered>
          <p style={{ fontSize: '1.2em', marginBottom: '0.2em' }}>Japan inspirerat…</p>
          <p style={{ fontSize: '1.1em' }}>
            fat och små soya skålar…
            <br />
            och kanske en liten sake mugg
          </p>
          <Img src="/media/legacy/sushi.11.jpg" alt="Sushi" />
        </LegacyCentered>

        <LegacyCentered>
          <p style={{ fontSize: '1.1em' }}>
            Skapa ett eget litet sushi set,
            <br />
            något man kan vara stolt över i köket…
          </p>
          <p style={{ fontSize: '1.1em' }}>
            Lite recept och tips på hur man gör
            <br />
            Sake serveras till…
          </p>
          <Img src="/media/legacy/sushi.12.jpg" alt="" />
        </LegacyCentered>

        <LegacySignature />
      </>
    ),
  },

  mat: {
    title: 'Mat',
    content: (
      <>
        <LegacyCentered>
          <p style={{ fontSize: '1.4em', margin: '0.3em 0' }}>Lite god mat att välja på</p>
          <p><strong>Baguette / ciabatta med massa gott</strong></p>
          <p><strong>Smörgåstårta</strong></p>
        </LegacyCentered>

        <div className="content-two-cols">
          <div className="col">
            <LegacyCentered>
              <Img src="/media/legacy/mat.ht1.jpg" alt="" />
              <p>Sallad med eller utan pasta</p>
            </LegacyCentered>
          </div>
          <div className="col">
            <LegacyCentered>
              <Img src="/media/legacy/mat.ht2.jpg" alt="" />
              <p>Ost och kex - bord</p>
            </LegacyCentered>
          </div>
        </div>

        <LegacyCentered>
          <Img src="/media/legacy/mat.ht3.jpg" alt="" />
        </LegacyCentered>

        <LegacyCentered>
          <p style={{ fontSize: '1.1em', marginTop: '8px' }}>Taco buffé</p>
          <Img src="/media/legacy/mat.ht4.jpg" alt="" />
          <p>Italiensk buffé</p>
        </LegacyCentered>

        <LegacySignature />
      </>
    ),
  },

  presentkort: {
    title: 'Presentkort',
    content: (
      <>
        <LegacyCentered>
          <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif' }}>
            <strong>Exempel på Presentkort</strong>
          </p>
        </LegacyCentered>

        <div style={{ border: '3px solid #333', padding: '10px', margin: '12px 0' }}>
          <LegacyCentered>
            <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif', marginBottom: '4px' }}>
              <strong>Välkommen till Jeannette&apos;s Keramik &amp; Event</strong>
            </p>
            <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif' }}>
              <strong>
                Varsågod, ni är inbjudna
                <br />
                att dreja tillsammans, fyrhändigt i en pardrejning
                <br />
                ni kommer att få göra 2 st vinkalkar
              </strong>
            </p>
            <Img src="/media/legacy/presen1.jpg" alt="" />
            <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif' }}>
              svenska medeltids kalkar
              <br />
              design o tillverkning Jeannette Andersson
            </p>
            <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif' }}>
              <strong>Släpp loss skaparglädjen!</strong>
            </p>
            <div className="img-row" style={{ justifyContent: 'center' }}>
              <Img src="/media/legacy/presen2.jpg" alt="" />
              <Img src="/media/legacy/presen3.jpg" alt="" />
            </div>
            <p style={{ fontFamily: 'Comic Sans MS, Arial, Helvetica, sans-serif' }}>Välkommen!</p>
          </LegacyCentered>
        </div>

        <LegacyCentered>
          <p style={{ fontSize: '1.6em', margin: '6px 0' }}><strong>Handgjort stengods</strong></p>
          <p style={{ fontSize: '1.1em', margin: '6px 0' }}>Designat och tillverkat av Jeannette Andersson</p>
          <p style={{ fontSize: '1em' }}>
            Min medeltidsserie är framtagen efter inspiration av utgrävningarna
            <br />
            som man kan se på Medeltids museet i Stockholm
          </p>
        </LegacyCentered>

        <div className="content-two-cols">
          <div className="col" style={{ flex: '0 0 220px' }}>
            <Img src="/media/legacy/presen6.jpg" alt="" />
          </div>
          <div className="col">
            <p>
              Jag har studerat hur de riktiga kärlen har sett ut och skapat en serie utifrån det och utifrån våra moderna behov.
              Jag har använt stengodslera, en lera som är mycket hållbar, den bränns till 1280 grader, den blir då helt vattentät
              och tål även diskmaskin.
            </p>
          </div>
        </div>

        <p>Det finns ölkrus, vinbägare, snapsglas, äggkoppar, skålar, tillbringare…</p>

        <div className="content-two-cols">
          <div className="col">
            <p>
              Först knådar jag leran och gör små &quot;bollar&quot;, sedan drejar jag. När de har torkat en stund blir det puts
              och signering för hand.
            </p>
            <p>
              Nu är de klara att torka helt och putsas en gång till innan de går in i ugnen för den första bränningen som går upp
              till 960 grader.
            </p>
          </div>
          <div className="col" style={{ flex: '0 0 220px' }}>
            <LegacyCentered>
              <Img src="/media/legacy/presen7.jpg" alt="" />
            </LegacyCentered>
          </div>
          <div className="col">
            <p>
              Då blir de så hårda att det går att doppa dem i glasyr… det är keramikerns färg…
            </p>
            <p>
              När det är klart och torrt blir det en gång till i ugnen, denna gång upp till 1280 grader, alltså 1000 grader varmare
              än ugnen hemma. Denna gång i 3 dygn!!
            </p>
          </div>
        </div>

        <div className="img-row">
          <Img src="/media/legacy/presen8.jpg" alt="" />
          <Img src="/media/legacy/presen9.jpg" alt="" />
        </div>

        <p>
          När de är klara efter bränningen slipar jag alla bottnar och kollar mot min kind om de är släta o goa. Som du förstår så
          betyder varje liten mugg en massa för mig…
        </p>

        <LegacySignature />
      </>
    ),
  },

  'web-butik': {
    title: 'Butik',
    content: (
      <>
        <LegacyCentered />
        <p>du kan välja vad du vill under Galleri Jeannette</p>
        <p>eller så designar du och jag tillverkar</p>
        <p>öppettider är när du kan, även kvällar o helger, bor du långt bort skickar jag</p>
        <LegacySignature />
      </>
    ),
  },

  'galleri-deltagare': {
    title: 'Galleri Deltagare',
    content: (
      <>
        <div className="section-head">Galleri deltagare</div>
        <p>Här kan ni kolla in era kollegor…</p>

        {(() => {
          const images = [
            'bilder_deltagare/AG3bordtaco015.jpg',
            'bilder_deltagare/AGtaco50p025.jpg',
            'bilder_deltagare/AG3bordtaco016.jpg',
            'bilder_deltagare/AGplaststart50p111.jpg',
            'bilder_deltagare/AGplastdrej50p136.jpg',
            'bilder_deltagare/AGgladkille148.jpg',
            'bilder_deltagare/AK164.jpg',
            'bilder_deltagare/caringlkedja0226.jpg',
            'bilder_deltagare/momuggmhjartakrympt.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_instruktion2.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_action.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_centrera.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_centrering_ljustjej.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_instruktion_narbild.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_fardigt_skal.jpg',
            'bilder_deltagare/kopiaseb_it10926/drej_grupp_mat_smorg.tarta.jpg',
            'bilder_deltagare/kopiakillganghenrik11027/drej_grupp_killar_valkommen.jpg',
            'bilder_deltagare/kopiakillganghenrik11027/drej_grupp_instruktion_killar.jpg',
            'bilder_deltagare/kopiakillganghenrik11027/drej_grupp_plastsackar.jpg',
            'bilder_deltagare/kopiakillganghenrik11027/drej_stad_diskbank_killar.jpg',
          ];

          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '10px',
                alignItems: 'start',
              }}
            >
              {images.map((rel) => (
                <a key={rel} href={`/media/legacy/${rel}`} target="_blank" rel="noreferrer">
                  <Img src={`/media/legacy/${rel}`} alt="" />
                </a>
              ))}
            </div>
          );
        })()}

        <p style={{ textAlign: 'center', marginTop: '16px' }}>
          <em>Vill veta mer om dessa evenemang</em>
          <br />
          <strong>Kontakta oss</strong>: 070-733 88 18, <LegacyEmail />
        </p>

        <LegacySignature />
      </>
    ),
  },

  'galleri-jeannette': {
    title: 'Galleri Jeannette',
    content: (
      <>
        <div className="section-head">Unika föremål</div>
        <p>
          Detta är några exempel på saker jag gör, men jag tar naturligtvis emot specialbeställningar om ni har egna önskemål.
        </p>

        {(() => {
          const items = [
            { full: 'bilder/flundranl.jpg', thumb: 'bilder/lflundranl.gif' },
            { full: 'bilder/rullsand1l.jpg', thumb: 'bilder/rullsand1l.jpg' },
            { full: 'bilder/p4.jpg', thumb: 'bilder/lp4.jpg' },
            { full: 'bilder/p10.jpg', thumb: 'bilder/lp10.jpg' },
            { full: 'bilder/p9.jpg', thumb: 'bilder/lp9.jpg' },
            { full: 'bilder/uv4.jpg', thumb: 'bilder/luv4.jpg' },
            { full: 'bilder/uf1.jpg', thumb: 'bilder/luf1.jpg' },
            { full: 'bilder/kanna1.jpg', thumb: 'bilder/lkanna1.jpg' },
            { full: 'bilder/t1.jpg', thumb: 'bilder/lt1.jpg' },
            { full: 'bilder/um1.jpg', thumb: 'bilder/lum1.jpg' },
            { full: 'bilder/skalar1.jpg', thumb: 'bilder/lskalar1.jpg' },
            { full: 'bilder/blafat1.jpg', thumb: 'bilder/lblafat1.jpg' },
            { full: 'bilder/fat1.jpg', thumb: 'bilder/lfat1.jpg' },
            { full: 'bilder/us10.jpg', thumb: 'bilder/lus10.jpg' },
            { full: 'bilder/o3.jpg', thumb: 'bilder/lo3.jpg' },
            { full: 'bilder/d1.jpg', thumb: 'bilder/ld1.jpg' },
            { full: 'bilder/d2.jpg', thumb: 'bilder/ld2.jpg' },
            { full: 'bilder/g1.jpg', thumb: 'bilder/lg1.jpg' },
            { full: 'bilder/med2.jpg', thumb: 'bilder/lmed2.jpg' },
            { full: 'bilder/med1.jpg', thumb: 'bilder/lmed1.jpg' },
            { full: 'bilder/servi2.jpg', thumb: 'bilder/lservi2.jpg' },
            { full: 'bilder/p5.jpg', thumb: 'bilder/lp5.jpg' },
            { full: 'bilder/vink1.jpg', thumb: 'bilder/lvink1.jpg' },
            { full: 'bilder/p3.jpg', thumb: 'bilder/lp3.jpg' },
            { full: 'bilder/o21.jpg', thumb: 'bilder/lo21.jpg' },
            { full: 'bilder/o27.jpg', thumb: 'bilder/lo27.jpg' },
            { full: 'bilder/o5.jpg', thumb: 'bilder/lo5.jpg' },
            { full: 'bilder/o6.jpg', thumb: 'bilder/lo6.jpg' },
            { full: 'bilder/sot3.jpg', thumb: 'bilder/lsot3.jpg' },
            { full: 'bilder/t4.jpg', thumb: 'bilder/lt4.jpg' },
            { full: 'bilder/ma1.jpg', thumb: 'bilder/lma1.jpg' },
            { full: 'bilder/ma14.jpg', thumb: 'bilder/lma14.jpg' },
            { full: 'bilder/s11.jpg', thumb: 'bilder/ls11.jpg' },
            { full: 'bilder/sot2.jpg', thumb: 'bilder/lsot2.jpg' },
            { full: 'bilder/sot1.jpg', thumb: 'bilder/lsot1.jpg' },
          ];

          return (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '10px',
                alignItems: 'start',
              }}
            >
              {items.map(({ full, thumb }) => (
                <a key={thumb} href={`/media/legacy/${full}`} target="_blank" rel="noreferrer">
                  <Img src={`/media/legacy/${thumb}`} alt="" />
                </a>
              ))}
            </div>
          );
        })()}

        <LegacySignature />
      </>
    ),
  },

  'om-jeannette': {
    title: 'Om Jeannette',
    content: (
      <>
        <p>Jeannette's Keramik & Event AB. Jeannette Andersson.</p>
        <p>Vem är då denna Jeannette? Jo, en glad och positiv tjej som har arbetat med undervisning sedan 1975. 1986 startade Jeannette sitt företag Jeannette's Keramik & Event AB.</p>
        <p>Jag brinner för detta och mitt engagemang smittar av sig. Erfarenheter och tankar, blandat med ett brinnande intresse för hur olika vi alla är när vi lär in, gör att varje deltagare känner sig uppmärksammad.</p>

        <h2 className="section-head">Min Bakgrund</h2>
        <ul>
          <li>Erfarenheter under 29 år inom olika självkänsostärkande övningar, inom privat och statlig verksamhet, småföretag, konsthantverk, barnens utveckling, idrott</li>
          <li>Arbetat sedan 1975 med laganda och självtillit och lagt till stressgestaltning de senaste 8 åren</li>
          <li>Personal och produktionsansvarig i ett elektronikföretag under 13 år</li>
          <li>Sekreterare i en statlig organisation under 4 år, erfarenhet av flera omorganisationer</li>
          <li>Konsthantverkare inom keramik sedan 86, vunnit 2 pris i NM i drejning-94</li>
          <li>Utbildad barnskötare med påbyggnad "beteende och inlärning"</li>
          <li>Tävlingsdansat och varit lärare i bugg, rock'n'roll, vinerwals</li>
          <li>Lärt ut aikido för barn och dykning för vuxna</li>
        </ul>

        <p>Min specialitet efter 19 år som keramiker och som pedagog i hela 26 år, är att lära ut hur du känner att du gör rätt – och hur du ska göra för att komma dit. Mitt motto: "Det finns inga dåliga elever. Det är läraren det hänger på."</p>
        <p>Varje kruka har med sig en del av mig, mina känslor, händer och hjärta. Jeannette Andersson. Tallgatan 10 Sundbyberg 070-733 88 18. Kontakta oss.</p>
      </>
    ),
  },

  prislista: {
    title: 'Prislista',
    content: (
      <>
        <p>Priser från 100:- – 2500:-/pers. Boka när det passar – vardagar, kvällar och helger. Priserna ligger på 100:- till 495:-/pers för möhippa/svensexa. Kontakta oss för aktuell prislista och bokning: 070-733 88 18. Vi skräddarsyr efter era önskemål och behov.</p>
      </>
    ),
  },

  kontakt: {
    title: 'Kontakta oss',
    content: (
      <>
        <p>
          <strong>Jeannette&apos;s Keramik och Event AB</strong>
          <br />
          <a href="https://www.keramikfest.com/">www.keramikfest.com</a>
        </p>
        <p>
          Jeannette Andersson – <strong>070-7338818</strong>
          <br />
          <LegacyEmail />
        </p>

        <div className="section-head">Hej och jättevälkomna till Jeannette&apos;s Keramik &amp; Event AB</div>

        <div className="content-two-cols">
          <div className="col">
            <Img src="/media/legacy/karta.5.jpg" alt="Karta" />
            <p>kör in Råsunda, Gränsg, Ekenbergsg, Prästgårdsg, Tallgatan</p>
          </div>
          <div className="col">
            <p>
              <strong>
                Tallgatan 10,
                <br />
                i Sundbyberg
              </strong>
            </p>
            <p>
              det ligger mellan Tulegatan och Sturegatan högst upp på åsen, korsningen Tallgatan / Vintergatan, närmsta
              T-bana är Sundbyberg
            </p>
          </div>
        </div>

        <div className="content-two-cols">
          <div className="col">
            <p>
              Om du kör bil… och har Råsunda stadion i Solna på höger sida kör man höger i rondellen in på Gränsgatan,
              första rödlyset vänster in på Ekenbergsgatan, första höger in på Prästgårdsgatan, höger in på Tallgatan och
              parkera.
            </p>
            <p>
              Jeannette&apos;s Keramik &amp; Event ligger till höger innan korsningen med Vintergatan. Du kan se de
              &quot;fina&quot; gallerförsedda fönstrena som vetter åt 3 håll på hela gaveln.
            </p>
          </div>
          <div className="col" style={{ flex: '0 0 220px' }}>
            <LegacyCentered>
              <Img src="/media/legacy/karta.6.jpg" alt="" />
            </LegacyCentered>
          </div>
        </div>

        <div className="content-two-cols">
          <div className="col" style={{ flex: '0 0 240px' }}>
            <Img src="/media/legacy/karta.7.jpg" alt="" />
          </div>
          <div className="col">
            <LegacyCentered>
              <Img src="/media/legacy/karta.8.jpg" alt="" />
            </LegacyCentered>
          </div>
        </div>

        <p style={{ fontSize: '1.05em' }}>
          Ta med plastsäckar som skydd för kläder eller hyr overall
        </p>

        <div className="content-two-cols">
          <div className="col">
            <LegacyCentered>
              <p>
                Jeannette Andersson
                <br />
                070-7338818
                <br />
                Jeannette&apos;s Keramik och Event AB
                <br />
                <a href="https://www.keramikfest.com/">www.keramikfest.com</a>
                <br />
                <LegacyEmail />
              </p>
            </LegacyCentered>
          </div>
          <div className="col" style={{ flex: '0 0 120px' }}>
            <LegacyCentered>
              <Img src="/media/legacy/karta.9.jpg" alt="" />
            </LegacyCentered>
          </div>
        </div>

        <LegacySignature />
      </>
    ),
  },

  english: {
    title: 'English',
    content: (
      <>
        <p>Welcome to Keramikfest – creative events, team building, pottery and clay workshops in Sundbyberg, Stockholm. We offer everything from beginner throwing to advanced ceramics courses, tailor-made private lessons at exactly the level you need. Möhippa (hen party), svensexa (stag party), kick-off, teambuilding and company events – all tailored to your wishes. Contact us: 070-733 88 18.</p>
      </>
    ),
  },

  referenser: {
    title: 'Referenser',
    content: (
      <>
        <p>Från när Stora Enso var här – möte, drejning, mat o underhållning. Fler referenser längre ner på sidan.</p>
        <h2 className="section-head">Referenser</h2>
        <p><em>"Att släppa det ordinarie arbetet och istället göra något med händerna gjorde mig både mer utvilad och avslappnad. Jeannette är en härlig människa, trygg och tydlig. Hon sprider entusiasm och glädje."</em><br />– Anders Karnfeldt, bemanningsansvarig och projektledare SE-banken</p>
        <p><em>"Eftermiddagen hos Jeannette blev början på ett mycket bättre samarbete. Att jobba tillsammans och umgås utan ordinarie arbetsuppgifter och roller gav oss mer förståelse för varandra. Jeannette hjälpte oss att få projektet i hamn, hennes tänkvärda jämförelser mellan vårt projekt och leran fick oss att glömma pressen och bli mer kreativa. Man skall vara både mjuk o bestämd, måste vara bestämd för att ro ett projekt i hamn och mjuk för att inte köra över folk och jämfört med leran måste man vara bestämd för att få till en form samtidigt mjuk för att inte allt ska trilla ihop."</em><br />– Mikael Fyhr, teknikkonsult och projektledare Enator</p>
        <p><em>"Jeannette kom till invigningen av våra nya lokaler. Som en delaktivitet fick deltagarna själva, i den mobila keramikverkstaden, gestalta våra kernvärden: enkelhet, fokus, ansvarstagande. Det blev en mycket uppskattad del där vi tillsammans med våra kollegor och kunder kunde göra något tillsammans. Det blev fantastiska byggnadsverk i lera, som vi nu har ställt ut i en monter."</em><br />– Anders Eklund, inköpschef NCC</p>
        <p><em>"Jag varvar arbetet med lektioner hos Jeannette. Det är det perfekta sättet att utbilda sig på och samtidigt kunna bestämma över sin egen tid. Det är skönt att inte vara uppbunden av en speciell tidpunkt, dessutom har jag alltid möjlighet att ringa till Jeannette och få hjälp med ett problem. Jeannette är glad och lättsam att samarbeta med och det bästa av allt är att hon är jätteduktig."</em><br />– Barbro</p>
        <p>Vill samtidigt passa på att säga att det går utmärkt att beställa via Jeannette.</p>
        <p>Min specialitet efter 19 år som keramiker och som pedagog (fr 1975, se "Om Jeannette") är att lära ut hur du känner att du gör rätt och vad du ska göra för att komma dit. "Det finns inga dåliga elever, det är läraren det hänger på."</p>
        <p>Bilderna är från Norska Drejarmästerskapen -94, jag kom på 2:a plats. Varje kruka har med sig en del av mig, mina känslor, händer och hjärta. Jeannette Andersson, Tallgatan 10 Sundbyberg. 070-733 88 18.</p>
      </>
    ),
  },
};
