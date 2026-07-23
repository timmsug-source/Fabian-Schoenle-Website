# CMS-Felder — FS-Performance (Slug: `fs-performance`)

Alle im Frontend angebundenen Textfelder. Jeder Key wird über die Supabase-RPC
`get_site_content(p_slug => 'fs-performance')` geladen und ersetzt den fest
codierten Text. Fehlt ein Key im CMS, greift automatisch der unten stehende
Fallback (aktueller Text) — es geht also nichts kaputt.

> Highlight-Felder (`*_highlight`) werden im Gold-Verlauf hervorgehoben.
> `*_title_1` / `*_title_2` sind zwei Zeilen einer Überschrift (Umbruch dazwischen).

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Hero | `hero_label` | Kicker-Label | High-Performance Coaching |
| Hero | `hero_title_1` | H1 Teil 1 | Als leistungsorientierter Mann trotz vollem Kalender |
| Hero | `hero_title_highlight` | H1 Highlight (gold) | mentale und körperliche Bestform |
| Hero | `hero_title_2` | H1 Teil 2 | erreichen |
| Hero | `hero_subtitle` | Subheadline | Ich verhelfe dir zu mehr Energie und Fokus im Alltag und lasse dich wieder mit einem selbstbewussten Blick in den Spiegel schauen. |
| Hero | `hero_bullet1_title` | Bullet 1 Titel | Datenbasierte Strategie |
| Hero | `hero_bullet1_body` | Bullet 1 Text | Durch individuelle DNA- & Blutwerte identifizieren wir die Hebel, die bei dir wirklich entscheidend sind. |
| Hero | `hero_bullet2_title` | Bullet 2 Titel | Erlange deine körperliche & mentale Bestform |
| Hero | `hero_bullet2_body` | Bullet 2 Text | Durch individuelle Trainings- und Ernährungsansätze spürst du, wie sich deine Fitness kontinuierlich verbessert. |
| Hero | `hero_bullet3_title` | Bullet 3 Titel | Erziele nachhaltige Ergebnisse |
| Hero | `hero_bullet3_body` | Bullet 3 Text | Durch eine logisch nachvollziehbare Methode entstehen Ergebnisse, die langfristig bestehen. |
| Hero | `hero_cta` | CTA-Button | Performance Analyse buchen |
| Hero | `hero_cta_note` | CTA-Hinweis | Call mit mir persönlich · 30 Minuten |
| Muster-Check | `muster_label` | Kicker-Label | Kennst du das? |
| Muster-Check | `muster_title_1` | Titel Zeile 1 | Wenn dein Körper nicht mehr so |
| Muster-Check | `muster_title_2` | Titel Zeile 2 | belastbar ist wie früher |
| Muster-Check | `muster_intro` | Intro | Diese Symptome sind kein Zufall, sondern ein Signal deines Körpers. Tippe an, was auf dich zutrifft. |
| Wahrheit | `wahrheit_label` | Kicker-Label | Die Wahrheit |
| Wahrheit | `wahrheit_title_1` | Titel Zeile 1 | Warum deine Ansätze bisher |
| Wahrheit | `wahrheit_title_2` | Titel Zeile 2 | keine Ergebnisse lieferten |
| Wahrheit | `wahrheit_body` | Fließtext | Leistungsorientierte Menschen wollen ihr Problem mit mehr Disziplin lösen, weil sie das aus ihrem beruflichen Leben gewohnt sind. Dadurch wählen sie radikale Ansätze, die zu Heißhunger und Jo-Jo-Effekt führen — und dann entsteht Frustration, die sich durch mehr Stress und damit ein hormonelles Ungleichgewicht (Testosteron sinkt usw.) äußert. Die meisten lassen dann einige Monate vergehen und fangen mit dem nächsten Motivationsschub und noch mehr Disziplin wieder von vorne an… |
| Wahrheit | `wahrheit_quote` | Zitat | Wir nutzen die uns zur Verfügung stehenden Ressourcen, um neben Job, Familie und Alltag das Beste rauszuholen. |
| Wahrheit | `wahrheit_quote_author` | Zitat-Autor | Fabian Schönle |
| Wahrheit | `wahrheit_quote_role` | Zitat-Rolle | Performance Coach · PhD Chemie |
| Ergebnisse | `ergebnis_label` | Kicker-Label | Ergebnisse |
| Ergebnisse | `ergebnis_title_1` | Titel Zeile 1 | Ergebnisse, die wirklich einen |
| Ergebnisse | `ergebnis_title_2` | Titel Zeile 2 | Unterschied machen! |
| Ergebnisse | `ergebnis_intro` | Intro | Kein kurzfristiger Effekt. Sondern eine Verschiebung, die du in jedem Bereich deines Lebens spürst. |
| Ergebnisse | `ergebnis_col1_label` | Spalte 1 Titel | Körperlich |
| Ergebnisse | `ergebnis_col2_label` | Spalte 2 Titel | Mental |
| Ergebnisse | `ergebnis_col3_label` | Spalte 3 Titel | Beruflich |
| Ergebnisse | `ergebnis_quote` | Zitat | Das Ziel ist nicht nur ein besserer Körper. Das Ziel ist, dass du wieder auf dem Niveau performst, das du von dir selbst erwartest. |
| Ergebnisse | `ergebnis_quote_author` | Zitat-Autor | Fabian Schönle |
| Ergebnisse | `ergebnis_quote_role` | Zitat-Rolle | Performance Coach · PhD Chemie |
| Ergebnisse | `ergebnis_reviews_line1` | Bewertungen Zeile 1 | Das sind keine Versprechen. |
| Ergebnisse | `ergebnis_reviews_line2` | Bewertungen Zeile 2 (gold) | Das sind echte Bewertungen. |
| Ergebnisse | `ergebnis_cta_title` | CTA-Kachel Titel | Werde die nächste Bewertung. |
| Ergebnisse | `ergebnis_cta_body` | CTA-Kachel Text | Im kostenlosen Erstgespräch finden wir heraus, was dein System gerade limitiert — unverbindlich und ohne Druck. |
| Ergebnisse | `ergebnis_cta_button` | CTA-Button | Performance Analyse buchen |
| Lösung | `loesung_label` | Kicker-Label | High-Performance Coaching |
| Lösung | `loesung_title_1` | Titel Zeile 1 | Eine datenbasierte Strategie — |
| Lösung | `loesung_title_2` | Titel Zeile 2 | durch einen präzisen und individuellen Ansatz |
| Lösung | `loesung_intro` | Intro | Ich analysiere, was deinen Körper gerade limitiert. Und stelle dann genau die Hebel ein, die wirklich einen Unterschied machen. |
| Lösung | `loesung_pillar1_headline` | Karte 1 Titel | Blutanalyse |
| Lösung | `loesung_pillar1_body` | Karte 1 Text | Wir schauen rein, was wirklich passiert — Hormonstatus, Mikronährstoffe, Entzündungsmarker. Keine Vermutungen, sondern Fakten. |
| Lösung | `loesung_pillar2_headline` | Karte 2 Titel | DNA-Analyse |
| Lösung | `loesung_pillar2_body` | Karte 2 Text | Deine Genetik bestimmt, wie dein Körper auf Ernährung, Training und Stress reagiert. Wir nutzen das als Grundlage — nicht als Ausrede. |
| Lösung | `loesung_pillar3_headline` | Karte 3 Titel | Ernährung |
| Lösung | `loesung_pillar3_body` | Karte 3 Text | Kein Verbotskatalog. Kein Kalorienrechner. Sondern ein Ernährungsansatz, der auf deinen Stoffwechsel, deinen Alltag und deine Ziele abgestimmt ist. |
| Lösung | `loesung_pillar4_headline` | Karte 4 Titel | Training |
| Lösung | `loesung_pillar4_body` | Karte 4 Text | Wie viel, wie oft, welche Reize — abgestimmt auf dein Hormonsystem und deine Regenerationsfähigkeit. Nicht mehr als nötig, aber genau das Richtige. |
| Lösung | `loesung_pillar5_headline` | Karte 5 Titel | Schlaf & Regeneration |
| Lösung | `loesung_pillar5_body` | Karte 5 Text | Schlechter Schlaf sabotiert alles andere. Wir identifizieren, was deine Regeneration blockiert — und beheben es systematisch. |
| Lösung | `loesung_pillar6_headline` | Karte 6 Titel | Tracking & Anpassung |
| Lösung | `loesung_pillar6_body` | Karte 6 Text | Über eine App verfolgen wir kontinuierlich deine wichtigsten Parameter. Was funktioniert, wird verstärkt. Was nicht funktioniert, wird angepasst. |
| Video-Testimonials | `fallstudien_label` | Kicker-Label | Echte Ergebnisse |
| Video-Testimonials | `fallstudien_title_1` | Titel Zeile 1 | So fühlt es sich an, wenn man sich |
| Video-Testimonials | `fallstudien_title_2` | Titel Zeile 2 | die Kontrolle zurückholt |
| Video-Testimonials | `fallstudien_cta_title_1` | CTA Titel Teil 1 | Wir entwickeln für dich eine |
| Video-Testimonials | `fallstudien_cta_highlight` | CTA Highlight (gold) | maßgeschneiderte Strategie |
| Video-Testimonials | `fallstudien_cta_title_2` | CTA Titel Teil 2 | , die deine Bedürfnisse und deinen Terminkalender berücksichtigt |
| Video-Testimonials | `fallstudien_cta_button` | CTA-Button | Kostenlose Performance-Analyse buchen |
| Vergleich | `vergleich_label` | Kicker-Label | Der Unterschied |
| Vergleich | `vergleich_title_1` | Titel Teil 1 | Warum du |
| Vergleich | `vergleich_highlight` | Highlight (gold) | mit mir |
| Vergleich | `vergleich_title_2` | Titel Teil 2 | zusammenarbeiten solltest |
| Über mich | `uebermich_label` | Kicker-Label | Über Fabian Schönle |
| Über mich | `uebermich_title_1` | Titel Zeile 1 | Ich war selbst da, |
| Über mich | `uebermich_title_2` | Titel Zeile 2 | wo du gerade stehst. |
| Über mich | `uebermich_para1` | Absatz 1 | Studium. Nebenjob. Leistungssport. Familie. Irgendwann kommt der Punkt, an dem du merkst: Der Körper zieht nicht mehr mit. |
| Über mich | `uebermich_para2` | Absatz 2 | Nicht weil du weniger diszipliniert bist. Sondern weil du irgendwann anfängst, ihn zu ignorieren — weil Business, Familie und Alltag mehr Raum einnehmen als alles andere. |
| Über mich | `uebermich_para3` | Absatz 3 (hervorgehoben) | Genau das war mein Ausgangspunkt. |
| Über mich | `uebermich_para4` | Absatz 4 | Ich habe Chemie studiert — auf PhD-Niveau. Ich habe gelernt, komplexe Systeme zu analysieren, Zusammenhänge zu verstehen und Lösungen zu entwickeln, die auf Daten basieren, nicht auf Annahmen. Irgendwann habe ich angefangen, denselben Blick auf meinen eigenen Körper zu richten. |
| Über mich | `uebermich_para5` | Absatz 5 | Was ich dabei verstanden habe: Die meisten Menschen scheitern nicht an Disziplin. Sie scheitern daran, dass niemand je gemessen hat, was ihr System wirklich braucht. Kein Arzt. Kein Trainer. Kein Coach. |
| Über mich | `uebermich_para6` | Absatz 6 | Aus dieser Erkenntnis ist FS-Performance entstanden — ein High-Performance Coaching, das den Körper so behandelt, wie du dein Business behandelst: datenbasiert, strategisch und mit klarem Ziel. |
| Über mich | `uebermich_cta_button` | CTA-Button | Performance Analyse buchen |
| Kontakt | `kontakt_label` | Kicker-Label | High-Performance Coaching starten |
| Kontakt | `kontakt_title` | Überschrift | Finde heraus, was dein System gerade limitiert. |
| Kontakt | `kontakt_intro1` | Intro 1 | Kein Verkaufsgespräch. Kein Vertrag. Nur 30 Minuten, in denen wir gemeinsam analysieren, wo der Hebel bei dir liegt. |
| Kontakt | `kontakt_intro2` | Intro 2 | Der erste Schritt ist eine kostenlose Performance-Analyse. Du bekommst danach Klarheit darüber, warum dein Körper gerade nicht so reagiert wie du es willst — und was konkret dagegen getan werden kann. |
| Kontakt | `kontakt_cta_button` | CTA-Button | Performance Analyse buchen |
| Ablauf | `ablauf_label` | Kicker-Label | So läuft es ab |
| Ablauf | `ablauf_title` | Überschrift | Drei Schritte bis zu deinem Plan |
| Ablauf | `ablauf_cta_button` | CTA-Button | Jetzt kostenlosen Termin sichern |
| FAQ | `faq_label` | Kicker-Label | Häufige Fragen |
| FAQ | `faq_title_1` | Titel Zeile 1 | Fragen, die in der |
| FAQ | `faq_title_2` | Titel Zeile 2 | Vergangenheit gestellt wurden |
| FAQ | `faq1_frage` | Frage 1 | Ich habe schon vieles probiert — warum sollte das hier anders sein? |
| FAQ | `faq1_antwort` | Antwort 1 | Weil wir nicht raten. Bevor wir irgendetwas verändern, analysieren wir über Blut- und DNA-Werte, was dein System gerade wirklich limitiert. Kein generischer Plan, der für den Durchschnitt gemacht wurde — sondern eine Strategie, die auf deine Biologie abgestimmt ist. Das ist der Unterschied. |
| FAQ | `faq2_frage` | Frage 2 | Ich habe kaum Zeit. Funktioniert das trotzdem? |
| FAQ | `faq2_antwort` | Antwort 2 | Ja — und genau dafür ist dieser Ansatz gemacht. Die Zielgruppe sind Selbstständige und Unternehmer mit hoher Belastung und wenig Zeit. Ernährung, Training und Alltag werden so aufgebaut, dass sie in dein Leben passen — nicht umgekehrt. |
| FAQ | `faq3_frage` | Frage 3 | Muss ich komplett auf etwas verzichten? |
| FAQ | `faq3_antwort` | Antwort 3 | Nein. Es geht nicht um Verbote oder Einschränkungen, sondern darum, zu verstehen, was dein Körper braucht. Wer weiß, wie sein System funktioniert, muss nicht auf Genuss verzichten — er trifft einfach bessere Entscheidungen. |
| FAQ | `faq4_frage` | Frage 4 | Wie schnell sehe ich erste Ergebnisse? |
| FAQ | `faq4_antwort` | Antwort 4 | Die meisten Kunden spüren innerhalb der ersten 4–6 Wochen eine spürbare Veränderung bei Energie und Fokus. Sichtbare Veränderungen in der Körperkomposition entstehen typischerweise innerhalb von 2–4 Monaten — abhängig von Ausgangslage und Konsequenz in der Umsetzung. |
| FAQ | `faq5_frage` | Frage 5 | Was kostet das Coaching? |
| FAQ | `faq5_antwort` | Antwort 5 | Das lässt sich pauschal nicht beantworten — weil der Aufwand von deiner Ausgangslage, deinen Zielen und der gewünschten Betreuungsintensität abhängt. Im kostenlosen Erstgespräch besprechen wir, was für dich sinnvoll ist und was es kostet. |
| FAQ | `faq6_frage` | Frage 6 | Ist das auch online möglich? |
| FAQ | `faq6_antwort` | Antwort 6 | Ja. Die gesamte Zusammenarbeit läuft online ab — Erstgespräch, Analysen, Check-ins, Tracking. Du brauchst nichts außer einem Laptop oder Smartphone und die Bereitschaft, die Analyse-Kits zu nutzen. |
| FAQ | `faq7_frage` | Frage 7 | Was passiert nach dem Erstgespräch? |
| FAQ | `faq7_antwort` | Antwort 7 | Du bekommst eine ehrliche Einschätzung deiner Situation — und einen klaren Vorschlag, wie eine Zusammenarbeit aussehen würde. Kein Druck, keine Verpflichtung. Du entscheidest danach in Ruhe. |

