import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Smile, 
  Zap, 
  FileText 
} from 'lucide-react';
import { SYSTEM_DATA } from '../data/systemData';

export function CLevelReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { organization, reinforcingView } = SYSTEM_DATA;

  const handleDownload = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Informe Ejecutivo C-Level - TecnoServicios Globales S.A.</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 40px; color: #0f172a; background: #fff; line-height: 1.5; }
    .header { border-bottom: 2px solid #4f46e5; padding-bottom: 20px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-start; }
    .title { font-size: 22px; font-weight: 800; color: #1e1b4b; margin: 0 0 6px 0; }
    .subtitle { color: #64748b; font-size: 13px; margin: 0; }
    .badge { background: #ecfdf5; color: #047857; padding: 4px 12px; border-radius: 9999px; font-weight: 700; font-size: 11px; border: 1px solid #a7f3d0; text-transform: uppercase; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 20px; }
    .card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; }
    .card-lbl { font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700; margin-bottom: 6px; }
    .card-val { font-size: 24px; font-weight: 800; color: #4338ca; line-height: 1; margin-bottom: 4px; }
    .card-sub { font-size: 12px; color: #059669; font-weight: 600; }
    .section-title { font-size: 15px; font-weight: 700; color: #1e1b4b; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 24px 0 10px 0; }
    p { font-size: 13px; line-height: 1.6; color: #334155; margin: 0 0 10px 0; }
    .footer { margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 16px; display: flex; justify-content: space-between; font-size: 11px; color: #64748b; }
    @media print { body { margin: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 class="title">AUDITORÍA DE DESEMPEÑO SVS - INFORME C-LEVEL</h1>
      <p class="subtitle">TecnoServicios Globales S.A. • Marco de Gestión ITIL 4 & Dinámica de Sistemas</p>
    </div>
    <span class="badge">VALIDADO POR PMO & C-SUITE</span>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-lbl">Cumplimiento Global SLA</div>
      <div class="card-val">99.2%</div>
      <div class="card-sub">▲ +45.2 pts (Inicial: 54.2%)</div>
    </div>
    <div class="card">
      <div class="card-lbl">Tiempo de Resolución (MTTR)</div>
      <div class="card-val">2.4 hrs</div>
      <div class="card-sub">▼ -91.6% (Inicial: 28.6 hrs)</div>
    </div>
    <div class="card">
      <div class="card-lbl">Satisfacción Clientes (CSAT)</div>
      <div class="card-val">4.85 / 5.0</div>
      <div class="card-sub">▲ +72 NPS (97% Aprobación)</div>
    </div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-lbl">Éxito en Despliegues / Cambios</div>
      <div class="card-val">98.7%</div>
      <div class="card-sub">Fallos reducidos de 42% a 1.3%</div>
    </div>
    <div class="card">
      <div class="card-lbl">Horas Devueltas a Innovación</div>
      <div class="card-val">+1,420 h/mes</div>
      <div class="card-sub">Retrabajo reducido del 38% al 3.2%</div>
    </div>
    <div class="card">
      <div class="card-lbl">Retorno de Inversión (ROI)</div>
      <div class="card-val">320%</div>
      <div class="card-sub">Ahorro mensual: $84,000 USD</div>
    </div>
  </div>

  <div class="section-title">Resumen Ejecutivo para el Comité Directivo</div>
  <p>
    La transición integral de la estructura fragmentada en silos departamentales hacia el <strong>Sistema de Valor del Servicio (SVS) de ITIL 4</strong> no sólo solucionó el colapso operativo inicial en TecnoServicios Globales S.A., sino que desencadenó el <strong>Bucle de Refuerzo R1</strong>, capitalizando cada esfuerzo operativo en una mayor agilidad y estabilidad para el negocio.
  </p>
  <p>
    El modelado de dinámica de sistemas valida que la armonización de los 7 Principios Rectores elimina la burocracia innecesaria (P6) e impulsa la automatización sin fricción (P7), logrando una tasa de convergencia estable del +98.2% y auto-suficiencia operativa verificada.
  </p>

  <div class="section-title">Dictamen del Comité</div>
  <p>
    <strong>Dictamen: Favorable sin reservas.</strong> Certificado por la Dirección ITSM, PMO Global y validado para presentación ante la Junta Directiva.
  </p>

  <div class="footer">
    <span>Emitido por: ${organization.currentUser.name} - ${organization.currentUser.role}</span>
    <span>Fecha de Emisión: 16 de Octubre, 2026</span>
    <span>Confidencial - Nivel C-Level</span>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Informe_Ejecutivo_C-Level_TecnoServicios.html');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog card-base" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-info">
            <span className="badge badge-purple">
              <FileText size={12} />
              AUDITORÍA DE DESEMPEÑO SVS • CASO CORE
            </span>
            <h2 className="modal-title">
              Informe Ejecutivo C-Level: TecnoServicios Globales S.A.
            </h2>
            <p className="modal-subtitle">
              Resumen consolidado para la Junta Directiva y Comité de Transformación ITIL 4
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} title="Cerrar">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Key Metrics Grid */}
          <div className="report-metrics-grid">
            <div className="report-metric-card">
              <span className="report-lbl">CUMPLIMIENTO SLA</span>
              <strong className="report-val text-mint">99.2%</strong>
              <span className="report-sub">De 54.2% a 99.2% (+45.2 pts)</span>
            </div>

            <div className="report-metric-card">
              <span className="report-lbl">TIEMPO MTTR</span>
              <strong className="report-val text-purple">2.4 hrs</strong>
              <span className="report-sub">Reducción del -91.6% (Antes: 28.6h)</span>
            </div>

            <div className="report-metric-card">
              <span className="report-lbl">SATISFACCIÓN (CSAT)</span>
              <strong className="report-val text-mint">4.85 / 5.0</strong>
              <span className="report-sub">97% Aprobación (+72 NPS)</span>
            </div>

            <div className="report-metric-card">
              <span className="report-lbl">ÉXITO EN CAMBIOS</span>
              <strong className="report-val text-purple">98.7%</strong>
              <span className="report-sub">Reducción de fallos del 42% a 1.3%</span>
            </div>

            <div className="report-metric-card">
              <span className="report-lbl">HORAS DEVUELTAS</span>
              <strong className="report-val text-mint">+1,420 h/mes</strong>
              <span className="report-sub">Retrabajo disminuyó a 3.2%</span>
            </div>

            <div className="report-metric-card">
              <span className="report-lbl">ROI DE ADOPCIÓN</span>
              <strong className="report-val text-purple">320%</strong>
              <span className="report-sub">Ahorro mensual: $84,000 USD</span>
            </div>
          </div>

          {/* Executive Synthesis */}
          <div className="report-narrative-box">
            <h4 className="report-section-heading">Resumen Ejecutivo para el Comité Directivo</h4>
            <p>
              {reinforcingView.executiveSummary.narrative}
            </p>
            <p>
              El modelado en dinámica de sistemas confirma que los 7 Principios Rectores no son pasos secuenciales estáticos, sino catalizadores que alimentan el Bucle Virtuoso R1. La coordinación armónica de las 4 Dimensiones del Servicio eliminó por completo los cuellos de botella interdepartamentales.
            </p>
          </div>

          {/* Validation Box */}
          <div className="report-validation-row">
            <div className="report-dictum-pill">
              <CheckCircle2 size={16} className="text-mint" />
              <span>
                <strong>Dictamen Favorable ITSM:</strong> Auditado por C-Suite & PMO Global.
              </span>
            </div>
            <span className="badge badge-mint">
              Validado por PMO
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
          <div className="modal-actions-right">
            <button className="btn btn-secondary" onClick={handlePrint}>
              <Printer size={15} />
              Imprimir / PDF
            </button>
            <button className="btn btn-purple" onClick={handleDownload}>
              <Download size={15} />
              Descargar Archivo Oficial (.HTML)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
