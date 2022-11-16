import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import React from 'react'

const Contact = () => {
  return (
    <>
    <Link to="/"><StyledHeadline>🔙</StyledHeadline></Link>
      <PoemStyled>
        <h1>Oda pro Zuzku</h1>
      <p>Frndo moje velika,</p>
      <p>ma laska k tobe je jako cela Afrika.</p>
      <p>Tve srdce vsak navzdy s Andersson-Millinger je vzpjato,</p>
      <p>jsi jejich firemni zlato.</p>
      <p>Pro me je ale jejich vedeni jak to blato!</p>
      <p>Ty vsak ve firme zustavas</p>
      <p>a na castecne vlastnictvi se mozna poptavas</p>
      <p>a s novymi zamestananci se zaroven utkavas.</p>
      <p>Tvrde v priblizeni se k Lucii pokracujes</p>
      <p>a nadmernemu stresu se tak vystavujes</p>
      <p>Ona te vsak obcas soukromym letadlem vezme na vylet,</p>
      <p>tak daleko do Polska az muzes rict привет.</p>
      <p>Na pristavani vsak tma a kratka rovinka,</p>
      <p>tak si nase Frnda trosku ublinkla.</p>
      <p>Ty zas vezmes Lucii do zoo,</p>
      <p>no tack co je mi do toho!</p>
      <p>Tam vsak kozel se svymi rohy,</p>
      <p>podkopl Zuzce nohy.</p>
      <p>Mira zpusobene bolesti  - nulova,</p>
      <p>obava o natrzene gate na zadku - stoprova.</p>
      <p>Gate se neroztrhly. Byl to prece kozel a ne vul,</p>
      <p>ale zato musely posbirat hnuj.</p>
      <p>Pred spanim pak Zuzka hodne vykladala,</p>
      <p>aby Lucie vedela, ze je coolova holka,</p>
      <p>pac pred Mirem obcas nevidi jaka je borka!</p>
      <p>Citi se s nimi obcas jak pate kolo u vozu,</p>
      <p>a proto je stale v pozoru.</p>
      <p>Z duvodu nadmerne prace se obcas poradne nevyspi,</p>
      <p>crockpot ji vsak v kuchyni pojisti!</p>
      <br/>
      <p>Co si budem lhat,</p>
      <p>Zuzka ma vsechny hodnoty kamosky, co si clovek muze prat.</p>
      <p>Je vtipna a verna</p>
      <p>a rychlost jeji jizdy na Lesnou je primerna.</p>
      <br/> 
      <p>Zuzciny zivotni sny?</p>
      <p>Byt a Bernsky salasnicky.</p>
      <p>Ty ona chce mi ve vlastnictvi</p>
      <p>V soukromem zivote na bohace doufa</p>
      <p>a zivotem se louda.</p>
      <p>Ja vsak verim, ze ona nekoho klofne</p>
      <p>a vody zivota si lokne.</p>
      <p>Tak ti timto k narozeninam preji,</p>
      <p>splnene sny a hodne stesti,</p>
      <p>to vse se cti!</p>
      <p>Dale, zdravi, lasku a hodne cash,</p>
      <p>toto neni zadna lez!</p>
      <p>At tvou panenskou blanu nejaky bohac penetruje</p>
      <p>a jen tebe jako Honza Andreu preferuje.</p>
      <p>At v penezich muzes zit</p>
      <p>a hodne dovolenych mit.</p>
      <p>At te netizi vaha inflace</p>
      <p>tot sila te penetrace.</p>
      <p>At Frndu v cizine muzes navstivit kdy se ti bude chtit</p>
      <p>a vsechno bezglutenove jidlo na svete jist.</p>
      <p>🍰 🎂 🍹</p>
    </PoemStyled>
    </>
  )
}

export default Contact;

const StyledHeadline = styled.h1`
color: #c33dbf;
position: absolute;
display: flex;
flex-direction: column;
  align-items: center;
top: -2%;
right: 2%;
`

const PoemStyled = styled.div`
text-align: center;
line-height: 3rem;
padding: 2rem;
line-height: 1.5;
margin-bottom: 2rem;
`