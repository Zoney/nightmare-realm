import type { Metadata } from "next";

// Personvernerklæringen (GDPR art. 13). Skal alltid stemme med koden og serveroppsettet:
// endrer du hva som lagres, hvor lenge eller hvem som hjelper oss, endre denne sida samtidig.
// Grunnlaget (avtalen med Hetzner, tiltakene på serveren) står i husken: workshop/apper/personvern/.

export const metadata: Metadata = { title: "Personvern · Nightmare Realm" };

const SIST_ENDRET = "5. november 2026";
const EPOST = "mailto:oyvind@zoney.no?subject=Personvern%20i%20Nightmare%20Realm";

const h2 = "mt-8 mb-2 text-xl font-semibold";
const ul = "list-disc space-y-2 pl-6";
const lenke = "underline underline-offset-2 hover:text-[#bd1e59]";

export default function Personvern() {
  return (
    <main lang="nb" className="mx-auto max-w-2xl px-4 py-10 leading-relaxed text-slate-900">
      <a className={lenke} href="/">
        ← Nightmare Realm
      </a>
      <h1 className="mt-6 text-3xl font-bold">Personvern</h1>
      <p className="mt-4">
        Spillet har ingen innlogging, og vi lagrer ingenting om deg utover loggen på serveren,
        som slettes etter 30 dager. Alt kjører på vår egen server i Finland, uten reklame,
        sporing eller andre skytjenester.
      </p>

      <h2 className={h2}>Hvem som er ansvarlig</h2>
      <p>
        Nightmare Realm drives av Øyvind Sandåker, som er behandlingsansvarlig for
        personopplysningene. Spørsmål om personvern sender du til{" "}
        <a className={lenke} href={EPOST}>
          oyvind@zoney.no
        </a>
        .
      </p>

      <h2 className={h2}>Hva som lagres</h2>
      <ul className={ul}>
        <li>
          Ingen informasjonskapsler, ingen innlogging, ingen analyseverktøy og ingen sporing.
          Spillet lagrer heller ingenting i nettleseren din.
        </li>
        <li>
          Når du besøker sida, logger serveren det som kommer inn: tidspunkt, IP-adressen din,
          hvilken side du ba om, nettleseren, språket den er satt til, og hvilket nettsted du kom
          fra. Det er for å beskytte tjenesten mot angrep og rette feil. Loggen ligger kryptert hos
          oss, bare den som drifter tjenesten ser den, og den slettes etter 30 dager. Det som blir
          igjen etterpå, er bare antall per dag (for eksempel hvor mange som så en side, eller
          brukte mobil), og det kan ikke knyttes til noen.
        </li>
      </ul>
      <p className="mt-4">
        Grunnlaget for loggen er vår berettigede interesse i å holde tjenesten trygg og i drift
        (GDPR artikkel 6 nr. 1 f). Ingenting selges, og ingenting brukes til reklame eller AI.
      </p>

      <h2 className={h2}>Hvor dataene ligger, og hvem som hjelper oss</h2>
      <p>
        Spillet kjører på én server vi leier av <strong>Hetzner Online GmbH</strong> (Tyskland),
        i datasenteret deres i Tuusula ved Helsingfors i Finland. Ingenting lagres eller behandles
        utenfor EU/EØS.
      </p>
      <ul className={`${ul} mt-2`}>
        <li>Vi har en databehandleravtale med Hetzner etter GDPR artikkel 28, inngått 1. november 2026.</li>
        <li>
          Hetzner er sertifisert etter ISO/IEC 27001 og BSI C5 Type 2. TÜV Rheinland kontrollerte
          sikkerhetstiltakene i datasenteret i Finland 19. februar 2026 og fant ingen avvik.
        </li>
        <li>
          Hetzner leier ut maskinen, men har ikke tilgang til dataene: disken er kryptert, og
          nøkkelen lagres ikke hos dem.
        </li>
      </ul>
      <p className="mt-4">
        Vi bruker ingen andre tjenester som får personopplysninger: ingen analyse, ingen
        innholdsnettverk og ingen eksterne skrifttyper. Let&apos;s Encrypt lager sertifikatet for
        den sikre forbindelsen og får bare vite domenenavnet.
      </p>

      <h2 className={h2}>Slik beskytter vi dataene</h2>
      <ul className={ul}>
        <li>All trafikk går kryptert (HTTPS).</li>
        <li>Hele disken på serveren er kryptert.</li>
        <li>Spillet kjører avskjermet, uten tilgang til nettet og uten tilgang til andre apper.</li>
        <li>Serveren får sikkerhetsoppdateringer automatisk hver natt.</li>
      </ul>

      <h2 className={h2}>Hvor lenge vi tar vare på det</h2>
      <ul className={ul}>
        <li>
          <strong>Logger på serveren:</strong> 30 dager.
        </li>
      </ul>

      <h2 className={h2}>Rettighetene dine</h2>
      <p>
        Du har rett til innsyn i det vi har lagret om deg, til å få rettet feil, til å få det
        slettet, til å få det utlevert og til å protestere mot behandlingen. Skriv til{" "}
        <a className={lenke} href={EPOST}>
          oyvind@zoney.no
        </a>
        , så svarer vi innen en måned.
      </p>
      <p className="mt-4">
        Mener du at vi behandler personopplysninger i strid med reglene, kan du klage til{" "}
        <a className={lenke} href="https://www.datatilsynet.no">
          Datatilsynet
        </a>
        .
      </p>

      <p className="mt-8 text-sm text-slate-500">Sist endret {SIST_ENDRET}.</p>
    </main>
  );
}