## Muster-Check — interaktive Karten & Ergebnis-Anzeige

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Muster-Check | `muster_result_label` | Ergebnis-Label | Dein Muster-Check |
| Muster-Check | `muster_stufe_0` | Ergebnis-Stufe 0 | Noch nichts ausgewählt |
| Muster-Check | `muster_stufe_1` | Ergebnis-Stufe 1 | Wichtigster Ansatzpunkt |
| Muster-Check | `muster_stufe_2` | Ergebnis-Stufe 2 | Mehrere Ansatzpunkte und erkennbares Potenzial |
| Muster-Check | `muster_stufe_3` | Ergebnis-Stufe 3 | Zahlreiche Ansatzpunkte und deutliches Potenzial |
| Muster-Check | `muster_bereich_connector` | Verbinder | ` im Bereich: ` |
| Muster-Check | `muster_cluster_stoffwechsel` | Cluster 1 | Stoffwechsel & Körperzusammensetzung |
| Muster-Check | `muster_cluster_erholung` | Cluster 2 | Erholung & Energie |
| Muster-Check | `muster_cluster_balance` | Cluster 3 | Innere Balance |
| Muster-Check | `muster_hint` | Hinweis | Tippe auf die Punkte, die zutreffen |
| Muster-Check | `muster_disclaimer` | Disclaimer | Keine Diagnostik – erste Orientierung |
| Muster-Check | `muster_cta_button` | CTA-Button | Performance Analyse buchen |
| Muster-Check | `muster_cta_note_active` | CTA-Hinweis (aktiv) | Wir besprechen genau die Punkte, die du markiert hast. |
| Muster-Check | `muster_cta_note_inactive` | CTA-Hinweis (leer) | Markiere zuerst, was auf dich zutrifft. |
| Muster-Check | `muster_symptom_bauchfett_title` | Karte 1 Titel | Hartnäckiges Bauchfett |
| Muster-Check | `muster_symptom_bauchfett_desc` | Karte 1 Text | Egal was du isst oder wie oft du trainierst, es bleibt. |
| Muster-Check | `muster_symptom_energie_title` | Karte 2 Titel | Fehlende Energie |
| Muster-Check | `muster_symptom_energie_desc` | Karte 2 Text | Nachmittags ist der Fokus weg. Du läufst auf Sparflamme. |
| Muster-Check | `muster_symptom_schlaf_title` | Karte 3 Titel | Unerholsamer Schlaf |
| Muster-Check | `muster_symptom_schlaf_desc` | Karte 3 Text | Du schläfst, wachst aber nicht ausgeruht auf. |
| Muster-Check | `muster_symptom_muskel_title` | Karte 4 Titel | Langsamer Muskelaufbau |
| Muster-Check | `muster_symptom_muskel_desc` | Karte 4 Text | Du investierst Zeit im Training, doch der Körper reagiert kaum. |
| Muster-Check | `muster_symptom_jojo_title` | Karte 5 Titel | Jo-Jo-Effekt |
| Muster-Check | `muster_symptom_jojo_desc` | Karte 5 Text | Du hast vieles versucht. Kein Ergebnis hat sich gehalten. |
| Muster-Check | `muster_symptom_koerpergefuehl_title` | Karte 6 Titel | Schlechtes Körpergefühl |
| Muster-Check | `muster_symptom_koerpergefuehl_desc` | Karte 6 Text | Der Spiegel zeigt jemanden, der nicht deinem Anspruch entspricht. |
| Muster-Check | `muster_symptom_stimmung_title` | Karte 7 Titel | Stimmungsschwankungen |
| Muster-Check | `muster_symptom_stimmung_desc` | Karte 7 Text | Manche Tage läuft es, andere nicht. Kein verlässliches Niveau. |
| Muster-Check | `muster_symptom_brainfog_title` | Karte 8 Titel | Brainfog |
| Muster-Check | `muster_symptom_brainfog_desc` | Karte 8 Text | Konzentration und Klarheit fühlen sich nicht mehr wie früher an. |

