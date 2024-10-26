
import Image from "next/image"
import '@/css/about.css'



export default function About() {
  return (
    <main>

          {/* 1st section*/}
          <section className="about">
              
                   <div className="about-img">
                     <img src="/about-1.jpg" alt="cake"/>
                      </div>
              
              
              <div className="about-content">
                 
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
             <h2>Our Shop &<br/> Global Connevtivity</h2>
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

            {/* 3rd section*/}
            <section className="special">
              
              <div className="special-img">
                <img src="/about-3.jpg" alt="cake"/>
                 </div>
         
         
                <div className="special-content">
            
             <h2>Our Speciality<br/> Spreading Sweetness</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Aliquam animi accusamus reprehenderit, ea architecto error
                libero consectetur voluptatibus qui exercitationem deleniti 
                ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
            <p><ul>
                <li>Front view Locations</li>
                <li>Natural Ingredients</li>
                <li>Well named in Market</li>
                <li>Globally connected</li>
                <li>Online Orders & Delivery</li>
                <li>Pocket Friendly</li>
                </ul></p>
                <div className="btn-box">
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">Our Speciality</a></button>  
                                   
                 </div>
         </div>
     </section>

            {/* 4th section*/}
            <section className="cake">
              <div className="cake-content">
                 <div>
                  <h2>Order Your Favourite Flavor</h2>
                 
                    </div>
                    <div>
                     <img src="/img-3.jpg" alt="cake"/>
                     <img src="/img-4.jpg" alt="cake"/>
                     <img src="/img-5.jpg" alt="cake"/>
                     <img src="/img-6.jpg" alt="cake"/>
                     <img src="/img-7.jpg" alt="cake"/>
                     <img src="/img-8.jpg" alt="cake"/>
                     <img src="/img-9.jpg" alt="cake"/>
                     <img src="/img-10.jpg" alt="cake"/>
                     <img src="/img-11.jpg" alt="cake"/>
                     </div>  
                                
              </div>
          </section>
          


     </main>
  );
}