export const TABS = [
  { id: "dashboard", label: "Tableau de bord", icon: "🏠" },
  { id: "stocks", label: "Stocks", icon: "📦" },
  { id: "production", label: "Production", icon: "🍫" },
  { id: "recettes", label: "Recettes", icon: "📖" },
  { id: "ventes", label: "Ventes", icon: "🛒" },
  { id: "compta", label: "Comptabilite", icon: "💶" },
  { id: "haccp", label: "HACCP", icon: "🌡️" },
];

export const colors = {
  cream: "#FDF6EC", terracotta: "#C4714A", terracottaLight: "#E8956A",
  sage: "#7A9E7E", sageDark: "#5A7A5E", brown: "#6B4C35", brownLight: "#8B6B50",
  gold: "#C9A84C", red: "#D94F4F", lightBg: "#FAF3E8", white: "#FFFFFF",
  border: "#E8D5BB", textDark: "#3D2B1A", textMid: "#6B5040", textLight: "#9A7D65",
};

export const initialData = {
  stocks: [
    { id: 1, nom: "Beurre AOP", lot: "BTR-2024-045", quantite: 2.5, unite: "kg", ddm: "2025-08-01", dateReception: "2025-06-10", prixAchat: 18.5, fournisseur: "La Ferme Dupont", facture: "" },
    { id: 2, nom: "Creme Bresse", lot: "CRM-2024-112", quantite: 1, unite: "L", ddm: "2025-06-25", dateReception: "2025-06-12", prixAchat: 4.2, fournisseur: "Laiterie Bresse", facture: "" },
    { id: 3, nom: "Miel Acacia", lot: "MIL-2024-008", quantite: 3, unite: "kg", ddm: "2027-01-01", dateReception: "2025-05-20", prixAchat: 22.0, fournisseur: "Ruche Martin", facture: "" },
    { id: 4, nom: "Chocolat noir 70%", lot: "CHO-2024-089", quantite: 5, unite: "kg", ddm: "2026-03-15", dateReception: "2025-06-01", prixAchat: 14.8, fournisseur: "Valrhona", facture: "" },
  ],
  productions: [
    { id: 1, produit: "Caramels au miel", lot: "CAR-2025-001", date: "2025-06-10", ddm: "2025-09-10", quantiteProduite: 80, unite: "pieces", ingredients: ["Miel Acacia", "Creme Bresse", "Beurre AOP"], notes: "RAS" },
    { id: 2, produit: "Chocolats fourres", lot: "CHF-2025-002", date: "2025-06-12", ddm: "2025-08-12", quantiteProduite: 120, unite: "pieces", ingredients: ["Chocolat noir 70%", "Creme Bresse"], notes: "Lot parfait" },
  ],
  recettes: [
    { id: 1, nom: "Caramels au miel", ingredients: [{ nom: "Miel Acacia", quantite: 200, unite: "g", prixKg: 22 }, { nom: "Creme Bresse", quantite: 100, unite: "mL", prixL: 4.2 }, { nom: "Beurre AOP", quantite: 50, unite: "g", prixKg: 18.5 }], rendement: 80, unite: "pieces", prixVente: 1.5, protocole: "1. Chauffer le miel a 120C.\n2. Ajouter la creme chaude.\n3. Incorporer le beurre.\n4. Couler en cadre et decouper." },
    { id: 2, nom: "Chocolats fourres", ingredients: [{ nom: "Chocolat noir 70%", quantite: 300, unite: "g", prixKg: 14.8 }, { nom: "Creme Bresse", quantite: 80, unite: "mL", prixL: 4.2 }], rendement: 40, unite: "pieces", prixVente: 2.0, protocole: "1. Temperer le chocolat.\n2. Mouler les coques.\n3. Garnir de ganache.\n4. Fermer et demouler." },
  ],
  ventes: [
    { id: 1, date: "2025-06-07", marche: "Marche de Lyon", produit: "Caramels au miel", quantite: 30, prixUnitaire: 1.5, total: 45 },
    { id: 2, date: "2025-06-07", marche: "Marche de Lyon", produit: "Chocolats fourres", quantite: 20, prixUnitaire: 2.0, total: 40 },
    { id: 3, date: "2025-06-14", marche: "Marche de Bourg", produit: "Caramels au miel", quantite: 25, prixUnitaire: 1.5, total: 37.5 },
    { id: 4, date: "2025-06-14", marche: "Marche de Bourg", produit: "Marshmallows", quantite: 15, prixUnitaire: 1.8, total: 27 },
  ],
  comptaEntrees: [
    { id: 1, date: "2025-06-07", libelle: "Ventes marche Lyon", montant: 85, categorie: "Ventes marche" },
    { id: 2, date: "2025-06-14", libelle: "Ventes marche Bourg", montant: 64.5, categorie: "Ventes marche" },
  ],
  comptaSorties: [
    { id: 1, date: "2025-06-10", libelle: "Achat beurre AOP x5kg", montant: 92.5, categorie: "Matieres premieres", fournisseur: "La Ferme Dupont" },
    { id: 2, date: "2025-06-12", libelle: "Achat chocolat Valrhona", montant: 74, categorie: "Matieres premieres", fournisseur: "Valrhona" },
  ],
  temperatures: [
    { id: 1, date: "2025-06-15", heure: "08:00", appareil: "Refrigerateur 1", temperature: 4.2, operateur: "Laure", conforme: true },
    { id: 2, date: "2025-06-15", heure: "08:00", appareil: "Congelateur", temperature: -18.5, operateur: "Laure", conforme: true },
    { id: 3, date: "2025-06-14", heure: "08:00", appareil: "Refrigerateur 1", temperature: 5.8, operateur: "Laure", conforme: true },
  ],
  nettoyages: [
    { id: 1, date: "2025-06-14", zone: "Plan de travail", produit: "Desinfectant cuisine", operateur: "Laure", fait: true },
    { id: 2, date: "2025-06-14", zone: "Four", produit: "Degraissant", operateur: "Laure", fait: true },
    { id: 3, date: "2025-06-21", zone: "Plan de travail", produit: "Desinfectant cuisine", operateur: "Laure", fait: false },
    { id: 4, date: "2025-06-21", zone: "Refrigerateur 1", produit: "Desinfectant alimentaire", operateur: "Laure", fait: false },
  ],
};

