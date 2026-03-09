import { useState, useEffect } from "react";

const TABS = [
  { id: "dashboard", label: "Tableau de bord", icon: "🏠" },
  { id: "stocks", label: "Stocks", icon: "📦" },
  { id: "production", label: "Production", icon: "🍫" },
  { id: "recettes", label: "Recettes", icon: "📖" },
  { id: "ventes", label: "Ventes", icon: "🛒" },
  { id: "compta", label: "Comptabilité", icon: "💶" },
  { id: "haccp", label: "HACCP", icon: "🌡️" },
];

const initialData = {
  stocks: [
    { id: 1, nom: "Beurre AOP", lot: "BTR-2024-045", quantite: 2.5, unite: "kg", ddm: "2025-08-01", dateReception: "2025-06-10", prixAchat: 18.5, fournisseur: "La Ferme Dupont", facture: "" },
    { id: 2, nom: "Crème Bresse", lot: "CRM-2024-112", quantite: 1, unite: "L", ddm: "2025-06-25", dateReception: "2025-06-12", prixAchat: 4.2, fournisseur: "Laiterie Bresse", facture: "" },
    { id: 3, nom: "Miel Acacia", lot: "MIL-2024-008", quantite: 3, unite: "kg", ddm: "2027-01-01", dateReception: "2025-05-20", prixAchat: 22.0, fournisseur: "Ruche Martin", facture: "" },
    { id: 4, nom: "Chocolat noir 70%", lot: "CHO-2024-089", quantite: 5, unite: "kg", ddm: "2026-03-15", dateReception: "2025-06-01", prixAchat: 14.8, fournisseur: "Valrhona", facture: "" },
  ],
  productions: [
    { id: 1, produit: "Caramels au miel", lot: "CAR-2025-001", date: "2025-06-10", ddm: "2025-09-10", quantiteProduite: 80, unite: "pièces", ingredients: ["Miel Acacia", "Crème Bresse", "Beurre AOP"], notes: "RAS" },
    { id: 2, produit: "Chocolats fourrés", lot: "CHF-2025-002", date: "2025-06-12", ddm: "2025-08-12", quantiteProduite: 120, unite: "pièces", ingredients: ["Chocolat noir 70%", "Crème Bresse"], notes: "Lot parfait" },
  ],
  recettes: [
    { id: 1, nom: "Caramels au miel", ingredients: [{ nom: "Miel Acacia", quantite: 200, unite: "g", prixKg: 22 }, { nom: "Crème Bresse", quantite: 100, unite: "mL", prixL: 4.2 }, { nom: "Beurre AOP", quantite: 50, unite: "g", prixKg: 18.5 }], rendement: 80, unite: "pièces", prixVente: 1.5, protocole: "1. Chauffer le miel à 120°C.\n2. Ajouter la crème chaude.\n3. Incorporer le beurre.\n4. Couler en cadre et découper." },
    { id: 2, nom: "Chocolats fourrés", ingredients: [{ nom: "Chocolat noir 70%", quantite: 300, unite: "g", prixKg: 14.8 }, { nom: "Crème Bresse", quantite: 80, unite: "mL", prixL: 4.2 }], rendement: 40, unite: "pièces", prixVente: 2.0, protocole: "1. Tempérer le chocolat.\n2. Mouler les coques.\n3. Garnir de ganache.\n4. Fermer et démouler." },
  ],
  ventes: [
    { id: 1, date: "2025-06-07", marche: "Marché de Lyon", produit: "Caramels au miel", quantite: 30, prixUnitaire: 1.5, total: 45 },
    { id: 2, date: "2025-06-07", marche: "Marché de Lyon", produit: "Chocolats fourrés", quantite: 20, prixUnitaire: 2.0, total: 40 },
    { id: 3, date: "2025-06-14", marche: "Marché de Bourg", produit: "Caramels au miel", quantite: 25, prixUnitaire: 1.5, total: 37.5 },
    { id: 4, date: "2025-06-14", marche: "Marché de Bourg", produit: "Marshmallows", quantite: 15, prixUnitaire: 1.8, total: 27 },
  ],
  comptaEntrees: [
    { id: 1, date: "2025-06-07", libelle: "Ventes marché Lyon", montant: 85, categorie: "Ventes marché" },
    { id: 2, date: "2025-06-14", libelle: "Ventes marché Bourg", montant: 64.5, categorie: "Ventes marché" },
  ],
  comptaSorties: [
    { id: 1, date: "2025-06-10", libelle: "Achat beurre AOP x5kg", montant: 92.5, categorie: "Matières premières", fournisseur: "La Ferme Dupont" },
    { id: 2, date: "2025-06-12", libelle: "Achat chocolat Valrhona", montant: 74, categorie: "Matières premières", fournisseur: "Valrhona" },
  ],
  temperatures: [
    { id: 1, date: "2025-06-15", heure: "08:00", appareil: "Réfrigérateur 1", temperature: 4.2, operateur: "Laure", conforme: true },
    { id: 2, date: "2025-06-15", heure: "08:00", appareil: "Congélateur", temperature: -18.5, operateur: "Laure", conforme: true },
    { id: 3, date: "2025-06-14", heure: "08:00", appareil: "Réfrigérateur 1", temperature: 5.8, operateur: "Laure", conforme: true },
  ],
  nettoyages: [
    { id: 1, date: "2025-06-14", zone: "Plan de travail", produit: "Désinfectant cuisine", operateur: "Laure", fait: true },
    { id: 2, date: "2025-06-14", zone: "Four", produit: "Dégraissant", operateur: "Laure", fait: true },
    { id: 3, date: "2025-06-21", zone: "Plan de travail", produit: "Désinfectant cuisine", operateur: "Laure", fait: false },
    { id: 4, date: "2025-06-21", zone: "Réfrigérateur 1", produit: "Désinfectant alimentaire", operateur: "Laure", fait: false },
  ],
};

