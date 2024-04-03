import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default async function handler(req, res) {

    let body = req.body
    let data = {
        social_name: body.name
    }

    let user = await prisma.users.findFirst({
        where: data
    })
    if (!user) {
        user = await prisma.users.create({
            data: data
        })
    }

    let total = 0;
    let ids = []
    for (let item of body.solds) {
        let itemDB = await prisma.products.findFirst({
            where: {
                id:+item.id
            }
        })
        if (itemDB) {
            total += itemDB.price * item.count
            ids.push({product_id:itemDB.id,count:item.count,price:itemDB.price})
        }

    }


    
    let sale = await prisma.sales.create({
        data: {
            user_id: user.id,
           date: new Date()
        }
    })

    let seller_products = await prisma.sales_details.createMany({
        data:ids.map((value)=>({
            sale_id:sale.id,
            product_id:value.product_id,
            quantity:value.count,
            price: value.price
        }))
    })



    res.send(user)
}
