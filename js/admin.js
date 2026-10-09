/* ============================================================
   EDITOR VISUAL DEL CATÁLOGO (admin.html)
   Edita productos, precios, tonos y fotos sin tocar código.
   Al terminar, pulsa "Descargar catalogo.js" y reemplaza el
   archivo  datos/catalogo.js  de tu carpeta.
   ============================================================ */
(function () {
  'use strict';

  var ORIGINAL = window.CATALOGO || { tienda: {}, categorias: [], productos: [] };
  var DRAFT_KEY = 'adm-borrador-v1';
  var CARPETA = 'imagenes/productos/';
  var D = clone(ORIGINAL);
  var f = { q: '', cat: 'all', sinFoto: false, sinTono: false };
  var toastTimer = null;

  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) { return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
  function toast(msg) {
    var t = $('toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3000);
  }
  function guardarBorrador() { try { localStorage.setItem(DRAFT_KEY, JSON.stringify(D)); } catch (e) {} }
  function fotoSrc(n) { return /^(https?:|data:|\/|imagenes\/)/.test(n) ? n : CARPETA + n; }
  function getP(id) { for (var i = 0; i < D.productos.length; i++) if (D.productos[i].id === id) return D.productos[i]; return null; }

  /* ---------- tonos y fotos como texto ---------- */
  function tonosATexto(arr) {
    return (arr || []).map(function (t) { return typeof t === 'string' ? t : (t.color ? t.nombre + ' | ' + t.color : t.nombre); }).join('\n');
  }
  function textoATonos(txt) {
    return String(txt || '').split('\n').map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      var parts = l.split('|'), nombre = parts[0].trim(), color = (parts[1] || '').trim();
      return /^#[0-9a-f]{3,8}$/i.test(color) ? { nombre: nombre, color: color } : nombre;
    });
  }
  function fotosATexto(arr) { return (arr || []).join(', '); }
  function textoAFotos(txt) { return String(txt || '').split(/[,\n]+/).map(function (s) { return s.trim(); }).filter(Boolean); }

  /* ---------- archivo de salida ---------- */
  var CABECERA = '/* ==========================================================================\n' +
    '   DATOS DEL CATÁLOGO  -  generado con admin.html\n' +
    '   Cada producto es UNA línea. Campos: id, nombre, marca, categoria, precio (de venta),\n' +
    '   tonos (["Tono 1", {"nombre":"Canela","color":"#c68642"}]), fotos (nombres de archivo en\n' +
    '   imagenes/productos/), agotado, oculto, descripcion.\n' +
    '   Puedes seguir editándolo aquí a mano o volver a abrir admin.html.\n' +
    '   ========================================================================== */\n';
  function archivo() {
    var prods = D.productos.map(function (p) {
      var o = { id: p.id, nombre: p.nombre, marca: p.marca || '', categoria: p.categoria, precio: Number(p.precio) || 0,
        tonos: p.tonos || [], fotos: p.fotos || [], agotado: !!p.agotado, oculto: !!p.oculto, descripcion: p.descripcion || '' };
      return '    ' + JSON.stringify(o);
    }).join(',\n');
    var cats = D.categorias.map(function (c) { return '    ' + JSON.stringify({ id: c.id, nombre: c.nombre }); }).join(',\n');
    var t = D.tienda || {};
    return CABECERA + 'window.CATALOGO = {\n  tienda: ' + JSON.stringify({ nombre: t.nombre || '', frase: t.frase || '', whatsapp: String(t.whatsapp || ''), notaPedido: t.notaPedido || '' }, null, 4).replace(/\n/g, '\n  ') +
      ',\n  categorias: [\n' + cats + '\n  ],\n  productos: [\n' + prods + '\n  ]\n};\n';
  }
  function descargar() {
    var blob = new Blob([archivo()], { type: 'text/javascript' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'catalogo.js';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
    toast('Listo. Reemplaza datos/catalogo.js con el archivo descargado.');
  }

  /* ---------- pantalla ---------- */
  function visible(p) {
    if (f.cat !== 'all' && p.categoria !== f.cat) return false;
    if (f.sinFoto && (p.fotos || []).length) return false;
    if (f.sinTono && (p.tonos || []).length) return false;
    if (f.q) {
      var hay = norm(p.nombre + ' ' + (p.marca || '') + ' ' + p.id);
      var terms = norm(f.q).split(/\s+/).filter(Boolean);
      for (var i = 0; i < terms.length; i++) if (hay.indexOf(terms[i]) < 0) return false;
    }
    return true;
  }
  function fotosHtml(p) {
    return (p.fotos || []).map(function (n) {
      return '<div class="pp"><img src="' + esc(fotoSrc(n)) + '" alt="" data-chk="1" title="' + esc(n) + '"></div>';
    }).join('') || '<div class="pp">Sin fotos</div>';
  }
  function productoHtml(p) {
    var cats = D.categorias.map(function (c) { return '<option value="' + esc(c.id) + '"' + (c.id === p.categoria ? ' selected' : '') + '>' + esc(c.nombre) + '</option>'; }).join('');
    var id = esc(p.id);
    return '<article class="pr' + (p.oculto ? ' off' : '') + '" data-pid="' + id + '">' +
      '<div class="pr-h"><span><code>' + id + '</code> &nbsp;<b>' + esc(p.nombre || 'Producto nuevo') + '</b></span>' +
      '<span style="display:flex;gap:8px"><button class="btn sm" data-act="dup">Duplicar</button><button class="btn sm danger" data-act="del">Eliminar</button></span></div>' +
      '<div class="grid2">' +
      '<div class="field"><label>Nombre</label><input class="in" data-f="nombre" value="' + esc(p.nombre) + '"></div>' +
      '<div class="field"><label>Marca</label><input class="in" data-f="marca" value="' + esc(p.marca) + '"></div>' +
      '<div class="field"><label>Categoría</label><select class="in" data-f="categoria" style="width:100%">' + cats + '</select></div>' +
      '<div class="field"><label>Precio de venta ($)</label><input class="in" data-f="precio" inputmode="numeric" value="' + esc(p.precio) + '"></div></div>' +
      '<div class="grid2">' +
      '<div class="field"><label>Tonos (uno por línea; opcional: Nombre | #color)</label><textarea class="in" data-f="tonos" placeholder="Sin tonos: déjalo vacío">' + esc(tonosATexto(p.tonos)) + '</textarea></div>' +
      '<div class="field"><label>Fotos (nombres separados por coma)</label><textarea class="in" data-f="fotos" placeholder="' + id + '-1.jpg, ' + id + '-2.jpg">' + esc(fotosATexto(p.fotos)) + '</textarea>' +
      '<div class="pr-photos" data-ph="' + id + '" style="margin-top:8px">' + fotosHtml(p) + '</div></div></div>' +
      '<div class="field"><label>Descripción (opcional)</label><input class="in" data-f="descripcion" value="' + esc(p.descripcion) + '"></div>' +
      '<div class="pr-checks"><label class="chk"><input type="checkbox" data-f="agotado"' + (p.agotado ? ' checked' : '') + '> Agotado</label>' +
      '<label class="chk"><input type="checkbox" data-f="oculto"' + (p.oculto ? ' checked' : '') + '> Ocultar del catálogo</label></div></article>';
  }
  function marcarFotos(root) {
    var imgs = (root || document).querySelectorAll('img[data-chk]');
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].onerror = function () { var w = this.parentNode; w.classList.add('bad'); w.textContent = 'No está'; };
    }
  }
  function renderLista() {
    var a = D.productos.filter(visible);
    $('cuenta').textContent = a.length + ' de ' + D.productos.length + ' productos';
    $('lista').innerHTML = a.map(productoHtml).join('') || '<div class="empty">No hay productos con ese filtro.</div>';
    marcarFotos($('lista'));
  }
  function renderTienda() {
    var t = D.tienda || {};
    function fld(k, label) { return '<div class="field"><label>' + label + '</label><input class="in" data-t="' + k + '" value="' + esc(t[k]) + '"></div>'; }
    $('tienda').innerHTML = '<h2>Datos de la tienda</h2><div class="grid2">' + fld('nombre', 'Nombre de la tienda') + fld('whatsapp', 'WhatsApp (con 57, sin espacios)') + '</div>' +
      fld('frase', 'Frase de bienvenida') + fld('notaPedido', 'Nota que ve el cliente al hacer el pedido');
  }
  function renderCats() {
    $('cats').innerHTML = '<h2>Categorías</h2>' + D.categorias.map(function (c, i) {
      var usada = D.productos.some(function (p) { return p.categoria === c.id; });
      return '<div class="trow" style="grid-template-columns:minmax(0,1fr) 40px"><input class="in" data-c="' + i + '" value="' + esc(c.nombre) + '" aria-label="Nombre de la categoría">' +
        '<button class="mini" data-act="catdel" data-i="' + i + '"' + (usada ? ' disabled title="Tiene productos"' : '') + ' aria-label="Quitar categoría">×</button></div>';
    }).join('') + '<button class="btn sm" data-act="catadd">+ Categoría</button>';
    $('fcat').innerHTML = '<option value="all">Todas las categorías</option>' + D.categorias.map(function (c) { return '<option value="' + esc(c.id) + '"' + (f.cat === c.id ? ' selected' : '') + '>' + esc(c.nombre) + '</option>'; }).join('');
  }

  /* ---------- acciones ---------- */
  function nuevoId() {
    var max = 0;
    D.productos.forEach(function (p) { var m = /^p(\d+)$/.exec(p.id); if (m) max = Math.max(max, Number(m[1])); });
    var n = String(max + 1); while (n.length < 3) n = '0' + n;
    return 'p' + n;
  }
  function agregar(base) {
    var p = base ? clone(base) : { nombre: '', marca: '', categoria: (D.categorias[0] || {}).id, precio: 0, tonos: [], fotos: [], agotado: false, oculto: false, descripcion: '' };
    p.id = nuevoId(); if (base) { p.nombre += ' (copia)'; p.fotos = []; }
    D.productos.unshift(p); guardarBorrador(); f.q = ''; f.cat = 'all'; f.sinFoto = false; f.sinTono = false;
    $('q').value = ''; $('chkFoto').checked = false; $('chkTono').checked = false; renderCats(); renderLista();
    toast('Producto ' + p.id + ' agregado arriba de la lista.');
  }
  function existe(url) {
    return new Promise(function (res) { var i = new Image(); i.onload = function () { res(true); }; i.onerror = function () { res(false); }; i.src = url; });
  }
  function buscarFotos() {
    var exts = ['jpg', 'jpeg', 'png', 'webp'], hallados = 0, lista = D.productos.slice(), activos = 0;
    toast('Buscando fotos en imagenes/productos/ …');
    function slot(p, n, out) {
      if (n > 6) return Promise.resolve(out);
      var intentos = exts.map(function (e) { return p.id + '-' + n + '.' + e; });
      var i = 0;
      function probar() {
        if (i >= intentos.length) return Promise.resolve(null);
        var nombre = intentos[i++];
        return existe(CARPETA + nombre).then(function (ok) { return ok ? nombre : probar(); });
      }
      return probar().then(function (nombre) { if (!nombre) return out; out.push(nombre); return slot(p, n + 1, out); });
    }
    function worker() {
      var p = lista.shift(); if (!p) return Promise.resolve();
      return slot(p, 1, []).then(function (fs) { if (fs.length) { p.fotos = fs; hallados += fs.length; } return worker(); });
    }
    var ws = []; for (var k = 0; k < 8; k++) ws.push(worker());
    Promise.all(ws).then(function () { guardarBorrador(); renderLista(); toast(hallados ? 'Encontré ' + hallados + ' fotos y las asigné.' : 'No encontré fotos con el nombre código-1.jpg en imagenes/productos/.'); });
  }

  function onInput(e) {
    var t = e.target;
    if (t.id === 'q') { f.q = t.value; renderLista(); return; }
    var tk = t.getAttribute('data-t');
    if (tk) { D.tienda[tk] = t.value; guardarBorrador(); return; }
    var ci = t.getAttribute('data-c');
    if (ci !== null) { D.categorias[Number(ci)].nombre = t.value; guardarBorrador(); return; }
    var fk = t.getAttribute('data-f'); if (!fk) return;
    var card = t.closest('[data-pid]'), p = getP(card.getAttribute('data-pid')); if (!p) return;
    if (t.type === 'checkbox') p[fk] = t.checked;
    else if (fk === 'tonos') p.tonos = textoATonos(t.value);
    else if (fk === 'fotos') {
      p.fotos = textoAFotos(t.value);
      var ph = card.querySelector('[data-ph]'); ph.innerHTML = fotosHtml(p); marcarFotos(ph);
    } else if (fk === 'precio') p.precio = Number(String(t.value).replace(/[^\d]/g, '')) || 0;
    else p[fk] = t.value;
    if (fk === 'oculto') card.classList.toggle('off', p.oculto);
    if (fk === 'nombre') card.querySelector('.pr-h b').textContent = p.nombre || 'Producto nuevo';
    guardarBorrador();
  }
  function onChange(e) {
    var t = e.target;
    if (t.id === 'fcat') { f.cat = t.value; renderLista(); return; }
    if (t.id === 'chkFoto') { f.sinFoto = t.checked; renderLista(); return; }
    if (t.id === 'chkTono') { f.sinTono = t.checked; renderLista(); return; }
    if (t.tagName === 'SELECT' || t.type === 'checkbox') onInput(e);
  }
  function onClick(e) {
    var b = e.target.closest('[data-act]'); if (!b) return;
    var a = b.getAttribute('data-act'), card = b.closest('[data-pid]'), id = card && card.getAttribute('data-pid');
    if (a === 'descargar') descargar();
    else if (a === 'nuevo') agregar(null);
    else if (a === 'buscar') buscarFotos();
    else if (a === 'dup') agregar(getP(id));
    else if (a === 'del') {
      if (b.getAttribute('data-sure') !== '1') { b.setAttribute('data-sure', '1'); b.textContent = '¿Seguro? Pulsa otra vez'; return; }
      D.productos = D.productos.filter(function (p) { return p.id !== id; }); guardarBorrador(); renderCats(); renderLista();
    } else if (a === 'catadd') { D.categorias.push({ id: 'c' + Date.now().toString(36), nombre: 'Nueva categoría' }); guardarBorrador(); renderCats(); }
    else if (a === 'catdel') { D.categorias.splice(Number(b.getAttribute('data-i')), 1); guardarBorrador(); renderCats(); renderLista(); }
    else if (a === 'usar') { try { D = JSON.parse(localStorage.getItem(DRAFT_KEY)); } catch (x) {} $('aviso').remove(); renderTienda(); renderCats(); renderLista(); }
    else if (a === 'descartar') { try { localStorage.removeItem(DRAFT_KEY); } catch (x) {} $('aviso').remove(); }
  }

  function boot() {
    var aviso = '';
    try {
      var d = localStorage.getItem(DRAFT_KEY);
      if (d && d !== JSON.stringify(ORIGINAL)) {
        aviso = '<div class="ad-note" id="aviso">Tienes cambios guardados en este navegador que no están en tu archivo.' +
          ' <button class="btn sm primary" data-act="usar">Continuar con mis cambios</button> <button class="btn sm" data-act="descartar">Empezar desde el archivo</button></div>';
      }
    } catch (e) {}
    $('app').innerHTML =
      '<div class="ad-top"><div class="ad-top-in"><h1>Editor del catálogo</h1><div class="acts">' +
      '<button class="btn sm" data-act="nuevo">+ Producto</button><button class="btn sm" data-act="buscar">Buscar fotos por código</button>' +
      '<button class="btn sm primary" data-act="descargar">Descargar catalogo.js</button></div></div></div>' +
      '<div class="ad-wrap">' + aviso +
      '<div class="ad-note"><b>Cómo se usa:</b> 1) pon las fotos en <code>imagenes/productos/</code> con el código del producto (p004-1.jpg, p004-2.jpg…) y pulsa “Buscar fotos por código”; ' +
      '2) edita lo que necesites; 3) pulsa “Descargar catalogo.js” y reemplaza <code>datos/catalogo.js</code>. Tus cambios se guardan solos en este navegador mientras trabajas.</div>' +
      '<section class="ad-box" id="tienda"></section><section class="ad-box" id="cats"></section>' +
      '<div class="ad-filters"><input class="in" id="q" type="search" placeholder="Buscar por nombre, marca o código" aria-label="Buscar">' +
      '<select class="in" id="fcat" aria-label="Categoría"></select>' +
      '<label class="chk"><input type="checkbox" id="chkFoto"> Solo sin fotos</label><label class="chk"><input type="checkbox" id="chkTono"> Solo sin tonos</label></div>' +
      '<div class="count" id="cuenta"></div><div id="lista"></div></div><div class="toast" id="toast" role="status" aria-live="polite"></div>';
    var app = $('app');
    app.addEventListener('click', onClick); app.addEventListener('input', onInput); app.addEventListener('change', onChange);
    renderTienda(); renderCats(); renderLista();
  }
  boot();
})();
