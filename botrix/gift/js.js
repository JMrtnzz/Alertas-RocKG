(function () {
  document.documentElement.style.background = 'transparent';
  document.body.style.background = 'transparent';

  function dedupeName() {
    var line1 = document.querySelector('.rockg-line1');
    var line2 = document.querySelector('.rockg-line2');
    if (!line1 || !line2) return;

    var name = line2.textContent.trim();
    if (!name) return;

    if (line2.textContent.trim() === name + name) {
      line2.textContent = name;
    }

    var headline = line1.textContent.trim();
    if (headline !== name && headline.indexOf(name) !== -1) {
      line1.textContent = headline.replace(name, '').replace(/\s+/g, ' ').trim();
    }
  }

  function fixLayout() {
    var frame = document.querySelector('.rockg-frame');
    if (!frame) return;

    var media = frame.querySelector('.alert-media-container');
    var text = frame.querySelector('.alert-text-container');
    if (media) {
      media.style.float = 'none';
      media.style.width = '110px';
      media.style.height = '110px';
    }
    if (text) {
      text.style.float = 'none';
      text.style.width = 'auto';
    }

    var imgs = frame.querySelectorAll('.alert-media img, .rockg-media img');
    imgs.forEach(function (img) {
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.style.setProperty('width', '72px', 'important');
      img.style.setProperty('height', '72px', 'important');
      img.style.setProperty('max-width', '72px', 'important');
      img.style.setProperty('max-height', '72px', 'important');
      img.style.setProperty('object-fit', 'contain', 'important');
      img.style.setProperty('object-position', 'center', 'important');
    });

    dedupeName();
  }

  fixLayout();

  var msg = document.getElementById('custom-message');
  if (msg && !msg.textContent.trim()) msg.style.display = 'none';

  var observer = new MutationObserver(fixLayout);
  var root = document.querySelector('.container.rockg-alert');
  if (root) observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true });
})();
