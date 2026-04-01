export type Locale = "pl" | "en";

export const defaultLocale: Locale = "pl";

export const messages = {
  pl: {
    nav: {
      home: "Strona główna",
      offer: "Oferta",
      news: "Aktualności",
      contact: "Kontakt",
      privacy: "Polityka prywatności",
      cookies: "Polityka plików cookies",
      menu: "Menu",
      menuOpen: "Otwórz menu nawigacji",
      menuClose: "Zamknij menu nawigacji",
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
        items: [
          {
            date: "Marzec 2026",
            title: "Thesta autoryzowanym dystrybutorem systemu KATFISH",
            excerpt:
              "Podczas Oceanology International 2026 podpisano porozumienie z Kraken Robotics.",
          },
          {
            date: "Marzec 2026",
            title: "Wsparcie dla bezzałogowych systemów MW RP",
            excerpt:
              "Umowa z Komendą Portu Wojennego Gdynia na dostawy materiałów dla sonarów holowanych.",
          },
          {
            date: "Luty 2026",
            title: "Współpraca z Exail i NORBIT na Oceanology International",
            excerpt:
              "Spotkania z partnerami biznesowymi podczas targów w Londynie.",
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
        "Kompleksowe wsparcie w zakresie systemów nawigacyjnych, łączności i hydrografii dla jednostek wojskowych i cywilnych.",
      sections: [
        {
          title: "Nawigacja",
          body: "INS/GNSS, radary, ECDIS/WECDIS — dobór, integracja, szkolenia i serwis.",
        },
        {
          title: "Łączność",
          body: "VSAT, systemy wewnątrzokrętowe, radiolinie HF/VHF/UHF — niezawodna komunikacja w misji.",
        },
        {
          title: "Hydrografia i środowisko",
          body: "Sonary, echosondy, platformy USV/AUV oraz rozwiązania do monitoringu środowiska morskiego.",
        },
      ],
    },
    newsPage: {
      title: "Aktualności",
      intro: "Relacje z projektów, targów i współpracy z partnerami.",
      back: "Wróć do strony głównej",
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
      privacy: "Privacy policy",
      cookies: "Cookie policy",
      menu: "Menu",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
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
        items: [
          {
            date: "March 2026",
            title: "Thesta authorized distributor of KATFISH",
            excerpt:
              "An agreement with Kraken Robotics was signed at Oceanology International 2026.",
          },
          {
            date: "March 2026",
            title: "Support for Polish Navy UUV programmes",
            excerpt:
              "Agreement with Naval Port Command Gdynia for supplies related to towed sonars.",
          },
          {
            date: "February 2026",
            title: "Cooperation with Exail and NORBIT at Oceanology International",
            excerpt: "Partner meetings during the London trade show.",
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
        "End-to-end support for navigation, communications, and hydrography on naval and civil vessels.",
      sections: [
        {
          title: "Navigation",
          body: "INS/GNSS, radar, ECDIS/WECDIS — selection, integration, training, and service.",
        },
        {
          title: "Communications",
          body: "VSAT, onboard networks, HF/VHF/UHF — dependable communications for the mission.",
        },
        {
          title: "Hydrography & environment",
          body: "Sonars, echo sounders, USV/AUV platforms, and marine environmental monitoring.",
        },
      ],
    },
    newsPage: {
      title: "News",
      intro: "Updates from projects, trade shows, and partners.",
      back: "Back to home",
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
