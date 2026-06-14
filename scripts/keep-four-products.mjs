import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const keep = ['drop-01-tee-1', 'drop-01-tee-2', 'drop-01-tee-3', '1']

try {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      externalId: true,
      name: true
    }
  })

  const idsToRemove = products
    .filter((product) => !keep.includes(product.externalId || product.id))
    .map((product) => product.id)

  if (idsToRemove.length > 0) {
    await prisma.productHistory.deleteMany({
      where: {
        productId: {
          in: idsToRemove
        }
      }
    })

    await prisma.productImage.deleteMany({
      where: {
        productId: {
          in: idsToRemove
        }
      }
    })

    await prisma.product.deleteMany({
      where: {
        id: {
          in: idsToRemove
        }
      }
    })
  }

  const remaining = await prisma.product.findMany({
    select: {
      externalId: true,
      name: true
    },
    orderBy: {
      createdAt: 'asc'
    }
  })

  console.log(JSON.stringify({ removed: idsToRemove.length, remaining }, null, 2))
} finally {
  await prisma.$disconnect()
}
