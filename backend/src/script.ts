import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {


  const pet =  await prisma.pet.count()

  const allPets = await prisma.pet.findMany();
  console.log(allPets);
}

main()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
