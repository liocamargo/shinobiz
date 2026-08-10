const V = {
  otsutsuki:{n:"Ōtsutsuki",   k:"筒", c:"#b9a8d6", sub:"Clan celestial",       d:"No son shinobi: son el origen. Llegaron del cielo a cosechar el chakra del planeta y dejaron atrás a los dos linajes que se pelearon durante mil años."},
  clanes:{   n:"Clanes",      k:"氏", c:"#9aa3b0", sub:"Era sin aldeas",       d:"Antes de las aldeas había clanes mercenarios que se alquilaban a los países. Sin bandera, sin escuela, sin infancia."},
  konoha:{   n:"Konoha",      k:"木", c:"#5fa04a", sub:"País del Fuego",       d:"La primera aldea oculta. Nació de un pacto entre los dos clanes que más se odiaban, y esa contradicción la persiguió toda su historia."},
  suna:{     n:"Suna",        k:"砂", c:"#d9a441", sub:"País del Viento",      d:"La más chica de las cinco grandes y la más castigada por el presupuesto de su propio daimyō. De ahí salieron sus armas humanas."},
  kiri:{     n:"Kiri",        k:"霧", c:"#6f9fb8", sub:"País del Agua",        d:"La Aldea de la Niebla Sangrienta: graduarse era matar a un compañero de clase, y tener un kekkei genkai era motivo de purga."},
  kumo:{     n:"Kumo",        k:"雲", c:"#8f86c9", sub:"País del Rayo",        d:"La potencia militar más agresiva del continente. Coleccionó jinchūriki y linajes por la fuerza durante décadas."},
  iwa:{      n:"Iwa",         k:"岩", c:"#b0754a", sub:"País de la Tierra",    d:"Rival histórico de Konoha. Perdió una generación entera contra Minato y no lo olvidó nunca."},
  ame:{      n:"Ame",         k:"雨", c:"#4d86a8", sub:"País de la Lluvia",    d:"País chico y neutral, usado como campo de batalla por las tres grandes. De ese barro salieron Akatsuki y Pain."},
  oto:{      n:"Oto",         k:"音", c:"#a15fbb", sub:"Fundada por Orochimaru",d:"No es una aldea: es un laboratorio con bandana. Existe para conseguirle cuerpos a su fundador."},
  uzushio:{  n:"Uzushio",     k:"渦", c:"#d1603f", sub:"País del Remolino",    d:"Aldea del clan Uzumaki, maestros del fūinjutsu. Tres aldeas se aliaron para borrarla del mapa por miedo a sus sellos."},
  taki:{     n:"Taki",        k:"滝", c:"#3f9c86", sub:"País de la Cascada",   d:"Aldea menor pero rica y muy cerrada. Guardó al Nanabi y produjo al shinobi más viejo de Akatsuki."},
  akatsuki:{ n:"Akatsuki",    k:"暁", c:"#b02a37", sub:"Organización",         d:"Nació como movimiento pacifista de tres huérfanos de la lluvia. Terminó siendo el brazo ejecutor de un plan para dormir al mundo entero."},
  biju:{     n:"Bestias",      k:"尾", c:"#e08a3c", sub:"Las nueve con cola",    d:"No son animales: son chakra con nombre, personalidad y memoria. Hagoromo las separó del Jūbi y las repartió por el mundo para que nadie pudiera volver a juntarlas. Todos lo intentaron igual."},
  kara:{     n:"Kara",         k:"殻", c:"#8b96a6", sub:"Organización, era Boruto", d:"La organización de la generación siguiente: cuerpos modificados con ciencia en lugar de linaje heredado. Su líder no es del todo humano."}
};

const ERAS = [
  {id:"origen",       num:"I",    t:"La era de los dioses",        k:"神代", c:"#b9a8d6", when:"Antes de la historia"},
  {id:"clanes",       num:"II",   t:"La era de los clanes",        k:"戦国", c:"#9aa3b0", when:"≈ 100 a 60 años antes"},
  {id:"aldeas",       num:"III",  t:"Nacen las aldeas ocultas",    k:"隠里", c:"#5fa04a", when:"≈ 60 a 50 años antes"},
  {id:"guerras",      num:"IV",   t:"Las tres primeras guerras",   k:"大戦", c:"#d1462f", when:"≈ 45 a 20 años antes"},
  {id:"entreguerras", num:"V",    t:"Entreguerras: la paz sucia",  k:"影",   c:"#c9a35f", when:"≈ 20 a 4 años antes"},
  {id:"parte1",       num:"VI",   t:"Parte I: el Equipo 7",        k:"起",   c:"#5fa04a", when:"Año 0 a 1"},
  {id:"parte2",       num:"VII",  t:"Parte II: la caza",           k:"承",   c:"#8f86c9", when:"Año 3"},
  {id:"cuarta",       num:"VIII", t:"Cuarta Guerra y después",     k:"終",   c:"#d1462f", when:"Año 4 en adelante"}
];

const KINDS = {
  hito:      "Hito",
  fundacion: "Fundación",
  batalla:   "Batalla",
  muerte:    "Ruptura",
  guerra:    "Guerra"
};

