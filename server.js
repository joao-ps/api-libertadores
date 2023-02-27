const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(2020, console.log('SERVIDOR RODANDO!'))

const atualCampeaoLibertadores = {
    pos: 5,
    time: "flamengo",
    pais: 'brasil',
    estadio: "maracanã",
    ranking: 3,
    namePlacar: 'fla'
}
const atualCampeaoSulAmericana = {
    pos: 2, 
    time: "independiente del valle", 
    pais: 'equador',
    estadio: "estádio rumiñahui",
    ranking: 12,
    namePlacar: 'idv'
}

const brasileirao = [
    {
        pos: 1,
        time: "palmeiras",
        pais: 'brasil',
        estadio: "alianz parque",
        ranking: 2,
        namePlacar: 'pal'
    },
    {
        pos: 2,
        time: "internacional",
        pais: 'brasil',
        estadio: "beira rio",
        ranking: 18,
        namePlacar: 'int'
    },
    {
        pos: 3,
        time: "fluminense",
        pais: 'brasil',
        estadio: "maracanã",
        ranking: 32,
        namePlacar: 'flu'
    },
    {
        pos: 4,
        time: "corinthians",
        pais: 'brasil',
        estadio: "arena corinthians",
        ranking: 24,
        namePlacar: 'cor'
    },
    {
        pos: 5,
        time: "flamengo",
        pais: 'brasil',
        estadio: "maracanã",
        ranking: 3,
        namePlacar: 'fla'
    },
    {
        pos: 6,
        time: "athletico-PR",
        pais: 'brasil',
        estadio: "arena da baixada",
        ranking: 7,
        namePlacar: 'cap'
    },
    {
        pos: 7,
        time: "atlético-MG",
        pais: 'brasil',
        estadio: "mineirão",
        ranking: 11,
        namePlacar: 'cam'
    },
    {
        pos: 8,
        time: "fortaleza",
        pais: 'brasil',
        estadio: "castelão",
        ranking: 78,
        namePlacar: 'for'
    },
    {
        pos: 9,
        time: "são paulo",
        pais: 'brasil',
        estadio: "morumbi",
        ranking: 9,
        namePlacar: 'sao'
    },
    {
        pos: 10,
        time: "américa-MG",
        pais: 'brasil',
        estadio: "independência",
        ranking: 118,
        namePlacar: 'ame'
    }
]

const primeiraDivisonArgentina = [
    {
        pos: 1,
        time: "boca juniors",
        pais: 'argentina',
        estadio: "la bombonera",
        ranking: 4,
        namePlacar: 'boc'
    },
    {
        pos: 2,
        time: "racing",
        pais: 'argentina',
        estadio: "el cilindro",
        ranking: 22,
        namePlacar: 'rac'
    },
    {
        pos: 3,
        time: "river plate",
        pais: 'argentina',
        estadio: "monumental de núñez",
        ranking: 1,
        namePlacar: 'riv'
    },
    {
        pos: 4,
        time: "huracán",
        pais: 'argentina',
        estadio: "tomás adolfo ducó",
        ranking: 58,
        namePlacar: 'hur'
    },
    {
        pos: 5,
        time: "tucuman",
        pais: 'argentina',
        estadio: "monumental josé fierro",
        ranking: 64,
        namePlacar: 'tuc'
    },
    {
        pos: 6,
        time: "san lorenzo",
        pais: 'argentina',
        estadio: "el nuevo gasómetro",
        ranking: 31,
        namePlacar: 'slo'
    },
    {
        pos: 7,
        time: "tigre",
        pais: 'argentina',
        estadio: "monumental victoria",
        ranking: 108,
        namePlacar: 'tig'
    },
    {
        pos: 8,
        time: "argentinos juniors",
        pais: 'argentina',
        estadio: "estádio diego armando maradona",
        ranking: 55,
        namePlacar: 'arg'
    },
    {
        pos: 9,
        time: "gimnasia",
        pais: 'argentina',
        estadio: "del bosque",
        ranking: 162,
        namePlacar: 'gim'
    },
    {
        pos: 10,
        time: "patronato",
        pais: 'argentina',
        estadio: "presbítero bartolomé grella",
        ranking: 272,
        namePlacar: 'pat'
    },
]

