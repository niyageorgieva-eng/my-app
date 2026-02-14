 import "./styles/start.css";
 import "./styles/about.css";
 import "./styles/contact.css";
 import "./styles/gallery.css";
import "./styles/index.css";

import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Za purvonachalnata migracia na html triabva da si promenia class na className, 
// zatvariashti tagove na img, korekcia na link + import + target="_blank" (prenasochvane
// kum nov tab)+  rel="noopener noreferrer"!!!!!! Proveri si<></>, 
function Start() {
  return (
    <>
<main className="startPage">
    <section className="content">
        <h1 className="title">
            <span className="sea">Sea</span> <span className="rest">is where I wanna be</span>
        </h1>
        <section className="button">
            <Link to="/about">
                <button className="arrow-button">
                  <i className="fa-solid fa-angles-right"></i>
                </button>
            </Link>
            
        </section>
    </section>
</main>
</>
  );
}

function About() {
  return (
    <>
    <header>
        <section>
            <h1 className="headerTitle">wild, ocean child</h1>
        </section>
            <nav>  
                <ul>
                    <li id="one"><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    </header>
 
    <section className="buttonLeft">
        <Link to="/"><button className="arrow-button"><i className="fa-solid fa-angles-left"></i></button></Link>
    </section>
    <main>
                   
        <section className="seaPoem">  
            <article className="content">
                <h2 className="title">I Go Down to The Shore</h2>
                <p className="description">
                    I go down to the shore in the morning and depending on the hour 
                    the waves are rolling in or moving out, and I say, oh, I am miserable, 
                    what shall— what should I do? And the sea says in its lovely voice:
                    Excuse me, I have work to do.  </p>
                 <a href="https://jadinelydia.com/poetry-about-the-sea/" target="_blank" rel="noopener noreferrer">
                    <button className = "linkPoem">More info...</button>
                </a>
            </article>
        
            <article className="content">
                <h2 className="title">Music of the Seas </h2>
                <p className="description">
                    Music of the seven seas –
                    in soft susurrus of silk and
                    liquid swells
                    they swirl like augural oracles
                    that bloom in cornet symphonies
                    and trance in the hankerings
                    of queen conch shells
                    to unfurl as coral rainbows
                    in sea nymphs’ sonata strums
                    of seaglass and pearly soul song.   </p>
                <a href="https://jadinelydia.com/poetry-about-the-sea/" target="_blank" rel="noopener noreferrer">
                    <button className = "linkPoem">More info...</button>
                </a>
            </article>
                                                
    <i className="fa-solid fa-globe globe-icon"></i>
        </section>
        
                                       
        <section className="placeContainer">
            <section className ="favPlace">
                 <h2 className="placeTitle">My favourite places</h2>
            </section>
            <section className="places">  
                <section className="place">
                    <img src="https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Maldives" /> 
                    <p className="placeName">Maldives</p>
         
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1516534726759-c5ae5aea7965?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Seychelles" /> 
                    <p className="placeName">Seychelles</p>
                    
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Bora Bora" /> 
                    <p className="placeName">Bora Bora</p>
  
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Greece" /> 
                    <p className="placeName">Greece</p>
 
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Italy" /> 
                    <p className="placeName">Italy</p>
    
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Philippines" /> 
                    <p className="placeName">Philippines</p>
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1561632669-7f55f7975606?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Spain" /> 
                    <p className="placeName">Spain</p>
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Hawaii" /> 
                    <p className="placeName">Hawaii</p> 
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1516660443713-dff5202a3230?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Brazil" /> 
                    <p className="placeName">Brazil</p>
                </section>
                <section className="place">
                    <img src="https://images.unsplash.com/photo-1534008897995-27a23e859048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Thailand" /> 
                    <p className="placeName">Thailand</p>
                </section>
            </section>
        </section>


    </main>
                                         
    <footer>
        <section>
            <p>
                (+359) 700 12 345 | 
                <a href="mailto:249sz@unibit.bg">&nbsp;249sz@unibit.bg</a>
                Monday - Friday: 09:00 - 18:00 | 
                28 Some Place Str. | 
                &copy; Fav Places    
            </p>
        </section>
    </footer>
</>
  );
}