const T = [
/* ---- I. ORIGEN ---- */
{e:"origen",k:"hito",w:"Mito",v:["otsutsuki"],ep:"Shippūden 460",t:"Kaguya come el fruto del Árbol Divino",
 d:"Kaguya Ōtsutsuki llega al planeta y come el fruto prohibido de un árbol que sólo daba fruto una vez cada mil años. Se convierte en la primera humana con chakra y usa ese poder para terminar una guerra y después para gobernar sola. La llamaron la Diosa Conejo."},
{e:"origen",k:"hito",w:"Mito",v:["otsutsuki"],ep:"Shippūden 460",t:"Nacen Hagoromo y Hamura",
 d:"Sus dos hijos son los primeros humanos que nacen ya con chakra, sin comer nada. Kaguya, que quería el poder para ella sola, empieza a ver a sus hijos como una amenaza."},
{e:"origen",k:"batalla",w:"Mito",v:["otsutsuki"],ep:"Shippūden 460–461",t:"El sellado del Diez Colas y el origen de la Luna",
 d:"Kaguya se fusiona con el Árbol Divino y se convierte en el Jūbi. Hagoromo y Hamura pelean contra su propia madre y la sellan: Hagoromo se vuelve el primer jinchūriki de la historia y la cáscara del Jūbi es lanzada al cielo. Esa cáscara es la Luna."},
{e:"origen",k:"fundacion",w:"Mito",v:["otsutsuki"],ep:"Shippūden 461",t:"Hagoromo funda el Ninshū",
 d:"El Sabio de los Seis Caminos recorre el mundo enseñando el chakra como una forma de conectar corazones, no como un arma. Es la única vez en toda la historia que alguien intenta esto en serio."},
{e:"origen",k:"hito",w:"Mito",v:["otsutsuki"],ep:"Shippūden 461",t:"Hamura se va a la Luna",
 d:"Con su clan, Hamura sube a vigilar el sello de Kaguya desde adentro. Su rama de la familia queda separada del mundo y recién vuelve a aparecer mil años después."},
{e:"origen",k:"hito",w:"Mito",v:["otsutsuki","biju"],ep:"Shippūden 463",t:"El Jūbi se divide en nueve",
 d:"Antes de morir, Hagoromo separa el chakra del Jūbi en nueve criaturas con nombre y personalidad propia, de una a nueve colas, y las manda a distintos rincones del mundo para que nadie pueda volver a juntarlas."},
{e:"origen",k:"muerte",w:"Mito",v:["otsutsuki"],ep:"Shippūden 462–463",t:"Indra y Asura: empieza el ciclo de odio",
 d:"Hagoromo elige como heredero a Asura, el hijo débil que entendió que la fuerza está en los demás, y no a Indra, el genio que podía todo solo. Indra ataca. Sus dos linajes se reencarnan una y otra vez durante siglos: los Uchiha descienden de uno, los Senju y los Uzumaki del otro."},

/* ---- II. CLANES ---- */
{e:"clanes",k:"hito",w:"≈ 100 años antes",v:["clanes"],t:"El Ninshū se convierte en ninjutsu",
 d:"Lo que Hagoromo enseñó como forma de entenderse termina vendido por metro cuadrado. Los clanes se alquilan a los países como mercenarios y el continente entra en guerra permanente. Los chicos entran al campo de batalla a los seis años."},
{e:"clanes",k:"hito",w:"≈ 100 años antes",v:["uzushio","clanes"],ep:"Shippūden 497–498",t:"Uzushiogakure y el clan Uzumaki",
 d:"En el País del Remolino, el clan Uzumaki desarrolla el fūinjutsu más avanzado del mundo. Son parientes lejanos de los Senju, viven mucho más que cualquier otro y tienen reservas de chakra descomunales. Ese poder les gana enemigos."},
{e:"clanes",k:"hito",w:"≈ 80 años antes",v:["clanes","konoha"],ep:"Shippūden 254–256",t:"Senju contra Uchiha",
 d:"Los dos clanes más fuertes del continente. Ningún daimyō podía contratar a los dos al mismo tiempo, así que siempre se los contrataba enfrentados. La rivalidad no era ideológica: era el modelo de negocio."},
{e:"clanes",k:"hito",w:"≈ 75 años antes",v:["clanes","konoha"],ep:"Shippūden 254",t:"Hashirama y Madara en la orilla del río",
 d:"Dos chicos que tiran piedras al agua y se cuentan el mismo sueño: un lugar donde los pibes no tengan que morir. Ninguno de los dos sabe todavía que son los herederos de los clanes que el otro tiene que matar."},
{e:"clanes",k:"muerte",w:"≈ 75 años antes",v:["clanes","konoha"],ep:"Shippūden 254–255",t:"Los hermanos muertos",
 d:"Hashirama pierde a Kawarama e Itama. Madara pierde a tres de sus cuatro hermanos. El sueño del río se rompe: cada uno vuelve a su clan y se convierte exactamente en lo que no quería ser."},
{e:"clanes",k:"hito",w:"≈ 70 años antes",v:["konoha"],ep:"Shippūden 256",t:"Madara y el Mangekyō Eterno",
 d:"Madara despierta el Mangekyō Sharingan con la muerte de sus seres queridos y, cuando la ceguera avanza, Izuna le entrega sus propios ojos al morir. Es el primer Mangekyō Eterno de la historia y el precio es siempre el mismo: alguien de tu sangre."},
{e:"clanes",k:"batalla",w:"≈ 62 años antes",v:["konoha","clanes"],ep:"Shippūden 255",t:"Hashirama se apuñala frente a Madara",
 d:"Para probar que la tregua es sincera, Hashirama se ofrece a matarse delante de Madara. Madara lo frena. Ese gesto —no una victoria— es lo que hace posible la primera aldea."},

/* ---- III. ALDEAS ---- */
{e:"aldeas",k:"fundacion",w:"≈ 60 años antes",v:["konoha","clanes"],ep:"Shippūden 254–256",t:"Se funda Konohagakure",
 d:"Senju y Uchiha firman la paz y levantan la primera aldea oculta de la historia. Se crea el cargo de Hokage y Hashirama es elegido. Por primera vez los chicos van a una escuela en vez de a un campo de batalla."},
{e:"aldeas",k:"fundacion",w:"≈ 58 años antes",v:["suna","kiri","kumo","iwa"],ep:"Shippūden 254",t:"Las otras cuatro grandes copian el modelo",
 d:"Kumo, Iwa, Kiri y Suna se organizan igual: una aldea oculta por país, un Kage al mando, un daimyō que paga. Nace el sistema shinobi tal como lo conocemos, con sus cinco potencias y decenas de aldeas menores en el medio."},
{e:"aldeas",k:"hito",w:"≈ 57 años antes",v:["konoha","suna","kiri","kumo","iwa","biju"],ep:"Shippūden 254–255",t:"La Cumbre de los Cinco Kage y el reparto de las bestias",
 d:"Hashirama, que capturó a casi todas las bestias con cola, las reparte entre las cinco aldeas para equilibrar el poder militar. La idea era evitar una guerra. El resultado fue convertir a nueve personas en armas con nombre y apellido."},
{e:"aldeas",k:"muerte",w:"≈ 55 años antes",v:["konoha"],ep:"Shippūden 255–256",t:"Madara deserta y muere en el Valle del Fin",
 d:"Madara no acepta que su clan quede relegado bajo un Hokage Senju, se va de la aldea y vuelve con el Kyūbi bajo control. Hashirama lo derrota en una batalla que parte la montaña en dos y deja el Valle del Fin. Madara se hace el muerto y desaparece cuarenta años."},
{e:"aldeas",k:"hito",w:"≈ 50 años antes",v:["konoha"],ep:"Shippūden 254",t:"Tobirama, Segundo Hokage",
 d:"Muerto Hashirama, su hermano organiza todo lo que hoy define a un shinobi: la Academia, los equipos de tres con un jōnin, el sistema de rangos, la ANBU. También crea la Policía Militar Uchiha, que suena a honor y funciona como vigilancia."},
{e:"aldeas",k:"hito",w:"≈ 48 años antes",v:["konoha","uzushio","biju"],ep:"Shippūden 497–498",t:"Mito Uzumaki, la primera jinchūriki del Kyūbi",
 d:"La esposa de Hashirama sella al Zorro de Nueve Colas dentro suyo con el fūinjutsu de su clan. A partir de ahí, el Kyūbi pasa de una mujer Uzumaki a la siguiente: Mito, después Kushina, después Naruto."},

/* ---- IV. GUERRAS ---- */
{e:"guerras",k:"guerra",w:"≈ 45 años antes",v:["konoha","suna","kiri","kumo","iwa"],t:"Primera Guerra Mundial Shinobi",
 num:"I", sides:"Las cinco grandes aldeas, todas contra todas",
 d:"El sistema de aldeas no terminó con las guerras: las hizo más grandes. Lo que antes eran escaramuzas entre clanes ahora son ejércitos nacionales enteros chocando en frentes que abarcan varios países."},
{e:"guerras",k:"muerte",w:"≈ 45 años antes",v:["konoha","kumo"],ep:"Shippūden 254",t:"Tobirama se sacrifica y nombra a Hiruzen",
 d:"Rodeado por el Escuadrón Kinkaku de Kumo, Tobirama se queda a pelear solo para que su equipo escape. Antes de irse designa Tercer Hokage a Hiruzen Sarutobi, el más joven del grupo."},
{e:"guerras",k:"muerte",w:"≈ 42 años antes",v:["uzushio","konoha"],ep:"Shippūden 497–498",t:"La destrucción de Uzushiogakure",
 d:"Varias aldeas se alían para arrasar el País del Remolino: el fūinjutsu Uzumaki les daba demasiado miedo. Los sobrevivientes se dispersan por el mundo. Konoha, aliada del clan, lleva el espiral Uzumaki en el uniforme desde entonces."},

{e:"guerras",k:"guerra",w:"≈ 35 años antes",v:["ame","konoha","suna","iwa"],t:"Segunda Guerra Mundial Shinobi",
 num:"II", sides:"Konoha, Iwa y Suna sobre el País de la Lluvia",
 d:"El campo de batalla principal es Amegakure, un país chico y neutral que queda justo en el medio de las tres potencias. La lluvia se convierte en un cementerio de huérfanos y de shinobi de bandera ajena."},
{e:"guerras",k:"batalla",w:"≈ 35 años antes",v:["konoha","ame"],ep:"Shippūden 133",t:"Nacen los Sannin",
 d:"Jiraiya, Tsunade y Orochimaru sobreviven tres días contra Hanzō de la Salamandra. Hanzō les perdona la vida y los bautiza los Tres Ninja Legendarios. Es el único elogio que un enemigo les hizo en toda su carrera."},
{e:"guerras",k:"hito",w:"≈ 33 años antes",v:["ame","konoha"],ep:"Shippūden 132–133",t:"Jiraiya entrena a Yahiko, Nagato y Konan",
 d:"Tres huérfanos de la lluvia le piden comida y él se queda tres años a enseñarles a sobrevivir. Se va convencido de que Nagato es el elegido de la profecía. Tenía razón, pero no como pensaba."},
{e:"guerras",k:"muerte",w:"≈ 32 años antes",v:["konoha"],ep:"Naruto 84–85",t:"Tsunade pierde a Nawaki y a Dan",
 d:"Su hermano menor y después el hombre que amaba mueren con el mismo sueño en la boca: ser Hokage. Tsunade desarrolla fobia a la sangre, abandona la aldea y se pasa décadas apostando y perdiendo."},
{e:"guerras",k:"hito",w:"≈ 30 años antes",v:["suna"],ep:"Shippūden 138",t:"Suna y las armas humanas",
 d:"Chiyo entrena a su nieto Sasori en el arte de las marionetas y desarrolla venenos para el frente. Sasori termina desertando y convirtiendo su propio cuerpo en marioneta para no envejecer nunca más."},

{e:"guerras",k:"guerra",w:"≈ 25 años antes",v:["konoha","iwa","kumo","suna","kiri"],ep:"Shippūden 119–120",t:"Tercera Guerra Mundial Shinobi",
 num:"III", sides:"Konoha contra Iwa, Kumo y Suna al mismo tiempo",
 d:"La más brutal de las tres. Konoha queda peleando en varios frentes a la vez y manda al combate a chicos de once y doce años con rango de jōnin. La generación de Kakashi es la que se rompe acá."},
{e:"guerras",k:"hito",w:"≈ 24 años antes",v:["konoha","iwa"],ep:"Shippūden 119–120",t:"Minato, el Rayo Amarillo de Konoha",
 d:"Un solo hombre liquida un batallón entero de Iwa con jutsu de teletransporte. Iwa emite una orden permanente para sus tropas: si lo ven, huyan. Es la única vez que una aldea admite por escrito que no puede con alguien."},
{e:"guerras",k:"batalla",w:"≈ 24 años antes",v:["konoha","iwa"],ep:"Shippūden 119–120",t:"El puente Kannabi: muere Obito",
 d:"Obito Uchiha queda aplastado por una roca salvando a Kakashi y le regala su Sharingan como regalo de ascenso a jōnin. Kakashi vive con ese ojo el resto de su vida. Obito, en realidad, no muere."},
{e:"guerras",k:"muerte",w:"≈ 24 años antes",v:["konoha","kiri"],ep:"Shippūden 120",t:"La muerte de Rin",
 d:"Kiri convierte a Rin en jinchūriki del Sanbi para usarla como bomba dentro de Konoha. Para evitarlo, ella se atraviesa sola con el Chidori de Kakashi. Obito ve la escena desde lejos, despierta el Mangekyō y decide que este mundo no vale la pena."},
{e:"guerras",k:"hito",w:"≈ 23 años antes",v:["kiri"],ep:"Naruto 9",t:"Kiri se gana el nombre de Niebla Sangrienta",
 d:"Bajo el Cuarto Mizukage, el examen final de la Academia consiste en matar a un compañero de clase, y los clanes con kekkei genkai son perseguidos y purgados. Un chico que ni siquiera era alumno entra y mata a los cien graduandos: Zabuza Momochi."},
{e:"guerras",k:"fundacion",w:"≈ 22 años antes",v:["akatsuki","ame"],ep:"Shippūden 132",t:"Nace Akatsuki",
 d:"Yahiko, Nagato y Konan fundan una organización para terminar con las guerras en el País de la Lluvia sin depender de ninguna gran aldea. Al principio es un grupo pacifista con mucha gente joven y ninguna capa negra con nubes rojas."},
{e:"guerras",k:"muerte",w:"≈ 21 años antes",v:["akatsuki","ame","konoha"],ep:"Shippūden 132",t:"Yahiko muere y nace Pain",
 d:"Hanzō, aliado con Danzō de Konoha, tiende una trampa: o Nagato mata a Yahiko o muere Konan. Yahiko se tira sobre el kunai que sostiene su amigo. Nagato despierta los Caminos del Dolor, arrasa a las tropas de Hanzō y decide que la paz sólo llega con el miedo."},
{e:"guerras",k:"hito",w:"≈ 20 años antes",v:["konoha"],ep:"Shippūden 120",t:"Minato, Cuarto Hokage, y el fin de la guerra",
 d:"La guerra termina con Konoha exhausta pero de pie. Minato asume como Cuarto Hokage y se casa con Kushina Uzumaki, la jinchūriki del Kyūbi. Duran tres años."},

/* ---- V. ENTREGUERRAS ---- */
{e:"entreguerras",k:"batalla",w:"Año −12",v:["konoha","uzushio","biju"],ep:"Naruto 1 · Shippūden 249",t:"El ataque del Kyūbi a Konoha",
 d:"La noche del parto de Naruto, un enmascarado saca al Kyūbi del sello debilitado de Kushina y lo suelta sobre la aldea. Minato y Kushina mueren sellando al zorro dentro de su hijo recién nacido. Hiruzen vuelve al cargo y a Naruto le queda el pueblo entero mirándolo mal sin explicarle por qué."},
{e:"entreguerras",k:"muerte",w:"Año −9",v:["konoha","kumo"],ep:"Naruto 79",t:"El incidente Hyūga",
 d:"Kumo intenta secuestrar a Hinata para robar el Byakugan. Konoha mata al secuestrador y Kumo exige el cuerpo de Hiashi como compensación. Hizashi, su hermano gemelo de la rama secundaria, va en su lugar y muere. La marca del pájaro enjaulado queda expuesta como lo que es."},
{e:"entreguerras",k:"hito",w:"Año −8",v:["konoha","oto"],ep:"Naruto 69",t:"Orochimaru deserta",
 d:"Hiruzen descubre su laboratorio de experimentos con cuerpos humanos y no es capaz de matar a su propio alumno. Orochimaru se va, funda Otogakure y empieza a buscar el recipiente perfecto para su inmortalidad."},
{e:"entreguerras",k:"muerte",w:"Año −4",v:["konoha","akatsuki"],ep:"Naruto 84–85",t:"La masacre del clan Uchiha",
 d:"El clan prepara un golpe de estado y Konoha decide exterminarlo antes. Itachi, agente doble de trece años, elige la aldea sobre su sangre y mata a todos en una noche, incluidos sus padres. Deja vivo a Sasuke y se hace odiar por él para que tenga una razón para vivir."},
{e:"entreguerras",k:"hito",w:"Año −6",v:["suna","biju"],ep:"Naruto 78–80",t:"Gaara, el arma de Suna",
 d:"El Cuarto Kazekage sella al Ichibi en su hijo antes de nacer y después manda a matarlo varias veces para probar si sirve. La última vez manda a Yashamaru, el único que lo quería. Gaara sobrevive a todo menos a eso."},
{e:"entreguerras",k:"hito",w:"Año −3",v:["kiri"],ep:"Shippūden 113 · 485",t:"Kiri se rebela contra Yagura",
 d:"La aldea entra en guerra civil contra su propio Mizukage, que estaba bajo genjutsu de Obito sin que nadie lo supiera. Mei Terumī lidera la resistencia. Zabuza intenta su propio golpe, fracasa y se vuelve un ninja renegado con un chico llamado Haku atrás."},

/* ---- VI. PARTE I ---- */
{e:"parte1",k:"hito",w:"Año 0",v:["konoha"],ep:"Naruto 3–5",t:"Se forma el Equipo 7",
 d:"Naruto, Sasuke y Sakura quedan bajo Kakashi Hatake. El examen de las campanas les enseña la única regla que importa: el que abandona a un compañero es peor que basura."},
{e:"parte1",k:"batalla",w:"Año 0",v:["konoha","kiri"],ep:"Naruto 7–19",t:"País de las Olas: Zabuza y Haku",
 d:"Primera misión seria y primera lección incómoda: Haku no era un villano, era un chico descartado por su aldea que eligió ser el arma de la única persona que lo miró. Naruto entiende ahí lo que el sistema shinobi le hace a la gente."},
{e:"parte1",k:"hito",w:"Año 0",v:["konoha","suna","oto"],ep:"Naruto 20–67",t:"Exámenes Chūnin",
 d:"El examen es también una vidriera política entre aldeas. Orochimaru se infiltra, le marca el cuello a Sasuke con el Sello Maldito y planta la semilla de todo lo que viene después."},
{e:"parte1",k:"batalla",w:"Año 0",v:["konoha","suna","oto"],ep:"Naruto 68–80",t:"Invasión de Konoha y muerte del Tercero",
 d:"Suna y Oto atacan durante la final. Orochimaru revive a Hashirama y Tobirama para pelear contra su propio maestro. Hiruzen no puede matarlo pero le sella los brazos para siempre, y muere haciéndolo. Suna descubre que su Kazekage ya estaba muerto y cambia de bando."},
{e:"parte1",k:"hito",w:"Año 1",v:["konoha"],ep:"Naruto 83–100",t:"Tsunade, Quinta Hokage",
 d:"Jiraiya y Naruto la encuentran apostando en un pueblo perdido. Vuelve a la aldea, cura lo que dejó la invasión y acepta el sombrero que le costó la vida a su hermano y a Dan."},
{e:"parte1",k:"batalla",w:"Año 1",v:["konoha","oto"],ep:"Naruto 133–135",t:"Sasuke deserta: otra vez el Valle del Fin",
 d:"Sasuke se va con Orochimaru buscando poder para matar a Itachi. Naruto lo alcanza y pelean sobre las estatuas de Hashirama y Madara, en el mismo lugar y con los mismos linajes. El ciclo de Indra y Asura se repite exacto."},
{e:"parte1",k:"hito",w:"Año 1",v:["konoha"],ep:"Naruto 135",t:"Naruto se va con Jiraiya",
 d:"Dos años y medio de entrenamiento fuera de la aldea. Sakura entrena con Tsunade y se convierte en médico. Sasuke entrena con Orochimaru. Cada uno se prepara para una pelea distinta."},

/* ---- VII. PARTE II ---- */
{e:"parte2",k:"batalla",w:"Año 3",v:["suna","akatsuki","konoha","biju"],ep:"Shippūden 1–8",t:"Akatsuki empieza a cazar bestias con cola",
 d:"Deidara y Sasori capturan a Gaara, ya Quinto Kazekage, y le extraen al Ichibi: eso lo mata. Chiyo lo revive entregando su propia vida, y muere reparando lo que su generación le hizo a la anterior."},
{e:"parte2",k:"muerte",w:"Año 3",v:["konoha","akatsuki"],ep:"Shippūden 80",t:"Muere Asuma Sarutobi",
 d:"Hidan y Kakuzu emboscan al Equipo 10. Shikamaru arma después la venganza más fría y mejor planeada de toda la serie, y entierra a Hidan vivo en el bosque de su clan."},
{e:"parte2",k:"batalla",w:"Año 3",v:["konoha","akatsuki","oto"],ep:"Shippūden 136–138",t:"Itachi contra Sasuke",
 d:"Itachi pelea enfermo, medicado y decidido a morir de pie frente a su hermano. Le transfiere sus ojos y el Susanoo lo protege del Sello Maldito. Sasuke se entera de la verdad recién después, y es lo peor que le podían hacer."},
{e:"parte2",k:"muerte",w:"Año 3",v:["konoha","ame","akatsuki"],ep:"Shippūden 127–133",t:"Muere Jiraiya en Amegakure",
 d:"Va solo a investigar quién es el líder de Akatsuki, descubre que es Nagato y muere en el agua escribiendo un último mensaje en la espalda de un sapo. Ese código es lo único que le deja a Naruto, y alcanza."},
{e:"parte2",k:"batalla",w:"Año 3",v:["konoha","ame","akatsuki"],ep:"Shippūden 152–169",t:"Invasión de Pain: Konoha desaparece del mapa",
 d:"Nagato borra la aldea entera con un solo jutsu. Naruto vuelve, lo derrota y después hace algo que nadie esperaba: se sienta a hablar con él. Nagato entrega su vida para revivir a todos los que mató. Es la primera vez que el ciclo se corta con palabras."},
{e:"parte2",k:"hito",w:"Año 3",v:["konoha","kumo","iwa","kiri","suna"],ep:"Shippūden 197–222",t:"Cumbre de los Cinco Kage",
 d:"Los cinco Kage se juntan para decidir qué hacer con Akatsuki. Sasuke irrumpe buscando a Danzō, Danzō huye y muere confesando lo que le hizo a los Uchiha, y las cinco aldeas declaran por primera vez una alianza militar conjunta."},
{e:"parte2",k:"hito",w:"Año 3",v:["konoha","kumo","biju"],ep:"Shippūden 243–253",t:"Naruto domina a Kurama",
  d:"En la Isla Tortuga, con Killer Bee como maestro, Naruto enfrenta su propio odio y termina haciendo las paces con el zorro que le arruinó la infancia. En el camino se encuentra con el chakra que Kushina le dejó guardado dieciséis años."},

/* ---- VIII. CUARTA ---- */
{e:"cuarta",k:"guerra",w:"Año 4",v:["konoha","suna","kiri","kumo","iwa","akatsuki"],ep:"Shippūden 261–394",t:"Cuarta Guerra Mundial Shinobi",
 num:"IV", sides:"Las cinco aldeas unidas contra Akatsuki y el Ejército del Edo Tensei",
 d:"Por primera vez en la historia las cinco grandes pelean del mismo lado: ochenta mil shinobi en una sola Alianza, divididos por especialidad y no por bandera. Enfrente, un ejército de muertos revividos y un plan para meter a la humanidad entera en un sueño."},
{e:"cuarta",k:"batalla",w:"Año 4",v:["konoha","akatsuki","oto"],ep:"Shippūden 266–291",t:"El ejército de los muertos",
 d:"Kabuto revive con Edo Tensei a Kages, Akatsuki caídos, jinchūriki y a los Siete Espadachines de la Niebla. Pelear contra tus propios maestros y tus propios muertos es la parte más cruel de la guerra. Itachi, revivido, rompe la técnica desde adentro."},
{e:"cuarta",k:"batalla",w:"Año 4",v:["konoha","akatsuki","biju"],ep:"Shippūden 329–345",t:"Renace el Diez Colas",
 d:"Obito y Madara reúnen a las nueve bestias y reconstruyen al Jūbi por primera vez en mil años. Los dos llegan a ser su jinchūriki. La guerra deja de ser entre aldeas y pasa a ser el mundo contra dos personas."},
{e:"cuarta",k:"hito",w:"Año 4",v:["konoha"],ep:"Shippūden 363",t:"Vuelven los cuatro Hokage",
 d:"Orochimaru revive a Hashirama, Tobirama, Hiruzen y Minato, y esta vez del lado de la Alianza. Sasuke los escucha explicar por qué se fundó la aldea y decide, ahí mismo, que en vez de destruirla la va a dirigir."},
{e:"cuarta",k:"batalla",w:"Año 4",v:["otsutsuki","konoha"],ep:"Shippūden 459–466",t:"Kaguya Ōtsutsuki",
 d:"Zetsu Negro traiciona a Madara y lo usa de recipiente para revivir a su madre. El Equipo 7 completo, con Kakashi y Sakura, pelea contra la diosa original. Hagoromo le da a Naruto y a Sasuke el poder del Sol y la Luna, y entre los dos la vuelven a sellar."},
{e:"cuarta",k:"batalla",w:"Año 4",v:["konoha"],ep:"Shippūden 476–479",t:"Valle del Fin, por última vez",
 d:"Sasuke quiere ser el villano del mundo entero para unirlo en el odio hacia él. Naruto se niega a dejarlo ir. Pelean hasta quedar tirados sin un brazo cada uno, y ahí, tirados, hablan. El ciclo de Indra y Asura se termina después de mil años."},
{e:"cuarta",k:"hito",w:"Año 4",v:["konoha"],ep:"Shippūden 480",t:"Kakashi, Sexto Hokage",
 d:"Le toca reconstruir. Se disuelven las estructuras de la guerra, se mantiene la alianza entre aldeas y se crea un sistema conjunto de exámenes y misiones. Es la primera década de paz real desde Hagoromo."},
{e:"cuarta",k:"hito",w:"Año 19",v:["konoha"],ep:"Shippūden 500 · Boruto 1",t:"Naruto, Séptimo Hokage",
 d:"El huérfano que la aldea entera decidió no mirar termina elegido por esa misma aldea. La aldea tiene luz eléctrica, trenes y pantallas, y los chicos ya no van a la guerra a los seis años. Eso era, desde el principio, todo el punto."}
];

