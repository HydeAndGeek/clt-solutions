import Link from 'next/link';

   export default function About() {
     return (
       <div>
         <h1>About Us</h1>
         <p>A diverse portfolio of tech solutions with a dedicated sales team...</p>
         <Link href="/">Back to Home</Link>
       </div>
     );
   }