/* ==========================================================================
   DATOS DEL CATÁLOGO  -  este es el archivo que editas
   --------------------------------------------------------------------------
   Cada producto es UNA línea. Campos:
     id           código único (no lo cambies; se usa para nombrar las fotos)
     nombre       nombre que ve el cliente
     marca        marca (puede ir vacía "")
     categoria    id de una categoría de la lista de arriba (ej. "bases")
     precio       precio de VENTA en pesos, sin puntos (ej. 24100)
     tonos        lista de tonos. Ejemplos:
                    ["Tono 1", "Tono 2"]
                    ["Beige", {"nombre": "Canela", "color": "#c68642"}]   <- con muestra de color
                  Si el producto no tiene tonos déjalo así: []
     fotos        nombres de las fotos que están en  imagenes/productos/
                  Ejemplo: ["p004-1.jpg", "p004-2.jpg"]   (la primera es la principal)
     agotado      true  -> sale como "Agotado" y no se puede pedir
     oculto       true  -> no aparece en el catálogo
     descripcion  texto opcional que se ve al abrir el producto
   Cuida las comas al final de cada línea (la última línea NO lleva coma).
   ========================================================================== */
window.CATALOGO = {
  tienda: {
    nombre: "Catálogo de Maquillaje",
    frase: "Elige tus productos y tonos, arma tu pedido y envíalo por WhatsApp.",
    whatsapp: "573004341644",
    notaPedido: "El costo de envío y el medio de pago se confirman por WhatsApp."
  },
  categorias: [
    {"id": "bases", "nombre": "Bases"},
    {"id": "correctores", "nombre": "Correctores"},
    {"id": "contornos", "nombre": "Contornos y bronzer"},
    {"id": "rubores", "nombre": "Rubores"},
    {"id": "iluminadores", "nombre": "Iluminadores"},
    {"id": "polvos", "nombre": "Polvos"},
    {"id": "pestaninas", "nombre": "Pestañinas"},
    {"id": "cejas", "nombre": "Cejas y delineadores"},
    {"id": "primers", "nombre": "Primers"},
    {"id": "fijadores", "nombre": "Fijadores"},
    {"id": "labios", "nombre": "Labios"},
    {"id": "accesorios", "nombre": "Brochas y accesorios"},
    {"id": "shimmer", "nombre": "Shimmer y aguas"}
  ],
  productos: [
    {"id": "p001", "nombre": "Base E011", "marca": "Elaya", "categoria": "bases", "precio": 24100, "tonos": [], "fotos": [p001-1.jpeg], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p002", "nombre": "Base líquida matte", "marca": "Lula", "categoria": "bases", "precio": 24700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p003", "nombre": "Base mate", "marca": "Hi Zis", "categoria": "bases", "precio": 19500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p004", "nombre": "Base Bonita", "marca": "Ani-K", "categoria": "bases", "precio": 42900, "tonos": ["Tono 1", "Tono 2", "Tono 3", "Tono 4", "Tono 5"], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p005", "nombre": "Base matte", "marca": "Engol", "categoria": "bases", "precio": 21500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p006", "nombre": "Base BB cream", "marca": "MYK", "categoria": "bases", "precio": 11300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p007", "nombre": "Base Stay Matte", "marca": "OG", "categoria": "bases", "precio": 41600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p008", "nombre": "Base matte", "marca": "Dolce Bella", "categoria": "bases", "precio": 36400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p009", "nombre": "Base líquida 1st Scene", "marca": "Atenea", "categoria": "bases", "precio": 54600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p010", "nombre": "Base Aqua", "marca": "OG", "categoria": "bases", "precio": 36400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p011", "nombre": "Tinta luminosa", "marca": "Dolce Bella", "categoria": "bases", "precio": 36400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p012", "nombre": "Corrector", "marca": "Hi Zis", "categoria": "correctores", "precio": 10400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p013", "nombre": "Corrector", "marca": "Elaya", "categoria": "correctores", "precio": 15000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p014", "nombre": "Corrector", "marca": "Bloomshell", "categoria": "correctores", "precio": 19500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p015", "nombre": "Corrector líquido", "marca": "Dolce Bella", "categoria": "correctores", "precio": 15200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p016", "nombre": "Corrector líquido", "marca": "Lula", "categoria": "correctores", "precio": 15600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p017", "nombre": "Corrector líquido", "marca": "Engol", "categoria": "correctores", "precio": 6500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p018", "nombre": "Corrector Humide", "marca": "Montoc", "categoria": "correctores", "precio": 35800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p019", "nombre": "Corrector máximo cubrimiento", "marca": "OG", "categoria": "correctores", "precio": 28600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p020", "nombre": "Corrector Jumbo", "marca": "Ani-K", "categoria": "correctores", "precio": 22100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p021", "nombre": "Corrector Pure Cover Cream Brelee", "marca": "Majikal", "categoria": "correctores", "precio": 35800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p022", "nombre": "Bronzer en barra Coconut", "marca": "Atenea", "categoria": "contornos", "precio": 35100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p023", "nombre": "Contorno en barra", "marca": "Sagui", "categoria": "contornos", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p024", "nombre": "Contorno en barra", "marca": "Alma Beauty", "categoria": "contornos", "precio": 20500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p025", "nombre": "Contorno en barra Extra Creamy", "marca": "Engol", "categoria": "contornos", "precio": 19500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p026", "nombre": "Rubor líquido", "marca": "Sagui", "categoria": "rubores", "precio": 14300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p027", "nombre": "Rubor líquido", "marca": "Ani-K", "categoria": "rubores", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p028", "nombre": "Rubor en crema", "marca": "Elaya", "categoria": "rubores", "precio": 15000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p029", "nombre": "Rubor en barra Cranberry Juice Sublime", "marca": "Atenea", "categoria": "rubores", "precio": 35100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p030", "nombre": "Rubor en barra Cherry Blossom", "marca": "Bloomshell", "categoria": "rubores", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p031", "nombre": "Rubor stick glow", "marca": "OG", "categoria": "rubores", "precio": 22100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p032", "nombre": "Rubor cremoso", "marca": "Sagui", "categoria": "rubores", "precio": 13700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p033", "nombre": "Rubor compacto mate", "marca": "G-Z", "categoria": "rubores", "precio": 9800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p034", "nombre": "Rubor compacto mineralizado", "marca": "", "categoria": "rubores", "precio": 16300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p035", "nombre": "Rubor compacto", "marca": "Lula", "categoria": "rubores", "precio": 14300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p036", "nombre": "Rubor compacto", "marca": "Ani-K", "categoria": "rubores", "precio": 17600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p037", "nombre": "Rubor nacarado compacto", "marca": "Atenea", "categoria": "rubores", "precio": 24100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p038", "nombre": "Rubor matte Daily Muse", "marca": "", "categoria": "rubores", "precio": 33800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p039", "nombre": "Rubor compacto Luminicent", "marca": "Samy", "categoria": "rubores", "precio": 20800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p040", "nombre": "Rubor dúo", "marca": "Sagui", "categoria": "rubores", "precio": 17600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p041", "nombre": "Rubor dúo Allure crema y compacto", "marca": "Atenea", "categoria": "rubores", "precio": 52000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p042", "nombre": "Iluminador", "marca": "Hi Zis", "categoria": "iluminadores", "precio": 13500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p043", "nombre": "Iluminador en crema", "marca": "Sagui", "categoria": "iluminadores", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p044", "nombre": "Iluminador individual", "marca": "Lula", "categoria": "iluminadores", "precio": 15600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p045", "nombre": "Dúo iluminador y rubor", "marca": "Lula", "categoria": "iluminadores", "precio": 19500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p046", "nombre": "Paleta de iluminadores Golden Hour", "marca": "Atenea", "categoria": "iluminadores", "precio": 45500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p047", "nombre": "Iluminador Light Set", "marca": "Montoc", "categoria": "iluminadores", "precio": 37700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p048", "nombre": "Iluminador, contorno y rubor", "marca": "Sagui", "categoria": "iluminadores", "precio": 25400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p049", "nombre": "Polvo suelto Banana", "marca": "SFR", "categoria": "polvos", "precio": 11100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p050", "nombre": "Polvo suelto translúcido", "marca": "Montoc", "categoria": "polvos", "precio": 32500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p051", "nombre": "Polvo suelto translúcido", "marca": "Elaya", "categoria": "polvos", "precio": 18200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p052", "nombre": "Polvo suelto", "marca": "Samy", "categoria": "polvos", "precio": 28600, "tonos": ["Rosado", "Loose", "Peach"], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p053", "nombre": "Polvo suelto", "marca": "Elf", "categoria": "polvos", "precio": 58500, "tonos": ["Rosa", "Light", "Medium"], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p054", "nombre": "Polvo suelto Soft Powder", "marca": "Montoc", "categoria": "polvos", "precio": 27200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p055", "nombre": "Polvo suelto matte", "marca": "Bloomshell", "categoria": "polvos", "precio": 35800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p056", "nombre": "Polvo suelto", "marca": "Raquel", "categoria": "polvos", "precio": 23400, "tonos": ["Rosado", "Banana"], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p057", "nombre": "Polvo compacto", "marca": "Samy", "categoria": "polvos", "precio": 14300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p058", "nombre": "Polvo suelto Banana 30 g", "marca": "Atenea", "categoria": "polvos", "precio": 78000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p059", "nombre": "Polvo compacto", "marca": "Raquel", "categoria": "polvos", "precio": 17600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p060", "nombre": "Pestañina", "marca": "Prosa", "categoria": "pestaninas", "precio": 17600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p061", "nombre": "Pestañina Dramatic Volume", "marca": "OG", "categoria": "pestaninas", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p062", "nombre": "Pestañina dúo", "marca": "Hi Zis", "categoria": "pestaninas", "precio": 13700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p063", "nombre": "Pestañina", "marca": "MYK", "categoria": "pestaninas", "precio": 21200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p064", "nombre": "Delineador de ojos y cejas", "marca": "Raquel", "categoria": "cejas", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p065", "nombre": "Gel de cejas", "marca": "Rare Beauty", "categoria": "cejas", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p066", "nombre": "Got2b", "marca": "", "categoria": "cejas", "precio": 23400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p067", "nombre": "Pomada para cejas", "marca": "Lula", "categoria": "cejas", "precio": 11100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p068", "nombre": "Gel para cejas y bordes 2 en 1", "marca": "Afrodita", "categoria": "cejas", "precio": 16300, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p069", "nombre": "Primer", "marca": "Hi Zis", "categoria": "primers", "precio": 19500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p070", "nombre": "Primer matificante", "marca": "Lula", "categoria": "primers", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p071", "nombre": "Primer hidratante Mística", "marca": "Alma Beauty", "categoria": "primers", "precio": 28600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p072", "nombre": "Primer", "marca": "Dolce Bella", "categoria": "primers", "precio": 34500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p073", "nombre": "Fijador Dixy Fix 80 ml", "marca": "Montoc", "categoria": "fijadores", "precio": 35100, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p074", "nombre": "Fijador 120 ml", "marca": "Naba", "categoria": "fijadores", "precio": 41600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p075", "nombre": "Fijador matte Serenity morado", "marca": "Alma Beauty", "categoria": "fijadores", "precio": 18900, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p076", "nombre": "Fijador Dixy Fix 30 ml", "marca": "Montoc", "categoria": "fijadores", "precio": 24700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p077", "nombre": "Fijador 60 ml", "marca": "Naba", "categoria": "fijadores", "precio": 26000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p078", "nombre": "Lápiz de labios", "marca": "Dragon Ranee", "categoria": "labios", "precio": 2200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p079", "nombre": "Lápiz", "marca": "Samy", "categoria": "labios", "precio": 4600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p080", "nombre": "Lápiz delineador Clear Wine", "marca": "Atenea", "categoria": "labios", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p081", "nombre": "Bálsamo hidratante Pitaya", "marca": "Lula", "categoria": "labios", "precio": 11700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p082", "nombre": "Lip gloss", "marca": "Ani-K", "categoria": "labios", "precio": 20200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p083", "nombre": "Lip gloss transparente", "marca": "Engol", "categoria": "labios", "precio": 2200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p084", "nombre": "Lip gloss", "marca": "Hi Zis", "categoria": "labios", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p085", "nombre": "Brillo Cogin", "marca": "Afrodita", "categoria": "labios", "precio": 4900, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p086", "nombre": "Brillo labial Pure Glow", "marca": "OG", "categoria": "labios", "precio": 28600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p087", "nombre": "Labial matte Pure Glow", "marca": "OG", "categoria": "labios", "precio": 28600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p088", "nombre": "Lip gloss Romantic Rain", "marca": "", "categoria": "labios", "precio": 5500, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p089", "nombre": "Set de brochas kabuki x10", "marca": "", "categoria": "accesorios", "precio": 11400, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p090", "nombre": "Cosmetiquera washbag grande", "marca": "", "categoria": "accesorios", "precio": 15600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p091", "nombre": "Beauty blender", "marca": "", "categoria": "accesorios", "precio": 2000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p092", "nombre": "Brocha doble para cejas", "marca": "", "categoria": "accesorios", "precio": 2600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p093", "nombre": "Brocha angular para polvo y rubor", "marca": "", "categoria": "accesorios", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p094", "nombre": "Brocha kabuki doble premium", "marca": "", "categoria": "accesorios", "precio": 15600, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p095", "nombre": "Set de borlas x3", "marca": "Sagui", "categoria": "accesorios", "precio": 7200, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p096", "nombre": "Shimmer spray Golden Haze", "marca": "", "categoria": "shimmer", "precio": 13700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p097", "nombre": "Shimmer spray Hudamoji", "marca": "", "categoria": "shimmer", "precio": 9800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p098", "nombre": "Shimmer spray Crystal", "marca": "", "categoria": "shimmer", "precio": 9800, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p099", "nombre": "Agua de rosas + aloe vera", "marca": "Naba", "categoria": "shimmer", "precio": 13000, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""},
    {"id": "p100", "nombre": "Agua de rosas", "marca": "Sagui", "categoria": "shimmer", "precio": 13700, "tonos": [], "fotos": [], "agotado": false, "oculto": false, "descripcion": ""}
  ]
};
