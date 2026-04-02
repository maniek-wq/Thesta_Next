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
        title:
          "Zaawansowane systemy nawigacji i łączności dla jednostek morskich",
        lead:
          "Thesta wspiera Marynarkę Wojenną oraz flotę cywilną w projektowaniu, dostawach, integracji i serwisie systemów INS, GNSS, radarów oraz ECDIS/WECDIS.",
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
            body: "INS, GNSS, radary i ECDIS — precyzyjna pozycja i świadomość sytuacji na morzu, od podejścia do portu po operacje taktyczne.",
            image:
              "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Łączność",
            body: "VSAT, łączność pokładowa oraz pasma HF/VHF/UHF — niezawodne łącze, gdy misja nie może pozwolić sobie na ciszę w eterze.",
            image:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Hydrografia",
            body: "Sonary, echosondy wielowiązkowe i platformy USV/AUV — mapowanie dna, środowisko i dane pod decyzje nawigacyjne oraz planowanie.",
            image:
              "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          },
        ],
      },
      servicesSection: {
        title: "Zakres usług",
        kicker: "Projekt · dostawa · integracja · serwis",
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
        title: "Aktualności",
        all: "Wszystkie aktualności",
        readMore: "Czytaj dalej",
        seeMore: "Zobacz więcej…",
        modalClose: "Zamknij",
        modalImageCaption: "Miejsce na zdjęcie (placeholder)",
        items: [
          {
            date: "Marzec 2026",
            title: "Thesta autoryzowanym dystrybutorem systemu KATFISH",
            excerpt:
              "Podczas Oceanology International 2026 podpisano porozumienie z Kraken Robotics.",
            modalBody:
              "Thesta została autoryzowanym dystrybutorem systemu KATFISH firmy Kraken Robotics. Porozumienie podpisano podczas targów Oceanology International 2026. Wkrótce udostępnimy więcej materiałów i zdjęć z wydarzenia — niniejszy tekst i obraz powyżej mają charakter informacyjny (placeholder).",
          },
          {
            date: "Marzec 2026",
            title: "Wsparcie dla bezzałogowych systemów MW RP",
            excerpt:
              "Umowa z Komendą Portu Wojennego Gdynia na dostawy materiałów dla sonarów holowanych.",
            modalBody:
              "Zawarliśmy umowę z Komendą Portu Wojennego Gdynia na dostawy środków materiałowych związanych z sonarami holowanymi w programach bezzałogowych Marynarki Wojennej RP. Szczegóły techniczne i dokumentacja zostaną uzupełnione — obecnie treść pełna jest w przygotowaniu (placeholder).",
          },
          {
            date: "Luty 2026",
            title: "Współpraca z Exail i NORBIT na Oceanology International",
            excerpt:
              "Spotkania z partnerami biznesowymi podczas targów w Londynie.",
            modalBody:
              "Podczas Oceanology International w Londynie odbyły się spotkania z partnerami Exail i NORBIT. Relacja szczegółowa i galeria pojawią się wkrótce — poniższy blok graficzny to placeholder do późniejszej podmiany na zdjęcia z targów.",
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
        title: "Jak wygląda współpraca",
        steps: [
          {
            title: "Rozmowa i zbieranie wymagań",
            body: "Krótka rozmowa o jednostce, typie misji i istniejącej infrastrukturze pokładowej.",
          },
          {
            title: "Dobór rozwiązań i koncepcja systemu",
            body: "Przygotowujemy warianty konfiguracji systemów nawigacji, łączności i hydrografii.",
          },
          {
            title: "Projekt, integracja i uruchomienie",
            body: "Opracowujemy dokumentację, prowadzimy integrację z innymi systemami okrętowymi i testy na morzu.",
          },
          {
            title: "Wsparcie serwisowe i szkolenia",
            body: "Zapewniamy serwis, modernizacje oraz szkolenia załóg z obsługi nowych systemów.",
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
      intro:
        "Napisz do nas lub zadzwoń – odpowiemy w sprawie nawigacji, łączności i hydrografii pokładowej.",
      form: {
        name: "Imię i nazwisko",
        email: "E-mail",
        message: "Wiadomość",
        submit: "Wyślij",
        hint: "Formularz demonstracyjny — podłącz backend według potrzeb.",
      },
    },
    offerPage: {
      title: "Oferta",
      intro:
        "Kompleksowe wsparcie w zakresie systemów nawigacyjnych, łączności i hydrografii dla jednostek wojskowych i cywilnych — produkty oraz usługi projektowe i szkoleniowe.",
      productsTitle: "Produkty",
      servicesTitle: "Usługi",
      productCategories: [
        {
          title: "Nawigacja",
          items: [
            "Systemy nawigacyjne",
            "Oświetlenie nawigacyjne",
            "INS",
            "Odbiorniki GNSS",
          ],
        },
        {
          title: "Łączność",
          items: [
            "VSAT",
            "Łączność wewnątrzokrętowa",
            "Łączność radiowa",
          ],
        },
        {
          title: "Hydrografia",
          items: [
            "Nawodne pojazdy bezzałogowe (USV)",
            "Echosondy wielowiązkowe",
            "Pojazdy podwodne (ROV/AUV)",
          ],
        },
        {
          title: "Ochrona środowiska",
          items: ["T-BWSS"],
        },
      ],
      serviceItems: ["Projektowanie", "Uruchomienia", "Szkolenia"],
    },
    newsPage: {
      title: "Aktualności",
      intro: "Relacje z projektów, targów i współpracy z partnerami.",
      back: "Wróć do strony głównej",
    },
    aboutPages: {
      common: {
        back: "Wróć do strony głównej",
      },
      hub: {
        title: "O nas",
        intro:
          "Poznaj nasze uprawnienia, wybrane realizacje oraz partnerów technologicznych.",
        certificatesDesc:
          "Koncesje MSWiA, certyfikacja WSK, wewnętrzny system kontroli i polityka jakości.",
        projectsDesc:
          "Instalacje, modernizacje i dostawy systemów nawigacji, łączności i hydrografii.",
        partnersDesc:
          "Wiodący producenci elektroniki okrętowej i technologii GNSS.",
        cta: "Otwórz",
      },
      certificates: {
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
        title: "Advanced navigation and communications for marine units",
        lead:
          "Thesta supports naval and civil fleets in design, supply, integration, and service of INS, GNSS, radar, and ECDIS/WECDIS systems.",
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
            body: "INS, GNSS, radar, and ECDIS — precise position and situational awareness at sea, from pilotage to tactical operations.",
            image:
              "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Communications",
            body: "VSAT, onboard links, and HF/VHF/UHF — dependable connectivity when the mission cannot afford radio silence.",
            image:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=2400&q=80",
          },
          {
            title: "Hydrography",
            body: "Sonars, multibeam echo sounders, and USV/AUV platforms — seabed mapping, environmental insight, and data for navigation and planning.",
            image:
              "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=2400&q=80",
          },
        ],
      },
      servicesSection: {
        title: "What we deliver",
        kicker: "Engineering · supply · integration · support",
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
        title: "News",
        all: "All news",
        readMore: "Read more",
        seeMore: "See more…",
        modalClose: "Close",
        modalImageCaption: "Image placeholder",
        items: [
          {
            date: "March 2026",
            title: "Thesta authorized distributor of KATFISH",
            excerpt:
              "An agreement with Kraken Robotics was signed at Oceanology International 2026.",
            modalBody:
              "Thesta is now an authorized distributor of Kraken Robotics’ KATFISH solution; the agreement was signed at Oceanology International 2026. We will publish more photos and details soon — this text and the image area above are placeholders.",
          },
          {
            date: "March 2026",
            title: "Support for Polish Navy UUV programmes",
            excerpt:
              "Agreement with Naval Port Command Gdynia for supplies related to towed sonars.",
            modalBody:
              "We signed an agreement with Naval Port Command Gdynia for material supplies related to towed sonars in Polish Navy uncrewed programmes. Full technical details will follow — this is placeholder copy.",
          },
          {
            date: "February 2026",
            title: "Cooperation with Exail and NORBIT at Oceanology International",
            excerpt: "Partner meetings during the London trade show.",
            modalBody:
              "We met with partners Exail and NORBIT at Oceanology International in London. A full story and gallery will be added later — the image block is a placeholder.",
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
        title: "How we work together",
        steps: [
          {
            title: "Discovery and requirements",
            body: "A short conversation about the vessel, mission type, and existing bridge infrastructure.",
          },
          {
            title: "Solution selection and concept",
            body: "We prepare configuration options for navigation, communications, and hydrography.",
          },
          {
            title: "Engineering, integration, and commissioning",
            body: "Documentation, integration with other ship systems, and sea trials.",
          },
          {
            title: "Service support and training",
            body: "Maintenance, upgrades, and crew training on new equipment.",
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
      intro:
        "Write or call — we respond on bridge navigation, communications, and hydrography.",
      form: {
        name: "Full name",
        email: "E-mail",
        message: "Message",
        submit: "Send",
        hint: "Demo form — connect your backend as needed.",
      },
    },
    offerPage: {
      title: "Offer",
      intro:
        "End-to-end support for navigation, communications, and hydrography on naval and civil vessels — products plus engineering and training services.",
      productsTitle: "Products",
      servicesTitle: "Services",
      productCategories: [
        {
          title: "Navigation",
          items: [
            "Navigation systems",
            "Navigation lighting",
            "INS",
            "GNSS receivers",
          ],
        },
        {
          title: "Communications",
          items: [
            "VSAT",
            "Internal ship communications",
            "Radio communications",
          ],
        },
        {
          title: "Hydrography",
          items: [
            "Uncrewed surface vehicles (USV)",
            "Multibeam echo sounders",
            "Underwater vehicles (ROV/AUV)",
          ],
        },
        {
          title: "Environmental protection",
          items: ["T-BWSS"],
        },
      ],
      serviceItems: ["Engineering", "Commissioning", "Training"],
    },
    newsPage: {
      title: "News",
      intro: "Updates from projects, trade shows, and partners.",
      back: "Back to home",
    },
    aboutPages: {
      common: {
        back: "Back to home",
      },
      hub: {
        title: "About us",
        intro:
          "Learn about our authorisations, selected projects, and technology partners.",
        certificatesDesc:
          "MSWiA licences, WSK certification, internal control system, and quality policy.",
        projectsDesc:
          "Installations, upgrades, and deliveries of navigation, communications, and hydrography systems.",
        partnersDesc:
          "Leading marine electronics and GNSS technology suppliers.",
        cta: "Open",
      },
      certificates: {
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
