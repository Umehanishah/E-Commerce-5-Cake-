
import Image from "next/image"
import '@/css/order.css'


export default function Order() {
  return (
    <main>

      {/* order section*/}
            <section className="order">
              
                  <div className="order-content">
                  <h1>Order and Taste <br/> Best Cakes</h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aliquam animi accusamus reprehenderit, ea architecto error
                     libero consectetur voluptatibus qui exercitationem deleniti 
                     ipsum quasi sequi molestias, sapiente dolorem ab non minima.</p>
     
                    <button className="btn-1"><a href="/order">Order Now</a></button>
                    <button className="btn-2"><a href="/about">View More</a></button>  
                      </div>


                      <div className="order-img">
                      <img src="/order.jpg" alt="cake" />
                      </div>
              
          </section>

           {/* 2nd section*/}
           <section className="cake">
              <div className="cake-content"> 
                  <h2>Order Your Favourite Flavor</h2>
                  
                    </div>

                    <div className="cake-img">
                    <h3><u><i>Pasteries</i></u></h3>
                       
                            <img src="/img-3.jpg" alt="cake" />
                            
                           
                            <img src="/img-4.jpg" alt="cake" />
                         
                        
                            <img src="/img-5.jpg" alt="cake" />
                           
                            <img src="/img-6.jpg" alt="cake" />
                            
                            <img src="/img-7.jpg" alt="cake" />
                            
                            <img src="/img-8.jpg" alt="cake" />
                            
                            <img src="/img-9.jpg" alt="cake" />
                            
                            <img src="/img-10.jpg" alt="cake" />
                            
                            <img src="/img-11.jpg" alt="cake" />
                            
                            <img src="/img-13.jpg" alt="cake" />
                            
                            <img src="/img-14.jpg" alt="cake" />
                            
                            <img src="/img-15.jpg" alt="cake" />
                            
                            <img src="/img-16.jpg" alt="cake" />
                            
                            <img src="/img-17.jpg" alt="cake" />
                            
                            <img src="/img-18.jpg" alt="cake" />

                        
                        </div>  
                                
        
          </section>
          
          {/* 2nd section*/}
          <section className="cake">
          <div className="cake-img">
                    <h3><u><i>Cakes</i></u></h3>
                   
                     <img src="/order-1.jpg" alt="cake" />
                     <img src="/order-2.jpg" alt="cake" />
                     <img src="/order-3.jpg" alt="cake" />
                     <img src="/order-4.jpg" alt="cake" />
                     <img src="/order-5.jpg" alt="cake" />
                     <img src="/order-6.jpg" alt="cake" />
                     <img src="/order-7.jpg" alt="cake" />
                     <img src="/order-9.jpg" alt="cake" />
                     <img src="/order-10.jpg" alt="cake" />
                     <img src="/order-11.jpg" alt="cake" />
                     <img src="/order-12.jpg" alt="cake" />
                     <img src="/order-13.jpg" alt="cake" />
                    
                                
              </div>
          </section>
          
          {/* 3rd section*/}
          <section className="cake">
          <div className="cake-img">
          <h3><u><i>Pasteries</i></u></h3>

                     <img src="/order-14.jpg" alt="cake" />
                     <img src="/order-15.jpg" alt="cake" />
                     <img src="/order-16.jpg" alt="cake" />
                     <img src="/order-17.jpg" alt="cake" />
                     <img src="/order-18.jpg" alt="cake" />
                     <img src="/order-19.jpg" alt="cake" />
                     </div>  
                                
            
          </section>
          


     </main>
  );
}