// TecnoServicios Globales S.A. - ITIL 4 & System Dynamics Data

export const SYSTEM_DATA = {
  organization: {
    name: "TecnoServicios Globales S.A.",
    subtitle: "Dinámica de Sistemas ITIL 4",
    statusBadge: "Simulación Activa: 7 Principios",
    currentUser: {
      name: "Ing. Roberto M.",
      role: "Director ITSM",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
    }
  },

  // SCREEN 1: Contexto y Diagnóstico (Silos)
  silosView: {
    tag: "AUDITORÍA DE RESILIENCIA OPERATIVA - CASO CORE",
    title: "Crisis Operativa: TecnoServicios Globales S.A.",
    description: "Diagnóstico inicial de fragmentación operativa, fricción entre departamentos y pérdida sostenida de valor al negocio antes de la adopción del marco ITIL 4. La desarticulación sistémica destruye la confianza del cliente y agota el talento humano.",
    metadata: [
      { label: "PERIODO EVALUADO", value: "Q1-Q2 PRE-ITIL" },
      { label: "MÉTODO", value: "ANÁLISIS DE DINÁMICA DE SISTEMAS" },
      { label: "ESTADO", value: "INSOSTENIBLE", isAlert: true }
    ],
    kpis: [
      {
        id: "sla",
        title: "CUMPLIMIENTO GLOBAL",
        value: "SLA al 54.2%",
        badge: "Crítico",
        badgeType: "critical",
        barPercent: 54.2,
        barColor: "var(--color-critical)"
      },
      {
        id: "risk",
        title: "RIESGO DE CAÍDA",
        value: "Riesgo Alto (78%)",
        badge: "Inminente",
        badgeType: "danger",
        barPercent: 78,
        barColor: "var(--color-danger)"
      },
      {
        id: "friction",
        title: "FRICCIÓN INTERNA",
        value: "Fricción Severa",
        badge: "5 Silos",
        badgeType: "warning",
        barPercent: 90,
        barColor: "var(--color-warning)"
      }
    ],
    silos: [
      {
        id: "dev",
        code: "SILO #01",
        title: "Desarrollo (Dev)",
        badge: "Aislado",
        badgeColor: "#f43f5e",
        image: "/images/silo_dev.jpg",
        overlayFocus: 'Foco: "Velocidad Cruda"',
        overlayMetric: "Deploy Risk: 92%",
        metrics: [
          { value: "42%", label: "Deploy Failures" },
          { value: "45 d", label: "Lead Time" },
          { value: "38%", label: "Retrabajo" }
        ],
        symptoms: [
          "Lanzamientos masivos a producción sin validar capacidad física de red ni base de datos.",
          "Nula retroalimentación con operaciones; desprecio por las alertas de estabilidad.",
          "Enfoque exclusivo en committed story points ignorando requerimientos no funcionales."
        ],
        quote: "Nosotros cumplimos con entregar el código a tiempo; si revienta en producción es culpa de Infraestructura que no actualiza sus servidores.",
        author: "LEAD DEV, SPRINT REVIEW"
      },
      {
        id: "ops",
        code: "SILO #02",
        title: "Infraestructura (Ops)",
        badge: "Defensivo",
        badgeColor: "#ea580c",
        image: "/images/silo_ops.jpg",
        overlayFocus: "Foco: Congelar Todo",
        overlayMetric: "MTTR Prom.: 8.6 horas",
        metrics: [
          { value: "18/mes", label: "Caídas Sev 1" },
          { value: "6.4 h", label: "MTTR Prom." },
          { value: "35%", label: "CPU Ciego" }
        ],
        symptoms: [
          "Bloqueo burocrático de releases; freeze prolongado sin justificación de valor comercial.",
          "Falta de observabilidad holística: logs fragmentados y herramientas no integradas.",
          "Acumulación reactiva de parches nocturnos sin trazabilidad en CMDB confiable."
        ],
        quote: "El código de Desarrollo es pésimo e inestable; nuestro único deber es salvaguardar los servidores rechazando cualquier cambio que pidan.",
        author: "SYSADMIN SENIOR, POST-MORTEM"
      },
      {
        id: "helpdesk",
        code: "SILO #03",
        title: "Mesa de Ayuda",
        badge: "Colapso",
        badgeColor: "#dc2626",
        image: "/images/silo_helpdesk.jpg",
        overlayFocus: "Foco: Sobrevivir al Teléfono",
        overlayMetric: "CSAT: 2.1 / 5.0",
        metrics: [
          { value: "1,280", label: "Tickets / día" },
          { value: "2.1/5", label: "Satisfacción" },
          { value: "44%", label: "Reaperturas" }
        ],
        symptoms: [
          "Desconocimiento absoluto de los despliegues de Dev; enterados vía reclamos de clientes.",
          "Artículos de base de conocimiento desactualizados hace más de 14 meses.",
          "Rotación del 60% del personal de primera línea por estrés e impotencia operativa."
        ],
        quote: "Nadie nos avisa de los cambios en producción; nos enteramos de los desastres cuando los clientes enfurecidos colapsan las líneas telefónicas.",
        author: "COORDINADORA SERVICE DESK"
      }
    ],
    causesHeader: {
      tag: "MATRIZ DE CAUSA RAÍZ SISTÉMICA",
      title: "Causas de Baja Calidad en TI",
      subtitle: "Evaluación diagnóstica ponderada de las seis fallas estructurales que alimentan la parálisis del servicio en TecnoServicios Globales S.A.",
      globalIndex: "88%",
      globalTitle: "SEVERIDAD GLOBAL",
      globalStatus: "Degradación Crítica",
      globalDetail: "6 vectores activos sin contención ITIL"
    },
    causes: [
      {
        id: "01",
        num: "01",
        severityBadge: "Severidad: 95% • Crítica",
        badgeType: "critical",
        title: "Falta de alineación al negocio",
        description: "Proyectos tecnológicos concebidos en una burbuja técnica, totalmente desconectados de los flujos de ingresos y de la experiencia de cliente de la compañía.",
        systemicEffect: "Desperdicio presupuestario masivo en características de software que no generan valor de cambio ni retención.",
        indicatorLabel: "Impacto en Flujo de valor",
        indicatorScore: "95/100",
        percent: 95,
        color: "#dc2626"
      },
      {
        id: "02",
        num: "02",
        severityBadge: "Severidad: 88% • Muy Alta",
        badgeType: "danger",
        title: "Ausencia de KPIs y monitoreo holístico",
        description: "Métricas vanidosas atomizadas por departamento (ej. tickets cerrados vs. líneas de código) sin visibilidad integral de punta a punta del Servicio de Negocio.",
        systemicEffect: "Diagnósticos contradictorios donde cada área declara \"su OK\" mientras el portal del cliente está caído.",
        indicatorLabel: "Impacto en Observabilidad",
        indicatorScore: "88/100",
        percent: 88,
        color: "#ea580c"
      },
      {
        id: "03",
        num: "03",
        severityBadge: "Severidad: 92% • Crítica",
        badgeType: "critical",
        title: "Mala gestión del cambio y control de versiones",
        description: "Cambios de configuración aplicados directamente en servidores productivos sin comité de cambio (CAB), evaluación de riesgo ni planes probados de rollback.",
        systemicEffect: "Fallos e incidentes mayores recurrentes que generan incendios permanentes e interrupciones del SLA.",
        indicatorLabel: "Riesgo en Producción",
        indicatorScore: "92/100",
        percent: 92,
        color: "#dc2626"
      },
      {
        id: "04",
        num: "04",
        severityBadge: "Severidad: 85% • Alta",
        badgeType: "purple",
        title: "Comunicación deficiente y desconfianza",
        description: "Inexistencia de ceremonias conjuntas. Relaciones interdepartamentales basadas en correos acusatorios, defensas pasivo-agresivas y desconfianza endémica.",
        systemicEffect: "Retención de información clave, hostilidad laboral y parálisis en la resolución conjunta de problemas.",
        indicatorLabel: "Fricción Cultural",
        indicatorScore: "85/100",
        percent: 85,
        color: "#8b5cf6"
      },
      {
        id: "05",
        num: "05",
        severityBadge: "Severidad: 78% • Alta",
        badgeType: "purple",
        title: "Escasa capacitación en ITIL y marcos ágiles",
        description: "Los líderes y colaboradores operan mediante intuición e inercias heredadas de TI tradicional, desconociendo el Sistema de Valor del Servicio (SVS) de ITIL 4.",
        systemicEffect: "Ausencia de un lenguaje común de gobernanza y resistencia ciega a adoptar prácticas de co-creación.",
        indicatorLabel: "Brecha de Competencias",
        indicatorScore: "78/100",
        percent: 78,
        color: "#8b5cf6"
      },
      {
        id: "06",
        num: "06",
        severityBadge: "Severidad: 82% • Alta",
        badgeType: "purple",
        title: "Documentación y conocimiento fragmentado",
        description: "Procedimientos clave almacenados en notas personales o wikis desactualizadas. Dependencia absoluta de \"héroes individuales\" no escalables para apagar incendios.",
        systemicEffect: "Si un especialista clave se enferma o renuncia, el servicio crítico queda inoperante durante horas.",
        indicatorLabel: "Riesgo Operativo por Héroes",
        indicatorScore: "82/100",
        percent: 82,
        color: "#6366f1"
      }
    ],
    conclusionBanner: {
      tag: "CONCLUSIÓN DEL DIAGNÓSTICO CAUSAL",
      title: "La fragmentación en silos genera un bucle de compensación destructivo.",
      description: "Intentar resolver este colapso con más controles locales o contratando más operadores sólo agrava la entropía. Es imperativo migrar a un Arquetipo Sistémico unificado bajo los 7 Principios Rectores de ITIL 4 para reestablecer el flujo de co-creación de valor.",
      actionText: "Ir al Lienzo del Arquetipo Sistémico",
      targetTab: "archetype"
    }
  },

  // SCREEN 2: Arquetipo Sistémico
  archetypeView: {
    breadcrumbs: "TECNOSERVICIOS GLOBALES S.A. / ITIL 4 GUIDING PRINCIPLES",
    badges: [
      { text: "ARQUETIPO DINÁMICO R1 - Bucle Refuerzo: Co-creación de Valor", type: "purple" },
      { text: "Modelo Causal: Vensim/Stella CLD v4.2", type: "neutral" },
      { text: "Convergencia: Estable (+98.2%)", type: "mint" }
    ],
    title: "Lienzo de Dinámica de Sistemas: Arquetipo de Refuerzo de los 7 Principios",
    subtitle: "Representación interactiva de variables de estado, flujos causales y bucles de realimentación positiva en TecnoServicios Globales S.A.",
    legend: [
      { label: "Variable de Estado / Acumulación (Stock)", icon: "box", color: "#6366f1" },
      { label: "Principios ITIL 4 (Palancas Causal Directas)", icon: "circle", color: "#7c3aed" },
      { label: "Polaridad Positiva (+) Refuerzo Causal", icon: "plus", color: "#10b981" }
    ],
    sublegend: "↺ Bucle Virtuoso R1 (Crecimiento Compuesto) • Clic en cualquier principio para aislar su dinámica",
    stockCentral: {
      tag: "STOCK CENTRAL",
      title: "Calidad del Servicio y Entrega de Valor",
      score: "94.6",
      max: "100",
      status: "✔ Bucle R1: Virtuoso"
    },
    principles: [
      {
        id: "p1",
        num: 1,
        code: "P1 • Norte",
        title: "1. Centrarse en el valor",
        description: "Mapeo continuo de la experiencia del cliente y alineación con los resultados estratégicos del negocio.",
        metricLabel: "Tracción",
        metricValue: "+28% YoY",
        angle: 270, // Top
        color: "#6366f1",
        iconName: "Target"
      },
      {
        id: "p2",
        num: 2,
        code: "P2 • NE",
        title: "2. Comenzar donde se está",
        description: "Línea base objetiva mediante telemetría en tiempo real sin reiniciar sistemas funcionales.",
        metricLabel: "Reutilización",
        metricValue: "82% Activos",
        angle: 320, // Top Right
        color: "#8b5cf6",
        iconName: "Search"
      },
      {
        id: "p3",
        num: 3,
        code: "P3 • SE",
        title: "3. Progresar iterativamente",
        description: "Sprints de entrega quincenales validados con usuarios finales reduciendo el riesgo de despliegues.",
        metricLabel: "Ciclo Ágil",
        metricValue: "2 semanas",
        angle: 40, // Bottom Right
        color: "#10b981",
        iconName: "RefreshCw"
      },
      {
        id: "p4",
        num: 4,
        code: "P4 • Sur",
        title: "4. Colaborar y visibilizar",
        description: "Desarticulación activa de silos entre Desarrollo, Operaciones y Soporte con tableros Kanban comunes.",
        metricLabel: "Transparencia",
        metricValue: "96% Visibilidad",
        angle: 90, // Bottom
        color: "#3b82f6",
        iconName: "Users"
      },
      {
        id: "p5",
        num: 5,
        code: "P5 • SO",
        title: "5. Trabajar holísticamente",
        description: "Coordinación orquestada de las 4 Dimensiones ITIL: Personas, Información, Socios y Flujos de Valor.",
        metricLabel: "Cobertura 4D",
        metricValue: "100% SVS",
        angle: 140, // Bottom Left
        color: "#7c3aed",
        iconName: "Layers"
      },
      {
        id: "p6",
        num: 6,
        code: "P6 • Oeste",
        title: "6. Simple y práctico",
        description: "Eliminación de burocracia sin valor añadido, aprobaciones superfluas y pasos redundantes en procesos.",
        metricLabel: "Pasos eliminados",
        metricValue: "34 pasos",
        angle: 190, // Left
        color: "#059669",
        iconName: "CheckSquare"
      },
      {
        id: "p7",
        num: 7,
        code: "P7 • Noroeste",
        title: "7. Optimizar y automatizar",
        description: "Estandarización y orquestación robótica de flujos operativos de soporte e incidentes frecuentes.",
        metricLabel: "Automatizado",
        metricValue: "71.4% Tareas",
        angle: 230, // Top Left
        color: "#6366f1",
        iconName: "Cpu"
      }
    ],
    inspector: {
      tag: "INSPECTOR CAUSAL",
      badge: "Activo",
      title: "Bucle de Refuerzo R1",
      description: "Cada principio implementado realimenta positivamente el valor general, eliminando fricción interna y acelerando la satisfacción de clientes.",
      polarity: "Positiva [+] (R1)"
    },
    telemetry: {
      tag: "TELEMETRÍA DE LA SIMULACIÓN",
      title: "Efectos Sistémicos Acumulados de TecnoServicios Globales S.A.",
      actionText: "Ver en Matriz Causa-Efecto (4D)",
      targetTab: "matrix",
      cards: [
        {
          id: "force",
          title: "FUERZA DEL BUCLE SISTÉMICO",
          value: "+48%",
          subtext: "vs mes anterior",
          description: "Aceleración neta de valor al conectar la automatización con la retroalimentación continua.",
          trend: "up",
          type: "sparkline"
        },
        {
          id: "cycle",
          title: "TIEMPO DE CICLO PROMEDIO",
          value: "4.2 días",
          subtext: "antes 45 días",
          description: "Compresión drástica de latencias por eliminación de burocracia y aprobaciones manuales.",
          trend: "down-good",
          type: "progress"
        },
        {
          id: "silos_decay",
          title: "ÍNDICE DE SILOS ORGANIZACIONALES",
          value: "-76%",
          subtext: "declive sostenido",
          description: "Traspaso libre de incidentes entre Dev y Ops tras unificar mesas de ayuda bajo ITIL 4.",
          trend: "down-good",
          type: "decay"
        },
        {
          id: "svs_health",
          title: "SALUD DEL SISTEMA DE VALOR (SVS)",
          value: "99.1%",
          subtext: "Óptimo",
          description: "Equilibrio causal pleno sin cuellos de botella identificados en los 7 principios rectores.",
          trend: "up",
          type: "bar-cluster"
        }
      ],
      conclusion: "El modelado confirma que la automatización (P7) pierde eficacia si no se aplica primero la simplificación (P6) y la empatía con el valor real (P1)."
    },
    strategicAlignment: {
      tag: "ALINEACIÓN ESTRATÉGICA",
      title: "Del Silo Operativo a la Dinámica Virtuosa",
      roomTitle: "Sala de Control de Dinámica SVS • TecnoServicios Globales",
      roomBadge: "Gobernanza Activa",
      description: "Antes de aplicar la dinámica de sistemas con ITIL 4, cada departamento actuaba como un silo autosuficiente. Al formalizar el diagrama de causa-efecto, los equipos comprendieron que resolver tickets con prisa (sin analizar causa raíz) incrementaba la deuda técnica acumulada, mermando la velocidad de despliegue y degradando la co-creación de valor.",
      previousState: {
        title: "Estado Previo (Silos)",
        desc: "45 días de entrega, duplicación de esfuerzo y 68% retrabajo."
      },
      activeState: {
        title: "Estado con R1 Activo",
        desc: "4.2 días de ciclo, retroalimentación temprana y cero silos."
      }
    }
  },

  // SCREEN 3: Matriz Causa-Efecto y 4D
  matrixView: {
    badge: "MARCO DE GOBERNANZA ITIL 4",
    subBadge: "SVS v3.4 • TecnoServicios Globales",
    title: "Matriz Causa-Efecto y Gobernanza en las 4 Dimensiones de ITIL 4",
    description: "Desglose sistemático de las intervenciones causales derivadas de cada Principio Rector, su impacto cuantificable en la operación y su articulación con las 4 Dimensiones del Sistema de Valor del Servicio (SVS).",
    stats: {
      causalEfficiency: "96.8%",
      balance4D: "92.2%"
    },
    filterOptions: ["Todos (7)", "Eficiencia", "Calidad/CSAT"],
    interventions: [
      {
        id: "int1",
        num: 1,
        badge: "Principio #1",
        title: "Centrarse en el valor",
        category: "SVS - Orientación a Resultados",
        action: "Mapeo explícito de los resultados de negocio de TecnoServicios Globales y definición conjunta de criterios de éxito con los stakeholders.",
        systemicEffect: "Reducción del 65% de funcionalidades superfluas no utilizadas; incremento de satisfacción del cliente (+40 CSAT).",
        keyMetricLabel: "NPS Corporativo",
        keyMetricValue: "+42",
        type: "Calidad/CSAT",
        highlight: false
      },
      {
        id: "int2",
        num: 2,
        badge: "Principio #2",
        title: "Comenzar donde se está",
        category: "SVS - Evaluación de Activos",
        action: "Auditoría y reutilización de arquitecturas de software e inventarios viables en lugar de reingenierías desde cero.",
        systemicEffect: "Disminución del 45% en costos de inversión y reducción del tiempo de transición en 3 meses.",
        keyMetricLabel: "Ahorro",
        keyMetricValue: "$320,000 USD",
        type: "Eficiencia",
        highlight: false
      },
      {
        id: "int3",
        num: 3,
        badge: "Principio #3",
        title: "Progresar iterativamente",
        category: "SVS - Ciclos Ágiles y Bucles",
        action: "Implementación de entregas quincenales continuas con retrospecciones multidisciplinarias semanales.",
        systemicEffect: "Detección temprana de incidentes en fase temprana; eliminación de crisis por despliegues \"big bang\".",
        keyMetricLabel: "Lead Time",
        keyMetricValue: "-68%",
        type: "Eficiencia",
        highlight: false
      },
      {
        id: "int4",
        num: 4,
        badge: "Principio #4",
        title: "Colaborar y visibilizar",
        category: "SVS - Desmantelamiento de Silos",
        action: "Creación de equipos fusionados Dev-Ops-Soporte y paneles Kanban corporativos abiertos a toda la organización.",
        systemicEffect: "Disolución de culpas cruzadas; alineación de prioridades y resolución conjunta en tiempo récord.",
        keyMetricLabel: "Respuesta:",
        keyMetricValue: "1.2 hrs",
        type: "Eficiencia",
        highlight: false
      },
      {
        id: "int5",
        num: 5,
        badge: "Principio #5",
        specialBadge: "EJE TRONCAL SVS",
        title: "Pensar y trabajar de forma holística",
        category: "Conexión indivisible entre las 4 Dimensiones de ITIL 4. Ninguna práctica opera en aislamiento.",
        action: "Enfoque integral considerando a las personas, la tecnología, los proveedores y los procesos como un único organismo vivo.",
        systemicEffect: "Eliminación de puntos ciegos operacionales; balance simbiótico y orquestado entre las 4 dimensiones de ITIL.",
        keyMetricLabel: "MÉTRICA DE GOBERNANZA SISTÉMICA",
        keyMetricValue: "95% Integración",
        type: "Calidad/CSAT",
        highlight: true // PURPLE HERO CARD
      },
      {
        id: "int6",
        num: 6,
        badge: "Principio #6",
        title: "Mantenerlo simple y práctico",
        category: "SVS - Racionalización de Procesos",
        action: "Auditoría de procesos para eliminar aprobaciones burocráticas redundantes y flujos de tickets complejos.",
        systemicEffect: "Reducción del 60% de pasos en el ciclo de cambio y trámites de solicitud; mayor agilidad operativa.",
        keyMetricLabel: "Métrica Clave",
        keyMetricValue: "14 a 5 pasos",
        type: "Eficiencia",
        highlight: false
      },
      {
        id: "int7",
        num: 7,
        badge: "Principio #7",
        title: "Optimizar y automatizar",
        category: "SVS - Escalamiento Tecnológico",
        action: "Automatización de pruebas, de integración continua, despliegues CI/CD y auto-resolución de tickets estándar de Service Desk.",
        systemicEffect: "Liberación de 300+ horas de ingeniería al mes para tareas estratégicas y cero errores humanos en despliegues.",
        keyMetricLabel: "Métrica Clave",
        keyMetricValue: "78% Auto-resuelta",
        type: "Eficiencia",
        highlight: false
      }
    ],
    fourDimensions: {
      tag: "ARTICULACIÓN SISTÉMICA (PRINCIPIO RECTOR #5)",
      title: "Gobernanza Holística: Las 4 Dimensiones de la Gestión de Servicios",
      subtitle: "Evaluación continua del balance integral en TecnoServicios Globales S.A. Cada dimensión es monitoreada para evitar suboptimizaciones locales o silos tecnológicos.",
      globalMaturity: "92.2%",
      maturityStatus: "Equilibrada",
      dimensions: [
        {
          id: "d1",
          num: "1",
          name: "Organización y Personas",
          subtitle: "Cultura de co-creación y desarrollo competencial",
          description: "Estructuras colaborativas sin silos, cultura 'no-blame' (sin culpas) con foco en causas raíz y desarrollo de competencias ágiles continuas.",
          score: 91,
          color: "#6366f1"
        },
        {
          id: "d2",
          num: "2",
          name: "Información y Tecnología",
          subtitle: "Observabilidad integral y plataforma ITSM moderna",
          description: "Plataforma ITSM unificada, monitoreo en tiempo real, observabilidad de infraestructura en la nube y base de conocimiento activa.",
          score: 96,
          color: "#10b981"
        },
        {
          id: "d3",
          num: "3",
          name: "Socios y Proveedores",
          subtitle: "Co-creación de valor y gobernanza externa",
          description: "Acuerdos SLA/OLA transparentes con proveedores cloud, integración segura de APIs de terceros y auditorías de servicio coordinadas.",
          score: 88,
          color: "#8b5cf6"
        },
        {
          id: "d4",
          num: "4",
          name: "Flujos de Valor y Procesos",
          subtitle: "Cadena de valor optimizada sin fricciones",
          description: "Cadena de valor del servicio optimizada, gestión proactiva de incidentes y habilitación de cambios sincronizada sin cuellos de botella.",
          score: 94,
          color: "#a855f7"
        }
      ],
      radarAssessment: "La organización presenta un alto equilibrio de capacidades. La brecha identificada en Socios y Proveedores (88%) está programada para nivelación en el sprint Q3."
    }
  },

  // SCREEN 4: Bucle de Refuerzo Positivo
  reinforcingView: {
    tag: "MODELO EN DINÁMICA DE SISTEMAS • FASE 4: RETROALIMENTACIÓN VIRTUOSA",
    title: "Bucle de Refuerzo Positivo (R1) y Métricas de Transformación",
    description: "Modelado dinámico del ciclo virtuoso de retroalimentación generado tras la aplicación armónica de los 7 Principios Rectores y comparación analítica de KPIs del caso de estudio en TecnoServicios Globales S.A.",
    loopCard: {
      title: "Circuito Causal Perpetuo (Reinforcing Loop R1)",
      formula: "Fórmula: [R1] = f(K(+) - Latencia mitiga retardo operacional a cero)",
      badges: [
        { text: "Equilibrio Auto-sostenible", type: "mint" },
        { text: "SVS Flujos Integrados", type: "purple" }
      ],
      centralNode: {
        code: "R1",
        title: "Bucle de Refuerzo R1",
        subtitle: "CIRCUITO VIRTUOSO DE CO-CREACIÓN",
        description: "Cada ciclo incrementa exponencialmente la madurez del SVS eliminando la inercia...",
        badge: "↺ Retroalimentación (+)"
      },
      steps: [
        {
          step: 1,
          name: "7 Principios Rectores",
          tag: "+ Impulso",
          detail: "Foco en valor, pensar holísticamente",
          color: "#6366f1"
        },
        {
          step: 2,
          name: "Mejor Gestión ITSM",
          tag: "+ Genera",
          detail: "Procesos sincronizados sin fricción",
          color: "#10b981"
        },
        {
          step: 3,
          name: "Eficiencia y Efectividad",
          tag: "+ Produce",
          detail: "Automatización y flujo de trabajo continuo",
          color: "#8b5cf6"
        },
        {
          step: 4,
          name: "Incremento de Valor",
          tag: "+ Desencadena",
          detail: "Impacto tangible en SLAs y negocio",
          color: "#06b6d4"
        },
        {
          step: 5,
          name: "Compromiso y Finanzas",
          tag: "+ Retroalimenta",
          detail: "Cultura de mejora continua ágil",
          color: "#ec4899"
        }
      ],
      observedEffect: "Al optimizar la relación simbiótica entre el paso 5 (Mejora Continua) y el paso 1, TecnoServicios Globales redujo los cuellos de botella de entrega en un 86%.",
      circulationSpeed: "4.2 ciclos / trimestre"
    },
    transformationResults: {
      tag: "EVIDENCIA EMPÍRICA CUANTITATIVA",
      title: "Resultados Tangibles: Crisis Inicial vs. Estado Transformado",
      auditNote: "Datos auditados por Dirección ITSM (Período: 12 meses post-adopción)",
      cards: [
        {
          id: "mttr",
          badge: "-91.6% Reducción",
          title: "Tiempo de Resolución (MTTR)",
          description: "Resolución integral de incidentes críticos de infraestructura y servicios de nómina financiera.",
          beforeLabel: "Antes (Crisis de Silos)",
          beforeValue: "28.6 hrs",
          afterLabel: "Después (ITIL 4 SVS)",
          afterValue: "2.4 hrs",
          impact: "Impacto: Eliminación de cuellos de botella",
          extraMetric: "+430% MTBF"
        },
        {
          id: "csat",
          badge: "Excelencia AAA",
          title: "Satisfacción de Clientes (CSAT)",
          description: "Encuesta continua pos-servicio aplicada a 1,840 usuarios de filiales globales.",
          score: "4.85",
          maxScore: "5.0",
          beforeLabel: "Estado Silo Previo",
          beforeValue: "2.1 / 5.0 (42% Aprobación)",
          afterLabel: "Estado Post ITIL 4",
          afterValue: "4.85 / 5.0 (97% Aprobación)",
          frequency: "Frecuencia: Nivel transaccional directo",
          nps: "NPS: +72"
        },
        {
          id: "rework",
          badge: "-91.6% Desperdicio",
          title: "Duplicidad y Retrabajo",
          description: "Fricciones de comunicación interdepartamental y tareas operativas duplicadas.",
          heroStat: "+1,420",
          heroUnit: "horas / mes",
          heroSubtitle: "Devueltas a la innovación y desarrollo proactivo de nuevos servicios cloud.",
          beforeLabel: "Antes: 38% tiempo en retrabajo",
          afterLabel: "Ahora: 3.2%",
          operationalSavings: "Ahorro operacional mensual: $84,000 USD",
          leanBadge: "Lean ITIL 4"
        }
      ]
    },
    executiveSummary: {
      tag: "AUDITORÍA DE DESEMPEÑO SVS",
      title: "Resumen para el Comité Directivo de TecnoServicios Globales",
      narrative: "La transición de una estructura fragmentada en silos departamentales hacia el Sistema de Valor del Servicio (SVS) de ITIL 4 no sólo solucionó el colapso de incidencias, sino que desencadenó el Bucle R1 que capitaliza cada esfuerzo operativo en mayor agilidad para el core empresarial.",
      dictum: "Dictamen Favorable ITSM",
      dictumSubtitle: "Auditado por C-Suite & PMO Global",
      kpis: [
        {
          title: "CUMPLIMIENTO SLA",
          value: "99.2%",
          subtitle: "De 54.2% a 99.2% (+45.2 pts)",
          icon: "CheckCircle2",
          color: "#10b981"
        },
        {
          title: "ÉXITO EN CAMBIOS",
          value: "98.7%",
          subtitle: "Antes: 58.0% (42% Fallidos)",
          icon: "ShieldCheck",
          color: "#6366f1"
        },
        {
          title: "ROI DE ADOPCIÓN",
          value: "320%",
          subtitle: "Retorno neto en 14 meses",
          icon: "TrendingUp",
          color: "#8b5cf6"
        }
      ],
      synthesis: "Los 7 Principios Rectores no son pasos estáticos, sino catalizadores continuos. Al retroalimentar la cultura (Paso 5), se consolida la auto-suficiencia operativa.",
      validationStatus: "Validado por PMO"
    }
  }
};
