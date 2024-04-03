const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

let products = [
    {
        "id": 1,
        "name": "Leche",
        "description": "Disfruta de la pureza y frescura de la leche de 1 litro.",
        "price": 1200,
        "stock": 31
    },
    {
        "id": 2,
        "name": "Huevos",
        "description": "Huevos de Gallina feliz",
        "price": 250,
        "stock": 200
    },
    {
        "id": 3,
        "name": "Pan",
        "description": "Delicioso pan elaborado con harina de trigo, masa madre, semolín, sal y agua. Con una corteza crujiente y miga suave que da una agradable sensación al primer bocado. Un producto de alta hidratación de la masa y que no contiene materia grasa.",
        "price": 2500,
        "stock": 15
    },
    {
        "id": 4,
        "name": "Arroz",
        "description": "Delicioso Arroz Premium de 1 kg, perfecto para tus preparaciones favoritas.",
        "price": 2350,
        "stock": 23
    },
    {
        "id": 5,
        "name": "Fideos",
        "description": "Pasta elaborada con cultivos tradicionales de trigo por varias generaciones. El trigo duro entrega las mejores características proteicas. Un producto de calidad.",
        "price": 1190,
        "stock": 33
    },
    {
        "id": 6,
        "name": "Aceite de Oliva",
        "description": "Aceite de oliva extra virgen, ¡Perfecto para añadirlo a tus comidas o ensaladas favoritas!",
        "price": 5400,
        "stock": 39
    },
    {
        "id": 7,
        "name": "Azúcar",
        "description": "Azúcar Blanca para acompañar todas tus preparaciones, desde un rico café en la mañana, hasta un exquisito queque para compartir en familia. Por eso, deja que tu imaginación vuele y sigue viviendo cada momento de tu vida con el azucar en formato 1 kg.",
        "price": 1500,
        "stock": 51
    },
    {
        "id": 8,
        "name": "Sal",
        "description": "Sal Fina 1 kg en formato bolsa. Disfruta en tu cocina de esta sal refinada, en formato económico para ser usada en casa e ideal para rellenar saleros.",
        "price": 530,
        "stock": 32
    },
    {
        "id": 9,
        "name": "Harina",
        "description": "Harina sin polvos de hornear, elaborada con harina de trigo y cariño hecho en casa. Disponible para todo tipo de uso.",
        "price": 1430,
        "stock": 40
    },
    {
        "id": 10,
        "name": "Mantequilla",
        "description": "es una emulsión más o menos sólida considerada apta para consumo humano, producto del batido, amasado y lavado de grasas lácteas y agua, con o sin maduración biológica producida por bacterias lácticas específicas.",
        "price": 2690,
        "stock": 32
    },
    {
        "id": 11,
        "name": "Queso",
        "description": "derivado lácteo que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero",
        "price": 4790,
        "stock": 37
    },
    {
        "id": 12,
        "name": "Yogurt",
        "description": "El yogur ​ es un producto lácteo obtenido mediante la fermentación de la leche​ por medio de bacterias de los géneros Lactobacillus y Streptococcus.",
        "price": 570,
        "stock": 90
    },
    {
        "id": 13,
        "name": "Carne molida",
        "description": "carne de res finamente picada con un cuchillo, picadora de carne, picadora o máquina picadora.",
        "price": 2790,
        "stock": 67
    },
    {
        "id": 14,
        "name": "Truto largo de pollo",
        "description": "Parte alta de la extremidad posterior del pollo, proximal a la zona pélvica.",
        "price": 2163,
        "stock": 76
    },
    {
        "id": 15,
        "name": "Mix de proteina animal",
        "description": "Carne de res, cerdo, pollo, percado y huevos",
        "price": 11650,
        "stock": 32
    },
    {
        "id": 16,
        "name": "Papas",
        "description": "es una especie herbácea perteneciente al género Solanum de la familia de las solanáceas, originaria de la región que comprende el altiplano de los Andes centrales. Comunmente utilizada para la cocina",
        "price": 3490,
        "stock": 85
    },
    {
        "id": 17,
        "name": "Tomates",
        "description": "es una especie de planta herbácea del género Solanum de la familia Solanaceae. Comunmente utilizada para la cocina",
        "price": 1950,
        "stock": 223
    },
    {
        "id": 18,
        "name": "Cebolla",
        "description": "comúnmente conocida como cebolla, es una planta herbácea bienal perteneciente a la familia de las amarilidáceas. Comunmente utilizada para sacar lagimas a los cocineros",
        "price": 1650,
        "stock": 120
    },
    {
        "id": 19,
        "name": "Ajo",
        "description": "El ajo es una especie tradicionalmente clasificada dentro de la familia de las liliáceas pero que actualmente se ubica en la de las amarilidáceas, ​ aunque este extremo es muy discutido.",
        "price": 1000,
        "stock": 54
    },
    {
        "id": 20,
        "name": "Zanahoria",
        "description": "Buena para vista segun mi mama",
        "price": 5000,
        "stock": 15
    },
    {
        "id": 21,
        "name": "Manzana",
        "description": "¿Sabías que la manzana Fuji estimula la liberación de líquidos para nuestro cuerpo? Esto la hace un alimento ideal para casos de obesidad o enfermedades reumáticas. Además, tiene altas concentraciones de bioflavonoides que protegen el corazón.",
        "price": 2500,
        "stock": 25
    },
    {
        "id": 22,
        "name": "Platano",
        "description": "Su delicioso sabor y textura, su alto contenido de potasio, hacen del plátano un alimento perfecto para su consumo a diario. Prepáralo de la manera que prefieras o cómelo directamente.",
        "price": 1800,
        "stock": 30
    },
    {
        "id": 23,
        "name": "clementina",
        "description": "La clementina es un fruto cítrico híbrido, proveniente de la hibridación entre mandarina y naranja amarga, de donde proviene ese característico sabor agrio, pero a la vez también dulce.",
        "price": 2000,
        "stock": 40
    },
    {
        "id": 24,
        "name": "Uvas",
        "description": "Uva Blanca Sin Semilla",
        "price": 2300,
        "stock": 20
    },
    {
        "id": 25,
        "name": "Cafe en grano",
        "description": "Café en grano 100% puro, una mezcla 50% arábica y 50% robusto. Ideal para empezar tu día con la mejor calidad y energía.",
        "price": 4600,
        "stock": 17
    },
    {
        "id": 26,
        "name": "Te",
        "description": "Es un té de gran cuerpo e intensidad en sus notas de sabor y aroma. Es cultivado y seleccionado a diferentes altitudes en Sri Lanka logrando una experiencia de sabor y equilibrio que cautiva.",
        "price": 4800,
        "stock": 60
    },
    {
        "id": 27,
        "name": "Bidon de Agua",
        "description": "Es perfecta para los amantes de lo natural, con su increíble pureza sentirás como estar bebiéndola directamente desde la montaña.",
        "price": 2800,
        "stock": 80
    },
    {
        "id": 28,
        "name": "Jugo de Naranja",
        "description": "Un Jugo 100% natural bajo en calorías y sin saborizantes artificiales.",
        "price": 1690,
        "stock": 50
    },
    {
        "id": 29,
        "name": "Cereal",
        "description": "Es un cereal con sabor frutal y forma de frutitas a base de maíz integral y maíz\nCereal con sabor frutal\nEnriquecido con vitaminas y minerales\nGrano entero",
        "price": 4000,
        "stock": 100
    },
    {
        "id": 30,
        "name": "Galletas Choco Chips",
        "description": "Fantásticas Galletas Chocochips, geniales para degustarlas en toda ocasión. Compártelas con amigos y familiares.",
        "price": 1500,
        "stock": 70
    }
]

async function main() {


    for (let product of products) {
        await prisma.products.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock
            }
        })


    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })