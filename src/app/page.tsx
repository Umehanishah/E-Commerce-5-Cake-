
import Image from "next/image"
import '../css/page.css';


export default function Home() {
  return (
    <main>

      {/* head section*/}
      <section className="home">
              
         <div className="home-content">
            
             <h2>Taste the<br/>Sweetness of Nature</h2>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
               Aliquam animi accusamus reprehenderit, ea architecto error
                libero consectetur voluptatibus qui exercitationem deleniti 
                ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                <div className="btn-box">
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">Our Speciality</a></button>  
                                   
                 </div>
         </div>
         <div className="home-img">
                <img src="/img-1.jpg" alt="cake" />
                 </div>
     </section>


          {/* 2nd section*/}
          <section className="about">
              
                   <div className="about-img">
                     <img src="/img-2.jpg" alt="cake" />
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

           {/* 3rd section*/}
           <section className="cake">
              <div className="cake-content">
                 <div>
                  <h2>Order Your Favourite Flavor</h2>
                 
                    </div>
                    <div>
                     <img src="/img-3.jpg" alt="cake" />
                     <img src="/img-4.jpg" alt="cake" />
                     <img src="/img-5.jpg" alt="cake" />
                     <img src="/img-6.jpg" alt="cake" />
                     <img src="/img-7.jpg" alt="cake" />
                     <img src="/img-8.jpg" alt="cake" />
                     <img src="/img-9.jpg" alt="cake" />
                     <img src="/img-10.jpg" alt="cake" />
                     <img src="/img-11.jpg" alt="cake" />
                     </div>  
                                
              </div>
          </section>
          


            {/* 4th section*/}
            <section className="special">
              
              <div className="special-img">
                <img src="/img-12.png" alt="cake" />
                 </div>
         
         
         <div className="special-content">
            
             <h2>Specality of<br/> Sweetness of Nature</h2>
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

            {/* 5th section*/}
            <section className="review">
              <div className="review-content">
                  <div>
                  <h3>John Wilsom</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquam animi accusamus reprehenderit, ea architecto error
                     libero consectetur voluptatibus qui exercitationem deleniti 
                     ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">More Reviews</a></button>  
                     </div>
                     <div>
                     <h3>John Wilsom</h3>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquam animi accusamus reprehenderit, ea architecto error
                     libero consectetur voluptatibus qui exercitationem deleniti 
                     ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
                     <button className="btn-1"><a href="/about.tsx">Read More</a></button>
                     <button className="btn-2"><a href="/shop.tsx">More Reviews</a></button>  
                     </div>
              </div>
          </section>


     </main>
  );
}