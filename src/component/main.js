import React, {Component} from 'react';
import '../App.css';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='App'>
                <main>
                   <section className='title-home'>
                     <div className="main-title">
                       <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3" className="logo" alt="logo"/>
                       <h1 class="h1-title"> Making the healthcare experience more human  </h1>
                     </div>
                   </section> 
                   <section className='introduction'>
                       <div className='paragraph1'>
                           <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>  
                       </div>
                       <div className='paragraph2'>
                           <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
                       </div>
                   </section>
                   <section className='boxes'>
                       <div className='box1'>
                           <div className='patient-box'>
                               <h4 className='title'>For patients</h4>
                               <h4 className='description'> Find a doctor, book a visit and solve any health-related doubt</h4>
                           </div>
                           <select name='select' className='country-select'>
                               <option value='1'>Choose Country</option>
                               <option value='2'>Argentina</option>
                               <option value='3'>Autralia</option>
                               <option value='4'>Brazil</option>
                               <option value='5'>Chile</option>
                               <option value='6'>Colombia</option>
                               <option value='7'>Czech</option>
                               <option value='8'>France</option>
                               <option value='9'>Italy</option>
                               <option value='10'>Mexico</option>
                               <option value='11'>Peru</option>
                               <option value='12'>Poland</option>
                               <option value='13'>Spain</option>
                               <option value='14'>Turkey</option>
                               <option value='15'>UK</option>
                           </select>
                           <figure className="comp-img">
                              <img className="image-computer" src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="" />
                           </figure>
                       </div>
                       <div className='box2'>
                             <h4 className="title">For doctors</h4>
                             <h1 className="description">Save time managing visits and cut no-shows by half <br/><br/> </h1>
                             <figure className="comp-img">
                               <img className="image-computer" src="https://www.docplanner.com/img/screen-saas@2x.png" alt="" />
                             </figure>
                       </div>
                   </section>
                   <section className='culture'>
                      <div className="local-culture">
                         <h1>We are a global company <br /> with local culture</h1>
                         <ul className="local-culture-list">
                            <li className="local-culture-items">
                              <i className="fas fa-star-of-life"></i>
                                   ZnanyLekarz
                            </li>
                            <li className="local-culture-items">
                              <i className="fas fa-star-of-life"></i>
                                   Doctoralia
                            </li>
                            <li className="local-culture-items">
                              <i className="fas fa-star-of-life"></i>
                                   MioDottore
                            </li>
                            <li className="local-culture-items">
                              <i className="fas fa-star-of-life"></i>
                                   DoktorTakvimi
                            </li>
                            <li className="local-culture-items">
                              <i className="fas fa-star-of-life"></i>
                                   ZnamyLekar
                            </li>
                         </ul>
                       </div>
                   </section>
                   <section className='health-care'>
                       <div className='plateform'>
                         <div className='plateform-description'>
                                <h1>The world's <br /> biggest healthcare platform</h1>
                                 <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries. </p>
                         </div>  
                          <div className="description-list">
                              <div className="plateform-items">
                              <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/flag.png" alt="" />
                                <h1>Leader in 10&nbsp;countries</h1>
                                <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile </p>
                              </div>
                              </div>
                              <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/patients.png" alt="" />
                                <h1>30 million unique patients</h1>
                                <p>visit us every month</p>
                              </div>
                              
                          </div> 
                             <div className="plateform-items2">
                             <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/visits.png" alt="" />
                                <h1>1 million appointments</h1>
                                <p>booked last month</p>
                              </div>
                              <div className="plateform-item">
                                <img src="https://www.docplanner.com/img/doctors.png" alt="" />
                                <h1>2 million active doctors</h1>
                                <p>trust in our solutions</p>
                              </div>
                        </div>
                      </div> 
                   </section>
                   <section className='improve'>
                   <div className="team-mate">
                    <h1>Improve the lives of millions. Change yours forever</h1>
                    <p>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona,
                        Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search for great talent never stops.</p>
                </div>
                <div>
                    <div className="offices-list">
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/warsaw.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Warsaw</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/barcelona.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Barcelona</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/istanbul.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Istanbul</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                    </div>
                    <div className="offices-list">
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/rome.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Rome</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/mexico-city.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Mexico City</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                        <div className="offices-items">
                            <img src="https://www.docplanner.com/images/curitiba.png" alt="" />
                            <div className="office-place-item">
                                <h4 className="office-place">Curitiba</h4>
                                <span className="see-openings-button">See openings</span>
                            </div>
                        </div>
                    </div>
                </div>
                   </section>

                </main>
            </div>
         );
    }
}
 
export default Main;
