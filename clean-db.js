import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clean() {
  console.log('🧹 Deletando todos os TODOs...');
  
  const deleted = await prisma.todo.deleteMany({});
  
  console.log(`✅ Deletados: ${deleted.count} registros`);
  
  console.log('\n📊 Contando registros restantes...');
  const count = await prisma.todo.count();
  console.log(`Total agora: ${count}`);
  
  await prisma.$disconnect();
}

clean();
