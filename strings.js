var lang = "en";
// Switch the language depending on the URL with fallback on "en"
if (window.location.search == "?fr") {
  lang = "fr";
} else if (window.location.search == "?it") {
  lang = "it";
} else if (window.location.search == "?en") {
  lang = "en";
} else if (window.location.search == "?sp") {
  lang = "sp";
} else if (window.location.search == "?po") {
  lang = "po";
} else if (window.location.search == "?zh") {
  lang = "zh";
}


var survey;
if (lang == "en") {
  var survey = {
    type: "survey-dropdown",
    preamble: "A little questionnaire to start with:",
    questions: [
      { prompt: "Country of origin:", htmlType: "country" },
      {
        prompt: "Gender:",
        options: [
          "Man",
          "Woman",
          "Non-binary",
          "Other",
          "Prefer not to answer",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "Age:", htmlType: "number" },
      {
        prompt: "Highest degree obtained:",
        options: [
          "Primary school",
          "Middle school",
          "High School",
          "Bachelor",
          "Master",
          "PhD",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "How would you rate your familiarity with graphs on a scale from 1 to 10?",
        htmlType: "likert",
      },
      {
        prompt:
          "How would you rate your ability to read and understand a scatterplot from 1 to 10?",
        htmlType: "likert",
      },
      {
        prompt:
          "How would you rate your knowledge of statistics on a scale from 1 to 10?",
        htmlType: "likert",
      },
      {
        prompt:
          "How would you rate your current skills in mathematics on a scale from 1 to 10?",
        htmlType: "likert",
      },
      {
        prompt:
          "How would you rate your current skills in your first language (orthography, grammar, communication) on a scale from 1 to 10?",
        htmlType: "likert",
      },
      {
        prompt:
          "How 'calm' do you estimate your environment for the duration of the experiment, on a scale from 1 to 10 ?",
        htmlType: "likert",
      },
      { prompt: "If you already took this test in the past, please state here how many times:", htmlType: "number" , required: false},
    ],
    button_label: "Continue",
  };
} else if (lang == "it") {
  var survey = {
    type: "survey-dropdown",
    preamble: "Un piccolo questionario per cominciare:",
    questions: [
      { prompt: "Paese d’origine:", htmlType: "country" },
      {
        prompt: "Genere",
        options: [
          "Uomo",
          "Donna",
          "Non binario",
          "Altro",
          "Preferisco non rispondere",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "Età", htmlType: "number" },
      {
        prompt: "Più alto livello scolastico raggiunto",
        options: [
          "Scuola elementare",
          "Scuola media",
          "Scuola superiore",
          "Laurea Triennale",
          "Laurea Magistrale",
          "Dottorato",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "Su una scala da 1 a 10, che livello di familiarità hai con i grafici?",
        htmlType: "likert",
      },
      {
        prompt:
          "Su una scala da 1 a 10, che capacità pensi di avere nella lettura e comprensione dei grafici?",
        htmlType: "likert",
      },
      {
        prompt:
          "Su una scala da 1 a 10, a che livello consideri la tua conoscenza in statistica?",
        htmlType: "likert",
      },
      {
        prompt:
          "Su una scala da 1 a 10, a che livello consideri le tue abilità attuali in matematica?",
        htmlType: "likert",
      },
      {
        prompt:
          "Su una scala da 1 a 10, a che livello consideri le tue abilità attuali nella tua lingua madre (ortografia, grammatica, comunicazione)?",
        htmlType: "likert",
      },
      {
        prompt:
          "Su una scala da 1 a 10, quanto 'calmo' consideri l'ambiente in cui stai svolgendo l'esperimento?",
        htmlType: "likert",
      },
      { prompt: "Se hai già partecipato, indica il numero di volte", htmlType: "number", required: false },
    ],
    button_label: "Continuare",
  };
} else if (lang == "fr") {
  var survey = {
    type: "survey-dropdown",
    preamble: "Un petit questionnaire pour commencer",
    questions: [
      { prompt: "Pays d'origine", htmlType: "country" },
      {
        prompt: "Genre",
        options: [
          "Homme",
          "Femme",
          "Non binaire",
          "Autre",
          "Préfère ne pas répondre",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "Age", htmlType: "number" },
      {
        prompt: "Plus haut niveau de scolarité atteint",
        options: [
          "Ecole primaire",
          "Collège",
          "Lycée",
          "Licence",
          "Master",
          "Doctorat",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, quelle familiarité vous avez avec les graphiques ?",
        htmlType: "likert",
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, quelle capacité vous estimez avoir dans la lecture et compréhension des graphiques ?",
        htmlType: "likert",
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, à quel niveau vous estimez votre connaissance des statistiques ?",
        htmlType: "likert",
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, à quel niveau vous estimez vos capacitès actuelles en mathématiques ?",
        htmlType: "likert",
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, à quel niveau vous estimez vos capacitès actuelles dans votre langue maternelle (orthographe, grammaire, communication)?",
        htmlType: "likert",
      },
      {
        prompt:
          "Sur une échelle de 1 à 10, à quel point décririez vous l'environnement dans lequel vous allez passer l'expérience comme 'calme' ?",
        htmlType: "likert",
      },
      { prompt: "Si vous avez déjà participé, veuillez indiquer ici combien de fois:", htmlType: "number", required: false },
    ],
    button_label: "Continuer",
  };
} else if (lang == "sp") {
  var survey = {
    type: "survey-dropdown",
    preamble: "Un breve cuestionario para empezar",
    questions: [
      { prompt: "País de origen", htmlType: "country" },
      {
        prompt: "Género",
        options: [
          "Hombre",
          "Mujer",
          "No binario(a)",
          "Otro",
          "Prefiere no responder",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "Edad", htmlType: "number" },
      {
        prompt: "El nivel más alto de educación alcanzado ",
        options: [
          "Escuela Primaria",
          "Escuela Secundaria",
          "Bachillerato",
          "Licenciatura",
          "Maestría",
          "Doctorado",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿qué familiaridad tiene usted con los gráficos?",
        htmlType: "likert",
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿qué capacidad estima usted tener para la lectura y comprensión de gráficos?",
        htmlType: "likert",
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿en qué nivel estima usted su conocimiento en estadística?",
        htmlType: "likert",
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿en qué nivel estima usted su habilidades matemáticas actuales?",
        htmlType: "likert",
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿en qué nivel estima usted sus habilidades actuales en su lengua materna (ortografía, gramática, comunicación)??",
        htmlType: "likert",
      },
      {
        prompt:
          "En una escala del 1 al 10, ¿en cuánto describiría usted el ambiente en el que pasara la experiencia como tranquilo?",
        htmlType: "likert",
      },
      { prompt: "Si ya ha participado, indique aquí cuántas veces:", htmlType: "number", required: false },
    ],
    button_label: "Continuar",
  };
} else if (lang == "po") {
  var survey = {
    type: "survey-dropdown",
    preamble: "Um breve inquérito para começar",
    questions: [
      { prompt: "País de origem", htmlType: "country" },
      {
        prompt: "Género",
        options: [
          "Homem",
          "Mulher",
          "Não binário",
          "Outro",
          "Prefere não responder",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "Idade", htmlType: "number" },
      {
        prompt: "Máximo nível escolar atingido:",
        options: [
          "Ensino básico",
          "Ensino secundário",
          "Ensino superior",
          "Licenciatura",
          "Mestrado",
          "Doutoramento",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "Em uma escada de 1 a 10, qual è o seu nível de familiaridade com os gráficos?",
        htmlType: "likert",
      },
      {
        prompt:
          "Em uma escada de 1 a 10, qual è a sua capacidade de leitura e compreensão dos gráficos?",
        htmlType: "likert",
      },
      {
        prompt:
          "Em uma escada de 1 a 10, qual è o nível que você estima ter de estadística?",
        htmlType: "likert",
      },
      {
        prompt:
          "Em uma escada de 1 a 10, a que nível estima as suas competências matemáticas actuais?",
        htmlType: "likert",
      },
      {
        prompt:
          "Em uma escada de 1 a 10, a que nível considera as suas competências actuais na sua língua materna (ortografia, gramática, comunicação)?",
        htmlType: "likert",
      },
      {
        prompt:
          "Em uma escada de 1 a 10, quanto “calmo” considera o ambiente onde se encontra para a duração do ensaio?",
        htmlType: "likert",
      },
      { prompt: "Se já participou ao ensaio, indique o número de vezes:", htmlType: "number", required: false },
    ],
    button_label: "Continuar",
  };
} else if (lang == "zh") {
  var survey = {
    type: "survey-dropdown",
    preamble: "请先填写一个小调查问卷：",
    questions: [
      { prompt: "国籍：", htmlType: "country" },
      {
        prompt: "性别",
        options: [
          "男",
          "女",
          "非二元性别",
          "其它",
          "不想说",
        ],
        labels: ["M", "F", "NB", "O", "NoAnswer"],
      },
      { prompt: "年龄", htmlType: "number" },
      {
        prompt: "最高学历",
        options: [
          "小学",
          "初中",
          "高中",
          "学士",
          "硕士",
          "博士",
        ],
        labels: [
          "PrimarySchool",
          "MiddleSchool",
          "HighSchool",
          "Ba",
          "Ms",
          "PhD",
        ],
      },
      {
        prompt:
          "你如何评价自己对图形和图表的熟悉程度？1：不熟悉；10：非常熟悉",
        htmlType: "likert",
      },
      {
        prompt:
          "你如何评价自己阅读和理解散点图的能力？1：很差；10：非常好",
        htmlType: "likert",
      },
      {
        prompt:
          "你如何给自己的统计学知识打分？1：很差；10：非常好",
        htmlType: "likert",
      },
      {
        prompt:
          "你如何评价自己现在的数学技能？1：很差；10：非常好",
        htmlType: "likert",
      },
      {
        prompt:
          "你如何评价你的母语技能（汉字书写规范，语法，语言交流能力）？1：很差；10：非常好",
        htmlType: "likert",
      },
      {
        prompt:
          '在这个实验期间，你如何评价自己所处环境的 "安静 "程度？1：很嘈杂；10：很安静',
        htmlType: "likert",
      },
      { prompt: "如果你之前已经参加了这个测试，请在这里注明你参加了多少次：", htmlType: "number", required: false },
    ],
    button_label: "继续",
  };
}




var more_survey;
if (lang == "en") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "Additional questions",
    questions: [
      {
        prompt: "Closest area of your degree:",
        options: [
          "science",
          "technology or engineering",
          "statistics",
          "medicine or health",
          "psychology",
          "business or economics",
          "law",
          "literature, history or philosophy",
          "foreign languages",
          "geography",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "Average grade in mathematics",
        options: ["Low", "Medium-low", "Medium", "Medium-high", "High"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "Continue",
  };
} else if (lang == "it") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "Domande aggiuntive",
    questions: [
      {
        prompt: "Settore più vicino agli studi svolti",
        options: [
          "scienze",
          "ingegneria o tecnologia",
          "statistica",
          "medicina o professioni sanitarie",
          "psicologia",
          "business o economia",
          "legge",
          "letteratura, storia o filosofia",
          "lingue straniere",
          "geografia",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "Voto medio in matematica",
        options: ["Basso", "Medio-basso", "Medio", "Medio-alto", "Alto"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "Continuare",
  };
}  else if (lang == "sp") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "Preguntas adicionales",
    questions: [
      {
        prompt: "Ámbito (de estudio) más cercano a su diploma",
        options: [
          "ciencia",
          "tecnología o ingeniería",
          "estadística",
          "medicina o salud",
          "psicología",
          "negocios o economía",
          "derecho",
          "literatura, historia o filosofía",
          "lenguas extranjeras",
          "geografía",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "La nota media en matemáticas",
        options: ["Baja", "Media-baja", "Media", "Media-alta", "Alta"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "Continuer",
  };
} else if (lang == "po") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "Perguntas adicionais",
    questions: [
      {
        prompt: "Setor mais perto aos estudos desenvolvidos",
        options: [
          "ciências",
          "engenharia ou tecnólogia",
          "estadística",
          "médicina ou profissões da saúde",
          "psicólogia",
          "business ou economia",
          "direito",
          "literatura; história ou filosofía",
          "línguas estrangeiras",
          "geografía",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "Nota média em Matemática",
        options: ["Baixa", "Média-baixa", "Média", "Média-alta", "Alta"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "Continuare",
  };
} else if (lang == "fr") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "Questions supplémentaires",
    questions: [
      {
        prompt: "Domaine plus proche du diplôme",
        options: [
          "sciences",
          "technologie ou sciences de l’ingénieur",
          "statistiques",
          "médecine ou santé",
          "psychologie",
          "business ou économie",
          "droit",
          "littérature, histoire ou philosophie",
          "langues étrangères",
          "géographie",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "Note moyenne en mathématiques",
        options: ["Basse", "Moyenne-basse", "Moyenne", "Moyenne-haute", "Haute"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "Continuer",
  };
} if (lang == "zh") {
  var more_survey = {
    type: "survey-dropdown",
    preamble: "其它问题",
    questions: [
      {
        prompt: "和你学位最相关的领域",
        options: [
          "理学",
          "技术，工科",
          "统计学",
          "医学或公共卫生相关",
          "心理学",
          "工商学",
          "法学",
          "文学，历史，或哲学",
          "外语",
          "地理学",
        ],
        labels: [
          "science",
          "technology-or-engineering",
          "statistics",
          "medicine-or-health",
          "psychology",
          "business-or-economics",
          "law",
          "literature-history-or-philosophy",
          "foreign-languages",
          "geography",
        ],
      },
      {
        prompt: "你平均的数学水平/成绩",
        options: ["低", "低到中等", "中等", "中等到高", "高"],
        labels: ["L", "M-L", "M", "M-H", "H"],
      },
    ],
    button_label: "继续",
  };
}


gen_fullscreen = function(lang) {
  var prompt;
  if (lang === "en") {
    prompt = '<ul><li>Is it going <strong>up? ' +
      (device === "touchscreen" ? 'press the up arrow' :
        (leftIsUp ? 'press the "S" key on your keyboard' : 'press the "L" key on your keyboard')) +
      '</strong>.</li><li> Is it going <strong>down? ' +
      (device === "touchscreen" ? 'press the down arrow' :
        (leftIsUp ? 'press the "L" key on your keyboard' : 'press the "S" key on your keyboard')) +
      '</strong></li></ul>'
  }
  if (lang === "fr") {
    prompt = '<ul><li>Est-ce qu\'il <strong>monte ? ' +
      (device === "touchscreen" ? 'Appuie sur la flèche qui monte' :
        (leftIsUp ? 'Appuie sur la touche "S" de ton clavier' : 'Appuie sur la touche "L" de ton clavier')) +
      '</strong>.</li><li> Est-ce qu\'il <strong>descend ? ' +
      (device === "touchscreen" ? 'Appuie sur la flèche qui descend' :
        (leftIsUp ? 'appuie sur la touche "L" de ton clavier' : 'Appuie sur la touche "S" de ton clavier')) +
      '</strong>.</li></ul>'
  }
  if (lang === "it") {
    prompt = '<ul><li>Il grafico <strong>sale? ' +
      (device === "touchscreen" ? 'Premi la freccia verso l\'alto' :
        (leftIsUp ? 'premere il tasto "S" sulla tastiera' : 'premere il tasto "L" sulla tastiera')) +
      '</strong>.</li><li> Il grafico <strong>scende? ' +
      (device === "touchscreen" ? 'Premi la freccia verso il basso' :
        (leftIsUp ? 'premere il tasto "L" sulla tastiera' : 'premere il tasto "S" sulla tastiera')) +
      '</strong>.</li></ul>'
  }
  if (lang === "sp") {
    prompt = '<ul><li>¿El gráfico <strong>sube? ' +
      (device === "touchscreen" ? 'Presiona la flecha hacia arriba' :
        (leftIsUp ? 'presiona el botón "S" de tu teclado' : 'presiona el botón "L" en tu teclado')) +
      '</strong>.</li><li> ¿El gráfico <strong>Baja? ' +
      (device === "touchscreen" ? 'Presiona la flecha hacia abajo' :
        (leftIsUp ? 'presiona el botón "L" en tu teclado' : 'presiona el botón "S" de tu teclado')) +
      '</strong>.</li></ul>'
  }
  if (lang === "po") {
    prompt = '<ul><li>O gráfico <strong>sobe? ' +
      (device === "touchscreen" ? 'Prima a seta para cima' :
        (leftIsUp ? 'Pulse a tecla “S” sobre o teclado' : 'Pulse a tecla “L” sobre o teclado')) +
      '</strong>.</li><li> O gráfico <strong>baixa? ' +
      (device === "touchscreen" ? 'Prima a seta para baixo' :
        (leftIsUp ? 'Pulse a tecla “L” sobre o teclado' : 'Pulse a tecla “S” sobre o teclado.')) +
      '</strong>.</li></ul>'
  }
  if (lang === "zh") {
    prompt = '<ul><li>它是<strong>上升</strong>的吗？' +
      (device === "touchscreen" ? '请按向上键' :
        (leftIsUp ? '请按键盘上的 "S "键' : '请按键盘上的 "L "键')) +
      '</strong>.</li><li>它是<strong>下降</strong>的吗？' +
      (device === "touchscreen" ? '请按向下键' :
        (leftIsUp ? '请按键盘上的 "L "键' : '请按键盘上的 "S "键')) +
      '</strong></li></ul>'
  }

  var fullscreen;
  if (lang == "en") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "Switch to fullscreen and start",
    };
  } else if (lang == "fr") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "Passer en plein écran et commencer",
    };
  } else if (lang == "it") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "Passare a schermo intero e avviare",
    };
  } else if (lang == "sp") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "Cambie a pantalla completa y empiece",
    };
  } else if (lang == "po") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "Ativar o modo de ecrã inteiro e iniciar",
    };
   } else if (lang == "zh") {
    fullscreen = {
      type: "fullscreen",
      fullscreen_mode: true,
      message: prompt,
      button_label: "切换到全屏并开始实验",
    };

  }
  fullscreen.on_finish = function(data) {
    document.body.style.cursor = 'none';
    document.body.appendChild(score_div);
    add_block_to_timeline();
  }
  return fullscreen;
}

update_score = function () {
  if (lang == "en") {
    score_div.innerHTML =
      "<h3>Current streak: " +
      current_streak +
      "</h3><h3>Longest: " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Score: " + total_score + "</h2>";
  } else if (lang == "fr") {
    score_div.innerHTML =
      "<h3>Série actuelle : " +
      current_streak +
      "</h3><h3>Plus longue : " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Score : " + total_score + "</h2>";
  } else if (lang == "it") {
    score_div.innerHTML =
      "<h3>Serie attuale: " +
      current_streak +
      "</h3><h3>La più lunga: " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Punteggio : " + total_score + "</h2>";
  } else if (lang == "sp") {
    score_div.innerHTML =
      "<h3>Serie actual: " +
      current_streak +
      "</h3><h3>La más larga: " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Puntuación: " + total_score + "</h2>";
  } else if (lang == "po") {
    score_div.innerHTML =
      "<h3>Série actual: " +
      current_streak +
      "</h3><h3>A mais longa: " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Pontuação : " + total_score + "</h2>";
  } else if (lang == "en") {
    score_div.innerHTML =
      "<h3>Current streak: " +
      current_streak +
      "</h3><h3>Longest: " +
      longest_streak +
      "</h3>";
    score_div.innerHTML += "<h2>Score: " + total_score + "</h2>";
  }
};

add_congrats = function (content, score, weird_score, sensitivity) {
  if (lang == "en") {
    content.innerHTML =
      "<h1>Congrats! You succeeded on " +
      Math.round((100 * score) / actual_len) +
      "% of the trials!</h1>";
    content.innerHTML +=
      "<h2>Combined with your speed, this means that you have a score of " +
      Math.round(weird_score) +
      "</h2>";
  } else if (lang == "fr") {
    content.innerHTML =
      "<h1>Félicitations ! Vous avez un taux de succès de " +
      Math.round((100 * score) / actual_len) +
      "% !</h1>";
    content.innerHTML +=
      "<h2>En comptabilisant votre vitesse moyenne, votre score est de " +
      Math.round(weird_score) +
      "</h2>";
  } else if (lang == "it") {
    content.innerHTML =
      "<h1>Congratulazioni! Hai svolto correttamente il " +
      Math.round((100 * score) / actual_len) +
      "% delle prove!</h1>";
    content.innerHTML +=
      "<h2>Combinato con la tua velocità, questo significa che hai ottenuto un punteggio di " +
      Math.round(weird_score) +
      "</h2>";
  } else if (lang == "sp") {
    content.innerHTML =
      "<h1>¡Felicidades! Hiciste el " +
      Math.round((100 * score) / actual_len) +
      "% de las pruebas correctamente!</h1>";
    content.innerHTML +=
      "<h2>Combinado con tu velocidad, esto significa que has alcanzado una puntuación de " +
      Math.round(weird_score) +
      "</h2>";
  } else if (lang == "po") {
    content.innerHTML =
      "<h1>Parabéns! Fez " +
      Math.round((100 * score) / actual_len) +
      "% dos testes correctamente!</h1>";
    content.innerHTML +=
      "<h2>Combinado com a sua velocidade, isso significa que você alcançou uma pontuação de " +
      Math.round(weird_score) +
      "</h2>";
  } else if (lang == "zh") {
    content.innerHTML =
      "<h1>恭喜你！你做对了" +
      Math.round((100 * score) / actual_len) +
      "% 的题！</h1>";
    content.innerHTML +=
      "<h2>综合考虑你的速度，你得到了" +
      Math.round(weird_score) + "分！" +
      "</h2>";
  }
  if (sensitivity != null && isFinite(sensitivity)) {
    var s = sensitivity.toFixed(2);
    if (lang == "en") {
      content.innerHTML += "<h3>Your sensitivity to slope direction was <code>" + s + "</code>.</h3>";
    } else if (lang == "fr") {
      content.innerHTML += "<h3>Votre indice de sensibilité à la pente des graphiques était de <code>" + s + "</code>.</h3>";
    } else if (lang == "it") {
      content.innerHTML += "<h3>Il tuo indice di sensibilità alla pendenza dei grafici era <code>" + s + "</code>.</h3>";
    } else if (lang == "sp") {
      content.innerHTML += "<h3>Tu índice de sensibilidad a la pendiente de los gráficos fue <code>" + s + "</code>.</h3>";
    } else if (lang == "po") {
      content.innerHTML += "<h3>O seu índice de sensibilidade à inclinação dos gráficos foi <code>" + s + "</code>.</h3>";
    } else if (lang == "zh") {
      content.innerHTML += "<h3>你对图表斜率的敏感度指数是 <code>" + s + "</code>。</h3>";
    }
  }
};

more_congrats = function (content, rank, total) {
  if (lang == "en") {
    content.innerHTML +=
      "<h3>You are ranked " + rank + " out of " + total + "</h3>";
    content.innerHTML +=
      "<h4>Your anonymous ID is <code>" + subject_id + "</code></h4>";
  } else if (lang == "fr") {
    content.innerHTML +=
      "<h3>Votre classement : " + rank + " sur " + total + "</h3>";
    content.innerHTML +=
      "<h4>Votre identifiant anonyme est <code>" + subject_id + "</code></h4>";
  } else if (lang == "it") {
    content.innerHTML += "<h3>Sei al " + rank + "° posto su " + total + "</h3>";
    content.innerHTML +=
      "<h4>Il tuo ID anonimo è <code>" + subject_id + "</code></h4>";
  } else if (lang == "sp") {
    content.innerHTML += "<h3>Estás en el puesto " + rank + "de " + total + "</h3>";
    content.innerHTML +=
      "<h4>Tu identificación anónima es <code>" + subject_id + "</code></h4>";
  } else if (lang == "po") {
    content.innerHTML += "<h3>Você está em lugar " + rank + "entre os " + total + "</h3>";
    content.innerHTML +=
      "<h4>A sua identificação anónima é <code>" + subject_id + "</code></h4>";
  } else if (lang == "zh") {
    content.innerHTML +=
      "<h3>你的名次是" + total + "人" + "里的第" + rank + "名" + "</h3>";
    content.innerHTML +=
      "<h4>你的匿名ID是<code>" + subject_id + "</code></h4>";
  }
};
get_head = function () {
  if (lang == "en") {
    return "<tr><th>Rank</th><th>Anonymous ID</th><th>Score</th><th>Date</th></tr>";
  } else if (lang == "fr") {
    return "<tr><th>Rang</th><th>Identifiant anonyme</th><th>Score</th><th>Date</th></tr>";
  } else if (lang == "it") {
    return "<tr><th>Rango</th><th>ID anonimo</th><th>Punteggio</th><th>Data</th></tr>";
  } else if (lang == "sp") {
    return "<tr><th>Puesto</th><th>Identificación anónima</th><th>Puntuación</th><th>Fecha</th></tr>";
  } else if (lang == "po") {
    return "<tr><th>Lugar</th><th>Identificação anónima</th><th>Pontuação</th><th>Data</th></tr>";
  } else if (lang == "zh") {
    return "<tr><th>Rank</th><th>匿名ID</th><th>分数</th><th>日期</th></tr>";
  }
};

shareScore = function(content, score) {
  link_fb = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprivate.unicog.org%2Fmsm%2Fgraphicacy%2F"
  link_twitter = "https://twitter.com/intent/tweet?text="
  link_mail = "mailto:?subject="
  if (lang == "en") {
    link_twitter += encodeURIComponent("I scored " + score + " on https://private.unicog.org/msm/graphicacy/ — match me! #Graphicacy")
    header = "Help us by sharing this experiment on social media:"
    link_mail += encodeURIComponent("Experiment on Graphicacy")
  }
  else if (lang == "fr") {
    link_twitter += encodeURIComponent("J'ai un score de " + score + " sur https://private.unicog.org/msm/graphicacy/ — tu peux faire mieux ? #Graphicacy")
    header = "Aidez nous en partageant cette expérience sur les réseaux sociaux :"
    link_mail += encodeURIComponent("Expérience sur la Graphicacy")
  }
  else if (lang == "it") {
    link_twitter += encodeURIComponent("Ho un punteggio di " + score + " sul https://private.unicog.org/msm/graphicacy/ — Puoi fare di meglio ? #Graphicacy")
    link_mail += encodeURIComponent("Esperimento sulla Graficosità")
    header = "Aiutaci condividendo questo esperimento sui social media:"
  }
  else if (lang == "sp") {
    link_twitter += encodeURIComponent("Tengo una puntuación de " + score + " en https://private.unicog.org/msm/graphicacy/ â€” ¿Puedes hacerlo mejor? #Graphicacy")
    link_mail += encodeURIComponent("Experimento de Graficosidad")
    header = "Ayúdenos compartiendo este experimento en los medios sociales:"
  }
  else if (lang == "po") {
    link_twitter += encodeURIComponent("Tenho uma pontuação de " + score + " em https://private.unicog.org/msm/graphicacy/ â€” Pode fazer melhor? #Graphicacy")
    link_mail += encodeURIComponent("Ensaio de Graficosidade")
    header = "Ajude-nos partilhando esta experiência nas redes sociais:"
  }
  else if (lang == "zh") {
    link_twitter += encodeURIComponent("我在https://private.unicog.org/msm/graphicacy/ 这个实验里得了" + score + "分，来挑战我吧！ #Graphicacy")
    header = "帮我们在社交媒体上分享这个实验："
    link_mail += encodeURIComponent("图形图表感知实验")
  }
  link_mail += "&body=" + encodeURIComponent("https://private.unicog.org/msm/graphicacy/")
  content_add = "<h4>" + header + "</h4>";
  content_add += '<a class="social" href='+link_twitter+' target="_blank" rel="noopener noreferrer"><img src='+twitter_icon+'></a>';
  content_add += '<a class="social" href='+link_fb+' target="_blank" rel="noopener noreferrer"><img src='+fb_icon+'></a>';
  content_add += '<a class="social" href="'+link_mail+'" target="_blank" rel="noopener noreferrer"><img src='+mail_icon+'></a>';
  content.innerHTML += content_add;
};
get_head = function () {
  if (lang == "en") {
    return "<tr><th>Rank</th><th>Anonymous ID</th><th>Score</th><th>Date</th></tr>";
  } else if (lang == "fr") {
    return "<tr><th>Rang</th><th>Identifiant anonyme</th><th>Score</th><th>Date</th></tr>";
  } else if (lang == "it") {
    return "<tr><th>Rango</th><th>ID anonimo</th><th>Punteggio</th><th>Data</th></tr>";
  } else if (lang == "sp") {
    return "<tr><th>Puesto</th><th>Identificación anónima</th><th>Puntuación</th><th>Fecha</th></tr>";
  } else if (lang == "po") {
    return "<tr><th>Lugar</th><th>Identificação anónima</th><th>pontuação</th><th>Data</th></tr>";
  } else if (lang == "zh") {
    return "<tr><th>名次</th><th>匿名ID</th><th>分数</th><th>日期</th></tr>";
  }
};


strings_restart = {};
strings_restart.en = {};
strings_restart.fr = {};
strings_restart.it = {};
strings_restart.po = {};
strings_restart.sp = {};
strings_restart.zh = {};

strings_restart.en.stimulus = "<h2>Thanks for your time!</h2><p>Do you want to do another block of trials and try to increase your score?</p>";
strings_restart.en.choices = ["Yes", "No"];

strings_restart.fr.stimulus = "<h2>Merci de votre patience!</h2><p>Voulez vous faire un autre essai pour augmenter votre score?</p>";
strings_restart.fr.choices = ["Oui", "Non"];

strings_restart.it.stimulus = "<h2>Grazie per il tuo tempo!</h2><p>Vuoi fare un'altra prova e cercare di aumentare il tuo punteggio?</p>";
strings_restart.it.choices = ["Sì", "No"];

strings_restart.sp.stimulus = "<h2>¡Gracias por tu tiempo!</h2><p>¿Quieres intentarlo de nuevo e aumentar tu puntuación?</p>";
strings_restart.sp.choices = ["Si", "No"];

strings_restart.po.stimulus = "<h2>Obrigado pelo seu tempo!</h2><p>Quer tentar de novo e aumentar a sua pontuação?</p>";
strings_restart.po.choices = ["Si", "No"];

strings_restart.zh.stimulus = "<h2>感谢你的参与！</h2><p>你要再做一次实验来提高你的分数吗？</p>";
strings_restart.zh.choices = ["要", "不要了"];

var strings_device = {};
strings_device.en = {};
strings_device.fr = {};
strings_device.it = {};
strings_device.sp = {};
strings_device.po = {};
strings_device.zh = {};

strings_device.en.stimulus = "<p>Will you answer using a touchscreen (phone, tablet, etc.) or with a keyboard (computer)?</p>";
strings_device.en.choices = ["touchscreen", "keyboard"];

strings_device.fr.stimulus = "<p>Allez vous participer avec un écran tactile (téléphone, tablette, etc.) ou avec un clavier (ordinateur) ?</p>";
strings_device.fr.choices = ["écran tactile", "clavier"];

strings_device.it.stimulus = "<p>Risponderai utilizzando un touchscreen (telefono, tablet, ecc.) o una tastiera (computer)?</p>";
strings_device.it.choices = ["touchcreen", "tastiera"];

strings_device.sp.stimulus = "<p>¿Va a participar utilizando una pantalla táctil (teléfono, tableta, etc.) o un teclado (ordenador)?</p>";
strings_device.sp.choices = ["pantalla táctil", "teclado"];

strings_device.po.stimulus = "<p>Você vai responder com um ecrã táctil (telemóvel, tablet, etc…) ou teclado (computadora)?</p>";
strings_device.po.choices = ["ecrã táctil", "teclado"];

strings_device.zh.stimulus = "<p>你会用触摸屏（手机，平板等）上答题还是用键盘（电脑）答题？</p>";
strings_device.zh.choices = ["触摸屏", "键盘"];

gen_instructions = function(lang, device, leftIsUp) {
  if (lang === "en") {
    return '<div id="consent"><section id="consent_body"><h2>Instructions</h2> <h3>Will you be the next world champion of graphicacy?</h3> <h4>Play our game to discover it! 📈</h4><h4>This experiment has sound, please turn your volume on</h4>' +
      (device === "touchscreen" ? '<h5>Please use your phone horizontally.</h5>' : '') +
      '<p> The game is very simple: you will see sets of dots flashing on your screen. Your task is to answer as fast and accurately as you can about the tendency of the plot.</p><ul><li>Is it going <strong>up? ' +
      (device === "touchscreen" ? 'press the up arrow' :
        (leftIsUp ? 'press the "S" key on your keyboard' : 'press the "L" key on your keyboard')) +
      '</strong>.</li><li> Is it going <strong>down? ' +
      (device === "touchscreen" ? 'press the down arrow' :
        (leftIsUp ? 'press the "L" key on your keyboard' : 'press the "S" key on your keyboard')) +
      '</strong></li></ul> <p> Your score will be based both on your accuracy and your speed: you have to be accurate AND fast if you want to obtain a better score than the other participants in the world! Once a block of trials is over, you will be asked if you want to continue the game to improve your score: who knows, you might be the best graph reader of the world!  </p> </section> </div>'
  }
  if (lang === "fr") {
    return '<div id="consent"> <section id="consent_body"> <h2>Instructions</h3> <h3>Seras-tu le nouveau champion du monde de graphicacie ?</h3> <h4>Participe à notre jeu pour le découvrir ! 📈</h4><h4>Cette expérience contient des sons, veuillez activer l\'audio sur votre appareil</h4>' +
      (device === "touchscreen" ? '<h5>Veuillez utiliser votre appareil à l\'horizontale.</h5>' : '') +
      '<p> Le jeu est très simple: tu verras des nuages de points flasher sur ton écran. Tu dois répondre le plus rapidement et le plus précisément possible par rapport à la tendance du nuage de points.</p><ul><li>Est-ce qu\'il <strong>monte ? ' +
      (device === "touchscreen" ? 'Appuie sur la flèche qui monte' :
        (leftIsUp ? 'Appuie sur la touche "S" de ton clavier' : 'Appuie sur la touche "L" de ton clavier')) +
      '</strong>.</li><li> Est-ce qu\'il <strong>descend ? ' +
      (device === "touchscreen" ? 'Appuie sur la flèche qui descend' :
        (leftIsUp ? 'appuie sur la touche "L" de ton clavier' : 'Appuie sur la touche "S" de ton clavier')) +
      '</strong>.</li></ul> <p> Ton score sera basé sur ta précision et sur ta vitesse : tu devras donc être précis <em>et</em> rapide si tu veux obtenir un score meilleur que les autres participants dans le monde ! Quand une série d\'essais sera finie, tu pourras continuer le jeu pour améliorer ton score : qui sait, peut-être tu seras le meilleur lecteur de graphiques du monde !  </p> </section> </div>'
  }
  if (lang === "it") {
    return '<div id="consent"> <section id="consent_body"> <h2>Istruzioni</h2> <h3>Sarai tu il prossimo campione mondiale di graficosità?</h3> <h4>Partecipa al nostro gioco per scoprirlo! 📈</h4><h4>Questo esperimento contiene suoni. Attivare l\'audio sul dispositivo</h4>' +
      (device === "touchscreen" ? '<h5>Si prega di tenere il dispositivo in posizione orizzontale</h5>' : '') +
      '<p> Il gioco è semplicissimo: vedrai dei grafici a punti per un breve istante sul tuo schermo. Dovrai rispondere il più rapidamente e il più precisamente possibile sull\'andamento del grafico</p><ul><li>Il grafico <strong>sale? ' +
      (device === "touchscreen" ? 'Premi la freccia verso l\'alto' :
        (leftIsUp ? 'premere il tasto "S" sulla tastiera' : 'premere il tasto "L" sulla tastiera')) +
      '</strong>.</li><li> Il grafico <strong>scende? ' +
      (device === "touchscreen" ? 'Premi la freccia verso il basso' :
        (leftIsUp ? 'premere il tasto "L" sulla tastiera' : 'premere il tasto "S" sulla tastiera')) +
      '</strong>.</li></ul><p> Il tuo punteggio sarà basato sulla tua precisione e sulla tua velocità: dovrai quindi essere preciso E veloce se vorrai ottenere un punteggio migliore di quello degli altri partecipanti del mondo! Quando un blocco di prove sarà finito, potrai continuare il gioco per migliorare il tuo punteggio: chissà, magari sarai il miglior lettore di grafici del mondo!  </p> </section></div> '
  }
  if (lang === "sp") {
    return '<div id="consent"> <section id="consent_body"> <h2>Instrucciones</h2> <h3>¿Serás el nuevo campeón mundial de gráficosidad? ?</h3> <h4>¡Participa en nuestro juego para averiguarlo! 📈</h4><h4>Esta experiencia contiene sonidos, por favor encienda el audio de su dispositivo</h4>' +
      (device === "touchscreen" ? '<h5>Por favor mantenga el dispositivo en posición horizontal</h5>' : '') +
      '<p> El juego es muy simple: verás nubes de puntos que parpadearán en tu pantalla. Debes responder de la manera más rápida y precisa posible en relación con la tendencia de la nube de puntos.</p><ul><li>¿El gráfico <strong>sube? ' +
      (device === "touchscreen" ? 'Presiona la flecha hacia arriba' :
        (leftIsUp ? 'presiona el botón "S" de tu teclado' : 'presiona el botón "L" en tu teclado')) +
      '</strong>.</li><li> ¿El gráfico <strong>Baja? ' +
      (device === "touchscreen" ? 'Presiona la flecha hacia abajo' :
        (leftIsUp ? 'presiona el botón "L" en tu teclado' : 'presiona el botón "S" de tu teclado')) +
      '</strong>.</li></ul><p> Tu puntuación se basará en tu precisión y velocidad: ¡entonces deberás ser preciso y rápido si quieres obtener una mejor puntuación que los demás participantes del mundo! Cuando una serie de intentos habría terminado, podrás continuar el juego para mejorar tu puntuación: quién sabe, ¡tal vez tu serás el mejor jugador de gráficos del mundo!  </p> </section></div> '
  }
  if (lang === "po") {
    return '<div id="consent"> <section id="consent_body"> <h2>Instruções</h2> <h3>Você vai ser o próximo campeão de graficosidade?</h3> <h4>Participa em nosso jogo para o descubir! 📈</h4><h4>Este ensaio contém sonidos. Ative o som no seu aparelho.</h4>' +
      (device === "touchscreen" ? '<h5>Por favor mantenha o dispositivo numa posição horizontal</h5>' : '') +
      '<p> O jogo è muito simples: vai ver gráficos feitos por pontos aparecer para um instante sobre o seu ecrã. Vai ter que responder o mais rápido e preciso possível sobre a direção de tendência do gráfico.</p><ul><li>O gráfico <strong>sobe? ' +
      (device === "touchscreen" ? 'Prima a seta para cima' :
        (leftIsUp ? 'Pulse a tecla “S” sobre o teclado' : 'Pulse a tecla “L” sobre o teclado')) +
      '</strong>.</li><li> O gráfico <strong>baixa? ' +
      (device === "touchscreen" ? 'Prima a seta para baixo' :
        (leftIsUp ? 'Pulse a tecla “L” sobre o teclado' : 'Pulse a tecla “S” sobre o teclado.')) +
      '</strong>.</li></ul><p> A pontuação de você vai depender da precisão e da velocidade que você tem tido: por isso, você vai ter que ser rápido E preciso para obter uma pontuação melhor dos outros participantes do mundo! Quando um conjunto de provas vai acabar, você vai poder continuar o jogo para melhorar a sua pontuação: quem sabe, você vai chegar a ser o melhor leitor de gráficos do mundo inteiro!  </p> </section></div> '
  }
  if (lang === "zh") {
    return '<div id="consent"><section id="consent_body"><h2>实验说明</h2> <h3>你会成为下一个世界图形学冠军吗？</h3> <h4>玩我们的游戏来试试看！ 📈</h4><h4>这个实验有声音，请打开音量</h4>' +
      (device === "touchscreen" ? '<h5>请横向使用你的手机屏幕</h5>' : '') +
      '<p>游戏非常简单：你会看到有几组小点闪现在你的屏幕上。你的任务是尽快且准确地回答屏幕上整个图像的趋势。</p><ul><li>如果它是<strong>上升</strong>的，' +
      (device === "touchscreen" ? '请按向上键' :
        (leftIsUp ? '请按键盘上的 "S "键' : '请按键盘上的 "L "键')) +
      '</strong>.</li><li>如果它是<strong>下降</strong>的，' +
      (device === "touchscreen" ? '请按向下键' :
        (leftIsUp ? '请按键盘上的 "L "键' : '请按键盘上的 "S "键')) +
      '</strong></li></ul> <p> 你的分数将<strong>同时</strong>基于你的准确度和速度：如果你想获得比世界上其他参与者更高的分数，你必须既准确、又快速。测试结束后，你会被问及是否要继续游戏以提高你的分数：说不定你可能会成为世界上最好的读图能手。</p> </section> </div>'
  }
}

strings_horizontal = {};
strings_horizontal.en = "Please use your device horizontally for the experiment.";
strings_horizontal.fr = "Veuillez utiliser votre appareil horizontalement pour l'expérience.";
strings_horizontal.it = "Per favore, posiziona il dispositivo in orizzontale per l'esperimento.";
strings_horizontal.po = "Por favor, utiliza tu dispositivo horizontalmente para el experimento.";
strings_horizontal.sp = "Por favor, use o seu aparelho em horizontal para o ensaio.";
strings_horizontal.zh = "请把你的移动设备屏幕横过来答题";
