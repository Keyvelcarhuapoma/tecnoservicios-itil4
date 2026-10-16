import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Grid, 
  ArrowRight, 
  Download, 
  Layers, 
  Cpu, 
  CheckCircle, 
  Sparkles, 
  Target, 
  Search, 
  RefreshCw, 
  Users, 
  CheckSquare, 
  Sliders 
} from 'lucide-react';
import { SYSTEM_DATA } from '../../data/systemData';

export function SystemArchetypeView({ onNavigate }) {
  const { archetypeView } = SYSTEM_DATA;
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activePrincipleId, setActivePrincipleId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(true);
  const [cycleCount, setCycleCount] = useState(12);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Dynamic calculation of Stock value based on simulation cycles (asymptotic logistic accumulation)
  const calculateStockScore = (cycle) => {
    const base = 56.4; // Post-crisis baseline
    const target = 97.6;
    const progress = 1 - Math.exp(-0.16 * Math.max(1, cycle));
    const raw = base + (target - base) * progress;
    // Micro-fluctuation once in steady-state (cycle > 18) for live telemetry feel
    const microVariation = cycle > 18 ? (Math.sin(cycle * 1.3) * 0.25) : 0;
    return Math.min(99.4, Math.max(54.0, raw + microVariation)).toFixed(1);
  };

  const currentScore = calculateStockScore(cycleCount);
  const scoreNum = parseFloat(currentScore);
  const isStabilized = scoreNum >= 94.0;

  // Simulation timer
  useEffect(() => {
    let interval = null;
    if (isSimulating) {
      interval = setInterval(() => {
        setCycleCount((prev) => (prev >= 99 ? 1 : prev + 1));
      }, 2200);
    }
    return () => clearInterval(interval);
  }, [isSimulating]);

  const iconMap = {
    Target,
    Search,
    RefreshCw,
    Users,
    Layers,
    CheckSquare,
    Cpu
  };

  // Center coordinate of canvas
  const cx = 530;
  const cy = 370;

  // Harmonious, spacious, non-overlapping coordinates for all 7 principles
  const nodePositions = {
    p1: { x: 530, y: 95 },   // 1. Centrarse en el valor (Norte)
    p2: { x: 835, y: 175 },  // 2. Comenzar donde se está (Noreste)
    p3: { x: 860, y: 495 },  // 3. Progresar iterativamente (Sureste)
    p4: { x: 530, y: 645 },  // 4. Colaborar y visibilizar (Sur)
    p5: { x: 230, y: 550 },  // 5. Trabajar holísticamente (Suroeste)
    p6: { x: 160, y: 370 },  // 6. Simple y práctico (Oeste)
    p7: { x: 225, y: 175 }   // 7. Optimizar y automatizar (Noroeste)
  };

  return (
    <div className="view-container animate-fade-in">
      {/* Top Header Card */}
      <div className="archetype-hero-card">
        <div className="archetype-header-top">
          <span className="breadcrumb-tag">{archetypeView.breadcrumbs}</span>
          <div className="hero-badges-row">
            {archetypeView.badges.map((b, idx) => (
              <span key={idx} className={`badge badge-${b.type}`}>
                {b.text}
              </span>
            ))}
          </div>
        </div>

        <div className="archetype-title-row">
          <div>
            <h1 className="hero-title">{archetypeView.title}</h1>
            <p className="hero-description">{archetypeView.subtitle}</p>
          </div>

          {/* Interactive Controls Toolbar */}
          <div className="canvas-controls-group">
            {/* Filter Dropdown */}
            <select
              value={selectedFilter}
              onChange={(e) => {
                setSelectedFilter(e.target.value);
                setActivePrincipleId(e.target.value === 'all' ? null : e.target.value);
              }}
              className="control-select"
            >
              <option value="all">Ver: Todos los Principios (7)</option>
              {archetypeView.principles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>

            {/* Zoom / View actions */}
            <div className="control-btn-group">
              <button 
                className="btn-icon-control" 
                onClick={() => setZoomLevel(Math.min(zoomLevel + 0.1, 1.4))}
                title="Acercar"
              >
                <ZoomIn size={15} />
              </button>
              <button 
                className="btn-icon-control" 
                onClick={() => setZoomLevel(Math.max(zoomLevel - 0.1, 0.7))}
                title="Alejar"
              >
                <ZoomOut size={15} />
              </button>
              <button 
                className="btn-icon-control" 
                onClick={() => setZoomLevel(1)}
                title="Restablecer vista"
              >
                <Maximize2 size={15} />
              </button>
              <button 
                className="btn-icon-control" 
                title="Mostrar cuadrícula"
              >
                <Grid size={15} />
              </button>
            </div>

            {/* Reset Simulation Button */}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setCycleCount(1)}
              title="Reiniciar Simulación al Ciclo 1"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <RotateCcw size={14} />
              <span>Reiniciar (Ciclo 1)</span>
            </button>

            {/* Simular Bucle Button */}
            <button
              className={`btn btn-simulate ${isSimulating ? 'simulating' : ''}`}
              onClick={() => setIsSimulating(!isSimulating)}
              title={isSimulating ? "Pausar simulación" : "Reanudar simulación"}
            >
              {isSimulating ? <Pause size={14} /> : <Play size={14} />}
              <span>{isSimulating ? "Simulando Bucle (R1)" : "Reanudar Simulación"}</span>
              <span className="cycle-pill">Ciclo: {cycleCount}</span>
            </button>
          </div>
        </div>

        {/* Legend Row */}
        <div className="archetype-legend-bar">
          <div className="legend-items">
            <span className="legend-item">
              <span className="legend-box" style={{ background: '#6366f1' }}></span>
              Variable de Estado / Acumulación (Stock)
            </span>
            <span className="legend-item">
              <span className="legend-circle" style={{ background: '#7c3aed' }}></span>
              Principios ITIL 4 (Palancas Causal Directas)
            </span>
            <span className="legend-item">
              <span className="legend-pill-plus">+</span>
              Polaridad Positiva (+) Refuerzo Causal
            </span>
          </div>
          <div className="legend-subtext">
            {archetypeView.sublegend}
          </div>
        </div>
      </div>

      {/* SVG Canvas for Systems Dynamics Archetype */}
      <div className="archetype-canvas-wrapper card-base">
        <div 
          className="canvas-container"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
        >
          <svg viewBox="0 0 1060 750" className="archetype-svg">
            <defs>
              {/* Radial Gradients */}
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#6366f1" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
              </radialGradient>

              {/* Marker Arrow */}
              <marker
                id="arrow-purple"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#8b5cf6" />
              </marker>

              <marker
                id="arrow-mint"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Orbit Ellipse Guides */}
            <ellipse cx={cx} cy={cy} rx="340" ry="260" fill="none" stroke="var(--border-light)" strokeWidth="1.5" strokeDasharray="6 6" />
            <ellipse cx={cx} cy={cy} rx="380" ry="290" fill="none" stroke="var(--border-light)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />
            
            {/* Center Pulsing Ambient Glow */}
            <circle cx={cx} cy={cy} r="115" fill="url(#centerGlow)" className="anim-pulse" />

            {/* Causal Feedback Flow Lines from Principles to Center */}
            {archetypeView.principles.map((p) => {
              const pos = nodePositions[p.id] || { x: cx, y: cy };
              const isHighlighted = !activePrincipleId || activePrincipleId === p.id;
              
              // Vector from principle to center
              const dx = cx - pos.x;
              const dy = cy - pos.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              // Target and source points
              const targetX = cx - (dx / dist) * 95;
              const targetY = cy - (dy / dist) * 65;
              const sourceX = pos.x + (dx / dist) * 75;
              const sourceY = pos.y + (dy / dist) * 55;

              // Arc curvature with perpendicular displacement
              const midX = (sourceX + targetX) / 2;
              const midY = (sourceY + targetY) / 2;
              const perpX = (-dy / dist) * 18;
              const perpY = (dx / dist) * 18;
              const ctrlX = midX + perpX;
              const ctrlY = midY + perpY;

              return (
                <g key={`flow-${p.id}`} opacity={isHighlighted ? 1 : 0.2}>
                  {/* Flow Arrow */}
                  <path
                    d={`M ${sourceX} ${sourceY} Q ${ctrlX} ${ctrlY} ${targetX} ${targetY}`}
                    fill="none"
                    stroke={p.color}
                    strokeWidth="2"
                    strokeDasharray={isSimulating ? '6 4' : 'none'}
                    className={isSimulating ? 'anim-flow' : ''}
                    markerEnd="url(#arrow-purple)"
                  />
                  
                  {/* Plus Polarity Bubble (+) */}
                  <circle cx={ctrlX} cy={ctrlY} r="9" fill="var(--bg-card)" stroke="#10b981" strokeWidth="1.5" />
                  <text x={ctrlX} y={ctrlY + 3.5} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#10b981">
                    +
                  </text>
                </g>
              );
            })}

            {/* Circular Virtual Ring between principles for compound growth (Reinforcing Loop) */}
            <path
              d={`M ${cx - 70} ${cy - 120} A 130 130 0 1 1 ${cx - 75} ${cy - 115}`}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.6"
              className={isSimulating ? 'anim-flow' : ''}
            />
          </svg>

          {/* Central Stock HTML Component inside canvas */}
          <div 
            className="canvas-stock-card anim-pulse-center"
            style={{ left: `${cx}px`, top: `${cy}px` }}
          >
            <div className="stock-tag">
              <span className="stock-bullet"></span>
              {archetypeView.stockCentral.tag}
            </div>
            <h3 className="stock-title">{archetypeView.stockCentral.title}</h3>
            <div className="stock-score-row" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span className="stock-score" style={{ transition: 'all 0.4s ease', color: scoreNum >= 90 ? '#4338ca' : '#6366f1' }}>
                {currentScore}
              </span>
              <span className="stock-score-max">/{archetypeView.stockCentral.max}</span>
              <span 
                className="stock-delta-badge"
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: isStabilized ? '#059669' : '#4f46e5',
                  backgroundColor: isStabilized ? 'rgba(16, 185, 129, 0.15)' : 'rgba(99, 102, 241, 0.15)',
                  padding: '2px 7px',
                  borderRadius: '999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '2px',
                  marginLeft: '4px'
                }}
              >
                {isStabilized ? '▲ Estable' : `+${Math.max(0.2, (98 - scoreNum) * 0.12).toFixed(1)}%`}
              </span>
            </div>
            <div className="stock-badge">
              <Sparkles size={12} className="stock-badge-icon" />
              <span>
                {isStabilized 
                  ? '✔ Bucle R1: Virtuoso y Estable' 
                  : `⚡ Bucle R1: Acumulando Valor (+${currentScore}%)`}
              </span>
            </div>
          </div>

          {/* 7 Orbital Principle Cards */}
          {archetypeView.principles.map((p) => {
            const pos = nodePositions[p.id] || { x: cx, y: cy };
            const px = pos.x;
            const py = pos.y;

            const isSelected = activePrincipleId === p.id;
            const isDimmed = activePrincipleId && !isSelected;
            const Icon = iconMap[p.iconName] || Target;

            return (
              <div
                key={p.id}
                className={`canvas-principle-node ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
                style={{ 
                  left: `${px}px`, 
                  top: `${py}px`,
                  borderColor: isSelected ? p.color : 'transparent'
                }}
                onClick={() => setActivePrincipleId(isSelected ? null : p.id)}
              >
                <div className="principle-node-top">
                  <div className="principle-node-icon" style={{ backgroundColor: `${p.color}18`, color: p.color }}>
                    <Icon size={14} />
                  </div>
                  <span className="principle-node-code">{p.code}</span>
                </div>

                <h4 className="principle-node-title">{p.title}</h4>
                <p className="principle-node-desc">{p.description}</p>

                <div className="principle-node-metric">
                  <span className="metric-tag-lbl">{p.metricLabel}:</span>
                  <strong className="metric-tag-val" style={{ color: p.color }}>
                    {p.metricValue}
                  </strong>
                </div>
              </div>
            );
          })}

          {/* Floating Inspector Causal Card */}
          <div className="inspector-causal-card">
            <div className="inspector-card-header">
              <div className="inspector-tag-row">
                <span className="inspector-title-tag">{archetypeView.inspector.tag}</span>
                <span className="badge badge-mint">{archetypeView.inspector.badge}</span>
              </div>
            </div>
            <h4 className="inspector-heading">{archetypeView.inspector.title}</h4>
            <p className="inspector-body">{archetypeView.inspector.description}</p>
            <div className="inspector-polarity-row">
              <span className="polarity-lbl">Polaridad Global:</span>
              <span className="polarity-val">
                <span className="polarity-circle">+</span>
                {archetypeView.inspector.polarity}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Telemetría de la Simulación */}
      <section className="simulation-telemetry-section">
        <div className="telemetry-header-row">
          <div>
            <span className="badge badge-purple">{archetypeView.telemetry.tag}</span>
            <h2 className="section-heading">{archetypeView.telemetry.title}</h2>
          </div>
          <button 
            className="btn btn-secondary telemetry-action-btn"
            onClick={() => onNavigate('matrix')}
          >
            <span>{archetypeView.telemetry.actionText}</span>
            <ArrowRight size={15} />
          </button>
        </div>

        {/* 4 Telemetry Metrics Cards */}
        <div className="telemetry-cards-grid">
          {archetypeView.telemetry.cards.map((card) => (
            <div key={card.id} className="telemetry-card">
              <div className="telemetry-card-top">
                <span className="telemetry-card-title">{card.title}</span>
                {card.trend === 'up' && (
                  <span className="trend-badge-up">
                    <Sparkles size={11} />
                  </span>
                )}
                {card.trend === 'down-good' && (
                  <span className="trend-badge-good">
                    <CheckCircle size={11} />
                  </span>
                )}
              </div>

              <div className="telemetry-value-row">
                <span className="telemetry-value">
                  {card.id === 'svs_health' 
                    ? `${Math.min(99.6, (scoreNum + 1.2)).toFixed(1)}%` 
                    : card.value}
                </span>
                <span className="telemetry-sub">
                  {card.id === 'svs_health'
                    ? (isStabilized ? 'Régimen Óptimo' : 'En convergencia...')
                    : card.subtext}
                </span>
              </div>

              {/* Graphical Representation */}
              <div className="telemetry-graph-zone">
                {card.type === 'sparkline' && (
                  <svg viewBox="0 0 100 24" className="sparkline-svg">
                    <path
                      d="M 0 18 Q 20 16 35 12 T 70 8 T 100 2"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 0 18 Q 20 16 35 12 T 70 8 T 100 2 L 100 24 L 0 24 Z"
                      fill="rgba(16, 185, 129, 0.12)"
                    />
                  </svg>
                )}

                {card.type === 'progress' && (
                  <div className="telemetry-bar-track">
                    <div className="telemetry-bar-fill purple" style={{ width: '85%' }}></div>
                  </div>
                )}

                {card.type === 'decay' && (
                  <svg viewBox="0 0 100 24" className="sparkline-svg">
                    <path
                      d="M 0 3 Q 25 5 45 12 T 75 19 T 100 22"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M 0 3 Q 25 5 45 12 T 75 19 T 100 22 L 100 24 L 0 24 Z"
                      fill="rgba(16, 185, 129, 0.08)"
                    />
                  </svg>
                )}

                {card.type === 'bar-cluster' && (
                  <div className="cluster-bars-row">
                    <span className="cluster-bar full"></span>
                    <span className="cluster-bar full"></span>
                    <span className="cluster-bar full"></span>
                    <span className="cluster-bar full"></span>
                    <span className="cluster-bar full"></span>
                  </div>
                )}
              </div>

              <p className="telemetry-card-desc">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Telemetry Conclusion Alert */}
        <div className="telemetry-conclusion-box">
          <div className="telemetry-conclusion-text">
            <span className="conclusion-pin-icon">💡</span>
            <span>
              <strong>Conclusión del Arquetipo de Refuerzo:</strong> {archetypeView.telemetry.conclusion}
            </span>
          </div>
          <div className="telemetry-buttons-row">
            <button 
              className="btn btn-secondary btn-sm"
              onClick={() => {
                const xml = `<?xml version="1.0" encoding="utf-8"?>
<xmile version="1.0" xmlns="http://docs.oasis-open.org/xmile/ns/XMILE/v1.0">
  <header>
    <vendor>TecnoServicios Globales S.A.</vendor>
    <name>ITIL4_SVS_Archetype_R1</name>
    <version>4.2</version>
  </header>
  <model>
    <variables>
      <stock name="Calidad_del_Servicio_y_Entrega_de_Valor">
        <eqn>94.6</eqn>
      </stock>
    </variables>
  </model>
</xmile>`;
                const blob = new Blob([xml], { type: 'application/xml;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Modelo_Arquetipo_R1_TecnoServicios.stmx';
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <Download size={14} />
              Exportar Modelo (.STMX)
            </button>
            <button 
              className="btn btn-purple btn-sm"
              onClick={() => {
                setCycleCount((prev) => prev + 1);
                setIsSimulating(true);
              }}
            >
              <RotateCcw size={14} />
              Recalcular Ciclo R1
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER: Sala de Control y Alineación Estratégica */}
      <div className="strategic-alignment-card card-base">
        <div className="command-center-visual">
          <div className="command-center-overlay">
            <span className="badge badge-purple">
              {archetypeView.strategicAlignment.roomBadge}
            </span>
            <h4 className="command-room-title">
              {archetypeView.strategicAlignment.roomTitle}
            </h4>
          </div>
        </div>

        <div className="strategic-text-content">
          <span className="strategic-tag">
            {archetypeView.strategicAlignment.tag}
          </span>
          <h3 className="strategic-title">
            {archetypeView.strategicAlignment.title}
          </h3>
          <p className="strategic-desc">
            {archetypeView.strategicAlignment.description}
          </p>

          <div className="strategic-compare-row">
            <div className="compare-box previous">
              <span className="compare-title">
                {archetypeView.strategicAlignment.previousState.title}
              </span>
              <p className="compare-text">
                {archetypeView.strategicAlignment.previousState.desc}
              </p>
            </div>

            <div className="compare-box active">
              <span className="compare-title">
                {archetypeView.strategicAlignment.activeState.title}
              </span>
              <p className="compare-text">
                {archetypeView.strategicAlignment.activeState.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
