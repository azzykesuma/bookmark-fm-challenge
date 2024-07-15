import AccordionWrapper from './AccordionWrapper';
import Button from './ui/Button';

const Faq = () => {
  return (
    <section className='mt-28 lg:w-1/3 mx-auto'>
      <h2 className="text-2xl text-very-dark-blue text-center mb-4 font-semibold">Frequently Asked Questions</h2>
      <p className='text-grayish-blue text-center text-sm'>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <div className='my-6'>
        <AccordionWrapper />
      </div>
      <div className='w-1/3 mx-auto'>
        <Button variant='primary'>More Info</Button>
      </div>
    </section>
  );
}

export default Faq
