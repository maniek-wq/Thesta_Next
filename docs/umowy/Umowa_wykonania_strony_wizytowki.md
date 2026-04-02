---
title: "Umowa o wykonanie strony internetowej (wizytówki)"
lang: pl-PL
geometry: "top=2.5cm, bottom=2.5cm, left=3cm, right=2cm"
documentclass: article
fontsize: 11pt
linestretch: 1.3
header-includes:
  - \usepackage{booktabs}
  - \usepackage{array}
  - \usepackage{longtable}
  - \renewcommand{\arraystretch}{1.4}
---

---

> **UWAGA (dla wykonawcy i zamawiającego).** W repozytorium nie odnaleziono pliku „Analiza_wdrożeniowa". Zakres umowy odpowiada zaimplementowanemu serwisowi wizytówkowemu: **Next.js**, wielojęzyczność (**PL / EN**). Przed podpisaniem **uzupełnij** daty, harmonogram płatności, terminy i dane stron. Treść dokumentu **zweryfikuj z prawnikiem** — niniejszy plik ma charakter **wzoru**, nie jest poradą prawną.

---

\

<div align="center">

# UMOWA NR ……… / ………

## o wykonanie strony internetowej (wizytówki)

</div>

\

Zawarta w dniu **……………………………** roku, w **……………………………** (*miejscowość*).

---

## I. STRONY UMOWY

**Niniejsza umowa** zostaje zawarta pomiędzy:

### Zamawiający

| Pole                  | Dane                                          |
| :-------------------- | :-------------------------------------------- |
| **Nazwa / firma**     | ………………………………………………………………………………… |
| **Reprezentant**      | ………………………………………………………………………………… |
| **NIP**               | ………………………………………………………………………………… |
| **Adres**             | ………………………………………………………………………………… |
| **E-mail kontaktowy** | ………………………………………………………………………………… |

a

### Wykonawca

| Pole                  | Dane                                          |
| :-------------------- | :-------------------------------------------- |
| **Nazwa / firma**     | ………………………………………………………………………………… |
| **Reprezentant**      | ………………………………………………………………………………… |
| **NIP**               | ………………………………………………………………………………… |
| **Adres**             | ………………………………………………………………………………… |
| **E-mail kontaktowy** | ………………………………………………………………………………… |

zwanymi dalej łącznie **„Stronami"**, a każda z osobna **„Stroną"**.

---

## § 1. Przedmiot umowy

**1.** Przedmiotem umowy jest wykonanie i przekazanie Zamawiającemu **strony internetowej typu wizytówka** (serwis statyczno-dynamiczny) w technologii **Next.js (React)**, zgodnie ze specyfikacją zawartą w **Załączniku nr 1**, stanowiącym integralną część umowy.

**2.** Zakres funkcjonalny — szczegóły i ewentualne wyłączenia określa **Załącznik nr 1**:

