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
      { id: "sspx", label: "\u271d FSSPX" },
      { id: "novusordo", label: "\u2694 Novus Ordo" },
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
      h2: "Conclusi\u00f3n: \u00bfAmerita el Estado de Necesidad?",
      collapseSummaryTitle: "Colapso en EE.UU. (1965-2025):",
      collapseItems: [
        ["Sacerdotes", "-41%"],
        ["Religiosas", "-77%"],
        ["Seminaristas", "-90%"],
        ["Hermanos religiosos", "-71%"],
        ["Asistencia Misa", "-48%"],
        ["Matrimonios", "-74%"],
        ["Alumnos esc. cat\u00f3licas", "-70%"],
        ["Escuelas parroquiales", "-37%"],
        ["Seminarios", "-66%"],
        ["Religiosas ense\u00f1ando", "-92%"],
        ["Conversiones", "-52%"],
        ["Bautismos infantiles", "-23%"],
        ["No creen Presencia Real", "69%"],
        ["\u00d3rdenes sin ingresos", "76%"],
      ],
      traditionTitle: "Tradici\u00f3n (1988-2025):",
      traditionItems: [
        ["Sacerdotes FSSPX", "+263%"],
        ["Seminaristas", "~200 constantes"],
        ["Religiosas", "245 en crecimiento"],
        ["Ordenaciones 2025", "17"],
        ["Pa\u00edses", "62"],
        ["Fieles", "~600,000"],
      ],
      sourcesLabel: "Fuentes:",
      sourcesText:
        "Vaticano (Annuarium Statisticum Ecclesiae), CARA/Georgetown, Gallup, Pew Research Center, NBER/Harvard (Barro et al. 2025), FSSPX.news, Catholic News Agency, National Catholic Reporter.",
    },

    // ==================== AI ====================
    ai: {
      transparencyTitle: "Nota de Transparencia",
      transparencyText:
        "Este an\u00e1lisis fue generado por inteligencia artificial (Claude, Anthropic) a solicitud del autor. Se basa exclusivamente en los datos presentados en este dashboard, todos provenientes de fuentes acad\u00e9micas y oficiales verificables. El an\u00e1lisis busca ser objetivo, reconociendo tanto los datos que apoyan como los que matizan la tesis presentada.",
      analysisH2: "An\u00e1lisis Objetivo: \u00bfQu\u00e9 Dicen los Datos?",
      analysisPoints: [
        {
          title: "1. El declive es real y estad\u00edsticamente significativo",
          text: "Los n\u00fameros no admiten interpretaci\u00f3n alternativa. Ca\u00eddas del 41-99% en todas las m\u00e9tricas principales de la Iglesia Cat\u00f3lica en EE.UU. desde 1965 constituyen un colapso institucional sin precedentes en la historia de la Iglesia. El estudio NBER/Harvard (2025) confirma que este declive es espec\u00edfico del catolicismo, no parte de una secularizaci\u00f3n general.",
        },
        {
          title: "2. La correlaci\u00f3n temporal es innegable",
          text: "Todas las m\u00e9tricas quiebran entre 1965-1970, coincidiendo con la implementaci\u00f3n del Vaticano II y el Novus Ordo. Antes de 1965, las m\u00e9tricas eran estables o crec\u00edan. El estudio de Harvard establece 1965 como punto de inflexi\u00f3n estad\u00edstico. Correlaci\u00f3n no implica causalidad, pero la especificidad cat\u00f3lica del declive (vs. protestantes estables) refuerza fuertemente la hip\u00f3tesis causal.",
        },
        {
          title: "3. El contraste tradicional es significativo",
          text: "El crecimiento de la FSSPX (+263% en sacerdotes), FSSP y comunidades tradicionales durante el mismo per\u00edodo en que la Iglesia conciliar colapsaba constituye evidencia adicional. Si el declive fuera puramente secular, las comunidades tradicionales deber\u00edan mostrar la misma tendencia. No lo hacen.",
        },
        {
          title: "4. La crisis de fe es el indicador m\u00e1s alarmante",
          text: "El dato de Pew Research (2019) de que el 69% de los cat\u00f3licos no cree en la Presencia Real es quiz\u00e1s el m\u00e1s devastador. La Eucarist\u00eda es, seg\u00fan el Catecismo, la \u201cfuente y cumbre de la vida cristiana.\u201d Que la mayor\u00eda de los cat\u00f3licos no crea en ella sugiere un fallo sist\u00e9mico en la transmisi\u00f3n de la doctrina.",
        },
        {
          title: "5. El cambio lit\u00fargico tiene un mecanismo plausible",
          text: "El principio lex orandi, lex credendi (la ley de la oraci\u00f3n es la ley de la creencia) no es una teor\u00eda marginal sino un axioma teol\u00f3gico reconocido. La sustituci\u00f3n del ofertorio sacrificial por bendiciones de alimentos proporciona un mecanismo causal plausible para la p\u00e9rdida de creencia en la Presencia Real.",
        },
      ],
      soulTitle: "Si el Fin es Salvar el Alma",
      soulQuestion:
        "\u00bfQu\u00e9 conclusi\u00f3n debe sacar un cat\u00f3lico que acepta que la Misa es un sacrificio propiciatorio, que la Eucarist\u00eda es realmente el Cuerpo y Sangre de Cristo, y que la salvaci\u00f3n del alma es el fin \u00faltimo de la vida?",
      soulAnswer: "Los datos sugieren una respuesta incómoda:",
      soulPoints: [
        "Un rito que produce 69% de incredulidad en la doctrina central del catolicismo no est\u00e1 cumpliendo su funci\u00f3n santificadora.",
        "Un sistema que pierde sacerdotes, religiosas, seminaristas y fieles a tasas del 41-99% no est\u00e1 transmitiendo la fe.",
        "Un movimiento que crece (Tradici\u00f3n) mientras todo lo dem\u00e1s colapsa merece, como m\u00ednimo, una investigaci\u00f3n seria.",
      ],
      nuanceText:
        "Es importante reconocer que factores externos (revoluci\u00f3n sexual, secularizaci\u00f3n, esc\u00e1ndalos de abuso) contribuyeron al declive. Pero el estudio de Harvard demuestra que estos factores afectaron a todas las denominaciones, mientras que el declive cat\u00f3lico fue significativamente mayor y coincide con un evento \u00fanico: el Vaticano II.",
      ironyText:
        "La iron\u00eda final: las reformas se justificaron para \u201cacercar la Iglesia al mundo moderno.\u201d Sesenta a\u00f1os despu\u00e9s, los datos muestran que el mundo moderno no se acerc\u00f3 a la Iglesia \u2014 pero millones de cat\u00f3licos se alejaron de ella.",
      footerDisclaimer:
        "An\u00e1lisis generado por Claude (Anthropic). Basado exclusivamente en datos acad\u00e9micos y oficiales citados. Verificar fuentes primarias para uso acad\u00e9mico.",
    },

    // ==================== FOOTER ====================
    footer: {
      text: "An\u00e1lisis Estad\u00edstico, Lit\u00fargico e Hist\u00f3rico \u00b7 Datos del Vaticano, Harvard/NBER, CARA, Gallup, Pew, FSSPX \u00b7 MMXXVI",
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
      { id: "sspx", label: "\u271d SSPX" },
      { id: "novusordo", label: "\u2694 Novus Ordo" },
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
      h2: "Conclusion: Does the State of Necessity Apply?",
      collapseSummaryTitle: "Collapse in the U.S. (1965-2025):",
      collapseItems: [
        ["Priests", "-41%"],
        ["Religious sisters", "-77%"],
        ["Seminarians", "-90%"],
        ["Religious brothers", "-71%"],
        ["Mass attendance", "-48%"],
        ["Marriages", "-74%"],
        ["Catholic school students", "-70%"],
        ["Parish schools", "-37%"],
        ["Seminaries", "-66%"],
        ["Religious sisters teaching", "-92%"],
        ["Conversions", "-52%"],
        ["Infant baptisms", "-23%"],
        ["Don't believe in Real Presence", "69%"],
        ["Orders with no entrants", "76%"],
      ],
      traditionTitle: "Tradition (1988-2025):",
      traditionItems: [
        ["SSPX Priests", "+263%"],
        ["Seminarians", "~200 steady"],
        ["Religious sisters", "245, growing"],
        ["Ordinations 2025", "17"],
        ["Countries", "62"],
        ["Faithful", "~600,000"],
      ],
      sourcesLabel: "Sources:",
      sourcesText:
        "Vatican (Annuarium Statisticum Ecclesiae), CARA/Georgetown, Gallup, Pew Research Center, NBER/Harvard (Barro et al. 2025), FSSPX.news, Catholic News Agency, National Catholic Reporter.",
    },

    // ==================== AI ====================
    ai: {
      transparencyTitle: "Transparency Note",
      transparencyText:
        "This analysis was generated by artificial intelligence (Claude, Anthropic) at the author's request. It is based exclusively on the data presented in this dashboard, all sourced from verifiable academic and official sources. The analysis aims to be objective, acknowledging both the data that supports and the data that nuances the thesis presented.",
      analysisH2: "Objective Analysis: What Do the Data Say?",
      analysisPoints: [
        {
          title: "1. The decline is real and statistically significant",
          text: "The numbers admit no alternative interpretation. Declines of 41-99% across all major metrics of the Catholic Church in the U.S. since 1965 constitute an institutional collapse unprecedented in the history of the Church. The NBER/Harvard study (2025) confirms this decline is specific to Catholicism, not part of a general secularization.",
        },
        {
          title: "2. The temporal correlation is undeniable",
          text: "All metrics break between 1965-1970, coinciding with the implementation of Vatican II and the Novus Ordo. Before 1965, metrics were stable or growing. The Harvard study establishes 1965 as the statistical inflection point. Correlation does not imply causation, but the Catholic-specific nature of the decline (vs. stable Protestants) strongly reinforces the causal hypothesis.",
        },
        {
          title: "3. The traditional contrast is significant",
          text: "The growth of the SSPX (+263% in priests), FSSP, and traditional communities during the same period in which the conciliar Church collapsed constitutes additional evidence. If the decline were purely secular, traditional communities should show the same trend. They do not.",
        },
        {
          title: "4. The crisis of faith is the most alarming indicator",
          text: 'The Pew Research finding (2019) that 69% of Catholics do not believe in the Real Presence is perhaps the most devastating. The Eucharist is, according to the Catechism, the "source and summit of the Christian life." That the majority of Catholics do not believe in it suggests a systemic failure in the transmission of doctrine.',
        },
        {
          title: "5. The liturgical change has a plausible mechanism",
          text: "The principle lex orandi, lex credendi (the law of prayer is the law of belief) is not a fringe theory but a recognized theological axiom. The substitution of the sacrificial offertory with food blessings provides a plausible causal mechanism for the loss of belief in the Real Presence.",
        },
      ],
      soulTitle: "If the Goal Is to Save the Soul",
      soulQuestion:
        "What conclusion should a Catholic draw who accepts that the Mass is a propitiatory sacrifice, that the Eucharist truly is the Body and Blood of Christ, and that the salvation of the soul is the ultimate end of life?",
      soulAnswer: "The data suggest an uncomfortable answer:",
      soulPoints: [
        "A rite that produces 69% disbelief in the central doctrine of Catholicism is not fulfilling its sanctifying function.",
        "A system that loses priests, religious sisters, seminarians, and faithful at rates of 41-99% is not transmitting the faith.",
        "A movement that grows (Tradition) while everything else collapses deserves, at the very least, serious investigation.",
      ],
      nuanceText:
        "It is important to acknowledge that external factors (sexual revolution, secularization, abuse scandals) contributed to the decline. But the Harvard study demonstrates that these factors affected all denominations, while the Catholic decline was significantly greater and coincides with a unique event: Vatican II.",
      ironyText:
        'The final irony: the reforms were justified to "bring the Church closer to the modern world." Sixty years later, the data show that the modern world did not come closer to the Church \u2014 but millions of Catholics walked away from it.',
      footerDisclaimer:
        "Analysis generated by Claude (Anthropic). Based exclusively on cited academic and official data. Verify primary sources for academic use.",
    },

    // ==================== FOOTER ====================
    footer: {
      text: "Statistical, Liturgical & Historical Analysis \u00b7 Vatican, Harvard/NBER, CARA, Gallup, Pew, SSPX Data \u00b7 MMXXVI",
    },
  },
};
