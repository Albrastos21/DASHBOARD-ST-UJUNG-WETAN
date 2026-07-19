/**
 * Sumber data dashboard
 *
 * LOKAL (start.bat):
 *   dataUrl: 'data.json'
 *
 * GITHUB PAGES (disarankan — hindari CORS):
 *   1. Upload data.json.gz ke root repo (bukan Releases)
 *   2. dataUrl: 'data.json.gz'
 *   Jangan pakai URL .../releases/download/... — browser diblokir CORS.
 *
 * Buat ulang .gz setelah update data:
 *   python compress-data.py
 */
window.DASHBOARD_CONFIG = {
  // Lokal default:
  dataUrl: 'data.json',
  // Setelah deploy GitHub Pages, GANTI menjadi:
  // dataUrl: 'data.json.gz',
};
