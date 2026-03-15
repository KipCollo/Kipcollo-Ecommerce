// import { useParams } from 'react-router-dom';
// import { products } from '../data/product';
import type { JSX } from 'react';
import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { FiMinus } from 'react-icons/fi';
import { IoIosAdd } from 'react-icons/io';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

function ProductDetails(): JSX.Element {
  // const { id } = useParams<{ id: string }>();
  // const product = products.find((p: Product) => p.id === Number(id));

  // if (!product) return <p>Product not found.</p>;

  return (
    <div className='flex justify-between'>
      <div className='w-400'>
        <div className='w-100 bg-amber-300'>
          <img src="../src/assets/zinforo.jpeg" alt="" />
        </div>
        <div className='flex w-100'>
          <img src="../src/assets/zinforo.jpeg" width={100} alt="" />
          <img src="../src/assets/zinforo.jpeg" width={100} alt="" />
          <img src="../src/assets/zinforo.jpeg" width={100} alt="" />
          <img src="../src/assets/zinforo.jpeg" width={100} alt="" />

        </div>
      </div>

      <div className='m-4'>
        <h2 className=''>Lenovo Pro Bit</h2>
        <div>
          <ul className='list-none flex'>
            <li><FaStar color='gold' /></li>
            <li><FaStar color='gold' /></li>
            <li><FaStar color='gold' /></li>
            <li><FaStar color='gold' /></li>
            <li><FaStar color='gold' /></li>
          </ul>
          <span>
            (5.0) 40 Reviews . 40 sold
          </span>
        </div>
        <p>KES 39000</p>
        <p>colors <span>Midnight</span></p>
        <ul className='list-none flex gap-2'>
          <li><button className='bg-amber-600 cursor-pointer'>Midnight</button></li>
          <li><button>Silver</button></li>
          <li><button>Starlight</button></li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero voluptatum sit minima aliquam ea beatae quis corrupti, alias, numquam accusantium? Dignissimos ut nemo consequuntur nobis ullam distinctio, eum aliquid.
          Eveniet, cumque! Vitae corporis sunt hic iste magnam harum aperiam, ipsum assumenda voluptatibus. Reprehenderit quo deserunt quidem! Excepturi, fuga, accusamus, odit dolor atque ullam dignissimos ratione laboriosam esse facere ipsam.
        </p>

        <div className='flex justify-around border-1 w-20'>
          <FiMinus />
          1
          <IoIosAdd color='gold' />
        </div>

        <div className='flex justify-between'>
          <button className='bg-amber-500'>Buy Now</button><br />
          <button className='flex gap-3 align-middle justify-center border-2 border-amber-400'><FaCartArrowDown /> <span>Add to Cart</span></button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