const CHARS = [
  ["A (Primer Raikage)",["kumo"],"Primer Raikage, fundador"],
  ["A (Segundo Raikage)",["kumo"],"Segundo Raikage"],
  ["A (Tercer Raikage)",["kumo"],"Tercer Raikage, invencible tres días"],
  ["A (Cuarto Raikage)",["kumo"],"Cuarto Raikage, manto de rayo"],
  ["Darui",["kumo"],"Quinto Raikage, Estilo Tormenta"],
  ["Killer Bee",["kumo","biju"],"Jinchūriki del Hachibi"],
  ["Yugito Nii",["kumo","biju"],"Jinchūriki del Nibi"],
  ["Blue B",["kumo","biju"],"Jinchūriki anterior del Hachibi"],
  ["C",["kumo"],"Sensor y médico del Raikage"],
  ["Mabui",["kumo"],"Asistente del Raikage"],
  ["Samui",["kumo"],"Líder de escuadrón"],
  ["Karui",["kumo"],"Equipo Samui"],
  ["Omoi",["kumo"],"Equipo Samui"],
  ["Dodai",["kumo"],"Jōnin veterano, Estilo Lava"],
  ["Ginkaku",["kumo"],"Hermanos de Oro y Plata"],
  ["Kinkaku",["kumo"],"Hermanos de Oro y Plata"],
  ["Troi",["kumo"],"Estilo Magnético"],
  ["Hashirama Senju",["konoha","clanes"],"Primer Hokage, Mokuton"],
  ["Tobirama Senju",["konoha","clanes"],"Segundo Hokage, Edo Tensei"],
  ["Hiruzen Sarutobi",["konoha"],"Tercer Hokage, el Profesor"],
  ["Minato Namikaze",["konoha"],"Cuarto Hokage, el Rayo Amarillo"],
  ["Tsunade",["konoha"],"Quinta Hokage, Sannin"],
  ["Kakashi Hatake",["konoha"],"Sexto Hokage, el Ninja Copia"],
  ["Naruto Uzumaki",["konoha","uzushio","biju"],"Séptimo Hokage, jinchūriki de Kurama"],
  ["Jiraiya",["konoha"],"Sannin, el Sabio Sapo"],
  ["Orochimaru",["konoha","oto","akatsuki"],"Sannin, desertor"],
  ["Madara Uchiha",["clanes","konoha","akatsuki"],"Cofundador de Konoha, desertor"],
  ["Izuna Uchiha",["clanes"],"Hermano menor de Madara"],
  ["Itachi Uchiha",["konoha","akatsuki"],"ANBU y agente doble"],
  ["Sasuke Uchiha",["konoha"],"Equipo 7, Rinnegan"],
  ["Shisui Uchiha",["konoha"],"El Teletransportador, Kotoamatsukami"],
  ["Obito Uchiha",["konoha","akatsuki"],"Equipo Minato, Tobi"],
  ["Fugaku Uchiha",["konoha"],"Líder del clan Uchiha"],
  ["Mikoto Uchiha",["konoha"],"Madre de Itachi y Sasuke"],
  ["Sarada Uchiha",["konoha"],"Nueva generación, Sharingan"],
  ["Sakura Haruno",["konoha"],"Equipo 7, ninja médico"],
  ["Sai",["konoha"],"Raíz, Equipo 7"],
  ["Yamato",["konoha"],"Mokuton artificial, ANBU"],
  ["Kushina Uzumaki",["konoha","uzushio","biju"],"Jinchūriki del Kyūbi, madre de Naruto"],
  ["Mito Uzumaki",["konoha","uzushio","biju"],"Primera jinchūriki del Kyūbi"],
  ["Danzo Shimura",["konoha"],"Fundador de Raíz"],
  ["Koharu Utatane",["konoha"],"Consejera del Hokage"],
  ["Homura Mitokado",["konoha"],"Consejero del Hokage"],
  ["Hiashi Hyūga",["konoha"],"Líder del clan Hyūga"],
  ["Hizashi Hyūga",["konoha"],"Rama secundaria, gemelo de Hiashi"],
  ["Neji Hyūga",["konoha"],"Equipo Guy, genio Hyūga"],
  ["Hinata Hyūga",["konoha"],"Equipo 8"],
  ["Hanabi Hyūga",["konoha"],"Heredera del clan Hyūga"],
  ["Shikamaru Nara",["konoha"],"Equipo 10, estratega"],
  ["Shikaku Nara",["konoha"],"Jefe de estrategia de la Alianza"],
  ["Yoshino Nara",["konoha"],"Madre de Shikamaru"],
  ["Shikadai Nara",["konoha"],"Nueva generación"],
  ["Chōji Akimichi",["konoha"],"Equipo 10"],
  ["Chōza Akimichi",["konoha"],"Padre de Chōji"],
  ["Chōchō Akimichi",["konoha"],"Nueva generación"],
  ["Ino Yamanaka",["konoha"],"Equipo 10"],
  ["Inoichi Yamanaka",["konoha"],"Inteligencia y sensores"],
  ["Inojin Yamanaka",["konoha"],"Nueva generación"],
  ["Asuma Sarutobi",["konoha"],"Sensei del Equipo 10"],
  ["Kurenai Yūhi",["konoha"],"Sensei del Equipo 8, genjutsu"],
  ["Mirai Sarutobi",["konoha"],"Hija de Asuma y Kurenai"],
  ["Konohamaru Sarutobi",["konoha"],"Nieto del Tercero"],
  ["Biwako Sarutobi",["konoha"],"Esposa de Hiruzen"],
  ["Might Guy",["konoha"],"Las Ocho Puertas"],
  ["Rock Lee",["konoha"],"Sólo taijutsu"],
  ["Metal Lee",["konoha"],"Nueva generación"],
  ["Tenten",["konoha"],"Equipo Guy, armas"],
  ["Kiba Inuzuka",["konoha"],"Equipo 8"],
  ["Akamaru",["konoha"],"Ninken de Kiba"],
  ["Hana Inuzuka",["konoha"],"Veterinaria ninja"],
  ["Tsume Inuzuka",["konoha"],"Líder del clan Inuzuka"],
  ["Shino Aburame",["konoha"],"Equipo 8, insectos"],
  ["Shibi Aburame",["konoha"],"Líder del clan Aburame"],
  ["Iruka Umino",["konoha"],"Academia"],
  ["Shizune",["konoha"],"Ninja médico, aprendiz de Tsunade"],
  ["Anko Mitarashi",["konoha","oto"],"Ex alumna de Orochimaru"],
  ["Ibiki Morino",["konoha"],"Interrogatorio y tortura"],
  ["Ebisu",["konoha"],"Tutor de élite"],
  ["Genma Shiranui",["konoha"],"Guardia del Hokage"],
  ["Raido Namiashi",["konoha"],"Guardia del Hokage"],
  ["Aoba Yamashiro",["konoha"],"Jōnin sensor"],
  ["Hayate Gekkō",["konoha"],"Árbitro de los exámenes Chūnin"],
  ["Izumo Kamizuki",["konoha"],"Guardia de la puerta"],
  ["Kotetsu Hagane",["konoha"],"Guardia de la puerta"],
  ["Rin Nohara",["konoha","biju"],"Equipo Minato, jinchūriki del Sanbi"],
  ["Nawaki",["konoha"],"Hermano menor de Tsunade"],
  ["Dan Katō",["konoha"],"Pareja de Tsunade"],
  ["Teuchi",["konoha"],"Ichiraku Ramen"],
  ["Ayame",["konoha"],"Ichiraku Ramen"],
  ["Boruto Uzumaki",["konoha"],"Nueva generación, hijo de Naruto"],
  ["Mitsuki",["konoha","oto"],"Nueva generación, hijo de Orochimaru"],
  ["Kawaki",["konoha","kara"],"Recipiente de Isshiki"],
  ["Moegi Kazamatsuri",["konoha"],"Equipo Konohamaru"],
  ["Udon Ise",["konoha"],"Equipo Konohamaru"],
  ["Sumire Kakei",["konoha"],"Nueva generación"],
  ["Denki Kaminarimon",["konoha"],"Nueva generación"],
  ["Iwabee Yuino",["konoha"],"Nueva generación"],
  ["Houki Taketori",["konoha"],"Nueva generación"],
  ["Namida Suzumeno",["konoha"],"Nueva generación"],
  ["Wasabi Izuno",["konoha"],"Nueva generación"],
  ["Tsubaki Kurogane",["konoha"],"Nueva generación, samurái"],
  ["Hako Kuroi",["konoha"],"Nueva generación"],
  ["Gaara",["suna","biju"],"Quinto Kazekage, jinchūriki del Ichibi"],
  ["Rasa (Cuarto Kazekage)",["suna"],"Padre de Gaara"],
  ["Tercer Kazekage",["suna"],"Estilo Magnético, Hierro Ardiente"],
  ["Temari",["suna"],"Abanico, hermana de Gaara"],
  ["Kankurō",["suna"],"Marionetas, hermano de Gaara"],
  ["Karura",["suna"],"Madre de Gaara"],
  ["Yashamaru",["suna"],"Tío de Gaara"],
  ["Chiyo",["suna"],"Anciana, marionetas y veneno"],
  ["Ebizō",["suna"],"Anciano, hermano de Chiyo"],
  ["Sasori",["suna","akatsuki"],"Desertor, marioneta humana"],
  ["Baki",["suna"],"Jōnin sensei y consejero"],
  ["Pakkura",["suna"],"Estilo Quemar"],
  ["Maki",["suna"],"Estilo Tela"],
  ["Yagura (Cuarto Mizukage)",["kiri","biju"],"Jinchūriki del Sanbi"],
  ["Gengetsu Hōzuki (Segundo Mizukage)",["kiri"],"Clan Hōzuki"],
  ["Mei Terumī (Quinta Mizukage)",["kiri"],"Lava y Vapor"],
  ["Chōjūrō",["kiri"],"Sexto Mizukage, Hiramekarei"],
  ["Ao",["kiri"],"Sensor con Byakugan"],
  ["Zabuza Momochi",["kiri"],"Espadachín, Kubikiribōchō"],
  ["Haku",["kiri"],"Hyōton, compañero de Zabuza"],
  ["Kisame Hoshigaki",["kiri","akatsuki"],"Espadachín, Samehada"],
  ["Fuguki Suikazan",["kiri"],"Espadachín, Samehada"],
  ["Mangetsu Hōzuki",["kiri"],"Dominó las siete espadas"],
  ["Suigetsu Hōzuki",["kiri","oto"],"Taka, Kubikiribōchō"],
  ["Jinin Akebino",["kiri"],"Espadachín, Kabutowari"],
  ["Jinpachi Munashi",["kiri"],"Espadachín, Shibuki"],
  ["Kushimaru Kuriarare",["kiri"],"Espadachín, Nuibari"],
  ["Ameyuri Ringo",["kiri"],"Espadachín, Kiba"],
  ["Jūzō Biwa",["kiri","akatsuki"],"Espadachín renegado"],
  ["Raiga Kurosuki",["kiri"],"Espadachín renegado, Kiba"],
  ["Utakata",["kiri","biju"],"Jinchūriki del Rokubi"],
  ["Renga Kokubou",["kiri"],"Jōnin"],
  ["Ishikawa (Primer Tsuchikage)",["iwa"],"Fundador de Iwagakure"],
  ["Mū (Segundo Tsuchikage)",["iwa"],"Estilo Polvo, sin presencia"],
  ["Ōnoki (Tercer Tsuchikage)",["iwa"],"Estilo Polvo, el Cerrojo"],
  ["Kurotsuchi",["iwa"],"Cuarta Tsuchikage"],
  ["Kitsuchi",["iwa"],"Comandante de división"],
  ["Akatsuchi",["iwa"],"Guardia del Tsuchikage"],
  ["Deidara",["iwa","akatsuki"],"Desertor, arcilla explosiva"],
  ["Han",["iwa","biju"],"Jinchūriki del Gobi"],
  ["Rōshi",["iwa","biju"],"Jinchūriki del Yonbi"],
  ["Gari",["iwa"],"Estilo Explosión"],
  ["Hanzō",["ame"],"El de la Salamandra"],
  ["Pain (Nagato)",["ame","uzushio","akatsuki"],"Rinnegan, Seis Caminos del Dolor"],
  ["Konan",["ame","akatsuki"],"Ángel de papel"],
  ["Yahiko",["ame","akatsuki"],"Fundador de Akatsuki"],
  ["Kabuto Yakushi",["oto"],"Mano derecha de Orochimaru"],
  ["Kimimaro",["oto"],"Clan Kaguya, Shikotsumyaku"],
  ["Jūgo",["oto"],"Origen del Sello Maldito"],
  ["Karin",["oto","uzushio"],"Uzumaki, sensora"],
  ["Sakon",["oto"],"Cuatro del Sonido"],
  ["Ukon",["oto"],"Cuatro del Sonido"],
  ["Tayuya",["oto"],"Cuatro del Sonido"],
  ["Kidōmaru",["oto"],"Cuatro del Sonido"],
  ["Jirōbō",["oto"],"Cuatro del Sonido"],
  ["Dosu Kinuta",["oto"],"Equipo de Oto, exámenes Chūnin"],
  ["Kin Tsuchi",["oto"],"Equipo de Oto, exámenes Chūnin"],
  ["Zaku Abumi",["oto"],"Equipo de Oto, exámenes Chūnin"],
  ["Guren",["oto"],"Estilo Cristal"],
  ["Amachi",["oto"],"Científico al servicio de Orochimaru"],
  ["Kakuzu",["taki","akatsuki"],"Cinco corazones, el tesorero"],
  ["Fū",["taki","biju"],"Jinchūriki del Nanabi"],
  ["Shibuki",["taki"],"Líder de Takigakure"],
  ["Hidan",["akatsuki"],"Ritual Jashin, inmortal"],
  ["Zetsu (Blanco y Negro)",["akatsuki","otsutsuki"],"Espía y voluntad de Kaguya"],
  ["Kaguya Ōtsutsuki",["otsutsuki"],"La Diosa Conejo"],
  ["Hagoromo Ōtsutsuki",["otsutsuki"],"Sabio de los Seis Caminos"],
  ["Hamura Ōtsutsuki",["otsutsuki"],"Rama de la Luna"],
  ["Indra Ōtsutsuki",["otsutsuki"],"Ancestro de los Uchiha"],
  ["Asura Ōtsutsuki",["otsutsuki"],"Ancestro de Senju y Uzumaki"],
  ["Toneri Ōtsutsuki",["otsutsuki"],"Heredero de la rama lunar"],
  ["Momoshiki Ōtsutsuki",["otsutsuki"],"Recolector de chakra"],
  ["Kinshiki Ōtsutsuki",["otsutsuki"],"Escolta de Momoshiki"],
  ["Urashiki Ōtsutsuki",["otsutsuki"],"Ladrón de chakra"],
  ["Isshiki Ōtsutsuki",["otsutsuki","kara"],"El verdadero Jigen"],
  ["Jigen",["kara","otsutsuki"],"Líder de Kara"],
  ["Amado",["kara"],"Científico jefe, desertor"],
  ["Kashin Koji",["kara"],"Clon de Jiraiya"],
  ["Delta",["kara"],"Interior, ojos científicos"],
  ["Boro",["kara"],"Interior, regeneración"],
  ["Code",["kara"],"Interior, marcas blancas"],
  ["Deepa",["kara"],"Interior, carbono"],
  ["Victor",["kara"],"Interior, empresario"],
  ["Ada (Eida)",["kara"],"Percepción total y fascinación"],
  ["Daemon",["kara"],"Hermano de Eida"],
  ["Shukaku (1 Cola)",["biju"],"Ichibi, tanuki de arena"],
  ["Matatabi (2 Colas)",["biju"],"Nibi, gata de fuego"],
  ["Isobu (3 Colas)",["biju"],"Sanbi, tortuga"],
  ["Son Gokū (4 Colas)",["biju"],"Yonbi, mono de lava"],
  ["Kokuō (5 Colas)",["biju"],"Gobi, caballo de vapor"],
  ["Saiken (6 Colas)",["biju"],"Rokubi, babosa"],
  ["Chōmei (7 Colas)",["biju"],"Nanabi, escarabajo"],
  ["Gyūki (8 Colas)",["biju"],"Hachibi, buey-pulpo"],
  ["Kurama (9 Colas)",["biju"],"Kyūbi, el zorro"]
];

