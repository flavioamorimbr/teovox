/* Teovox — menu único do site
   Para incluir o menu em uma página, coloque antes de </body>:
     <script src="/menu.js"></script>
   Na página inicial (que já tem espaço no topo), use:
     <script src="/menu.js" data-offset="false"></script>
   Para adicionar, remover ou reordenar itens, edite só a lista LINKS abaixo. */
(function () {
  var LINKS = [
    { label: 'Início',     href: '/' },
    { label: 'Sobre',      href: '/#sobre' },
    { label: 'Estratégia', href: '/#estrategia' },
    { label: 'Serviços',   href: '/#servicos' },
    { label: 'Logos',      href: '/criacao-de-logos' },
    { label: 'Planos',     href: '/planos' },
    { label: 'Contato',    href: '/#contato' }
  ];
  var CTA = { label: 'Falar no WhatsApp', href: 'https://wa.me/5579996343621' };
  var LOGO = 'Logotipo-teovox2.png';

  var script = document.currentScript;
  var addOffset = !script || script.getAttribute('data-offset') !== 'false';

  var css = '' +
    '.tvx-nav{display:block;padding:0;position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(11,31,58,.9);' +
      '-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom:1px solid rgba(58,130,208,.18);font-family:inherit}' +
    '.tvx-nav *{box-sizing:border-box;margin:0;padding:0}' +
    '.tvx-bar{display:flex;align-items:center;justify-content:space-between;gap:24px;height:72px;padding:0 6%}' +
    '.tvx-logo img{height:32px;width:auto;display:block}' +
    '.tvx-links{list-style:none;display:flex;align-items:center;gap:2.2rem}' +
    '.tvx-links a{font-size:.9rem;color:#B0B0B0;text-decoration:none;letter-spacing:.02em;transition:color .2s}' +
    '.tvx-links a:hover,.tvx-links a[aria-current="page"]{color:#fff}' +
    '.tvx-links a[aria-current="page"]{box-shadow:inset 0 -2px 0 #3A82D0;padding-bottom:4px}' +
    '.tvx-cta{background:#2169B8;color:#fff!important;padding:.6rem 1.4rem;border-radius:100px;font-weight:500}' +
    '.tvx-cta:hover{background:#3A82D0}' +
    '.tvx-toggle{display:none;background:none;border:1px solid rgba(58,130,208,.35);border-radius:10px;width:44px;height:44px;cursor:pointer;color:#fff;align-items:center;justify-content:center}' +
    '.tvx-toggle span,.tvx-toggle span::before,.tvx-toggle span::after{display:block;width:20px;height:2px;background:currentColor;position:relative;transition:transform .2s}' +
    '.tvx-toggle span::before,.tvx-toggle span::after{content:"";position:absolute;left:0}' +
    '.tvx-toggle span::before{top:-6px}.tvx-toggle span::after{top:6px}' +
    '.tvx-open .tvx-toggle span{background:transparent}' +
    '.tvx-open .tvx-toggle span::before{transform:translateY(6px) rotate(45deg)}' +
    '.tvx-open .tvx-toggle span::after{transform:translateY(-6px) rotate(-45deg)}' +
    '.tvx-nav a:focus-visible,.tvx-toggle:focus-visible{outline:2px solid #6AAAE4;outline-offset:3px;border-radius:6px}' +
    '@media (max-width:900px){' +
      '.tvx-toggle{display:inline-flex}' +
      '.tvx-links{display:none;flex-direction:column;align-items:stretch;gap:0;padding:8px 6% 24px;border-top:1px solid rgba(58,130,208,.18)}' +
      '.tvx-open .tvx-links{display:flex}' +
      '.tvx-links a{display:block;padding:14px 0;font-size:1rem;border-bottom:1px solid rgba(255,255,255,.06)}' +
      '.tvx-links a[aria-current="page"]{box-shadow:none;color:#6AAAE4}' +
      '.tvx-links li:last-child a{border-bottom:none}' +
      '.tvx-cta{margin-top:16px;text-align:center;padding:14px 0!important}' +
      '.tvx-open{background:rgba(11,31,58,.98)}' +
    '}' +
    (addOffset ? 'body{padding-top:72px}' : '');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // página atual: "/planos" e "/planos.html" contam como a mesma página
  var path = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/') || '/';
  if (path.length > 1) path = path.replace(/\/$/, '');

  var items = LINKS.map(function (l) {
    var current = l.href.indexOf('#') === -1 && l.href === path;
    return '<li><a href="' + l.href + '"' + (current ? ' aria-current="page"' : '') + '>' + l.label + '</a></li>';
  }).join('');

  var nav = document.createElement('nav');
  nav.className = 'tvx-nav';
  nav.setAttribute('aria-label', 'Menu principal');
  nav.innerHTML =
    '<div class="tvx-bar">' +
      '<a href="/" class="tvx-logo"><img src="' + LOGO + '" alt="Teovox"></a>' +
      '<button class="tvx-toggle" type="button" aria-expanded="false" aria-controls="tvx-links" aria-label="Abrir menu"><span></span></button>' +
    '</div>';
  var ul = document.createElement('ul');
  ul.className = 'tvx-links';
  ul.id = 'tvx-links';
  ul.innerHTML = items + '<li><a class="tvx-cta" href="' + CTA.href + '" target="_blank" rel="noopener">' + CTA.label + '</a></li>';

  // no desktop os links ficam na mesma linha do logo; no celular, abaixo dela
  var bar = nav.querySelector('.tvx-bar');
  var toggle = nav.querySelector('.tvx-toggle');
  var mq = window.matchMedia('(max-width: 900px)');
  function place() {
    if (mq.matches) { nav.appendChild(ul); } else { bar.insertBefore(ul, toggle); nav.classList.remove('tvx-open'); toggle.setAttribute('aria-expanded', 'false'); }
  }
  if (mq.addEventListener) mq.addEventListener('change', place); else mq.addListener(place);
  place();

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('tvx-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  ul.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && mq.matches) {
      nav.classList.remove('tvx-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  document.body.insertBefore(nav, document.body.firstChild);
})();
