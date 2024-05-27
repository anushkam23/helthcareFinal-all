// import React from 'react';
// import {Image} from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// // import firstCatImage from './Images/firssttCat.png';
// export default function Section1() {
  
//   return (
//     <>
//       {/* <Container className='upper' style={{backgroundColor:'black', height:'70px',width:'100vh'}}>
//       </Container> */}
//       <div className="ff2"></div>
//       <div className="patti"></div>
//      <section id="hello">
//         <div className="first" id="Section1" ref={Section1}>
//           <Image src={firstCatImage} alt="" />
//           <h1>
//             WE PROVIDE BEST <br /> HEALTHCARE 
//             {/* <div className="ycolor">LEARN MORE...</div> */}
//           </h1> 
//           {/* <p>WE PROVIDE BEST HEALTHCARE</p> */}
//            {/* <p> <Image src={logo} alt="" /></p>  */}
//            {/* <p className="book">BOOK YOUR <br />TABLE<span id="Now"> NOW</span> </p> */}
//         </div>
//       </section> 
//     </>
//   )
// }


// import React from 'react';
// import { Image, Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';
// // import './Section1.css'; // Import your custom CSS file if needed

// export default function Section1() {
  
//   return (
//     <>
//       <Container fluid className='upper'>
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first" id="Section1" ref={Section1}>
//           <Image src={firstCatImage} alt="" fluid />
//           <h1 className="text-center">
//             WE PROVIDE BEST <br /> HEALTHCARE 
//             {/* <div className="ycolor">LEARN MORE...</div> */}
//           </h1> 
//           {/* <p>WE PROVIDE BEST HEALTHCARE</p> */}
//            {/* <p> <Image src={logo} alt="" /></p>  */}
//            {/* <p className="book">BOOK YOUR <br />TABLE<span id="Now"> NOW</span> </p> */}
//         </div>
//       </section> 
//     </>
//   );
// }






// import React from 'react';
// import { Image, Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';
// // import './Section1.css'; // Import your custom CSS file if needed

// export default function Section1() {
  
//   return (
//     <>
//       <Container fluid className='upper'>
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first" id="Section1" ref={Section1}>
//           <Image src={firstCatImage} alt="" fluid />
//           <h1 className="text-center" style={{ fontSize: '40px', marginLeft: '50px' ,marginTop:'-28%'}}>
//             <span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#fff' }}>WE PROVIDE BEST</span> <br /> 
//             <span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#fff', fontSize: '40px' }}>HEALTHCARE</span>
//             {/* <div className="ycolor">LEARN MORE...</div> */}
//           </h1> 
//           {/* <p>WE PROVIDE BEST HEALTHCARE</p> */}
//            {/* <p> <Image src={logo} alt="" /></p>  */}
//            {/* <p className="book">BOOK YOUR <br />TABLE<span id="Now"> NOW</span> </p> */}
//         </div>
//       </section> 
//     </>
//   );
// }








// import React from 'react';
// import { Container, Carousel } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   return (
//     <>
//       <Container fluid className='upper'>
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#000' }}>
//             <Carousel style={{ background: 'transparent', border: 'none' }}>
//               {slides.map(slide => (
//                 <Carousel.Item key={slide.id}>
//                   <div className="text-center">
//                     <h1 style={{ fontWeight: 'bold' }}>{slide.text}</h1>
//                     <p>{slide.additionalText}</p>
//                   </div>
//                 </Carousel.Item>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }







// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: -15,
//               left: -300,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div className="text-center">
//                     <h1 style={{ fontWeight: 'bold' }}>{slide.text}</h1>
//                     <p>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ width: '100%' }}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div style={{ padding: '20px', maxWidth: '600px',marginLeft:'150px'}}>
//                     <h1 style={{ fontWeight: 'bold'}}>{slide.text}</h1>
//                     <p>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ width: '100%' }}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '150px', fontSize: '20px' }}>
//                     <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>{slide.text}</h1>
//                     <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',

