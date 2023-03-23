import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <h1 className='text-center font-bold'>Kid's Fishing with Captain Dr. Billy</h1>
      <p>Captain Dr. Billy welcomes you to the Golden Isles of Georgia!! If you have kids and are looking for an exciting adventure on the water, contact Captain Dr. Billy for a great experience!</p>
      <p>Billy Bice, Ed.D. is a licensed Coast Guard Captain and a former teacher, principal, and school superintendent. He has a lifetime of experience in the outdoors and looks forward to sharing his knowledge of fishing and the Georgia Coast with families. Trips are designed for families to enjoy together. Bird watching, area history, fishing, and having fun -- Captain Dr. Billy makes sure that everyone gets in on the act aboard the "Billy Bee."</p>
      <p>The "Billy Bee" is a 22' PathFinder bay boat designed for inshore and near-shore fishing, and is equipped with all required safety equipment.  Safety is the #1 priority aboard the "Billy Bee" -- all children are required to wear Coast Goard approved life vests (supplied by the Billy Bee).</p>
      <p>We will fish for a variety of species during your trip -- including SHARK!!!  Typical fishing trips are 3 or 2 hours to accommodate families with small children. </p>

      <h2>Attention Non-Fishermen !!!</h2>
      <p>Don't Fish ?   How about a river cruise and dolphin tour?  See the beautiful and playful dolphins up close; see Fort Frederica from the water; see boats cruising the Intercoastal Waterway; ride UNDER the new Sidney Lanier Bridge.  YOU are the navigator on a "Billy Bee" exploration cruise!!</p>
    </>
  )
}