const PROTA = new Set([
  "Naruto Uzumaki","Sasuke Uchiha","Sakura Haruno","Kakashi Hatake",
  "Jiraiya","Tsunade","Orochimaru","Itachi Uchiha","Sai","Yamato",
  "Shikamaru Nara","Hinata Hyūga","Rock Lee","Neji Hyūga","Gaara",
  "Killer Bee","Minato Namikaze","Kushina Uzumaki","Pain (Nagato)",
  "Obito Uchiha","Madara Uchiha","Kurama (9 Colas)",
  "Boruto Uzumaki","Sarada Uchiha","Mitsuki","Kawaki"
]);

const TYPE_COLOR = { canon:"#5fa04a", mixto:"#c9a35f", relleno:"#b0333a", anime:"#6f9fb8" };

const TYPE_NAME  = { canon:"Canon del manga", mixto:"Mixto canon/relleno", relleno:"Relleno", anime:"Canon del anime" };

const SERIES = {
  naruto:{
    label:"Naruto (2002–2007)", total:220, min:23,
    canon:[[1,6],[8,8],[10,13],[17,17],[22,22],[25,25],[31,36],[42,42],[48,48],[50,51],[61,62],[64,65],[67,68],[73,73],[75,82],[84,96],[107,111],[115,125],[128,129],[132,135]],
    mixto:[[7,7],[9,9],[14,16],[18,21],[23,24],[27,30],[37,41],[43,47],[49,49],[52,60],[63,63],[66,66],[69,72],[74,74],[83,83],[98,100],[112,114],[126,127],[130,131],[141,142],[220,220]],
    relleno:[[26,26],[97,97],[101,106],[136,140],[143,219]],
    anime:[],
    arcs:[
      [[26,26],"Reportaje desde el Bosque de la Muerte","Un episodio-resumen disfrazado de programa de TV. Cero historia nueva.",false],
      [[97,97],"Secuestro en las aguas termales","Comedia suelta entre la búsqueda de Tsunade y el arco siguiente.",false],
      [[101,101],"La cara verdadera de Kakashi","El Equipo 7 se obsesiona con verle la cara al sensei. Clásico absoluto del relleno.",true],
      [[102,106],"Escolta en el País del Té","Una carrera-misión con Idate. Correcta, larga, prescindible.",false],
      [[136,140],"Investigación en el País de los Arrozales","El clan Fūma y una base de Orochimaru. Roza el canon sin serlo.",false],
      [[143,151],"Mizuki contraataca y el escarabajo Bikōchū","Vuelve el traidor del episodio 1. Tiene material para fans de Hinata y Shino.",false],
      [[152,157],"La familia Kurosuki","Aparece Raiga, un Espadachín de la Niebla inventado por el anime. Bien dirigido.",false],
      [[158,177],"Misiones sueltas y el Guerrero Maldito","Bloque largo de misiones de relleno sin conexión entre sí.",false],
      [[178,183],"La aldea de las Estrellas","Arco propio del anime sobre un chakra que mata a quien lo entrena. De los mejores del bloque.",true],
      [[184,196],"Comedia y el Tercer Súper Bestia","Casi todo descartable, salvo 195-196: Guy y Lee a pura Puerta abierta.",true],
      [[197,207],"Los 11 de Konoha y el pasado de Kurenai","Yakumo y el genjutsu. Le da a Kurenai el único desarrollo que tiene en toda la serie.",false],
      [[208,215],"Recuerdos borrados","Relleno de transición antes del cierre.",false],
      [[216,219],"Apoyo a Sunagakure","El último arco de la serie clásica. Sirve como puente emocional hacia Shippūden.",true]
    ]
  },
  shippuden:{
    label:"Naruto Shippūden (2007–2017)", total:500, min:23,
    canon:[[20,23],[26,27],[29,44],[46,48],[51,53],[55,55],[72,88],[114,114],[116,126],[129,143],[152,169],[172,175],[197,212],[214,222],[243,253],[255,256],[261,270],[272,278],[282,283],[297,302],[321,323],[325,326],[329,329],[332,337],[339,345],[363,375],[378,384],[387,387],[391,393],[414,414],[418,418],[420,421],[424,425],[459,459],[463,463],[470,470],[473,477],[484,500]],
    mixto:[[1,19],[24,25],[45,45],[49,50],[54,54],[56,56],[89,90],[113,113],[115,115],[127,128],[213,213],[254,254],[296,296],[324,324],[327,328],[330,331],[338,338],[346,346],[362,362],[385,386],[415,415],[419,419],[426,426],[451,458],[460,462],[469,469],[471,472],[478,479]],
    relleno:[[57,71],[91,112],[144,151],[170,171],[176,196],[223,242],[257,260],[271,271],[279,281],[284,295],[303,320],[347,361],[376,377],[388,390],[394,413],[416,417],[422,423],[427,450],[464,468],[480,483]],
    anime:[[28,28]],
    arcs:[
      [[57,71],"Los Doce Guardianes Ninja","Sora, un chico con chakra del Kyūbi. Largo, pero es de los rellenos mejor construidos.",true],
      [[91,112],"Persecución del Tres Colas","Guren y el Estilo Cristal. Mucho relleno, algún combate decente.",false],
      [[144,151],"El Seis Colas: Utakata y Hotaru","Amplía un jinchūriki que el manga apenas menciona.",false],
      [[170,171],"El legado del Cuarto Hokage","Dos episodios sueltos de aventura.",false],
      [[176,196],"Recuerdos de Konoha","Iruka, Neji, Kakashi y los demás en episodios individuales. Irregular, con algunas joyas de personaje.",false],
      [[223,242],"Aventuras en alta mar","Barcos fantasma, islas y comedia mientras el manga tomaba aire. Salteable entero.",false],
      [[257,260],"La infancia de Naruto y Sasuke","Cuatro episodios de flashbacks sobre cómo se cruzaron de chicos.",false],
      [[271,271],"Road to Sakura","Episodio promocional de la película. Divertido y aislado.",false],
      [[279,281],"La trampa de Zetsu Blanco","Relleno insertado dentro de la Cuarta Guerra.",false],
      [[284,289],"Los Siete Espadachines de la Niebla","Los espadachines revividos, uno por episodio. Buenos combates.",false],
      [[290,295],"Chikara","Miniserie de seis episodios con animación y dirección muy por encima del promedio.",true],
      [[303,320],"Relleno dentro de la guerra","El bloque más frustrante: corta la guerra justo en el clímax.",false],
      [[347,348],"El nuevo Akatsuki","Transición hacia el arco siguiente.",false],
      [[349,361],"Kakashi: Sombra del ANBU","El pasado de Kakashi entre la muerte de Minato y la masacre Uchiha. Es el mejor relleno de toda la franquicia.",true],
      [[376,413],"Novelas adaptadas y flashbacks","Bloque largo que adapta historias laterales mientras el manga terminaba.",false],
      [[416,450],"Relleno del tramo final","Más historias paralelas intercaladas en la recta final de la guerra.",false],
      [[464,483],"Últimos rellenos","Bloques cortos antes del cierre definitivo en el episodio 500.",false]
    ]
  }
};

