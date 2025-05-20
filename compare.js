class ProductCompare {
  constructor() {
    this.compareItems = new Map();
    this.maxItems = 3;
    this.init();
  }

  init() {
    this.initComparePanel();
    this.initCompareModal();
    
    // Gérer le clic sur le bouton "Comparer les produits"
    document.getElementById('compare-products')?.addEventListener('click', () => {
      this.showComparison();
    });
  }

  showComparison() {
    const modal = document.getElementById('compare-modal');
    if (!modal) return;

    const comparisonTable = this.generateComparisonTable();
    const tableContainer = modal.querySelector('.comparison-table');
    if (tableContainer) {
      tableContainer.innerHTML = comparisonTable;
    }

    modal.classList.add('active');
  }

  generateComparisonTable() {
    const products = Array.from(this.compareItems.values());
    if (products.length === 0) return '';

    return `
      <table class="comparison-table">
        <tr>
          <th>Image</th>
          ${products.map(p => `
            <td>
              <img src="${p.image}" alt="${p.name}" class="comparison-image">
            </td>
          `).join('')}
        </tr>
        <tr>
          <th>Nom</th>
          ${products.map(p => `<td>${p.name}</td>`).join('')}
        </tr>
        <tr>
          <th>Prix</th>
          ${products.map(p => `<td>${p.price}</td>`).join('')}
        </tr>
        <tr>
          <th>Action</th>
          ${products.map(p => `
            <td>
              <button class="view-product-btn" onclick="window.location.href='./details.html?id=${p.id}'">
                Voir le produit
              </button>
            </td>
          `).join('')}
        </tr>
      </table>
    `;
  }

  initCompareModal() {
    // Créer le modal s'il n'existe pas
    if (!document.getElementById('compare-modal')) {
      const modalHTML = `
        <div id="compare-modal" class="compare-modal">
          <div class="compare-modal-content">
            <div class="modal-header">
              <h2>Comparaison des produits</h2>
              <button class="modal-close">&times;</button>
            </div>
            <div class="comparison-table"></div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHTML);

      // Gérer la fermeture du modal
      const modal = document.getElementById('compare-modal');
      modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
  }
}

// Ajouter ces styles CSS
const additionalStyles = `
  .compare-modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1100;
    padding: 20px;
  }

  .compare-modal.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .compare-modal-content {
    background: white;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    max-width: 1000px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 15px;
    text-align: center;
    border: 1px solid #eee;
  }

  .comparison-table th {
    background: #f8f9fa;
    font-weight: 600;
  }

  .comparison-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  .view-product-btn {
    padding: 8px 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .view-product-btn:hover {
    background: #2980b9;
  }

  @media (max-width: 768px) {
    .comparison-table {
      font-size: 14px;
    }

    .comparison-image {
      width: 100px;
      height: 100px;
    }

    .view-product-btn {
      padding: 5px 10px;
      font-size: 12px;
    }
  }
`;

// Ajouter les styles au document
const styleSheet = document.createElement("style");
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Ajouter les styles nécessaires
const styles = `
  .compare-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: white;
    border: none;
    border-radius: 20px;
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    z-index: 10;
    transition: all 0.3s ease;
  }

  .compare-button:hover {
    background: #3498db;
    color: white;
    transform: translateY(-2px);
  }

  .compare-button.selected {
    background: #3498db;
    color: white;
  }

  .compare-button i {
    font-size: 14px;
  }

  .compare-button span {
    font-size: 12px;
    font-weight: 500;
  }

  .compare-panel {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 1000;
  }

  .compare-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .compare-count {
    font-weight: bold;
    color: #3498db;
  }

  #compare-products {
    padding: 8px 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #compare-products:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

// Ajouter les styles au document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Initialiser le comparateur
window.addEventListener('load', () => {
  window.productCompare = new ProductCompare();
}); 