const categoriaPrimeraA = [
    {
        pos: 1,
        time: "millonarios",
        pais: 'colombia',
        estadio: "el campín",
        ranking: 57,
        namePlacar: 'mil'
    },
    {
        pos: 2,
        time: "tolima",
        pais: 'colombia',
        estadio: "estádio manuel murillo toro",
        ranking: 47,
        namePlacar: 'tol'
    },
    {
        pos: 3,
        time: "atlético nacional",
        pais: 'colombia',
        estadio: "atanasio girardot",
        ranking: 17,
        namePlacar: 'atl'
    },
    {
        pos: 4,
        time: "independiente medellín",
        pais: 'colombia',
        estadio: "atanasio girardot",
        ranking: 54,
        namePlacar: 'ime'
    },
    {
        pos: 5,
        time: "junior barranquilla",
        pais: 'colombia',
        estadio: "estádio metropolitano",
        ranking: 26,
        namePlacar: 'jun'
    },
    {
        pos: 6,
        time: "envigado",
        pais: 'colombia',
        estadio: "estádio polideportivo sur",
        ranking: 272,
        namePlacar: 'evi'
    },
    {
        pos: 7,
        time: "la equidad",
        pais: 'colombia',
        estadio: "estádio metropolitano de techo",
        ranking: 87,
        namePlacar: 'leq'
    },
    {
        pos: 8,
        time: "bucaramanga",
        pais: 'colombia',
        estadio: "estádio alfonso lópez",
        ranking: 215,
        namePlacar: 'buc'
    },
    {
        pos: 9,
        time: "alianza petrolera",
        pais: 'colombia',
        estadio: "estádio daniel villa zapata",
        ranking: 272,
        namePlacar: 'ali'
    },
    {
        pos: 10,
        time: "santa fé",
        pais: 'colombia',
        estadio: "el campín",
        ranking: 34,
        namePlacar: 'sfe'
    }
]

const campeonatoNacionalAfp = [
    {
        pos: 1,
        time: "Colo-Colo",
        pais: 'chile',
        estadio: "monumental david arellano",
        ranking: 28,
        namePlacar: 'col'
    },   
    {
        pos: 2,
        time: "ñublense",
        pais: 'chile',
        estadio: "estádio municipal nelson oyarzún",
        ranking: 230,
        namePlacar: 'nub'
    },
    {
        pos: 3,
        time: "curicó unido",
        pais: 'chile',
        estadio: "la granja",
        ranking: 272,
        namePlacar: 'cur'
    },
    {
        pos: 4,
        time: "palestino",
        pais: 'chile',
        estadio: "estádio municipal de la cisterna",
        ranking: 67,
        namePlacar: 'pal'
    },
    {
        pos: 5,
        time: "cobresal",
        pais: 'chile',
        estadio: "el cobre",
        ranking: 144,
        namePlacar: 'cob'
    },
    {
        pos: 6,
        time: "universidad católica",
        pais: 'chile',
        estadio: "estádio san carlos de apoquindo",
        ranking: 25,
        namePlacar: 'uni'
    },
    {
        pos: 7,
        time: "audax italiano",
        pais: 'chile',
        estadio: "estádio municipal de la florida",
        ranking: 153,
        namePlacar: 'aud'
    },
    {
        pos: 8,
        time: "o'higgins",
        pais: 'chile',
        estadio: "el teniente",
        ranking: 132,
        namePlacar: 'hig'
    },
    {
        pos: 9,
        time: "everton",
        pais: 'chile',
        estadio: "estádio sausalito",
        ranking: 94,
        namePlacar: 'eve'
    },
    {
        pos: 10,
        time: "unión la calera",
        pais: 'chile',
        estadio: "estádio municipal nicolás",
        ranking: 77,
        namePlacar: 'uni'
    }
]