const MODES = { all:"Mostrar todo", canon:"Resaltar solo lo canon", relleno:"Resaltar solo el relleno" };

/* Qué tramo de episodios corresponde a cada era, para comparar contra la cronología */
const ERA_EPISODES = {
  parte1: {serie:"naruto",    from:1,   to:220, label:"Naruto clásico"},
  parte2: {serie:"shippuden", from:1,   to:222, label:"Shippūden"},
  cuarta: {serie:"shippuden", from:223, to:500, label:"Shippūden"}
};
function sliceCounts(serieId, from, to){
  const types = expand(SERIES[serieId]);
  const out = {canon:0,mixto:0,relleno:0,anime:0,total:to-from+1};
  for(let i=from;i<=to;i++) out[types[i]]++;
  return out;
}


/* ============ RETRATOS ============ */
/* Poné las ilustraciones en la carpeta img/ con el nombre que muestra el botón
   "Copiar nombres de archivo". Cambiá FACE_DIR o FACE_EXT si usás otra ruta o formato. */
const FACE_DIR = "img/";
const FACE_EXT = ".png";
const slug = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");
const faceSrc = name => FACE_DIR + slug(name) + FACE_EXT;

const esc = s => String(s).replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ============ ESTADO ============ */
const state  = { q:"", villages:new Set(), eras:new Set(), kinds:new Set(), cmpChars:true, cmpEps:true };
const cstate = { q:"", affil:new Set() };
const fstate = { serie:"naruto", mode:"all", hl:null };

/* ============ FILTROS: LÍNEA ============ */
const elV = document.getElementById("f-villages");
const IN_TIMELINE = new Set(T.flatMap(i=>i.v));
Object.entries(V).filter(([id])=>IN_TIMELINE.has(id)).forEach(([id,v])=>{
  const b=document.createElement("button");
  b.className="plate"; b.type="button"; b.setAttribute("aria-pressed","false");
  b.style.setProperty("--vc", v.c); b.dataset.v=id;
  b.innerHTML=`<span class="k">${v.k}</span><span class="n">${v.n}</span>`;
  b.addEventListener("click",()=>toggle(state.villages,id,b,render));
  elV.appendChild(b);
});
const elE=document.getElementById("f-eras");
ERAS.forEach(e=>{
  const b=document.createElement("button");
  b.className="chip"; b.type="button"; b.setAttribute("aria-pressed","false");
  b.textContent=`${e.num}. ${e.t}`;
  b.addEventListener("click",()=>toggle(state.eras,e.id,b,render));
  elE.appendChild(b);
});
const elK=document.getElementById("f-kinds");
Object.entries(KINDS).forEach(([id,label])=>{
  const b=document.createElement("button");
  b.className="chip"+(id==="guerra"?" war":""); b.type="button";
  b.setAttribute("aria-pressed","false"); b.textContent=label; b.dataset.k=id;
  b.addEventListener("click",()=>toggle(state.kinds,id,b,render));
  elK.appendChild(b);
});
function toggle(set,id,btn,cb){
  if(set.has(id)){ set.delete(id); btn.setAttribute("aria-pressed","false"); }
  else { set.add(id); btn.setAttribute("aria-pressed","true"); }
  cb();
}
document.getElementById("q").addEventListener("input",e=>{ state.q=e.target.value.trim().toLowerCase(); render(); });
document.getElementById("clear").addEventListener("click",()=>{
  state.q=""; state.villages.clear(); state.eras.clear(); state.kinds.clear();
  document.getElementById("q").value="";
  document.getElementById("panel-linea").querySelectorAll('[aria-pressed="true"]').forEach(b=>b.setAttribute("aria-pressed","false"));
  render();
});
document.getElementById("only-wars").addEventListener("click",()=>{
  state.kinds.clear(); state.kinds.add("guerra");
  elK.querySelectorAll(".chip").forEach(b=>b.setAttribute("aria-pressed", b.dataset.k==="guerra"?"true":"false"));
  showTab("linea"); render();
});
document.getElementById("cmp-chars").addEventListener("click", e=>{
  state.cmpChars = !state.cmpChars;
  e.currentTarget.setAttribute("aria-pressed", state.cmpChars);
  render();
});
document.getElementById("cmp-eps").addEventListener("click", e=>{
  state.cmpEps = !state.cmpEps;
  e.currentTarget.setAttribute("aria-pressed", state.cmpEps);
  render();
});

