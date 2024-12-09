# User Story

**US1:** Jako architekt chcę wyliczyć elektrykę dla piętra poto aby wiedzieć ile kupić gniazdek oraz żarówek

# Use case: UC-calc-electricity

_Tytuł:_ Oblieczanie elektryki ze statystykami

_Aktorzy:_ Architekt

_Warunki początkowe_: Architek musi dysponować plikiem z danymi piętra oraz listą parametrów technicznych

_Opis_:

1. Uzytkownik urchamia aplikację podając plik z danymi geometrii piętra.

2. System wczytuje parametry obliczeń.

3. System oblicza geometrię korytarza - następująco:

    - wybiera parametr N oznaczający maksymalną długość korytarza
    - zwraca listę pierwszych N punktów z geometrii piętra jako rezultat

4. System oblicza geometrię pomieszczeń - następująco:

    - wybiera parametr N oznaczający miminimalną liczbę narożników korytarza
    - z geometrii piętra usuwa wszystkie punkty korytarza
    - pozostałe punkty po kolei dzielny na grupy po N punktów (ostatnia grupa może mieć mniej)
    - każda grupa stanowi pomieszczenie

5. System oblicza całkowitą liczbę gniazdek w pomieszczeniach - następująco

    - wybiera parametr N oznaczającą liczbę gniazdek przypadających na ścianę pomieszczenia
    - wylicza lilczbę ścian S jako równą liczbie narożników pomieszczenia
    - wylicza liczbę gniazdek jako 2N

6. System oblicza ilości żarówek na piętrze - następująco:

    - oblicza powierzchnię każdego pomieszczenia
    - wybiera patametr N oznaczający ilość m<sup>2</sup> przypadających na żarówkę w pokoju
    - wybiera patametr M oznaczający ilość m<sup>2</sup> przypadających na żarówkę w korytarzu
    - wylicza powierzchnię A<sub>i</sub> dla _i_-tego pomieszcznia z P wszystkich pomieszczen [algorytmem Shoelaace](https://en.wikipedia.org/wiki/Shoelace_formula)
    - wylicza powierzchnię korytarza K
    - oblicza liczbę żarówek jako W = ⌈K/M⌉ + &#8721; ⌈A<sub>i</sub>/N⌉, gdzie i=1 do P

7. System zapisuje wyniki obliczeń

8. System informuje uzytkownika o zakończeniu obliczeń.

_Uwagi dodatkowe_: Ponieważ obliczenia są długotrwałe, system powinien informować uztytkownika o postępach.
