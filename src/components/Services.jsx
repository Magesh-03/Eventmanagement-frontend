import React from 'react';

const Services = () => {
  const services =[
    {
      id:1,
      url:"anniversary.jpg",
      title:"Anniversary Planning",
    },
    {
      id:2,
      url:"pre-wedding-festivities-01.webp",
      title:"Pre Wedding Planning",
    },
    {
      id:3,
      url:"post-wedding.webp",
      title:"Post Wedding Planning",
    },
    {
      id:4,
      url:"wedding-reception.webp",
      title:"Wedding Reception",
    },
    {
      id:5,
      url:"catering.webp",
      title:"Catering service ",
    },
    {
      id:6,
      url:"th.jpeg",
      title:"Photography and Videography ",
    },
    
  ];
  return(
   <>
  <div className="services container">
    <h2>OUR SERVICES</h2>
    <div className="banner">
      {services.map((element)=>{
        return(
          <div className="item" key={element.id}>
            <h3>{element.title}</h3>
            <img src={element.url} alt={element.title} />
          </div>
        );
      })}
    </div>
  </div>
  
  </>
  ); 
};

export default Services;