/* ==========================================================================
   DATOS DEL CATÁLOGO   -  este es el archivo que editas
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
    nombre: "dreamy makeup",
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
    {"id":"p001","nombre":"Base E011","marca":"Elaya","categoria":"bases","precio":26000,"tonos":["Arena","Durazno","Caramelo","Avellana","Cocoa","Capuchino"],"fotos":["p001.jpeg","p001-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p002","nombre":"Base líquida matte","marca":"Lula","categoria":"bases","precio":28000,"tonos":["Tono 01","Tono 02","Tono 03","Tono 04","Tono 05","Tono 06"],"fotos":["p002.png","p002-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p003","nombre":"Base mate","marca":"Hi Zis","categoria":"bases","precio":25000,"tonos":["Porcelain","Light","Vanilla","Almond","Cappuccino","Cinnamon"],"fotos":["p003.jpg","p003-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p004","nombre":"Base Bonita","marca":"Ani-K","categoria":"bases","precio":42900,"tonos":["Tono 00","Tono 01","Tono 02","Tono 03","Tono 06"],"fotos":["p004.jpeg","p004-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p005","nombre":"Base matte","marca":"Engol","categoria":"bases","precio":25000,"tonos":["Tono 1","Tono 2","Tono 3","Tono 4"],"fotos":["p005.jpeg","p005-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p006","nombre":"Base BB cream","marca":"MYK","categoria":"bases","precio":16000,"tonos":["Tono 01","Tono 02","Tono 03","Tono 04","Tono 05","Tono 06"],"fotos":["p006.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p007","nombre":"Base Stay Matte","marca":"OG","categoria":"bases","precio":42000,"tonos":[],"fotos":["p007.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p008","nombre":"Base matte","marca":"Dolce Bella","categoria":"bases","precio":38000,"tonos":["Golden","Caramelo","Sand"],"fotos":["p008.jpeg","p008-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p009","nombre":"Base líquida 1st Scene","marca":"Atenea","categoria":"bases","precio":52000,"tonos":["Light","Porcelain","Cream","Vainilla","Almond","Olive","Temple","Sand","Eboky"],"fotos":["p009.jpeg","p009-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p010","nombre":"Base Aqua","marca":"OG","categoria":"bases","precio":38500,"tonos":["Tono 2","Tono 3","Tono 4","Tono 4.5","Tono 5","Tono 6"],"fotos":["p010.jpeg","p010-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p011","nombre":"Tinta luminosa","marca":"Dolce Bella","categoria":"bases","precio":37000,"tonos":["Vainilla","Golden","Caramel","Sand"],"fotos":["p011.jpg","p011-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p012","nombre":"Corrector","marca":"Hi Zis","categoria":"correctores","precio":18000,"tonos":["Porcelain","Light","Vanilla","Almond","Cappuccino","Cinnamon"],"fotos":["p012.jpg","p012-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p013","nombre":"Corrector","marca":"Elaya","categoria":"correctores","precio":22000,"tonos":["Tono 02","Tono 2.5","Tono 03","Tono 04"],"fotos":["p013.jpg","p013-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p014","nombre":"Corrector","marca":"Bloomshell","categoria":"correctores","precio":24000,"tonos":["Tono 00","Tono 01","Tono 02","Tono 03","Tono 06","Tono 07","Tono 08","Tono 09"],"fotos":["p014.jpg","p014-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p015","nombre":"Corrector líquido","marca":"Dolce Bella","categoria":"correctores","precio":20000,"tonos":["Caramel","Ivory","Honey"],"fotos":["p015.jpg","p015-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p016","nombre":"Corrector líquido","marca":"Lula","categoria":"correctores","precio":22000,"tonos":[],"fotos":["p016.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p017","nombre":"Corrector líquido","marca":"Engol","categoria":"correctores","precio":15000,"tonos":["Tono 1","Tono 2","Tono 3","Tono 4"],"fotos":["p017.jpg","p017-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p018","nombre":"Corrector Humide","marca":"Montoc","categoria":"correctores","precio":37000,"tonos":["Tono 100","Tono 200","Tono 300","Tono 400","Tono 500","Tono 600","Tono 700","Tono 800","Tono 900","Tono 920","Tono 940"],"fotos":["p018.jpeg","p018-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p019","nombre":"Corrector máximo cubrimiento","marca":"OG","categoria":"correctores","precio":30000,"tonos":["Tono 01","Tono 02","Tono 03","Tono 04","Tono 05","Tono 06","Tono 07","Tono 08","Tono 09"],"fotos":["p019.jpeg","p019-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p020","nombre":"Corrector Jumbo","marca":"Ani-K","categoria":"correctores","precio":25000,"tonos":["Tono 00-1","Tono 00-2","Tono 00","Tono 01","Tono 02","Tono 02-1","Tono 03","Tono 04","Tono 04-1","Tono 05","Tono 06"],"fotos":["p020.jpeg","p020-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p021","nombre":"Corrector Pure Cover Cream Brelee","marca":"Majikal","categoria":"correctores","precio":33000,"tonos":["Snow","Off white","Latina","cream Brulee"],"fotos":["p021.jpeg","p021-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p022","nombre":"Bronzer en barra Coconut","marca":"Atenea","categoria":"contornos","precio":38000,"tonos":[],"fotos":["p022.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p023","nombre":"Contorno en barra","marca":"Sagui","categoria":"contornos","precio":22000,"tonos":["Tono 1","Tono 2"],"fotos":["p023.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p024","nombre":"Contorno en barra","marca":"Alma Beauty","categoria":"contornos","precio":25800,"tonos":["Chocolate","Avellana Tostada","Moca Intenso"],"fotos":["p024.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p025","nombre":"Contorno en barra Extra Creamy","marca":"Engol","categoria":"contornos","precio":20000,"tonos":[" Humo Frío","Avellana Tostada","Chocolate","Moca Intenso"],"fotos":["p025.jpeg","p025-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p026","nombre":"Rubor líquido","marca":"Sagui","categoria":"rubores","precio":21000,"tonos":[" Durazno"," Rosa Malva"," Cereza"," Frambuesa"],"fotos":["p026.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p027","nombre":"Rubor líquido","marca":"Ani-K","categoria":"rubores","precio":28500,"tonos":["Lily","Ellie","Zoe","Rose","Pink Crush","Martini","Sangria"],"fotos":["p027.jpeg","p027-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p028","nombre":"Rubor en crema","marca":"Elaya","categoria":"rubores","precio":22000,"tonos":["Tono 1","Tono 2","Tono 3","Tono 4"],"fotos":["p028.jpeg","p028-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p029","nombre":"Rubor en barra","marca":"Atenea","categoria":"rubores","precio":40000,"tonos":["Sun Baked","Oasm Flame","Cranberry Juice","Dusk"],"fotos":["p029.jpeg","p029-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p030","nombre":"Rubor en barra Cherry Blossom","marca":"Bloomshell","categoria":"rubores","precio":28000,"tonos":["Tono 01","Tono 02","Tono 03","Tono 04"],"fotos":["p030.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p031","nombre":"Rubor stick glow","marca":"OG","categoria":"rubores","precio":27100,"tonos":["Caramel","Berry","Nude rose","Burgundy 07"],"fotos":["p031.jpg","p031-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p032","nombre":"Rubor cremoso","marca":"Sagui","categoria":"rubores","precio":19500,"tonos":["Fucsia intenso","Rosa pastel","Rojo cereza","Durazno coral"],"fotos":["p032.jpeg","p032-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p033","nombre":"Rubor compacto mate","marca":"G-Z","categoria":"rubores","precio":18000,"tonos":["tono 01","tono 02","tono 03","tono 04"],"fotos":["p033.jpeg","p033-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p034","nombre":"Rubor compacto mineralizado","marca":"","categoria":"rubores","precio":20000,"tonos":["tono 01","tono 02","tono 03","tono 04"],"fotos":["p034.jpeg","p034-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p035","nombre":"Rubor compacto","marca":"Lula","categoria":"rubores","precio":22000,"tonos":["tono 01","tono 02","tono 03","tono 04","tono 05","tono 06"],"fotos":["p035.jpeg","p035-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p036","nombre":"Rubor compacto","marca":"Ani-K","categoria":"rubores","precio":23500,"tonos":["Taylor","Dua","Selene","Katy","Kitty","Becca"],"fotos":["p036.jpg","p036-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p037","nombre":"Rubor nacarado compacto","marca":"Atenea","categoria":"rubores","precio":30000,"tonos":["Rosy Coral","Dusk Petal","Aurora","Peachy Keen","Coral Glow","Radiant Rose","Smootg Pink"],"fotos":["p037.jpg","p037-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p038","nombre":"Rubor matte Daily Mous","marca":"OG","categoria":"rubores","precio":38000,"tonos":["Rosa pastel","Coral Durazno","Malva Frambuesa"],"fotos":["p038.jpg","p038-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p039","nombre":"Rubor compacto Luminicent","marca":"Samy","categoria":"rubores","precio":24000,"tonos":["Flamingo","Dusty Pink","Watermelon","Rose Peach","Orange Pink","Champagne Bronze","Rose Petal"],"fotos":["p039.jpg","p039-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p040","nombre":"Rubor dúo","marca":"Sagui","categoria":"rubores","precio":24000,"tonos":["Pink Dream / Rosa Romance","Sunset Glow / Atardecer Coral","Terracotta Blush / Tierra Cálida"],"fotos":["p040.jpg","p040-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p041","nombre":"Rubor dúo Allure crema y compacto","marca":"Atenea","categoria":"rubores","precio":50000,"tonos":["Orange Weekend","Pink Crush","Night Cherry"],"fotos":["p041.jpeg","p041-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p042","nombre":"Iluminador","marca":"Hi Zis","categoria":"iluminadores","precio":20000,"tonos":["Gold","Soft Pink","Silver"],"fotos":["p042.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p043","nombre":"Iluminador en crema","marca":"Sagui","categoria":"iluminadores","precio":15000,"tonos":["Blanco perlado","Rosa Dorado","Dorado Champagne","Dorado Intenso"],"fotos":["p043.jpg","p043-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p044","nombre":"Iluminador individual","marca":"Lula","categoria":"iluminadores","precio":18500,"tonos":["tono 01","tono 02","tono 03","tono 04","tono 05"],"fotos":["p044.jpg","p044-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p045","nombre":"Dúo iluminador y rubor","marca":"Lula","categoria":"iluminadores","precio":22000,"tonos":["tono 01","tono 02","tono 03"],"fotos":["p045.jpeg","p045-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p046","nombre":"Paleta de iluminadores Golden Hour","marca":"Atenea","categoria":"iluminadores","precio":45000,"tonos":["MIA","L.A","BALÍ","6:00 PM"],"fotos":["p046.jpeg","p046-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p047","nombre":"Iluminador Light Set","marca":"Montoc","categoria":"iluminadores","precio":37000,"tonos":["Rose","Champagne","Golden"],"fotos":["p047.jpeg","p047-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p048","nombre":"Iluminador, contorno y rubor","marca":"Sagui","categoria":"iluminadores","precio":30000,"tonos":["Golden Glow / cálido","Rosé Blush / medio","Berry Pink / frio"],"fotos":["p048.jpeg","p048-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p049","nombre":"Polvo suelto Banana","marca":"SFR","categoria":"polvos","precio":18500,"tonos":[],"fotos":["p049.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p050","nombre":"Polvo suelto translúcido","marca":"Montoc","categoria":"polvos","precio":35000,"tonos":[],"fotos":["p050.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p051","nombre":"Polvo suelto translúcido","marca":"Elaya","categoria":"polvos","precio":22000,"tonos":["tono 02","tono 03","tono 04"],"fotos":["p051.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p052","nombre":"Polvo suelto","marca":"Samy","categoria":"polvos","precio":30000,"tonos":["Rosado","Loose","Peachy"],"fotos":["p052.jpg","p052-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p053","nombre":"Polvo suelto","marca":"Elf","categoria":"polvos","precio":58000,"tonos":["Light","Light Pink","Medium","Medium Beige","Tan","Deep"],"fotos":["p053.jpg","p053-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p054","nombre":"Polvo suelto Soft Powder","marca":"Montoc","categoria":"polvos","precio":35000,"tonos":[],"fotos":["p054.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p055","nombre":"Polvo suelto matte","marca":"Bloomshell","categoria":"polvos","precio":37500,"tonos":[],"fotos":["p055.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p056","nombre":"Polvo suelto","marca":"Raquel","categoria":"polvos","precio":26000,"tonos":["Rosado","Banana"],"fotos":["p056.jpeg","p056-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p057","nombre":"Polvo compacto","marca":"Samy","categoria":"polvos","precio":20000,"tonos":["Natural","Beige","Arena","Almendra","Aceituna","Canela","Tostado","Moka"],"fotos":["p057.jpg","p057-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p058","nombre":"Polvo suelto Banana 30 g","marca":"Atenea","categoria":"polvos","precio":85000,"tonos":[],"fotos":["p058.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p059","nombre":"Polvo compacto","marca":"Raquel","categoria":"polvos","precio":20000,"tonos":["Porcelana","Suave","Perfecta","Piel","Sensación","Gitano"],"fotos":["p059.jpeg","p059-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p060","nombre":"Pestañina","marca":"Prosa","categoria":"pestaninas","precio":22000,"tonos":["Tapa negra: Alargadora Clásica","Tapa negra: transparente - alargadora  Silicona","Tapa fucsia: Maxi-Volumen Silicona","Tapa Morada: Maxi-Volumen Clásico","Tapa Gris: Extensiones (Micro fibra)"],"fotos":["p060.jpeg","p060-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p061","nombre":"Pestañina Dramatic Volume","marca":"OG","categoria":"pestaninas","precio":28000,"tonos":[],"fotos":["p061.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p062","nombre":"Pestañina dúo","marca":"Hi Zis","categoria":"pestaninas","precio":22000,"tonos":[],"fotos":["p062.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p063","nombre":"Pestañina","marca":"ANI-K","categoria":"pestaninas","precio":27000,"tonos":[],"fotos":["p063.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p064","nombre":"Delineador de ojos y cejas","marca":"Raquel","categoria":"cejas","precio":16500,"tonos":["Brown","Coffe","Medium Brown"],"fotos":["p064.jpg","p064-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p065","nombre":"Gel de cejas","marca":"Rare Beauty","categoria":"cejas","precio":32000,"tonos":[],"fotos":["p065.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p066","nombre":"Got2b","marca":"","categoria":"cejas","precio":28000,"tonos":[],"fotos":["p066.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p067","nombre":"Pomada para cejas","marca":"Lula","categoria":"cejas","precio":15000,"tonos":["Claro","Café","Medio","Oscuro","Negro"],"fotos":["p067.jpeg","p067-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p068","nombre":"Gel para cejas y bordes 2 en 1","marca":"Afrodita","categoria":"cejas","precio":23500,"tonos":[],"fotos":["p068.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p069","nombre":"Primer","marca":"Hi Zis","categoria":"primers","precio":26000,"tonos":[],"fotos":["p069.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p070","nombre":"Primer matificante","marca":"Lula","categoria":"primers","precio":30000,"tonos":[],"fotos":["p070.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p071","nombre":"Primer hidratante Mística","marca":"Alma Beauty","categoria":"primers","precio":32000,"tonos":["Piel seca","Piel Grasa"],"fotos":["p071.jpg","p071-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p072","nombre":"Primer","marca":"Dolce Bella","categoria":"primers","precio":38000,"tonos":[],"fotos":["p072.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p073","nombre":"Fijador Dixy Fix 80 ml","marca":"Montoc","categoria":"fijadores","precio":35000,"tonos":[],"fotos":["p073.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p074","nombre":"Fijador 120 ml","marca":"Naba","categoria":"fijadores","precio":45000,"tonos":[],"fotos":["p074.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p075","nombre":"Fijador matte Serenity morado","marca":"Alma Beauty","categoria":"fijadores","precio":21500,"tonos":[],"fotos":["p075.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p076","nombre":"Fijador Dixy Fix 30 ml","marca":"Montoc","categoria":"fijadores","precio":30000,"tonos":[],"fotos":["p076.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p077","nombre":"Fijador 60 ml","marca":"Naba","categoria":"fijadores","precio":30000,"tonos":[],"fotos":["p077.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p078","nombre":"Lápiz de labios","marca":"Dragon Ranee","categoria":"labios","precio":6000,"tonos":["tono 01","tono 02","tono 03","tono 04","tono 05","tono 06","tono 07","tono 08","tono 09","tono 10","tono 11","tono 12"],"fotos":["p078.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p079","nombre":"Lápiz","marca":"Samy","categoria":"labios","precio":7000,"tonos":["Negro","Tobacco","Café oscuro","Canela","Laté","Chocolate","Cereza","Guinda","Cereza","Terracota","Nude","Champagne"],"fotos":["p079.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p080","nombre":"Lápiz delineador Clear Wine","marca":"Atenea","categoria":"labios","precio":15000,"tonos":["Good wood","Nude Darck","Goji Berry","Clear Wine","Dark Sand","Pale  Pink","Sunrise"],"fotos":["p080.jpeg","p080-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p081","nombre":"Bálsamo hidratante Pitaya","marca":"Lula","categoria":"labios","precio":14000,"tonos":[],"fotos":["p081.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p082","nombre":"Lip gloss","marca":"Ani-K","categoria":"labios","precio":20000,"tonos":["Rosa","Transparente","Rojo"],"fotos":["p082.jpeg","p082-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p083","nombre":"Lip gloss transparente","marca":"Engol","categoria":"labios","precio":5000,"tonos":["Lila","Lila suave","Rosa Durazno","Rosa Coral","Fucsia","Magenta","Uva","Transparente"],"fotos":["p083.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p084","nombre":"Lip gloss","marca":"Hi Zis","categoria":"labios","precio":15000,"tonos":["Celeste con brillo","Rosa con destellos tornasol","Rojo vino cremoso"],"fotos":["p084.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p085","nombre":"Brillo Cogin","marca":"Afrodita","categoria":"labios","precio":10000,"tonos":["Rosa Bebé","Rojo Cereza","Durazno","Transparente","Fucsia","Caramelo Nude"],"fotos":["p085.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p086","nombre":"Brillo labial Pure Glow","marca":"OG","categoria":"labios","precio":26000,"tonos":["tono 517","tono 518","tono 519","tono 520","tono 521","tono 522"],"fotos":["p086.jpeg","p086-2.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p087","nombre":"Labial matte Pure Glow","marca":"OG","categoria":"labios","precio":27000,"tonos":["tono 311","tono 312","tono 313","tono 314","tono 315","tono 316"],"fotos":["p087.jpeg","p087-1.jpeg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p088","nombre":"Lip gloss Romantic Rain","marca":"","categoria":"labios","precio":8000,"tonos":["Caramel Nude","Berry","Terracota","Rose","Nude Pink","Chocolate"],"fotos":["p088.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p089","nombre":"Set de brochas kabuki x10","marca":"","categoria":"accesorios","precio":15000,"tonos":[],"fotos":["p089.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p090","nombre":"Cosmetiquera washbag grande","marca":"","categoria":"accesorios","precio":22000,"tonos":[],"fotos":["p090.jpg","p090-1.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p091","nombre":"Beauty blender","marca":"","categoria":"accesorios","precio":3000,"tonos":[],"fotos":["p091.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p092","nombre":"Brocha doble para cejas","marca":"","categoria":"accesorios","precio":8000,"tonos":[],"fotos":["p092.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p093","nombre":"Brocha angular para polvo y rubor","marca":"","categoria":"accesorios","precio":18000,"tonos":[],"fotos":["p093.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p094","nombre":"Brocha kabuki doble premium","marca":"","categoria":"accesorios","precio":20000,"tonos":[],"fotos":["p094.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p095","nombre":"Set de borlas x3","marca":"Sagui","categoria":"accesorios","precio":15000,"tonos":[],"fotos":["p095.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p096","nombre":"Shimmer spray Golden Haze","marca":"","categoria":"shimmer","precio":20000,"tonos":[],"fotos":["p096.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p097","nombre":"Shimmer spray Hudamoji","marca":"","categoria":"shimmer","precio":15000,"tonos":["Silver Diamond","Rose Gold","Lilac Glow","Gold Champañe","Pearl","Bronze"],"fotos":["p097.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p098","nombre":"Shimmer spray Crystal","marca":"","categoria":"shimmer","precio":12500,"tonos":["Naranja","Rosado","Blanco","Lila"],"fotos":["p098.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p099","nombre":"Agua de rosas + aloe vera","marca":"Naba","categoria":"shimmer","precio":15000,"tonos":[],"fotos":["p099.jpg"],"agotado":false,"oculto":false,"descripcion":""},
    {"id":"p100","nombre":"Agua de rosas","marca":"Sagui","categoria":"shimmer","precio":15000,"tonos":[],"fotos":["p100.jpg"],"agotado":false,"oculto":false,"descripcion":""}
  ]
};
