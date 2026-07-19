/**
 * Sumber data dashboard
 *
 * LOKAL:     dataUrl: 'data.json'
 * GITHUB:    dataUrl: 'data.json.gz'   ← file ini HARUS ada di root repo
 *
 * Catatan: jika config.js 404 di Pages, index.html otomatis fallback ke data.json.gz
 * di domain github.io — tetap disarankan upload config.js agar eksplisit.
 */
window.DASHBOARD_CONFIG = {
  dataUrl: 'data.json.gz',
};