/* ============ RENDER: LÍNEA HORIZONTAL ============ */
const track = document.getElementById("timeline");
const io = ("IntersectionObserver" in window)
  ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }),
      {root:track, rootMargin:"0px 240px 0px 0px", threshold:.02})
  : null;

function match(i){
  if(state.eras.size && !state.eras.has(i.e)) return false;
  if(state.kinds.size && !state.kinds.has(i.k)) return false;
  if(state.villages.size && !i.v.some(v=>state.villages.has(v))) return false;
  if(state.q){
    const hay=(i.t+" "+i.d+" "+i.w+" "+i.v.map(v=>V[v].n).join(" ")).toLowerCase();
    if(!hay.includes(state.q)) return false;
  }
  return true;
}

function render(){
  const visible = T.filter(match);
  document.getElementById("count").innerHTML = `Mostrando <b>${visible.length}</b> de ${T.length} hitos`;
  if(!visible.length){
    track.innerHTML = `<div class="empty"><span class="big">無</span>Ningún hito coincide con esos filtros. Probá sacar alguno.</div>`;
    updateProgress(); return;
  }

  let html="", n=0;
  ERAS.forEach(era=>{
    const items = visible.filter(i=>i.e===era.id);
    if(!items.length) return;
    html += `<section class="era" style="--era:${era.c}">
      <div class="era-h">
        <span class="num">${era.num}</span><h2>${esc(era.t)}</h2>
        <span class="ek">${era.k}</span><img class="ekimg" src="aldeas/${era.id}.png" alt="${esc(era.k)}" loading="lazy" onerror="this.remove()" onload="this.previousElementSibling.style.display='none'"><span class="ew">${esc(era.when)}</span>
      </div>
      <div class="lane">`;
    items.forEach(i=>{
      if(i.k==="guerra"){
        html += `<article class="warband">
          <span class="war-tag">Guerra Mundial Shinobi ${i.num} · ${esc(i.w)}${i.ep?` · 映 ${esc(i.ep)}`:``}</span>
          <h3>${esc(i.t)}</h3><p>${esc(i.d)}</p>
          <div class="sides"><b>Bandos:</b> ${esc(i.sides)}</div>
        </article>`;
        return;
      }
      const side = (n++ % 2 === 0) ? "up" : "down";
      const vc = V[i.v[0]].c;
      const tags = i.v.map(v=>`<span class="vtag" style="--tc:${V[v].c}">${V[v].k} ${V[v].n}</span>`).join("");
      html += `<div class="stop ${side}" style="--vc:${vc}">
        <span class="dot"></span><span class="stem"></span>
        <article class="card">
          <div class="node-meta"><span class="when">${esc(i.w)}</span>${i.ep?`<span class="ep">映 ${esc(i.ep)}</span>`:``}<span class="kind">${KINDS[i.k]}</span></div>
          <h3>${esc(i.t)}</h3><p>${esc(i.d)}</p>
          <div class="vtags">${tags}</div>
        </article>
      </div>`;
    });
    html += `</div>`;

    if(state.cmpChars){
      const eraAffils = new Set(items.filter(x=>x.k!=="guerra").flatMap(x=>x.v));
      const inEra = CHARS.filter(c=>c[1].some(v=>eraAffils.has(v)));
      const ordered = [...inEra.filter(c=>PROTA.has(c[0])), ...inEra.filter(c=>!PROTA.has(c[0]))];
      const CAP = 26;
      const shown = ordered.slice(0, CAP);
      const rest = inEra.length - shown.length;
      const chipsHtml = shown.map(([nm,vs])=>{
        const primary = vs.find(v=>eraAffils.has(v)) || vs[0];
        const proto = PROTA.has(nm) ? " proto" : "";
        return `<button class="cchip face${proto}" style="--vc:${V[primary].c}" data-name="${esc(nm)}" title="${esc(nm)}" aria-label="${esc(nm)}"><img src="${esc(faceSrc(nm))}" alt="" loading="lazy"></button>`;
      }).join("");
      const moreHtml = rest>0
        ? `<button class="cchip more" data-affils="${[...eraAffils].join(",")}">+${rest} más</button>` : "";
      html += `<div class="charlane">
        <span class="ll">人 ${inEra.length} personajes</span>
        <div class="cwrap">${chipsHtml}${moreHtml || ""}</div>
      </div>`;
    }
    if(state.cmpEps){
      const epi = ERA_EPISODES[era.id];
      if(epi){
        const st = sliceCounts(epi.serie, epi.from, epi.to);
        const segs = ["canon","mixto","relleno","anime"].map(t=>
          st[t] ? `<i style="flex:${st[t]} 0 0;background:${TYPE_COLOR[t]}"></i>` : ``).join("");
        const pct = Math.round(st.relleno/st.total*100);
        html += `<div class="episodelane" data-serie="${epi.serie}" data-from="${epi.from}" data-to="${epi.to}">
          <span class="ll">映 ${epi.label}, ep. ${epi.from}–${epi.to}</span>
          <div class="ebar" title="Ver este tramo en Canon vs. relleno">${segs}</div>
          <span class="epct">${pct}% relleno en este tramo</span>
        </div>`;
      } else {
        html += `<div class="episodelane muted"><span class="ll">Sin arco</span></div>`;
      }
    }
    html += `</section>`;
  });
  track.innerHTML = html + `<div class="endcap"></div>`;
  track.scrollLeft = 0;

  const anim = track.querySelectorAll(".card,.warband");
  if(io) anim.forEach(c=>io.observe(c)); else anim.forEach(c=>c.classList.add("in"));
  updateProgress();
}

/* --- saltar de la línea de tiempo a Personajes o a Canon/relleno --- */
track.addEventListener("click", e=>{
  const chip = e.target.closest(".cchip");
  if(chip){
    cstate.q = ""; cstate.affil.clear();
    document.getElementById("qc").value = "";
    if(chip.classList.contains("more")){
      chip.dataset.affils.split(",").forEach(a=>cstate.affil.add(a));
    } else {
      cstate.q = chip.dataset.name.toLowerCase();
      document.getElementById("qc").value = chip.dataset.name;
    }
    elA.querySelectorAll(".plate").forEach(p=>p.setAttribute("aria-pressed", cstate.affil.has(p.dataset.v)?"true":"false"));
    renderVillages();
    showTab("aldeas");
    return;
  }
  const bar = e.target.closest(".ebar");
  if(bar){
    const lane = bar.closest(".episodelane");
    fstate.serie = lane.dataset.serie;
    fstate.hl = {serie:lane.dataset.serie, from:+lane.dataset.from, to:+lane.dataset.to};
    elSerie.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed", x.dataset.s===fstate.serie?"true":"false"));
    renderFiller();
    showTab("relleno");
  }
});

/* --- navegación horizontal --- */
const hint = document.getElementById("scrollhint");
const prog = document.getElementById("prog");
function updateProgress(){
  const max = track.scrollWidth - track.clientWidth;
  prog.style.width = (max>4 ? (track.scrollLeft/max*100) : 0) + "%";
}
track.addEventListener("scroll", ()=>{ updateProgress(); if(track.scrollLeft>60) hint.classList.add("gone"); });
track.addEventListener("wheel", e=>{
  if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){ track.scrollLeft += e.deltaY; e.preventDefault(); }
}, {passive:false});
let dragging=false, sx=0, sl=0;
track.addEventListener("pointerdown", e=>{
  if(e.target.closest("button,a,input")) return;
  dragging=true; sx=e.clientX; sl=track.scrollLeft;
  track.setPointerCapture(e.pointerId); track.classList.add("grabbing");
});
track.addEventListener("pointermove", e=>{ if(dragging) track.scrollLeft = sl - (e.clientX - sx); });
["pointerup","pointercancel"].forEach(ev=>track.addEventListener(ev,()=>{ dragging=false; track.classList.remove("grabbing"); }));
track.addEventListener("keydown", e=>{
  const step = track.clientWidth * .8;
  if(e.key==="ArrowRight"){ track.scrollLeft += step; e.preventDefault(); }
  if(e.key==="ArrowLeft"){ track.scrollLeft -= step; e.preventDefault(); }
  if(e.key==="Home"){ track.scrollLeft = 0; e.preventDefault(); }
  if(e.key==="End"){ track.scrollLeft = track.scrollWidth; e.preventDefault(); }
});
window.addEventListener("resize", updateProgress);

/* ============ FILTROS: PERSONAJES ============ */
const elA = document.getElementById("f-affil");
Object.entries(V).forEach(([id,v])=>{
  const b=document.createElement("button");
  b.className="plate"; b.type="button"; b.setAttribute("aria-pressed","false");
  b.style.setProperty("--vc", v.c); b.dataset.v=id;
  b.innerHTML=`<span class="k">${v.k}</span><span class="n">${v.n}</span>`;
  b.addEventListener("click",()=>toggle(cstate.affil,id,b,renderVillages));
  elA.appendChild(b);
});
document.getElementById("qc").addEventListener("input",e=>{ cstate.q=e.target.value.trim().toLowerCase(); renderVillages(); });
document.getElementById("clear-c").addEventListener("click",()=>{
  cstate.q=""; cstate.affil.clear(); document.getElementById("qc").value="";
  elA.querySelectorAll(".plate").forEach(b=>b.setAttribute("aria-pressed","false"));
  renderVillages();
});

function visibleChars(id){
  const hit = CHARS.filter(c=>c[1].includes(id))
    .filter(c=>!cstate.q || (c[0]+" "+c[2]).toLowerCase().includes(cstate.q));
  const byAffil = [...hit.filter(c=>c[1][0]===id), ...hit.filter(c=>c[1][0]!==id)];
  const sortN = arr => [...arr].sort((a,b)=>a[0].localeCompare(b[0],"es"));
  return [...sortN(byAffil.filter(c=>PROTA.has(c[0]))), ...sortN(byAffil.filter(c=>!PROTA.has(c[0])))];
}

