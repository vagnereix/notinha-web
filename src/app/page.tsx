import { Bill } from '@/components/bill';
import { Form } from '@/components/form';
import { Invoice } from '@/components/invoice';

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <Form />
      <Invoice />
    </main>
  );
}
