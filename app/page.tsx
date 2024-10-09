import style from './style.module.css'
import Link from 'next/link'
export default function Home(){
return(
    <div>

        {/* NAVBAR */}
       <div className={style.heading}> <h1>WELCOME TO MY  FIRST NEXT.JS ASSIGNMENT</h1>
       </div>

{/* PAGES */}
<ul className={style.page}>
    
    <li>< Link href={"http://localhost:3000/about"}>About</Link> </li>
    <li>< Link href={"http://localhost:3000/contact"}>Contact us</Link></li>
    <li>< Link href={"http://localhost:3000/products"}>products</Link></li>
</ul>
    </div>
)
}   