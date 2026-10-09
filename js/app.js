/* ============================================================
   CATÁLOGO - lógica de la tienda (lo que ven los clientes)
   Los productos NO se editan aquí: están en datos/catalogo.js
   ============================================================ */
(function () {
  'use strict';

  var CAT = window.CATALOGO || { tienda: {}, categorias: [], productos: [] };
  var T = CAT.tienda || {};
  var CARPETA_FOTOS = 'imagenes/productos/';

  /* ---------- datos ---------- */
  function fotoUrl(f) { return /^(https?:|data:|\/|imagenes\/)/.test(f) ? f : CARPETA_FOTOS + f; }
  function normalizar(p) {
    return {
      id: String(p.id), name: p.nombre || '', brand: p.marca || '', cat: p.categoria, price: Number(p.precio) || 0,
      tones: (p.tonos || []).map(function (t) { return typeof t === 'string' ? { name: t, color: '' } : { name: t.nombre, color: t.color || '' }; }),
      photos: (p.fotos || []).filter(Boolean).map(fotoUrl),
      desc: p.descripcion || '', soldOut: !!p.agotado, hidden: !!p.oculto
    };
  }
  var CATS = (CAT.categorias || []).map(function (c) { return { id: c.id, name: c.nombre }; });
  var PRODS = (CAT.productos || []).map(normalizar);
  var fmt = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });

  var ui = { cat: 'all', q: '', sort: 'rel', modal: null, detail: null };
  var cart = load('cat-cart', []);
  var form = load('cat-form', { name: '', addr: '', note: '' });
  var toastTimer = null;

  /* ---------- utilidades ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function money(n) { return fmt.format(Math.round(n || 0)).replace(/ /g, ' '); }
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function byId(id) { for (var i = 0; i < PRODS.length; i++) if (PRODS[i].id === id) return PRODS[i]; return null; }
  function catName(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i].name; return ''; }
  function catIdx(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return i; return 0; }
  function initials(s) {
    var w = String(s || '?').replace(/[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9 ]/g, ' ').trim().split(/\s+/);
    return ((w[0] || '?').charAt(0) + (w[1] ? w[1].charAt(0) : '')).toUpperCase();
  }
  function waNumber() {
    var d = String(T.whatsapp || '').replace(/\D/g, '');
    return d.length === 10 ? '57' + d : d;
  }
  function phoneText() {
    var d = waNumber();
    if (d.indexOf('57') === 0 && d.length === 12) d = d.slice(2);
    return d.length === 10 ? d.slice(0, 3) + ' ' + d.slice(3, 6) + ' ' + d.slice(6) : d;
  }
  function toast(msg) {
    var t = $('toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2800);
  }
  function copyText(txt) {
    var ok = function () { toast('Copiado'); };
    var fail = function () { toast('No se pudo copiar. Selecciona el texto y cópialo.'); };
    try { navigator.clipboard.writeText(txt).then(ok, fail); } catch (e) { fail(); }
  }

  /* ---------- piezas visuales ---------- */
  function placeholder(p) {
    var h = (catIdx(p.cat) * 43 + 335) % 360;
    return '<div class="ph" style="--h:' + h + '"><span>' + esc(initials(p.brand || p.name)) + '</span></div>';
  }
  function photoHtml(p) {
    return p.photos[0] ? '<img src="' + esc(p.photos[0]) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async">' : placeholder(p);
  }
  function swatch(t) { return t.color ? '<i class="sw" style="background:' + esc(t.color) + '"></i>' : ''; }
  function tonesPreview(p) {
    var t = p.tones;
    if (!t.length) return '<div class="tprev"></div>';
    var sw = t.filter(function (x) { return x.color; }).slice(0, 6).map(swatch).join('');
    return '<div class="tprev">' + sw + '<span>' + t.length + (t.length === 1 ? ' tono' : ' tonos') + '</span></div>';
  }

  /* ---------- listado ---------- */
  function matches(p) {
    if (p.hidden) return false;
    if (ui.cat !== 'all' && p.cat !== ui.cat) return false;
    if (ui.q) {
      var hay = norm(p.name + ' ' + p.brand + ' ' + catName(p.cat));
      var terms = norm(ui.q).split(/\s+/).filter(Boolean);
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) < 0) return false;
    }
    return true;
  }
  function list() {
    var a = PRODS.filter(matches);
    if (ui.sort === 'asc') a.sort(function (x, y) { return x.price - y.price; });
    else if (ui.sort === 'desc') a.sort(function (x, y) { return y.price - x.price; });
    else if (ui.sort === 'az') a.sort(function (x, y) { return norm(x.name).localeCompare(norm(y.name)); });
    return a;
  }
  function cardHtml(p) {
    var btn;
    if (p.soldOut) btn = '<button class="btn sm" disabled>Agotado</button>';
    else if (p.tones.length) btn = '<button class="btn sm primary" data-act="open" data-id="' + esc(p.id) + '">Elegir tono</button>';
    else btn = '<button class="btn sm primary" data-act="quick" data-id="' + esc(p.id) + '">Agregar</button>';
    return '<article class="card' + (p.soldOut ? ' sold' : '') + '">' +
      '<button class="card-img" data-act="open" data-id="' + esc(p.id) + '" aria-label="Ver ' + esc(p.name) + '">' + photoHtml(p) +
      (p.photos.length > 1 ? '<span class="pcount">' + p.photos.length + ' fotos</span>' : '') +
      (p.soldOut ? '<span class="tagpill">Agotado</span>' : '') + '</button>' +
      '<div class="card-body">' +
      (p.brand ? '<p class="bl">' + esc(p.brand) + '</p>' : '') +
      '<h3 class="pname">' + esc(p.name) + '</h3>' + tonesPreview(p) +
      '<div class="card-foot"><span class="price">' + (p.price ? money(p.price) : 'Consultar') + '</span>' + btn + '</div>' +
      '</div></article>';
  }

  /* ---------- carrito ---------- */
  function cartLines() {
    var out = [];
    cart.forEach(function (l, i) {
      var p = byId(l.id);
      if (p && !p.hidden) out.push({ l: l, p: p, i: i, unit: p.price });
    });
    return out;
  }
  function cartTotals() {
    var n = 0, t = 0;
    cartLines().forEach(function (x) { n += x.l.qty; t += x.unit * x.l.qty; });
    return { n: n, t: t };
  }
  function saveCart() { save('cat-cart', cart); }
  function addToCart(id, tone, qty) {
    var found = null;
    cart.forEach(function (l) { if (l.id === id && (l.tone || '') === (tone || '')) found = l; });
    if (found) found.qty += qty; else cart.push({ id: id, tone: tone || '', qty: qty });
    saveCart(); renderHeader(); renderBar();
    toast('Agregado a tu pedido');
  }
  function waText() {
    var lines = cartLines().map(function (x) {
      return '- ' + x.l.qty + ' x ' + x.p.name + (x.p.brand ? ' (' + x.p.brand + ')' : '') +
        (x.l.tone ? ' - Tono: ' + x.l.tone : '') + ' = ' + money(x.unit * x.l.qty);
    });
    return 'Hola, quiero hacer este pedido:\n\n' + lines.join('\n') + '\n\nTotal: ' + money(cartTotals().t) +
      '\n\nNombre: ' + (form.name || '') + '\nCiudad / dirección: ' + (form.addr || '') +
      (form.note ? '\nNotas: ' + form.note : '');
  }
  function waHref() { return 'https://wa.me/' + waNumber() + '?text=' + encodeURIComponent(waText()); }
  function updateWa() { var a = $('waLink'); if (a) a.href = waHref(); }

  /* ---------- pantalla ---------- */
  function renderHeader() {
    $('storeName').textContent = T.nombre || 'Catálogo';
    var c = cartTotals().n, b = $('cartCount');
    b.textContent = c; b.hidden = c === 0;
  }
  function renderIntro() {
    $('intro').innerHTML = '<p class="tag">' + esc(T.frase || '') + '</p>' +
      '<ol class="steps"><li>Elige productos y tonos</li><li>Revisa tu pedido</li>' +
      '<li>Envíalo por WhatsApp al <b style="font-variant-numeric:tabular-nums">' + esc(phoneText()) + '</b></li></ol>';
  }
  function renderChips() {
    var vis = PRODS.filter(function (p) { return !p.hidden; });
    function n(c) { return vis.filter(function (p) { return p.cat === c; }).length; }
    var h = '<button class="chip' + (ui.cat === 'all' ? ' on' : '') + '" data-act="cat" data-id="all">Todo<small>' + vis.length + '</small></button>';
    CATS.forEach(function (c) {
      if (!n(c.id)) return;
      h += '<button class="chip' + (ui.cat === c.id ? ' on' : '') + '" data-act="cat" data-id="' + esc(c.id) + '">' + esc(c.name) + '<small>' + n(c.id) + '</small></button>';
    });
    $('chips').innerHTML = h;
  }
  function renderGrid() {
    var a = list();
    $('count').textContent = a.length === 1 ? '1 producto' : a.length + ' productos';
    $('grid').innerHTML = a.length ? a.map(cardHtml).join('') :
      '<div class="empty" style="grid-column:1/-1">No encontramos productos con esa búsqueda.</div>';
  }
  function renderFooter() {
    $('ft').innerHTML = 'Pedidos y consultas por WhatsApp: <b>' + esc(phoneText()) + '</b> · ' +
      '<a href="https://wa.me/' + waNumber() + '" target="_blank" rel="noopener">Abrir chat</a>';
  }
  function renderBar() {
    var el = $('bar'), h = '';
    var t = cartTotals();
    if (!ui.modal && t.n > 0) {
      h = '<div class="bar-in"><div class="t"><b>' + money(t.t) + '</b>' + t.n + (t.n === 1 ? ' producto' : ' productos') + ' en tu pedido</div>' +
        '<button class="btn primary" data-act="cart-open">Ver pedido</button></div>';
    }
    el.innerHTML = h;
  }
  function renderAll() { renderHeader(); renderIntro(); renderChips(); renderGrid(); renderFooter(); renderBar(); }

  /* ---------- ventanas (producto y pedido) ---------- */
  function sheetHead(title) {
    return '<div class="sheet-h"><h2>' + title + '</h2><button class="x" data-act="close" aria-label="Cerrar">×</button></div>';
  }
  function detailHtml() {
    var d = ui.detail, p = byId(d.id), photos = p.photos, tones = p.tones;
    var gal = photos.length
      ? '<div class="gal" id="gal">' + photos.map(function (s, i) { return '<img class="slide" src="' + esc(s) + '" alt="' + esc(p.name) + ' foto ' + (i + 1) + '">'; }).join('') + '</div>'
      : '<div class="gal one">' + placeholder(p) + '</div>';
    var thumbs = photos.length > 1 ? '<div class="thumbs">' + photos.map(function (s, i) {
      return '<button class="th' + (i === 0 ? ' on' : '') + '" data-act="thumb" data-i="' + i + '" aria-label="Foto ' + (i + 1) + '"><img src="' + esc(s) + '" alt=""></button>';
    }).join('') + '</div>' : '';
    var th = '';
    if (tones.length) {
      th = '<div class="lbl">Tono' + (d.tone ? ': <b>' + esc(d.tone) + '</b>' : ' <span class="req">(elige uno)</span>') + '</div><div class="tones' + (d.need ? ' need' : '') + '">' +
        tones.map(function (t, i) {
          var on = d.tone === t.name;
          return '<button type="button" class="tone' + (on ? ' on' : '') + '" data-act="tone" data-i="' + i + '" aria-pressed="' + on + '">' + swatch(t) + esc(t.name) + '</button>';
        }).join('') + '</div>';
    }
    var add = p.soldOut ? '<button class="btn block" disabled>Agotado</button>'
      : '<button class="btn primary" data-act="add">Agregar · ' + money(p.price * d.qty) + '</button>';
    return '<div class="sheet-h"><h2 class="mut">' + esc(catName(p.cat)) + '</h2><button class="x" data-act="close" aria-label="Cerrar">×</button></div>' +
      '<div class="det"><div>' + gal + thumbs + '</div><div class="info">' +
      (p.brand ? '<p class="bl">' + esc(p.brand) + '</p>' : '') + '<h2>' + esc(p.name) + '</h2>' +
      '<div class="price">' + (p.price ? money(p.price) : 'Consultar') + '</div>' +
      (p.desc ? '<p class="desc">' + esc(p.desc) + '</p>' : '') + th +
      '<div class="addrow"><div class="qty"><button data-act="q-dec" aria-label="Menos">−</button><span>' + d.qty + '</span><button data-act="q-inc" aria-label="Más">+</button></div>' + add + '</div></div></div>';
  }
  function cartHtml() {
    var ls = cartLines(), t = cartTotals();
    if (!ls.length) return sheetHead('Tu pedido') + '<div class="empty">Tu pedido está vacío.<br>Agrega productos del catálogo.</div>' +
      '<button class="btn block" data-act="close">Seguir viendo productos</button>';
    var rows = ls.map(function (x) {
      return '<div class="line"><div class="th2">' + photoHtml(x.p) + '</div><div style="min-width:0"><h3>' + esc(x.p.name) + '</h3>' +
        '<div class="sub">' + (x.p.brand ? esc(x.p.brand) : '') + (x.l.tone ? (x.p.brand ? ' · ' : '') + 'Tono: ' + esc(x.l.tone) : '') + ' · ' + money(x.unit) + ' c/u</div>' +
        '<div class="ctl"><div class="qty"><button data-act="c-dec" data-i="' + x.i + '" aria-label="Menos">−</button><span>' + x.l.qty + '</span><button data-act="c-inc" data-i="' + x.i + '" aria-label="Más">+</button></div>' +
        '<span class="lt">' + money(x.unit * x.l.qty) + '</span><button class="linkbtn" data-act="c-del" data-i="' + x.i + '">Quitar</button></div></div></div>';
    }).join('');
    return sheetHead('Tu pedido') + rows +
      '<div class="tot"><span>Total</span><span>' + money(t.t) + '</span></div>' +
      '<p class="note">' + esc(T.notaPedido || '') + '</p>' +
      '<div class="field"><label for="f-name">Tu nombre</label><input class="in" id="f-name" data-ff="name" autocomplete="name" value="' + esc(form.name) + '"></div>' +
      '<div class="field"><label for="f-addr">Ciudad y dirección</label><input class="in" id="f-addr" data-ff="addr" autocomplete="street-address" value="' + esc(form.addr) + '"></div>' +
      '<div class="field"><label for="f-note">Notas (opcional)</label><textarea class="in" id="f-note" data-ff="note">' + esc(form.note) + '</textarea></div>' +
      '<div class="stack"><a id="waLink" class="btn wa block" data-act="wa-send" href="' + waHref() + '" target="_blank" rel="noopener">Enviar pedido por WhatsApp</a>' +
      '<button class="btn block" data-act="copy-order">Copiar el pedido</button>' +
      '<p class="hint" style="text-align:center">Se abre WhatsApp con tu pedido escrito. También puedes escribir al ' + esc(phoneText()) + '.</p>' +
      '<button class="linkbtn" data-act="c-clear">Vaciar pedido</button></div>';
  }
  function renderModal() {
    var m = $('modal');
    if (!ui.modal) { m.innerHTML = ''; document.body.style.overflow = ''; renderBar(); return; }
    var prev = m.querySelector('.sheet'), st = prev ? prev.scrollTop : 0;
    var inner = '', cls = '';
    if (ui.modal === 'detail') inner = detailHtml();
    else if (ui.modal === 'cart') { inner = cartHtml(); cls = ' drawer'; }
    m.innerHTML = '<div class="overlay' + cls + '"><div class="sheet" role="dialog" aria-modal="true" tabindex="-1">' + inner + '</div></div>';
    document.body.style.overflow = 'hidden';
    var sh = m.querySelector('.sheet'); sh.scrollTop = st;
    if (!prev) sh.focus({ preventScroll: true });
    var g = $('gal');
    if (g) g.addEventListener('scroll', function () {
      var i = Math.round(g.scrollLeft / Math.max(1, g.clientWidth));
      var ts = document.querySelectorAll('.th');
      for (var k = 0; k < ts.length; k++) ts[k].classList.toggle('on', k === i);
    }, { passive: true });
    renderBar();
  }
  function closeModal() { ui.modal = null; ui.detail = null; renderModal(); }

  /* ---------- eventos ---------- */
  function onClick(e) {
    if (e.target.classList && e.target.classList.contains('overlay')) { closeModal(); return; }
    var t = e.target.closest('[data-act]'); if (!t) return;
    var a = t.getAttribute('data-act'), id = t.getAttribute('data-id'), i = Number(t.getAttribute('data-i'));
    var d = ui.detail;
    switch (a) {
      case 'cat': ui.cat = id; renderChips(); renderGrid(); break;
      case 'open': if (byId(id)) { ui.detail = { id: id, tone: null, qty: 1, need: false }; ui.modal = 'detail'; renderModal(); } break;
      case 'quick': addToCart(id, '', 1); break;
      case 'close': closeModal(); break;
      case 'thumb': var g = $('gal'); if (g) g.scrollTo({ left: i * g.clientWidth, behavior: 'smooth' }); break;
      case 'tone': d.tone = byId(d.id).tones[i].name; d.need = false; renderModal(); break;
      case 'q-dec': if (d.qty > 1) { d.qty--; renderModal(); } break;
      case 'q-inc': if (d.qty < 99) { d.qty++; renderModal(); } break;
      case 'add':
        if (byId(d.id).tones.length && !d.tone) { d.need = true; renderModal(); toast('Elige un tono para continuar'); break; }
        addToCart(d.id, d.tone || '', d.qty); closeModal(); break;
      case 'cart-open': ui.modal = 'cart'; renderModal(); break;
      case 'c-inc': cart[i].qty = Math.min(99, cart[i].qty + 1); saveCart(); renderHeader(); renderModal(); break;
      case 'c-dec': if (cart[i].qty > 1) { cart[i].qty--; saveCart(); renderHeader(); renderModal(); } break;
      case 'c-del': cart.splice(i, 1); saveCart(); renderHeader(); renderModal(); break;
      case 'c-clear': cart = []; saveCart(); renderHeader(); renderModal(); break;
      case 'copy-order': copyText(waText()); break;
      case 'wa-send':
        if (!String(form.name || '').trim()) { e.preventDefault(); toast('Escribe tu nombre para enviar el pedido'); var fn = $('f-name'); if (fn) fn.focus(); }
        else toast('Se abrió WhatsApp. Envía el mensaje para confirmar.');
        break;
    }
  }
  function onInput(e) {
    var t = e.target;
    if (t.id === 'q') { ui.q = t.value; renderGrid(); return; }
    var ff = t.getAttribute('data-ff');
    if (ff) { form[ff] = t.value; save('cat-form', form); updateWa(); }
  }
  function onChange(e) {
    if (e.target.id === 'sort') { ui.sort = e.target.value; renderGrid(); }
  }

  /* ---------- arranque ---------- */
  function boot() {
    document.title = (T.nombre || 'Catálogo');
    $('app').innerHTML =
      '<header class="hd"><div class="hd-in"><div class="brand"><h1 id="storeName"></h1></div><div class="hd-act">' +
      '<button class="cartbtn" data-act="cart-open" aria-label="Ver mi pedido"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg><span class="n" id="cartCount" hidden>0</span></button>' +
      '</div></div></header>' +
      '<main class="main in-w"><section class="intro" id="intro"></section>' +
      '<div class="tools"><input class="in" id="q" type="search" placeholder="Buscar producto o marca" autocomplete="off" aria-label="Buscar">' +
      '<select class="in" id="sort" aria-label="Ordenar"><option value="rel">Orden del catálogo</option><option value="asc">Precio: menor a mayor</option><option value="desc">Precio: mayor a menor</option><option value="az">Nombre A a Z</option></select></div>' +
      '<nav class="chips" id="chips" aria-label="Categorías"></nav><div class="count" id="count"></div><div class="grid" id="grid"></div>' +
      '<footer class="ft" id="ft"></footer></main>' +
      '<div class="bar" id="bar"></div><div id="modal"></div><div class="toast" id="toast" role="status" aria-live="polite"></div>';
    var app = $('app');
    app.addEventListener('click', onClick);
    app.addEventListener('input', onInput);
    app.addEventListener('change', onChange);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ui.modal) closeModal(); });
    renderAll();
  }
  boot();
})();
