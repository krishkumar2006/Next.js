
import style from '../style.module.css'

import Link from 'next/link'
import React from 'react'
export default function Products() {
  return (
    <div>
      <h2>This is our  <Link href={"http://localhost:3000/products/detail"}  className={style.list}>Products list</Link> </h2>
    </div>
  )
}

