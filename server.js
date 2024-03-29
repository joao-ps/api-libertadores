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
    namePlacar: 'fla',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
}
const atualCampeaoSulAmericana = {
    pos: 2, 
    time: "independiente del valle", 
    pais: 'equador',
    estadio: "estádio rumiñahui",
    ranking: 12,
    namePlacar: 'idv',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
}

const brasileirao = [
    {
        pos: 1,
        time: "palmeiras",
        pais: 'brasil',
        estadio: "alianz parque",
        ranking: 2,
        namePlacar: 'pal',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 2,
        time: "internacional",
        pais: 'brasil',
        estadio: "beira rio",
        ranking: 18,
        namePlacar: 'int',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 3,
        time: "fluminense",
        pais: 'brasil',
        estadio: "maracanã",
        ranking: 32,
        namePlacar: 'flu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 4,
        time: "corinthians",
        pais: 'brasil',
        estadio: "arena corinthians",
        ranking: 24,
        namePlacar: 'cor',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 5,
        time: "flamengo",
        pais: 'brasil',
        estadio: "maracanã",
        ranking: 3,
        namePlacar: 'fla',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 6,
        time: "athletico-PR",
        pais: 'brasil',
        estadio: "arena da baixada",
        ranking: 7,
        namePlacar: 'cap',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 7,
        time: "atlético-MG",
        pais: 'brasil',
        estadio: "mineirão",
        ranking: 11,
        namePlacar: 'cam',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 8,
        time: "fortaleza",
        pais: 'brasil',
        estadio: "castelão",
        ranking: 78,
        namePlacar: 'for',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 9,
        time: "são paulo",
        pais: 'brasil',
        estadio: "morumbi",
        ranking: 9,
        namePlacar: 'sao',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    },
    {
        pos: 10,
        time: 'cruzeiro',
        pais: 'brasil',
        estadio: 'mineirão',
        ranking: 115,
        namePlacar: 'cru',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
    }
]

