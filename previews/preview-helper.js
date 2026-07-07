(function () {
  if (location.search.indexOf('embed') !== -1) {
    document.documentElement.classList.add('preview-embed');
  }

  function replayAlert(container) {
    var alert = container.querySelector('.container.rockg-alert');
    if (!alert) return;
    var clone = alert.cloneNode(true);
    alert.parentNode.replaceChild(clone, alert);
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.replay-btn');
    if (!btn) return;
    var stage = btn.closest('.preview-stage, .cyber-section');
    if (stage) replayAlert(stage);
  });
})();