const primeiraDivisionDoUruguai = [
    {
        pos: 1,
        time: "nacional-URU",
        pais: 'uruguai',
        estadio: "gran parque central",
        ranking: 6,
        namePlacar: 'nac'
    },
    {
        pos: 2,
        time: "river plate-URU",
        pais: 'uruguai',
        estadio: "estádio saroldi",
        ranking: 85,
        namePlacar: 'riv'
    },
    {
        pos: 3,
        time: "deportivo maldonado",
        pais: 'uruguai',
        estadio: "estádio domingo burgueño",
        ranking: 272,
        namePlacar: 'mal'
    },
    {
        pos: 4,
        time: "liverpool",
        pais: 'uruguai',
        estadio: "estádio belvedere",
        ranking: 165,
        namePlacar: 'liv'
    },
    {
        pos: 5,
        time: "danubio",
        pais: 'uruguai',
        estadio: "estádio jardines del hipódromo",
        ranking: 103,
        namePlacar: 'dan'
    },
    {
        pos: 6,
        time: "defensor",
        pais: 'uruguai',
        estadio: "estádio luis franzini",
        ranking: 60,
        namePlacar: 'def'
    },
    {
        pos: 7,
        time: "boston river",
        pais: 'uruguai',
        estadio: "estádio complejo rentistas",
        ranking: 224,
        namePlacar: 'bos'
    },
    {
        pos: 8,
        time: "peñarol",
        pais: 'uruguai',
        estadio: "campeón del siglo",
        ranking: 8,
        namePlacar: 'pen'
    },
    {
        pos: 9,
        time: "cerro largo",
        pais: 'uruguai',
        estadio: "estádio arquitecto antonio",
        ranking: 185,
        namePlacar: 'cer'
    },
    {
        pos: 10,
        time: "fénix",
        pais: 'uruguai',
        estadio: "estádio parque capurro",
        ranking: 148,
        namePlacar: 'fen'
    }
]

const campeonatoParaguaio = [
    {
        pos: 1,
        time: "olimpia",
        pais: 'paraguai',
        estadio: "estádio tigo manuel ferreira",
        ranking: 14,
        namePlacar: 'oli'
    },
    {
        pos: 2,
        time: "cerro porteño",
        pais: 'paraguai',
        estadio: "estádio general pablo rojas",
        ranking: 15,
        namePlacar: 'ccp'
    },
    {
        pos: 3,
        time: "nacional-PAR",
        pais: 'paraguai',
        estadio: "estádio arsenio erico",
        ranking: 71,
        namePlacar: 'nac'
    },
    {
        pos: 4,
        time: "libertad",
        pais: 'paraguai',
        estadio: "estádio tigo la huerta",
        ranking: 16,
        namePlacar: 'lib'
    },
    {
        pos: 5,
        time: "tacuary",
        pais: 'paraguai',
        estadio: "estádio toribio vargas",
        ranking: 272,
        namePlacar: 'tac'
    },
    {
        pos: 6,
        time: "sportivo ameliano",
        pais: 'paraguai',
        estadio: "estádio josé tomás silva",
        ranking: 272,
        namePlacar: 'sam'
    },
    {
        pos: 7,
        time: "general caballero",
        pais: 'paraguai',
        estadio: "estádio ka'arendy",
        ranking: 139,
        namePlacar: 'gen'
    },
    {
        pos: 8,
        time: "guaireña",
        pais: 'paraguai',
        estadio: "parque del guairá",
        ranking: 101,
        namePlacar: 'gua'
    },
    {
        pos: 9,
        time: "guarani",
        pais: 'paraguai',
        estadio: "estádio rogelio livieres",
        ranking: 41,
        namePlacar: 'gua'
    },
    {
        pos: 10,
        time: "sol de américa",
        pais: 'paraguai',
        estadio: "estádio luis alfonso giagni",
        ranking: 111,
        namePlacar: 'sol'
    }
]

