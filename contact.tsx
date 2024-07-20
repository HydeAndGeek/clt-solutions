import { useForm } from '@formspree/react';

   export default function Contact() {
     const [state, handleSubmit] = useForm("yourFormspreeID");
     if (state.succeeded) {
       return <p>Thanks for contacting us!</p>;
     }
     return (
       <div>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <label htmlFor="email">Email Address</label>
           <input id="email" type="email" name="email" required />
           <label htmlFor="message">Message</label>
           <textarea id="message" name="message" required></textarea>
           <button type="submit" disabled={state.submitting}>Submit</button>
         </form>
       </div>
     );
   }