| Obszar                   | Zakres prac                                                                                                                                                                       |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Strona główna**        | Sekcje: *hero* (wejście wizualne), *zakres usług*, *wskaźniki*, *aktualności* (skrót), *FAQ*, *kontakt*, *proces współpracy*, *referencje*.                                       |
| **Podstrony**            | Kontakt (formularz demonstracyjny), *oferta*, *aktualności*, *polityka prywatności*, *polityka plików cookies*.                                                                   |
| **Wersje językowe**      | Polski i angielski; przełącznik widoczny w nawigacji.                                                                                                                             |
| **Responsywność**        | Układ dostosowany do urządzeń mobilnych i desktopowych.                                                                                                                           |
| **Elementy UX**          | Ekran ładowania (motyw „radar"), baner cookies z wyborem zgody, dolny pasek szybkich akcji (telefon, kontakt, oferta, powrót na górę) — widoczny po przewinięciu strony w dół.    |
| **SEO i dostępność**     | Podstawowe metadane oraz dobre praktyki dostępności stosowane w projekcie.                                                                                                        |

**3.** **Hosting** i **domena** nie wchodzą w przedmiot niniejszej umowy, o ile Strony nie postanowią inaczej. Wykonawca może wskazać hosting rekomendowany (np. Vercel) i wesprzeć konfigurację wdrożenia.

---

## § 2. Materiały i współpraca Zamawiającego

**1.** Zamawiający dostarcza treści (teksty, logo, zdjęcia, dane kontaktowe, zgody prawne do publikacji) w terminie uzgodnionym z Wykonawcą.

**2.** Zamawiający odpowiada za prawdziwość treści merytorycznych oraz za zgodność publikacji z obowiązującym prawem (w tym **RODO** i prawem własności intelektualnej).

---

## § 3. Termin i odbiór

**1.** Termin wykonania: **……………………………** od dnia zawarcia umowy albo od dnia otrzymania kompletu materiałów od Zamawiającego — w zależności od tego, które zdarzenie nastąpi **później** (jeśli Strony tak uzgodnią).

**2.** Wykonawca przekazuje do odbioru **środowisko testowe / repozytorium / build** zgodnie z Załącznikiem nr 1.

**3.** Zamawiający dokonuje odbioru w terminie **……** dni roboczych od powiadomienia. Brak zgłoszenia usterek w tym terminie oznacza **domniemany odbiór**, z zastrzeżeniem usterek ukrytych.

**4.** Usterki **istotne** (uniemożliwiające korzystanie z podstawowej funkcji strony) usuwa Wykonawca w uzgodnionym terminie. **Drobne poprawki** oraz prace wykraczające poza Załącznik nr 1 mogą być rozliczane odrębnie albo w ramach **umowy konserwacji**.

---

## § 4. Wynagrodzenie i płatności

**1.** Wynagrodzenie ryczałtowe za wykonanie przedmiotu umowy:

| | |
| :--- | :--- |
| **Kwota netto** | **4 940,00 zł** |
| **Podatek VAT** | 23% → 1 136,20 zł |
| **Kwota brutto** | **6 076,20 zł** |

**2.** Wstępna wycena — rozpis godzinowy (stawka: **95,00 zł netto / godz.**, łącznie **52 h**):

| Lp. | Pozycja                                                                                         | Czas    | Stawka   | Kwota netto  |
| :-: | :---------------------------------------------------------------------------------------------- | :-----: | :------: | -----------: |
| 1   | Analiza wymagań + architektura widoków (home, offer, about, support, contact, privacy, news)    | 4 h     | 95 zł/h  |    380,00 zł |
| 2   | Layout globalny: navbar, footer, language switcher, spójny styl, routing                        | 6 h     | 95 zł/h  |    570,00 zł |
| 3   | Strona główna (hero, wskaźniki, FAQ, kontakt, sekcje contentowe)                                | 8 h     | 95 zł/h  |    760,00 zł |
| 4   | Sekcja aktualności + podstrona `/news` + przyciski „Czytaj dalej"                               | 5 h     | 95 zł/h  |    475,00 zł |
| 5   | Wspólny komponent modala (AppModal) + animacja sketch + backdrop / X / Escape                   | 6 h     | 95 zł/h  |    570,00 zł |
| 6   | A11y modala (focus trap, restore focus, aria, lock scroll)                                      | 4 h     | 95 zł/h  |    380,00 zł |
| 7   | Sekcja opinii klientów + carousel (desktop / mobile) + poprawki responsywne                     | 5 h     | 95 zł/h  |    475,00 zł |
| 8   | Tłumaczenia PL / EN (i18n) + podpięcie treści w komponentach                                   | 4 h     | 95 zł/h  |    380,00 zł |
| 9   | Formularz kontaktowy + walidacje frontend                                                       | 3 h     | 95 zł/h  |    285,00 zł |
| 10  | Drobne UX / UI (back-to-top, LinkedIn, spacing, typografia, stany)                              | 3 h     | 95 zł/h  |    285,00 zł |
| 11  | Deploy na Vercel + konfiguracja build / routing + poprawki wdrożeniowe                          | 2 h     | 95 zł/h  |    190,00 zł |
| 12  | QA / testy manualne + bugfixy końcowe                                                           | 2 h     | 95 zł/h  |    190,00 zł |
|     | **RAZEM**                                                                                       | **52 h** |          | **4 940,00 zł** |

**3.** Harmonogram płatności — zaznaczyć jeden wariant:

| Wariant | Opis                                                                  |
| :-----: | :-------------------------------------------------------------------- |
| **A**   | **……%** zaliczki po podpisaniu umowy + **……%** po odbiorze.           |
| **B**   | Płatność jednorazowa po odbiorze.                                     |
| **C**   | Inny harmonogram: ……………………………………………………………………                         |

**4.** Płatność przelewem na rachunek: **……………………………………………………………** — termin: **……** dni od daty wystawienia faktury.

---

## § 5. Prawa autorskie i licencja

**1.** Po zapłacie pełnego wynagrodzenia Wykonawca przenosi na Zamawiającego **autorskie prawa majątkowe** do utworu w zakresie niezbędnym do korzystania ze strony w Internecie (utrwalanie, zwielokrotnianie, wprowadzanie do obrotu w postaci cyfrowej, publiczne udostępnianie) — **na polach eksploatacji** związanych z prowadzeniem serwisu WWW Zamawiającego.

**2.** Wykonawca może zachować prawo do **użycia realizacji w portfolio** (nazwa klienta, zrzuty ekranu), chyba że Zamawiający wyłączy to **pisemnie**.

**3.** **Oprogramowanie otwartoźródłowe** (biblioteki, frameworki) podlega własnym licencjom; Wykonawca nie przenosi praw do kodu podmiotów trzecich.

---

## § 6. Gwarancja

**1.** Wykonawca udziela gwarancji na usuwanie **wad** wynikających z niewłaściwego wykonania przez okres **……** miesięcy od odbioru, z wyłączeniem wad spowodowanych zmianami wprowadzonymi przez Zamawiającego lub osoby trzecie **bez zgody** Wykonawcy.

**2.** Gwarancja **nie obejmuje**: bieżących aktualizacji treści, skutków zmian przepisów, awarii hostingu u dostawcy Zamawiającego ani incydentów wynikających z niskiego poziomu zabezpieczeń infrastruktury Zamawiającego.

---

## § 7. Poufność i dane osobowe

**1.** Strony zachowują w **poufności** informacje oznaczone jako poufne lub co do których poufność wynika z okoliczności.

**2.** W zakresie przetwarzania danych osobowych w związku z wykonaniem umowy Strony mogą zawrzeć **umowę powierzenia** (opcjonalnie: Załącznik nr 2).

---

## § 8. Odpowiedzialność

**1.** Odpowiedzialność Wykonawcy ogranicza się do **rzeczywistej szkody** i — co do zasady — do wysokości **wynagrodzenia netto** zapłaconego za przedmiot umowy, z wyłączeniem szkód wyrządzonych **umyślnie**.

**2.** Wykonawca **nie odpowiada** za utracone korzyści po stronie Zamawiającego.

---

## § 9. Rozwiązanie umowy

**1.** Każda ze Stron może rozwiązać umowę z **ważnych powodów**, z zachowaniem **……** dni pisemnego wypowiedzenia.

**2.** W przypadku opóźnienia płatności powyżej **……** dni Wykonawca może **wstrzymać prace** do czasu uregulowania należności.

---

## § 10. Postanowienia końcowe

**1.** Zmiany umowy wymagają formy **pisemnej** pod rygorem nieważności, o ile ustawa nie stanowi inaczej.

**2.** Prawem właściwym jest prawo **polskie**. Spory rozstrzyga sąd właściwy dla siedziby: **……………………………………** *(wskazać)*.

**3.** Umowę sporządzono w **dwóch** jednobrzmiących egzemplarzach — po jednym dla każdej ze Stron.

---

## Podpisy Stron

\

| | |
| :--- | :--- |
| Miejscowość i data: ……………………… | Miejscowość i data: ……………………… |
| \  | \  |
| \  | \  |
| \  | \  |
| **…………………………………………………** | **…………………………………………………** |
| Zamawiający — podpis i pieczęć | Wykonawca — podpis i pieczęć |

---

\newpage

<div align="center">

# ZAŁĄCZNIK NR 1

## Specyfikacja techniczna strony wizytówki

*Integralna część umowy. Dostosować do ostatecznego zakresu.*

</div>

\

| Element                    | Opis                                                                                                                             |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **Technologia**            | Next.js (App Router), TypeScript; hosting zalecany zgodnie z dokumentacją projektu.                                             |
| **Języki interfejsu**      | PL / EN.                                                                                                                         |
| **Strona główna**          | Hero (pełny ekran wejścia), usługi, statystyki, skrót aktualności, FAQ, blok kontaktowy, proces współpracy, referencje.         |
| **Ścieżki podstron**       | `/contact`, `/offer`, `/news`, `/privacy`, `/cookies`.                                                                           |
| **Nawigacja**              | Menu desktop, menu mobilne (hamburger), stopka z linkami.                                                                        |
| **Cookies / RODO**         | Baner zgody; treści polityk — szablony do akceptacji prawnej Zamawiającego.                                                      |
| **Formularz kontaktowy**   | Wersja demonstracyjna; podłączenie backendu po stronie Zamawiającego lub na podstawie odrębnej umowy.                            |
| **SEO**                    | Podstawowe metadane (tytuł, opis, Open Graph).                                                                                   |
| **Dostępność (a11y)**      | Zgodność z dobrymi praktykami WCAG; m.in. focus trap w modalach, aria-label, obsługa klawiatury.                                 |

\

**Uwagi dodatkowe Zamawiającego / Wykonawcy:**

……………………………………………………………………………………………………………………………………………………………………………

……………………………………………………………………………………………………………………………………………………………………………

……………………………………………………………………………………………………………………………………………………………………………

---

<div align="center">

*Koniec umowy i Załącznika nr 1*

</div>