const campeonatoPeruano = [
    {
        pos: 1,
        time: "alianza lima",
        pais: 'peru',
        estadio: "estádio alejandro villanueva",
        ranking: 52,
        namePlacar: 'ali'
    },
    {
        pos: 2,
        time: "sporting cristal",
        pais: 'peru',
        estadio: "estádio alberto gallardo",
        ranking: 35,
        namePlacar: 'scr'
    },
    {
        pos: 3,
        time: "club atlético grau",
        pais: 'peru',
        estadio: "estádio municipal de bernal",
        ranking: 237,
        namePlacar: 'cag'
    },
    {
        pos: 4,
        time: "universitario",
        pais: 'peru',
        estadio: "estádio monumental U",
        ranking: 46,
        namePlacar: 'uni'
    },
    {
        pos: 5,
        time: "melgar",
        pais: 'peru',
        estadio: "monumental virgen de chapi",
        ranking: 44,
        namePlacar: 'mel'
    },
    {
        pos: 6,
        time: "césar vallejo",
        pais: 'peru',
        estadio: "estádio mansiche",
        ranking: 149,
        namePlacar: 'ces'
    },
    {
        pos: 7,
        time: "utc cajamarca",
        pais: 'peru',
        estadio: "estádio monumental U",
        ranking: 186,
        namePlacar: 'utc'
    },
    {
        pos: 8,
        time: "sport huancayo",
        pais: 'peru',
        estadio: "estádio huancayo",
        ranking: 119,
        namePlacar: 'shu'
    },
    {
        pos: 9,
        time: "alianza atlético",
        pais: 'peru',
        estadio: "estádio campeones del 36",
        ranking: 269,
        namePlacar: 'ali'
    },
    {
        pos: 10,
        time: "binacional",
        pais: 'peru',
        estadio: "estádio guillermo briceño rosamedina",
        ranking: 123,
        namePlacar: 'bin'
    }
]

const campeonatoBoliviano = [
    {
        pos: 1,
        time: "the strongest",
        pais: 'bolivia',
        estadio: "estádio hernando siles",
        ranking: 38,
        namePlacar: 'str'
    },
    {
        pos: 2,
        time: "always ready",
        pais: 'bolivia',
        estadio: "el alto",
        ranking: 74,
        namePlacar: 'alw'
    },
    {
        pos: 3,
        time: "bolivar",
        pais: 'bolivia',
        estadio: "estádio hernando siles",
        ranking: 33,
        namePlacar: 'bol'
    },
    {
        pos: 4,
        time: "nacional potosí",
        pais: 'bolivia',
        estadio: "estádio victor agustín ugarte",
        ranking: 272,
        namePlacar: 'npo'
    },
    {
        pos: 5,
        time: "oriente petrolero",
        pais: 'bolivia',
        estadio: "estádio ramón tahuichi aguilera",
        ranking: 81,
        namePlacar: 'ori'
    },
    {
        pos: 6,
        time: "club deportivo",
        pais: 'bolivia',
        estadio: "estádio libertador",
        ranking: 272,
        namePlacar: 'cde'
    },
    {
        pos: 7,
        time: "aurora",
        pais: 'bolivia',
        estadio: "estádio félix capriles",
        ranking: 236,
        namePlacar: 'aur'
    },
    {
        pos: 8,
        time: "independiente petrolero",
        pais: 'bolivia',
        estadio: "estádio olímpico patria",
        ranking: 125,
        namePlacar: 'ipe'
    },
    {
        pos: 9,
        time: "palmaflor del trópico",
        pais: 'bolivia',
        estadio: "estádio municipal de trópico",
        ranking: 232,
        namePlacar: 'pdt'
    },
    {
        pos: 10,
        time: "blooming",
        pais: 'bolivia',
        estadio: "estádio ramón tahuichi aguilera",
        ranking: 121,
        namePlacar: 'blo'
    }
]