## Ergebnisse — Stichpunkte je Spalte

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Ergebnisse | `ergebnis_col1_punkt1` | Körperlich 1 | Deutlicher Fettabbau — vor allem am Bauch |
| Ergebnisse | `ergebnis_col1_punkt2` | Körperlich 2 | Mehr Muskeldefinition ohne exzessives Training |
| Ergebnisse | `ergebnis_col1_punkt3` | Körperlich 3 | Schlaf, der wirklich erholt |
| Ergebnisse | `ergebnis_col1_punkt4` | Körperlich 4 | Energie, die den ganzen Tag stabil bleibt |
| Ergebnisse | `ergebnis_col1_punkt5` | Körperlich 5 | Blutwerte, die sich messbar verbessern |
| Ergebnisse | `ergebnis_col2_punkt1` | Mental 1 | Klarer Kopf — auch unter hoher Belastung |
| Ergebnisse | `ergebnis_col2_punkt2` | Mental 2 | Stabilere Stimmung, weniger Schwankungen |
| Ergebnisse | `ergebnis_col2_punkt3` | Mental 3 | Mehr Antrieb und Entscheidungsfreude |
| Ergebnisse | `ergebnis_col2_punkt4` | Mental 4 | Kein Nachmittagstief mehr |
| Ergebnisse | `ergebnis_col2_punkt5` | Mental 5 | Das Gefühl, wieder Kontrolle zu haben |
| Ergebnisse | `ergebnis_col3_punkt1` | Beruflich 1 | Höhere Leistungsfähigkeit über den gesamten Tag |
| Ergebnisse | `ergebnis_col3_punkt2` | Beruflich 2 | Bessere Präsenz in Meetings und Gesprächen |
| Ergebnisse | `ergebnis_col3_punkt3` | Beruflich 3 | Weniger Reaktivität, mehr strategisches Denken |
| Ergebnisse | `ergebnis_col3_punkt4` | Beruflich 4 | Das Selbstbild passt wieder zum eigenen Anspruch |

