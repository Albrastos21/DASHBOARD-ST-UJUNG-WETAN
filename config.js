/**
 * Konfigurasi sumber data dashboard
 *
 * LOKAL (start.bat):
 *   dataUrl: 'data.json'
 *
 * GITHUB (publik):
 *   1. Upload data.json ke Releases (tag v1)
 *   2. Isi URL di bawah, contoh:
 *      dataUrl: 'https://github.com/USERNAME/dashboard-st-2026/releases/download/v1/data.json'
 *   3. Commit & push config.js, lalu buka GitHub Pages
 *
 * CLOUDFLARE R2:
 *   dataUrl: 'https://pub-xxxx.r2.dev/data.json'
 */
window.DASHBOARD_CONFIG = {
  dataUrl: 'https://github.com/Albrastos21/DASHBOARD-ST-UJUNG-WETAN/releases/download/V1/data.json',
};
