import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function test() {
  // Limpar antes (opcional)
  // await prisma.todo.deleteMany({});

  console.log('\n1️⃣ Contando todos ANTES:');
  const countBefore = await prisma.todo.count();
  console.log(`Total: ${countBefore}`);

  console.log('\n2️⃣ Criando primeiro TODO...');
  const todo1 = await prisma.todo.create({
    data: {
      title: 'Task - 1',
      description: 'Curso de api rest'
    }
  });
  console.log('✅ Criado:', todo1);

  console.log('\n3️⃣ Criando segundo TODO...');
  const todo2 = await prisma.todo.create({
    data: {
      title: 'Task - 2',
      description: 'Outra tarefa'
    }
  });
  console.log('✅ Criado:', todo2);

  console.log('\n4️⃣ Listando TODOS os TODOs:');
  const todos = await prisma.todo.findMany();
  console.log(`Total: ${todos.length}`);
  console.log(JSON.stringify(todos, null, 2));

  await prisma.$disconnect();
}

test();
