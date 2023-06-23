# egzui_renginiai


Administracinės srities aprašas ir jos privalomos funkcijos:

● Administracinė sritis sukurta naudojant NodeJS.
● Administracinės srities funkcijos prieinamos tik autentifikuotam vartotojui.
● Jeigu vartotojas nėra autentifikuotas, pradiniame puslapyje rodoma prisijungimo forma.
● Autentifikuotas vartotojas (Administratorius) gali patvirtinti renginį, blokuoti netinkamą 
turinį ir vartotojus, įvesti renginių kategorijas.
● Autentifikuotas vartotojas (Vartotojas) gali pridėti renginį nurodydamas pavadinimą,
kategoriją, laiką, vietą, nuotrauką. Vartotojas gali koreguoti savo paskelbtus renginius, 
juos ištrinti.
● Visą informacija iš administracinės srities į viešą sritį perduodama REST API.

Viešos srities aprašas ir jos privalomos funkcijos:

● Vieša sritis realizuota naudojant HTML5, CSS ir Bootstrap, JavaScript ir
React.
● Renginių paieška vykdoma naudojant filtrą pagal kategorijas ir renginio laiką.
● Renginys įvertinamas, paspaudus žvaigždutę, jo kortelės dešinėje. Po paspaudimo 
įvertinimas išsaugomas duomenų bazėje.
● Renginio kortelės dešinėje, virš žvaigždutės, sumuojamas bendras reitingas (paspaudimų 
skaičius).
