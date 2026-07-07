(function () {
  var MEDIA = 140;
  var IMG = 96;

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

  function hideEmptyAmount() {
    var wrap = document.querySelector('.rockg-amount');
    var num = document.querySelector('.rockg-amount-num');
    if (!wrap || !num) return;
    var val = num.textContent.trim();
    if (!val || val === '0' || val === '{amount}') {
      wrap.style.display = 'none';
    } else {
      wrap.style.display = '';
    }
  }

  function enforceDom() {
    var root = document.querySelector('.container.rockg-alert');
    var frame = document.querySelector('.rockg-frame');
    var msg = document.getElementById('alert-message');
    if (!frame || !msg) return;

    ['.rockg-tag', '.rockg-tier-badge', '.rockg-line1', '.rockg-line2', '.rockg-amount'].forEach(function (sel) {
      var nodes = frame.querySelectorAll(sel);
      for (var i = 0; i < nodes.length; i++) {
        if (!msg.contains(nodes[i])) {
          msg.appendChild(nodes[i]);
        }
      }
    });

    var amounts = frame.querySelectorAll('.rockg-amount');
    for (var j = 1; j < amounts.length; j++) {
      amounts[j].style.display = 'none';
    }

    var media = frame.querySelector('.alert-media-container');
    if (media) {
      var junk = media.querySelectorAll(':not(.alert-media):not(.rockg-media)');
      for (var k = 0; k < junk.length; k++) {
        if (!junk[k].closest('.alert-media') && !junk[k].classList.contains('alert-media')) {
          junk[k].style.display = 'none';
        }
      }
    }

    var textBox = frame.querySelector('.alert-text-container');
    if (textBox) {
      var orphans = textBox.querySelectorAll('h3, h4, span, div, p');
      for (var n = 0; n < orphans.length; n++) {
        var el = orphans[n];
        if (msg.contains(el) || el === msg) continue;
        if (el.id === 'custom-message' || el.classList.contains('rockg-msg') || el.classList.contains('alert-text')) continue;
        el.style.display = 'none';
      }
    }

    var legacy1 = document.getElementById('line1');
    var legacy2 = document.getElementById('line2');
    if (legacy1 && !legacy1.classList.contains('rockg-line1')) legacy1.style.display = 'none';
    if (legacy2 && !legacy2.classList.contains('rockg-line2')) legacy2.style.display = 'none';

    if (root) {
      root.style.setProperty('float', 'none', 'important');
      root.style.setProperty('display', 'flex', 'important');
    }
  }

  function fixLayout() {
    var frame = document.querySelector('.rockg-frame');
    if (!frame) return;

    frame.style.setProperty('display', 'flex', 'important');
    frame.style.setProperty('flex-wrap', 'nowrap', 'important');
    frame.style.setProperty('float', 'none', 'important');

    var media = frame.querySelector('.alert-media-container');
    var alertMedia = frame.querySelector('.alert-media');
    var text = frame.querySelector('.alert-text-container');
    if (media) {
      media.style.setProperty('float', 'none', 'important');
      media.style.setProperty('clear', 'none', 'important');
      media.style.width = MEDIA + 'px';
      media.style.height = MEDIA + 'px';
      media.style.setProperty('flex-shrink', '0', 'important');
    }
    if (alertMedia) {
      alertMedia.style.setProperty('float', 'none', 'important');
      alertMedia.style.width = MEDIA + 'px';
      alertMedia.style.height = MEDIA + 'px';
    }
    if (text) {
      text.style.setProperty('float', 'none', 'important');
      text.style.setProperty('clear', 'none', 'important');
      text.style.setProperty('flex', '1 1 auto', 'important');
      text.style.width = 'auto';
    }

    var imgs = frame.querySelectorAll('.alert-media img, .rockg-media img');
    imgs.forEach(function (img) {
      img.removeAttribute('width');
      img.removeAttribute('height');
      img.style.setProperty('width', IMG + 'px', 'important');
      img.style.setProperty('height', IMG + 'px', 'important');
      img.style.setProperty('max-width', IMG + 'px', 'important');
      img.style.setProperty('max-height', IMG + 'px', 'important');
      img.style.setProperty('object-fit', 'contain', 'important');
      img.style.setProperty('object-position', 'center', 'important');
      img.style.setProperty('float', 'none', 'important');
    });

    enforceDom();
    dedupeName();
    hideEmptyAmount();
  }

  fixLayout();

  var observer = new MutationObserver(fixLayout);
  var root = document.querySelector('.container.rockg-alert');
  if (root) observer.observe(root, { childList: true, subtree: true, characterData: true, attributes: true });
})();