function loadFace(fig){
  const src = fig.dataset.face; if(!src) return;
  fig.removeAttribute("data-face");
  const img = new Image();
  img.alt=""; img.decoding="async";
  img.onload = ()=>fig.appendChild(img);   // si no existe, queda el kanji
  img.src = src;
}
const faceIO = ("IntersectionObserver" in window)
  ? new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ loadFace(e.target); faceIO.unobserve(e.target); } }),
      {rootMargin:"300px"})
  : null;

function renderVillages(){
  const el = document.getElementById("villages");
  const ids = Object.keys(V).filter(id=>!cstate.affil.size || cstate.affil.has(id));
  let shown = 0, html = "";

  ids.forEach(id=>{
    const v = V[id], people = visibleChars(id);
    if(!people.length) return;
    shown += people.length;
    html += `<section class="vsec" style="--vc:${v.c}">
      <div class="vhead">
        <div class="vplate">${v.k}</div>
        <div><h2>${v.n}</h2><div class="sub">${v.sub} · ${people.length} personajes</div></div>
      </div>
      <p class="vdesc">${v.d}</p>
      <div class="people">` +
      people.map(([nm,vs,rl])=>{
        const also = vs.filter(x=>x!==id)
          .map(x=>`<span style="color:${V[x].c}" title="${V[x].n}">${V[x].k}</span>`).join("");
        return `<article class="pc">
          <figure class="face" data-face="${esc(faceSrc(nm))}"><span class="ph">${v.k}</span></figure>
          <span class="nm">${esc(nm)}</span>
          <span class="rl">${esc(rl)}</span>
          ${also?`<span class="also">${also}</span>`:""}
        </article>`;
      }).join("") + `</div></section>`;
  });

  el.innerHTML = html || `<div class="empty"><span class="big">無</span>Ningún personaje coincide con esa búsqueda.</div>`;
  el.querySelectorAll(".face[data-face]").forEach(f=>faceIO ? faceIO.observe(f) : loadFace(f));
  document.getElementById("ccount").innerHTML = (cstate.q || cstate.affil.size)
    ? `<b>${shown}</b> fichas visibles`
    : `<b>${CHARS.length}</b> personajes en ${Object.keys(V).length} afiliaciones`;
}

document.getElementById("copy-faces").addEventListener("click", async ()=>{
  const btn = document.getElementById("copy-faces");
  const names = [...new Set(
    CHARS.filter(c=>(!cstate.affil.size || c[1].some(v=>cstate.affil.has(v))) &&
                    (!cstate.q || (c[0]+" "+c[2]).toLowerCase().includes(cstate.q)))
         .map(c=>slug(c[0])+FACE_EXT)
  )].sort();
  try{ await navigator.clipboard.writeText(names.join("\n")); btn.textContent=`${names.length} nombres copiados`; }
  catch{ btn.textContent="No se pudo copiar"; }
  setTimeout(()=>{ btn.textContent="Copiar nombres de archivo"; }, 2400);
});

/* ============ CANON VS RELLENO ============ */
const elSerie=document.getElementById("f-serie");
Object.entries(SERIES).forEach(([id,s])=>{
  const b=document.createElement("button");
  b.className="chip"; b.type="button"; b.dataset.s=id;
  b.setAttribute("aria-pressed", id===fstate.serie?"true":"false");
  b.textContent=s.label;
  b.addEventListener("click",()=>{
    fstate.serie=id; fstate.hl=null;
    elSerie.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed", x.dataset.s===id?"true":"false"));
    renderFiller();
  });
  elSerie.appendChild(b);
});
const elMode=document.getElementById("f-mode");
Object.entries(MODES).forEach(([id,label])=>{
  const b=document.createElement("button");
  b.className="chip"; b.type="button"; b.dataset.m=id;
  b.setAttribute("aria-pressed", id===fstate.mode?"true":"false");
  b.textContent=label;
  b.addEventListener("click",()=>{
    fstate.mode=id;
    elMode.querySelectorAll(".chip").forEach(x=>x.setAttribute("aria-pressed", x.dataset.m===id?"true":"false"));
    renderFiller();
  });
  elMode.appendChild(b);
});
const expand = s=>{
  const out=new Array(s.total+1).fill("relleno");
  const put=(r,t)=>r.forEach(([a,b])=>{ for(let i=a;i<=b;i++) out[i]=t; });
  put(s.relleno,"relleno"); put(s.mixto,"mixto"); put(s.canon,"canon"); put(s.anime,"anime");
  return out;
};
const countR = r=>r.reduce((n,[a,b])=>n+(b-a+1),0);
const fmtR = r=>r.map(([a,b])=>a===b?`${a}`:`${a}–${b}`).join(", ");

function renderFiller(){
  const s=SERIES[fstate.serie], types=expand(s);
  const nF=countR(s.relleno), nC=countR(s.canon), nM=countR(s.mixto), nA=countR(s.anime);
  document.getElementById("f-stats").innerHTML=`
    <div class="f-stat"><b>${s.total}</b><span>episodios</span></div>
    <div class="f-stat"><b style="color:#5fa04a">${nC}</b><span>canon</span></div>
    <div class="f-stat"><b style="color:#c9a35f">${nM}</b><span>mixtos</span></div>
    <div class="f-stat"><b style="color:#b0333a">${nF}</b><span>relleno</span></div>
    <div class="f-stat"><b>${Math.round(nF/s.total*100)}%</b><span>es relleno</span></div>
    <div class="f-stat"><b>${Math.round(nF*s.min/60)} h</b><span>que te ahorrás</span></div>`;

  let g="";
  const hl = (fstate.hl && fstate.hl.serie===fstate.serie) ? fstate.hl : null;
  for(let i=1;i<=s.total;i++){
    const t=types[i];
    const dim = fstate.mode==="all" ? ""
      : (fstate.mode==="canon" && t==="relleno") ? " dim"
      : (fstate.mode==="relleno" && t!=="relleno") ? " dim" : "";
    const inHl = (hl && i>=hl.from && i<=hl.to) ? " hl" : "";
    g+=`<button class="cell${dim}${inHl}" style="background:${TYPE_COLOR[t]}" data-n="${i}" data-t="${t}" title="Ep. ${i} — ${TYPE_NAME[t]}" aria-label="Episodio ${i}, ${TYPE_NAME[t]}"></button>`;
  }
  const grid=document.getElementById("grid"); grid.innerHTML=g;

  const readout=document.getElementById("readout");
  const show=e=>{
    const c=e.target.closest(".cell"); if(!c) return;
    readout.innerHTML=`<b>Episodio ${c.dataset.n}</b> · ${TYPE_NAME[c.dataset.t]}` +
      (c.dataset.t==="relleno" ? " — lo podés saltar."
       : c.dataset.t==="mixto" ? " — tiene historia real adentro: miralo."
       : " — parte de la trama principal.");
  };
  grid.onmouseover=show; grid.onclick=show;

  document.getElementById("arcs").innerHTML = s.arcs.map(([r,t,d,rec])=>`
    <article class="arc">
      <span class="r">${r[0]===r[1]?`Ep. ${r[0]}`:`${r[0]}–${r[1]}`}</span>
      <div><h4>${esc(t)}${rec?'<span class="rec">Vale la pena</span>':''}</h4><p>${esc(d)}</p></div>
    </article>`).join("");

  const watch=[...s.canon,...s.mixto,...s.anime].sort((a,b)=>a[0]-b[0]);
  document.getElementById("plan-txt").textContent =
    `Mirá estos ${nC+nM+nA} episodios y salteá el resto. La historia queda completa.`;
  document.getElementById("plan-code").textContent = fmtR(watch);
}
document.getElementById("copy-plan").addEventListener("click", async ()=>{
  const btn=document.getElementById("copy-plan");
  try{ await navigator.clipboard.writeText(document.getElementById("plan-code").textContent); btn.textContent="Copiado"; }
  catch{ btn.textContent="No se pudo copiar"; }
  setTimeout(()=>{ btn.textContent="Copiar la lista de episodios"; },2200);
});

/* ============ TABS ============ */
const VIEWS=["linea","aldeas","relleno"];
function showTab(which){
  VIEWS.forEach(v=>{
    const on = v===which;
    document.getElementById("tab-"+v).setAttribute("aria-selected", on);
    const mt = document.getElementById("mtab-"+v);
    if(mt) mt.setAttribute("aria-selected", on);
    document.getElementById("view-"+v).hidden = !on;
    document.getElementById("panel-"+v).hidden = !on;
  });
  if(which==="linea") requestAnimationFrame(updateProgress);
  closeDrawer();
}
VIEWS.forEach(v=>{
  document.getElementById("tab-"+v).addEventListener("click",()=>showTab(v));
  const mt = document.getElementById("mtab-"+v);
  if(mt) mt.addEventListener("click",()=>showTab(v));
});

/* ============ MOBILE DRAWER (filtros) ============ */
const mBtn = document.getElementById("m-filters");
const sideDrawer = document.querySelector(".side");
let drawerOpen = false;
function setDrawer(open){
  drawerOpen = open;
  sideDrawer.classList.toggle("open", open);
  mBtn.setAttribute("aria-expanded", String(open));
}
function closeDrawer(){ setDrawer(false); }
if(mBtn && sideDrawer) mBtn.addEventListener("click",()=>setDrawer(!drawerOpen));

/* ============ TEMA CLARO / OSCURO ============ */
const tBtn = document.getElementById("theme-toggle");
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
  tBtn.textContent = t==="dark" ? "Modo claro" : "Modo oscuro";
  tBtn.setAttribute("aria-pressed", t==="dark");
  try{ localStorage.setItem("shinobiz-theme", t); }catch(e){}
}
tBtn.addEventListener("click", ()=>{
  applyTheme(document.documentElement.getAttribute("data-theme")==="dark" ? "light" : "dark");
});
applyTheme(document.documentElement.getAttribute("data-theme")==="dark" ? "dark" : "light");

/* ============ INIT ============ */
document.getElementById("s-hitos").textContent = T.length;
document.getElementById("s-chars").textContent = CHARS.length;
renderVillages();
renderFiller();
render();
