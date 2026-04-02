# Umowa o świadczenie usług konserwacji / utrzymania strony internetowej

**Uwaga:** W repozytorium nie znaleziono pliku „Analiza_wdrożeniowa”. Poniższy wzór dotyczy **utrzymania** serwisu wizytówkowego po wdrożeniu. Uzupełnij kwoty, limity godzin i SLA; treść **zweryfikuj z prawnikiem**.

---

**zawarta w dniu …………………… r. pomiędzy:**

**Zamawiający:**  
………………………………………………………………………………………………  

**Wykonawca:**  
………………………………………………………………………………………………  

zwanymi dalej łącznie „Stronami”,

## § 1. Przedmiot umowy

1. Przedmiotem umowy jest **świadczenie usług konserwacji i utrzymania** strony internetowej Zamawiającego opisanej w **Załączniku nr 1** (adres URL, technologia, środowisko produkcyjne).

2. Usługi mogą obejmować w ramach abonamentu (według pakietu w § 4):
   - **monitoring dostępności** serwisu (podstawowy, o ile uzgodniono);
   - **aktualizacje zależności** projektu (npm) i **build** w uzgodnionych interwałach — w zakresie bezpieczeństwa i kompatybilności;
   - **wdrożenia** zmian po stronie kodu po akceptacji Zamawiającego (np. poprawki błędów krytycznych);
   - **wsparcie techniczne** (kontakt e-mail / ticket) w godzinach ……………………;
   - **kopia zapasowa** konfiguracji repozytorium / instrukcja odtworzenia — *jeśli uzgodnione*.

3. **Wyłączone** z abonamentu (rozliczane odrębnie lub wg stawki godzinowej), o ile nie postanowiono inaczej:
   - nowe funkcjonalności wykraczające poza pierwotną specyfikację wizytówki;
   - obsługa treści marketingowych powyżej limitu godzin;
   - projektowanie graficzne od zera;
   - szkolenia powyżej uzgodnionego zakresu;
   - zmiany wynikające z decyzji Zamawiającego co do hostingu, DNS, certyfikatów — Wykonawca może je wykonać jako usługa dodatkowa.

## § 2. Czas trwania i wypowiedzenie

1. Umowa zostaje zawarta na czas **określony: …… miesięcy** od daty zawarcia, z **automatycznym przedłużeniem** na kolejne okresy **…… miesięcy**, o ile któraś ze Stron nie wypowie umowy z zachowaniem terminu **…… miesięcy** / **…… dni** kończących się najpóźniej w ostatnim dniu okresu rozliczeniowego.

2. Wypowiedzenie składa się **na piśmie** lub **e-mailem potwierdzonym zwrotką** na adresy wskazane w umowie.

## § 3. Obowiązki Zamawiającego

1. Zamawiający zapewnia dostęp do:
   - konta hostingu / Vercel / repozytorium — w zakresie niezbędnym do wykonania usług;
   - kontaktu osoby upoważnionej do decyzji (akceptacja wdrożeń).

2. Zamawiający informuje o incydentach (np. niedostępność strony) niezwłocznie po stwierdzeniu.

## § 4. Wynagrodzenie i pakiet godzin

1. Abonament miesięczny netto: **…………………… zł** (+ VAT) za pakiet **„………………”**.

2. Pakiet obejmuje do **…… godzin** pracy Wykonawcy miesięcznie na:
   - drobne zmiany treści (tekst, zdjęcia) w istniejących sekcjach;
   - konsultacje i diagnostykę;
   - drobne poprawki CSS/UX uzgodnione pisemnie lub ticketem.

3. Godziny niewykorzystane w danym miesiącu **nie przechodzą** na następny miesiąc, o ile Strony nie postanowią inaczej.

4. Praca powyżej limitu: stawka **………… zł netto / h** lub wycena indywidualna po akceptacji Zamawiającego.

5. Płatność: **do … dnia** miesiąca za dany miesiąc kalendarzowy / z góry — *wpisać wariant*.

## § 5. Poziom usług (SLA) — opcjonalnie

1. Czas reakcji na zgłoszenie **krytyczne** (brak dostępności strony): pierwsza odpowiedź w ciągu **…… godzin** roboczych.

2. Czas reakcji na zgłoszenie **standardowe**: **…… godzin** roboczych.

3. **Czas usunięcia usterki** zależy od przyczyny; Wykonawca nie odpowiada za awarie infrastruktury u dostawcy zewnętrznego poza kontrolą Wykonawcy — w takim przypadku wspiera Zamawiającego w komunikacji z dostawcą.

## § 6. Prawa autorskie i zmiany w kodzie

1. Zmiany wprowadzane w ramach konserwacji wchodzą w skład utworu na zasadach wynikających z umowy wdrożeniowej / przeniesienia praw, o ile umowy nie rozdzielono inaczej.

2. Kod może być przechowywany w repozytorium Wykonawcy lub Zamawiającego — zgodnie z Załącznikiem nr 1.

## § 7. Poufność i dane osobowe

1. Postanowienia o poufności jak w umowie głównej / wdrożeniowej; w razie braku — jak w § 7 umowy o wykonanie strony.

2. Dostęp do danych osobowych przetwarzanych przez formularz na stronie — zgodnie z polityką Zamawiającego; Wykonawca może przetwarzać dane wyłącznie w celu realizacji niniejszej umowy.

## § 8. Odpowiedzialność

1. Wykonawca dokłada staranności zawodowej. Odpowiedzialność ograniczona jest do **…… miesięcznych** opłat abonamentowych netto za okres, w którym powstała szkoda, z wyłączeniem umyślnego działania.

2. Wykonawca nie gwarantuje nieprzerwanej dostępności strony na poziomie 100% — o ile nie uzgodniono odrębnego SLA z karami umownymi.

## § 9. Siła wyższa

1. Za siłę wyższą uważa się zdarzenia niezależne od Stron; czas realizacji ulega przesunięciu.

## § 10. Postanowienia końcowe

1. W sprawach nieuregulowanych mają zastosowanie postanowienia umowy o wykonanie strony z dnia ……………………, a w braku — Kodeks cywilny.

2. Prawo polskie; sąd ……………………………

3. Integralną część stanowi **Załącznik nr 1**.

---

**Zamawiający** ………………………………  

**Wykonawca** ………………………………  

---

## Załącznik nr 1 — Opis środowiska i URL

| Pole | Wartość |
|------|---------|
| Adres produkcyjny strony | ………………………………………… |
| Hosting / CDN | np. Vercel / inne: …………………… |
| Repozytorium kodu | ………………………………………… |
| Kontakt awaryjny Zamawiającego | ………………………………………… |
| Kontakt serwisowy Wykonawcy | ………………………………………… |

**Uwagi:** ……………………………………………………………………………………

---

*Dokument ma charakter wzoru. Nie stanowi porady prawnej.*
