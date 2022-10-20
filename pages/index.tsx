import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    
    <div className='bg-scroll bg-my-bg bg-cover'>
      <div className=' text-white px-8 py-16 '>
        <div className=' max-w-xl grid grid-cols-1 gap-8 '>
          <h2 className='text-xl uppercase font-bold'>Just a landing page</h2>
          <h1 className='text-6xl font-bold'>
            This is just a random landing page
          </h1>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            molestiae facilis rerum obcaecati ipsam commodi dolore aliquam
            molestias impedit tempora iste officia quasi ipsum nemo, quidem
            consectetur! Ipsum, ut numquam magnam praesentium voluptatem
            accusantium voluptates blanditiis hic tempora doloribus cumque!
          </p>
          <button className='bg-red-500 py-3 px-6 text-lg rounded-md w-48'>
            Try Yourself
          </button>
        </div>
      </div>
      <div className='px-8 py-16'>
        <div className='max-w-md mb-16'>
          <h2 className='text-5xl'>Entertainment for you</h2>
        </div>
        <div className=' grid grid-cols-2 gap-4 text-slate-700'>
          <div className=''>
            <h3 className='text-2xl font-bold mb-2'>Do what you love</h3>
            <p className='text-lg'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              saepe natus et obcaecati deserunt quaerat, doloribus laborum,
              aliquam cum id ipsam numquam. Esse ex vero cum in tenetur vitae
              quis explicabo, voluptates error dolorem, omnis consequuntur dolor
              sunt ipsum optio?
            </p>
          </div>

          <div className=''>
            <h3 className='text-2xl font-bold mb-2'>
              Easy money back guaranteed
            </h3>
            <p className='text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              perferendis sit porro blanditiis facere at accusantium et nostrum
              fugit voluptatum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
