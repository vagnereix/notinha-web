import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FileAxis3D, Info, UserPlus2 } from 'lucide-react';
import { Card, CardDescription, CardHeader } from './ui/card';

export function Form() {
  return (
    <article className='flex flex-col max-w-5xl h-full p-4 space-y-4 md:p-10'>
      <section className='space-y-2'>
        <strong className='font-bold text-lg'>Valor total da conta</strong>

        <Input
          className='font-semibold leading-none'
          placeholder='Digite o valor total'
          type='number'
        />
      </section>

      <section className='space-y-2'>
        <strong className='font-bold text-lg'>
          Número total de pessoas{' '}
          <i>(sem contar quem chegou depois ou não consumiu tudo)</i>
        </strong>

        <Input
          className='font-semibold leading-none'
          placeholder='Digite o total de pessoas'
          type='number'
        />
      </section>

      <section className='space-y-2'>
        <strong className='font-bold text-lg'>
          Alguém prometeu te pagar depois? Registre aqui
        </strong>
        {/* exibir checkbox se valor completo ou parcial */}

        <Card>
          <CardHeader className='flex-row flex items-center gap-2 space-y-0'>
            <Info className='w-4 h-4 flex-shrink-0' />

            <CardDescription>
              Essa informação é importante para manter o controle de quem te
              deve dinheiro. Assim, você pode lembrar de quem cobrar depois e
              ter um registro da dívida.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className='border rounded-lg'>
          <Button className='w-full rounded-none' size='icon' variant='ghost'>
            <UserPlus2 className='w-4 h-4 mr-2' />
            <span>Registrar alguém</span>
          </Button>
        </div>
      </section>

      <section className='space-y-2'>
        <strong className='font-bold text-lg'>
          Alguém chegou depois ou não consumiu tudo? Registre aqui
        </strong>

        <Card>
          <CardHeader className='flex-row flex items-center gap-2 space-y-0'>
            <Info className='w-4 h-4 flex-shrink-0' />

            <CardDescription>
              Você precisa somar o valor total do que essas pessoas consumiram
              com o restante e dividir pelo número de pessoas, e então registrar
              esse valor aqui.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className='border rounded-lg'>
          <Button className='w-full rounded-none' size='icon' variant='ghost'>
            <UserPlus2 className='w-4 h-4 mr-2' />
            <div>Registrar alguém</div>
          </Button>
        </div>
      </section>

      <Button className='gap-2'>
        <FileAxis3D className='w-4 h-4' /> Gerar notinha
      </Button>
    </article>
  );
}