## Vergleich — Zeilen-Bezeichnungen

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Vergleich | `vergleich_feature1` | Zeile 1 | Individuelle DNA-/Bluttests |
| Vergleich | `vergleich_feature2` | Zeile 2 | Datenbasierte Strategie |
| Vergleich | `vergleich_feature3` | Zeile 3 | Kontinuierliche Strategieoptimierung |
| Vergleich | `vergleich_feature4` | Zeile 4 | Individuelle Ernährungsstrategie |
| Vergleich | `vergleich_feature5` | Zeile 5 | Alltagsoptimierte Trainingsroutine |
| Vergleich | `vergleich_feature6` | Zeile 6 | 24/7 Chatsupport |
| Vergleich | `vergleich_feature7` | Zeile 7 | Persönlicher Ansprechpartner |

## Kontakt — Trust-Punkte & Ablauf-Schritte

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Kontakt | `kontakt_trust1_titel` | Trust 1 Titel | Kostenlos & unverbindlich |
| Kontakt | `kontakt_trust1_text` | Trust 1 Text | Kein Druck, keine versteckten Kosten. Du entscheidest danach, ob wir zusammenarbeiten. |
| Kontakt | `kontakt_trust2_titel` | Trust 2 Titel | 30 Minuten — kein Stunden-Call |
| Kontakt | `kontakt_trust2_text` | Trust 2 Text | Respekt für deine Zeit. Wir kommen schnell auf den Punkt. |
| Kontakt | `kontakt_trust3_titel` | Trust 3 Titel | Online — von überall |
| Kontakt | `kontakt_trust3_text` | Trust 3 Text | Kein Anfahrtsweg. Kein Termin vor Ort. Einfach buchen und fertig. |
| Ablauf | `ablauf_schritt1_titel` | Schritt 1 Titel | Termin sichern |
| Ablauf | `ablauf_schritt1_text` | Schritt 1 Text | Wähle einen freien Slot direkt im Kalender — 30 Minuten, online, ohne Vorgespräch. Kein Verkaufsgespräch, kein Smalltalk. Du buchst einen konkreten Analysetermin. |
| Ablauf | `ablauf_schritt2_titel` | Schritt 2 Titel | Analyse-Call |
| Ablauf | `ablauf_schritt2_text` | Schritt 2 Text | Wir schauen gemeinsam, was dein System gerade limitiert. Keine Floskeln — echte Analyse auf Basis deiner Daten. Du redest, ich höre zu und stelle die richtigen Fragen. |
| Ablauf | `ablauf_schritt3_titel` | Schritt 3 Titel | Dein individueller Plan |
| Ablauf | `ablauf_schritt3_text` | Schritt 3 Text | Du bekommst Klarheit über den nächsten konkreten Schritt — und wie eine Zusammenarbeit aussehen würde. Kein Druck, keine Verpflichtung. Du entscheidest danach in Ruhe. |