const colors = {
  cream: "#FDF6EC",
  terracotta: "#C4714A",
  terracottaLight: "#E8956A",
  sage: "#7A9E7E",
  sageDark: "#5A7A5E",
  brown: "#6B4C35",
  brownLight: "#8B6B50",
  gold: "#C9A84C",
  red: "#D94F4F",
  lightBg: "#FAF3E8",
  white: "#FFFFFF",
  border: "#E8D5BB",
  textDark: "#3D2B1A",
  textMid: "#6B5040",
  textLight: "#9A7D65",
};

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Nunito', sans-serif; background: ${colors.lightBg}; color: ${colors.textDark}; }

  .app { display: flex; min-height: 100vh; }

  .sidebar {
    width: 220px; min-height: 100vh; background: ${colors.brown};
    display: flex; flex-direction: column; padding: 0; position: fixed; left: 0; top: 0; z-index: 100;
    box-shadow: 3px 0 15px rgba(0,0,0,0.15);
  }
  .sidebar-logo {
    padding: 24px 20px; border-bottom: 1px solid rgba(255,255,255,0.1);
    background: linear-gradient(135deg, ${colors.terracotta}, ${colors.brown});
  }
  .sidebar-logo h1 { font-family: 'Playfair Display', serif; color: ${colors.cream}; font-size: 18px; line-height: 1.3; }
  .sidebar-logo p { color: rgba(253,246,236,0.7); font-size: 11px; margin-top: 4px; }

  .nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 13px 20px; cursor: pointer; transition: all 0.2s;
    color: rgba(253,246,236,0.75); font-size: 14px; font-weight: 500;
    border-left: 3px solid transparent;
  }
  .nav-item:hover { background: rgba(255,255,255,0.08); color: ${colors.cream}; }
  .nav-item.active {
    background: rgba(196,113,74,0.25); color: ${colors.cream};
    border-left-color: ${colors.terracottaLight};
  }
  .nav-icon { font-size: 18px; width: 24px; text-align: center; }

  .main { margin-left: 220px; flex: 1; padding: 32px; }

  .page-title {
    font-family: 'Playfair Display', serif; font-size: 28px; color: ${colors.brown};
    margin-bottom: 24px; display: flex; align-items: center; gap: 12px;
  }
  .page-title span { font-size: 32px; }

  .card {
    background: ${colors.white}; border-radius: 16px; padding: 24px;
    border: 1px solid ${colors.border}; box-shadow: 0 2px 12px rgba(107,76,53,0.07);
    margin-bottom: 20px;
  }
  .card-title {
    font-family: 'Playfair Display', serif; font-size: 17px; color: ${colors.brown};
    margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid ${colors.border};
  }

  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }

  .stat-card {
    background: ${colors.white}; border-radius: 14px; padding: 20px;
    border: 1px solid ${colors.border}; display: flex; flex-direction: column; gap: 6px;
  }
  .stat-label { font-size: 12px; color: ${colors.textLight}; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
  .stat-value { font-size: 28px; font-weight: 700; color: ${colors.brown}; }
  .stat-sub { font-size: 12px; color: ${colors.textMid}; }

  .btn {
    padding: 9px 18px; border-radius: 10px; font-family: 'Nunito', sans-serif;
    font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
    border: none; display: inline-flex; align-items: center; gap: 6px;
  }
  .btn-primary { background: ${colors.terracotta}; color: white; }
  .btn-primary:hover { background: ${colors.terracottaLight}; transform: translateY(-1px); }
  .btn-sage { background: ${colors.sage}; color: white; }
  .btn-sage:hover { background: ${colors.sageDark}; }
  .btn-outline { background: transparent; border: 1.5px solid ${colors.border}; color: ${colors.textMid}; }
  .btn-outline:hover { border-color: ${colors.terracotta}; color: ${colors.terracotta}; }
  .btn-sm { padding: 6px 12px; font-size: 12px; }
  .btn-danger { background: ${colors.red}; color: white; }

  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 10px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: ${colors.textLight}; border-bottom: 1px solid ${colors.border}; font-weight: 700; }
  td { padding: 11px 12px; border-bottom: 1px solid #F5EAD8; color: ${colors.textDark}; }
  tr:hover td { background: ${colors.lightBg}; }
  tr:last-child td { border-bottom: none; }

  .badge { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; display: inline-block; }
  .badge-green { background: #E8F5E9; color: #388E3C; }
  .badge-orange { background: #FFF3E0; color: #E65100; }
  .badge-red { background: #FFEBEE; color: #C62828; }
  .badge-blue { background: #E3F2FD; color: #1565C0; }
  .badge-gray { background: #F5F5F5; color: #616161; }

  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .form-group { display: flex; flex-direction: column; gap: 5px; }
  .form-group label { font-size: 12px; font-weight: 700; color: ${colors.textMid}; text-transform: uppercase; letter-spacing: 0.4px; }
  .form-group input, .form-group select, .form-group textarea {
    padding: 9px 12px; border: 1.5px solid ${colors.border}; border-radius: 10px;
    font-family: 'Nunito', sans-serif; font-size: 13px; color: ${colors.textDark};
    background: ${colors.cream}; outline: none; transition: border-color 0.2s;
  }
  .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: ${colors.terracotta}; }
  .form-group textarea { resize: vertical; min-height: 80px; }

  .alert {
    padding: 12px 16px; border-radius: 10px; font-size: 13px;
    display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px;
  }
  .alert-red { background: #FFEBEE; border: 1px solid #FFCDD2; color: #B71C1C; }
  .alert-orange { background: #FFF3E0; border: 1px solid #FFE0B2; color: #E65100; }
  .alert-green { background: #E8F5E9; border: 1px solid #C8E6C9; color: #1B5E20; }
  .alert-icon { font-size: 16px; margin-top: 1px; }

  .modal-overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 200;
    display: flex; align-items: center; justify-content: center; padding: 20px;
  }
  .modal {
    background: white; border-radius: 20px; padding: 28px; width: 100%; max-width: 600px;
    max-height: 85vh; overflow-y: auto; box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  }
  .modal-title { font-family: 'Playfair Display', serif; font-size: 20px; color: ${colors.brown}; margin-bottom: 20px; }
  .modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; padding-top: 16px; border-top: 1px solid ${colors.border}; }

  .tab-row { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
  .tab-btn { padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: 1.5px solid ${colors.border}; background: white; color: ${colors.textMid}; }
  .tab-btn.active { background: ${colors.terracotta}; color: white; border-color: ${colors.terracotta}; }

  .chart-bar-container { display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-bottom: 8px; }
  .chart-bar-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
  .chart-bar { width: 100%; border-radius: 6px 6px 0 0; min-height: 4px; transition: height 0.4s ease; }
  .chart-label { font-size: 10px; color: ${colors.textLight}; text-align: center; }
  .chart-value { font-size: 10px; font-weight: 700; color: ${colors.textMid}; }

  .progress-bar { background: ${colors.border}; border-radius: 10px; height: 8px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 10px; transition: width 0.4s ease; }

  .ddm-urgent { color: ${colors.red}; font-weight: 700; }
  .ddm-warn { color: #E65100; font-weight: 600; }

  .section-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .divider { height: 1px; background: ${colors.border}; margin: 16px 0; }

  .recette-card {
    background: ${colors.cream}; border-radius: 14px; padding: 20px;
    border: 1px solid ${colors.border}; margin-bottom: 16px;
  }
  .recette-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .recette-nom { font-family: 'Playfair Display', serif; font-size: 18px; color: ${colors.brown}; }
  .margin-badge { padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 13px; }

  .temp-conforme { color: #388E3C; font-weight: 700; }
  .temp-nonconforme { color: ${colors.red}; font-weight: 700; }

  .empty-state { text-align: center; padding: 40px 20px; color: ${colors.textLight}; }
  .empty-state .empty-icon { font-size: 48px; margin-bottom: 12px; }
  .empty-state p { font-size: 14px; }
`;

// ============ HELPERS ============
function getDaysUntil(dateStr) {
  const today = new Date();
  const d = new Date(dateStr);
  return Math.ceil((d - today) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("fr-FR");
}

function getDDMBadge(dateStr) {
  const days = getDaysUntil(dateStr);
  if (days < 0) return <span className="badge badge-red">Expiré</span>;
  if (days <= 7) return <span className="badge badge-red">⚠️ {days}j</span>;
  if (days <= 30) return <span className="badge badge-orange">{days}j</span>;
  return <span className="badge badge-green">{days}j</span>;
}

function calcCoutRecette(recette) {
  let cout = 0;
  recette.ingredients.forEach(ing => {
    if (ing.prixKg) cout += (ing.quantite / 1000) * ing.prixKg;
    else if (ing.prixL) cout += (ing.quantite / 1000) * ing.prixL;
  });
  return cout;
}

// ============ DASHBOARD ============
function Dashboard({ data }) {
  const today = new Date();
  const urgentDDM = data.stocks.filter(s => getDaysUntil(s.ddm) <= 14);
  const nettoyagesAFaire = data.nettoyages.filter(n => !n.fait);
  const caTotal = data.ventes.reduce((s, v) => s + v.total, 0);
  const depenses = data.comptaSorties.reduce((s, d) => s + d.montant, 0);

  const marcheCA = {};
  data.ventes.forEach(v => { marcheCA[v.marche] = (marcheCA[v.marche] || 0) + v.total; });
  const topMarche = Object.entries(marcheCA).sort((a, b) => b[1] - a[1])[0];

  return (
    <div>
      <div className="page-title"><span>🏠</span> Tableau de bord</div>

      <div className="grid-4" style={{ marginBottom: 20 }}>
        <div className="stat-card">
          <div className="stat-label">CA total</div>
          <div className="stat-value">{caTotal.toFixed(0)} €</div>
          <div className="stat-sub">Toutes ventes confondues</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Dépenses</div>
          <div className="stat-value" style={{ color: colors.red }}>{depenses.toFixed(0)} €</div>
          <div className="stat-sub">Achats matières premières</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Résultat net</div>
          <div className="stat-value" style={{ color: colors.sage }}>{(caTotal - depenses).toFixed(0)} €</div>
          <div className="stat-sub">CA - dépenses</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Top marché</div>
          <div className="stat-value" style={{ fontSize: 18, marginTop: 4 }}>{topMarche ? topMarche[0].split(" de ")[1] : "-"}</div>
          <div className="stat-sub">{topMarche ? topMarche[1].toFixed(0) + " € de CA" : ""}</div>
        </div>
      </div>

      <div className="grid-2">
        <div>
          <div className="card">
            <div className="card-title">🚨 Alertes DDM / DLC</div>
            {urgentDDM.length === 0 ? (
              <div className="alert alert-green"><span className="alert-icon">✅</span> Tous les stocks sont dans les délais.</div>
            ) : urgentDDM.map(s => (
              <div key={s.id} className={`alert ${getDaysUntil(s.ddm) < 0 ? "alert-red" : "alert-orange"}`}>
                <span className="alert-icon">⚠️</span>
                <div><strong>{s.nom}</strong> (lot {s.lot}) — {getDaysUntil(s.ddm) < 0 ? "Expiré !" : `Expire dans ${getDaysUntil(s.ddm)} jours`} ({formatDate(s.ddm)})</div>
              </div>
            ))}
          </div>

          <div className="card">
            <div className="card-title">🧹 Nettoyages à prévoir</div>
            {nettoyagesAFaire.length === 0 ? (
              <div className="alert alert-green"><span className="alert-icon">✅</span> Aucun nettoyage en attente.</div>
            ) : nettoyagesAFaire.map(n => (
              <div key={n.id} className="alert alert-orange">
                <span className="alert-icon">🧴</span>
                <div><strong>{n.zone}</strong> — prévu le {formatDate(n.date)} ({n.produit})</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="card">
            <div className="card-title">📊 Activité stocks</div>
            {data.stocks.slice(0, 5).map(s => {
              const days = getDaysUntil(s.ddm);
              const pct = Math.max(0, Math.min(100, (days / 90) * 100));
              return (
                <div key={s.id} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: colors.textDark }}>{s.nom}</span>
                    <span style={{ fontSize: 12, color: colors.textLight }}>{s.quantite} {s.unite}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${pct}%`, background: days < 14 ? colors.red : days < 30 ? "#E65100" : colors.sage }}></div>
                  </div>
                  <div style={{ fontSize: 11, color: colors.textLight, marginTop: 3 }}>DDM : {formatDate(s.ddm)} ({days}j)</div>
                </div>
              );
            })}
          </div>

          <div className="card">
            <div className="card-title">📦 Dernières productions</div>
            <table>
              <thead><tr><th>Produit</th><th>Lot</th><th>Date</th><th>DDM</th></tr></thead>
              <tbody>
                {data.productions.map(p => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 600 }}>{p.produit}</td>
                    <td><code style={{ fontSize: 11 }}>{p.lot}</code></td>
                    <td>{formatDate(p.date)}</td>
                    <td>{getDDMBadge(p.ddm)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ STOCKS ============
function Stocks({ data, setData }) {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ nom: "", lot: "", quantite: "", unite: "kg", ddm: "", dateReception: new Date().toISOString().split("T")[0], prixAchat: "", fournisseur: "", facture: "" });

  const addStock = () => {
    const newItem = { ...form, id: Date.now(), quantite: parseFloat(form.quantite), prixAchat: parseFloat(form.prixAchat) };
    setData(d => ({ ...d, stocks: [...d.stocks, newItem] }));
    setShowModal(false);
    setForm({ nom: "", lot: "", quantite: "", unite: "
      };

  const deleteStock = (id) => setData(d => ({ ...d, stocks: d.stocks.filter(s => s.id !== id) }));

  return (
    <div>
      <div className="page-title"><span>📦</span> Gestion des stocks</div>

      <div className="card">
        <div className="section-actions">
          <div className="card-title" style={{ margin: 0, border: "none", padding: 0 }}>Ingrédients en stock</div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Nouvelle réception</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Ingrédient</th><th>N° Lot</th><th>Quantité</th><th>DDM / DLC</th>
              <th>Réception</th><th>Prix achat</th><th>Fournisseur</th><th>Statut</th><th></th>
            </tr>
          </thead>
          <tbody>
            {data.stocks.map(s => (
              <tr key={s.id}>
                <td style={{ fontWeight: 600 }}>{s.nom}</td>
                <td><code style={{ fontSize: 11, background: "#F5EAD8", padding: "2px 6px", borderRadius: 4 }}>{s.lot}</code></td>
                <td>{s.quantite} {s.unite}</td>
                <td className={getDaysUntil(s.ddm) <= 7 ? "ddm-urgent" : getDaysUntil(s.ddm) <= 30 ? "ddm-warn" : ""}>{formatDate(s.ddm)}</td>
                <td>{formatDate(s.dateReception)}</td>
                <td>{s.prixAchat} €/{s.unite}</td>
                <td>{s.fournisseur}</td>
                <td>{getDDMBadge(s.ddm)}</td>
                <td><button className="btn btn-outline btn-sm" onClick={() => deleteStock(s.id)}>🗑</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-title">📥 Nouvelle réception d'ingrédient</div>
            <div className="form-grid">
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label>Nom de l'ingrédient</label>
                <input value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="ex: Beurre AOP" />
              </div>
              <div className="form-group">
                <label>N° de lot</label>
                <input value={form.lot} onChange={e => setForm({ ...form, lot: e.target.value })} placeholder="ex: BTR-2025-001" />
              </div>
ut) { setForm(f => ({ ...f, ingredients: [...f.ingredients, ingInput] })); setIngInput(""); }
  };

  return (
    <div>
      <div className="page-title"><span>🍫</span> Suivi de production</div>

      <div className="card">
        <div className="section-actions">
          <div className="card-title" style={{ margin: 0, border: "none", padding: 0 }}>Lots produits</div>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>+ Nouvelle production</button>
        </div>

        <table>
          <thead>
            <tr><th>Produit</th><th>N° Lot</th><th>Date prod.</th><th>DDM</th><th>Qté</th><th>Ingrédients utilisés</th><th>Notes</th><th>Statut DDM</th></tr>
          </thead>
          <tbody>
            {data.productions.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600 }}>{p.produit}</td>
                <td><code style={{ fontSize: 11, background: "#F5EAD8", padding: "2px 6px", borderRadius: 4 }}>{p.lot}</code></td>
                <td>{formatDate(p.date)}</td>
                <td className={getDaysUntil(p.ddm) <= 14 ? "ddm-urgent" : ""}>{formatDate(p.ddm)}</td>
                <td>{p.quantiteProduite} {p.unite}</td>
                <td style={{ fontSize: 12 }}>{p.ingredients.join(", ")}</td>
                <td style={{ fontSize: 12, color: colors.textLight }}>{p.notes}</td>
                <td>{getDDMBadge(p.ddm)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-title">🏭 Nouvelle fiche de production</div>
            <div className="form-grid">
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label>Produit fabriqué</label>
                <input value={form.produit} onChange={e => setForm({ ...form, produit: e.target.value })} placeholder="ex: Caramels au miel" />
              </div>
              <div className="form-group">
                <label>N° de lot produit</label>
                <input value={form.lot} onChange={e => setForm({ ...form, lot: e.target.value })} placeholder="ex: CAR-2025-003" />
              </div>
              <div className="form-group">
                <label>Date de production</label>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
              <div className="form-group">
                <label>DDM du produit</label>
                <input type="date" value={form.ddm} onChange={e => setForm({ ...form, ddm: e.target.value })} />
              </div>
              <div className="form-group">
                <label>Quantité produite</label>
                <input type="number" value={form.quantiteProduite} onChange={e => setForm({ ...form, quantiteProduite: e.target.value })} />
              </div>
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label>Ingrédients utilisés (traçabilité)</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <select value={ingInput} onChange={e => setIngInput(e.target.value)} style={{ flex: 1, padding: "9px 12px", borderRadius: 10, border: `1.5px solid ${colors.border}`, background: colors.cream, fontFamily: "Nunito, sans-serif" }}>
                    <option value="">-- Choisir un ingrédient --</option>
                    {data.stocks.map(s => <option key={s.id} value={s.nom}>{s.nom} (lot {s.lot})</option>)}
                  </select>
                  <button className="btn btn-sage" onClick={addIng}>Ajouter</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                  {form.ingredients.map((ing, i) => (
                    <span key={i} className="badge badge-blue">{ing} <span style={{ cursor: "pointer" }} onClick={() => setForm(f => ({ ...f, ingredients: f.ingredients.filter((_, j) => j !== i) }))}>×</span></span>
                  ))}
                </div>
              </div>
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <label>Notes / observations</label>
                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Observations sur la production..." />
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Annuler</button>
              <button className="btn btn-primary" onClick={addProd}>✅ Enregistrer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ RECETTES ============
function Recettes({ data, setData }) {
  const [selected, setSelected] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ nom: "", ingredients: [], rendement: "", unite: "pièces", prixVente: "", protocole: "" });
  const [ingForm, setIngForm] = useState({ nom: "", quantite: "", unite: "g", prixKg: "" });

  const addIngredient = () => {
    setForm(f => ({ ...f, ingredients: [...f.ingredients, { ...ingForm, quantite: parseFloat(ingForm.quantite), prixKg: parseFloat(ingForm.prixKg) }] }));
    setIngForm({ nom: "", quantite: "", unite: "g", prixKg: "" });
  };

  const saveRecette = () => {
    setData(d => ({ ...d, recettes: [...d.recettes, { ...form, id: Date.now(), rendement: parseFloat(form.rendement), prixVente: parseFloat(form.prixVente) }] }));
    setShowModal(false);
    setForm({ nom: "", ingredients: [], rendement: "", unite: "pièces", prixVente: "", protocole: "" });
  };
              