function Gallery() {
  return (
    <>
      <header>
        <section>
          <h1 className="headerTitle">wild, ocean child</h1>
        </section>

        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li id="two"><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="buttonLeft">
        <Link to="/">
          <button className="arrow-button">
            <i className="fa-solid fa-angles-left"></i>
          </button>
        </Link>
      </section>

      <main className="gallery-container">
        <section className="gallery">
          <figure className="galleryitem1">
            <a
              href="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2070&auto=format&fit=crop"
                alt="A serene beach with gentle waves and a sunset in the background."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem2">
            <a
              href="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                alt="A tropical paradise with turquoise water and palm trees on a white sandy beach."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem3">
            <a
              href="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2070&auto=format&fit=crop"
                alt="A wooden pier extending into the calm ocean under a clear blue sky."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem4">
            <a
              href="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=2048&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=2048&auto=format&fit=crop"
                alt="Majestic cliffs overlooking the deep blue ocean with waves crashing against the rocks."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem5">
            <a
              href="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop"
                alt="A golden sunset casting warm colors over the ocean and sandy shore."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem6">
            <iframe
              src="https://www.youtube.com/embed/DGIXT7ce3vQ"
              className="galleryimg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="YouTube video"
            />
          </figure>

          <figure className="galleryitem7">
            <a
              href="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2070&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2070&auto=format&fit=crop"
                alt="A wooden path leading to a quiet beach with a cloudy sky overhead."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem8">
            <a
              href="https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=1600&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1517384084767-6bc118943770?q=80&w=1600&auto=format&fit=crop"
                alt="Seagulls soaring above the ocean waves with a clear blue sky."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem9">
            <a
              href="https://images.unsplash.com/photo-1506252374453-ef5237291d83?q=80&w=1974&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1506252374453-ef5237291d83?q=80&w=1974&auto=format&fit=crop"
                alt="A peaceful sunrise over the calm ocean, reflecting golden hues on the water."
                className="galleryimg"
              />
            </a>
          </figure>

 
          <figure className="galleryitem10">
            <a
              href="https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1972&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=1972&auto=format&fit=crop"
                alt="Powerful deep ocean waves rolling towards the shore under a cloudy sky."
                className="galleryimg"
              />
            </a>
          </figure>

          <figure className="galleryitem11">
            <a
              href="https://images.unsplash.com/photo-1511545922313-ff50d69d1173?q=80&w=2074&auto=format&fit=crop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://images.unsplash.com/photo-1511545922313-ff50d69d1173?q=80&w=2074&auto=format&fit=crop"
                alt="Rolling sand dunes at the beach with a bright blue sky and scattered clouds."
                className="galleryimg"
              />
            </a>
          </figure>
        </section>
      </main>
    </>
  );
}
function Contact() {
  return (
    <>
    <header>
        <section>
            <h1 className="headerTitle">wild, ocean child</h1>
        </section>
            <nav>  
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li id="three"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    </header>
    <section className="buttonLeft">
        <a href="indexStart.html"><button className="arrow-button"><i className="fa-solid fa-angles-left"></i></button></a>
    </section>

    <main>
                                            
            <section className="contact-section">
                <h3>За връзка с нас:</h3>
                <article className="contact-form">
                    <form>
                        <label for="fname"> Име и фамилия:  </label>
                        <input type="text" id="fname" name="firstname" placeholder="Име, Фамилия..." />
                        
                        <label for="lname"> Имейл адрес:  </label>
                        <input type="text" id="lname" name="lastname" placeholder="Имейл адрес..." />
                        
                        <label for="town"> Град:  </label> 
                        <select className="select" name="town">
                            <option> Избери град... </option>
                            <option value="sofia">София</option>
                            <option value="plovdiv">Пловдив</option>
                            <option value="varna">Варна</option>
                            <option value="burgas">Бургас</option>
                        </select>
                        
                        <label for="subject"> Запитване: </label>
                        <input type="text" id="subject" name="subject" placeholder="Задайте Вашите въпроси..." style="height:200px" />
                        <input type="submit" value="Изпращане" />
                    </form>
                </article>
            </section>
                                                  
            <section className="map-section">
                <iframe 
                    width="50%" 
                    height="100%" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.1137972590852!2d23.37056342418657!3d42.67749891722825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85dcebdaabe7%3A0xa5d16f61da10637a!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQv9C-INCx0LjQsdC70LjQvtGC0LXQutC-0LfQvdCw0L3QuNC1INC4INC40L3RhNC-0YDQvNCw0YbQuNC-0L3QvdC4INGC0LXRhdC90L7Qu9C-0LPQuNC4IC0g0KPQvdC40JHQmNCiLTI!5e0!3m2!1sbg!2sbg!4v1726076591126!5m2!1sbg!2sbg" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </section>
  
 
    </main>

    <footer>
        <section> 
            <p>  
  {/* /* pri 249 ne mi se poiaviava interval, reshenieto mi -> {" | "} */ }
                (+359) 700 12 345 | 
                <a href="mailto:249sz@unibit.bg"> {" "} &nbsp;249sz@unibit.bg </a> | 
                Monday - Friday: 09:00 - 18:00 | 
                28 Some Place Str. | 
                &copy; Fav Places    
            </p>
        </section>
    </footer>
</>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;