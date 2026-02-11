import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="swf-container">
        <object type="application/x-shockwave-flash" data="/media/home/movie.swf" width="550" height="400">
          <param name="movie" value="/media/home/movie.swf" />
          <embed src="/media/home/movie.swf" width="550" height="400" />
        </object>
      </div>

      <div className="home-intro">
        <p>Gruppkänsla och utveckling genom keramik och drejning.</p>
        <p>Skapa på din happening, teambuilding, kickoff,<br /> födelsedag, möhippa, svensexa...</p>
        <p>Det är roligt, kreativt, ökar Ert välmående och minskar stress</p>
      </div>

      <div className="content-two-cols">
        <div className="col">
          <div className="section-head">Vi anordnar</div>
          <p>Kreativa, utvecklande, roliga aktiviteter som ökar välmående. Allt från enkla föredrag, en timmes drejning till heldagsevent och återkommande teman.</p>

          <div className="section-head">Målsättning</div>
          <p>Lära känna varandra bättre, utveckla och stärka självkänsla samt se personalomsorg som en rolig gruppaktivitet på ett lekfullt och avslappnat sätt.</p>
          <div className="img-row">
            <img src="/media/home/drej_grupp_instruktion_ho_sida.jpg" alt="" />
            <img src="/media/home/drej_grupp_skal_instruktion2.jpg" alt="" />
            <img src="/media/home/galleri_grupp_valkommen.jpg" alt="" />
          </div>

          <div className="section-head">Priser</div>
          <p>Priser från 100:- – 2500:-/ pers. Boka när det passar – vardagar, kvällar och helger.</p>

          <div className="section-head">Antal</div>
          <p>Stora lokaler med 18 drejskivor i Sundbyberg, Stockholm. Välkomna allt från enskilda (t.ex. stresshantering) till hela företag på 450 personer, med möjlighet till fler vid behov.</p>

          <div className="section-head">Varför välja detta?</div>
          <p>Att ta hand om medarbetarna är avgörande för företagets framgång. Bygga självkänsla, kreativitet och social uppskattning gör medarbetarna mer lönsamma. Inlärning genom glädje, kropp, göra och känna – något unikt, roligt, rörigt och stressfritt som kopplar till barndomens lek.</p>
        </div>

        <div className="col">
          <div className="section-head">En rolig happening</div>
          <p>Samla gruppen runt ett speciellt ämne, skapa gruppkänsla. Bli ihågkommen – skapa fantastiska alster.</p>

          <div className="section-head">Skapa – Dreja – Handforma</div>
          <p>Drejning är en populär aktivitet för alla åldrar som ger självkänsla och vilja att prova. T.ex. mugg, jättestort fruktfat, sushiservis med soja- och sakékoppar, ölsejdel, Baileys- eller konjakskupa.</p>
          <div className="img-row">
            <img src="/media/home/liten_drejning_2_4.jpg" alt="" />
            <img src="/media/home/liten_konf_1.jpg" alt="" />
          </div>

          <div className="section-head">Teambuilding</div>
          <p>Spännande och lärorikt sätt att lära sig jobba i grupp. Deltagarna får lösa olika problem – mycket roliga och uppskattade samarbetsövningar.</p>

          <div className="section-head">Stressgestaltning</div>
          <p>Ett unikt sätt att se sina beteendemönster och skapa nya. Hoppar du över lunchen? Är du en av dem som inte har tid? Vi har under lång tid utvecklat ett sätt där vi tillsammans leker in nya beteendemönster.</p>

          <div className="section-head">Avslappning</div>
          <p>Kravlös lek i en mycket avslappnad miljö. Kontakta oss för mer information.</p>

          <div className="section-head">Personalutveckling</div>
          <p>Mål och delmål, utmanande samarbete, identifiera svagaste länken och ta kontroll – "jag kan allt jag vill". Här ser man tydligt och omgående vad som händer; i jobbet kanske det visar sig först hos kund.</p>
        </div>
      </div>

      <div className="content-two-cols">
        <div className="col">
          <div className="section-head">Jag använder mig av inlärning genom glädjen, kroppen, göra, känna – något som förbises idag</div>
          <p>Ett område utan konkurrens, en återkomst till barndomens lek – skratt, röra, inget prestationskrav – som hjälper att ta till sig ny kunskap. Sammanfatta aktiviteter för förståelse, diskussion och utvärdering. Kreativa aktiviteter stärker självkänsla. Min entusiasm är smittande.</p>
        </div>
        <div className="col">
          <div className="section-head">Svagaste länken</div>
          <p>Ta kontroll – jag kan allt jag vill.</p>
          <p>Här ser man tydligt och omgående vad som händer, i jobbet kanske det visar sig först hos kund.</p>
        </div>
      </div>

      <div className="fortaring-section">
        <div className="section-head">Förtäring</div>
        <img src="/media/home/mat70.jpg" alt="Förtäring" style={{ maxWidth: '400px', height: 'auto' }} />
      </div>

      <div className="welcome-block">
        <div className="welcome-title">Välkommen till Jeannette Andersson och ett utvecklande evenemang i Sundbyberg, Stockholm 070-7338818</div>
        <img src="/media/home/mify.jpg" alt="Jeannette" className="welcome-img" />
      </div>

      <div className="content-two-cols">
        <div className="col">
          <img src="/media/home/lp4.jpg" alt="" className="content-img" />
          <img src="/media/home/ljdrejar.jpg" alt="" className="content-img" />
        </div>
        <div className="col">
          <p>Gruppkänsla och utveckling genom keramik o drejning. Skapa på din happening, teambuilding, kickoff, födelsedag, möhippa, svensexa... Det är roligt, kreativt, ökar Ert välmående och minskar stress. Speciella ämnen kan belysas: ekonomi, stress, utbrändhet, noggrannhet, samarbete och allas betydelse. Många "känsliga" ämnen kan tas upp på ett avslappnat och roligt sätt.</p>
        </div>
      </div>

      <div className="quote-block">
        <div className="section-head">Va kul, det här trodde jag aldrig att jag skulle klara av</div>
        <p>Förbättrade samarbeten, ökad inspiration och kreativitet.</p>
        <p>Övervinn begränsningar och utvecklas i din roll.</p>
        <p className="section-head">Kontakta oss 070-7338818</p>
        <a href="mailto:info@jeannetteskeramik.se">se@keramikfest.se</a>
      </div>

      <p>Dreja eller kavla muggar med namn på till avdelningen så skapar man en gemensamhetskänsla och trivsel i fikarummet (och så blir de diskade....tål mikro och diskmaskin).</p>

      <div className="content-two-cols">
        <div className="col">
          <div className="section-head">Flerstegs raketen – ett sätt att använda keramiken som en del i en långsiktig utveckling</div>
          <p>När ni får hem era alster kan ett vernissage vara inspirerande – en tillbakablick och ett forum för uppföljning av pågående projekt.</p>
          <p>Kontakta oss så skräddarsyr vi ett evenemang efter era önskemål och behov.</p>
        </div>
        <div className="col">
          <p>Dreja på skoj med olika tävlingar t ex den roligaste, den rörligaste....skapelsen. Allt för att inspirera tävlingslusten.</p>
        </div>
      </div>

      <div className="referens-block">
        <img src="/media/home/uf1.jpg" alt="Mikael Fyhr" />
        <div className="referens-text">
          <div className="section-head">Referenser</div>
          <p>"Eftermiddagen hos Jeannette blev början på ett mycket bättre samarbete. Att jobba tillsammans och umgås utan ordinarie arbetsuppgifter och roller gav oss mer förståelse för varandra. Jeannette hjälpte oss att få projektet i hamn, hennes tänkvärda jämförelser mellan vårt projekt och leran fick oss att glömma pressen och bli mer kreativa. Man skall vara både mjuk o bestämd, måste vara bestämd för att ro ett projekt i hamn och mjuk för att inte köra över folk och jämfört med leran måste man vara bestämd för att få till en form samtidigt mjuk för att inte allt ska trilla ihop."</p>
          <p>Mikael Fyhr, teknikkonsult och projektledare Enator</p>
          <Link to="/referenser">Fler referenser</Link>
        </div>
      </div>

      <div className="galleri-section">
        <div className="section-head">Galleri Deltagare</div>
        <Link to="/galleri-deltagare">Härliga alster och glada deltagare</Link>
        {' '}
        <Link to="/galleri-deltagare">Här kan ni kolla in era kollegor...</Link>
      </div>
      <div className="galleri-section">
        <div className="section-head">Galleri Jeannette</div>
        <Link to="/galleri-jeannette">Jeannettes alster</Link>
      </div>
      <p>Varje kruka har med sig en del av mig,</p>
    </>
  );
}
