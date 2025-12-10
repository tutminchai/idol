/* =========================================================
   WebAR Main Script (Readable Version)
   Author: Jasmin / ChatGPT Co-build
   Version: 1.0
   ========================================================= */

(function () {

  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  const hintEl = document.getElementById('deviceHint');

  if (!hintEl) return;

  if (isAndroid) {
    hintEl.innerHTML = `
      <span class="tag">Android</span>
      ・請使用 Chrome 瀏覽器開啟本頁面。<br />
      ・點選 AR 圖示即可開啟 Google Scene Viewer 放置模型。
    `;
  }
  else if (isIOS) {
    hintEl.innerHTML = `
      <span class="tag">iOS</span>
      ・建議使用 Safari 開啟本頁面。<br />
      ・若點擊 AR 只出現 3D，請確認是否提供 .usdz 檔。
    `;
  }
  else {
    hintEl.innerHTML = `
      <span class="tag">桌機 / 其他裝置</span>
      ・建議用手機掃描 QR Code 開啟。<br />
      ・桌機僅支援 3D 預覽，不支援 AR。
    `;
  }

})();