export function getDaysUntil(dateStr) {
  const today = new Date();
  const d = new Date(dateStr);
  return Math.ceil((d - today) / (1000 * 60 * 60 * 24));
}

export function formatDate(dateStr) {
  if (!dateStr) return "-";
  return new Date(dateStr).toLocaleDateString("fr-FR");
}

export function getDDMBadge(dateStr) {
  const days = getDaysUntil(dateStr);
  if (days < 0) return <span className="badge badge-red">Expire</span>;
  if (days <= 7) return <span className="badge badge-red">Urgent {days}j</span>;
  if (days <= 30) return <span className="badge badge-orange">{days}j</span>;
  return <span className="badge badge-green">{days}j</span>;
}

export function calcCoutRecette(recette) {
  let cout = 0;
  recette.ingredients.forEach(ing => {
    if (ing.prixKg) cout += (ing.quantite / 1000) * ing.prixKg;
    else if (ing.prixL) cout += (ing.quantite / 1000) * ing.prixL;
  });
  return cout;
}

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Nunito:wght@300;400;500;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Nunito', sans-serif; background: #FAF3E8; color: #3D2B1A; }
  .app { display: flex; min-height: 100vh; }
  .sidebar { width: 220px; min-height: 100vh; background: #6B4C35; display: flex; flex-direction: column; padding: 0; position: fixed; left: 0; top: 0; z-index: 100; box-shadow: 3px 0 15px rgba(0,0,0,0.15); }
  .sidebar-logo { padding: 24px 20px; border-bottom: 1px solid rgba(255,255,255,0.1); background: linear-gradient(135deg, #C4714A, #6B4C35); }
  .sidebar-logo h1 { font-family: 'Playfair Display', serif; color: #FDF6EC; font-size: 18px; line-height: 1.3; }
  .sidebar-logo p { color: rgba(253,246,236,0.7); font-size: 11px; margin-top: 4px; }
  .nav-item { display: flex; align-items: center; gap: 10px; padding: 13px 20px; cursor: pointer; transition: all 0.2s; color: rgba(253,246,236,0.75); font-size: 14px; font-weight: 500; border-left: 3px solid transparent; }
  .nav-item:hover { background: rgba(255,255,255,0.08); color: #FDF6EC; }
  .nav-item.active { background: rgba(196,113,74,0.25); color: #FDF6EC; border-left-color: #E8956A; }
  .nav-icon { font-size: 18px; width: 24px; text-align: center; }
  .main { margin-left: 220px; flex: 1; padding: 32px; }
  .page-title { font-family: 'Playfair Display', serif; font-size: 28px; color: #6B4C35; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
  .page-title span { font-size: 32px; }
  .card { background: #FFFFFF; border-radius: 16px; padding: 24px; border: 1px solid #E8D5BB; box-shadow: 0 2px 12px rgba(107,76,53,0.07); margin-bottom: 20px; }
  .card-title { font-family: 'Playfair Display', serif; font-size: 17px; color: #6B4C35; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #E8D5BB; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .stat-card { background: #FFFFFF; border-radius: 14px; padding: 20px; border: 1px solid #E8D5BB; display: flex; flex-direction: column; gap: 6px; }
  .stat-label { font-size: 12px; color: #9A7D65; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
  .stat-value { font-size: 28px; font-weight: 700; color: #6B4C35; }
  .stat-sub { font-size: 12px; color: #6B5040; }
  .btn { padding: 9px 18px; border-radius: 10px; font-family: 'Nunito', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none; display: inline-flex; align-items: center; gap: 6px; }
  .btn-primary { background: #C4714A; color: white; }
  .btn-primary:hover { background: #E8956A; }
  .btn-sage { background: #7A9E7E; color: white; }
  .btn-sage:hover { background: #5A7A5E; }
  .btn-outline { background: transparent; border: 1.5px solid #E8D5BB; color: #6B5040; }
  .btn-sm { padding: 6px 12px; font-size: 12px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 10px 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; color: #9A7D65; border-bottom: 1px solid #E8D5BB; font-weight: 700; }
  td { padding: 11px 12px; border-bottom: 1px solid #F5EAD8; color: #3D2B1A; }
  tr:hover td { background: #FAF3E8; }
  tr:last-child td { border-bottom: none; }
  .badge { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; display: inline-block; }
  .badge-green { background: #E8F5E9; color: #388E3C; }
  .badge-orange { background: #FFF3E0; color: #E65100; }
  .badge-red { background: #FFEBEE; color: #C62828; }
  .badge-blue { background: #E3F2FD; color: #1565C0; }
  .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .form-group { display: flex; flex-direction: column; gap: 5px; }
  .form-group label { font-size: 12px; font-weight: 700; color: #6B5040; text-transform: uppercase; letter-spacing: 0.4px; }
  .form-group input, .form-group select, .form-group textarea { padding: 9px 12px; border: 1.5px solid #E8D5BB; border-radius: 10px; font-family: 'Nunito', sans-serif; font-size: 13px; color: #3D2B1A; background: #FDF6EC; outline: none; }
  .form-group textarea { resize: vertical; min-height: 80px; }
  .alert { padding: 12px 16px; border-radius: 10px; font-size: 13px; display: flex; align-items: flex-start; gap: 10px; margin-bottom: 8px; }
  .alert-red { background: #FFEBEE; border: 1px solid #FFCDD2; color: #B71C1C; }
  .alert-orange { background: #FFF3E0; border: 1px solid #FFE0B2; color: #E65100; }
  .alert-green { background: #E8F5E9; border: 1px solid #C8E6C9; color: #1B5E20; }
  .alert-icon { font-size: 16px; }
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }
  .modal { background: white; border-radius: 20px; padding: 28px; width: 100%; max-width: 600px; max-height: 85vh; overflow-y: auto; }
  .modal-title { font-family: 'Playfair Display', serif; font-size: 20px; color: #6B4C35; margin-bottom: 20px; }
  .modal-actions { display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px; padding-top: 16px; border-top: 1px solid #E8D5BB; }
  .tab-row { display: flex; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
  .tab-btn { padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: 1.5px solid #E8D5BB; background: white; color: #6B5040; }
  .tab-btn.active { background: #C4714A; color: white; border-color: #C4714A; }
  .chart-bar-container { display: flex; align-items: flex-end; gap: 8px; height: 160px; padding-bottom: 8px; }
  .chart-bar-wrap { display: flex; flex-direction: column; align-items: center; gap: 4px; flex: 1; }
  .chart-bar { width: 100%; border-radius: 6px 6px 0 0; min-height: 4px; }
  .chart-label { font-size: 10px; color: #9A7D65; text-align: center; }
  .chart-value { font-size: 10px; font-weight: 700; color: #6B5040; }
  .progress-bar { background: #E8D5BB; border-radius: 10px; height: 8px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 10px; }
  .ddm-urgent { color: #D94F4F; font-weight: 700; }
  .ddm-warn { color: #E65100; font-weight: 600; }
  .section-actions { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
  .divider { height: 1px; background: #E8D5BB; margin: 16px 0; }
  .recette-card { background: #FDF6EC; border-radius: 14px; padding: 20px; border: 1px solid #E8D5BB; margin-bottom: 16px; }
  .recette-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .recette-nom { font-family: 'Playfair Display', serif; font-size: 18px; color: #6B4C35; }
  .margin-badge { padding: 4px 12px; border-radius: 20px; font-weight: 700; font-size: 13px; }
  .temp-conforme { color: #388E3C; font-weight: 700; }
  .temp-nonconforme { color: #D94F4F; font-weight: 700; }
`;
