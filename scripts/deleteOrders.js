import { PrismaClient } from '../generated/prisma-client/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

if (!process.env.DATABASE_URL) {
  const sqliteDbPath = path.join(projectRoot, 'prisma', 'dev.db').replace(/\\/g, '/');
  process.env.DATABASE_URL = `file:${sqliteDbPath}`;
}

const prisma = new PrismaClient();

async function main() {
  console.log('Rozpoczynam usuwanie zamówień...');
  
  // Najpierw usuwamy OrderItem, ponieważ nie ma ustawionego Cascade na relacji
  const deletedItems = await prisma.orderItem.deleteMany({});
  console.log(`Usunięto ${deletedItems.count} pozycji z zamówień (OrderItem).`);

  // Następnie usuwamy właściwe zamówienia
  const deletedOrders = await prisma.order.deleteMany({});
  console.log(`Usunięto ${deletedOrders.count} zamówień (Order).`);
  
  console.log('Operacja zakończona sukcesem.');
}

main()
  .catch((e) => {
    console.error('Wystąpił błąd:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
