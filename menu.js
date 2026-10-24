/* Teovox — menu único do site
   Para incluir o menu em uma página, coloque antes de </body>:
     <script src="/menu.js"></script>
   Na página inicial (que já tem espaço no topo), use:
     <script src="/menu.js" data-offset="false"></script>
   Para o menu claro (páginas com fundo branco), acrescente data-theme="light".
   Para adicionar, remover ou reordenar itens, edite só a lista MENU abaixo. */
(function () {
  var MENU = [
    { label: 'Serviços', items: [
      { label: 'Posicionamento & Identidade', href: '/posicionamento-e-identidade', icon: 'alvo' },
      { label: 'Presença Digital',            href: '/presenca-digital',      icon: 'tela' },
      { label: 'Atração de Clientes',         href: '/atracao-de-clientes',   icon: 'ima' },
      { label: 'Infoprodutos & Lançamentos',  href: '/infoprodutos-e-lancamentos', icon: 'capelo' },
      { label: 'Vendas Todos os Dias',        href: '/vendas-todos-os-dias',  icon: 'ciclo' },
      { label: 'Consultoria & Mentoria',      href: '/consultoria-e-mentoria', icon: 'bussola' }
    ]},
    { label: 'Para o seu negócio', items: [
      { label: 'Criação de Logo',          href: '/criacao-de-logos',         icon: 'estrela' },
      { label: 'Website por Assinatura',   href: '/website-por-assinatura',   icon: 'site' },
      { label: 'Registro de Marcas',       href: '/registro-de-marcas',       icon: 'escudo' },
      { label: 'Nomes Memoráveis',         href: '/nomes-memoraveis',         icon: 'nome' },
      { label: 'Sistemas de Gestão',       href: '/sistemas-de-gestao',       icon: 'painel' },
      { label: 'Criação de Cursos Online', href: '/criacao-de-cursos-online', icon: 'play' }
    ]}
  ];
  var CTA = { label: 'Falar no WhatsApp', href: 'https://wa.me/5579996343621' };

  var ICONS = {
    alvo: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
    tela: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M3 8h18M8 21h8M12 17v4"/>',
    ima: '<path d="M6 3v8a6 6 0 0012 0V3"/><path d="M6 7h4M14 7h4"/>',
    capelo: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    ciclo: '<path d="M20 12a8 8 0 01-14.3 4.9M4 12a8 8 0 0114.3-4.9"/><path d="M19 3v4.5h-4.5M5 21v-4.5h4.5"/>',
    bussola: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    estrela: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    site: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
    escudo: '<path d="M12 3l8 3v6c0 4.6-3.3 8.4-8 9.5C7.3 20.4 4 16.6 4 12V6z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
    nome: '<path d="M4 7V5h16v2M9 19h6M12 5v14"/>',
    painel: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    play: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor"/>'
  };
  function icon(n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[n] || '') + '</svg>';
  }

  var script = document.currentScript;
  var addOffset = !script || script.getAttribute('data-offset') !== 'false';
  var light = !!script && script.getAttribute('data-theme') === 'light';
  var LOGO = light ? 'Logotipo-teovox-escuro.png' : 'Logotipo-teovox2.png';

  /* cores dos dois temas */
  var T = light ? {
    bar: 'rgba(255,255,255,.86)', barLine: '#DDE3EB', barShadow: '0 10px 30px -24px rgba(17,45,82,.45)',
    link: '#4A5260', linkHover: '#141414', accent: '#2169B8', toggle: '#141414', toggleLine: '#DDE3EB',
    panel: '#FFFFFF', panelLine: '#E2E8F0', panelShadow: '0 30px 60px -24px rgba(17,45,82,.35),0 2px 6px rgba(17,45,82,.06)',
    item: '#1F2329', itemHover: '#EEF5FD', chip: '#EEF5FD', chipLine: 'rgba(33,105,184,.2)', chipIcon: '#1E5490',
    mobileBg: 'rgba(255,255,255,.98)', mobileLine: '#E6EBF1', focus: '#2169B8'
  } : {
    bar: 'rgba(11,31,58,.9)', barLine: 'rgba(58,130,208,.18)', barShadow: 'none',
    link: '#B0B0B0', linkHover: '#FFFFFF', accent: '#6AAAE4', toggle: '#FFFFFF', toggleLine: 'rgba(58,130,208,.35)',
    panel: '#111A28', panelLine: 'rgba(106,170,228,.2)', panelShadow: '0 30px 60px -20px rgba(0,0,0,.8)',
    item: '#E6EAF0', itemHover: 'rgba(33,105,184,.18)', chip: 'rgba(11,31,58,.9)', chipLine: 'rgba(106,170,228,.28)', chipIcon: '#A3C8F0',
    mobileBg: 'rgba(11,31,58,.98)', mobileLine: 'rgba(255,255,255,.07)', focus: '#6AAAE4'
  };

  var css = '' +
    '.tvx-nav{display:block;padding:0;position:fixed;top:0;left:0;right:0;z-index:1000;background:' + T.bar + ';' +
      '-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-bottom:1px solid ' + T.barLine + ';box-shadow:' + T.barShadow + ';font-family:inherit}' +
    '.tvx-nav *{box-sizing:border-box;margin:0;padding:0}' +
    '.tvx-bar{display:flex;align-items:center;justify-content:space-between;gap:24px;height:72px;padding:0 6%}' +
    '.tvx-logo img{height:32px;width:auto;display:block}' +
    '.tvx-links{list-style:none;display:flex;align-items:center;gap:2rem}' +
    '.tvx-top{display:inline-flex;align-items:center;gap:8px;font:inherit;font-size:.92rem;color:' + T.link + ';background:none;border:0;cursor:pointer;' +
      'text-decoration:none;letter-spacing:.02em;white-space:nowrap;height:72px;position:relative;transition:color .2s}' +
    '.tvx-top:hover,.tvx-dd.open > .tvx-top,.tvx-top.is-current{color:' + T.linkHover + '}' +
    '.tvx-top.is-current::after{content:"";position:absolute;left:0;right:22px;bottom:22px;height:2px;background:' + T.accent + ';border-radius:2px}' +
    '.tvx-chev{width:8px;height:8px;border-right:1.7px solid currentColor;border-bottom:1.7px solid currentColor;transform:translateY(-2px) rotate(45deg);transition:transform .25s}' +
    '.tvx-dd.open .tvx-chev{transform:translateY(2px) rotate(-135deg)}' +
    '.tvx-dd{position:relative}' +
    '.tvx-panel{position:absolute;top:calc(100% - 6px);left:-18px;min-width:330px;padding:10px;border-radius:18px;background:' + T.panel + ';border:1px solid ' + T.panelLine + ';' +
      'box-shadow:' + T.panelShadow + ';opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .25s,transform .3s cubic-bezier(.2,.7,.2,1),visibility 0s .3s}' +
    '.tvx-panel::before{content:"";position:absolute;left:0;right:0;top:-14px;height:14px}' +
    '.tvx-dd.open .tvx-panel{opacity:1;visibility:visible;transform:none;transition:opacity .25s,transform .3s cubic-bezier(.2,.7,.2,1),visibility 0s}' +
    '.tvx-sub{list-style:none;display:grid;gap:2px}' +
    '.tvx-item{display:flex;align-items:center;gap:14px;padding:10px 12px;border-radius:12px;color:' + T.item + ';text-decoration:none;font-size:.95rem;font-weight:500;white-space:nowrap;transition:background .2s,color .2s}' +
    '.tvx-item:hover,.tvx-item[aria-current="page"]{background:' + T.itemHover + '}' +
    '.tvx-ic{flex:none;width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:' + T.chip + ';border:1px solid ' + T.chipLine + ';color:' + T.chipIcon + ';transition:background .25s,color .25s,border-color .25s,transform .25s}' +
    '.tvx-ic svg{width:18px;height:18px}' +
    '.tvx-item:hover .tvx-ic,.tvx-item[aria-current="page"] .tvx-ic{background:#2169B8;border-color:#2169B8;color:#fff;transform:scale(1.06)}' +
    '.tvx-cta{display:inline-block;background:#2169B8;color:#fff!important;padding:.62rem 1.4rem;border-radius:100px;font-weight:500;font-size:.92rem;text-decoration:none;white-space:nowrap;transition:background .2s,transform .2s}' +
    '.tvx-cta:hover{background:' + (light ? '#174070' : '#3A82D0') + ';transform:translateY(-1px)}' +
    '.tvx-toggle{display:none;background:none;border:1px solid ' + T.toggleLine + ';border-radius:10px;width:44px;height:44px;cursor:pointer;color:' + T.toggle + ';align-items:center;justify-content:center}' +
    '.tvx-toggle span,.tvx-toggle span::before,.tvx-toggle span::after{display:block;width:20px;height:2px;background:currentColor;position:relative;transition:transform .2s}' +
    '.tvx-toggle span::before,.tvx-toggle span::after{content:"";position:absolute;left:0}' +
    '.tvx-toggle span::before{top:-6px}.tvx-toggle span::after{top:6px}' +
    '.tvx-open .tvx-toggle span{background:transparent}' +
    '.tvx-open .tvx-toggle span::before{transform:translateY(6px) rotate(45deg)}' +
    '.tvx-open .tvx-toggle span::after{transform:translateY(-6px) rotate(-45deg)}' +
    '.tvx-nav a:focus-visible,.tvx-nav button:focus-visible{outline:2px solid ' + T.focus + ';outline-offset:3px;border-radius:8px}' +
    '@media (prefers-reduced-motion:reduce){.tvx-panel,.tvx-chev,.tvx-ic{transition:none}}' +
    '@media (max-width:1100px){' +
      '.tvx-toggle{display:inline-flex}' +
      '.tvx-links{display:none;flex-direction:column;align-items:stretch;gap:0;padding:8px 6% 24px;border-top:1px solid ' + T.barLine + ';max-height:calc(100vh - 72px);overflow-y:auto}' +
      '.tvx-open .tvx-links{display:flex}' +
      '.tvx-open{background:' + T.mobileBg + '}' +
      '.tvx-links > li{border-bottom:1px solid ' + T.mobileLine + '}' +
      '.tvx-links > li:last-child{border-bottom:0}' +
      '.tvx-top{width:100%;height:auto;justify-content:space-between;padding:16px 0;font-size:1rem}' +
      '.tvx-top.is-current::after{display:none}' +
      '.tvx-top.is-current{color:' + T.accent + '}' +
      '.tvx-panel{position:static;min-width:0;padding:0 0 12px;border:0;border-radius:0;background:none;box-shadow:none;opacity:1;visibility:visible;transform:none;display:none;transition:none}' +
      '.tvx-panel::before{display:none}' +
      '.tvx-dd.open .tvx-panel{display:block}' +
      '.tvx-item{white-space:normal;padding:9px 6px}' +
      '.tvx-cta{display:block;margin-top:16px;text-align:center;padding:14px 0!important}' +
    '}' +
    (addOffset ? 'body{padding-top:72px}' : '');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // página atual: "/pagina" e "/pagina.html" contam como a mesma página
  var path = location.pathname.replace(/\.html$/, '').replace(/\/index$/, '/') || '/';
  if (path.length > 1) path = path.replace(/\/$/, '');

  var html = MENU.map(function (g, gi) {
    var groupCurrent = false;
    var sub = g.items.map(function (it) {
      var cur = it.href.indexOf('#') === -1 && it.href === path;
      if (cur) groupCurrent = true;
      return '<li><a class="tvx-item" href="' + it.href + '"' + (cur ? ' aria-current="page"' : '') + '><span class="tvx-ic">' + icon(it.icon) + '</span>' + it.label + '</a></li>';
    }).join('');
    var id = 'tvx-dd-' + gi;
    return '<li class="tvx-dd">' +
      '<button type="button" class="tvx-top' + (groupCurrent ? ' is-current' : '') + '" aria-expanded="false" aria-controls="' + id + '">' + g.label + '<span class="tvx-chev" aria-hidden="true"></span></button>' +
      '<div class="tvx-panel" id="' + id + '"><ul class="tvx-sub">' + sub + '</ul></div></li>';
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
  ul.innerHTML = html + '<li><a class="tvx-cta" href="' + CTA.href + '" target="_blank" rel="noopener">' + CTA.label + '</a></li>';

  // no desktop os links ficam na mesma linha do logo; no celular, abaixo dela
  var bar = nav.querySelector('.tvx-bar');
  var toggle = nav.querySelector('.tvx-toggle');
  var mq = window.matchMedia('(max-width: 1100px)');
  var dds = [].slice.call(ul.querySelectorAll('.tvx-dd'));

  function setOpen(dd, open) {
    dd.classList.toggle('open', open);
    dd.querySelector('.tvx-top').setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  function closeAll(except) { dds.forEach(function (d) { if (d !== except) setOpen(d, false); }); }

  function place() {
    closeAll();
    if (mq.matches) { nav.appendChild(ul); }
    else { bar.insertBefore(ul, toggle); nav.classList.remove('tvx-open'); toggle.setAttribute('aria-expanded', 'false'); }
  }
  if (mq.addEventListener) mq.addEventListener('change', place); else mq.addListener(place);
  place();

  dds.forEach(function (dd) {
    var btn = dd.querySelector('.tvx-top');
    var timer = null;
    btn.addEventListener('click', function () {
      var open = !dd.classList.contains('open');
      if (!mq.matches) closeAll(dd);
      setOpen(dd, open);
    });
    // no computador, abre ao passar o mouse
    dd.addEventListener('mouseenter', function () { if (mq.matches) return; clearTimeout(timer); closeAll(dd); setOpen(dd, true); });
    dd.addEventListener('mouseleave', function () { if (mq.matches) return; timer = setTimeout(function () { setOpen(dd, false); }, 160); });
    dd.addEventListener('focusout', function (e) { if (!mq.matches && !dd.contains(e.relatedTarget)) setOpen(dd, false); });
    dd.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dd.classList.contains('open')) { setOpen(dd, false); btn.focus(); }
    });
  });
  document.addEventListener('click', function (e) { if (!mq.matches && !ul.contains(e.target)) closeAll(); });

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('tvx-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  ul.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      closeAll();
      if (mq.matches) { nav.classList.remove('tvx-open'); toggle.setAttribute('aria-expanded', 'false'); }
    }
  });

  document.body.insertBefore(nav, document.body.firstChild);
})();
