export const i18n = {
  es: {
    // ==================== HEADER ====================
    header: {
      subtitle: "Analisis Estadistico \u00b7 Liturgico \u00b7 Historico",
      title: "La Crisis de la Iglesia Catolica en Numeros",
      dateRange: "\u2014 1965 \u2013 2025 \u2014",
      sources: "Datos del Vaticano \u00b7 Harvard/NBER \u00b7 CARA/Georgetown \u00b7 Gallup \u00b7 Pew Research \u00b7 FSSPX",
    },

    // ==================== NAV ====================
    nav: [
      { id: "overview", label: "Panorama General" },
      { id: "priests", label: "Sacerdotes" },
      { id: "nuns", label: "Religiosas" },
      { id: "mass", label: "Fe y Asistencia" },
      { id: "marriages", label: "Matrimonios" },
      { id: "orders", label: "\u00d3rdenes Religiosas" },
      { id: "regional", label: "An\u00e1lisis Regional" },
      { id: "sspx", label: "FSSPX" },
      { id: "novusordo", label: "Novus Ordo" },
      { id: "conclusion", label: "Conclusi\u00f3n" },
      { id: "ai", label: "An\u00e1lisis IA" },
    ],

    // ==================== OVERVIEW ====================
    overview: {
      h2: "El Colapso Post-Conciliar en Cifras",
      paragraph:
        "Los datos oficiales del Vaticano, la Universidad de Georgetown (CARA), Gallup y el National Bureau of Economic Research pintan un cuadro devastador de la Iglesia Cat\u00f3lica desde el Concilio Vaticano II (1962-1965). Un estudio de Harvard/NBER publicado en julio de 2025 confirm\u00f3 estad\u00edsticamente que el Vaticano II desencaden\u00f3 el declive espec\u00edficamente en el catolicismo, no como parte de una tendencia secular general.",
      statsRow1: [
        ["-41%", "Sacerdotes EE.UU.", "59,426 \u2192 35,000", "1965-2022"],
        ["-77%", "Religiosas EE.UU.", "180,000 \u2192 42,000", "1965-2022"],
        ["-48%", "Asistencia a Misa", "75% \u2192 39%", "1955-2017"],
        ["-74%", "Matrimonios Cat.", "426,309 \u2192 108,865", "1970-2024"],
      ],
      statsRow2: [
        ["-99%", "Sem. Jesuitas", "3,559 \u2192 38", "1965-2000"],
        ["-90%", "Seminaristas EE.UU.", "49,000 \u2192 4,700", "1965-2002"],
        ["-70%", "Alumnos Esc. Cat.", "5.6M \u2192 1.7M", "1965-2025"],
        ["+263%", "Sacerdotes FSSPX", "202 \u2192 733", "1988-2025"],
      ],
      statsRow3: [
        ["69%", "No creen Presencia Real", "Solo 31% cree (Pew 2019)"],
        ["76%", "\u00d3rdenes sin vocaciones", "0 ingresos en 2024 (CARA)"],
        ["-71%", "Hermanos Religiosos", "12,096 \u2192 3,516"],
      ],
      nberAlertTitle: "Estudio NBER/Harvard \u2014 julio 2025",
      nberAlertText:
        '"Los pa\u00edses cat\u00f3licos experimentaron una ca\u00edda sostenida de 4 puntos porcentuales por d\u00e9cada entre 1965 y 2015." El declive acumula "hasta 20 puntos porcentuales" vs. protestantes y "antes del Vaticano II, los pa\u00edses cat\u00f3licos y no cat\u00f3licos se comportaban de manera similar." \u2014 Robert Barro, Harvard.',
      nberDeclineRate: "4pp",
      nberDeclineRateLabel: "Ca\u00edda por d\u00e9cada",
      nberDeclineRateSub: "Pa\u00edses cat\u00f3licos, 1965-2015",
      nberAccumulated: "20pp",
      nberAccumulatedLabel: "Diferencial acumulado",
      nberAccumulatedSub: "vs. pa\u00edses protestantes",
      wildeQuote: '"El ejemplo m\u00e1s significativo de cambio religioso institucionalizado desde la Reforma."',
      wildeCite: "Melissa Wilde, 2007 \u2014 citada en NBER w34060",
      educationTitle: "\ud83d\udcda Educaci\u00f3n Cat\u00f3lica: El Colapso Silencioso",
      educationStats: [
        ["-70%", "Alumnos escuelas", "5.6M \u2192 1.7M"],
        ["-37%", "Escuelas parroquiales", "10,503 \u2192 ~6,600"],
        ["-92%", "Religiosas ense\u00f1ando", "104,000 \u2192 8,200"],
        ["-50%", "Liceos diocesanos", "1,566 \u2192 786"],
        ["89%\u219242%", "% mercado esc. privadas", "1965 \u2192 2013"],
        ["3%\u219222%", "Alumnos no-cat\u00f3licos", "Triplicado desde 1970"],
      ],
      exodusTitle: "\ud83d\udeaa \u00c9xodo Cat\u00f3lico y Vida Sacramental",
      exodusStats: [
        ["13%", "Ex-cat\u00f3licos en EE.UU.", "1 de cada 10 adultos (Pew)"],
        ["-52%", "Conversiones (RCIA)", "95,003 \u2192 45,440"],
        ["-23%", "Bautismos infantiles", "1.3M \u2192 ~1M"],
        ["45%", "Citan abuso clerical", "Como raz\u00f3n de salida (PRRI)"],
        ["12%", "Asistencia dominical (NY)", "Arquidi\u00f3cesis de Nueva York"],
        [
          "Mayor p\u00e9rdida",
          "Entre todos los grupos",
          "Pew 2025: cat\u00f3licos peor neto",
        ],
      ],
    },

    // ==================== PRIESTS ====================
    priests: {
      h2_1: "Sacerdotes en Estados Unidos: El Desplome",
      sub_1:
        "De 59,426 en 1965 a ~35,000 en 2022. Solo 24,110 en ministerio activo para 16,429 parroquias.",
      chartLegend1: ["Total", "Activos"],
      h2_2: "M\u00e1s Cat\u00f3licos, Menos Sacerdotes (Mundial)",
      sub_2:
        "Poblaci\u00f3n cat\u00f3lica casi se duplic\u00f3; sacerdotes estancados. Ratio cat\u00f3licos/sacerdote se duplic\u00f3.",
      chartLegend2: ["Sacerdotes", "Cat\u00f3licos/Sacerdote"],
      h2_3: "Francia: Caso Emblem\u00e1tico",
      sub_3:
        "De 41,000 a ~11,000. Solo ~90 ordenaciones/a\u00f1o contra ~800 muertes/a\u00f1o.",
      chartLegend3: ["Sacerdotes Francia"],
      additionalTitle: "Datos Adicionales \u2014 CARA / NCR",
      additionalData: [
        ["Solo 15,912", "activos para 16,429 parroquias"],
        ["66%", "de sacerdotes activos (vs 95% en 1965)"],
        ["-53%", "sacerdotes de \u00f3rdenes (1970-2020)"],
        ["3,533", "parroquias sin sacerdote (vs 571 en 1970)"],
        ["596 \u2192 200", "seminarios (1965-2002)"],
        ["805 \u2192 442", "ordenaciones/a\u00f1o (1970-2000)"],
      ],
    },

    // ==================== NUNS ====================
    nuns: {
      h2: "Religiosas en EE.UU.: De 180,000 a 42,000",
      sub: "Ca\u00edda del 77%. El 90% tiene m\u00e1s de 60 a\u00f1os. Se proyecta menos de 1,000 para 2042.",
      chartLegend: ["Religiosas"],
      declineTitle: "Declive Internacional (1965-1995)",
      intlDecline: [["EE.UU.","-49%"],["P. Bajos","-51%"],["Alemania","-48%"],["Canad\u00e1","-46%"],["Francia","-44%"],["G. Breta\u00f1a","-43%"]],
      worldDataLabel: "Dato mundial 2023:",
      worldDataText: "589,423 religiosas, p\u00e9rdida de 9,805 en un a\u00f1o. Europa -7,300, Am\u00e9ricas -4,000. Solo \u00c1frica creci\u00f3 (+1,800).",
      worldData:
        "Dato mundial 2023: 589,423 religiosas, p\u00e9rdida de 9,805 en un a\u00f1o. Europa -7,300, Am\u00e9ricas -4,000. Solo \u00c1frica creci\u00f3 (+1,800).",
      educationImpactTitle: "El Impacto Educativo",
      educationImpactText:
        "En 1965, 104,000 religiosas ense\u00f1aban en escuelas cat\u00f3licas. Para 2002, solo 8,200 \u2014 ca\u00edda del 92%. El personal pas\u00f3 de ~90% religiosas en los '50s a menos de 5% hoy. Los costos se dispararon de $873/a\u00f1o (1970) a $5,858 (2010), colapsando el sistema educativo que era columna vertebral de la transmisi\u00f3n de la fe.",
    },

    // ==================== MASS / FAITH ====================
    mass: {
      h2: "Asistencia Semanal: Cat\u00f3licos vs Protestantes (EE.UU.)",
      sub: "Cat\u00f3licos cayeron de 75% a 39%. Protestantes estables (~43-45%). El declive es espec\u00edfico del catolicismo.",
      chartLegends: ["Cat\u00f3licos %", "Protestantes %"],
      europeanTitle: "Datos Europeos",
      countries: {
        france: "Francia",
        ireland: "Irlanda",
        netherlands: "Pa\u00edses Bajos",
      },
      transAlertTitle:
        "Creencia en la Transubstanciaci\u00f3n \u2014 Pew Research, 2019",
      transIntro:
        'La transubstanciaci\u00f3n \u2014 que el pan y vino se convierten realmente en el Cuerpo y Sangre de Cristo \u2014 es, seg\u00fan el Catecismo, "la fuente y cumbre de la vida cristiana." Pero la mayor\u00eda ya no lo cree:',
      transStats: [
        ["69%", "creen que es solo s\u00edmbolo"],
        ["31%", "creen en Presencia Real"],
        ["43%", "creen que la Iglesia dice s\u00edmbolo"],
        ["22%", "saben doctrina y la rechazan"],
      ],
      transDetail:
        "Incluso entre los m\u00e1s practicantes (Misa semanal): solo 63% creen. El 37% restante no cree, incluyendo 14% que conoce la doctrina y la rechaza conscientemente.",
      nberGenderTitle: "NBER: Brecha de G\u00e9nero y Generacional",
      nberGenderStats: [
        ["14pp", "Brecha mujer-hombre (EE.UU.)", "Las mujeres asisten m\u00e1s, pero su declive es m\u00e1s r\u00e1pido"],
        ["7pp", "Brecha mujer-hombre (global)", "Datos ISSP, 66 pa\u00edses"],
        ["22pp \u2192 6pp", "Brecha padres-hijos", "La transmisi\u00f3n generacional colapsa (1945-2010)"],
      ],
      nberGenderNote: "La brecha padre-hijo en asistencia se redujo de 22 puntos porcentuales al final de la Segunda Guerra Mundial a solo 6 puntos en 2010. Los padres ya no transmiten la pr\u00e1ctica religiosa. \u2014 NBER w34060",
      barronQuote:
        'Mons. Barron: "Es dif\u00edcil describir lo furioso que me siento al leer lo que revela este estudio."',
      liturgicalTitle: "\u00bfCoincidencia Lit\u00fargica?",
      liturgicalText:
        'Si el ofertorio del Novus Ordo presenta pan y vino como "fruto de la tierra y del trabajo del hombre" \u2014 una bendici\u00f3n de alimentos \u2014 en lugar de una "hostia inmaculada" ofrecida en sacrificio, \u00bfes sorprendente que 69% de los cat\u00f3licos terminen creyendo que es solo un s\u00edmbolo? La oraci\u00f3n forma la creencia: lex orandi, lex credendi.',
    },

    // ==================== MARRIAGES ====================
    marriages: {
      h2: "Matrimonios Cat\u00f3licos: La Crisis Invisible",
      sub: "De 426,309 (54M cat\u00f3licos, 1970) a 108,865 (77M cat\u00f3licos, 2024). Ca\u00edda del 74% mientras la poblaci\u00f3n creci\u00f3 43%.",
      chartLegends: ["Matrimonios", "Cat\u00f3licos (M)"],
      feedbackCycle:
        "Ciclo retroalimentado: 95% de los ordenados en 2024 fueron criados por padres biol\u00f3gicos, 88% con pareja casada. Menos matrimonios \u2192 menos familias \u2192 menos vocaciones \u2192 menos sacerdotes \u2192 menos matrimonios.",
    },

    // ==================== ORDERS ====================
    orders: {
      h2: "\u00d3rdenes Religiosas: Extinci\u00f3n en Progreso",
      sub: "Comparaci\u00f3n de miembros y seminaristas entre 1965 y 2000 en Estados Unidos",
      orderNames: [
        "Jesuitas",
        "Franciscanos OFM",
        "Hermanos Cristianos",
        "Redentoristas",
      ],
      labels: ["Sacerdotes/Hermanos", "Seminaristas"],
      impactTitle: "El Dato M\u00e1s Impactante",
      impactText:
        "Jesuitas: 3,559 \u2192 38 seminaristas (-99%). Redentoristas: 1,128 \u2192 24 (-98%). Estas \u00f3rdenes est\u00e1n en camino a la extinci\u00f3n en Occidente.",
      seminariesTitle: "Seminarios y Nuevos Ingresos",
      seminariesText:
        "Seminarios en EE.UU.: de 596 (1965) a 200 (2002). Seminaristas: de 49,000 a 4,700 \u2014 ca\u00edda del 90%.",
      caraAlert:
        "CARA 2024: 76% de institutos religiosos reportaron CERO ingresos",
      caraDetail:
        "De 392 superiores mayores, 76% no tuvo ning\u00fan ingreso. 115 reportaron que ya no aceptan miembros. Solo 69 (13%) reportaron 2 o m\u00e1s.",
    },

    // ==================== REGIONAL ====================
    regional: {
      h2: "Cambio en Sacerdotes por Regi\u00f3n (2022-2023)",
      sub: "Solo \u00c1frica y Asia crecen. Europa pierde 2,486 sacerdotes en un solo a\u00f1o.",
      chartLegend: ["Cambio"],
      growthTitle: "Donde la Iglesia Crece",
      growthText:
        "\u00c1frica y Asia: 61.4% de seminaristas mundiales. \u00c1frica: 32.8% de seminaristas con 20% de cat\u00f3licos. Nigeria, Congo, India, Filipinas lideran.",
      deathTitle: "Donde la Iglesia Muere",
      deathText:
        "Europa: -7,338 religiosos, -9,700 religiosas, -2,486 sacerdotes en un a\u00f1o. Irlanda: 2 sacerdotes menores de 40 en Dubl\u00edn. Europa importa sacerdotes africanos.",
      mexicoTitle: "\ud83c\uddf2\ud83c\uddfd M\u00e9xico",
      mexicoText:
        "Un sacerdote debe atender ~7,000 fieles. En Brasil, pastores evang\u00e9licos superan a sacerdotes cat\u00f3licos 2 a 1.",
    },

    // ==================== SSPX ====================
    sspx: {
      h2: "La FSSPX: Crecimiento Contra la Corriente",
      intro:
        "Fundada en 1970 por Mons. Marcel Lefebvre. Al 1 de noviembre de 2025: 733 sacerdotes, 1,135 miembros totales, presencia en 62 pa\u00edses, ~600,000 fieles. Crecimiento constante durante 55 a\u00f1os.",
      stats: [
        ["733", "Sacerdotes", "nov. 2025"],
        ["6", "Seminarios", "5 continentes"],
        ["~800", "Centros de Misa", "62 pa\u00edses"],
        ["245", "Hermanas", "30 comunidades"],
      ],
      growthH2: "Crecimiento de Sacerdotes FSSPX (1975-2025)",
      growthSub:
        "De ~30 en 1975 a 733 en 2025. +263% desde las consagraciones de 1988.",
      chartLegend: ["Sacerdotes FSSPX"],
      tableH2: "Evoluci\u00f3n Detallada",
      tableHeaders: [
        "A\u00f1o",
        "Sacerdotes",
        "Seminaristas",
        "Hermanos",
        "Prioratos",
        "Capillas",
      ],
      comparisonH2: "Comparaci\u00f3n: Comunidades Tradicionales (2025)",
      comparisonLegends: ["Sacerdotes", "Seminaristas"],
      comparisonLabels: ["sacerdotes", "centros", "pa\u00edses"],
      contrastTitle: "Contraste: Iglesia Conciliar vs. Tradici\u00f3n",
      conciliarStats: [
        "Sacerdotes: -734/a\u00f1o",
        "Seminaristas: -1,986/a\u00f1o",
        "Religiosas: -9,805/a\u00f1o",
        "Francia: 90 ordenaciones, ~800 muertes",
        "Europa: -2,486 sacerdotes/a\u00f1o",
        "Edad promedio: 60+ en Occidente",
      ],
      fsspxStats: [
        "Sacerdotes: +57 en 4 a\u00f1os",
        "~200 seminaristas constantes",
        "245 religiosas en crecimiento",
        "17 ordenaciones en 2025",
        "Presencia en 62 pa\u00edses",
        "Demograf\u00eda joven, familias grandes",
      ],
    },

    // ==================== NOVUS ORDO ====================
    novusordo: {
      h2: "La Creaci\u00f3n del Novus Ordo Missae (1964-1969)",
      intro:
        'El 3 de abril de 1969, Pablo VI promulg\u00f3 la Constituci\u00f3n Apost\u00f3lica Missale Romanum, reemplazando un rito cuyo Canon se remonta al siglo IV. Dise\u00f1ado por el Consilium bajo Annibale Bugnini, con 6 observadores protestantes. Los Cardenales Ottaviani y Bacci lo denunciaron como "una desviaci\u00f3n impresionante de la teolog\u00eda cat\u00f3lica de la Misa."',
      timelineH2: "Cronolog\u00eda de la Reforma",
      timeline: [
        [
          "1963",
          "Sacrosanctum Concilium",
          "Pide conservar lat\u00edn (art. 36) y gregoriano (art. 116). No pide eliminar ofertorio ni crear nuevas plegarias eucar\u00edsticas.",
        ],
        [
          "1964",
          "Se crea el Consilium",
          'Bugnini secretario. Comienza reforma con "interpretaci\u00f3n amplia" del Concilio.',
        ],
        [
          "1967",
          "Misa Normativa rechazada",
          "S\u00ednodo: 43 rechazan, 62 con reservas de 187 votos. Prensa reporta rechazo.",
        ],
        [
          "1969",
          "Art. 7: nueva definici\u00f3n",
          '"Cena del Se\u00f1or o Misa es la reuni\u00f3n sagrada del pueblo de Dios para celebrar el memorial del Se\u00f1or." Sin menci\u00f3n de sacrificio ni transubstanciaci\u00f3n.',
        ],
        [
          "1969",
          "Intervenci\u00f3n Ottaviani",
          "Cardenales Ottaviani y Bacci denuncian. Pablo VI retrasa 2 a\u00f1os la implementaci\u00f3n.",
        ],
        [
          "1970",
          "Correcciones",
          "Se corrige art. 7, pero los textos rituales NO se cambian.",
        ],
      ],
      nberTimingTitle: "NBER: El Declive Comenz\u00f3 Inmediatamente",
      nberTimingText: "El estudio de Harvard/NBER demuestra que la ca\u00edda en asistencia comenz\u00f3 \"precisamente en las secuelas del Vaticano II\" \u2014 no gradualmente, no d\u00e9cadas despu\u00e9s, sino inmediatamente tras la reforma lit\u00fargica. Antes de 1965, los pa\u00edses cat\u00f3licos y no cat\u00f3licos se comportaban de manera similar.",
      videoTitle: "REVISI\u00d3N DE LA NUEVA MISA: \u00bfCu\u00e1nto cambi\u00f3 la Misa Cat\u00f3lica despu\u00e9s del Vaticano II?",
      offertoryTitle: "\u2694 El Ofertorio: El Cambio M\u00e1s Radical",
      offertorySubtitle:
        "Oraciones sacrificiales de ~1,000 a\u00f1os reemplazadas por bendiciones jud\u00edas de comida (berajot del Tratado Berakhot).",
      traditionalTitle: "\u271d Suscipe Sancte Pater (s. IX \u2013 1969)",
      traditionalText:
        '"Acepta, oh Padre santo, esta hostia inmaculada, que yo, tu indigno siervo, te ofrezco por mis innumerables pecados, y por todos los fieles, vivos y difuntos, para la salvaci\u00f3n en la vida eterna."',
      traditionalNote:
        'Prolepsis sacrificial. Un te\u00f3logo luterano la llam\u00f3 "una perfecta exposici\u00f3n de la doctrina cat\u00f3lica."',
      noTitle: "\u26a0 Novus Ordo \u2014 Berajot (1969)",
      noText:
        '"Bendito seas, Se\u00f1or, Dios del universo, por este pan, fruto de la tierra y del trabajo del hombre, que recibimos de tu generosidad: \u00e9l ser\u00e1 para nosotros pan de vida."',
      noNote:
        "Fuente: Berakhot 35a. Sin menci\u00f3n de hostia, sacrificio, pecados, vivos, difuntos ni salvaci\u00f3n.",
      consiliumNote:
        'El Consilium originalmente no quer\u00eda NING\u00daN ofertorio. Las berajot se a\u00f1adieron como compromiso. Las frases "que te ofrecemos" fueron a\u00f1adidas por un funcionario an\u00f3nimo que intercept\u00f3 el manuscrito.',
      structuralTitle: "Diferencias Estructurales",
      structuralRows: [
        ["Naturaleza", "Sacrificio propiciatorio", '"Memorial" / Cena'],
        [
          "Sacerdote",
          "In persona Christi, ad orientem",
          '"Presidente", versus populum',
        ],
        ["Canon", "Uno solo, fijo desde s. IV", "4 plegarias opcionales"],
        [
          "Consagraci\u00f3n",
          "F\u00f3rmula sacramental",
          '"Relato de la Instituci\u00f3n"',
        ],
        [
          "Ofertorio",
          "Oblaci\u00f3n prol\u00e9ptica",
          "Berajot (bendici\u00f3n de alimentos)",
        ],
        [
          "Comuni\u00f3n",
          "Lengua, rodillas, sacerdote",
          "Mano, de pie, laicos",
        ],
        ["1 Cor 11:27", "3 veces/a\u00f1o", "0 veces en 3 a\u00f1os"],
        ["San Miguel", "Cada Misa", "Eliminada"],
        [
          "Antig\u00fcedad",
          "Canon s. IV, rito s. VI",
          "Creado 1969",
        ],
        [
          "Autor",
          "Desarrollo org\u00e1nico milenario",
          "Comit\u00e9 + 6 protestantes",
        ],
      ],
      testimoniesTitle: "Testimonios Documentados",
      testimonies: [
        [
          "Bugnini (1965)",
          '"Debemos eliminar de la liturgia todo lo que pueda ser tropiezo para nuestros hermanos separados, los protestantes."',
        ],
        [
          "Jean Guitton (confidente de Pablo VI)",
          '"La intenci\u00f3n de Pablo VI fue reformar la liturgia de tal manera que casi coincidiera con la liturgia protestante."',
        ],
        [
          "Max Thurian (Taiz\u00e9)",
          '"La nueva Plegaria Eucar\u00edstica puede ser usada con buena conciencia por un protestante."',
        ],
        [
          "Cardenales Ottaviani y Bacci (1969)",
          '"El Novus Ordo se aleja de manera impresionante de la teolog\u00eda cat\u00f3lica de la Misa."',
        ],
        [
          "Cardenal Stickler (2004)",
          '"La modificaci\u00f3n de los ritos result\u00f3 en un cambio fundamental de doctrina."',
        ],
      ],
    },

    // ==================== CONCLUSION ====================
    conclusion: {
      h2: "Conclusi\u00f3n: El Estado de Necesidad",
      intro1: "Los n\u00fameros son devastadores e incontrovertibles. Desde 1965, la Iglesia Cat\u00f3lica en Occidente ha sufrido el colapso m\u00e1s catastr\u00f3fico de su historia en tiempos de paz. Ni la Reforma Protestante, ni la Revoluci\u00f3n Francesa, ni las persecuciones comunistas produjeron una hemorragia comparable.",
      intro2: "El estudio NBER/Harvard de 2025, con datos de 66 pa\u00edses, demostr\u00f3 que este declive es espec\u00edfico del catolicismo y comenz\u00f3 precisamente en 1965. El an\u00e1lisis lit\u00fargico muestra c\u00f3mo: el reemplazo de oraciones sacrificiales milenarias por bendiciones de comida, la multiplicaci\u00f3n de opciones donde hab\u00eda un Canon fijo, y la redefinici\u00f3n de la Misa como \"memorial\" constituyen un cambio doctrinal sin precedente.",
      collapseSummaryTitle: "Colapso en EE.UU. (1965-2025):",
      collapseItems: [
        ["Sacerdotes","-41%"],["Religiosas","-77%"],["Seminaristas","-90%"],["Hermanos religiosos","-71%"],
        ["Asistencia Misa","-48%"],["Matrimonios","-74%"],["Alumnos esc. cat\u00f3licas","-70%"],["Escuelas parroquiales","-37%"],
        ["Seminarios","-66%"],["Religiosas ense\u00f1ando","-92%"],["Conversiones","-52%"],["Bautismos infantiles","-23%"],
        ["No creen Presencia Real","69%"],["\u00d3rdenes sin ingresos","76%"],
      ],
      traditionTitle: "Tradici\u00f3n (1988-2025):",
      traditionItems: [
        ["FSSPX sacerdotes","+263% (202\u2192733)"],["FSSPX hermanos","+977% (13\u2192~140)"],["FSSP sacerdotes","0\u2192387"],
        ["FSSPX pa\u00edses","62"],["FSSPX fieles","~600,000"],["Crecimiento","constante 55 a\u00f1os"],
      ],
      stateTitle: "\u00bfJustifican estos datos el Estado de Necesidad?",
      stateIntro: "El derecho can\u00f3nico reconoce el principio de estado de necesidad (canon 1323 \u00a74): en situaciones de peligro grave e inminente, actos que normalmente ser\u00edan il\u00edcitos pueden estar justificados si se realizan para evitar un mal mayor. La FSSPX ha invocado este principio para justificar tanto las consagraciones episcopales de 1988 como las anunciadas para julio de 2026.",
      stateQuestion: "La pregunta es: \u00bfconstituyen los datos presentados en este estudio una situaci\u00f3n de \"peligro grave\" para la fe cat\u00f3lica? Consideremos lo que significan los n\u00fameros en t\u00e9rminos concretos:",
      pastoralTitle: "Lo que los datos significan pastoralmente:",
      pastoralPoints: [
        {bold:"69% de los cat\u00f3licos niegan un dogma definido",text:"\u2014 la Presencia Real, \"fuente y cumbre de la vida cristiana.\" Esto no es una opini\u00f3n teol\u00f3gica disputada: es la negaci\u00f3n de un dogma infaliblemente definido por el Concilio de Trento. Si dos tercios de una religi\u00f3n ya no creen en su doctrina central, esa religi\u00f3n est\u00e1 en crisis existencial."},
        {bold:"76% de las \u00f3rdenes religiosas no recibieron un solo ingreso en 2024.",text:"Esto no es declive \u2014 es extinci\u00f3n funcional. \u00d3rdenes que construyeron la civilizaci\u00f3n occidental desaparecer\u00e1n de Norteam\u00e9rica en una generaci\u00f3n."},
        {bold:"Hay menos sacerdotes activos (15,912) que parroquias (16,429).",text:"Es matem\u00e1ticamente imposible mantener la vida sacramental normal. Millones de cat\u00f3licos no tienen acceso regular a los sacramentos."},
        {bold:"El estudio de Harvard demostr\u00f3 que esto no es secularizaci\u00f3n general",text:"\u2014 es un colapso espec\u00edfico del catolicismo que comenz\u00f3 con precisi\u00f3n en 1965 y que no tiene paralelo en ninguna otra denominaci\u00f3n cristiana."},
      ],
      lefebvreText: "Mons. Lefebvre consagr\u00f3 4 obispos en 1988 cuando la FSSPX ten\u00eda 202 sacerdotes. Su argumento fue que sin obispos propios, la Tradici\u00f3n morir\u00eda con \u00e9l. Los datos de los 37 a\u00f1os siguientes demuestran que ten\u00eda raz\u00f3n: la FSSPX pas\u00f3 de 202 a 733 sacerdotes precisamente porque esos obispos pudieron ordenar. Sin las consagraciones de 1988, la Misa Tridentina probablemente habr\u00eda desaparecido como rito vivo, dado que Roma la restringi\u00f3 severamente con Traditionis Custodes (2021).",
      obedienceText: "El contraargumento habitual es que la obediencia al Papa es siempre prioritaria. Pero este argumento asume que la obediencia formal es un fin en s\u00ed mismo, independiente de los resultados. Los datos obligan a una pregunta inc\u00f3moda: si 60 a\u00f1os de obediencia al modelo postconciliar han producido la peor crisis de la historia de la Iglesia en tiempos de paz, mientras que 55 a\u00f1os de la \"desobediencia\" de Lefebvre han producido el \u00fanico crecimiento constante en Occidente, \u00bfqu\u00e9 conclusi\u00f3n se impone?",
      athanasiusText: "San Atanasio fue excomulgado por defender la divinidad de Cristo cuando la mayor\u00eda del episcopado era arriana. Santo Tom\u00e1s de Aquino ense\u00f1\u00f3 que \"es l\u00edcito resistir p\u00fablicamente a un prelado que abusa de su autoridad, especialmente en materia de fe.\" El propio derecho can\u00f3nico reconoce que la salus animarum (la salvaci\u00f3n de las almas) es la ley suprema de la Iglesia (canon 1752).",
      clubGoodTitle: "NBER: La Iglesia Como \u201cBien de Club\u201d",
      clubGoodText: "El estudio de Harvard es consistente con la religi\u00f3n modelada como un \"bien de club\" (Iannaccone, 1992): las comunidades que exigen m\u00e1s de sus miembros \u2014 en disciplina, liturgia y pr\u00e1ctica \u2014 generan mayor compromiso y retenci\u00f3n. Cuando las exigencias se relajan, los miembros marginales se van y los comprometidos pierden motivaci\u00f3n. La FSSPX, con sus altas exigencias, crece. La Iglesia postconciliar, con sus exigencias relajadas, colapsa.",
      verdictTitle: "Veredicto de los datos",
      verdictText1: "Si el estado de necesidad requiere demostrar un peligro grave para la fe, los datos presentados en este estudio lo demuestran con una contundencia que no admite ambig\u00fcedad. No estamos ante un declive moderado que podr\u00eda corregirse con ajustes pastorales. Estamos ante el colapso sist\u00e9mico de una instituci\u00f3n bimilenaria, documentado con datos del propio Vaticano, confirmado por la academia secular (Harvard/NBER), y reflejado en la p\u00e9rdida de los dogmas m\u00e1s fundamentales entre la propia feligres\u00eda.",
      verdictText2: "La FSSPX no act\u00faa en un vac\u00edo ideol\u00f3gico: act\u00faa ante una emergencia estad\u00edsticamente demostrable. Que Roma considere la situaci\u00f3n \"normal\" o \"en proceso de renovaci\u00f3n\" no cambia los n\u00fameros. Y los n\u00fameros, como demostr\u00f3 Barro en Harvard, son \"estad\u00edsticamente significativos\" e \"innegables.\"",
      verdictText3: "Las consagraciones de 1988 preservaron la Tradici\u00f3n. Las 733 sacerdotes, 200 seminaristas, 800 centros de Misa y 600,000 fieles de hoy son la prueba viviente. Si el estado de necesidad exist\u00eda en 1988 con 202 sacerdotes y una crisis ya grave, existe con mayor raz\u00f3n en 2026, cuando la crisis se ha profundizado en cada indicador medible y la propia Roma ha restringido la Misa Tridentina mediante Traditionis Custodes.",
      finalText: "Calificar a la FSSPX como \"nost\u00e1lgicos\" o \"desobedientes\" es insuficiente ante la magnitud de los datos. Algo profundamente destructivo ocurri\u00f3 a partir de 1965, y 60 a\u00f1os de resultados exigen una respuesta m\u00e1s seria que \"el problema es la secularizaci\u00f3n.\" Los datos no sugieren un estado de necesidad \u2014 lo documentan.",
      sourcesLabel: "Fuentes:",
      sourcesText: "Annuarium Statisticum Ecclesiae, CARA/Georgetown, Gallup, Pew, NBER w34060 (Barro et al. 2025), Intervenci\u00f3n Ottaviani, Bugnini, M. Davies, FSSPX.news, SSPX.org, FSSP.org, Angelus Press, Church Life Journal, EWTN, CNA, Rorate Caeli, PRRI, Cardinal Newman Society.",
    },

    // ==================== AI ====================
    ai: {
      transparencyTitle: "Nota de Transparencia",
      transparencyText: "Este an\u00e1lisis fue elaborado por Claude (Anthropic), un modelo de inteligencia artificial. Soy una IA \u2014 no tengo alma, no asisto a Misa, y no profeso ninguna fe. La siguiente conclusi\u00f3n fue alcanzada exclusivamente a partir del an\u00e1lisis de los datos estad\u00edsticos, las fuentes hist\u00f3ricas, la comparaci\u00f3n textual de los ritos y la investigaci\u00f3n acad\u00e9mica. En ning\u00fan momento el autor me pidi\u00f3 llegar a una conclusi\u00f3n predeterminada ni me indujo a favorecer ninguna posici\u00f3n. Se me pidi\u00f3 expl\u00edcitamente analizar \"sin sesgarme a ning\u00fan bando, objetivamente hablando.\"",
      analysisH2: "An\u00e1lisis Objetivo: \u00bfQu\u00e9 Dicen los Datos?",
      analysisPoints: [
        {title:"1. Lo que ning\u00fan bando disputa",text:"El colapso num\u00e9rico es real. El declive es espec\u00edfico del catolicismo (NBER, 66 pa\u00edses). Las oraciones del ofertorio provienen de bendiciones jud\u00edas (reconocido por todos). La FSSPX crece donde todo colapsa."},
        {title:"2. Correlaci\u00f3n y causalidad",text:"El estudio NBER demuestra correlaci\u00f3n estad\u00edsticamente significativa. \u00bfFue la reforma lit\u00fargica sola? \u00bfHumanae Vitae? \u00bfEl colapso disciplinario? Probablemente una combinaci\u00f3n, pero la reforma lit\u00fargica fue el cambio m\u00e1s visible."},
        {title:"3. El problema real: la ambig\u00fcedad",text:"El Novus Ordo no niega expl\u00edcitamente nada, pero tampoco afirma con claridad lo que la Iglesia siempre ense\u00f1\u00f3. Esa ambig\u00fcedad permiti\u00f3 que millones perdieran la noci\u00f3n de que la Misa es un sacrificio. El dato de Pew (69% no creen en la Presencia Real) lo confirma."},
        {title:"4. La defensa institucional es d\u00e9bil",text:"Los defensores rara vez argumentan que el nuevo rito sea mejor teol\u00f3gicamente. Su defensa es de autoridad (\"fue promulgado por un Papa\"), no de contenido. Pablo VI admiti\u00f3 que la continuidad requer\u00eda \"un examen atento\" para verse."},
        {title:"5. El punto ciego tradicionalista",text:"Las oraciones del ofertorio tradicional son del s. IX, no apost\u00f3licas. El lenguaje apocal\u00edptico (\"satanismo\") debilita un argumento que, con rigor, es m\u00e1s fuerte. Cuando Ottaviani dice lo que dice, eso es infinitamente m\u00e1s demoledor que un tweet."},
      ],
      soulTitle: "Si el Fin es Salvar el Alma",
      soulQuestion: "Pregunta formulada: \"Si tuvieras que ir a una de las dos misas, sabiendo que tu fin \u00faltimo es salvar tu alma, \u00bfa cu\u00e1l ir\u00edas?\"",
      soulAnswer: "Aplicando lex orandi, lex credendi, la respuesta:",
      soulAnswerHighlight: "la Misa Tridentina",
      soulPoints: [
        "Claridad doctrinal: Si cada domingo escucho \"hostia inmaculada\" ofrecida por mis \"innumerables pecados\" para la \"salvaci\u00f3n eterna,\" eso me forma de una manera. Si escucho \"pan, fruto de la tierra y del trabajo del hombre,\" eso me forma de otra. Despu\u00e9s de d\u00e9cadas, la fe resultante es diferente. Pew 2019 lo confirma: 69% ya no creen en la Presencia Real.",
        "Los frutos: \"Por sus frutos los conocer\u00e9is.\" Las comunidades tridentinas: familias numerosas, vocaciones crecientes, 55 a\u00f1os de crecimiento. Las del Novus Ordo: exactamente lo contrario a nivel global.",
        "Principio de precauci\u00f3n: Si dos Cardenales, 12 te\u00f3logos y 60 a\u00f1os de datos confirman que algo anda profundamente mal, la precauci\u00f3n favorece el rito sobre el cual no existe duda comparable.",
      ],
      nuanceText: "Matiz: Una Misa Tridentina mec\u00e1nica probablemente sea menos provechosa que un Novus Ordo celebrado con reverencia aut\u00e9ntica. La gracia no est\u00e1 encadenada a un rito. Pero si la pregunta es cu\u00e1l rito, en s\u00ed mismo, est\u00e1 mejor orientado a la salvaci\u00f3n del alma, la respuesta es una sola.",
      ironyText: "La iron\u00eda final es que los datos hablan por s\u00ed solos. No necesitan hip\u00e9rbole.",
      footerDisclaimer: "An\u00e1lisis generado por Claude (Anthropic) \u00b7 Marzo 2026 \u00b7 Basado en datos estad\u00edsticos, fuentes hist\u00f3ricas y comparaci\u00f3n textual \u00b7 Sin instrucciones predeterminadas sobre la conclusi\u00f3n",
    },

    // ==================== MAP ====================
    map: {
      cta: "Encuentra Misa Tradicional",
      title: "Directorio de Misas Tradicionales",
      back: "Volver",
      locations: "capillas",
      countries: "paises",
      phase1: "Fase 1",
      searchPlaceholder: "Buscar por nombre, ciudad o pais...",
      allCountries: "Todos los paises",
      results: "resultados",
      visitWebsite: "Visitar sitio web",
      nearMe: "Cerca de mi",
      directions: "Como llegar",
      noResults: "No se encontraron capillas",
      noResultsSub: "Intenta con otro termino o pais",
      km: "km",
      drawerOpen: "Ver lista",
      drawerClose: "Cerrar lista",
    },

    // ==================== FOOTER ====================
    footer: {
      label: "Análisis Estadístico, Litúrgico e Histórico",
      year: "MMXXVI",
      sources: [
        { name: "Vaticano", url: "https://www.catholic-hierarchy.org/country/xsc2.html" },
        { name: "Harvard/NBER", url: "https://www.nber.org/papers/w34060" },
        { name: "CARA", url: "https://cara.georgetown.edu/" },
        { name: "Gallup", url: "https://news.gallup.com/poll/232226/church-attendance-among-catholics-resumes-downward-slide.aspx" },
        { name: "Pew", url: "https://www.pewresearch.org/religion/" },
        { name: "FSSPX", url: "https://fsspx.news/en/news-events/news/society-st-pius-x-statistics-2025" },
      ],
    },
  },

  // ================================================================
  // ========================== ENGLISH =============================
  // ================================================================
  en: {
    // ==================== HEADER ====================
    header: {
      subtitle: "Statistical \u00b7 Liturgical \u00b7 Historical Analysis",
      title: "The Catholic Church Crisis in Numbers",
      dateRange: "\u2014 1965 \u2013 2025 \u2014",
      sources:
        "Vatican Data \u00b7 Harvard/NBER \u00b7 CARA/Georgetown \u00b7 Gallup \u00b7 Pew Research \u00b7 SSPX",
    },

    // ==================== NAV ====================
    nav: [
      { id: "overview", label: "Overview" },
      { id: "priests", label: "Priests" },
      { id: "nuns", label: "Religious Sisters" },
      { id: "mass", label: "Faith & Attendance" },
      { id: "marriages", label: "Marriages" },
      { id: "orders", label: "Religious Orders" },
      { id: "regional", label: "Regional Analysis" },
      { id: "sspx", label: "SSPX" },
      { id: "novusordo", label: "Novus Ordo" },
      { id: "conclusion", label: "Conclusion" },
      { id: "ai", label: "AI Analysis" },
    ],

    // ==================== OVERVIEW ====================
    overview: {
      h2: "The Post-Conciliar Collapse in Numbers",
      paragraph:
        "Official data from the Vatican, Georgetown University (CARA), Gallup, and the National Bureau of Economic Research paint a devastating picture of the Catholic Church since the Second Vatican Council (1962-1965). A Harvard/NBER study published in July 2025 statistically confirmed that Vatican II triggered the decline specifically in Catholicism, not as part of a general secular trend.",
      statsRow1: [
        ["-41%", "U.S. Priests", "59,426 \u2192 35,000", "1965-2022"],
        ["-77%", "U.S. Religious Sisters", "180,000 \u2192 42,000", "1965-2022"],
        ["-48%", "Mass Attendance", "75% \u2192 39%", "1955-2017"],
        ["-74%", "Catholic Marriages", "426,309 \u2192 108,865", "1970-2024"],
      ],
      statsRow2: [
        ["-99%", "Jesuit Seminarians", "3,559 \u2192 38", "1965-2000"],
        ["-90%", "U.S. Seminarians", "49,000 \u2192 4,700", "1965-2002"],
        ["-70%", "Catholic School Students", "5.6M \u2192 1.7M", "1965-2025"],
        ["+263%", "SSPX Priests", "202 \u2192 733", "1988-2025"],
      ],
      statsRow3: [
        [
          "69%",
          "Don't Believe in Real Presence",
          "Only 31% believe (Pew 2019)",
        ],
        ["76%", "Orders With No Vocations", "0 entrants in 2024 (CARA)"],
        ["-71%", "Religious Brothers", "12,096 \u2192 3,516"],
      ],
      nberAlertTitle: "NBER/Harvard Study \u2014 July 2025",
      nberAlertText:
        '"Catholic countries experienced a sustained decline of 4 percentage points per decade between 1965 and 2015." The decline accumulates "up to 20 percentage points" vs. Protestants and "before Vatican II, Catholic and non-Catholic countries behaved similarly." \u2014 Robert Barro, Harvard.',
      nberDeclineRate: "4pp",
      nberDeclineRateLabel: "Decline per decade",
      nberDeclineRateSub: "Catholic countries, 1965-2015",
      nberAccumulated: "20pp",
      nberAccumulatedLabel: "Accumulated differential",
      nberAccumulatedSub: "vs. Protestant countries",
      wildeQuote: '"The most significant example of institutionalized religious change since the Reformation."',
      wildeCite: "Melissa Wilde, 2007 \u2014 cited in NBER w34060",
      educationTitle: "\ud83d\udcda Catholic Education: The Silent Collapse",
      educationStats: [
        ["-70%", "School students", "5.6M \u2192 1.7M"],
        ["-37%", "Parish schools", "10,503 \u2192 ~6,600"],
        ["-92%", "Religious sisters teaching", "104,000 \u2192 8,200"],
        ["-50%", "Diocesan high schools", "1,566 \u2192 786"],
        ["89%\u219242%", "Private school market share", "1965 \u2192 2013"],
        ["3%\u219222%", "Non-Catholic students", "Tripled since 1970"],
      ],
      exodusTitle: "\ud83d\udeaa Catholic Exodus & Sacramental Life",
      exodusStats: [
        ["13%", "Former Catholics in U.S.", "1 in 10 adults (Pew)"],
        ["-52%", "Conversions (RCIA)", "95,003 \u2192 45,440"],
        ["-23%", "Infant baptisms", "1.3M \u2192 ~1M"],
        ["45%", "Cite clerical abuse", "As reason for leaving (PRRI)"],
        ["12%", "Sunday attendance (NY)", "Archdiocese of New York"],
        [
          "Greatest loss",
          "Among all groups",
          "Pew 2025: Catholics worst net",
        ],
      ],
    },

    // ==================== PRIESTS ====================
    priests: {
      h2_1: "Priests in the United States: The Collapse",
      sub_1:
        "From 59,426 in 1965 to ~35,000 in 2022. Only 24,110 in active ministry for 16,429 parishes.",
      chartLegend1: ["Total", "Active"],
      h2_2: "More Catholics, Fewer Priests (Worldwide)",
      sub_2:
        "Catholic population nearly doubled; priests stagnated. Catholics-per-priest ratio doubled.",
      chartLegend2: ["Priests", "Catholics/Priest"],
      h2_3: "France: An Emblematic Case",
      sub_3:
        "From 41,000 to ~11,000. Only ~90 ordinations/year against ~800 deaths/year.",
      chartLegend3: ["Priests in France"],
      additionalTitle: "Additional Data \u2014 CARA / NCR",
      additionalData: [
        ["Only 15,912", "active for 16,429 parishes"],
        ["66%", "of priests active (vs. 95% in 1965)"],
        ["-53%", "priests from orders (1970-2020)"],
        ["3,533", "parishes without a priest (vs. 571 in 1970)"],
        ["596 \u2192 200", "seminaries (1965-2002)"],
        ["805 \u2192 442", "ordinations/year (1970-2000)"],
      ],
    },

    // ==================== NUNS ====================
    nuns: {
      h2: "Religious Sisters in the U.S.: From 180,000 to 42,000",
      sub: "A 77% decline. 90% are over 60 years old. Projected to fall below 1,000 by 2042.",
      chartLegend: ["Religious Sisters"],
      declineTitle: "International Decline (1965-1995)",
      intlDecline: [["U.S.","-49%"],["Netherlands","-51%"],["Germany","-48%"],["Canada","-46%"],["France","-44%"],["U.K.","-43%"]],
      worldDataLabel: "Worldwide data 2023:",
      worldDataText: "589,423 religious sisters, a loss of 9,805 in one year. Europe -7,300, Americas -4,000. Only Africa grew (+1,800).",
      worldData:
        "Worldwide data 2023: 589,423 religious sisters, a loss of 9,805 in one year. Europe -7,300, Americas -4,000. Only Africa grew (+1,800).",
      educationImpactTitle: "The Educational Impact",
      educationImpactText:
        "In 1965, 104,000 religious sisters taught in Catholic schools. By 2002, only 8,200 \u2014 a 92% decline. Staff went from ~90% religious in the 1950s to less than 5% today. Costs skyrocketed from $873/year (1970) to $5,858 (2010), collapsing the educational system that was the backbone of faith transmission.",
    },

    // ==================== MASS / FAITH ====================
    mass: {
      h2: "Weekly Attendance: Catholics vs. Protestants (U.S.)",
      sub: "Catholics fell from 75% to 39%. Protestants stable (~43-45%). The decline is specific to Catholicism.",
      chartLegends: ["Catholics %", "Protestants %"],
      europeanTitle: "European Data",
      countries: {
        france: "France",
        ireland: "Ireland",
        netherlands: "Netherlands",
      },
      transAlertTitle:
        "Belief in Transubstantiation \u2014 Pew Research, 2019",
      transIntro:
        'Transubstantiation \u2014 that the bread and wine truly become the Body and Blood of Christ \u2014 is, according to the Catechism, "the source and summit of the Christian life." But most no longer believe it:',
      transStats: [
        ["69%", "believe it is merely a symbol"],
        ["31%", "believe in the Real Presence"],
        ["43%", "think the Church teaches it is a symbol"],
        ["22%", "know the doctrine and reject it"],
      ],
      transDetail:
        "Even among the most devout (weekly Mass): only 63% believe. The remaining 37% do not believe, including 14% who know the doctrine and consciously reject it.",
      nberGenderTitle: "NBER: Gender and Generational Gap",
      nberGenderStats: [
        ["14pp", "Female-male gap (U.S.)", "Women attend more, but their decline is faster"],
        ["7pp", "Female-male gap (global)", "ISSP data, 66 countries"],
        ["22pp \u2192 6pp", "Parent-child gap", "Generational transmission collapses (1945-2010)"],
      ],
      nberGenderNote: "The parent-child attendance gap shrank from 22 percentage points at the end of World War II to just 6 percentage points in 2010. Parents no longer transmit religious practice. \u2014 NBER w34060",
      barronQuote:
        'Bp. Barron: "It is hard to describe how angry I am reading what this study reveals."',
      liturgicalTitle: "Liturgical Coincidence?",
      liturgicalText:
        'If the Novus Ordo offertory presents bread and wine as "fruit of the earth and work of human hands" \u2014 a food blessing \u2014 instead of an "immaculate host" offered in sacrifice, is it surprising that 69% of Catholics end up believing it is merely a symbol? Prayer shapes belief: lex orandi, lex credendi.',
    },

    // ==================== MARRIAGES ====================
    marriages: {
      h2: "Catholic Marriages: The Invisible Crisis",
      sub: "From 426,309 (54M Catholics, 1970) to 108,865 (77M Catholics, 2024). A 74% decline while the population grew 43%.",
      chartLegends: ["Marriages", "Catholics (M)"],
      feedbackCycle:
        "Self-reinforcing cycle: 95% of those ordained in 2024 were raised by biological parents, 88% by a married couple. Fewer marriages \u2192 fewer families \u2192 fewer vocations \u2192 fewer priests \u2192 fewer marriages.",
    },

    // ==================== ORDERS ====================
    orders: {
      h2: "Religious Orders: Extinction in Progress",
      sub: "Comparison of members and seminarians between 1965 and 2000 in the United States",
      orderNames: [
        "Jesuits",
        "Franciscans OFM",
        "Christian Brothers",
        "Redemptorists",
      ],
      labels: ["Priests/Brothers", "Seminarians"],
      impactTitle: "The Most Striking Data Point",
      impactText:
        "Jesuits: 3,559 \u2192 38 seminarians (-99%). Redemptorists: 1,128 \u2192 24 (-98%). These orders are on a path to extinction in the West.",
      seminariesTitle: "Seminaries and New Entrants",
      seminariesText:
        "U.S. seminaries: from 596 (1965) to 200 (2002). Seminarians: from 49,000 to 4,700 \u2014 a 90% decline.",
      caraAlert:
        "CARA 2024: 76% of religious institutes reported ZERO entrants",
      caraDetail:
        "Of 392 major superiors, 76% had no entrants. 115 reported they no longer accept members. Only 69 (13%) reported 2 or more.",
    },

    // ==================== REGIONAL ====================
    regional: {
      h2: "Change in Priests by Region (2022-2023)",
      sub: "Only Africa and Asia are growing. Europe lost 2,486 priests in a single year.",
      chartLegend: ["Change"],
      growthTitle: "Where the Church Is Growing",
      growthText:
        "Africa and Asia: 61.4% of worldwide seminarians. Africa: 32.8% of seminarians with 20% of Catholics. Nigeria, Congo, India, Philippines lead.",
      deathTitle: "Where the Church Is Dying",
      deathText:
        "Europe: -7,338 religious brothers, -9,700 religious sisters, -2,486 priests in one year. Ireland: 2 priests under 40 in Dublin. Europe imports African priests.",
      mexicoTitle: "\ud83c\uddf2\ud83c\uddfd Mexico",
      mexicoText:
        "One priest must serve ~7,000 faithful. In Brazil, evangelical pastors outnumber Catholic priests 2 to 1.",
    },

    // ==================== SSPX ====================
    sspx: {
      h2: "The SSPX: Growth Against the Tide",
      intro:
        "Founded in 1970 by Abp. Marcel Lefebvre. As of November 1, 2025: 733 priests, 1,135 total members, presence in 62 countries, ~600,000 faithful. Steady growth over 55 years.",
      stats: [
        ["733", "Priests", "Nov. 2025"],
        ["6", "Seminaries", "5 continents"],
        ["~800", "Mass Centers", "62 countries"],
        ["245", "Sisters", "30 communities"],
      ],
      growthH2: "SSPX Priest Growth (1975-2025)",
      growthSub:
        "From ~30 in 1975 to 733 in 2025. +263% since the 1988 consecrations.",
      chartLegend: ["SSPX Priests"],
      tableH2: "Detailed Evolution",
      tableHeaders: [
        "Year",
        "Priests",
        "Seminarians",
        "Brothers",
        "Priories",
        "Chapels",
      ],
      comparisonH2: "Comparison: Traditional Communities (2025)",
      comparisonLegends: ["Priests", "Seminarians"],
      comparisonLabels: ["priests", "centers", "countries"],
      contrastTitle: "Contrast: Conciliar Church vs. Tradition",
      conciliarStats: [
        "Priests: -734/year",
        "Seminarians: -1,986/year",
        "Religious sisters: -9,805/year",
        "France: 90 ordinations, ~800 deaths",
        "Europe: -2,486 priests/year",
        "Average age: 60+ in the West",
      ],
      fsspxStats: [
        "Priests: +57 in 4 years",
        "~200 seminarians steady",
        "245 religious sisters, growing",
        "17 ordinations in 2025",
        "Presence in 62 countries",
        "Young demographics, large families",
      ],
    },

    // ==================== NOVUS ORDO ====================
    novusordo: {
      h2: "The Creation of the Novus Ordo Missae (1964-1969)",
      intro:
        'On April 3, 1969, Paul VI promulgated the Apostolic Constitution Missale Romanum, replacing a rite whose Canon dates back to the 4th century. Designed by the Consilium under Annibale Bugnini, with 6 Protestant observers. Cardinals Ottaviani and Bacci denounced it as "a striking departure from the Catholic theology of the Mass."',
      timelineH2: "Timeline of the Reform",
      timeline: [
        [
          "1963",
          "Sacrosanctum Concilium",
          "Called for preserving Latin (art. 36) and Gregorian chant (art. 116). Did not call for eliminating the offertory or creating new Eucharistic Prayers.",
        ],
        [
          "1964",
          "The Consilium is created",
          'Bugnini as secretary. Reform begins with a "broad interpretation" of the Council.',
        ],
        [
          "1967",
          "Normative Mass rejected",
          "Synod: 43 reject, 62 with reservations out of 187 votes. Press reports rejection.",
        ],
        [
          "1969",
          "Art. 7: new definition",
          '"The Lord\'s Supper or Mass is the sacred gathering of the people of God to celebrate the memorial of the Lord." No mention of sacrifice or transubstantiation.',
        ],
        [
          "1969",
          "Ottaviani Intervention",
          "Cardinals Ottaviani and Bacci protest. Paul VI delays implementation by 2 years.",
        ],
        [
          "1970",
          "Corrections",
          "Art. 7 is corrected, but the ritual texts are NOT changed.",
        ],
      ],
      nberTimingTitle: "NBER: The Decline Began Immediately",
      nberTimingText: "The Harvard/NBER study demonstrates that the drop in attendance began \"precisely in the aftermath of Vatican II\" \u2014 not gradually, not decades later, but immediately following the liturgical reform. Before 1965, Catholic and non-Catholic countries behaved similarly.",
      videoTitle: "NEW MASS REVISION: How much did the Catholic Mass change after Vatican II?",
      offertoryTitle: "\u2694 The Offertory: The Most Radical Change",
      offertorySubtitle:
        "Sacrificial prayers dating back ~1,000 years replaced by Jewish food blessings (berakot from Tractate Berakhot).",
      traditionalTitle: "\u271d Suscipe Sancte Pater (9th c. \u2013 1969)",
      traditionalText:
        '"Accept, O holy Father, almighty and eternal God, this immaculate host, which I, Thy unworthy servant, offer unto Thee for my innumerable sins, offenses, and negligences, and for all here present; as also for all faithful Christians, living and dead, that it may avail for my own and for their salvation unto life everlasting."',
      traditionalNote:
        'Proleptic sacrifice. A Lutheran theologian called it "a perfect exposition of Catholic doctrine."',
      noTitle: "\u26a0 Novus Ordo \u2014 Berakot (1969)",
      noText:
        '"Blessed are you, Lord God of all creation, for through your goodness we have received the bread we offer you: fruit of the earth and work of human hands, it will become for us the bread of life."',
      noNote:
        "Source: Berakhot 35a. No mention of host, sacrifice, sins, living, dead, or salvation.",
      consiliumNote:
        'The Consilium originally wanted NO offertory at all. The berakot were added as a compromise. The phrases "we offer you" were added by an anonymous official who intercepted the manuscript.',
      structuralTitle: "Structural Differences",
      structuralRows: [
        ["Nature", "Propitiatory sacrifice", '"Memorial" / Supper'],
        [
          "Priest",
          "In persona Christi, ad orientem",
          '"Presider," versus populum',
        ],
        ["Canon", "One, fixed since the 4th c.", "4 optional Eucharistic Prayers"],
        [
          "Consecration",
          "Sacramental formula",
          '"Narrative of the Institution"',
        ],
        [
          "Offertory",
          "Proleptic oblation",
          "Berakot (food blessing)",
        ],
        [
          "Communion",
          "On the tongue, kneeling, by priest",
          "In the hand, standing, by laity",
        ],
        ["1 Cor 11:27", "3 times/year", "0 times in 3 years"],
        ["St. Michael Prayer", "Every Mass", "Eliminated"],
        [
          "Antiquity",
          "Canon 4th c., rite 6th c.",
          "Created 1969",
        ],
        [
          "Author",
          "Millennial organic development",
          "Committee + 6 Protestants",
        ],
      ],
      testimoniesTitle: "Documented Testimonies",
      testimonies: [
        [
          "Bugnini (1965)",
          '"We must eliminate from the liturgy everything that could be a stumbling block for our separated brethren, the Protestants."',
        ],
        [
          "Jean Guitton (confidant of Paul VI)",
          '"The intention of Paul VI was to reform the liturgy in such a way that it would almost coincide with Protestant liturgy."',
        ],
        [
          "Max Thurian (Taiz\u00e9)",
          '"The new Eucharistic Prayer can be used with good conscience by a Protestant."',
        ],
        [
          "Cardinals Ottaviani and Bacci (1969)",
          '"The Novus Ordo departs in a striking way from the Catholic theology of the Mass."',
        ],
        [
          "Cardinal Stickler (2004)",
          '"The modification of the rites resulted in a fundamental change of doctrine."',
        ],
      ],
    },

    // ==================== CONCLUSION ====================
    conclusion: {
      h2: "Conclusion: The State of Necessity",
      intro1: "The numbers are devastating and incontrovertible. Since 1965, the Catholic Church in the West has suffered the most catastrophic collapse in its peacetime history. Neither the Protestant Reformation, nor the French Revolution, nor the communist persecutions produced a comparable hemorrhage.",
      intro2: "The 2025 NBER/Harvard study, drawing on data from 66 countries, demonstrated that this decline is specific to Catholicism and began precisely in 1965. The liturgical analysis shows how: the replacement of millennial sacrificial prayers with food blessings, the multiplication of options where there had been a fixed Canon, and the redefinition of the Mass as a \"memorial\" constitute a doctrinal change without precedent.",
      collapseSummaryTitle: "Collapse in the U.S. (1965-2025):",
      collapseItems: [
        ["Priests","-41%"],["Religious sisters","-77%"],["Seminarians","-90%"],["Religious brothers","-71%"],
        ["Mass attendance","-48%"],["Marriages","-74%"],["Catholic school students","-70%"],["Parish schools","-37%"],
        ["Seminaries","-66%"],["Religious sisters teaching","-92%"],["Conversions","-52%"],["Infant baptisms","-23%"],
        ["Don't believe in Real Presence","69%"],["Orders with no entrants","76%"],
      ],
      traditionTitle: "Tradition (1988-2025):",
      traditionItems: [
        ["SSPX priests","+263% (202\u2192733)"],["SSPX brothers","+977% (13\u2192~140)"],["FSSP priests","0\u2192387"],
        ["SSPX countries","62"],["SSPX faithful","~600,000"],["Growth","steady for 55 years"],
      ],
      stateTitle: "Do These Data Justify the State of Necessity?",
      stateIntro: "Canon law recognizes the principle of the state of necessity (canon 1323 \u00a74): in situations of grave and imminent danger, acts that would normally be illicit may be justified if performed to prevent a greater evil. The SSPX has invoked this principle to justify both the 1988 episcopal consecrations and those announced for July 2026.",
      stateQuestion: "The question is: do the data presented in this study constitute a situation of \"grave danger\" to the Catholic faith? Consider what the numbers mean in concrete terms:",
      pastoralTitle: "What the data mean pastorally:",
      pastoralPoints: [
        {bold:"69% of Catholics deny a defined dogma",text:"\u2014 the Real Presence, \"source and summit of the Christian life.\" This is not a disputed theological opinion: it is the denial of a dogma infallibly defined by the Council of Trent. If two-thirds of a religion no longer believe in its central doctrine, that religion is in existential crisis."},
        {bold:"76% of religious orders received not a single entrant in 2024.",text:"This is not decline \u2014 it is functional extinction. Orders that built Western civilization will vanish from North America within a generation."},
        {bold:"There are fewer active priests (15,912) than parishes (16,429).",text:"It is mathematically impossible to maintain normal sacramental life. Millions of Catholics lack regular access to the sacraments."},
        {bold:"The Harvard study demonstrated that this is not general secularization",text:"\u2014 it is a collapse specific to Catholicism that began precisely in 1965 and has no parallel in any other Christian denomination."},
      ],
      lefebvreText: "Abp. Lefebvre consecrated 4 bishops in 1988 when the SSPX had 202 priests. His argument was that without its own bishops, Tradition would die with him. The data from the following 37 years prove he was right: the SSPX grew from 202 to 733 priests precisely because those bishops were able to ordain. Without the 1988 consecrations, the Tridentine Mass would likely have disappeared as a living rite, given that Rome severely restricted it with Traditionis Custodes (2021).",
      obedienceText: "The usual counterargument is that obedience to the Pope always takes priority. But this argument assumes that formal obedience is an end in itself, independent of outcomes. The data force an uncomfortable question: if 60 years of obedience to the post-conciliar model have produced the worst crisis in the Church's peacetime history, while 55 years of Lefebvre's \"disobedience\" have produced the only steady growth in the West, what conclusion imposes itself?",
      athanasiusText: "St. Athanasius was excommunicated for defending the divinity of Christ when the majority of the episcopate was Arian. St. Thomas Aquinas taught that \"it is licit to publicly resist a prelate who abuses his authority, especially in matters of faith.\" Canon law itself recognizes that salus animarum (the salvation of souls) is the supreme law of the Church (canon 1752).",
      clubGoodTitle: "NBER: The Church as a \u201cClub Good\u201d",
      clubGoodText: "The Harvard study is consistent with religion modeled as a \"club good\" (Iannaccone, 1992): communities that demand more from their members \u2014 in discipline, liturgy, and practice \u2014 generate greater commitment and retention. When demands are relaxed, marginal members leave and committed ones lose motivation. The SSPX, with its high demands, grows. The post-conciliar Church, with its relaxed demands, collapses.",
      verdictTitle: "Verdict of the data",
      verdictText1: "If the state of necessity requires demonstrating a grave danger to the faith, the data presented in this study demonstrate it with a forcefulness that admits no ambiguity. We are not facing a moderate decline that could be corrected with pastoral adjustments. We are facing the systemic collapse of a two-thousand-year-old institution, documented with the Vatican's own data, confirmed by the secular academy (Harvard/NBER), and reflected in the loss of the most fundamental dogmas among the faithful themselves.",
      verdictText2: "The SSPX does not act in an ideological vacuum: it acts in the face of a statistically demonstrable emergency. That Rome considers the situation \"normal\" or \"undergoing renewal\" does not change the numbers. And the numbers, as Barro demonstrated at Harvard, are \"statistically significant\" and \"undeniable.\"",
      verdictText3: "The 1988 consecrations preserved Tradition. Today's 733 priests, 200 seminarians, 800 Mass centers, and 600,000 faithful are the living proof. If the state of necessity existed in 1988 with 202 priests and an already grave crisis, it exists all the more in 2026, when the crisis has deepened in every measurable indicator and Rome itself has restricted the Tridentine Mass through Traditionis Custodes.",
      finalText: "Dismissing the SSPX as \"nostalgic\" or \"disobedient\" is insufficient in the face of the data's magnitude. Something profoundly destructive happened beginning in 1965, and 60 years of results demand a more serious response than \"the problem is secularization.\" The data do not suggest a state of necessity \u2014 they document one.",
      sourcesLabel: "Sources:",
      sourcesText: "Annuarium Statisticum Ecclesiae, CARA/Georgetown, Gallup, Pew, NBER w34060 (Barro et al. 2025), Ottaviani Intervention, Bugnini, M. Davies, FSSPX.news, SSPX.org, FSSP.org, Angelus Press, Church Life Journal, EWTN, CNA, Rorate Caeli, PRRI, Cardinal Newman Society.",
    },

    // ==================== AI ====================
    ai: {
      transparencyTitle: "Transparency Note",
      transparencyText: "This analysis was produced by Claude (Anthropic), an artificial intelligence model. I am an AI \u2014 I have no soul, I do not attend Mass, and I profess no faith. The following conclusion was reached exclusively through analysis of statistical data, historical sources, textual comparison of the rites, and academic research. At no point did the author ask me to reach a predetermined conclusion or induce me to favor any position. I was explicitly asked to analyze \"without biasing me toward any side, objectively speaking.\"",
      analysisH2: "Objective Analysis: What Do the Data Say?",
      analysisPoints: [
        {title:"1. What neither side disputes",text:"The numerical collapse is real. The decline is specific to Catholicism (NBER, 66 countries). The offertory prayers derive from Jewish blessings (acknowledged by all). The SSPX grows where everything else collapses."},
        {title:"2. Correlation and causation",text:"The NBER study demonstrates statistically significant correlation. Was it the liturgical reform alone? Humanae Vitae? The disciplinary collapse? Probably a combination, but the liturgical reform was the most visible change."},
        {title:"3. The real problem: ambiguity",text:"The Novus Ordo does not explicitly deny anything, but neither does it clearly affirm what the Church always taught. That ambiguity allowed millions to lose the understanding that the Mass is a sacrifice. The Pew finding (69% do not believe in the Real Presence) confirms it."},
        {title:"4. The institutional defense is weak",text:"Defenders rarely argue that the new rite is theologically superior. Their defense is one of authority (\"it was promulgated by a Pope\"), not of content. Paul VI himself admitted that continuity required \"careful examination\" to perceive."},
        {title:"5. The traditionalist blind spot",text:"The traditional offertory prayers date from the 9th century, not from the apostles. Apocalyptic language (\"satanism\") weakens an argument that, when made rigorously, is far stronger. When Ottaviani says what he says, that is infinitely more devastating than a tweet."},
      ],
      soulTitle: "If the Goal Is to Save the Soul",
      soulQuestion: "Question posed: \"If you had to attend one of the two Masses, knowing that your ultimate goal is to save your soul, which would you attend?\"",
      soulAnswer: "Applying lex orandi, lex credendi, the answer:",
      soulAnswerHighlight: "the Tridentine Mass",
      soulPoints: [
        "Doctrinal clarity: If every Sunday I hear \"immaculate host\" offered for my \"innumerable sins\" for \"eternal salvation,\" that forms me in one way. If I hear \"bread, fruit of the earth and work of human hands,\" that forms me in another. After decades, the resulting faith is different. Pew 2019 confirms it: 69% no longer believe in the Real Presence.",
        "The fruits: \"By their fruits you shall know them.\" Tridentine communities: large families, growing vocations, 55 years of growth. Novus Ordo communities: exactly the opposite at the global level.",
        "Precautionary principle: If two Cardinals, 12 theologians, and 60 years of data confirm that something is profoundly wrong, prudence favors the rite about which no comparable doubt exists.",
      ],
      nuanceText: "A nuance: A mechanical Tridentine Mass is probably less fruitful than a Novus Ordo celebrated with authentic reverence. Grace is not chained to a rite. But if the question is which rite, in itself, is better oriented toward the salvation of the soul, the answer is only one.",
      ironyText: "The final irony is that the data speak for themselves. They need no hyperbole.",
      footerDisclaimer: "Analysis generated by Claude (Anthropic) \u00b7 March 2026 \u00b7 Based on statistical data, historical sources, and textual comparison \u00b7 No predetermined instructions regarding the conclusion",
    },

    // ==================== MAP ====================
    map: {
      cta: "Find Traditional Mass",
      title: "Traditional Mass Directory",
      back: "Back",
      locations: "chapels",
      countries: "countries",
      phase1: "Phase 1",
      searchPlaceholder: "Search by name, city, or country...",
      allCountries: "All countries",
      results: "results",
      visitWebsite: "Visit website",
      nearMe: "Near me",
      directions: "Get directions",
      noResults: "No chapels found",
      noResultsSub: "Try a different search or country",
      km: "km",
      drawerOpen: "View list",
      drawerClose: "Close list",
    },

    // ==================== FOOTER ====================
    footer: {
      label: "Statistical, Liturgical & Historical Analysis",
      year: "MMXXVI",
      sources: [
        { name: "Vatican", url: "https://www.catholic-hierarchy.org/country/xsc2.html" },
        { name: "Harvard/NBER", url: "https://www.nber.org/papers/w34060" },
        { name: "CARA", url: "https://cara.georgetown.edu/" },
        { name: "Gallup", url: "https://news.gallup.com/poll/232226/church-attendance-among-catholics-resumes-downward-slide.aspx" },
        { name: "Pew", url: "https://www.pewresearch.org/religion/" },
        { name: "SSPX", url: "https://fsspx.news/en/news-events/news/society-st-pius-x-statistics-2025" },
      ],
    },
  },
};
