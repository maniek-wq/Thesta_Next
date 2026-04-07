export type Locale = "pl" | "en";

export const defaultLocale: Locale = "pl";

export const messages = {
  pl: {
    nav: {
      home: "Strona główna",
      offer: "Oferta",
      news: "Aktualności",
      contact: "Kontakt",
      about: "O nas",
      aboutOverview: "Wprowadzenie",
      aboutCertificates: "Certyfikaty",
      aboutProjects: "Realizacje",
      aboutPartners: "Partnerzy",
      privacy: "Polityka prywatności",
      cookies: "Polityka plików cookies",
      menu: "Menu",
      menuOpen: "Otwórz menu nawigacji",
      menuClose: "Zamknij menu nawigacji",
      linkedin: "LinkedIn",
      linkedinAria:
        "Thesta — profil firmy na LinkedIn (otwiera się w nowej karcie)",
    },
    dock: {
      call: "Zadzwoń",
      book: "Umów się",
      backToTop: "Do góry",
      barAria: "Szybkie działania: telefon, kontakt, oferta, powrót na górę",
    },
    brand: {
      name: "Thesta",
      tagline: "Elektronika morska",
    },
    radar: {
      status: "Inicjalizacja systemu…",
    },
    home: {
      hero: {
        areas: "Nawigacja · Łączność · Hydrografia",
        eyebrow:
          "INS, GNSS, radary i ECDIS — precyzyjna pozycja i świadomość sytuacji na morzu, od podejścia do portu po operacje taktyczne.",
        title:
          "Zaawansowane systemy nawigacji, łączności i hydrografii dla jednostek morskich",
        lead:
          "Thesta wspiera Marynarkę Wojenną oraz flotę cywilną w projektowaniu, dostawach, integracji i serwisie systemów INS, GNSS, radarów oraz ECDIS/WECDIS.",
        meta: "Projekt · dostawa · integracja · serwis",
        ctaContact: "Skontaktuj się z nami",
        ctaOffer: "Zobacz ofertę",
        scrollHint: "Przewiń w dół",
        backgroundSlides: [
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2400&q=80",
        ],
      },
      introPanels: {
        scrollHint: "Przewiń w dół",
        skip: "Pomiń intro",
        regionLabel: "Wprowadzenie",
        panels: [
          {
            title: "Nawigacja",
            tagline:
              "Ponad 15 lat doświadczenia — integracje dla MW RP, przemysłu obronnego i żeglugi",
            body: "INS, GNSS, radary i ECDIS — precyzyjna pozycja i świadomość sytuacji na morzu, od podejścia do portu po operacje taktyczne.",
            image:
              "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Łączność",
            tagline:
              "Projekt, dostawa, integracja i serwis — jeden zespół przy stole z klientem",
            body: "VSAT, łączność pokładowa oraz pasma HF/VHF/UHF — niezawodne łącze, gdy misja nie może pozwolić sobie na ciszę w eterze.",
            image:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Hydrografia",
            tagline:
              "Sonary i batymetria — m.in. partner Kraken Robotics, realizacje na potrzeby MW RP",
            body: "Sonary, echosondy wielowiązkowe i platformy USV/AUV — mapowanie dna, środowisko i dane pod decyzje nawigacyjne oraz planowanie.",
            image:
              "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          },
        ],
      },
      servicesSection: {
        title: "Zakres usług",
        kicker: "Projekt · dostawa · integracja · serwis",
        link: "Pełna oferta",
      },
      services: {
        nav: {
          title: "Nawigacja",
          body: "Systemy INS/GNSS, radary morskie oraz ECDIS/WECDIS zapewniające precyzyjne prowadzenie jednostek w każdych warunkach.",
          tags: "INS · GNSS · Radary · ECDIS",
        },
        comms: {
          title: "Łączność",
          body: "Rozwiązania VSAT, łączność wewnątrzokrętowa i radiowa dla misji wymagających niezawodnej komunikacji.",
          tags: "VSAT · Pokładowa · HF/VHF/UHF",
        },
        hydro: {
          title: "Hydrografia i środowisko",
          body: "Systemy sonarowe, echosondy wielowiązkowe, USV/AUV oraz rozwiązania wspierające ochronę środowiska.",
          tags: "Sonary · Echosondy · USV/AUV",
        },
      },
      stats: {
        title: "Kluczowe wskaźniki",
        years: "Lat doświadczenia",
        projects: "Zrealizowanych projektów",
        focus: "Skupienie na sektorze morskim",
      },
      news: {
        heading: "Co nowego",
        title: "Aktualności",
        all: "Wszystkie aktualności",
        readMore: "Czytaj więcej +",
        seeMore: "Zobacz więcej…",
        carouselDotsAria: "Wskaźnik stron aktualności",
        carouselPrevAria: "Poprzednia strona aktualności",
        carouselNextAria: "Następna strona aktualności",
        modalClose: "Zamknij",
        modalImageCaption: "Miejsce na zdjęcie (placeholder)",
        items: [
          {
            date: "Marzec 2026",
            tag: "Partnerstwo",
            title: "Thesta 🤝 Kraken Robotics — zamówienie na potrzeby MW RP",
            excerpt:
              "Kraken Robotics: kontrakty ~24 mln USD. Jedno ze zleceń złożyła Thesta; sprzęt trafi do Marynarki Wojennej RP.",
            imageKey: "tom9331News1",
            imageAlt:
              "Współpraca Thesta i Kraken Robotics — sprzęt dla Marynarki Wojennej RP",
            modalBody:
              "17 marca kanadyjska spółka Kraken Robotics poinformowała o zawarciu umów dostaw swojego sprzętu za około 24 mln USD.\n\nJednym z zamówień złożonych w Kanadzie jest zamówienie złożone przez szczecińską spółkę Thesta, a zamówiony sprzęt docelowo trafi na potrzeby Marynarki Wojennej RP.\n\nPrzedstawicielem Kraken Robotics w naszym kraju jest firma Thesta, która została wyznaczona na autoryzowanego dystrybutora podczas ubiegłotygodniowych targów Oceanology International w Londynie.\n\nThesta 🤝 Kraken Robotics\n#TeamThesta\n\nWięcej:\nhttps://zbiam.pl/kraken-sprzedal-kolejne-sonary-i-wyposazenie-do-nich/\nhttps://lnkd.in/dQT6WK6i",
          },
          {
            date: "Marzec 2026",
            tag: "Kariera",
            title: "Thesta zatrudnia — #TeamThesta is hiring!",
            excerpt:
              "Poszerzamy zespół. Sprawdź aktualne oferty pracy Thesta na LinkedIn.",
            modalBody:
              "Thesta poszukuje nowych osób do zespołu — pracujemy przy projektach dla Marynarki Wojennej i przemysłu morskiego, w obszarze elektroniki okrętowej, nawigacji i hydrografii.\n\n#TeamThesta is hiring!\n\nOferty i szczegóły:\nhttps://lnkd.in/gpb97RHR",
            imageKey: undefined,
            imageAlt: undefined,
          },
          {
            date: "Marzec 2026",
            tag: "Dostawy",
            title:
              "Umowa z KPWG — wyposażenie dla BBSP MW RP i sonaru holowanego KATFISH",
            excerpt:
              "9 marca Thesta podpisała umowę z Komendą Portu Wojennego Gdynia na dostawy m.in. dla sonaru holowanego Kraken Robotics w systemie KATFISH.",
            imageKey: "thumb790x400Katfish",
            imageAlt:
              "System sonaru holowanego KATFISH Kraken Robotics — kontekst umowy z KPWG",
            modalBody:
              "Mająca siedzibę w Szczecinie spółka Thesta podpisała 9 marca umowę z Komendą Portu Wojennego Gdynia w sprawie dostaw technicznych środków materiałowych dla bezzałogowców używanych przez siły polskiej Marynarki Wojennej. Mowa tu o wyposażeniu dla sonaru holowanego Kraken Robotics, który jest częścią systemu hydrolokacyjnego KATFISH.\n\n#TeamThesta\nhttps://lnkd.in/dG9dtk5h",
          },
          {
            date: "Luty 2026",
            tag: "Targi",
            title: "Współpraca z Exail i NORBIT na Oceanology International",
            excerpt:
              "Spotkania z partnerami biznesowymi podczas targów w Londynie.",
            modalBody:
              "Podczas Oceanology International w Londynie odbyły się spotkania z partnerami Exail i NORBIT. Relacja szczegółowa i galeria pojawią się wkrótce — poniższy blok graficzny to placeholder do późniejszej podmiany na zdjęcia z targów.",
            imageKey: undefined,
            imageAlt: undefined,
          },
        ],
      },
      faq: {
        title: "Najczęściej zadawane pytania",
        items: [
          {
            q: "Dla kogo są usługi Thesta?",
            a: "Świadczymy usługi dla Marynarki Wojennej, jednostek specjalistycznych oraz floty cywilnej – w zakresie nawigacji, łączności i hydrografii. Oferujemy projektowanie, dostawy, integrację i serwis systemów INS/GNSS, radarów, ECDIS/WECDIS oraz systemów hydrolokacyjnych.",
          },
          {
            q: "Jak mogę skontaktować się z Thesta?",
            a: "Skorzystaj z formularza kontaktowego na stronie lub napisz na biuro@thesta.pl, zadzwoń pod +48 725 105 207. Biuro mieści się w Szczecinie przy ul. Janiny Smoleńskiej ps. „Jachna” 17. Godziny otwarcia: pon.–pt. 07:00–15:00.",
          },
          {
            q: "Czy Thesta realizuje projekty dla jednostek zagranicznych?",
            a: "Tak. Współpracujemy z partnerami międzynarodowymi i realizujemy projekty także poza Polską, w tym integrację systemów i wsparcie techniczne dla flot wojskowych i cywilnych.",
          },
          {
            q: "Jak wygląda typowy przebieg współpracy?",
            a: "Zaczynamy od rozmowy o potrzebach i wymaganiach. Następnie przygotowujemy koncepcję i warianty rozwiązań, potem realizujemy projekt, integrację i uruchomienie na jednostce. Po wdrożeniu oferujemy serwis i szkolenia.",
          },
        ],
      },
      contact: {
        title: "Skontaktuj się z nami",
        body: "Opowiedz nam o swojej jednostce, planowanej modernizacji lub nowym projekcie – przygotujemy propozycję dopasowaną do profilu misji i wymagań technicznych.",
        company:
          "Thesta sp. z o.o. sp.k. · Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin",
        phoneLabel: "tel.",
        formCta: "Formularz kontaktowy",
      },
      process: {
        kicker: "Proces współpracy",
        heading: "Od rozmowy do wsparcia operacyjnego",
        hint: "Kliknij w etap, aby zobaczyć szczegóły.",
        steps: [
          {
            title: "Rozmowa i zbieranie wymagań",
            body: "Zaczynamy od rozmowy o jednostce, profilu misji i istniejącej infrastrukturze pokładowej. Omawiamy priorytety, ograniczenia harmonogramowe i wymagania klasyfikacyjne — tak by propozycja była dopasowana do realnych warunków operacyjnych, a nie do katalogu produktów.",
            tags: ["Jednostka", "Misja", "Infrastruktura"],
          },
          {
            title: "Dobór rozwiązań i koncepcja",
            body: "Przygotowujemy warianty konfiguracji systemów nawigacji, łączności i hydrografii dopasowane do profilu misji. Analizujemy dostępne technologie, wymagania norm i możliwości integracji — klient otrzymuje porównanie opcji z uzasadnieniem technicznym.",
            tags: ["Konfiguracja", "Warianty", "Analiza"],
          },
          {
            title: "Projekt, integracja, uruchomienie",
            body: "Opracowujemy kompletną dokumentację techniczną i przeprowadzamy integrację z systemami okrętowymi. Każdy etap kończy się próbami — w tym testami na morzu — a protokoły odbioru potwierdzają zgodność z wymaganiami klienta i wymaganiami klasy.",
            tags: ["Dokumentacja", "Integracja", "Testy morskie"],
          },
          {
            title: "Wsparcie serwisowe i szkolenia",
            body: "Zapewniamy serwis gwarancyjny i pogwarancyjny, umowy AMC/SLA oraz szkolenia operatorskie i techniczne dla załóg. Jesteśmy dostępni przez cały cykl życia systemu — od pierwszego uruchomienia do planowej modernizacji.",
            tags: ["Serwis", "SLA", "Szkolenie załóg"],
          },
        ],
      },
      testimonials: {
        eyebrow: "Opinie klientów",
        title: "Co mówią operatorzy i armatorzy",
        intro:
          "Pracujemy dla jednostek wojskowych i cywilnych, które oczekują stabilnych systemów nawigacji, łączności i hydrografii – poniżej wybrane opinie naszych klientów.",
        items: [
          {
            quote:
              "Thesta sprawnie przeprowadziła modernizację systemów nawigacyjnych na naszych okrętach. Doceniamy przejrzystą komunikację i szybkie reagowanie na uwagi załogi.",
            role: "Oficer nawigacyjny",
            org: "Jednostka Marynarki Wojennej RP",
          },
          {
            quote:
              "Współpraca przy wdrożeniu sonarów holowanych przebiegła zgodnie z harmonogramem, a wsparcie serwisowe po uruchomieniu stoi na bardzo wysokim poziomie.",
            role: "Kierownik projektu",
            org: "Okręt hydrograficzny floty cywilnej",
          },
          {
            quote:
              "Thesta potrafi połączyć wymagania taktyczne z realiami pracy załogi. Dostarczone rozwiązania są dopracowane i dobrze udokumentowane, co ułatwia eksploatację.",
            role: "Szef służb technicznych",
            org: "Armator specjalistyczny",
          },
        ],
      },
    },
    footer: {
      rights: "Wszystkie prawa zastrzeżone.",
      offer: "Oferta",
      news: "Aktualności",
      about: "O nas",
      contact: "Kontakt",
      privacy: "Polityka prywatności",
      cookies: "Polityka cookies",
    },
    cookies: {
      text: "Ta strona używa plików cookies (w tym niezbędnych do działania). Możesz zaakceptować wszystkie lub odrzucić nieistotne.",
      reject: "Odrzuć nieistotne",
      accept: "Akceptuję",
    },
    contactPage: {
      title: "Kontakt",
      sectionKicker: "Kontakt",
      headline: "Porozmawiajmy o projekcie",
      intro:
        "Opisz zakres — typ jednostki, systemy, harmonogram. Odpowiemy z koncepcją i wstępną wyceną w ciągu 1–2 dni roboczych.",
      addressHeading: "Adres",
      addressLine1: "Janiny Smoleńskiej ps. „Jachna” 17",
      addressLine2: "71-005 Szczecin",
      mapHeading: "Mapa",
      mapIframeTitle: "Mapa Google — lokalizacja biura Thesta",
      openInMaps: "Otwórz w Google Maps",
      formHeading: "Wyślij wiadomość",
      contactAsideTitle: "Dane kontaktowe",
      formDisclaimer: "Formularz demo — nie przesyłaj danych poufnych",
      faqHeading: "Częste pytania",
      faqItems: [
        {
          q: "Dla kogo są wasze usługi?",
          a: "Świadczymy usługi dla Marynarki Wojennej, jednostek specjalistycznych oraz floty cywilnej – w zakresie nawigacji, łączności i hydrografii. Oferujemy projektowanie, dostawy, integrację i serwis systemów INS/GNSS, radarów, ECDIS/WECDIS oraz systemów hydrolokacyjnych.",
        },
        {
          q: "Czy realizujecie projekty zagraniczne?",
          a: "Tak. Współpracujemy z partnerami międzynarodowymi i realizujemy projekty także poza Polską, w tym integrację systemów i wsparcie techniczne dla flot wojskowych i cywilnych.",
        },
        {
          q: "Jak wygląda typowy przebieg współpracy?",
          a: "Zaczynamy od rozmowy o potrzebach i wymaganiach. Następnie przygotowujemy koncepcję i warianty rozwiązań, potem realizujemy projekt, integrację i uruchomienie na jednostce. Po wdrożeniu oferujemy serwis i szkolenia.",
        },
        {
          q: "Jaki jest typowy czas realizacji projektu?",
          a: "Zależy od zakresu: od kilku tygodni przy prostszych dostawach po wiele miesięcy przy pełnej integracji mostka. Po rozmowie wstępnej przekazujemy orientacyjny harmonogram i kamienie milowe.",
        },
      ],
      form: {
        name: "Imię i nazwisko",
        namePlaceholder: "Jan Kowalski",
        email: "E-mail",
        emailPlaceholder: "jan@firma.pl",
        organization: "Organizacja",
        organizationPlaceholder: "Nazwa firmy / instytucji",
        inquiry: "Opis zapytania",
        messagePlaceholder:
          "Typ jednostki, wymagane systemy, harmonogram, budżet orientacyjny...",
        message: "Wiadomość",
        submit: "Wyślij zapytanie",
        consent:
          "Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu w celu udzielenia odpowiedzi na zapytanie. Zapoznałem(-am) się z informacjami w",
        consentPolicyLink: "Polityce prywatności",
      },
    },
    offerPage: {
      title: "Oferta",
      headline: "Produkty i usługi",
      sectionKicker: "Oferta",
      intro:
        "Dostarczamy sprzęt czołowych producentów oraz kompleksowe usługi inżynierskie — od projektu przez integrację po wieloletni serwis.",
      metaLine: "PRODUKTY · INTEGRACJA · SERWIS · SZKOLENIA",
      productsTitle: "Produkty",
      servicesTitle: "Usługi",
      productsDescriptor: "— sprzęt i systemy od wiodących producentów",
      servicesDescriptor: "— integracja, serwis i szkolenia",
      backLink: "Wróć",
      ctaKicker: "Oferta · CTA",
      ctaTitle: "Potrzebujesz konkretnej konfiguracji?",
      ctaBody:
        "Opisz typ jednostki i zakres — przygotujemy koncepcję techniczną i wstępną wycenę.",
      ctaPrimary: "Zapytaj o ofertę",
      ctaSecondary: "Usługi",
      productCategories: [
        {
          title: "Nawigacja",
          listTitle: "Systemy INS / GNSS",
          itemSlugs: ["ins", "odbiorniki-gnss"],
        },
        {
          title: "Łączność",
          listTitle: "Terminale VSAT i radiostacje",
          itemSlugs: [
            "vsat",
            "lacznosc-wewnetrzna-okretowa",
            "lacznosc-radiowa",
          ],
        },
        {
          title: "Hydrografia",
          listTitle: "Sonary i echosondy MBES",
          itemSlugs: ["echosondy-wielowiazowe", "pojazdy-podwodne-rov-auv"],
        },
        {
          title: "Nawigacja",
          listTitle: "ECDIS / WECDIS / Radary",
          itemSlugs: ["systemy-nawigacyjne", "oswietlenie-nawigacyjne"],
        },
        {
          title: "Hydrografia",
          listTitle: "Platformy bezzałogowe USV / AUV",
          itemSlugs: ["nawodne-pojazdy-bezalogowe-usv", "t-bwss"],
        },
      ],
      serviceSlugs: ["projektowanie", "uruchomienia", "szkolenia"],
      serviceOfferCards: [
        {
          slug: "projektowanie",
          cardTitle: "Integracja systemów",
          cardSubtitle: "System engineering, projektowanie i wdrożenie",
          code: "S01",
          cover: {
            kind: "bridge",
            eyebrowSmall: "IBS",
            eyebrowWide: "INTEGRATED BRIDGE",
            systemTags: [
              "CMS",
              "GMDSS",
              "RADAR",
              "AIS",
              "ECDIS",
              "GYRO",
              "SMS",
            ],
            protocolLine: "NMEA 2000",
          },
        },
        {
          slug: "uruchomienia",
          cardTitle: "Serwis i utrzymanie",
          cardSubtitle: "Serwis techniczny 24/7, AMC, części zamienne",
          code: "S02",
          cover: {
            kind: "stats",
            cells: [
              { primary: "SLA / AMC" },
              { primary: "24/7" },
              { primary: "99.9%", secondary: "UPTIME" },
              { primary: "SPARE PARTS" },
            ],
          },
        },
        {
          slug: "szkolenia",
          cardTitle: "Szkolenia załóg",
          cardSubtitle: "Szkolenia operatorskie i inżynierskie",
          code: "S03",
          cover: {
            kind: "certs",
            primary: "STCW",
            secondary: "CERTIFIED",
          },
        },
      ],
    },
    productPages: {
      backToOffer: "Wróć do oferty",
      placeholderCaption: "Miejsce na zdjęcie (placeholder)",
      bySlug: {
        "systemy-nawigacyjne": {
          title: "Systemy nawigacyjne",
          intro:
            "Zintegrowane systemy nawigacyjne łączą pozycjonowanie satelitarne, czujniki pokładowe i warstwę wizualizacji, aby załoga miała spójny obraz pozycji, kursu i otoczenia — od podejścia do portu po długotrwałe patrolowanie.",
          blocks: [
            {
              caption: "Integracja mostka",
              body: "Dobór i spięcie ECDIS/WECDIS, radarów oraz interfejsów NMEA zapewnia jednolite źródło danych dla oficerów wachtowych. Thesta wspiera dobór sprzętu, okablowanie logiczne oraz testy akceptacyjne na jednostce.",
            },
            {
              caption: "Bezpieczeństwo operacyjne",
              body: "Walidacja konfiguracji alarmów, redundancji wyświetlaczy i polityk aktualizacji map redukuje ryzyko błędów ludzkich. Przy modernizacjach planujemy etapy przejściowe, by nie wyłączać krytycznych funkcji mostka dłużej niż to konieczne.",
            },
          ],
        },
        "oswietlenie-nawigacyjne": {
          title: "Oświetlenie nawigacyjne",
          intro:
            "Prawidłowe światła pozycyjne, masztowe i specjalne są warunkiem bezpiecznej nawigacji nocnej i zgodności z przepisami COLREG. Dobór mocy, kolorów i kątów świecenia musi uwzględniać geometrię jednostki oraz zakłócenia od nadbudówek.",
          blocks: [
            {
              caption: "Dobór opraw",
              body: "Projektujemy rozmieszczenie latarni z uwzględnieniem zasięgu widzialnego, zużycia energii i dostępu serwisowego. Współpracujemy z producentami certyfikowanych lamp LED oraz klasycznych rozwiązań halogenowych tam, gdzie wymagają tego przepisy lub klient.",
            },
            {
              caption: "Pomiary i odbiory",
              body: "Po montażu weryfikujemy zgodność z dokumentacją klasyfikacyjną i przeprowadzamy próby zgodnie z harmonogramem stoczni lub jednostki w służbie. Dokumentujemy parametry, by ułatwić przyszłe audyty i przedłużenie certyfikatów.",
            },
          ],
        },
        ins: {
          title: "INS",
          intro:
            "Nawigacja inercyjna uzupełnia GNSS tam, gdzie sygnał satelitarny jest zakłócany lub zasłonięty — pod mostkami, w kanale czy w rejonach o podwyższonym ryzyku jammingu. Spójny łańcuch INS+GNSS jest standardem na jednostkach o podwyższonych wymaganiach.",
          blocks: [
            {
              caption: "Kalibracja i biegi próbne",
              body: "Prawidłowa inicjalizacja żyroskopów i kontrola dryftu wymagają procedur na spokojnej wodzie oraz odczytów referencyjnych. Thesta prowadzi uruchomienia, szkolenia operatorów i checklisty zgodne z dokumentacją producenta.",
            },
            {
              caption: "Integracja z GNSS i ECDIS",
              body: "Sygnały pozycji i kursu muszą być priorytetyzowane i monitorowane pod kątem spójności. Konfigurujemy przełączanie źródeł, alarmy rozbieżności oraz logowanie zdarzeń dla późniejszej analizy.",
            },
          ],
        },
        "odbiorniki-gnss": {
          title: "Odbiorniki GNSS",
          intro:
            "Odbiorniki wielosystemowe zapewniają redundancję pasm i konstelacji, a w wariantach wojskowych — dodatkowe warstwy autoryzacji i odporności. Dobór anten, filtrów i okablowania ma bezpośredni wpływ na dostępność pozycji na pokładzie.",
          blocks: [
            {
              caption: "Anteny i osłona EM",
              body: "Umiejscowienie anten poza strefą cienia nadbudówek oraz ekranowanie przewodów ogranicza szum i odbicia. Dobieramy zestawy pod kątem jednostek patrolowych, hydrograficznych i pomocniczych o różnej tonarzu.",
            },
            {
              caption: "Konfiguracja i aktualizacje",
              body: "Zarządzanie kluczami, firmware’em i polityką aktualizacji jest kluczowe dla utrzymania zgodności. Dokumentujemy wersje oprogramowania i procedury rollbacku na wypadek problemów w locie.",
            },
          ],
        },
        vsat: {
          title: "VSAT",
          intro:
            "Łączność satelitarna VSAT umożliwia przesył danych i głosu poza zasięgiem brzegowych sieci — niezbędna w długich patrolach, operacjach logistycznych i współpracy z dowodzeniem. Dobór terminala, kopuły i planu tarifowego zależy od profilu misji.",
          blocks: [
            {
              caption: "Terminal i instalacja pokładowa",
              body: "Analizujemy przestrzeń na maszcie lub nadbudówce pod kątem pola widzenia, obciążeń wiatrem oraz serwisu. Montaż kopuły i prowadzenie przewodów RF/wewnętrznych wykonujemy zgodnie z wytycznymi producenta i klasyfikacji.",
            },
            {
              caption: "Sieć i bezpieczeństwo",
              body: "Segmentacja ruchu operacyjnego i biurowego, VPN oraz monitoring dostępności łącza zmniejszają ryzyko przestojów. Pomagamy w konfiguracji routerów pokładowych i integracji z istniejącą infrastrukturą IT jednostki.",
            },
          ],
        },
        "lacznosc-wewnetrzna-okretowa": {
          title: "Łączność wewnątrzokrętowa",
          intro:
            "Systemy wewnątrzokrętowe — od prostych rozgłośni po zintegrowane PAGA i dystrybucję alarmów — zapewniają komunikację między działami i stanowiskami bojowymi. Niezawodność przewyższa estetykę: proste interfejsy skracają czas reakcji załogi.",
          blocks: [
            {
              caption: "Projekt akustyczny i strefy",
              body: "Dzielimy jednostkę na strefy nagłaśniania i alarmowe z uwzględnieniem hałasu maszynowni oraz wymogów SŁUCH. Dobór głośników i mikrofonów antyszumowych poprawia zrozumiałość komunikatów.",
            },
            {
              caption: "Integracja z alarmami",
              body: "Powiadomienia pożarowe, uszczelnieniowe i maszynowe muszą trafiać na właściwe stanowiska z priorytetyzacją. Współpracujemy z automatiką okrętową, by uniknąć konfliktów sygnałów i podwójnych komunikatów.",
            },
          ],
        },
        "lacznosc-radiowa": {
          title: "Łączność radiowa",
          intro:
            "Pasma HF, VHF i UHF oraz systemy GMDSS tworzą podstawę łączności krótkiego i dalekiego zasięgu. Prawidłowe anteny, uziemienia i protokoły wachtowe decydują o skuteczności w sytuacjach awaryjnych.",
          blocks: [
            {
              caption: "GMDSS i bezpieczeństwo",
              body: "Konfigurujemy radiotelefony wachtowe, EPIRB/AIS-SART zgodnie z wymaganiami dla klasy jednostki i strefy żeglugi. Szkolimy załogę z procedur testów okresowych i komunikacji z RCC.",
            },
            {
              caption: "Łączność taktyczna",
              body: "Dla jednostek o specjalnych profilach dobiera się kanały, szyfrowanie i sprzęt przystosowany do hałasu bojowego. Thesta wspiera integrację z pozostałymi systemami łączności i dokumentację dla odbiorów.",
            },
          ],
        },
        "nawodne-pojazdy-bezalogowe-usv": {
          title: "Nawodne pojazdy bezzałogowe (USV)",
          intro:
            "Platformy USV umożliwiają pomiary hydrograficzne, monitoring i transport ładunków testowych bez narażania załogi. Autonomia, łączność nadzorująca i redundancja napędu są kluczowe przy pracy w estuarium i na otwartym morzu.",
          blocks: [
            {
              caption: "Łącze i nawigacja USV",
              body: "Integracja odbiorników GNSS, INS oraz łączy radiowych lub satelitarnych zapewnia telemetrię i możliwość przejęcia kontroli. Projektujemy stacje bazowe i procedury awaryjnego powrotu jednostki.",
            },
            {
              caption: "Payload pomiarowy",
              body: "Montaż sonaru lub lidaru wymaga stabilizacji platformy i synchronizacji czasu. Wspieramy dobór żurawi, adapterów i zasilania pod konkretne sensory i producentów.",
            },
          ],
        },
        "echosondy-wielowiazowe": {
          title: "Echosondy wielowiązkowe",
          intro:
            "Wielowiązkowe echosondy skracają czas pokrycia dna przy zachowaniu wysokiej rozdzielczości — standard w nowoczesnej hydrografii państwowej i komercyjnej. Jakość danych zależy od kalibracji, motion sensorów i kompensacji prędkości dźwięku.",
          blocks: [
            {
              caption: "Kalibracja i patch test",
              body: "Przeprowadzamy testy offsetów, opóźnień i barcheck zgodnie z procedurami IHO tam, gdzie mają zastosowanie. Dokumentacja pomiarów ułatwia akceptację przez zamawiającego.",
            },
            {
              caption: "Przetwarzanie i archiwizacja",
              body: "Konfiguracja formatów eksportu, metadanych i polityki kopii zapasowych chroni przed utratą transectów. Integrujemy systemy z oprogramowaniem przetwarzania batimetrii u klienta.",
            },
          ],
        },
        "pojazdy-podwodne-rov-auv": {
          title: "Pojazdy podwodne (ROV/AUV)",
          intro:
            "ROV i AUV służą inspekcji podwodnej infrastruktury, sonarowi oraz zadaniom EOD i badawczym. Niezawodny napęd, oświetlenie, tether lub autonomia energetyczna wymagają ścisłej współpracy z systemem nawigacji nadrzędnej.",
          blocks: [
            {
              caption: "Nawigacja względna i bezwzględna",
              body: "Łączenie USBL/LBL z INS pojazdu oraz filtracja pozycji poprawia stabilność toru. Dobieramy sensory pod głębokość, prędkość prądu i przeźroczystość wody.",
            },
            {
              caption: "Integracja sonaru",
              body: "Synkronizacja czasu i triggerów między platformą a głowicą sonarową jest krytyczna dla jakości mozaik. Wspieramy montaż, okablowanie hydrograficzne i testy w basenie lub na miejscu operacji.",
            },
          ],
        },
        "t-bwss": {
          title: "T-BWSS",
          intro:
            "Systemy typu T-BWSS wspierają monitoring środowiska wodnego — parametry fizykochemiczne, czasem zdarzenia alarmowe dla portów i instalacji offshore. Stabilność czujników, kalibracja i transmisja danych do brzegu decydują o wartości pomiaru.",
          blocks: [
            {
              caption: "Stacja pomiarowa",
              body: "Dobór sond, koszy ochronnych i systemów antykolizyjnych zależy od lokalizacji (falochron, tor wodny, terminal). Zapewniamy zasilanie, ochronę przed biofoulingiem i dostęp serwisowy z pokładu lub z brzegu.",
            },
            {
              caption: "Telemetria i integracja",
              body: "Przesył danych przez radiolinie lub IoT satelitarne oraz prezentacja na SCADA u klienta ułatwiają reakcję służb. Projektujemy proste dashboardy i progi alarmowe zgodne z wymaganiami środowiskowymi umowy.",
            },
          ],
        },
      },
    },
    servicePages: {
      backToOffer: "Wróć do oferty",
      placeholderCaption: "Miejsce na zdjęcie (placeholder)",
      cta: {
        label: "Porozmawiajmy o zakresie",
        href: "/contact",
      },
      bySlug: {
        projektowanie: {
          title: "Projektowanie",
          intro:
            "Wykonujemy projekty instalacji i integracji systemów nawigacyjnych oraz hydrograficznych — od koncepcji do dokumentacji pod instalację i odbiór. Działamy zgodnie z normami i wymaganiami klienta; na bazie projektu zespół realizuje niestandardowe rozwiązania i nadzoruje jakość prac na jednostce.",
          blocks: [
            {
              caption: "Standardy, normy i narzędzia projektowe",
              media: "none",
              body:
                "Projekty wykonujemy zgodnie z obowiązującymi standardami i normami, w tym normami obronnymi (m.in. decyzja nr 207/MON z 31 grudnia 2021 r. w sprawie instrukcji dotyczących dokumentacji technicznej uzbrojenia i sprzętu wojskowego). Wykorzystujemy narzędzia CAD oraz modelowanie 3D, aby precyzyjnie odwzorować rozmieszczenie sprzętu i trasy kablowe.",
            },
            {
              caption: "Typowe elementy dokumentacji projektowej",
              media: "none",
              body: "",
              bullets: [
                "Rozmieszczenie urządzeń i opraw mechanicznych",
                "Trasy i listy kablowe oraz zasilanie",
                "Schematy integracji sygnałów i interfejsów",
                "Specyfikacje techniczne i zestawienia materiałowe",
                "Uwzględnienie procedur i wymagań odbiorczych klienta",
              ],
            },
            {
              caption: "Projekty systemów nawigacyjnych",
              media: "none",
              body: "",
              bullets: [
                "Radar",
                "ECDIS/W-ECDIS",
                "Pozycjonowanie GNSS/GPS",
                "Tablica świateł nawigacyjnych",
                "Autopilot",
                "Navtex",
                "Echosonda",
                "Speed log",
                "Echosonda wielowiązkowa",
                "Nawigacja bezwładnościowa (INS)",
              ],
            },
            {
              caption: "Projekty systemów łączności",
              media: "none",
              body: "",
              bullets: [
                "Łączność satelitarna VSAT",
                "Łączność radiowa",
                "Rozgłośnia okrętowa",
                "Telefony bezbateryjne",
                "System RTV",
              ],
            },
          ],
        },
        uruchomienia: {
          title: "Uruchomienia",
          intro:
            "Nowy system wymaga integracji, konfiguracji i odbioru — zaplanowanych tak, by połączyć dostawców, podwykonawców, zamawiającego i użytkownika końcowego bez chaosu w harmonogramie.",
          blocks: [
            {
              caption: "Od przygotowania do przekazania do eksploatacji",
              media: "none",
              body:
                "Dla każdego systemu lub podsystemu przygotowujemy plan uruchomienia z jasnym podziałem ról. Poniżej typowy przebieg — szczegóły ustalamy pod konkretny kontrakt i platformę.",
              steps: [
                {
                  title: "Przygotowanie w siedzibie Thesta",
                  body:
                    "Integracja urządzeń „na biurku”, wstępna konfiguracja i testy ograniczają ryzyko na jednostce. Klient może nadzorować prace na tym etapie.",
                },
                {
                  title: "Mobilizacja i instalacja na miejscu",
                  body:
                    "Dostawa na jednostkę lub lokal u klienta, montaż zgodnie z projektem oraz podłączenie do infrastruktury pokładowej lub lądowej.",
                },
                {
                  title: "Integracja z istniejącymi systemami",
                  body:
                    "Współdziałanie z już eksploatowanymi systemami (NMEA, interfejsy producentów, redundantne źródła danych) — zgodnie z dokumentacją i ustalonymi punktami odbioru.",
                },
                {
                  title: "Testy funkcjonalne i scenariusze odbiorcze",
                  body:
                    "Weryfikacja zakresu umowy: sygnały, alarmy, rejestracja, scenariusze typowe dla danej klasy jednostki lub instalacji.",
                },
                {
                  title: "Protokół i przekazanie dokumentacji",
                  body:
                    "Potwierdzenie wykonania prac, przekazanie raportów i materiałów potrzebnych do eksploatacji i serwisu.",
                },
                {
                  title: "Szkolenie wstępne operatorów",
                  body:
                    "Krótki wstęp do obsługi po uruchomieniu — pełniejszy program szkoleniowy realizujemy odrębnie, jeśli jest w zakresie.",
                },
              ],
            },
            {
              caption: "Co zwykle przekazujemy po zakończeniu prac",
              media: "none",
              body: "",
              bullets: [
                "Raport z testów i założeń konfiguracyjnych",
                "Lista znanych ograniczeń i zaleceń serwisowych",
                "Materiały pod dalsze szkolenia i przekazanie wachtom",
                "Uzgodniony z klientem harmonogram i lista uczestników stron przy odbiorze",
              ],
            },
          ],
        },
        szkolenia: {
          title: "Szkolenia",
          intro:
            "Szkolenia domykają wdrożenie: przekazujemy wiedzę operatorom i technikom tak, aby sprzęt był używany bezpiecznie i zgodnie z procedurami.",
          blocks: [
            {
              caption: "Typowy przebieg",
              media: "none",
              body: "",
              steps: [
                {
                  title: "Ustalenie programu i odbiorców",
                  body:
                    "Dopasowujemy zakres do poziomu załogi (operator / technik / oficer), języka i czasu dostępnego na jednostce lub u klienta.",
                },
                {
                  title: "Część teoretyczna",
                  body:
                    "Zasady działania systemu, interfejs użytkownika, procedury awaryjne i najczęstsze scenariusze operacyjne.",
                },
                {
                  title: "Ćwiczenia przy sprzęcie",
                  body:
                    "Obsługa paneli, interpretacja alarmów, typowe czynności serwisowe pierwszego poziomu — według możliwości na żywo na zainstalowanym systemie.",
                },
                {
                  title: "Podsumowanie i materiały",
                  body:
                    "Checklisty, odsyłacze do dokumentacji producenta (jeśli dotyczy) oraz ustalenie kanału wsparcia po szkoleniu.",
                },
              ],
            },
            {
              caption: "Dla kogo i w jakiej formie",
              media: "none",
              body: "",
              bullets: [
                "Operatorzy mostku — codzienna obsługa ECDIS, radaru, INS itp.",
                "Technicy — diagnostyka podstawowa, wymiana modułów, kontakt z serwisem",
                "Sesje dla małych grup lub indywidualne — zależnie od specyfiki systemu",
              ],
            },
            {
              caption: "Gdzie prowadzimy szkolenia",
              media: "none",
              body: "",
              bullets: [
                "W siedzibie Thesta",
                "W miejscu wyznaczonym przez klienta",
                "Na jednostce po zakończonej instalacji lub integracji",
              ],
            },
            {
              caption: "Trenerzy Thesta i producenci",
              media: "none",
              body:
                "Prowadzimy szkolenia w oparciu o doświadczenie zespołu; na życzenie angażujemy trenerów producentów sprzętu dla głębszych, produktowych sesji.",
            },
          ],
        },
      },
    },
    newsPage: {
      kicker: "THESTA · AKTUALNOŚCI",
      heading: "Co nowego w Thesta",
      title: "Aktualności",
      intro: "Relacje z projektów, targów i współpracy z partnerami.",
      back: "Wróć do strony głównej",
      allTags: "Wszystkie",
      itemsCountLabel: "wpisy",
      tagsCountLabel: "tagi",
      emptyState: "Brak wpisów",
      loadOlder: "Wczytaj starsze — widok siatki",
      collapseToCarousel: "Powrót do przewijania",
      gridHeading: "Archiwum wpisów",
      carouselPrevAria: "Poprzednia strona aktualności",
      carouselNextAria: "Następna strona aktualności",
    },
    aboutPages: {
      common: {
        back: "Wróć do strony głównej",
      },
      hub: {
        title: "O nas",
        introTabLabel: "Wprowadzenie",
        intro:
          "Poznaj nasze uprawnienia, wybrane realizacje oraz partnerów technologicznych.",
        heroKicker: "O firmie",
        heroTitle:
          "Integrator elektroniki morskiej z ponad 15-letnim doświadczeniem",
        heroBody:
          "Thesta sp. z o.o. sp.k. to polski integrator systemów elektroniki morskiej. Projektujemy, dostarczamy, integrujemy i serwisujemy systemy nawigacji, łączności i hydrografii dla Marynarki Wojennej RP, przemysłu obronnego oraz żeglugi komercyjnej. Siedziba firmy mieści się w Szczecinie.",
        pillarsKicker: "Dlaczego Thesta",
        pillarsTitle: "Fundamenty naszego działania",
        pillars: [
          {
            num: "01",
            title: "Precyzja techniczna",
            body:
              "Każdy projekt zaczyna się od rzetelnej analizy wymagań. Nie sprzedajemy pudełek — projektujemy zintegrowane systemy dopasowane do konkretnej jednostki i misji.",
          },
          {
            num: "02",
            title: "Doświadczenie okrętowe",
            body:
              "Ponad 15 lat pracy z Marynarką Wojenną RP i flotą handlową. Znamy realia pokładowe, procedury odbioru i specyfikę środowiska morskiego.",
          },
          {
            num: "03",
            title: "Partnerstwa technologiczne",
            body:
              "Współpracujemy z wiodącymi producentami: Exail, NORBIT, Kraken Robotics, Raytheon Anschütz i innymi. Dobieramy technologię, nie markę.",
          },
          {
            num: "04",
            title: "Pełen cykl życia systemu",
            body:
              "Od koncepcji, przez integrację i testy morskie, po serwis i szkolenia. Jeden partner na każdym etapie — bez przekazywania odpowiedzialności.",
          },
        ],
        kpi: [
          {
            value: "15",
            suffix: "+",
            label: "Lat doświadczenia",
            sub: "w sektorze morskim",
          },
          {
            value: "120",
            suffix: "+",
            label: "Zrealizowanych projektów",
            sub: "dla MW RP i floty cywilnej",
          },
          {
            value: "100",
            suffix: "%",
            label: "Fokus na sektor morski",
            sub: "marine electronics only",
          },
        ],
        audienceKicker: "Odbiorcy",
        audienceTitle: "Dla kogo pracujemy",
        audienceCards: [
          {
            title: "Marynarka Wojenna RP",
            body:
              "Systemy nawigacji i łączności dla okrętów wojennych, integracja z systemami zarządzania walką, modernizacje.",
          },
          {
            title: "Przemysł obronny",
            body:
              "Wsparcie projektowe i integracyjne dla programów okrętowych, dostawy podsystemów, dokumentacja zgodna ze standardami NATO.",
          },
          {
            title: "Żegluga komercyjna",
            body:
              "ECDIS, GMDSS, VDR, systemy radarowe — dostawy, instalacja i serwis dla armatorów floty handlowej i rybackiej.",
          },
        ],
        subpagesKicker: "Szczegóły",
        subpagesTitle: "Certyfikaty, realizacje, partnerzy",
        certificatesDesc:
          "Koncesje MSWiA, certyfikacja WSK, wewnętrzny system kontroli i polityka jakości.",
        projectsDesc:
          "Instalacje, modernizacje i dostawy systemów nawigacji, łączności i hydrografii.",
        partnersDesc:
          "Wiodący producenci elektroniki okrętowej i technologii GNSS.",
        cta: "Przejdź",
        ctaBandTitle: "Chcesz porozmawiać o projekcie?",
        ctaBandButton: "Skontaktuj się",
      },
      certificates: {
        sectionKicker: "Certyfikaty",
        title: "Certyfikaty",
        sections: [
          {
            title: "Koncesja MSWiA",
            body:
              "W roku 2019 firma otrzymała koncesję MSWiA nr B-12/2019 na wykonywanie działalności gospodarczej w zakresie obrotu wyrobami o przeznaczeniu wojskowym lub policyjnym określonymi w pozycjach WT II – WT XII oraz WT XIV. W roku 2020 rozszerzono zakres działalności koncesjonowanej o wytwarzanie wyrobów o przeznaczeniu wojskowym lub policyjnym określonych w pozycjach WT II – WT XII oraz WT XIV pkt 1–4, pkt 9 oraz pkt 11–12 (decyzja 2 do koncesji).",
            download: {
              label: "Pobierz dokument koncesji",
              href: "#",
            },
          },
          {
            title: "Decyzje do koncesji MSWiA",
            body:
              "Aktualne brzmienie decyzji i załączników do koncesji przekazujemy kontrahentom na żądanie.",
          },
          {
            title: "Wewnętrzny System Kontroli",
            body:
              "We wrześniu 2022 r. firma Thesta wprowadziła Wewnętrzny System Kontroli w zakresie obrotu towarami o znaczeniu strategicznym, zgodnie z ustawą z dnia 29 listopada 2000 r. System został certyfikowany przez Centrum Certyfikacji Jakości WAT.",
          },
          {
            title: "Polityka jakości",
            body:
              "Polityka jakości Thesta określa standardy i procedury zapewniające wysoką jakość realizowanych usług i dostaw. Szczegóły udostępniamy partnerom na żądanie.",
          },
        ],
      },
      projects: {
        sectionKicker: "Realizacje",
        title: "Nasze realizacje",
        intro:
          "Wybrane projekty na rzecz Marynarki Wojennej RP oraz jednostek pokrewnych.",
        colUnit: "Jednostka",
        colScope: "Zakres prac",
        rows: [
          {
            unit: "B-7",
            lines: ["Instalacja rozgłośni ogólnookrętowej."],
          },
          {
            unit: "Holowniki serii B860",
            lines: [
              "Dostawa i uruchomienie wojskowych odbiorników GNSS/SAASM.",
            ],
          },
          {
            unit: "ORP Wodnik",
            lines: [
              "Kompleksowa modernizacja systemu nawigacji i łączności wewnątrz okrętowej.",
            ],
          },
          {
            unit: "ORP Kontradmirał Xawery Czernicki",
            lines: [
              "Naprawa systemu terminali satelitarnych VSAT Orbit Al7103.",
            ],
          },
          {
            unit: "MH-1/2/3/4",
            lines: [
              "Modernizacja pakietu hydrograficznego i integracja nowego systemu INS.",
            ],
          },
          {
            unit: "ORP Hydrograf",
            lines: [
              "Naprawa systemu terminali satelitarnych VSAT Orbit Al7103.",
            ],
          },
          {
            unit: "ORP Nawigator",
            lines: [
              "Naprawa systemu terminali satelitarnych VSAT Orbit Al7103.",
            ],
          },
          {
            unit: "Niszczyciele min klasy KORMORAN II",
            lines: [
              "Dostawa i uruchomienie następujących systemów:",
              "System Nawigacji Inercyjnej (INS)",
              "Wojskowy system pozycjonowania GNSS (SAASM)",
              "Terminale satelitarne VSAT",
            ],
          },
          {
            unit: "USV DriX",
            lines: [
              "Dostawa bezzałogowego pojazdu nawodnego dla Marynarki Wojennej RP.",
            ],
          },
          {
            unit: "USV Otter",
            lines: [
              "Dostawa bezzałogowego pojazdu nawodnego dla Akademii Marynarki Wojennej.",
            ],
          },
          {
            unit: "M/F Wolin",
            lines: ["Dostawa i instalacja systemu T-BWSS."],
          },
          {
            unit: "M/F Gryf",
            lines: ["Dostawa i instalacja systemu T-BWSS."],
          },
          {
            unit: "M/F Jan Śniadecki",
            lines: ["Dostawa i instalacja systemu T-BWSS."],
          },
          {
            unit: "Biuro Hydrograficzne MW",
            lines: [
              "Modernizacja serwerowni i infrastruktury sieciowej w budynku Biura Hydrograficznego Marynarki Wojennej.",
            ],
          },
        ],
      },
      partners: {
        title: "Partnerzy",
        eyebrow: "Współpraca strategiczna",
        partnerNavPrev: "Poprzedni partner",
        partnerNavNext: "Następny partner",
        intro:
          "Nasi partnerzy to uznani na świecie czołowi producenci elektroniki okrętowej. Dzięki bliskiej współpracy możemy zapewnić naszym klientom wsparcie techniczne oraz dostęp do zasobów naszych partnerów. Wymiana doświadczeń z naszymi partnerami pozwala nam nieustannie podnosić nasze kompetencje i konsekwentnie budować branżowy know-how.",
        logoPlaceholder: "Logo partnera",
        items: [
          {
            name: "Exail",
            body:
              "Exail to wiodąca grupa przemysłowa zajmująca się zaawansowanymi technologiami, specjalizująca się w najnowocześniejszej robotyce, technologiach morskich, nawigacyjnych, lotniczych i fotonicznych. Dzięki kulturze przedsiębiorczości Exail zapewnia niezrównaną wydajność, niezawodność i bezpieczeństwo swoim klientom cywilnym i wojskowym działającym w trudnych warunkach. Od głębin morskich po kosmos, Exail rozszerza swoje możliwości dzięki pełnej gamie solidnych komponentów, produktów i systemów wytwarzanych we własnym zakresie. Zatrudniając 1500 pracowników na całym świecie, firma korzysta z globalnego zasięgu i prowadzi swoją działalność w ponad 80 krajach. Exail została utworzona przez Grupę ECA i iXblue, które połączyły siły w 2022 roku.",
            logoId: "exail",
          },
          {
            name: "SkyDec",
            body:
              "Holenderski producent wojskowych systemów nawigacji i komunikacji, które muszą zapewnić najwyższy poziom wydajności i niezawodności. Technologia SkyDec maksymalizuje dokładność w rozwiązaniu kompatybilnym z każdą platformą przy dowolnej konfiguracji.",
            logoId: "skydec",
          },
          {
            name: "Orbit Communications Systems",
            body:
              "Wiodący globalny dostawca łączności lotniczej, morskich i lądowych terminali satelitarnych oraz nowych rozwiązań kosmicznych — dla sektora prywatnego i rządowego. Dzięki udokumentowanemu doświadczeniu w ciągłym wprowadzaniu innowacji — w misjach powietrznych, morskich i złożonych operacjach kontroli naziemnej — Orbit realizuje najbardziej wymagające wyzwania.",
            logoId: "orbit",
          },
          {
            name: "Septentrio",
            body:
              "Septentrio projektuje i produkuje wieloczęstotliwościową, wielokonstelacyjną technologię pozycjonowania GPS/GNSS do wymagających zastosowań. Sercem odbiorników Septentrio jest najnowsza technologia GNSS, która zapewnia niezawodne pozycjonowanie z dokładnością do centymetra. Odbiorniki są znane ze swojej wyjątkowej wydajności, wysokiego poziomu bezpieczeństwa i odporności w trudnych warunkach. Dlatego produkty Septentrio służą w aplikacjach o kluczowym znaczeniu dla bezpieczeństwa i są częścią infrastruktury krytycznej na całym świecie.",
            logoId: "septentrio",
          },
          {
            name: "Norbit Subsea",
            body:
              "Norbit projektuje i rozwija echosondy wielowiązkowe do zastosowań hydrograficznych, zastosowań przyszłościowych, a także zaawansowanego wykrywania wycieków podmorskich. Rozwiązania opierają się na najnowocześniejszych rozwiązaniach w zakresie analogowego i cyfrowego przetwarzania sygnałów, a produkty Norbit zapewniają szeroki zasięg monitoringu w połączeniu z wysoką czułością i dokładnością. Norbit Subsea jest częścią segmentu Oceans w koncernie NORBIT ASA.",
            logoId: "norbit",
          },
        ],
      },
    },
    privacyPage: {
      title: "Polityka prywatności",
      intro:
        "Niniejsza polityka opisuje zasady przetwarzania danych osobowych w związku z korzystaniem z serwisu internetowego Thesta oraz kontaktem z administratorem.",
      disclaimer:
        "Ten dokument ma charakter informacyjny i szablonowy. Przed publikacją produkcyjną należy go zweryfikować i uzupełnić z prawnikiem pod kątem RODO, ustawy o ochronie danych osobowych oraz specyfiki Waszej działalności.",
      sections: [
        {
          h: "1. Administrator danych",
          p: "Administratorem danych osobowych jest Thesta sp. z o.o. sp.k. z siedzibą w Szczecinie przy ul. Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin. Kontakt: biuro@thesta.pl, tel. +48 725 105 207.",
        },
        {
          h: "2. Inspektor ochrony danych",
          p: "Jeżeli powołano inspektora ochrony danych (IOD), jego dane kontaktowe należy tu wstawić. W przeciwnym razie zapytania dotyczące ochrony danych kierujcie Państwo na adres e-mail administratora.",
        },
        {
          h: "3. Jakie dane przetwarzamy",
          p: "W zależności od sposobu kontaktu mogą obejmować m.in.: imię i nazwisko, nazwa podmiotu, adres e-mail, numer telefonu, treść wiadomości oraz dane techniczne logów serwera (np. adres IP, data i czas żądania) w zakresie niezbędnym do zapewnienia bezpieczeństwa IT.",
        },
        {
          h: "4. Cele i podstawy prawne",
          p: "Odpowiedź na zapytanie lub zgłoszenie — art. 6 ust. 1 lit. b lub f RODO (działania przed zawarciem umowy / uzasadniony interes w komunikacji).\nRealizacja umowy — art. 6 ust. 1 lit. b RODO.\nObowiązki prawne — art. 6 ust. 1 lit. c RODO.\nMarketing lub analityka — wyłącznie przy dobrowolnej zgodzie — art. 6 ust. 1 lit. a RODO.",
        },
        {
          h: "5. Okres przechowywania",
          p: "Dane z formularza kontaktowego: przez czas obsługi sprawy, a następnie przez okres przedawnienia roszczeń lub wymagany przepisami archiwizacji, o ile dłuższy.\nDane przetwarzane na podstawie zgody: do momentu jej cofnięcia lub wycofania celu.",
        },
        {
          h: "6. Odbiorcy danych",
          p: "Dane mogą być powierzane podmiotom świadczącym hosting, obsługę IT lub księgową — wyłącznie na podstawie umów powierzenia, jeśli jest to konieczne. Przekazywanie poza EOG następuje tylko przy zachowaniu mechanizmów zgodnych z RODO.",
        },
        {
          h: "7. Prawa osób, których dane dotyczą",
          p: "Przysługuje Państwu: dostęp do danych, sprostowanie, usunięcie („prawo do bycia zapomnianym”) w przypadkach przewidzianych prawem, ograniczenie przetwarzania, przenoszenie danych (gdy ma zastosowanie), sprzeciw wobec przetwarzania opartego na uzasadnionym interesie oraz cofnięcie zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania przed cofnięciem. Możecie Państwo wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).",
        },
        {
          h: "8. Pliki cookies i podobne technologie",
          p: "Serwis może wykorzystywać pliki cookies oraz lokalną pamięć przeglądarki (np. zapis preferencji zgody). Szczegóły rodzajów cookies, czasu przechowywania i sposobu zarządzania zgodą opisano w odrębnym dokumencie: Polityka plików cookies (link w stopce serwisu).",
        },
        {
          h: "9. Zmiany polityki",
          p: "Administrator może aktualizować niniejszą politykę. O istotnych zmianach warto poinformować użytkowników na stronie głównej lub w serwisie.",
        },
      ],
    },
    cookiesPage: {
      title: "Polityka plików cookies",
      intro:
        "Poniżej opisujemy, w jaki sposób serwis Thesta może wykorzystywać pliki cookies i podobne technologie oraz jak można zarządzać swoimi preferencjami.",
      disclaimer:
        "Dokument ma charakter szablonowy — dostosujcie go do faktycznie używanych narzędzi (np. Google Analytics, mapy, osadzone filmy) po konsultacji prawnej.",
      sections: [
        {
          h: "1. Czym są pliki cookies",
          p: "Cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika przez przeglądarkę. Umożliwiają m.in. zapamiętanie preferencji, utrzymanie sesji lub — w przypadku narzędzi analitycznych — zrozumienie sposobu korzystania ze strony.",
        },
        {
          h: "2. Jakich cookies używamy w tym serwisie",
          p: "Niezbędne / techniczne: zapewniają podstawowe działanie strony i zapamiętanie wyboru w banerze zgody (np. localStorage lub cookies o podobnym charakterze).\nPreferencje: zapamiętują wybór języka interfejsu, jeśli taka funkcja jest włączona.\nOpcjonalne (np. statystyka, marketing): stosowane wyłącznie po wyrażeniu zgody, jeśli zostaną zaimplementowane — należy wtedy wymienić konkretne narzędzia i ich dostawców.",
        },
        {
          h: "3. Baner zgody",
          p: "Przy pierwszej wizycie możecie Państwo zaakceptować wszystkie kategorie cookies lub odrzucić te nieistotne. Wybór jest zapisywany lokalnie w przeglądarce (np. pod kluczem związanym z nazwą serwisu), aby nie wyświetlać banera przy każdym wejściu. Zgodę można zmienić, usuwając dane witryny w ustawieniach przeglądarki lub — gdy udostępnimy taką funkcję — z poziomu strony.",
        },
        {
          h: "4. Cookies stron trzecich",
          p: "Jeśli na stronie osadzone są treści z zewnętrznych serwisów (mapy, filmy, widgety społecznościowe), te podmioty mogą stosować własne cookies zgodnie ze swoimi politykami. W takim przypadku należy wymienić je tutaj z linkami do ich dokumentów.",
        },
        {
          h: "5. Zarządzanie cookies w przeglądarce",
          p: "Możecie Państwo w każdej chwili usunąć lub zablokować cookies w ustawieniach przeglądarki (Chrome, Firefox, Safari, Edge itd.). Ograniczenie cookies może wpłynąć na działanie niektórych funkcji serwisu.",
        },
        {
          h: "6. Związek z polityką prywatności",
          p: "Dane zbierane w ramach niektórych cookies mogą stanowić dane osobowe — wtedy stosuje się postanowienia Polityki prywatności. Link do niej znajduje się w stopce serwisu.",
        },
        {
          h: "7. Kontakt",
          p: "Pytania dotyczące cookies: biuro@thesta.pl, Thesta sp. z o.o. sp.k., ul. Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin.",
        },
      ],
    },
    meta: {
      title: "Thesta — elektronika morska",
      description:
        "Nawigacja, łączność i hydrografia dla Marynarki Wojennej i floty cywilnej. INS, GNSS, radary, ECDIS, VSAT, sonary.",
    },
  },
  en: {
    nav: {
      home: "Home",
      offer: "Offer",
      news: "News",
      contact: "Contact",
      about: "About us",
      aboutOverview: "Overview",
      aboutCertificates: "Certificates",
      aboutProjects: "Projects",
      aboutPartners: "Partners",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      menu: "Menu",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      linkedin: "LinkedIn",
      linkedinAria: "Thesta on LinkedIn (opens in a new tab)",
    },
    dock: {
      call: "Call",
      book: "Book a call",
      backToTop: "Back to top",
      barAria:
        "Quick actions: call, contact, offer, back to top",
    },
    brand: {
      name: "Thesta",
      tagline: "Marine electronics",
    },
    radar: {
      status: "Initializing systems…",
    },
    home: {
      hero: {
        areas: "Navigation · Communications · Hydrography",
        eyebrow:
          "INS, GNSS, radar, and ECDIS — precise position and situational awareness at sea, from pilotage to tactical operations.",
        title: "Advanced navigation, communications and hydrography for marine units",
        lead:
          "Thesta supports naval and civil fleets in design, supply, integration, and service of INS, GNSS, radar, and ECDIS/WECDIS systems.",
        meta: "Design · supply · integration · service",
        ctaContact: "Contact us",
        ctaOffer: "View our offer",
        scrollHint: "Scroll down",
        backgroundSlides: [
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2400&q=80",
        ],
      },
      introPanels: {
        scrollHint: "Scroll down",
        skip: "Skip intro",
        regionLabel: "Introduction",
        panels: [
          {
            title: "Navigation",
            tagline:
              "15+ years’ experience — integrations for the Polish Navy, defence industry, and commercial shipping",
            body: "INS, GNSS, radar, and ECDIS — precise position and situational awareness at sea, from pilotage to tactical operations.",
            image:
              "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Communications",
            tagline:
              "Design, supply, integration, and support — one team with you at the table",
            body: "VSAT, onboard links, and HF/VHF/UHF — dependable connectivity when the mission cannot afford radio silence.",
            image:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Hydrography",
            tagline:
              "Sonar and bathymetry — including Kraken Robotics partnership and Polish Navy programmes",
            body: "Sonars, multibeam echo sounders, and USV/AUV platforms — seabed mapping, environmental insight, and data for navigation and planning.",
            image:
              "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          },
        ],
      },
      servicesSection: {
        title: "What we deliver",
        kicker: "Engineering · supply · integration · support",
        link: "Full offer",
      },
      services: {
        nav: {
          title: "Navigation",
          body: "INS/GNSS, marine radar, and ECDIS/WECDIS for precise ship handling in all conditions.",
          tags: "INS · GNSS · Radar · ECDIS",
        },
        comms: {
          title: "Communications",
          body: "VSAT, onboard, and radio solutions for missions that demand reliable links.",
          tags: "VSAT · Onboard · HF/VHF/UHF",
        },
        hydro: {
          title: "Hydrography & environment",
          body: "Sonars, multibeam echo sounders, USV/AUV, and solutions supporting marine environmental protection.",
          tags: "Sonar · Echo sounders · USV/AUV",
        },
      },
      stats: {
        title: "Key figures",
        years: "Years of experience",
        projects: "Projects delivered",
        focus: "Focus on the maritime sector",
      },
      news: {
        heading: "What's new",
        title: "News",
        all: "All news",
        readMore: "Read more +",
        seeMore: "See more…",
        carouselDotsAria: "News carousel page indicator",
        carouselPrevAria: "Previous news page",
        carouselNextAria: "Next news page",
        modalClose: "Close",
        modalImageCaption: "Image placeholder",
        items: [
          {
            date: "March 2026",
            tag: "Partnership",
            title: "Thesta 🤝 Kraken Robotics — order for the Polish Navy",
            excerpt:
              "Kraken Robotics announced ~USD 24m in supply contracts; one order comes from Thesta, with equipment destined for the Polish Navy.",
            imageKey: "tom9331News1",
            imageAlt:
              "Thesta and Kraken Robotics partnership — equipment for the Polish Navy",
            modalBody:
              "On 17 March, the Canadian company Kraken Robotics announced that it had signed supply contracts for its equipment worth approximately USD 24 million.\n\nOne of the orders placed in Canada comes from the Szczecin-based company Thesta, and the equipment ordered will ultimately be delivered for the needs of the Polish Navy.\n\nKraken Robotics is represented in Poland by Thesta, which was appointed as an authorized distributor during last week’s Oceanology International trade fair in London.\n\nThesta 🤝 Kraken Robotics\n#TeamThesta\n\nMore:\nhttps://zbiam.pl/kraken-sprzedal-kolejne-sonary-i-wyposazenie-do-nich/\nhttps://lnkd.in/dQT6WK6i",
          },
          {
            date: "March 2026",
            tag: "Careers",
            title: "Thesta is hiring — #TeamThesta",
            excerpt:
              "We are growing the team. See current openings on LinkedIn.",
            modalBody:
              "Thesta is looking for new colleagues — we work on projects for the Polish Navy and the maritime industry, in shipboard electronics, navigation, and hydrography.\n\n#TeamThesta is hiring!\n\nRoles and details:\nhttps://lnkd.in/gpb97RHR",
            imageKey: undefined,
            imageAlt: undefined,
          },
          {
            date: "March 2026",
            tag: "Delivery",
            title:
              "Agreement with Naval Port Command Gdynia — UUV supplies and KATFISH towed sonar",
            excerpt:
              "On 9 March, Thesta signed with Naval Port Command Gdynia to supply technical materials for Polish Navy uncrewed maritime programmes, including Kraken Robotics towed sonar (KATFISH).",
            imageKey: "thumb790x400Katfish",
            imageAlt:
              "Kraken Robotics KATFISH towed sonar system — context of the Gdynia agreement",
            modalBody:
              "On March 9, Thesta, a company based in Szczecin, signed an agreement with the Gdynia Naval Port Command for the supply of technical materials for uncrewed maritime systems used by the Polish Navy. This includes equipment for the Kraken Robotics towed sonar, which is part of the Katfish sonar system.\n\n#TeamThesta\nhttps://lnkd.in/dG9dtk5h",
          },
          {
            date: "February 2026",
            tag: "Trade show",
            title: "Cooperation with Exail and NORBIT at Oceanology International",
            excerpt: "Partner meetings during the London trade show.",
            modalBody:
              "We met with partners Exail and NORBIT at Oceanology International in London. A full story and gallery will be added later — the image block is a placeholder.",
            imageKey: undefined,
            imageAlt: undefined,
          },
        ],
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            q: "Who are Thesta’s services for?",
            a: "We serve the navy, specialist units, and civil fleets in navigation, communications, and hydrography — including design, supply, integration, and service of INS/GNSS, radar, ECDIS/WECDIS, and hydroacoustic systems.",
          },
          {
            q: "How can I contact Thesta?",
            a: "Use the contact form, e-mail biuro@thesta.pl, or call +48 725 105 207. Our office is in Szczecin at Janiny Smoleńskiej ps. „Jachna” 17. Hours: Mon–Fri 07:00–15:00.",
          },
          {
            q: "Does Thesta work with foreign-flag vessels?",
            a: "Yes. We cooperate internationally and deliver projects outside Poland, including system integration and technical support for naval and civil fleets.",
          },
          {
            q: "What does a typical engagement look like?",
            a: "We start with needs and requirements, propose concepts and options, then execute design, integration, and sea trials. After delivery we provide service and training.",
          },
        ],
      },
      contact: {
        title: "Contact us",
        body: "Tell us about your vessel, planned upgrade, or new project — we will tailor a proposal to your mission profile and technical constraints.",
        company:
          "Thesta sp. z o.o. sp.k. · Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin, Poland",
        phoneLabel: "tel.",
        formCta: "Contact form",
      },
      process: {
        kicker: "Cooperation process",
        heading: "From conversation to operational support",
        hint: "Click a step to see details.",
        steps: [
          {
            title: "Discovery and requirements",
            body: "We start with a conversation about the vessel, mission profile, and existing bridge infrastructure. We align on priorities, schedule constraints, and classification requirements — so our proposal matches real operational conditions, not a product catalogue.",
            tags: ["Vessel", "Mission", "Infrastructure"],
          },
          {
            title: "Solution selection and concept",
            body: "We prepare configuration options for navigation, communications, and hydrography matched to the mission profile. We assess available technology, applicable standards, and integration feasibility — the client receives a comparison of options with technical justification.",
            tags: ["Configuration", "Options", "Analysis"],
          },
          {
            title: "Engineering, integration, commissioning",
            body: "We produce full technical documentation and carry out integration with ship systems. Every phase concludes with trials — including sea trials — and acceptance records confirm compliance with client requirements and classification rules.",
            tags: ["Documentation", "Integration", "Sea trials"],
          },
          {
            title: "Service support and training",
            body: "We provide warranty and post-warranty support, AMC/SLA contracts, and operator and technical training for crews. We stay involved throughout the full system lifecycle — from first commissioning through planned upgrades.",
            tags: ["Service", "SLA", "Crew training"],
          },
        ],
      },
      testimonials: {
        eyebrow: "Client voices",
        title: "What operators and owners say",
        intro:
          "We support naval and civil units that expect stable navigation, communications, and hydrography — selected references below.",
        items: [
          {
            quote:
              "Thesta delivered our navigation modernization efficiently. Communication was clear and responses to crew feedback were fast.",
            role: "Navigation officer",
            org: "Polish Navy unit",
          },
          {
            quote:
              "Towed sonar rollout stayed on schedule, and post-commissioning support has been excellent.",
            role: "Project manager",
            org: "Civil hydrographic vessel",
          },
          {
            quote:
              "Thesta bridges tactical requirements with day-to-day operations. Deliverables are polished and well documented.",
            role: "Chief engineer",
            org: "Specialist ship operator",
          },
        ],
      },
    },
    footer: {
      rights: "All rights reserved.",
      offer: "Offer",
      news: "News",
      about: "About us",
      contact: "Contact",
      privacy: "Privacy policy",
      cookies: "Cookie policy",
    },
    cookies: {
      text: "This site uses cookies (including those necessary for operation). You may accept all or reject non-essential cookies.",
      reject: "Reject non-essential",
      accept: "Accept",
    },
    contactPage: {
      title: "Contact",
      sectionKicker: "Contact",
      headline: "Let’s talk about your project",
      intro:
        "Describe the scope — vessel type, systems, schedule. We will respond with a concept and preliminary estimate within 1–2 business days.",
      addressHeading: "Address",
      addressLine1: "Janiny Smoleńskiej ps. „Jachna” 17",
      addressLine2: "71-005 Szczecin, Poland",
      mapHeading: "Map",
      mapIframeTitle: "Google Map — Thesta office location",
      openInMaps: "Open in Google Maps",
      formHeading: "Send a message",
      contactAsideTitle: "Contact details",
      formDisclaimer: "Demo form — do not submit confidential data",
      faqHeading: "FAQ",
      faqItems: [
        {
          q: "Who are your services for?",
          a: "We serve the navy, specialist units, and civil fleets in navigation, communications, and hydrography — including design, supply, integration, and service of INS/GNSS, radar, ECDIS/WECDIS, and hydroacoustic systems.",
        },
        {
          q: "Do you deliver projects abroad?",
          a: "Yes. We work with international partners and execute projects outside Poland, including system integration and technical support for naval and civil fleets.",
        },
        {
          q: "What does a typical engagement look like?",
          a: "We start with needs and requirements, propose concepts and options, then execute design, integration, and commissioning on board. After delivery we provide service and training.",
        },
        {
          q: "What is a typical project timeline?",
          a: "It depends on scope: from a few weeks for simpler supplies to many months for full bridge integration. After an initial call we share an indicative schedule and milestones.",
        },
      ],
      form: {
        name: "Full name",
        namePlaceholder: "John Smith",
        email: "E-mail",
        emailPlaceholder: "john@company.com",
        organization: "Organisation",
        organizationPlaceholder: "Company / institution name",
        inquiry: "Enquiry details",
        messagePlaceholder:
          "Vessel type, required systems, schedule, indicative budget...",
        message: "Message",
        submit: "Send enquiry",
        consent:
          "I consent to the processing of the personal data I provide in this form for the purpose of responding to my enquiry. I have read the information in the",
        consentPolicyLink: "Privacy policy",
      },
    },
    offerPage: {
      title: "Offer",
      headline: "Products and services",
      sectionKicker: "Offer",
      intro:
        "We supply leading manufacturers’ equipment and full engineering services — from design and integration to long-term support.",
      metaLine: "PRODUCTS · INTEGRATION · SERVICE · TRAINING",
      productsTitle: "Products",
      servicesTitle: "Services",
      productsDescriptor: "— equipment and systems from leading manufacturers",
      servicesDescriptor: "— integration, service, and training",
      backLink: "Back",
      ctaKicker: "Offer · CTA",
      ctaTitle: "Need a specific configuration?",
      ctaBody:
        "Describe the vessel type and scope — we will prepare a technical concept and a preliminary estimate.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "Services",
      productCategories: [
        {
          title: "Navigation",
          listTitle: "INS / GNSS systems",
          itemSlugs: ["ins", "odbiorniki-gnss"],
        },
        {
          title: "Communications",
          listTitle: "VSAT terminals and radio stations",
          itemSlugs: [
            "vsat",
            "lacznosc-wewnetrzna-okretowa",
            "lacznosc-radiowa",
          ],
        },
        {
          title: "Hydrography",
          listTitle: "Sonars and MBES echo sounders",
          itemSlugs: ["echosondy-wielowiazowe", "pojazdy-podwodne-rov-auv"],
        },
        {
          title: "Navigation",
          listTitle: "ECDIS / WECDIS / Radars",
          itemSlugs: ["systemy-nawigacyjne", "oswietlenie-nawigacyjne"],
        },
        {
          title: "Hydrography",
          listTitle: "Unmanned USV / AUV platforms",
          itemSlugs: ["nawodne-pojazdy-bezalogowe-usv", "t-bwss"],
        },
      ],
      serviceSlugs: ["projektowanie", "uruchomienia", "szkolenia"],
      serviceOfferCards: [
        {
          slug: "projektowanie",
          cardTitle: "Systems integration",
          cardSubtitle: "System engineering, design, and deployment",
          code: "S01",
          cover: {
            kind: "bridge",
            eyebrowSmall: "IBS",
            eyebrowWide: "INTEGRATED BRIDGE",
            systemTags: [
              "CMS",
              "GMDSS",
              "RADAR",
              "AIS",
              "ECDIS",
              "GYRO",
              "SMS",
            ],
            protocolLine: "NMEA 2000",
          },
        },
        {
          slug: "uruchomienia",
          cardTitle: "Service and support",
          cardSubtitle: "24/7 technical service, AMC, spare parts",
          code: "S02",
          cover: {
            kind: "stats",
            cells: [
              { primary: "SLA / AMC" },
              { primary: "24/7" },
              { primary: "99.9%", secondary: "UPTIME" },
              { primary: "SPARE PARTS" },
            ],
          },
        },
        {
          slug: "szkolenia",
          cardTitle: "Crew training",
          cardSubtitle: "Operator and engineering training",
          code: "S03",
          cover: {
            kind: "certs",
            primary: "STCW",
            secondary: "CERTIFIED",
          },
        },
      ],
    },
    productPages: {
      backToOffer: "Back to offer",
      placeholderCaption: "Image placeholder",
      bySlug: {
        "systemy-nawigacyjne": {
          title: "Navigation systems",
          intro:
            "Integrated bridge navigation ties together satellite positioning, onboard sensors, and visualisation so the crew shares one coherent picture of position, heading, and surroundings — from harbour approach to long patrols.",
          blocks: [
            {
              caption: "Bridge integration",
              body: "Selecting and wiring ECDIS/WECDIS, radars, and NMEA interfaces yields a single operational picture for watchkeepers. Thesta supports equipment choice, logical cabling, and onboard acceptance tests.",
            },
            {
              caption: "Operational safety",
              body: "Alarm policies, display redundancy, and chart update routines reduce human-error risk. During refits we phase cutovers so critical bridge functions are not offline longer than necessary.",
            },
          ],
        },
        "oswietlenie-nawigacyjne": {
          title: "Navigation lighting",
          intro:
            "Correct navigation, masthead, and special lights are essential for night safety and COLREG compliance. Lamp power, colour, and sectors must match hull geometry and superstructure masking.",
          blocks: [
            {
              caption: "Fixture selection",
              body: "We lay out lanterns with visible range, power draw, and service access in mind. We work with makers of certified LED units and halogen solutions where rules or the customer require them.",
            },
            {
              caption: "Trials and handover",
              body: "After installation we verify against class documentation and yard or in-service trial plans. We record parameters to simplify future audits and certificate renewals.",
            },
          ],
        },
        ins: {
          title: "INS",
          intro:
            "Inertial navigation backs up GNSS where satellite signals are degraded or denied — under bridges, in channels, or in contested environments. A coherent INS+GNSS chain is standard where missions demand resilience.",
          blocks: [
            {
              caption: "Calibration and sea trials",
              body: "Proper gyro initialisation and drift monitoring need quiet-water procedures and reference observations. Thesta runs commissioning, operator training, and checklists aligned with manufacturer documentation.",
            },
            {
              caption: "Integration with GNSS and ECDIS",
              body: "Position and heading sources must be prioritised and checked for consistency. We configure source switching, disagreement alarms, and event logging for later analysis.",
            },
          ],
        },
        "odbiorniki-gnss": {
          title: "GNSS receivers",
          intro:
            "Multi-system receivers add frequency and constellation redundancy; military variants add authentication and resilience layers. Antenna choice, filtering, and cabling directly affect fix availability on board.",
          blocks: [
            {
              caption: "Antennas and EMI hygiene",
              body: "Keeping antennas clear of superstructure shadow and shielding cable runs limits noise and multipath. We specify kits for patrol, hydrographic, and auxiliary vessels across tonnages.",
            },
            {
              caption: "Configuration and updates",
              body: "Key management, firmware, and update policy maintain compliance over years. We document software versions and rollback steps for field issues.",
            },
          ],
        },
        vsat: {
          title: "VSAT",
          intro:
            "VSAT satellite links carry data and voice beyond coastal networks — vital for long patrols, logistics, and command collaboration. Terminal, radome, and tariff choices follow the mission profile.",
          blocks: [
            {
              caption: "Terminal and shipboard install",
              body: "We review mast or deckhouse space for sky view, wind loads, and maintenance access. Radome mounting and RF/internal cable runs follow maker and class guidance.",
            },
            {
              caption: "Networking and security",
              body: "Segmenting operational and office traffic, VPNs, and link monitoring reduce outage risk. We help configure onboard routers and integrate with existing IT infrastructure.",
            },
          ],
        },
        "lacznosc-wewnetrzna-okretowa": {
          title: "Internal ship communications",
          intro:
            "Shipboard systems — from simple PA to integrated PAGA and alarm distribution — connect departments and action stations. Reliability beats aesthetics: clear interfaces shorten crew response time.",
          blocks: [
            {
              caption: "Acoustic zoning",
              body: "We divide the ship into PA and alarm zones with machinery noise and hearing-protection rules in mind. Anti-noise microphones and speaker choice improve intelligibility.",
            },
            {
              caption: "Alarm integration",
              body: "Fire, flooding, and machinery alerts must reach the right consoles with priority. We coordinate with ship automation to avoid conflicting signals and duplicate announcements.",
            },
          ],
        },
        "lacznosc-radiowa": {
          title: "Radio communications",
          intro:
            "HF, VHF, and UHF bands plus GMDSS equipment underpin short- and long-range safety communications. Antennas, grounding, and watch protocols matter most in emergencies.",
          blocks: [
            {
              caption: "GMDSS and safety",
              body: "We configure watch radios, EPIRB/AIS-SART to class and sea-area requirements. We train crews on periodic tests and RCC communications.",
            },
            {
              caption: "Tactical communications",
              body: "Specialised profiles may need channel plans, encryption, and ruggedised gear. Thesta supports integration with other comms systems and acceptance documentation.",
            },
          ],
        },
        "nawodne-pojazdy-bezalogowe-usv": {
          title: "Uncrewed surface vehicles (USV)",
          intro:
            "USVs support hydrographic surveys, monitoring, and payload trials without exposing a crew. Supervisory link reliability and propulsion redundancy matter in estuaries and open sea.",
          blocks: [
            {
              caption: "USV link and navigation",
              body: "GNSS, INS, and radio or satellite supervisory links enable telemetry and takeover. We design shore control layouts and lost-link recovery procedures.",
            },
            {
              caption: "Survey payloads",
              body: "Sonar or lidar mounting needs platform stability and time synchronisation. We advise on cranes, adapters, and power for specific sensors and vendors.",
            },
          ],
        },
        "echosondy-wielowiazowe": {
          title: "Multibeam echo sounders",
          intro:
            "Multibeam systems shorten bottom coverage time while retaining high resolution — the norm in modern national and commercial hydrography. Data quality depends on calibration, motion sensing, and sound-speed correction.",
          blocks: [
            {
              caption: "Calibration and patch test",
              body: "We run offset, latency, and bar-check procedures aligned with applicable IHO guidance. Measurement records simplify client acceptance.",
            },
            {
              caption: "Processing and archiving",
              body: "Export formats, metadata, and backup policy protect transect data. We integrate with the client’s bathymetry processing toolchain.",
            },
          ],
        },
        "pojazdy-podwodne-rov-auv": {
          title: "Underwater vehicles (ROV/AUV)",
          intro:
            "ROVs and AUVs serve subsea infrastructure inspection, sonar missions, and research. Reliable propulsion, lighting, tethering, or energy autonomy must align with supervisory navigation.",
          blocks: [
            {
              caption: "Relative and absolute navigation",
              body: "USBL/LBL blended with vehicle INS and position filtering stabilises track following. Sensors are chosen for depth, current, and water clarity.",
            },
            {
              caption: "Sonar integration",
              body: "Time and trigger sync between platform and sonar heads is critical for mosaic quality. We support pool or on-site wet tests after installation.",
            },
          ],
        },
        "t-bwss": {
          title: "T-BWSS",
          intro:
            "T-BWSS-style systems support in-water environmental monitoring — physicochemical parameters and sometimes alarm events for ports and offshore sites. Sensor stability, calibration, and shore telemetry determine data value.",
          blocks: [
            {
              caption: "Monitoring station",
              body: "Probe choice, cages, and anti-collision features depend on location — breakwaters, fairways, terminals. We plan power, biofouling protection, and service access from ship or shore.",
            },
            {
              caption: "Telemetry and integration",
              body: "Radio or satellite IoT backhaul plus SCADA dashboards help authorities react quickly. We design thresholds and alarms to match contractual environmental clauses.",
            },
          ],
        },
      },
    },
    servicePages: {
      backToOffer: "Back to offer",
      placeholderCaption: "Image placeholder",
      cta: {
        label: "Discuss your requirements",
        href: "/contact",
      },
      bySlug: {
        projektowanie: {
          title: "Engineering",
          intro:
            "We deliver design packages for installation and integration of navigation and hydrographic systems — from concept through documentation ready for build and acceptance. Work follows applicable standards and customer requirements; our team then implements tailored solutions and supervises quality on board.",
          blocks: [
            {
              caption: "Standards, defence norms, and CAD",
              media: "none",
              body:
                "Designs follow applicable standards and regulations, including defence documentation rules (e.g. Polish MoD Decision No. 207 of 31 December 2021 on technical documentation for military equipment). We use CAD and 3D modelling to accurately represent equipment layout and cable routing.",
            },
            {
              caption: "Typical design deliverables",
              media: "none",
              body: "",
              bullets: [
                "Equipment placement and mechanical arrangements",
                "Cable routes, schedules, and power distribution",
                "Signal and interface integration diagrams",
                "Technical specifications and material take-offs",
                "Customer acceptance procedures and requirements reflected in the package",
              ],
            },
            {
              caption: "Navigation system designs",
              media: "none",
              body: "",
              bullets: [
                "Radar",
                "ECDIS / W-ECDIS",
                "GNSS / GPS positioning",
                "Navigation light panels",
                "Autopilot",
                "NAVTEX",
                "Echo sounder",
                "Speed log",
                "Multibeam echo sounder",
                "Inertial navigation (INS)",
              ],
            },
            {
              caption: "Communications system designs",
              media: "none",
              body: "",
              bullets: [
                "VSAT satellite communications",
                "Radio communications",
                "Shipboard PA / general alarm",
                "Sound-powered telephones",
                "TV / entertainment distribution",
              ],
            },
          ],
        },
        uruchomienia: {
          title: "Commissioning",
          intro:
            "A new system needs integration, configuration, and acceptance — planned so vendors, subcontractors, the customer, and end users stay aligned on schedule and scope.",
          blocks: [
            {
              caption: "From preparation to operational handover",
              media: "none",
              body:
                "For each system or subsystem we prepare a commissioning plan with clear responsibilities. Below is a typical flow — details are agreed per contract and platform.",
              steps: [
                {
                  title: "Preparation at Thesta",
                  body:
                    "Bench integration, baseline configuration, and early testing reduce risk on board. The customer can supervise this phase.",
                },
                {
                  title: "Mobilisation and on-site installation",
                  body:
                    "Delivery to the vessel or customer site, installation per design, and connection to shipboard or shore infrastructure.",
                },
                {
                  title: "Integration with existing systems",
                  body:
                    "Coexistence with equipment already in service (NMEA, vendor-specific interfaces, redundant data paths) per documentation and agreed acceptance checkpoints.",
                },
                {
                  title: "Functional tests and acceptance scenarios",
                  body:
                    "Verification against the contract: signals, alarms, logging, and scenarios typical for the vessel class or facility.",
                },
                {
                  title: "Minutes and documentation handover",
                  body:
                    "Formal confirmation of work performed, reports, and materials needed for operations and maintenance.",
                },
                {
                  title: "Introductory operator training",
                  body:
                    "A short familiarisation after commissioning — fuller training programmes are delivered separately when in scope.",
                },
              ],
            },
            {
              caption: "What we typically hand over",
              media: "none",
              body: "",
              bullets: [
                "Test reports and configuration assumptions",
                "Known limitations and maintenance recommendations",
                "Material for follow-on training and watch handover",
                "Agreed schedule and list of stakeholders present at acceptance",
              ],
            },
          ],
        },
        szkolenia: {
          title: "Training",
          intro:
            "Training closes the rollout: we transfer knowledge to operators and technicians so equipment is used safely and in line with procedures.",
          blocks: [
            {
              caption: "Typical training flow",
              media: "none",
              body: "",
              steps: [
                {
                  title: "Scope and audience",
                  body:
                    "We tailor content to crew level (operator / technician / officer), language, and time available on board or at the customer site.",
                },
                {
                  title: "Theory",
                  body:
                    "System principles, user interface, emergency procedures, and common operational scenarios.",
                },
                {
                  title: "Hands-on with equipment",
                  body:
                    "Panel operation, alarm interpretation, first-line maintenance tasks — where possible on the installed system.",
                },
                {
                  title: "Wrap-up and materials",
                  body:
                    "Checklists, pointers to OEM documentation where applicable, and agreed support channels after the course.",
                },
              ],
            },
            {
              caption: "Audience and format",
              media: "none",
              body: "",
              bullets: [
                "Bridge operators — day-to-day ECDIS, radar, INS, and related systems",
                "Technicians — basic diagnostics, module replacement, service escalation",
                "Small groups or one-to-one sessions depending on the system",
              ],
            },
            {
              caption: "Where we train",
              media: "none",
              body: "",
              bullets: [
                "At Thesta’s office",
                "At a customer-designated location",
                "On board after installation or integration",
              ],
            },
            {
              caption: "Thesta trainers and manufacturers",
              media: "none",
              body:
                "We train from field experience; on request we involve OEM trainers for deeper product-specific sessions.",
            },
          ],
        },
      },
    },
    newsPage: {
      kicker: "THESTA · NEWS",
      heading: "What's new at Thesta",
      title: "News",
      intro: "Updates from projects, trade shows, and partners.",
      back: "Back to home",
      allTags: "All",
      itemsCountLabel: "items",
      tagsCountLabel: "tags",
      emptyState: "No entries",
      loadOlder: "Load older — grid view",
      collapseToCarousel: "Back to carousel",
      gridHeading: "All entries",
      carouselPrevAria: "Previous news page",
      carouselNextAria: "Next news page",
    },
    aboutPages: {
      common: {
        back: "Back to home",
      },
      hub: {
        title: "About us",
        introTabLabel: "Overview",
        intro:
          "Learn about our authorisations, selected projects, and technology partners.",
        heroKicker: "About the company",
        heroTitle:
          "Marine electronics integrator with 15+ years of experience",
        heroBody:
          "Thesta sp. z o.o. sp.k. is a Polish integrator of marine electronics systems. We design, supply, integrate, and service navigation, communications, and hydrography systems for the Polish Navy, the defence industry, and commercial shipping. Our headquarters are in Szczecin.",
        pillarsKicker: "Why Thesta",
        pillarsTitle: "How we work",
        pillars: [
          {
            num: "01",
            title: "Technical precision",
            body:
              "Every project starts with a thorough requirements analysis. We do not ship boxes — we engineer integrated systems matched to the vessel and mission.",
          },
          {
            num: "02",
            title: "Shipboard experience",
            body:
              "15+ years with the Polish Navy and commercial fleets. We know bridge realities, acceptance procedures, and the marine environment.",
          },
          {
            num: "03",
            title: "Technology partnerships",
            body:
              "We work with leading manufacturers including Exail, NORBIT, Kraken Robotics, Raytheon Anschütz, and others. We choose technology, not badges.",
          },
          {
            num: "04",
            title: "Full system lifecycle",
            body:
              "From concept through integration and sea trials to service and training — one partner at every stage, without handing off responsibility.",
          },
        ],
        kpi: [
          {
            value: "15",
            suffix: "+",
            label: "Years of experience",
            sub: "in the marine sector",
          },
          {
            value: "120",
            suffix: "+",
            label: "Projects delivered",
            sub: "for the Polish Navy and civil fleets",
          },
          {
            value: "100",
            suffix: "%",
            label: "Focus on marine",
            sub: "marine electronics only",
          },
        ],
        audienceKicker: "Clients",
        audienceTitle: "Who we work for",
        audienceCards: [
          {
            title: "Polish Navy",
            body:
              "Navigation and communications for naval vessels, combat management integration, modernisations.",
          },
          {
            title: "Defence industry",
            body:
              "Engineering and integration support for naval programmes, subsystem deliveries, NATO-aligned documentation.",
          },
          {
            title: "Commercial shipping",
            body:
              "ECDIS, GMDSS, VDR, radar systems — supply, installation, and service for merchant and fishing operators.",
          },
        ],
        subpagesKicker: "Details",
        subpagesTitle: "Certificates, projects, partners",
        certificatesDesc:
          "MSWiA licences, WSK certification, internal control system, and quality policy.",
        projectsDesc:
          "Installations, upgrades, and deliveries of navigation, communications, and hydrography systems.",
        partnersDesc:
          "Leading marine electronics and GNSS technology suppliers.",
        cta: "View",
        ctaBandTitle: "Want to talk about a project?",
        ctaBandButton: "Contact us",
      },
      certificates: {
        sectionKicker: "Certificates",
        title: "Certificates",
        sections: [
          {
            title: "MSWiA licence",
            body:
              "In 2019 the company was granted MSWiA licence no. B-12/2019 to conduct business trading in military or police goods listed in WT II – WT XII and WT XIV. In 2020 the licensed scope was extended to manufacturing military or police goods listed in WT II – WT XIV items 1–4, 9, and 11–12 (Decision 2 to the licence).",
            download: {
              label: "Download licence document",
              href: "#",
            },
          },
          {
            title: "Decisions to the MSWiA licence",
            body:
              "Current decisions and annexes to the licence are provided to customers on request.",
          },
          {
            title: "Internal Control System",
            body:
              "In September 2022 Thesta implemented an Internal Control System for trade in goods of strategic importance under the Act of 29 November 2000. The system was certified by the WAT Quality Certification Centre.",
          },
          {
            title: "Quality policy",
            body:
              "Thesta’s quality policy defines standards and procedures that ensure high quality of services and supplies. Details are shared with partners on request.",
          },
        ],
      },
      projects: {
        sectionKicker: "Projects",
        title: "Our projects",
        intro:
          "Selected work for the Polish Navy and related organisations.",
        colUnit: "Customer / platform",
        colScope: "Scope of work",
        rows: [
          {
            unit: "B-7",
            lines: ["Installation of a ship-wide broadcast system."],
          },
          {
            unit: "B860 series tugs",
            lines: [
              "Delivery and commissioning of military GNSS/SAASM receivers.",
            ],
          },
          {
            unit: "ORP Wodnik",
            lines: [
              "Comprehensive upgrade of onboard navigation and internal communications.",
            ],
          },
          {
            unit: "ORP Kontradmirał Xawery Czernicki",
            lines: [
              "Repair of Orbit Al7103 VSAT satellite terminal systems.",
            ],
          },
          {
            unit: "MH-1/2/3/4",
            lines: [
              "Hydrographic suite upgrade and integration of a new INS.",
            ],
          },
          {
            unit: "ORP Hydrograf",
            lines: [
              "Repair of Orbit Al7103 VSAT satellite terminal systems.",
            ],
          },
          {
            unit: "ORP Nawigator",
            lines: [
              "Repair of Orbit Al7103 VSAT satellite terminal systems.",
            ],
          },
          {
            unit: "KORMORAN II-class mine destroyers",
            lines: [
              "Delivery and commissioning of the following systems:",
              "Inertial Navigation System (INS)",
              "Military GNSS positioning system (SAASM)",
              "VSAT satellite terminals",
            ],
          },
          {
            unit: "USV DriX",
            lines: [
              "Delivery of an uncrewed surface vehicle for the Polish Navy.",
            ],
          },
          {
            unit: "USV Otter",
            lines: [
              "Delivery of an uncrewed surface vehicle for the Naval Academy.",
            ],
          },
          {
            unit: "M/F Wolin",
            lines: ["Delivery and installation of the T-BWSS system."],
          },
          {
            unit: "M/F Gryf",
            lines: ["Delivery and installation of the T-BWSS system."],
          },
          {
            unit: "M/F Jan Śniadecki",
            lines: ["Delivery and installation of the T-BWSS system."],
          },
          {
            unit: "Polish Navy Hydrographic Office",
            lines: [
              "Server room and network infrastructure upgrade at the Hydrographic Office building.",
            ],
          },
        ],
      },
      partners: {
        title: "Partners",
        eyebrow: "Strategic collaboration",
        partnerNavPrev: "Previous partner",
        partnerNavNext: "Next partner",
        intro:
          "Our partners are world-class marine electronics manufacturers. Close cooperation lets us offer technical support and access to partner resources. Sharing experience continuously improves our skills and industry know-how.",
        logoPlaceholder: "Partner logo",
        items: [
          {
            name: "Exail",
            body:
              "Exail is a leading industrial group in advanced technologies, specialising in cutting-edge robotics, marine, navigation, aerospace, and photonics. Through entrepreneurship, Exail delivers performance, reliability, and safety for civil and military customers in demanding environments. From the deep ocean to space, Exail offers a full range of in-house components, products, and systems. With around 1,500 employees worldwide, the company operates in over 80 countries. Exail was formed when ECA Group and iXblue joined forces in 2022.",
            logoId: "exail",
          },
          {
            name: "SkyDec",
            body:
              "Dutch manufacturer of military navigation and communication systems engineered for maximum performance and reliability. SkyDec technology maximises accuracy in a solution compatible with any platform configuration.",
            logoId: "skydec",
          },
          {
            name: "Orbit Communications Systems",
            body:
              "A leading global supplier of airborne, maritime, and land satellite terminals and new space solutions for commercial and government sectors. With a track record of continuous innovation in air, sea, and complex ground-control missions, Orbit meets the toughest operational challenges.",
            logoId: "orbit",
          },
          {
            name: "Septentrio",
            body:
              "Septentrio designs and builds multi-frequency, multi-constellation GPS/GNSS positioning technology for demanding applications. Septentrio receivers use state-of-the-art GNSS for reliable centimetre-level positioning. They are known for performance, security, and resilience in harsh conditions, serving safety-critical applications and critical infrastructure worldwide.",
            logoId: "septentrio",
          },
          {
            name: "Norbit Subsea",
            body:
              "Norbit develops multibeam echo sounders for hydrographic and forward-looking applications, as well as advanced subsea leak detection. Solutions rely on leading-edge analogue and digital signal processing; Norbit products combine wide coverage with high sensitivity and accuracy. Norbit Subsea is part of the Oceans segment of NORBIT ASA.",
            logoId: "norbit",
          },
        ],
      },
    },
    privacyPage: {
      title: "Privacy policy",
      intro:
        "This policy describes how we process personal data when you use Thesta’s website or contact us.",
      disclaimer:
        "This document is a template for information purposes only. Have it reviewed by legal counsel before production use (GDPR, local law, and your actual processing activities).",
      sections: [
        {
          h: "1. Data controller",
          p: "The controller is Thesta sp. z o.o. sp.k., Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin, Poland. Contact: biuro@thesta.pl, tel. +48 725 105 207.",
        },
        {
          h: "2. Data protection officer",
          p: "If you have appointed a DPO, add their contact details here. Otherwise, direct privacy enquiries to the controller’s e-mail address above.",
        },
        {
          h: "3. Categories of data",
          p: "Depending on how you contact us, we may process name, company, e-mail, phone number, message content, and limited technical data (e.g. IP address, timestamp) where necessary for IT security.",
        },
        {
          h: "4. Purposes and legal bases",
          p: "Responding to enquiries — Art. 6(1)(b) or (f) GDPR (pre-contract / legitimate interest in communication).\nContract performance — Art. 6(1)(b) GDPR.\nLegal obligations — Art. 6(1)(c) GDPR.\nMarketing or analytics — only with consent — Art. 6(1)(a) GDPR.",
        },
        {
          h: "5. Retention",
          p: "Contact data: for the duration of the matter and thereafter for limitation/archiving periods where applicable.\nConsent-based processing: until consent is withdrawn or the purpose ends.",
        },
        {
          h: "6. Recipients",
          p: "Data may be shared with processors such as hosting or IT providers under appropriate agreements. Transfers outside the EEA require GDPR-compliant safeguards.",
        },
        {
          h: "7. Your rights",
          p: "You may request access, rectification, erasure (where applicable), restriction, data portability (where applicable), object to processing based on legitimate interests, and withdraw consent at any time without affecting prior lawful processing. You may lodge a complaint with your supervisory authority (in Poland, the President of the Personal Data Protection Office).",
        },
        {
          h: "8. Cookies and similar technologies",
          p: "We may use cookies and browser storage (e.g. consent preferences). Details on types, duration, and how to manage consent are provided in our Cookie policy (linked in the site footer).",
        },
        {
          h: "9. Changes",
          p: "We may update this policy. Material changes should be communicated on the website where appropriate.",
        },
      ],
    },
    cookiesPage: {
      title: "Cookie policy",
      intro:
        "This document explains how the Thesta website may use cookies and similar technologies and how you can manage your preferences.",
      disclaimer:
        "This is a template — adapt it to the tools you actually use (e.g. analytics, maps, embedded media) after legal review.",
      sections: [
        {
          h: "1. What cookies are",
          p: "Cookies are small text files stored on your device by the browser. They can remember preferences, maintain sessions, or — with analytics tools — help understand how the site is used.",
        },
        {
          h: "2. Cookies we use on this site",
          p: "Strictly necessary / technical: required for basic operation and to remember your choice in the consent banner (e.g. localStorage or similar).\nPreferences: remember interface language where enabled.\nOptional (e.g. analytics, marketing): only after consent, if implemented — list specific tools and vendors here.",
        },
        {
          h: "3. Consent banner",
          p: "On your first visit you can accept all non-essential categories or reject them. The choice is stored locally (e.g. under a site-specific key) so the banner is not shown on every visit. You can change this by clearing site data in your browser or — if we provide one — via an on-page control.",
        },
        {
          h: "4. Third-party cookies",
          p: "If we embed content from external services (maps, video, social widgets), those providers may set their own cookies under their policies. List them here with links when applicable.",
        },
        {
          h: "5. Browser controls",
          p: "You can delete or block cookies in your browser settings (Chrome, Firefox, Safari, Edge, etc.). Restricting cookies may affect some site features.",
        },
        {
          h: "6. Relationship to the privacy policy",
          p: "Some cookie data may be personal data — then our Privacy policy applies. You will find a link in the site footer.",
        },
        {
          h: "7. Contact",
          p: "Questions about cookies: biuro@thesta.pl, Thesta sp. z o.o. sp.k., Janiny Smoleńskiej ps. „Jachna” 17, 71-005 Szczecin, Poland.",
        },
      ],
    },
    meta: {
      title: "Thesta — marine electronics",
      description:
        "Navigation, communications, and hydrography for naval and civil fleets. INS, GNSS, radar, ECDIS, VSAT, sonar.",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];

export function getNested(
  obj: Record<string, unknown>,
  path: string,
): string | undefined {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const p of parts) {
    if (current === null || typeof current !== "object" || !(p in current)) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[p];
  }
  return typeof current === "string" ? current : undefined;
}