const campeonatoEquatoriano = [
    {
        pos: 1,
        time: "aucas",
        pais: 'equador',
        estadio: "estádio gonzalo pozo",
        ranking: 112,
        namePlacar: 'auc'
    },
    {
        pos: 2,
        time: "independiente del valle",
        pais: 'equador',
        estadio: "estádio rumiñahui",
        ranking: 12,
        namePlacar: 'idv'
    },
    {
        pos: 3,
        time: "universidad católica",
        pais: 'equador',
        estadio: "estádio olímpico atahualpa",
        ranking: 90,
        namePlacar: 'uca'
    },
    {
        pos: 4,
        time: "ldu",
        pais: 'equador',
        estadio: "estádio rodrigo paz delgado",
        ranking: 21,
        namePlacar: 'ldu'
    },
    {
        pos: 5,
        time: "emelec",
        pais: 'equador',
        estadio: "estádio george capwell",
        ranking: 29,
        namePlacar: 'eme'
    },
    {
        pos: 6,
        time: "deportivo cuenca",
        pais: 'equador',
        estadio: "estádio alejandro serrano aguilar",
        ranking: 130,
        namePlacar: 'dep'
    },
    {
        pos: 7,
        time: "club técnico",
        pais: 'equador',
        estadio: "estádio bella vista",
        ranking: 272,
        namePlacar: 'cte'
    },
    {
        pos: 8,
        time: "barcelona",
        pais: 'equador',
        estadio: "estádio monumental isidro",
        ranking: 19,
        namePlacar: 'bar'
    },
    {
        pos: 9,
        time: "delfín",
        pais: 'equador',
        estadio: "estádio jocay",
        ranking: 76,
        namePlacar: 'del'
    },
    {
        pos: 10,
        time: "orense sporting",
        pais: 'equador',
        estadio: "estádio orense",
        ranking: 272,
        namePlacar: 'ore'
    }
]

const campeonatoVenezuelano = [
    {
        pos: 1,
        time: 'Zamora',
        pais: 'venezuela',
        estadio: 'estádio agustín tovar',
        ranking: 99,
        namePlacar: 'zam'
    },
    {
        pos: 2,
        time: 'metropolitanos',
        pais: 'venezuela',
        estadio: 'olímpico de la universidad',
        ranking: 97,
        namePlacar: 'met'
    },
    {
        pos: 3,
        time: 'monagas',
        pais: 'venezuela',
        estadio: 'monumental de maturín',
        ranking: 133,
        namePlacar: 'mon'
    },
    {
        pos: 4,
        time: 'carabobo',
        pais: 'venezuela',
        estadio: 'estádio misael delgado',
        ranking: 183,
        namePlacar: 'car'
    },
    {
        pos: 5,
        time: 'deportivo lara',
        pais: 'venezuela',
        estadio: 'estádio metropolitano de lara',
        ranking: 84,
        namePlacar: 'lar'
    },
    {
        pos: 6,
        time: 'deportivo táchira',
        pais: 'venezuela',
        estadio: 'estádio polideportivo',
        ranking: 42,
        namePlacar: 'tac'
    },
    {
        pos: 7,
        time: 'academia',
        pais: 'venezuela',
        estadio: 'estádio complejo deportivo',
        ranking: 232,
        namePlacar: 'aca'
    },
    {
        pos: 8,
        time: 'club deportivo',
        pais: 'venezuela',
        estadio: 'estádio metropolitano de lara',
        ranking: 196,
        namePlacar: 'cde'
    },
    {
        pos: 9,
        time: 'estudiantes',
        pais: 'venezuela',
        estadio: 'Olímpico Metropolitano de Mérida',
        ranking: 96,
        namePlacar: 'est'
    },
    {
        pos: 10,
        time: 'portuguesa',
        pais: 'venezuela',
        estadio: 'estádio general josé antonio paez',
        ranking: 115,
        namePlacar: 'por'
    }
]

app.route('/campeao-libertadores').get((req,res) => {
    res.json(atualCampeaoLibertadores)
})
app.route('/campeao-sul').get((req,res) => {
    res.json(atualCampeaoSulAmericana)
})
app.route('/brasil').get((req,res) => {
    res.json(brasileirao)
})
app.route('/argentina').get((req,res) => {
    res.json(primeiraDivisonArgentina)
})
app.route('/colombia').get((req,res) => {
    res.json(categoriaPrimeraA)
})
app.route('/chile').get((req,res) => {
    res.json(campeonatoNacionalAfp)
})
app.route('/uruguai').get((req,res) => {
    res.json(primeiraDivisionDoUruguai)
})
app.route('/paraguai').get((req,res) => {
    res.json(campeonatoParaguaio)
})
app.route('/peru').get((req,res) => {
    res.json(campeonatoPeruano)
})
app.route('/bolivia').get((req,res) => {
    res.json(campeonatoBoliviano)
})
app.route('/equador').get((req,res) => {
    res.json(campeonatoEquatoriano)
})
app.route('/venezuela').get((req,res) => {
    res.json(campeonatoVenezuelano)
})