const primeiraDivisonArgentina = [
    {
        pos: 1,
        time: "boca juniors",
        pais: 'argentina',
        estadio: "la bombonera",
        ranking: 4,
        namePlacar: 'boc',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 2,
        time: "racing",
        pais: 'argentina',
        estadio: "el cilindro",
        ranking: 22,
        namePlacar: 'rac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 3,
        time: "river plate",
        pais: 'argentina',
        estadio: "monumental de núñez",
        ranking: 1,
        namePlacar: 'riv',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 4,
        time: "huracán",
        pais: 'argentina',
        estadio: "tomás adolfo ducó",
        ranking: 58,
        namePlacar: 'hur',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 5,
        time: "tucuman",
        pais: 'argentina',
        estadio: "monumental josé fierro",
        ranking: 64,
        namePlacar: 'tuc',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 6,
        time: "san lorenzo",
        pais: 'argentina',
        estadio: "el nuevo gasómetro",
        ranking: 31,
        namePlacar: 'slo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 7,
        time: "tigre",
        pais: 'argentina',
        estadio: "monumental victoria",
        ranking: 108,
        namePlacar: 'tig',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 8,
        time: "argentinos juniors",
        pais: 'argentina',
        estadio: "estádio diego armando maradona",
        ranking: 55,
        namePlacar: 'arg',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 9,
        time: "gimnasia",
        pais: 'argentina',
        estadio: "del bosque",
        ranking: 162,
        namePlacar: 'gim',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
    {
        pos: 10,
        time: "patronato",
        pais: 'argentina',
        estadio: "presbítero bartolomé grella",
        ranking: 272,
        namePlacar: 'pat',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
    },
]

const categoriaPrimeraA = [
    {
        pos: 1,
        time: "millonarios",
        pais: 'colombia',
        estadio: "el campín",
        ranking: 57,
        namePlacar: 'mil',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 2,
        time: "tolima",
        pais: 'colombia',
        estadio: "estádio manuel murillo toro",
        ranking: 47,
        namePlacar: 'tol',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 3,
        time: "atlético nacional",
        pais: 'colombia',
        estadio: "atanasio girardot",
        ranking: 17,
        namePlacar: 'atl',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 4,
        time: "independiente medellín",
        pais: 'colombia',
        estadio: "atanasio girardot",
        ranking: 54,
        namePlacar: 'ime',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 5,
        time: "junior barranquilla",
        pais: 'colombia',
        estadio: "estádio metropolitano",
        ranking: 26,
        namePlacar: 'jun',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 6,
        time: "envigado",
        pais: 'colombia',
        estadio: "estádio polideportivo sur",
        ranking: 272,
        namePlacar: 'evi',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 7,
        time: "la equidad",
        pais: 'colombia',
        estadio: "estádio metropolitano de techo",
        ranking: 87,
        namePlacar: 'leq',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 8,
        time: "bucaramanga",
        pais: 'colombia',
        estadio: "estádio alfonso lópez",
        ranking: 215,
        namePlacar: 'buc',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 9,
        time: "alianza petrolera",
        pais: 'colombia',
        estadio: "estádio daniel villa zapata",
        ranking: 272,
        namePlacar: 'ali',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    },
    {
        pos: 10,
        time: "santa fé",
        pais: 'colombia',
        estadio: "el campín",
        ranking: 34,
        namePlacar: 'sfe',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
    }
]

const campeonatoNacionalAfp = [
    {
        pos: 1,
        time: "Colo-Colo",
        pais: 'chile',
        estadio: "monumental david arellano",
        ranking: 28,
        namePlacar: 'col',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },   
    {
        pos: 2,
        time: "ñublense",
        pais: 'chile',
        estadio: "estádio municipal nelson oyarzún",
        ranking: 230,
        namePlacar: 'nub',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 3,
        time: "curicó unido",
        pais: 'chile',
        estadio: "la granja",
        ranking: 272,
        namePlacar: 'cur',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 4,
        time: "palestino",
        pais: 'chile',
        estadio: "estádio municipal de la cisterna",
        ranking: 67,
        namePlacar: 'pal',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 5,
        time: "cobresal",
        pais: 'chile',
        estadio: "el cobre",
        ranking: 144,
        namePlacar: 'cob',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 6,
        time: "universidad católica",
        pais: 'chile',
        estadio: "estádio san carlos de apoquindo",
        ranking: 25,
        namePlacar: 'uni',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 7,
        time: "audax italiano",
        pais: 'chile',
        estadio: "estádio municipal de la florida",
        ranking: 153,
        namePlacar: 'aud',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 8,
        time: "o'higgins",
        pais: 'chile',
        estadio: "el teniente",
        ranking: 132,
        namePlacar: 'hig',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 9,
        time: "everton",
        pais: 'chile',
        estadio: "estádio sausalito",
        ranking: 94,
        namePlacar: 'eve',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    },
    {
        pos: 10,
        time: "unión la calera",
        pais: 'chile',
        estadio: "estádio municipal nicolás",
        ranking: 77,
        namePlacar: 'uni',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
    }
]

const primeiraDivisionDoUruguai = [
    {
        pos: 1,
        time: "nacional-URU",
        pais: 'uruguai',
        estadio: "gran parque central",
        ranking: 6,
        namePlacar: 'nac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 2,
        time: "river plate-URU",
        pais: 'uruguai',
        estadio: "estádio saroldi",
        ranking: 85,
        namePlacar: 'riv',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 3,
        time: "deportivo maldonado",
        pais: 'uruguai',
        estadio: "estádio domingo burgueño",
        ranking: 272,
        namePlacar: 'mal',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 4,
        time: "liverpool",
        pais: 'uruguai',
        estadio: "estádio belvedere",
        ranking: 165,
        namePlacar: 'liv',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 5,
        time: "danubio",
        pais: 'uruguai',
        estadio: "estádio jardines del hipódromo",
        ranking: 103,
        namePlacar: 'dan',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 6,
        time: "defensor",
        pais: 'uruguai',
        estadio: "estádio luis franzini",
        ranking: 60,
        namePlacar: 'def',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 7,
        time: "boston river",
        pais: 'uruguai',
        estadio: "estádio complejo rentistas",
        ranking: 224,
        namePlacar: 'bos',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 8,
        time: "peñarol",
        pais: 'uruguai',
        estadio: "campeón del siglo",
        ranking: 8,
        namePlacar: 'pen',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 9,
        time: "cerro largo",
        pais: 'uruguai',
        estadio: "estádio arquitecto antonio",
        ranking: 185,
        namePlacar: 'cer',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    },
    {
        pos: 10,
        time: "fénix",
        pais: 'uruguai',
        estadio: "estádio parque capurro",
        ranking: 148,
        namePlacar: 'fen',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/320px-Flag_of_Uruguay.svg.png'
    }
]

const campeonatoParaguaio = [
    {
        pos: 1,
        time: "olimpia",
        pais: 'paraguai',
        estadio: "estádio tigo manuel ferreira",
        ranking: 14,
        namePlacar: 'oli',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 2,
        time: "cerro porteño",
        pais: 'paraguai',
        estadio: "estádio general pablo rojas",
        ranking: 15,
        namePlacar: 'ccp',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 3,
        time: "nacional-PAR",
        pais: 'paraguai',
        estadio: "estádio arsenio erico",
        ranking: 71,
        namePlacar: 'nac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 4,
        time: "libertad",
        pais: 'paraguai',
        estadio: "estádio tigo la huerta",
        ranking: 16,
        namePlacar: 'lib',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 5,
        time: "tacuary",
        pais: 'paraguai',
        estadio: "estádio toribio vargas",
        ranking: 272,
        namePlacar: 'tac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 6,
        time: "sportivo ameliano",
        pais: 'paraguai',
        estadio: "estádio josé tomás silva",
        ranking: 272,
        namePlacar: 'sam',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 7,
        time: "general caballero",
        pais: 'paraguai',
        estadio: "estádio ka'arendy",
        ranking: 139,
        namePlacar: 'gen',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 8,
        time: "guaireña",
        pais: 'paraguai',
        estadio: "parque del guairá",
        ranking: 101,
        namePlacar: 'gua',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 9,
        time: "guarani",
        pais: 'paraguai',
        estadio: "estádio rogelio livieres",
        ranking: 41,
        namePlacar: 'gua',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    },
    {
        pos: 10,
        time: "sol de américa",
        pais: 'paraguai',
        estadio: "estádio luis alfonso giagni",
        ranking: 111,
        namePlacar: 'sol',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/320px-Flag_of_Paraguay.svg.png'
    }
]

const campeonatoPeruano = [
    {
        pos: 1,
        time: "alianza lima",
        pais: 'peru',
        estadio: "estádio alejandro villanueva",
        ranking: 52,
        namePlacar: 'ali',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 2,
        time: "sporting cristal",
        pais: 'peru',
        estadio: "estádio alberto gallardo",
        ranking: 35,
        namePlacar: 'scr',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 3,
        time: "club atlético grau",
        pais: 'peru',
        estadio: "estádio municipal de bernal",
        ranking: 237,
        namePlacar: 'cag',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 4,
        time: "universitario",
        pais: 'peru',
        estadio: "estádio monumental U",
        ranking: 46,
        namePlacar: 'uni',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 5,
        time: "melgar",
        pais: 'peru',
        estadio: "monumental virgen de chapi",
        ranking: 44,
        namePlacar: 'mel',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 6,
        time: "césar vallejo",
        pais: 'peru',
        estadio: "estádio mansiche",
        ranking: 149,
        namePlacar: 'ces',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 7,
        time: "utc cajamarca",
        pais: 'peru',
        estadio: "estádio monumental U",
        ranking: 186,
        namePlacar: 'utc',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 8,
        time: "sport huancayo",
        pais: 'peru',
        estadio: "estádio huancayo",
        ranking: 119,
        namePlacar: 'shu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 9,
        time: "alianza atlético",
        pais: 'peru',
        estadio: "estádio campeones del 36",
        ranking: 269,
        namePlacar: 'ali',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    },
    {
        pos: 10,
        time: "binacional",
        pais: 'peru',
        estadio: "estádio guillermo briceño rosamedina",
        ranking: 123,
        namePlacar: 'bin',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/320px-Flag_of_Peru.svg.png'
    }
]

const campeonatoBoliviano = [
    {
        pos: 1,
        time: "the strongest",
        pais: 'bolivia',
        estadio: "estádio hernando siles",
        ranking: 38,
        namePlacar: 'str',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 2,
        time: "always ready",
        pais: 'bolivia',
        estadio: "el alto",
        ranking: 74,
        namePlacar: 'alw',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 3,
        time: "bolivar",
        pais: 'bolivia',
        estadio: "estádio hernando siles",
        ranking: 33,
        namePlacar: 'bol',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 4,
        time: "nacional potosí",
        pais: 'bolivia',
        estadio: "estádio victor agustín ugarte",
        ranking: 272,
        namePlacar: 'npo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 5,
        time: "oriente petrolero",
        pais: 'bolivia',
        estadio: "estádio ramón tahuichi aguilera",
        ranking: 81,
        namePlacar: 'ori',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 6,
        time: "club deportivo",
        pais: 'bolivia',
        estadio: "estádio libertador",
        ranking: 272,
        namePlacar: 'cde',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 7,
        time: "aurora",
        pais: 'bolivia',
        estadio: "estádio félix capriles",
        ranking: 236,
        namePlacar: 'aur',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 8,
        time: "independiente petrolero",
        pais: 'bolivia',
        estadio: "estádio olímpico patria",
        ranking: 125,
        namePlacar: 'ipe',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 9,
        time: "palmaflor del trópico",
        pais: 'bolivia',
        estadio: "estádio municipal de trópico",
        ranking: 232,
        namePlacar: 'pdt',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    },
    {
        pos: 10,
        time: "blooming",
        pais: 'bolivia',
        estadio: "estádio ramón tahuichi aguilera",
        ranking: 121,
        namePlacar: 'blo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Bolivia_%28state%29.svg/320px-Flag_of_Bolivia_%28state%29.svg.png'
    }
]

const campeonatoEquatoriano = [
    {
        pos: 1,
        time: "aucas",
        pais: 'equador',
        estadio: "estádio gonzalo pozo",
        ranking: 112,
        namePlacar: 'auc',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 2,
        time: "independiente del valle",
        pais: 'equador',
        estadio: "estádio rumiñahui",
        ranking: 12,
        namePlacar: 'idv',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 3,
        time: "universidad católica-EQU ",
        pais: 'equador',
        estadio: "estádio olímpico atahualpa",
        ranking: 90,
        namePlacar: 'uca',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 4,
        time: "ldu",
        pais: 'equador',
        estadio: "estádio rodrigo paz delgado",
        ranking: 21,
        namePlacar: 'ldu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 5,
        time: "emelec",
        pais: 'equador',
        estadio: "estádio george capwell",
        ranking: 29,
        namePlacar: 'eme',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 6,
        time: "deportivo cuenca",
        pais: 'equador',
        estadio: "estádio alejandro serrano aguilar",
        ranking: 130,
        namePlacar: 'dep',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 7,
        time: "club técnico",
        pais: 'equador',
        estadio: "estádio bella vista",
        ranking: 272,
        namePlacar: 'cte',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 8,
        time: "barcelona",
        pais: 'equador',
        estadio: "estádio monumental isidro",
        ranking: 19,
        namePlacar: 'bar',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 9,
        time: "delfín",
        pais: 'equador',
        estadio: "estádio jocay",
        ranking: 76,
        namePlacar: 'del',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    },
    {
        pos: 10,
        time: "orense sporting",
        pais: 'equador',
        estadio: "estádio orense",
        ranking: 272,
        namePlacar: 'ore',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/320px-Flag_of_Ecuador.svg.png'
    }
]

const campeonatoVenezuelano = [
    {
        pos: 1,
        time: 'Zamora',
        pais: 'venezuela',
        estadio: 'estádio agustín tovar',
        ranking: 99,
        namePlacar: 'zam',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 2,
        time: 'metropolitanos',
        pais: 'venezuela',
        estadio: 'olímpico de la universidad',
        ranking: 97,
        namePlacar: 'met',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 3,
        time: 'monagas',
        pais: 'venezuela',
        estadio: 'monumental de maturín',
        ranking: 133,
        namePlacar: 'mon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 4,
        time: 'carabobo',
        pais: 'venezuela',
        estadio: 'estádio misael delgado',
        ranking: 183,
        namePlacar: 'car',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 5,
        time: 'deportivo lara',
        pais: 'venezuela',
        estadio: 'estádio metropolitano de lara',
        ranking: 84,
        namePlacar: 'lar',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 6,
        time: 'deportivo táchira',
        pais: 'venezuela',
        estadio: 'estádio polideportivo',
        ranking: 42,
        namePlacar: 'tac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 7,
        time: 'academia',
        pais: 'venezuela',
        estadio: 'estádio complejo deportivo',
        ranking: 232,
        namePlacar: 'aca',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 8,
        time: 'club deportivo',
        pais: 'venezuela',
        estadio: 'estádio metropolitano de lara',
        ranking: 196,
        namePlacar: 'cde',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 9,
        time: 'estudiantes',
        pais: 'venezuela',
        estadio: 'Olímpico Metropolitano de Mérida',
        ranking: 96,
        namePlacar: 'est',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    },
    {
        pos: 10,
        time: 'portuguesa',
        pais: 'venezuela',
        estadio: 'estádio general josé antonio paez',
        ranking: 115,
        namePlacar: 'por',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/320px-Flag_of_Venezuela.svg.png'
    }
]

const ligaMX = [
    {
        pos: 1,
        time: 'pachuca',
        pais: 'méxico',
        estadio: 'hidalgo',
        ranking: 115,
        namePlacar: 'pac',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 2,
        time: 'toluca',
        pais: 'méxico',
        estadio: 'nemesio díez',
        ranking: 115,
        namePlacar: 'tolu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 3,
        time: 'pumas',
        pais: 'méxico',
        estadio: 'olímpico universitario',
        ranking: 115,
        namePlacar: 'pumas',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 4,
        time: 'tigres',
        pais: 'méxico',
        estadio: 'universitario',
        ranking: 115,
        namePlacar: 'tig',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 5,
        time: 'atlas',
        pais: 'méxico',
        estadio: 'jalisco',
        ranking: 115,
        namePlacar: 'atl',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 6,
        time: 'club léon',
        pais: 'méxico',
        estadio: 'léon',
        ranking: 115,
        namePlacar: 'leon',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 7,
        time: 'santos laguna',
        pais: 'méxico',
        estadio: 'corona',
        ranking: 115,
        namePlacar: 'sant',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 8,
        time: 'américa-MEX',
        pais: 'méxico',
        estadio: 'estádio azteca',
        ranking: 115,
        namePlacar: 'ame',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 9,
        time: 'querétaro',
        pais: 'méxico',
        estadio: 'corregidora',
        ranking: 115,
        namePlacar: 'que',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    },
    {
        pos: 10,
        time: 'monterrey',
        pais: 'méxico',
        estadio: 'estadio BBVA bancomer',
        ranking: 115,
        namePlacar: 'mont',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
    }
]

const mls = [
    {
        pos: 1,
        time: 'atlanta united',
        pais: 'eua',
        estadio: 'Mercedes-Benz stadium',
        ranking: 115,
        namePlacar: 'atl',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 2,
        time: 'portland',
        pais: 'eua',
        estadio: 'providence park',
        ranking: 115,
        namePlacar: 'por',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 3,
        time: 'new york red bulls',
        pais: 'eua',
        estadio: 'red bull arena',
        ranking: 115,
        namePlacar: 'nyr',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 4,
        time: 'sporting',
        pais: 'eua',
        estadio: 'childrens mercy park',
        ranking: 115,
        namePlacar: 'spo',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 5,
        time: 'sounders',
        pais: 'eua',
        estadio: 'centuryLink field',
        ranking: 115,
        namePlacar: 'sou',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 6,
        time: 'new york city',
        pais: 'eua',
        estadio: 'yankee stadium',
        ranking: 115,
        namePlacar: 'city',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 7,
        time: 'columbus crew',
        pais: 'eua',
        estadio: 'mapfre stadium',
        ranking: 115,
        namePlacar: 'colu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 8,
        time: 'real salt lake',
        pais: 'eua',
        estadio: 'rio tinto stadium',
        ranking: 115,
        namePlacar: 'real',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 9,
        time: 'los angeles fc',
        pais: 'eua',
        estadio: 'banc of california',
        ranking: 115,
        namePlacar: 'los',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    },
    {
        pos: 10,
        time: 'dallas',
        pais: 'eua',
        estadio: 'toyota stadium',
        ranking: 115,
        namePlacar: 'dall',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png'
    }
]

const campeonatoCostaRiquenho = [
    {
        pos: 1,
        time: 'herediano',
        pais: 'costa rica',
        estadio: 'Eladio Rosabal Cordero',
        ranking: 115,
        namePlacar: 'here',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/125px-Flag_of_Costa_Rica.svg.png'
    },
    {
        pos: 2,
        time: 'saprissa',
        pais: 'costa rica',
        estadio: 'Ricardo Saprissa Aymá',
        ranking: 115,
        namePlacar: 'sap',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/125px-Flag_of_Costa_Rica.svg.png'
    },
    {
        pos: 3,
        time: 'alajuelense',
        pais: 'costa rica',
        estadio: 'Alejandro Morera Soto',
        ranking: 115,
        namePlacar: 'ala',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/125px-Flag_of_Costa_Rica.svg.png'
    }
]

const campeonatoPanamenho = [
    {
        pos: 1,
        time: 'plaza amador',
        pais: 'panamá',
        estadio: 'Estádio Rommel Fernández',
        ranking: 115,
        namePlacar: 'plaza',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/125px-Flag_of_Panama.svg.png'
    },
    {
        pos: 2,
        time: 'tauro',
        pais: 'panamá',
        estadio: 'Estádio Rommel Fernández',
        ranking: 115,
        namePlacar: 'tau',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/125px-Flag_of_Panama.svg.png'
    },
    {
        pos: 3,
        time: 'árabe unido',
        pais: 'panamá',
        estadio: 'Estádio Rommel Fernández',
        ranking: 115,
        namePlacar: 'arabe',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/125px-Flag_of_Panama.svg.png'
    }
]

const campeonatoHondurenho = [
    {
        pos: 1,
        time: 'olimpia-HON',
        pais: 'honduras',
        estadio: 'Tiburcio Carías Andino',
        ranking: 115,
        namePlacar: 'olim',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Honduras_%281949%E2%80%932022%29.svg/125px-Flag_of_Honduras_%281949%E2%80%932022%29.svg.png'
    },
    {
        pos: 2,
        time: 'deportivo marathón',
        pais: 'honduras',
        estadio: 'Tiburcio Carías Andino',
        ranking: 115,
        namePlacar: 'mara',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Honduras_%281949%E2%80%932022%29.svg/125px-Flag_of_Honduras_%281949%E2%80%932022%29.svg.png'
    },
    {
        pos: 3,
        time: 'motagua',
        pais: 'honduras',
        estadio: 'Tiburcio Carías Andino',
        ranking: 115,
        namePlacar: 'mota',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_of_Honduras_%281949%E2%80%932022%29.svg/125px-Flag_of_Honduras_%281949%E2%80%932022%29.svg.png'
    }
]

const campeonatoSalvadorenho = [
    {
        pos: 1,
        time: 'Alianza-SAL',
        pais: 'el salvador',
        estadio: 'Estádio Cuscatlán',
        ranking: 115,
        namePlacar: 'alia',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/125px-Flag_of_El_Salvador.svg.png'
    },
    {
        pos: 2,
        time: 'santa tecla',
        pais: 'el salvador',
        estadio: 'Estadio Las Delicias',
        ranking: 115,
        namePlacar: 'ste',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/125px-Flag_of_El_Salvador.svg.png'
    },
    {
        pos: 3,
        time: 'matapan',
        pais: 'el salvador',
        estadio: 'Estádio Cuscatlán',
        ranking: 115,
        namePlacar: 'mata',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/125px-Flag_of_El_Salvador.svg.png'
    }
]

const campeonatoNicaraguense = [
    {
        pos: 1,
        time: 'real estelí',
        pais: 'nicaragua',
        estadio: 'Independence Soccer Stadium',
        ranking: 115,
        namePlacar: 'este',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/125px-Flag_of_Nicaragua.svg.png'
    },
    {
        pos: 2,
        time: 'ferretti',
        pais: 'nicaragua',
        estadio: 'Estádio Nacional de Futebol da Nicarágua',
        ranking: 115,
        namePlacar: 'fer',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/125px-Flag_of_Nicaragua.svg.png'
    },
    {
        pos: 3,
        time: 'sport sebaco',
        pais: 'nicaragua',
        estadio: 'Estádio Nacional de Futebol da Nicarágua',
        ranking: 115,
        namePlacar: 'seba',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/125px-Flag_of_Nicaragua.svg.png'
    }
]

const copaDoCaribe = [
    {
        pos: 1,
        time: 'central',
        pais: 'trindade e tobago',
        estadio: 'Estádio Ato Boldon',
        ranking: 115,
        namePlacar: 'cent',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/125px-Flag_of_Trinidad_and_Tobago.svg.png'
    },
    {
        pos: 2,
        time: 'W Connection FC',
        pais: 'trindade e tobago',
        estadio: 'Estádio Manny Ramjohn',
        ranking: 115,
        namePlacar: 'conn',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/125px-Flag_of_Trinidad_and_Tobago.svg.png'
    },
    {
        pos: 3,
        time: 'cibao',
        pais: 'república dominicana',
        estadio: 'estádio cibao fc',
        ranking: 115,
        namePlacar: 'cib',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/125px-Flag_of_the_Dominican_Republic.svg.png'
    }
]

const copaDoBrasil = {
    pos: 10,
    time: 'cruzeiro',
    pais: 'brasil',
    estadio: 'mineirão',
    ranking: 115,
    namePlacar: 'cru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png'
}

const copaDaArgentina = {
    pos: 3,
    time: 'river plate',
    pais: 'argentina',
    estadio: 'monumental de núñez',
    ranking: 115,
    namePlacar: 'riv',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/320px-Flag_of_Argentina.svg.png'
}

const copaDaColombia = {
    pos: 5,
    time: "junior barranquilla",
    pais: 'colombia',
    estadio: "estádio metropolitano",
    ranking: 26,
    namePlacar: 'jun',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png'
}

const copaDoChile = {
    pos: 1,
    time: "Colo-Colo",
    pais: 'chile',
    estadio: "monumental david arellano",
    ranking: 28,
    namePlacar: 'col',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/320px-Flag_of_Chile.svg.png'
}

const copaDoMexico = {
        pos: 2,
        time: 'toluca',
        pais: 'méxico',
        estadio: 'nemesio díez',
        ranking: 115,
        namePlacar: 'tolu',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png'
}


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
app.route('/mexico').get((req,res) => {
    res.json(ligaMX)
})
app.route('/eua').get((req,res) => {
    res.json(mls)
})
app.route('/costa-rica').get((req,res) => {
    res.json(campeonatoCostaRiquenho)
})
app.route('/panama').get((req,res) => {
    res.json(campeonatoPanamenho)
})
app.route('/honduras').get((req,res) => {
    res.json(campeonatoHondurenho)
})
app.route('/el-salvador').get((req,res) => {
    res.json(campeonatoSalvadorenho)
})
app.route('/nicaragua').get((req,res) => {
    res.json(campeonatoNicaraguense)
})
app.route('/caribe').get((req,res) => {
    res.json(copaDoCaribe)
})
app.route('/brasil-copa').get((req,res) => {
    res.json(copaDoBrasil)
})
app.route('/argentina-copa').get((req,res) => {
    res.json(copaDaArgentina)
})
app.route('/colombia-copa').get((req,res) => {
    res.json(copaDaColombia)
})
app.route('/chile-copa').get((req,res) => {
    res.json(copaDoChile)
})
app.route('/mexico-copa').get((req,res) => {
    res.json(copaDoMexico)
})