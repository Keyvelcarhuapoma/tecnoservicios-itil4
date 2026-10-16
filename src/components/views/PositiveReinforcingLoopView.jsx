import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCw, 
  Download, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Clock,
  Smile,
  Repeat
} from 'lucide-react';
import { SYSTEM_DATA } from '../../data/systemData';
import { CLevelReportModal } from '../CLevelReportModal';

export function PositiveReinforcingLoopView() {
  const { reinforcingView } = SYSTEM_DATA;
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="view-container animate-fade-in">
      {/* C-Level Report Modal */}
      <CLevelReportModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Top Hero Banner */}
      <div className="reinforcing-hero-card">
        <div className="hero-left-content">
          <span className="badge badge-mint">
            <Repeat size={12} />
            {reinforcingView.tag}
          </span>
          <h1 className="hero-title">{reinforcingView.title}</h1>
          <p className="hero-description">{reinforcingView.description}</p>
        </div>

        <div className="hero-right-actions">
          <button 
            className={`btn btn-secondary ${isPlaying ? 'active-sim-btn' : ''}`}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            Reproducir Simulación R1
          </button>
          <button 
            className="btn btn-purple"
            onClick={() => setIsModalOpen(true)}
          >
            <Download size={14} />
            Descargar Informe C-Level
          </button>
        </div>
      </div>

      {/* SECTION: Circuito Causal Perpetuo (Reinforcing Loop R1) */}
      <section className="circuit-loop-card card-base">
        <div className="circuit-header">
          <div className="circuit-badge-title">
            <div className="loop-icon-pill">
              <RotateCw size={14} className="text-mint anim-pulse" />
            </div>
            <div>
              <h3 className="circuit-heading">{reinforcingView.loopCard.title}</h3>
              <span className="circuit-formula">{reinforcingView.loopCard.formula}</span>
            </div>
          </div>

          <div className="circuit-badges-row">
            {reinforcingView.loopCard.badges.map((b, idx) => (
              <span key={idx} className={`badge badge-${b.type}`}>
                <span className="bullet-point"></span>
                {b.text}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Circular Visual Diagram */}
        <div className="circuit-visual-container">
          <svg viewBox="0 0 860 480" className="circuit-svg">
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Orbit Oval Path connecting the 5 steps */}
            {/* Center is at (430, 240), rx=320, ry=160 */}
            <ellipse
              cx="430"
              cy="235"
              rx="300"
              ry="150"
              fill="none"
              stroke="url(#orbitGrad)"
              strokeWidth="2.5"
              strokeDasharray={isPlaying ? '8 6' : 'none'}
              className={isPlaying ? 'anim-flow' : ''}
            />

            {/* Directional Flow Arrows between steps */}
            {/* Step 1 to Step 2 */}
            <path d="M 520 120 L 580 135" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-mint)" fill="none" />
            {/* Step 2 to Step 3 */}
            <path d="M 680 270 L 670 310" stroke="#10b981" strokeWidth="2" fill="none" />
            {/* Step 3 to Step 4 */}
            <path d="M 560 380 L 480 390" stroke="#10b981" strokeWidth="2" fill="none" />
            {/* Step 4 to Step 5 */}
            <path d="M 370 390 L 290 380" stroke="#10b981" strokeWidth="2" fill="none" />
            {/* Step 5 to Step 1 */}
            <path d="M 280 145 L 340 125" stroke="#10b981" strokeWidth="2" fill="none" />
          </svg>

          {/* Central Core R1 Node */}
          <div className="circuit-central-node anim-pulse-center">
            <div className="r1-circle-badge">
              <span className="r1-code">{reinforcingView.loopCard.centralNode.code}</span>
            </div>
            <h4 className="r1-title">{reinforcingView.loopCard.centralNode.title}</h4>
            <span className="r1-subtitle">{reinforcingView.loopCard.centralNode.subtitle}</span>
            <p className="r1-desc">{reinforcingView.loopCard.centralNode.description}</p>
            <div className="r1-pill">
              <span>{reinforcingView.loopCard.centralNode.badge}</span>
            </div>
          </div>

          {/* 5 Step Nodes arranged along the ellipse */}
          {/* Step 1: Top (430, 85) */}
          <div
            className={`step-node step-1 ${activeStep === 1 ? 'active-step' : ''}`}
            onClick={() => setActiveStep(1)}
          >
            <div className="step-header">
              <span className="step-num-pill" style={{ backgroundColor: '#6366f1' }}>
                PASO 1
              </span>
              <span className="step-tag-pill">+ Impulso</span>
            </div>
            <h5 className="step-name">7 Principios Rectores</h5>
            <p className="step-detail">Foco en valor, pensar holísticamente</p>
          </div>

          {/* Step 2: Top Right (690, 165) */}
          <div
            className={`step-node step-2 ${activeStep === 2 ? 'active-step' : ''}`}
            onClick={() => setActiveStep(2)}
          >
            <div className="step-header">
              <span className="step-num-pill" style={{ backgroundColor: '#10b981' }}>
                PASO 2
              </span>
              <span className="step-tag-pill">+ Genera</span>
            </div>
            <h5 className="step-name">Mejor Gestión ITSM</h5>
            <p className="step-detail">Procesos sincronizados sin fricción</p>
          </div>

          {/* Step 3: Bottom Right (640, 360) */}
          <div
            className={`step-node step-3 ${activeStep === 3 ? 'active-step' : ''}`}
            onClick={() => setActiveStep(3)}
          >
            <div className="step-header">
              <span className="step-num-pill" style={{ backgroundColor: '#8b5cf6' }}>
                PASO 3
              </span>
              <span className="step-tag-pill">+ Produce</span>
            </div>
            <h5 className="step-name">Eficiencia y Efectividad</h5>
            <p className="step-detail">Automatización y flujo de trabajo continuo</p>
          </div>

          {/* Step 4: Bottom Left (220, 360) */}
          <div
            className={`step-node step-4 ${activeStep === 4 ? 'active-step' : ''}`}
            onClick={() => setActiveStep(4)}
          >
            <div className="step-header">
              <span className="step-num-pill" style={{ backgroundColor: '#06b6d4' }}>
                PASO 4
              </span>
              <span className="step-tag-pill">+ Desencadena</span>
            </div>
            <h5 className="step-name">Incremento de Valor</h5>
            <p className="step-detail">Impacto tangible en SLAs y negocio</p>
          </div>

          {/* Step 5: Top Left (170, 165) */}
          <div
            className={`step-node step-5 ${activeStep === 5 ? 'active-step' : ''}`}
            onClick={() => setActiveStep(5)}
          >
            <div className="step-header">
              <span className="step-num-pill" style={{ backgroundColor: '#ec4899' }}>
                PASO 5
              </span>
              <span className="step-tag-pill">+ Retroalimenta</span>
            </div>
            <h5 className="step-name">Compromiso y Finanzas</h5>
            <p className="step-detail">Cultura de mejora continua ágil</p>
          </div>
        </div>

        {/* Circuit Observed Effect Footer Bar */}
        <div className="circuit-footer-bar">
          <div className="circuit-footer-left">
            <span className="footer-pin-icon">✔</span>
            <p className="circuit-effect-text">
              <strong>Efecto Sistémico Observado:</strong> {reinforcingView.loopCard.observedEffect}
            </p>
          </div>
          <div className="circuit-speed-box">
            <span className="speed-lbl">Velocidad de Circulación:</span>
            <strong className="speed-val">{reinforcingView.loopCard.circulationSpeed}</strong>
          </div>
        </div>
      </section>

      {/* SECTION: Evidencia Empírica Cuantitativa - Crisis Inicial vs. Estado Transformado */}
      <section className="quantitative-results-section">
        <div className="results-header-row">
          <div>
            <span className="badge badge-purple">{reinforcingView.transformationResults.tag}</span>
            <h2 className="section-heading">{reinforcingView.transformationResults.title}</h2>
          </div>
          <span className="audit-note-text">
            {reinforcingView.transformationResults.auditNote}
          </span>
        </div>

        {/* 3 Comparative Cards */}
        <div className="results-cards-grid">
          {/* Card 1: MTTR */}
          <div className="result-card card-base">
            <div className="result-card-header">
              <div className="result-icon-box bg-red-soft">
                <Clock size={16} className="text-red" />
              </div>
              <span className="badge badge-mint">{reinforcingView.transformationResults.cards[0].badge}</span>
            </div>

            <h3 className="result-card-title">{reinforcingView.transformationResults.cards[0].title}</h3>
            <p className="result-card-desc">{reinforcingView.transformationResults.cards[0].description}</p>

            <div className="comparison-box-block">
              <div className="comp-row before">
                <span className="comp-dot red"></span>
                <span className="comp-lbl">{reinforcingView.transformationResults.cards[0].beforeLabel}</span>
                <strong className="comp-val">{reinforcingView.transformationResults.cards[0].beforeValue}</strong>
              </div>
              <div className="comp-row after">
                <span className="comp-dot green"></span>
                <span className="comp-lbl">{reinforcingView.transformationResults.cards[0].afterLabel}</span>
                <strong className="comp-val text-mint">{reinforcingView.transformationResults.cards[0].afterValue}</strong>
              </div>
              <div className="comp-progress-track">
                <div className="comp-progress-fill" style={{ width: '91.6%' }}></div>
              </div>
            </div>

            <div className="result-card-footer">
              <span className="footer-note">{reinforcingView.transformationResults.cards[0].impact}</span>
              <strong className="footer-metric text-mint">{reinforcingView.transformationResults.cards[0].extraMetric}</strong>
            </div>
          </div>

          {/* Card 2: CSAT */}
          <div className="result-card card-base">
            <div className="result-card-header">
              <div className="result-icon-box bg-purple-soft">
                <Smile size={16} className="text-purple" />
              </div>
              <span className="badge badge-mint">{reinforcingView.transformationResults.cards[1].badge}</span>
            </div>

            <h3 className="result-card-title">{reinforcingView.transformationResults.cards[1].title}</h3>
            <p className="result-card-desc">{reinforcingView.transformationResults.cards[1].description}</p>

            {/* Circular CSAT Gauge */}
            <div className="csat-gauge-wrapper">
              <div className="csat-circle-outer">
                <svg viewBox="0 0 100 100" className="csat-gauge-svg">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-light)" strokeWidth="6" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="42" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="6" 
                    strokeDasharray="264"
                    strokeDashoffset="26" /* 4.85 / 5.0 ~ 97% */
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="csat-circle-content">
                  <span className="csat-number">{reinforcingView.transformationResults.cards[1].score}</span>
                  <span className="csat-max">/{reinforcingView.transformationResults.cards[1].maxScore}</span>
                </div>
              </div>

              <div className="csat-comparison-list">
                <div className="csat-comp-item">
                  <span className="csat-state-lbl">Estado Silo Previo:</span>
                  <span className="csat-state-val text-muted">
                    {reinforcingView.transformationResults.cards[1].beforeValue}
                  </span>
                </div>
                <div className="csat-comp-item">
                  <span className="csat-state-lbl">Estado Post ITIL 4:</span>
                  <strong className="csat-state-val text-mint">
                    {reinforcingView.transformationResults.cards[1].afterValue}
                  </strong>
                </div>
              </div>
            </div>

            <div className="result-card-footer">
              <span className="footer-note">{reinforcingView.transformationResults.cards[1].frequency}</span>
              <strong className="footer-metric text-purple">{reinforcingView.transformationResults.cards[1].nps}</strong>
            </div>
          </div>

          {/* Card 3: Duplicidad y Retrabajo */}
          <div className="result-card card-base">
            <div className="result-card-header">
              <div className="result-icon-box bg-mint-soft">
                <Zap size={16} className="text-mint" />
              </div>
              <span className="badge badge-mint">{reinforcingView.transformationResults.cards[2].badge}</span>
            </div>

            <h3 className="result-card-title">{reinforcingView.transformationResults.cards[2].title}</h3>
            <p className="result-card-desc">{reinforcingView.transformationResults.cards[2].description}</p>

            {/* Big Green Card Number */}
            <div className="rework-hero-box">
              <div className="rework-big-stat">
                <span className="big-stat-number">{reinforcingView.transformationResults.cards[2].heroStat}</span>
                <span className="big-stat-unit">{reinforcingView.transformationResults.cards[2].heroUnit}</span>
              </div>
              <p className="rework-hero-subtitle">
                {reinforcingView.transformationResults.cards[2].heroSubtitle}
              </p>
              <div className="rework-compare-pills">
                <span className="rework-pill before">
                  {reinforcingView.transformationResults.cards[2].beforeLabel}
                </span>
                <span className="rework-arrow">→</span>
                <span className="rework-pill after">
                  {reinforcingView.transformationResults.cards[2].afterLabel}
                </span>
              </div>
            </div>

            <div className="result-card-footer">
              <span className="footer-note">{reinforcingView.transformationResults.cards[2].operationalSavings}</span>
              <span className="badge badge-purple">{reinforcingView.transformationResults.cards[2].leanBadge}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: Auditoría de Desempeño SVS - Resumen para el Comité Directivo */}
      <section className="executive-audit-card card-base">
        <div className="audit-left-col">
          <span className="badge badge-purple">
            <ShieldCheck size={12} />
            {reinforcingView.executiveSummary.tag}
          </span>
          <h2 className="audit-title">{reinforcingView.executiveSummary.title}</h2>
          <p className="audit-narrative">{reinforcingView.executiveSummary.narrative}</p>

          <div className="audit-dictum-box">
            <div className="dictum-icon-circle">
              <CheckCircle2 size={18} className="text-white" />
            </div>
            <div>
              <strong className="dictum-title">{reinforcingView.executiveSummary.dictum}</strong>
              <span className="dictum-sub">{reinforcingView.executiveSummary.dictumSubtitle}</span>
            </div>
          </div>
        </div>

        <div className="audit-right-col">
          {/* 3 KPI metric cards */}
          <div className="audit-kpis-grid">
            {reinforcingView.executiveSummary.kpis.map((kpi, idx) => (
              <div key={idx} className="audit-kpi-item">
                <div className="kpi-item-top">
                  <span className="kpi-item-title">{kpi.title}</span>
                  <CheckCircle2 size={14} style={{ color: kpi.color }} />
                </div>
                <strong className="kpi-item-val" style={{ color: kpi.color }}>
                  {kpi.value}
                </strong>
                <span className="kpi-item-sub">{kpi.subtitle}</span>
                <div className="kpi-spark-bar">
                  <div className="kpi-spark-fill" style={{ backgroundColor: kpi.color, width: '92%' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Synthesis callout */}
          <div className="audit-synthesis-box">
            <div className="synthesis-text">
              <span className="synthesis-bullet">↺</span>
              <p>
                <strong>Síntesis del Caso:</strong> {reinforcingView.executiveSummary.synthesis}
              </p>
            </div>
            <div className="synthesis-status">
              <span className="status-lbl">Estado:</span>
              <span className="badge badge-mint">{reinforcingView.executiveSummary.validationStatus}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
