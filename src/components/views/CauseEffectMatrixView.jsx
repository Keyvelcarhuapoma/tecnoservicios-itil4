import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Filter, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  BarChart3,
  Scale
} from 'lucide-react';
import { SYSTEM_DATA } from '../../data/systemData';

export function CauseEffectMatrixView() {
  const { matrixView } = SYSTEM_DATA;
  const [filterType, setFilterType] = useState('Todos (7)');
  const [hoveredDimension, setHoveredDimension] = useState(null);

  const filteredInterventions = matrixView.interventions.filter((item) => {
    if (filterType === 'Todos (7)') return true;
    return item.type === filterType;
  });

  return (
    <div className="view-container animate-fade-in">
      {/* Top Hero Banner */}
      <div className="matrix-hero-card">
        <div className="matrix-hero-left">
          <div className="hero-badges-row">
            <span className="badge badge-purple">{matrixView.badge}</span>
            <span className="badge badge-neutral">{matrixView.subBadge}</span>
          </div>

          <h1 className="hero-title">{matrixView.title}</h1>
          <p className="hero-description">{matrixView.description}</p>
        </div>

        {/* Top-Right Stats */}
        <div className="matrix-hero-stats">
          <div className="matrix-stat-box">
            <span className="matrix-stat-lbl">EFICIENCIA CAUSAL</span>
            <strong className="matrix-stat-val text-purple">{matrixView.stats.causalEfficiency}</strong>
          </div>
          <div className="matrix-stat-box">
            <span className="matrix-stat-lbl">EQUILIBRIO 4D</span>
            <strong className="matrix-stat-val text-mint">{matrixView.stats.balance4D}</strong>
          </div>
          <button className="btn btn-purple btn-sm">
            Ver Todas
          </button>
        </div>
      </div>

      {/* SECTION: Intervenciones Causales de los 7 Principios */}
      <section className="matrix-interventions-section">
        <div className="interventions-header-row">
          <div className="section-title-group">
            <span className="section-bullet"></span>
            <h2 className="section-heading">Intervenciones Causales de los 7 Principios Rectores</h2>
          </div>

          {/* Filter Pills */}
          <div className="filter-pills-row">
            <span className="filter-label">Filtrar por impacto:</span>
            {matrixView.filterOptions.map((opt) => (
              <button
                key={opt}
                className={`filter-pill-btn ${filterType === opt ? 'active' : ''}`}
                onClick={() => setFilterType(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Principles Cards Grid */}
        <div className="interventions-grid">
          {filteredInterventions.map((item) => {
            const isHero = item.highlight;
            return (
              <div
                key={item.id}
                className={`intervention-card ${isHero ? 'hero-intervention-card' : ''}`}
              >
                {/* Header */}
                <div className="card-top-row">
                  <div className="card-principle-badge">
                    {isHero && (
                      <span className="badge badge-mint pulse-border">
                        <Zap size={11} />
                        {item.specialBadge}
                      </span>
                    )}
                    <span className={`badge ${isHero ? 'badge-hero-num' : 'badge-mint'}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <h3 className="card-title">{item.title}</h3>
                <span className="card-category">{item.category}</span>

                {/* Causa (Acción) */}
                <div className="block-action">
                  <span className="block-label">
                    <span className="bullet-point"></span>
                    CAUSA (ACCIÓN)
                  </span>
                  <p className="block-text">{item.action}</p>
                </div>

                {/* Efecto Sistémico */}
                <div className="block-effect">
                  <span className="block-label">
                    <span className="bullet-point"></span>
                    EFECTO SISTÉMICO
                  </span>
                  <p className="block-text">{item.systemicEffect}</p>
                </div>

                {/* Footer Métrica Clave */}
                <div className="card-metric-footer">
                  <span className="metric-footer-lbl">{item.keyMetricLabel}</span>
                  {isHero ? (
                    <div className="governance-progress-box">
                      <div className="gov-progress-track">
                        <div className="gov-progress-fill" style={{ width: '95%' }}></div>
                      </div>
                      <span className="gov-score-text">{item.keyMetricValue}</span>
                    </div>
                  ) : (
                    <strong className="metric-footer-val">{item.keyMetricValue}</strong>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Gobernanza Holística - Las 4 Dimensiones */}
      <section className="four-dimensions-section card-base">
        <div className="four-dimensions-header">
          <div className="fd-header-left">
            <span className="badge badge-purple">
              <Layers size={12} />
              {matrixView.fourDimensions.tag}
            </span>
            <h2 className="section-heading">{matrixView.fourDimensions.title}</h2>
            <p className="section-subtext">{matrixView.fourDimensions.subtitle}</p>
          </div>

          <div className="fd-maturity-badge">
            <div className="maturity-texts">
              <span className="maturity-lbl">MADUREZ GLOBAL SVS</span>
              <strong className="maturity-score">{matrixView.fourDimensions.globalMaturity}</strong>
              <span className="badge badge-mint">{matrixView.fourDimensions.maturityStatus}</span>
            </div>
            <div className="maturity-icon-box">
              <Scale size={24} className="text-mint" />
            </div>
          </div>
        </div>

        {/* Two Columns: 4 Dimension Bars + Radar Chart */}
        <div className="dimensions-content-grid">
          {/* Left Column: 4 Dimension Cards */}
          <div className="dimensions-cards-col">
            {matrixView.fourDimensions.dimensions.map((dim) => {
              const isHovered = hoveredDimension === dim.id;
              return (
                <div
                  key={dim.id}
                  className={`dimension-item-card ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredDimension(dim.id)}
                  onMouseLeave={() => setHoveredDimension(null)}
                >
                  <div className="dim-card-header">
                    <div className="dim-number-title">
                      <span className="dim-badge-icon" style={{ backgroundColor: `${dim.color}15`, color: dim.color }}>
                        {dim.num}
                      </span>
                      <div>
                        <h4 className="dim-title">{dim.num}. {dim.name}</h4>
                        <span className="dim-subtitle">{dim.subtitle}</span>
                      </div>
                    </div>
                    <span className="dim-percentage" style={{ color: dim.color }}>
                      {dim.score}%
                    </span>
                  </div>

                  <p className="dim-description">{dim.description}</p>

                  <div className="dim-progress-track">
                    <div
                      className="dim-progress-fill"
                      style={{
                        width: `${dim.score}%`,
                        backgroundColor: dim.color
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Radar / Diamond Chart */}
          <div className="radar-chart-card">
            <h4 className="radar-title">DISTRIBUCIÓN HOLÍSTICA DE CAPACIDADES</h4>
            
            <div className="radar-svg-container">
              <svg viewBox="0 0 240 240" className="radar-svg">
                {/* Background Concentric Diamond Rings */}
                <polygon points="120,40 200,120 120,200 40,120" fill="none" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="120,60 180,120 120,180 60,120" fill="none" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="3 3" />
                <polygon points="120,80 160,120 120,160 80,120" fill="none" stroke="var(--border-light)" strokeWidth="1" />

                {/* Axes */}
                <line x1="120" y1="30" x2="120" y2="210" stroke="var(--border-medium)" strokeWidth="1" />
                <line x1="30" y1="120" x2="210" y2="120" stroke="var(--border-medium)" strokeWidth="1" />

                {/* Active Capabilities Polygon (91%, 96%, 88%, 94%) */}
                {/* Top: Personas (91% -> r=80*0.91 = 72.8, y=120-72.8=47.2) */}
                {/* Right: Tecnología (96% -> x=120+76.8=196.8) */}
                {/* Bottom: Socios (88% -> y=120+70.4=190.4) */}
                {/* Left: Procesos (94% -> x=120-75.2=44.8) */}
                <polygon
                  points="120,47 197,120 120,190 45,120"
                  fill="#7c3aed"
                  fillOpacity="0.85"
                  stroke="#4c1d95"
                  strokeWidth="2"
                  className="anim-pulse"
                />

                {/* Center Core Badge */}
                <circle cx="120" cy="120" r="18" fill="#4c1d95" />
                <text x="120" y="124" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                  SVS
                </text>

                {/* Vertex Dots */}
                <circle cx="120" cy="47" r="4" fill="#6366f1" />
                <circle cx="197" cy="120" r="4" fill="#10b981" />
                <circle cx="120" cy="190" r="4" fill="#8b5cf6" />
                <circle cx="45" cy="120" r="4" fill="#a855f7" />
              </svg>
            </div>

            {/* Radar Legend */}
            <div className="radar-legend-grid">
              <span className="radar-legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#6366f1' }}></span>
                Personas (91%)
              </span>
              <span className="radar-legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#10b981' }}></span>
                Tecnología (96%)
              </span>
              <span className="radar-legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#8b5cf6' }}></span>
                Socios (88%)
              </span>
              <span className="radar-legend-item">
                <span className="legend-dot" style={{ backgroundColor: '#a855f7' }}></span>
                Procesos (94%)
              </span>
            </div>

            {/* Diagnostic Box */}
            <div className="radar-diagnostic-box">
              <div className="diagnostic-header">
                <CheckCircle2 size={14} className="text-mint" />
                <strong>Diagnóstico de Madurez:</strong>
              </div>
              <p className="diagnostic-text">
                {matrixView.fourDimensions.radarAssessment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ACTION BAR */}
      <div className="matrix-action-footer card-base">
        <div className="footer-info">
          <FileText size={18} className="text-purple" />
          <div>
            <h4 className="footer-title">Exportar Matriz Causal en PDF / CSV</h4>
            <p className="footer-desc">
              Incluye detalles de auditoría de los 7 principios para el comité de TI
            </p>
          </div>
        </div>

        <div className="footer-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => window.print()}
          >
            <Printer size={15} />
            Imprimir Informe
          </button>
          <button 
            className="btn btn-purple"
            onClick={() => {
              const csvRows = [
                ["ID", "Principio", "Categoria", "Causa_Accion", "Efecto_Sistemico", "Metrica"],
                ...matrixView.interventions.map(i => [
                  i.num,
                  `"${i.title}"`,
                  `"${i.category}"`,
                  `"${i.action}"`,
                  `"${i.systemicEffect}"`,
                  `"${i.keyMetricValue}"`
                ])
              ];
              const csvContent = csvRows.map(e => e.join(",")).join("\n");
              const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'Matriz_Causa_Efecto_ITIL4.csv';
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <Download size={15} />
            Descargar Matriz 4D
          </button>
        </div>
      </div>
    </div>
  );
}
