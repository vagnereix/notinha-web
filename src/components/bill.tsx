import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export function Bill() {
  return (
    <Card className='w-full max-w-lg mb-6'>
      <CardHeader className='flex flex-col items-start space-y-2'>
        <CardTitle className='text-2xl font-bold'>
          Notinha -{' '}
          {Intl.DateTimeFormat('pt-BR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date())}
        </CardTitle>

        <CardDescription>
          <div className='grid gap-1 text-sm'>
            <strong className='font-semibold'>Notinha do rolê, Inc.</strong>
            <span>vagnereix.dev@gmail.com</span>
            <span>notinha.inc</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className='p-0'>
        <section className='grid gap-4 px-6 pb-6'>
          <div className='grid items-center gap-1'>
            <strong className='font-semibold'>Total no estabelecimento</strong>
            <h2 className='text-2xl font-bold'>R$ 200,00</h2>

            <div>
              <span className='text-sm dark:text-green-600 text-green-500 font-bold'>
                menos R$ 15,00
              </span>{' '}
              <span>de Fulano que não consumiu de tudo.</span>
            </div>

            <div>
              <span className='text-sm dark:text-green-600 text-green-500 font-bold'>
                menos R$ 15,00
              </span>{' '}
              <span>de Cicrano que não consumiu de tudo.</span>
            </div>

            <div>
              <span className='text-sm dark:text-green-600 text-green-500 font-bold'>
                menos R$ 20,00
              </span>{' '}
              <span>de Beltrano que não consumiu de tudo.</span>
            </div>
          </div>

          <div>
            <div className='font-semibold mt-2'>
              Total a ser pago por 3 pessoas
            </div>
            <div className='text-3xl font-bold'>R$ 150,00</div>
          </div>
        </section>

        <section className='grid gap-4 px-6 pb-6'>
          <div>
            <strong className='font-semibold'>Total por pessoa</strong>
            <h2 className='text-4xl text-yellow-500 font-bold'>R$ 50,00</h2>
          </div>

          <div className='grid gap-1'>
            <strong className='font-semibold'>Débitos</strong>
            <p className='text-sm font-bold'>
              Fulano{' '}
              <span className='dark:text-red-600 text-red-500'>
                ficou devendo R$ 15,00
              </span>{' '}
              a Cicrano que pagou apenas{' '}
              <span className='text-yellow-500'>R$ 35,00</span> da sua parte.
            </p>
          </div>
        </section>
        <Separator className='border-t' />

        <section className='grid gap-4 px-6 py-4'>
          <div className='grid gap-1'>
            <strong className='font-semibold'>E-mail</strong>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              vagnereix.dev@gmail.com
            </span>
          </div>
        </section>
        <Separator className='border-t' />
      </CardContent>

      <CardFooter className='p-6 flex justify-end gap-2'>
        <Button>Download</Button>
        <Button variant='outline'>Print</Button>
      </CardFooter>
    </Card>
  );
}
