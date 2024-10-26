
import Image from "next/image"
import '@/css/contact.css'



export default function Contact() {
  return (
    <main>

          {/* 1st section*/}
          <section className="shop">
              
                   <div className="shop-img">
                     <img src="/img-12.png" alt="cake"/>
                      </div>
              
              
              <div className="shop-content">
                 
                  <h2>About<br/> Sweetness of Nature</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquam animi accusamus reprehenderit, ea architecto error
                     libero consectetur voluptatibus qui exercitationem deleniti 
                     ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                     <div className="btn-box">
                          <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                          <button className="btn-2"><a href="/shop.tsx">Our Speciality</a></button>  
                                        
                      </div>
              </div>
          </section>

            {/* 2nd section*/}
            <section className="about-shop">
         
            <div className="about-shop-1">   
             <h2>Our Shop</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Aliquam animi accusamus reprehenderit, ea architecto error
                libero consectetur voluptatibus qui exercitationem deleniti 
                ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                <div className="btn-box">
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">Our Speciality</a></button>                    
                 </div>
                 </div>

                 <div className="about-shop-img">
                <img src="/about-2.jpeg" alt="shop"/>
                 </div>
         
             </section>

        
            {/* 4th section*/}
            <section className="about-shop">
            <div className="about-shop-img">
                <img src="/shop-2.webp" alt="shop"/>
                 </div>

            <div className="about-shop-1">   
             <h2>Our Locations</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Aliquam animi accusamus reprehenderit, ea architecto error
                libero consectetur voluptatibus qui exercitationem deleniti 
                ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                <div className="btn-box">
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">Our Speciality</a></button>                    
                 </div>
                 </div>

                 
         
             </section>


     </main>
  );
}