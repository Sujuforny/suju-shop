import CardCategoriesCompinent from '@/components/CardCategoriesCompinent';
import CardComponent from '@/components/CardComponent'
import CardUserComponent from '@/components/CardUserComponent';

//Get API product
export const getProduct = async()=>{
  const res = await  fetch('https://api.escuelajs.co/api/v1/products?limit=20&offset=1');
  const data =  await res.json();
  return data ;
}
//Get API Categories
const getCategories = async()=>{
  const res = await  fetch('https://api.escuelajs.co/api/v1/categories?limit=10');
  const data =  await res.json();
  return data ;
}

//Get API User 
const getUser = async()=>{
  const res = await  fetch('https://api.escuelajs.co/api/v1/users?limit=8');
  const data =  await res.json();
  return data ;
}
export default async function Home() {
  const  product = await getProduct();
  const  categories = await getCategories();
  const  user = await getUser();

  return (
  <main className='pt-44 px-24'>
    <h1 class="text-4xl font-thin text-gray-900 dark:text-white flex justify-center items-center">User</h1>
    <section className='flex flex-row flex-wrap items-center justify-between pb-24 pt-10 '>
      {
        user.map((user)=>(
          <CardUserComponent key={user.id} name={user.name} image={user.avatar} />
        ))
      }
    </section>

    <h1 class="text-4xl font-thin text-gray-900 dark:text-white flex justify-center items-center">Categories</h1>

    <section className='flex flex-row flex-wrap items-center justify-between pb-24 pt-10' >
      {
        categories.map((categories)=>(
          <CardCategoriesCompinent key={categories.id} name={categories.name} image={categories.image}/>

        ))
      }
    </section>

    <section className="flex flex-row flex-wrap items-center justify-between pb-24  ">
        {
          product.map((product)=>(
              <CardComponent key={product.id} id={product.id} title={product.title} price={product.price} image={product.images[0]}/>
          ))
        }
    </section>
    </main>
  )
}
