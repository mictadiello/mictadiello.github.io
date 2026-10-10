const translations = {
  en: {
    navAbout: "about",
    navExperience: "experience",
    navPublications: "publications",
    navEmail: "email",
    heroTitle: "I get clinical data flowing and AI working where care happens",
    heroFocus: "Clinical Informatics<br />Healthcare AI<br />Strategy &amp; Advisory",
    aboutTitle: "About",
    aboutLead:
      "I help health systems and health-tech companies adopt AI and digital health technologies, and use clinical and operational data to find bottlenecks and turn analytics into decisions. I advise on AI/ML implementation, interoperability (OMOP, FHIR, HL7), and putting new tools to work in clinical settings.",
    aboutColumbia:
      "At Columbia University Medical Center, I developed an AI teaching assistant for nursing students and architected a hybrid computational infrastructure that supports researchers’ computational work, including work with large language models.",
    aboutPast:
      "In previous lives I was a nurse, a business partner in a home care delivery clinic, and later worked at a university medical center during the Covid pandemic.",
    aboutEducation:
      "I hold a Master of Management in Clinical Informatics from Duke University School of Medicine, with a certificate in Innovation and Entrepreneurship, and a Bachelor of Nursing from the University of Verona.",
    aboutPersonal:
      "I’m Italian, and outside of work I love football, books, and jazz. I’m also a geek for ancient Japanese and Korean architecture, a passion that comes from my technical high school diploma in civil engineering technology and architecture.",
    experienceTitle: "Professional Experience",
    roleHackensack: "Clinical Informatics Engineer",
    roleColumbia: "Senior Informatics Specialist",
    roleOneFact: "Head of Product",
    roleDuke: "Product Design",
    roleVerona: "Registered Nurse",
    descHackensack:
      "Build clinical data pipelines and executive dashboards for healthcare operations, translating complex performance signals into decisions for clinical leaders.",
    descColumbia:
      "Developed clinical AI infrastructure for research teams, including a Clinical Data Navigator, LLM/RAG assistants, GPU workflows, open-source AI, and tools for searching large clinical content collections.",
    descOneFact:
      "Led healthcare cost transparency and claims analytics work, including public dashboards, open-source analysis, and OMOP CDM expansion for price transparency.",
    descDuke:
      "Worked at the intersection of clinical insight, design, entrepreneurship, and health innovation through Duke's Design Health program.",
    descVerona:
      "Began in direct clinical care, building the frontline perspective that now shapes my approach to healthcare technology and AI adoption.",
    publicationsTitle: "Publications",
    scholarLink: "View all publications on Google Scholar",
    stackTitle: "Stack",
    stackInformatics:
      "<strong>Informatics &amp; AI/ML:</strong> NLP/LLM systems, predictive modeling, RAG architecture, clinical analytics, EHR data (Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>Data:</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>Engineering:</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>Cloud/Product:</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  it: {
    navAbout: "profilo",
    navExperience: "esperienza",
    navPublications: "pubblicazioni",
    navEmail: "email",
    heroTitle: "Faccio scorrere i dati clinici e funzionare l'IA dove avviene la cura",
    heroFocus: "Informatica clinica<br />IA sanitaria<br />Strategia e consulenza",
    aboutTitle: "Profilo",
    aboutLead:
      "Aiuto sistemi sanitari e aziende health-tech ad adottare l'IA e le tecnologie di sanità digitale, e a usare i dati clinici e operativi per individuare i colli di bottiglia e trasformare le analisi in decisioni. Offro consulenza su implementazione di IA/ML, interoperabilità (OMOP, FHIR, HL7) e introduzione di nuovi strumenti nei contesti clinici.",
    aboutColumbia:
      "Al Columbia University Medical Center ho sviluppato un assistente didattico basato sull'IA per gli studenti di infermieristica e ho progettato un'infrastruttura computazionale ibrida che supporta il lavoro computazionale dei ricercatori, compreso quello con i modelli linguistici di grandi dimensioni.",
    aboutPast:
      "In vite precedenti sono stato infermiere e socio di un ambulatorio di assistenza domiciliare, e in seguito ho lavorato in un centro medico universitario durante la pandemia di Covid.",
    aboutEducation:
      "Ho conseguito un Master of Management in Clinical Informatics presso la Duke University School of Medicine, con un certificato in Innovation and Entrepreneurship, e una laurea in Infermieristica presso l'Università di Verona.",
    aboutPersonal:
      "Sono italiano e, fuori dal lavoro, amo il calcio, i libri e il jazz. Sono anche un appassionato di architettura antica giapponese e coreana, una passione che nasce dal mio diploma di geometra.",
    experienceTitle: "Esperienza professionale",
    roleHackensack: "Ingegnere di informatica clinica",
    roleColumbia: "Senior Informatics Specialist",
    roleOneFact: "Head of Product",
    roleDuke: "Product design",
    roleVerona: "Infermiere",
    descHackensack:
      "Costruisco pipeline di dati clinici e dashboard executive per le operations sanitarie, trasformando segnali complessi in decisioni per leader clinici.",
    descColumbia:
      "Ho sviluppato infrastrutture di IA clinica per team di ricerca, inclusi Clinical Data Navigator, assistenti LLM/RAG, workflow GPU, open-source AI e strumenti per cercare grandi collezioni di contenuti clinici.",
    descOneFact:
      "Ho guidato lavori su trasparenza dei costi sanitari e claims analytics, inclusi dashboard pubblici, analisi open-source ed espansione OMOP CDM.",
    descDuke:
      "Ho lavorato all'intersezione tra insight clinico, design, imprenditorialità e innovazione sanitaria nel Design Health program di Duke.",
    descVerona:
      "Ho iniziato nell'assistenza clinica diretta, costruendo la prospettiva di prima linea che oggi guida il mio approccio alla tecnologia sanitaria e all'adozione dell'IA.",
    publicationsTitle: "Pubblicazioni",
    scholarLink: "Vedi tutte le pubblicazioni su Google Scholar",
    stackTitle: "Stack",
    stackInformatics:
      "<strong>Informatica e IA/ML:</strong> sistemi NLP/LLM, modellazione predittiva, architettura RAG, analytics clinici, dati EHR (Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>Dati:</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>Engineering:</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>Cloud/Prodotto:</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  fr: {
    navAbout: "profil",
    navExperience: "expérience",
    navPublications: "publications",
    navEmail: "email",
    heroTitle: "Je fais circuler les données cliniques et fonctionner l'IA là où se font les soins",
    heroFocus: "Informatique clinique<br />IA en santé<br />Stratégie et conseil",
    aboutTitle: "Profil",
    aboutLead:
      "J'aide les systèmes de santé et les entreprises de la health tech à adopter l'IA et les technologies de santé numérique, et à utiliser les données cliniques et opérationnelles pour repérer les goulots d'étranglement et transformer l'analyse en décisions. Je conseille sur la mise en œuvre de l'IA/ML, l'interopérabilité (OMOP, FHIR, HL7) et l'intégration de nouveaux outils en milieu clinique.",
    aboutColumbia:
      "Au Columbia University Medical Center, j'ai développé un assistant pédagogique fondé sur l'IA pour les étudiants en soins infirmiers et conçu une infrastructure de calcul hybride qui soutient le travail computationnel des chercheurs, y compris avec de grands modèles de langage.",
    aboutPast:
      "Dans des vies antérieures, j'ai été infirmier et associé d'une clinique de soins à domicile, puis j'ai travaillé dans un centre médical universitaire pendant la pandémie de Covid.",
    aboutEducation:
      "Je suis titulaire d'un Master of Management in Clinical Informatics de la Duke University School of Medicine, avec un certificat en innovation et entrepreneuriat, et d'une licence en sciences infirmières de l'Université de Vérone.",
    aboutPersonal:
      "Je suis italien et, en dehors du travail, j'aime le football, les livres et le jazz. Je suis aussi passionné d'architecture ancienne japonaise et coréenne, une passion qui vient de mon baccalauréat technique en génie civil et architecture.",
    experienceTitle: "Expérience professionnelle",
    roleHackensack: "Ingénieur en informatique clinique",
    roleColumbia: "Spécialiste senior en informatique",
    roleOneFact: "Responsable produit",
    roleDuke: "Design produit",
    roleVerona: "Infirmier diplômé",
    descHackensack:
      "Je construis des pipelines de données cliniques et des tableaux de bord exécutifs pour les opérations de santé, afin de transformer des signaux complexes en décisions.",
    descColumbia:
      "J'ai développé une infrastructure d'IA clinique pour des équipes de recherche, avec Clinical Data Navigator, assistants LLM/RAG, workflows GPU, open-source AI et outils de recherche dans de grands corpus cliniques.",
    descOneFact:
      "J'ai dirigé des travaux de transparence des coûts de santé et d'analyse de claims, avec tableaux de bord publics, analyses open-source et extension OMOP CDM.",
    descDuke:
      "J'ai travaillé à l'intersection de l'expertise clinique, du design, de l'entrepreneuriat et de l'innovation en santé dans le programme Design Health de Duke.",
    descVerona:
      "J'ai commencé dans les soins cliniques directs, une perspective de terrain qui guide aujourd'hui mon approche de la technologie et de l'IA en santé.",
    publicationsTitle: "Publications",
    scholarLink: "Voir toutes les publications sur Google Scholar",
    stackTitle: "Stack",
    stackInformatics:
      "<strong>Informatique &amp; IA/ML :</strong> systèmes NLP/LLM, modélisation prédictive, architecture RAG, analytique clinique, données EHR (Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>Données :</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>Ingénierie :</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>Cloud/Produit :</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  de: {
    navAbout: "profil",
    navExperience: "erfahrung",
    navPublications: "publikationen",
    navEmail: "email",
    heroTitle: "Ich bringe klinische Daten in Fluss und KI dort zum Laufen, wo Versorgung stattfindet",
    heroFocus: "Klinische Informatik<br />Healthcare AI<br />Strategie &amp; Beratung",
    aboutTitle: "Profil",
    aboutLead:
      "Ich unterstütze Gesundheitssysteme und Health-Tech-Unternehmen dabei, KI und digitale Gesundheitstechnologien einzuführen und klinische und operative Daten zu nutzen, um Engpässe zu finden und Analysen in Entscheidungen zu übersetzen. Ich berate zur Implementierung von KI/ML, zur Interoperabilität (OMOP, FHIR, HL7) und zum Einsatz neuer Werkzeuge im klinischen Alltag.",
    aboutColumbia:
      "Am Columbia University Medical Center habe ich einen KI-Lehrassistenten für Pflegestudierende entwickelt und eine hybride Recheninfrastruktur konzipiert, die die rechenintensive Arbeit von Forschenden unterstützt, auch mit großen Sprachmodellen.",
    aboutPast:
      "In früheren Leben war ich Krankenpfleger und Geschäftspartner einer Klinik für häusliche Pflege und arbeitete später während der Covid-Pandemie an einem Universitätsklinikum.",
    aboutEducation:
      "Ich habe einen Master of Management in Clinical Informatics der Duke University School of Medicine mit einem Zertifikat in Innovation and Entrepreneurship sowie einen Bachelor in Pflege der Universität Verona.",
    aboutPersonal:
      "Ich bin Italiener und liebe außerhalb der Arbeit Fußball, Bücher und Jazz. Außerdem begeistere ich mich für alte japanische und koreanische Architektur – eine Leidenschaft, die aus meinem Abschluss an einer technischen Oberschule für Bautechnik und Architektur stammt.",
    experienceTitle: "Berufserfahrung",
    roleHackensack: "Clinical Informatics Engineer",
    roleColumbia: "Senior Informatics Specialist",
    roleOneFact: "Head of Product",
    roleDuke: "Produktdesign",
    roleVerona: "Examinierter Krankenpfleger",
    descHackensack:
      "Ich entwickle klinische Datenpipelines und Executive Dashboards für Healthcare Operations und übersetze komplexe Leistungssignale in Entscheidungen für klinische Führungskräfte.",
    descColumbia:
      "Ich entwickelte klinische KI-Infrastruktur für Forschungsteams, darunter Clinical Data Navigator, LLM/RAG-Assistenten, GPU-Workflows, Open-Source-AI und Werkzeuge zur Suche in großen klinischen Inhaltsbeständen.",
    descOneFact:
      "Ich leitete Arbeiten zu Kostentransparenz und Claims Analytics im Gesundheitswesen, darunter öffentliche Dashboards, Open-Source-Analysen und OMOP-CDM-Erweiterung.",
    descDuke:
      "Ich arbeitete im Duke Design Health program an der Schnittstelle von klinischer Perspektive, Design, Unternehmertum und Gesundheitsinnovation.",
    descVerona:
      "Ich begann in der direkten klinischen Versorgung; diese Frontline-Perspektive prägt heute meinen Ansatz für Gesundheitstechnologie und KI-Adoption.",
    publicationsTitle: "Publikationen",
    scholarLink: "Alle Publikationen auf Google Scholar ansehen",
    stackTitle: "Stack",
    stackInformatics:
      "<strong>Informatik &amp; AI/ML:</strong> NLP/LLM-Systeme, prädiktive Modellierung, RAG-Architektur, klinische Analytik, EHR-Daten (Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>Daten:</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>Engineering:</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>Cloud/Produkt:</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  es: {
    navAbout: "perfil",
    navExperience: "experiencia",
    navPublications: "publicaciones",
    navEmail: "email",
    heroTitle: "Hago que los datos clínicos fluyan y que la IA funcione donde ocurre la atención",
    heroFocus: "Informática clínica<br />IA en salud<br />Estrategia y asesoría",
    aboutTitle: "Perfil",
    aboutLead:
      "Ayudo a sistemas de salud y empresas de tecnología sanitaria a adoptar la IA y las tecnologías de salud digital, y a usar datos clínicos y operativos para detectar cuellos de botella y convertir la analítica en decisiones. Asesoro en la implementación de IA/ML, la interoperabilidad (OMOP, FHIR, HL7) y la puesta en marcha de nuevas herramientas en entornos clínicos.",
    aboutColumbia:
      "En el Columbia University Medical Center desarrollé un asistente docente basado en IA para estudiantes de enfermería y diseñé una infraestructura computacional híbrida que apoya el trabajo computacional de los investigadores, incluido el trabajo con grandes modelos de lenguaje.",
    aboutPast:
      "En vidas anteriores fui enfermero y socio de una clínica de atención domiciliaria, y más tarde trabajé en un centro médico universitario durante la pandemia de Covid.",
    aboutEducation:
      "Tengo un Master of Management in Clinical Informatics de Duke University School of Medicine, con un certificado en Innovación y Emprendimiento, y una licenciatura en Enfermería de la Universidad de Verona.",
    aboutPersonal:
      "Soy italiano y, fuera del trabajo, me encantan el fútbol, los libros y el jazz. También soy un apasionado de la arquitectura antigua japonesa y coreana, una pasión que viene de mi bachillerato técnico en construcción civil y arquitectura.",
    experienceTitle: "Experiencia profesional",
    roleHackensack: "Ingeniero de informática clínica",
    roleColumbia: "Especialista senior en informática",
    roleOneFact: "Responsable de producto",
    roleDuke: "Diseño de producto",
    roleVerona: "Enfermero registrado",
    descHackensack:
      "Construyo pipelines de datos clínicos y dashboards ejecutivos para operaciones sanitarias, traduciendo señales complejas en decisiones para líderes clínicos.",
    descColumbia:
      "Desarrollé infraestructura de IA clínica para equipos de investigación, incluidos Clinical Data Navigator, asistentes LLM/RAG, flujos GPU, open-source AI y herramientas para buscar grandes colecciones clínicas.",
    descOneFact:
      "Lideré trabajos de transparencia de costos sanitarios y analítica de claims, incluidos dashboards públicos, análisis open-source y expansión de OMOP CDM.",
    descDuke:
      "Trabajé en la intersección de insight clínico, diseño, emprendimiento e innovación en salud dentro del Design Health program de Duke.",
    descVerona:
      "Comencé en atención clínica directa, construyendo la perspectiva de primera línea que hoy guía mi enfoque de tecnología sanitaria e IA.",
    publicationsTitle: "Publicaciones",
    scholarLink: "Ver todas las publicaciones en Google Scholar",
    stackTitle: "Stack",
    stackInformatics:
      "<strong>Informática &amp; AI/ML:</strong> sistemas NLP/LLM, modelado predictivo, arquitectura RAG, analítica clínica, datos EHR (Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>Datos:</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>Ingeniería:</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>Cloud/Producto:</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  ko: {
    navAbout: "소개",
    navExperience: "경력",
    navPublications: "출판물",
    navEmail: "이메일",
    heroTitle: "진료가 이루어지는 곳에서 임상 데이터가 흐르고 AI가 작동하도록 만듭니다",
    heroFocus: "임상 정보학<br />헬스케어 AI<br />전략 및 자문",
    aboutTitle: "소개",
    aboutLead:
      "저는 의료 시스템과 헬스테크 기업이 AI와 디지털 헬스 기술을 도입하고, 임상 및 운영 데이터를 활용해 병목을 찾아 분석을 의사결정으로 연결하도록 돕습니다. AI/ML 도입, 상호운용성(OMOP, FHIR, HL7), 그리고 새로운 도구를 임상 현장에 적용하는 일에 대해 자문합니다.",
    aboutColumbia:
      "Columbia University Medical Center에서 간호학생을 위한 AI 교육 보조 도구를 개발했고, 대규모 언어 모델 작업을 포함해 연구자들의 계산 작업을 지원하는 하이브리드 컴퓨팅 인프라를 설계했습니다.",
    aboutPast:
      "이전에는 간호사였고 가정 간호 클리닉의 사업 파트너였으며, 이후 코로나19 팬데믹 기간에 대학 의료센터에서 일했습니다.",
    aboutEducation:
      "Duke University School of Medicine에서 혁신 및 창업 수료증과 함께 Clinical Informatics 경영학 석사(Master of Management) 학위를, University of Verona에서 간호학 학사 학위를 받았습니다.",
    aboutPersonal:
      "저는 이탈리아인이며, 일 밖에서는 축구, 책, 재즈를 좋아합니다. 또한 고대 일본과 한국 건축에 푹 빠져 있는데, 이 열정은 토목·건축 기술을 공부한 기술고등학교 시절에서 비롯되었습니다.",
    experienceTitle: "전문 경력",
    roleHackensack: "임상 정보학 엔지니어",
    roleColumbia: "시니어 정보학 스페셜리스트",
    roleOneFact: "제품 총괄",
    roleDuke: "제품 디자인",
    roleVerona: "등록 간호사",
    descHackensack:
      "의료 운영을 위한 임상 데이터 파이프라인과 임원용 대시보드를 구축하며, 복잡한 성과 신호를 임상 리더의 의사결정으로 연결합니다.",
    descColumbia:
      "연구팀을 위한 임상 AI 인프라를 개발했으며, Clinical Data Navigator, LLM/RAG 어시스턴트, GPU 워크플로, 오픈소스 AI, 대규모 임상 콘텐츠 검색 도구를 포함합니다.",
    descOneFact:
      "의료 비용 투명성과 청구 데이터 분석을 주도했으며, 공개 대시보드, 오픈소스 분석, OMOP CDM 확장을 포함합니다.",
    descDuke:
      "Duke Design Health program에서 임상 인사이트, 디자인, 창업, 헬스 혁신의 교차점에서 일했습니다.",
    descVerona:
      "직접 임상 진료에서 시작했으며, 그 현장 관점이 지금의 헬스케어 기술과 AI 도입 접근법을 형성합니다.",
    publicationsTitle: "출판물",
    scholarLink: "Google Scholar에서 모든 출판물 보기",
    stackTitle: "스택",
    stackInformatics:
      "<strong>정보학 &amp; AI/ML:</strong> NLP/LLM 시스템, 예측 모델링, RAG 아키텍처, 임상 분석, EHR 데이터(Epic Clarity), FHIR/HL7, OMOP CDM.",
    stackData:
      "<strong>데이터:</strong> SQL, MySQL, BigQuery, Dataform, Dataplex, Looker Studio.",
    stackEngineering:
      "<strong>엔지니어링:</strong> Python, PyTorch, TensorFlow, Hugging Face, LangChain, Docker, GitHub.",
    stackCloud: "<strong>클라우드/제품:</strong> AWS, Azure, Google Cloud, Jira, Figma.",
  },
  zh: {
    navAbout: "简介",
    navExperience: "经历",
    navPublications: "出版物",
    navEmail: "邮箱",
    heroTitle: "我让临床数据在医疗发生的地方顺畅流动，让 AI 真正发挥作用",
    heroFocus: "临床信息学<br />医疗 AI<br />战略与咨询",
    aboutTitle: "简介",
    aboutLead:
      "我帮助医疗系统和医疗科技公司采用 AI 与数字健康技术，并利用临床和运营数据找出瓶颈，将分析转化为决策。我就 AI/ML 落地、互操作性（OMOP、FHIR、HL7）以及在临床环境中应用新工具提供咨询。",
    aboutColumbia:
      "在 Columbia University Medical Center，我为护理学生开发了一个 AI 教学助手，并设计了一套混合计算基础设施，支持研究人员的计算工作，包括大语言模型相关工作。",
    aboutPast:
      "在过去的经历中，我曾是一名护士，也曾是一家居家护理诊所的合伙人，后来在新冠疫情期间于一家大学医学中心工作。",
    aboutEducation:
      "我拥有 Duke University School of Medicine 的临床信息学管理硕士学位（Master of Management in Clinical Informatics）及创新与创业证书，并拥有 University of Verona 的护理学学士学位。",
    aboutPersonal:
      "我是意大利人，工作之余热爱足球、读书和爵士乐。我还痴迷于古代日本和韩国建筑，这份热情源自我在技术高中学习土木工程技术与建筑的经历。",
    experienceTitle: "专业经历",
    roleHackensack: "临床信息学工程师",
    roleColumbia: "高级信息学专家",
    roleOneFact: "产品负责人",
    roleDuke: "产品设计",
    roleVerona: "注册护士",
    descHackensack:
      "构建面向医疗运营的临床数据管道和高管仪表盘，将复杂的绩效信号转化为临床领导者可用的决策依据。",
    descColumbia:
      "为研究团队开发临床 AI 基础设施，包括 Clinical Data Navigator、LLM/RAG 助手、GPU 工作流、开源 AI，以及用于检索大型临床内容集合的工具。",
    descOneFact:
      "主导医疗成本透明度和理赔分析工作，包括公共仪表盘、开源分析，以及用于价格透明度的 OMOP CDM 扩展。",
    descDuke:
      "在 Duke Design Health program 中，围绕临床洞察、设计、创业和医疗创新的交叉领域开展工作。",
    descVerona:
      "从直接临床护理起步，这种一线视角如今塑造了我对医疗技术和 AI 采用的理解。",
    publicationsTitle: "出版物",
    scholarLink: "在 Google Scholar 查看全部出版物",
    stackTitle: "技术栈",
    stackInformatics:
      "<strong>信息学 &amp; AI/ML:</strong> NLP/LLM 系统、预测建模、RAG 架构、临床分析、EHR 数据 (Epic Clarity)、FHIR/HL7、OMOP CDM。",
    stackData:
      "<strong>数据:</strong> SQL、MySQL、BigQuery、Dataform、Dataplex、Looker Studio。",
    stackEngineering:
      "<strong>工程:</strong> Python、PyTorch、TensorFlow、Hugging Face、LangChain、Docker、GitHub。",
    stackCloud: "<strong>云/产品:</strong> AWS、Azure、Google Cloud、Jira、Figma。",
  },
  ja: {
    navAbout: "紹介",
    navExperience: "経歴",
    navPublications: "出版物",
    navEmail: "メール",
    heroTitle: "医療の現場で臨床データを流れるようにし、AIを機能させます",
    heroFocus: "臨床情報学<br />ヘルスケアAI<br />戦略とアドバイザリー",
    aboutTitle: "紹介",
    aboutLead:
      "私は、医療機関やヘルステック企業がAIやデジタルヘルス技術を導入し、臨床・運営データを活用してボトルネックを見つけ、分析を意思決定につなげられるよう支援しています。AI/MLの実装、相互運用性（OMOP、FHIR、HL7）、そして新しいツールを臨床現場で活用することについて助言しています。",
    aboutColumbia:
      "Columbia University Medical Centerでは、看護学生向けのAI教育アシスタントを開発し、大規模言語モデルを用いた作業を含む研究者の計算業務を支えるハイブリッドな計算インフラを設計しました。",
    aboutPast:
      "以前は看護師として働き、在宅ケアクリニックの共同経営者を務め、その後コロナ禍の大学医療センターで勤務しました。",
    aboutEducation:
      "Duke University School of MedicineでClinical InformaticsのMaster of Management（イノベーションと起業の修了証付き）を、University of Veronaで看護学の学士号を取得しています。",
    aboutPersonal:
      "私はイタリア出身で、仕事以外ではサッカー、読書、ジャズが大好きです。また、日本と韓国の古建築にも夢中で、その情熱は土木・建築技術を学んだ技術高校に由来しています。",
    experienceTitle: "職務経歴",
    roleHackensack: "臨床情報学エンジニア",
    roleColumbia: "シニア情報学スペシャリスト",
    roleOneFact: "プロダクト責任者",
    roleDuke: "プロダクトデザイン",
    roleVerona: "登録看護師",
    descHackensack:
      "医療オペレーション向けの臨床データパイプラインと経営層向けダッシュボードを構築し、複雑な指標を臨床リーダーの意思決定につなげています。",
    descColumbia:
      "研究チーム向けに、Clinical Data Navigator、LLM/RAGアシスタント、GPUワークフロー、オープンソースAI、大規模な臨床コンテンツ検索ツールを含む臨床AIインフラを開発しました。",
    descOneFact:
      "医療費透明性とclaims analyticsの取り組みを主導し、公開ダッシュボード、オープンソース分析、OMOP CDM拡張に携わりました。",
    descDuke:
      "DukeのDesign Health programで、臨床的洞察、デザイン、起業、ヘルスイノベーションの交差領域に取り組みました。",
    descVerona:
      "直接的な臨床ケアからキャリアを始め、その現場視点が現在の医療技術とAI導入へのアプローチを形作っています。",
    publicationsTitle: "出版物",
    scholarLink: "Google Scholarですべての出版物を見る",
    stackTitle: "スタック",
    stackInformatics:
      "<strong>情報学 &amp; AI/ML:</strong> NLP/LLMシステム、予測モデリング、RAGアーキテクチャ、臨床分析、EHRデータ (Epic Clarity)、FHIR/HL7、OMOP CDM。",
    stackData:
      "<strong>データ:</strong> SQL、MySQL、BigQuery、Dataform、Dataplex、Looker Studio。",
    stackEngineering:
      "<strong>エンジニアリング:</strong> Python、PyTorch、TensorFlow、Hugging Face、LangChain、Docker、GitHub。",
    stackCloud: "<strong>クラウド/プロダクト:</strong> AWS、Azure、Google Cloud、Jira、Figma。",
  }
};

const html = document.documentElement;
const textNodes = document.querySelectorAll("[data-i18n]");
const htmlNodes = document.querySelectorAll("[data-i18n-html]");
const languageSelect = document.querySelector("#language-select");
const languageCodes = {
  en: "en",
  it: "it",
  fr: "fr",
  de: "de",
  es: "es",
  ko: "ko",
  zh: "zh-Hans",
  ja: "ja"
};

function setLanguage(language) {
  const activeLanguage = translations[language] ? language : "en";
  const dictionary = translations[activeLanguage];
  html.lang = languageCodes[activeLanguage] || "en";

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  htmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  languageSelect.value = activeLanguage;

  try {
    localStorage.setItem("siteLanguage", activeLanguage);
  } catch {
    // Storage blocked (private mode, cookies off): language just isn't remembered.
  }
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));

let savedLanguage = null;
try {
  savedLanguage = localStorage.getItem("siteLanguage");
} catch {}
setLanguage(savedLanguage || "en");

// Footer year is baked in at build time; keep it current between deploys.
document.querySelector("#year").textContent = new Date().getFullYear();