## Video-Testimonials — Fallstudien (je Fallstudie 14 Felder)

> `_problem` / `_ziel` / `_loesung` dürfen einfaches HTML (`<strong>…</strong>`) enthalten.
> `fallstudien2_*` (Richard) sind aktuell PLATZHALTER.

| Modul | Key | Label | Aktueller Text |
|---|---|---|---|
| Fallstudie 1 | `fallstudien1_name` | Name | Robert |
| Fallstudie 1 | `fallstudien1_alter` | Alter | 42 Jahre |
| Fallstudie 1 | `fallstudien1_beruf` | Beruf | Geschäftsführer |
| Fallstudie 1 | `fallstudien1_problem` | Problem | Robert arbeitet **60+ Stunden pro Woche**. Sein Körper hat auf die jahrelange Kombination aus **Dauerstress, schlechtem Schlaf** und unregelmäßiger Ernährung reagiert: 14 kg zugenommen, permanent müde, nachmittags kaum noch handlungsfähig. |
| Fallstudie 1 | `fallstudien1_ziel` | Ziel | Er will wieder die **Energie haben, die er mit Anfang 30 hatte** — leistungsfähig durch den ganzen Tag, ohne auf Koffein angewiesen zu sein. Und er will, dass sein Körper wieder seinem eigenen Anspruch entspricht. |
| Fallstudie 1 | `fallstudien1_loesung` | Lösung | Blutbild und Hormonstatus zeigten **deutlich erhöhte Cortisolwerte** und eine beginnende Insulinresistenz. Wir haben Ernährung, Schlafprotokoll und Trainingsreize präzise auf seinen Stoffwechsel abgestimmt — ohne seinen Alltag auf den Kopf zu stellen. |
| Fallstudie 1 | `fallstudien1_vorher_gewicht` | Vorher Gewicht | 98 kg |
| Fallstudie 1 | `fallstudien1_vorher_punkt1` | Vorher 1 | Permanent erschöpft trotz 7 Stunden Schlaf |
| Fallstudie 1 | `fallstudien1_vorher_punkt2` | Vorher 2 | Konzentration bricht nachmittags komplett ein |
| Fallstudie 1 | `fallstudien1_vorher_punkt3` | Vorher 3 | Bauchfett trotz gelegentlichem Sport |
| Fallstudie 1 | `fallstudien1_nachher_gewicht` | Nachher Gewicht | 84 kg |
| Fallstudie 1 | `fallstudien1_nachher_punkt1` | Nachher 1 | Stabile Energie ohne Koffein-Spitzen |
| Fallstudie 1 | `fallstudien1_nachher_punkt2` | Nachher 2 | Klarer Kopf bis in den Abend |
| Fallstudie 1 | `fallstudien1_nachher_punkt3` | Nachher 3 | −14 kg Körpergewicht in 5 Monaten |
| Fallstudie 2 | `fallstudien2_name` | Name | Richard |
| Fallstudie 2 | `fallstudien2_alter` | Alter | PLATZHALTER |
| Fallstudie 2 | `fallstudien2_beruf` | Beruf | PLATZHALTER |
| Fallstudie 2 | `fallstudien2_problem` | Problem | PLATZHALTER — bitte Richards Ausgangssituation ergänzen. |
| Fallstudie 2 | `fallstudien2_ziel` | Ziel | PLATZHALTER — bitte Richards Ziel ergänzen. |
| Fallstudie 2 | `fallstudien2_loesung` | Lösung | PLATZHALTER — bitte Richards Lösung ergänzen. |
| Fallstudie 2 | `fallstudien2_vorher_gewicht` | Vorher Gewicht | — |
| Fallstudie 2 | `fallstudien2_vorher_punkt1..3` | Vorher 1–3 | PLATZHALTER |
| Fallstudie 2 | `fallstudien2_nachher_gewicht` | Nachher Gewicht | — |
| Fallstudie 2 | `fallstudien2_nachher_punkt1..3` | Nachher 1–3 | PLATZHALTER |
| Fallstudie 3 | `fallstudien3_name` | Name | Axel |
| Fallstudie 3 | `fallstudien3_alter` | Alter | 38 Jahre |
| Fallstudie 3 | `fallstudien3_beruf` | Beruf | Selbstständiger Unternehmer |
| Fallstudie 3 | `fallstudien3_problem` | Problem | Axel hat in den letzten 3 Jahren eine Firma aufgebaut. Sein Körper ist dabei auf der Strecke geblieben: **Schlafprobleme, ständige Stimmungsschwankungen** — und trotz regelmäßigem Training kein sichtbarer Fortschritt. |
| Fallstudie 3 | `fallstudien3_ziel` | Ziel | Er will verstehen, **warum sein Körper nicht mehr reagiert**. Und er will konkrete Ergebnisse — kein weiteres Ausprobieren, keine Diäten, kein Rätselraten. |
| Fallstudie 3 | `fallstudien3_loesung` | Lösung | Die DNA-Analyse zeigte, dass Axel **genetisch bedingt stark auf Blutzuckerschwankungen reagiert**. Gleichzeitig lag sein Testosteron im unteren Normbereich. Mit gezielter Anpassung hat der Körper wieder reagiert. |
| Fallstudie 3 | `fallstudien3_vorher_gewicht` | Vorher Gewicht | 91 kg |
| Fallstudie 3 | `fallstudien3_vorher_punkt1` | Vorher 1 | Training ohne Fortschritt seit 18 Monaten |
| Fallstudie 3 | `fallstudien3_vorher_punkt2` | Vorher 2 | Stimmung und Antrieb stark schwankend |
| Fallstudie 3 | `fallstudien3_vorher_punkt3` | Vorher 3 | Schlechte Schlafqualität, morgens nicht erholt |
| Fallstudie 3 | `fallstudien3_nachher_gewicht` | Nachher Gewicht | 80 kg |
| Fallstudie 3 | `fallstudien3_nachher_punkt1` | Nachher 1 | Sichtbarer Muskelaufbau und Fettverlust |
| Fallstudie 3 | `fallstudien3_nachher_punkt2` | Nachher 2 | Stabiler Antrieb und bessere Stimmung |
| Fallstudie 3 | `fallstudien3_nachher_punkt3` | Nachher 3 | Tiefer Schlaf — morgens ausgeruht |

**Gesamt: ~206 Felder** (nur Startseite `/`).

## Weiterhin nicht angebunden
- Feste Spaltenköpfe der Vergleichstabelle (Personaltrainer / Gruppencoaching / AI-Coach / „FS Performance Lab") — zweizeiliges Layout mit festem Umbruch
- Unterseiten (`/ueber-mich`, `/ernaehrungsberatung-karlsruhe`, `/personal-coaching-online`, `/abnehmcoaching`)

Diese können bei Bedarf nach demselben Muster ergänzt werden.
