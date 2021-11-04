import type { NextPage } from 'next'
import Link from "next/Link"

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>

      hola mundo, soy nextjs

      <br/>

      <Link href="/admin/usuarios">
        <a className='cursor-pointer'>esto es un link a usuarios</a>
      </Link>
        
    </div>

  )
}

export default Home
