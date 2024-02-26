'use client';

import {
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableHeader,
  TableHead,
} from '@/components/ui/table';

import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Margin, Options, Resolution, usePDF } from 'react-to-pdf';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const options: Options = {
  method: 'open',
  resolution: Resolution.NORMAL,
  page: {
    margin: Margin.NONE,
  },
};

export function Invoice() {
  const { toPDF, targetRef: invoiceRef } = usePDF({
    filename: 'notinha.pdf',
  });

  function handleShare() {
    toPDF(options);
  }

  return (
    <article
      ref={invoiceRef}
      className='flex flex-col max-w-5xl w-full p-4 space-y-4 md:p-10'
    >
      <Card className='p-6 rounded-lg shadow-lg'>
        <CardHeader className='space-y-2 p-0 mb-4'>
          <h1 className='text-2xl font-bold'>
            Notinha - 17 de fevereiro de 2024
          </h1>

          <div className='flex justify-between'>
            <p className='text-sm text-gray-600'>Notinha do rolê, Inc.</p>
            <p className='text-sm text-gray-600'>vagnereix.dev@gmail.com</p>
          </div>
        </CardHeader>

        <CardContent className='p-0'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-left'>Descrição</TableHead>
                <TableHead className='text-right'>Valor</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <TableRow>
                <TableCell className='font-medium'>
                  Total no estabelecimento
                </TableCell>
                <TableCell className='text-right'>R$ 200,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-red-600'>
                  Valor pago por Fulano que não consumiu todos os pedidos
                </TableCell>
                <TableCell className='text-right text-red-600'>
                  -R$ 15,00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-red-600'>
                  Valor pago por Cícero que não consumiu todos os pedidos
                </TableCell>
                <TableCell className='text-right text-red-600'>
                  -R$ 15,00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-red-600'>
                  Valor pago por Beltrano que não consumiu todos os pedidos
                </TableCell>
                <TableCell className='text-right text-red-600'>
                  -R$ 20,00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-semibold'>
                  Total a ser pago por 3 pessoas
                </TableCell>
                <TableCell className='text-right font-semibold'>
                  R$ 150,00
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='font-bold'>Total por pessoa</TableCell>
                <TableCell className='text-right font-bold text-2xl'>
                  R$ 50,00
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className='mt-4'>
            <h2 className='text-md font-bold'>Débitos</h2>
            <p className='text-sm'>
              Fulano ficou devendo R$ 15,00 a Cícero que pagou apenas R$ 35,00
              da sua parte.
            </p>
          </div>

          <div className='mt-4'>
            <h2 className='text-md font-bold'>E-mail</h2>
            <p className='text-sm'>vagnereix.dev@gmail.com</p>
          </div>
        </CardContent>

        <CardFooter className='flex justify-between mt-6 p-0'>
          <Button variant='outline'>Salvar notinha</Button>
          <Button variant='default' onClick={handleShare}>
            Compartilhar
            <Share2 className='w-4 h-4 ml-2' />
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
}
