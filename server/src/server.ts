import Fastify from 'fastify'
import {PrismaClient} from '@prisma/client'
import  cors from '@fastify/cors'

const prisma = new PrismaClient({
    log: ['query'],
})

async function bootstrap(){
    const fastify = Fastify({
        logger:true,
    })

await fastify.register(cors, {
    origin: true //qualquer aplicação pode acessar minha aplicação
})

    fastify.get('/bolao/count', async ()=> {
         const pools = await prisma.bolao.count()

        return {pools}
    })



    await fastify.listen({port:2000, host:'0.0.0.0'})// host: '0.0.0.0' para que a aplicação possa rodar no celular
}

bootstrap()