//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ width: '100%',marginTop:'1px' }}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '150px', fontSize: '20px',marginTop:'250px' }}>
//                     {/* <h1 style={{ fontWeight: 'bold', fontSize: '20px',marginTop:'10px' }}>{slide.text}</h1> */}
//                     <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',

//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null} style={{ width: '100%', marginTop: '1px' }}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '150px', fontSize: '20px', marginTop: '250px' }}>
//                     <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// =========================



// import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-inner">
//                 {slides.map((slide, slideIndex) => (
//                   <div key={slide.id} className={`carousel-item ${index === slideIndex ? 'active' : ''}`}>
//                     <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '150px', fontSize: '20px', marginTop: '250px' }}>
//                       <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}>
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}>
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-inner">
//                 {slides.map((slide, slideIndex) => (
//                   <div key={slide.id} className={`carousel-item ${index === slideIndex ? 'active' : ''}`}>
//                     <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '150px', fontSize: '20px', marginTop: '50px'}}>
//                       <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="prev"
//                 onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   left: '0',
//                   zIndex: 1030, // Ensures the buttons are above other elements
//                 }}
//               >
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="next"
//                 onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   right: '0',
//                   zIndex: 1030, // Ensures the buttons are above other elements
//                 }}
//               >
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-inner">
//                 {slides.map((slide, slideIndex) => (
//                   <div key={slide.id} className={`carousel-item ${index === slideIndex ? 'active' : ''}`}>
//                     <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '50px', marginTop: '50px', fontSize: '20px' }}>
//                       <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="prev"
//                 onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   left: '0',
//                   zIndex: 1030,
//                 }}
//               >
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="next"
//                 onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   right: '0',
//                   zIndex: 1030,
//                 }}
//               >
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               color: '#000',
//               textAlign: 'left',
//             }}
//           >
//             <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" style={{ width: '100%' }}>
//               <div className="carousel-inner">
//                 {slides.map((slide, slideIndex) => (
//                   <div key={slide.id} className={`carousel-item ${index === slideIndex ? 'active' : ''}`}>
//                     <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '160px', marginTop: '50px', fontSize: '30px' }}>
//                       <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="prev"
//                 onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   left: '0',
//                   zIndex: 1030,
//                 }}
//               >
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExample"
//                 data-bs-slide="next"
//                 onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
//                 style={{
//                   position: 'fixed',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   right: '0',
//                   zIndex: 1030,
//                 }}
//               >
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { Container, Carousel, CarouselItem } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: -15,
//               left: -300,
//               width: '100%',
//               height: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#000',
//             }}
//           >
//             <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
//               {slides.map((slide) => (
//                 <CarouselItem key={slide.id}>
//                   <div className="text-center">
//                     <h1 style={{ fontWeight: 'bold' }}>{slide.text}</h1>
//                     <p>{slide.additionalText}</p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </Carousel>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Container, Carousel, CarouselItem } from 'react-bootstrap';
import firstCatImage from './Images/hero-bg.png';

const slides = [
  { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'WE PROVIDE BEST HEALTHCARE' },
  { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'WE PROVIDE BEST FACILITIES' },
  { id: 3, text: 'WE ARE BEST', additionalText: 'WE ARE BEST' },
];

