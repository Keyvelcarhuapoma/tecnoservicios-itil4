import React from 'react';
import { 
  AlertOctagon, 
  ArrowRight, 
  Quote, 
  XCircle, 
  Flame, 
  Layers, 
  Activity, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { SYSTEM_DATA } from '../../data/systemData';

export function ContextDiagnosticView({ onNavigate }) {
  const { silosView } = SYSTEM_DATA;

  return (
    <div className="view-container animate-fade-in">
      {/* Top Header Card */}
      <div className="view-hero-card">
        <div className="hero-content">
          <div className="hero-top-badge">
            <span className="badge badge-critical">
              <AlertOctagon size={12} />
              {silosView.tag}
            </span>
          </div>

          <h1 className="hero-title">
            Crisis Operativa: <span className="accent-red">TecnoServicios Globales S.A.</span>
          </h1>

          <p className="hero-description">
            {silosView.description}
          </p>

          <div className="hero-meta-row">
            {silosView.metadata.map((meta, idx) => (
              <span 
                key={idx} 
                className={`meta-tag ${meta.isAlert ? 'meta-tag-alert' : ''}`}
              >
                <strong>{meta.label}:</strong> {meta.value}
              </span>
            ))}
          </div>
        </div>

        {/* Top-Right Vertical KPI Stack */}
        <div className="hero-kpis-stack">
          {silosView.kpis.map((kpi) => (
            <div key={kpi.id} className="kpi-mini-card">
              <div className="kpi-mini-top">
                <span className="kpi-mini-label">{kpi.title}</span>
                <span className={`badge badge-${kpi.badgeType}`}>
                  {kpi.badge}
                </span>
              </div>
              <div className="kpi-mini-value">{kpi.value}</div>
              <div className="kpi-mini-progress">
                <div 
                  className="kpi-progress-bar"
                  style={{ 
                    width: `${kpi.barPercent}%`,
                    backgroundColor: kpi.barColor
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: Topología de Desconexión - Los Tres Silos */}
      <section className="silos-section">
        <div className="section-header-block">
          <div className="section-tag-row">
            <span className="section-tag-red">
              <Layers size={13} />
              TOPOLOGÍA DE DESCONEXIÓN
            </span>
          </div>
          <h2 className="section-heading">Los Tres Silos Aislados de TecnoServicios</h2>
          <p className="section-subtext">
            Fosos departamentales donde cada unidad optimiza sus propios indicadores a expensas de la entrega global de valor al cliente final.
          </p>
        </div>

        {/* 3 Silos Grid */}
        <div className="silos-grid">
          {silosView.silos.map((silo) => (
            <div key={silo.id} className="silo-card">
              {/* Header */}
              <div className="silo-card-header">
                <div className="silo-code-title">
                  <span className="silo-code">{silo.code}</span>
                  <h3 className="silo-name">{silo.title}</h3>
                </div>
                <span 
                  className="silo-status-pill"
                  style={{ 
                    borderColor: silo.badgeColor,
                    color: silo.badgeColor,
                    backgroundColor: `${silo.badgeColor}15`
                  }}
                >
                  {silo.badge}
                </span>
              </div>

              {/* Photo with Dark Overlay */}
              <div className="silo-image-container">
                <img 
                  src={silo.image} 
                  alt={silo.title} 
                  className="silo-img" 
                />
                <div className="silo-img-overlay">
                  <span className="overlay-focus">{silo.overlayFocus}</span>
                  <span className="overlay-metric">{silo.overlayMetric}</span>
                </div>
              </div>

              {/* Metrics in Crisis Row */}
              <div className="silo-metrics-row">
                <span className="silo-metrics-title">MÉTRICAS EN CRISIS</span>
                <div className="metrics-boxes">
                  {silo.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="metric-box-val">{m.value}</span>
                      <span className="metric-box-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Observed Symptoms */}
              <div className="silo-symptoms">
                <span className="symptoms-title">SÍNTOMAS OBSERVADOS</span>
                <ul className="symptoms-list">
                  {silo.symptoms.map((symptom, idx) => (
                    <li key={idx} className="symptom-item">
                      <span className="symptom-cross">✕</span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Box */}
              <div className="silo-quote-box">
                <Quote size={16} className="quote-icon" />
                <p className="quote-text">"{silo.quote}"</p>
                <span className="quote-author">— {silo.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Matriz de Causa Raíz Sistémica */}
      <section className="causes-section">
        <div className="causes-section-header">
          <div className="causes-header-left">
            <span className="badge badge-purple">
              {silosView.causesHeader.tag}
            </span>
            <h2 className="section-heading">{silosView.causesHeader.title}</h2>
            <p className="section-subtext">{silosView.causesHeader.subtitle}</p>
          </div>

          {/* Right Circular Gauge */}
          <div className="causes-gauge-card">
            <div className="gauge-circle-outer">
              <div className="gauge-circle-inner">
                <span className="gauge-number">{silosView.causesHeader.globalIndex}</span>
                <span className="gauge-label">ÍNDICE</span>
              </div>
            </div>
            <div className="gauge-details">
              <span className="gauge-tag">{silosView.causesHeader.globalTitle}</span>
              <strong className="gauge-status">{silosView.causesHeader.globalStatus}</strong>
              <span className="gauge-sub">{silosView.causesHeader.globalDetail}</span>
            </div>
          </div>
        </div>

        {/* 6 Causes Grid */}
        <div className="causes-grid">
          {silosView.causes.map((cause) => (
            <div key={cause.id} className="cause-card">
              <div className="cause-card-top">
                <span className="cause-num">{cause.num}</span>
                <span className={`badge badge-${cause.badgeType}`}>
                  {cause.severityBadge}
                </span>
              </div>

              <h4 className="cause-title">{cause.title}</h4>
              <p className="cause-desc">{cause.description}</p>

              {/* Systemic Effect Box */}
              <div className="cause-systemic-box">
                <span className="systemic-label">Efecto Sistémico:</span>
                <p className="systemic-text">{cause.systemicEffect}</p>
              </div>

              {/* Indicator Bar */}
              <div className="cause-indicator-wrapper">
                <div className="indicator-labels">
                  <span className="indicator-title">{cause.indicatorLabel}</span>
                  <span className="indicator-score">{cause.indicatorScore}</span>
                </div>
                <div className="indicator-track">
                  <div 
                    className="indicator-fill"
                    style={{ 
                      width: `${cause.percent}%`,
                      backgroundColor: cause.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM BANNER: Conclusión del Diagnóstico Causal */}
      <div className="diagnostic-conclusion-banner">
        <div className="conclusion-graphics-bg">
          <svg viewBox="0 0 200 200" className="radial-node-svg">
            <circle cx="100" cy="100" r="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" />
            <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="18" fill="rgba(255,255,255,0.2)" />
            <circle cx="65" cy="70" r="8" fill="rgba(255,255,255,0.18)" />
            <circle cx="135" cy="70" r="8" fill="rgba(255,255,255,0.18)" />
            <circle cx="140" cy="135" r="8" fill="rgba(255,255,255,0.18)" />
            <circle cx="60" cy="135" r="8" fill="rgba(255,255,255,0.18)" />
          </svg>
        </div>

        <div className="conclusion-content">
          <span className="conclusion-badge">
            <AlertTriangle size={13} />
            {silosView.conclusionBanner.tag}
          </span>
          <h3 className="conclusion-title">
            {silosView.conclusionBanner.title}
          </h3>
          <p className="conclusion-text">
            {silosView.conclusionBanner.description}
          </p>
        </div>

        <div className="conclusion-action">
          <button 
            className="btn btn-conclusion"
            onClick={() => onNavigate('archetype')}
          >
            <span>{silosView.conclusionBanner.actionText}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