export default function Section1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container fluid className="upper">
        {/* Navbar content */}
      </Container>
      <div className="ff2"></div>
      <div className="patti"></div>
      <section id="hello">
        <div className="first lato-regular" id="Section1" style={{ position: 'relative'}}>
          <img src={firstCatImage} className="d-block w-100" alt="Background" />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#000',
            }}
          >
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect} 
              controls={false} 
              indicators={false} 
              style={{ width: '100%', zIndex: 1 }}
            >
              {slides.map((slide) => (
                <CarouselItem key={slide.id}>
                  <div style={{ padding: '20px', maxWidth: '600px', marginLeft: '160px', marginTop: '50px', fontSize: '30px' }}>
                    <h1 style={{ fontWeight: 'bold' }}>{slide.text}</h1>
                    <p style={{ fontSize: '20px' }}>{slide.additionalText}</p>
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
              style={{
                position: 'absolute',
                top: '10%',
                left: '20px',
                zIndex: 2,
                background: 'none',
                border: 'none',
                color: '#000',
                fontSize: '30px',
                cursor: 'pointer',
              }}
            >
              &#10094;
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}
              style={{
                position: 'absolute',
                top: '10%',
                right: '20px',
                zIndex: 2,
                background: 'none',
                border: 'none',
                color: '#000',
                fontSize: '30px',
                cursor: 'pointer',
              }}
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}





































































// import React, { useState, useEffect } from 'react';
// import { Container, Carousel } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               color: '#000',
//               textAlign: 'left',
//               zIndex: 1,
//             }}
//           >
//             <p style={{ fontSize: '20px' }}>{slides[index].additionalText}</p>
//           </div>
//           <button className="carousel-control-prev" type="button" onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}>
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" onClick={() => setIndex(index === slides.length - 1 ? 0 : index + 1)}>
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }




















// import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'WE PROVIDE BEST HEALTHCARE', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 2, text: 'WE PROVIDE BEST FACILITIES', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//   { id: 3, text: 'WE ARE BEST', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
// ];

// export default function Section1() {
//   const [index, setIndex] = useState(0);

//   const handlePrev = () => {
//     setIndex(index === 0 ? slides.length - 1 : index - 1);
//   };

//   const handleNext = () => {
//     setIndex(index === slides.length - 1 ? 0 : index + 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
//     }, 5500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//       <Container fluid className="upper">
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <div className="first lato-regular" id="Section1" style={{ position: 'relative' }}>
//           <img src={firstCatImage} className="d-block w-100" alt="Background" />
//           <div
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               color: '#000',
//               textAlign: 'left',
//               zIndex: 1,
//             }}
//           >
//             <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>{slides[index].text}</h1>
//             <p style={{ fontSize: '20px' }}>{slides[index].additionalText}</p>
//           </div>
//           <button className="carousel-control-prev" type="button" onClick={handlePrev}>
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" onClick={handleNext}>
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }


// import React from 'react';
// import { Container, Carousel, Image } from 'react-bootstrap';
// import firstCatImage from './Images/hero-bg.png';

// const slides = [
//   { id: 1, text: 'First slide text' },
//   { id: 2, text: 'Second slide text' },
//   { id: 3, text: 'Third slide text' },
// ];

// export default function Section1() {
//   return (
//     <>
//       <Container fluid className='upper'>
//         {/* Navbar content */}
//       </Container>
//       <div className="ff2"></div>
//       <div className="patti"></div>
//       <section id="hello">
//         <Image src={firstCatImage} alt="" fluid /> {/* Image remains fixed */}
//         <Carousel>
//           {slides.map(slide => (
//             <Carousel.Item key={slide.id}>
//               <Carousel.Caption>
//                 <h1 className="text-center">{slide.text}</h1> {/* Only text changes */}
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </section> 
//     </>
//   );
// }







// import React from 'react';
// import { Image } from 'react-bootstrap';
// import firstCatImage from './Images/firstbelow.png';

// export default function Section1() {
//   return (
//     <>


//       {/* Add padding to the content below the fixed navbar to prevent it from being covered by the navbar */}
//       <div className="content" style={{ paddingTop: '70px' }}>
//         <div className="ff2"></div>
//         <div className="patti"></div>
//         <section id="hello">
//           <div className="first" id="Section1">
//             <Image src={firstCatImage} alt="" />
//             <h1>
//               START YOUR MEAL WITH <br /> OUR EXCLUSIVE MENU
//               <div className="ycolor">LEARN MORE...</div>
//             </h1>
//             <p className="book">
//               BOOK YOUR <br />TABLE<span id="Now"> NOW</span>
//             </p>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
