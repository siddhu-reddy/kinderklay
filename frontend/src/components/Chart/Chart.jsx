import React, { useState } from 'react';
import './Chart.css';

const Chart = () => {
  const [activeItem, setActiveItem] = useState(null);

  const offerings = [
    { 
      id: 1, 
      title: "Smart Classes", 
      items: ["Speak-O-Kit", "Virtual Reality"],
      icon: "📱"
    },
    { 
      id: 2, 
      title: "Robotime", 
      items: ["Concept Noons", "Our USPs", "SMOT Curriculum"],
      icon: "🤖" 
    },
    { 
      id: 3, 
      title: "Montessori Toys", 
      items: ["Motor Skills", "360° Support App"],
      icon: "🧩"
    },
    {
      id: 4,
      title: "Speak-O-Kit",
      items: ["Communication Skills", "Interactive Learning"],
      icon: "🎤"
    },
    {
      id: 5,
      title: "Virtual Reality",
      items: ["Immersive Learning", "3D Experiences"],
      icon: "👓"
    },
    {
      id: 6,
      title: "Concept Noons",
      items: ["Thematic Learning", "Interactive Rooms"],
      icon: "🌞"
    },
    {
      id: 7,
      title: "SMOT Curriculum",
      items: ["Holistic Development", "Skill Building"],
      icon: "📝"
    },
    {
      id: 8,
      title: "360° Support App",
      items: ["Parent Connect", "Progress Tracking"],
      icon: "🔄"
    }
  ];

  return (
    <div className="chart-container">
      <div className="content-section">
        <h1>Unique Offerings at Our Kids Play School</h1>
        <p>At Kinderklay <strong>preschool</strong>, we've developed a cutting-edge early education program that fully complies with both the NEP 2020 framework and NCF-FS 2022 standards. What sets us apart is our innovative 7-tier support network that extends beyond students to include parents, educators, and partner institutions. These distinctive qualities establish us as both a leading local <strong>children's learning center</strong> and one of India's most exceptional early childhood education providers, dedicated to nurturing all aspects of your child's growth. Among our standout features that contribute to this reputation are our specialized Speak-O-Kit program, technology-enhanced Smart Classes, and Robotime curriculum at our <strong>early learning center</strong>.</p>

        
      </div>

      <div className="interactive-section">
        <div className="interactive-circle">
          {offerings.map((item, index) => (
            <div 
              key={item.id}
              className={`interactive-item ${activeItem?.id === item.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
              style={{
                transform: `rotate(${index * 45}deg) translate(180px) rotate(-${index * 45}deg)`,
                zIndex: activeItem?.id === item.id ? 2 : 1
              }}
            >
              <div className="icon-container">
                <span className="item-icon">{item.icon}</span>
                <span className="icon-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="info-display">
          {activeItem ? (
            <div className="item-info">
              <h3>{activeItem.title}</h3>
              <ul>
                {activeItem.items.map((item, index) => (
                  <li key={index}><strong>{item}</strong></li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="default-info">
              <h2>Our Offerings</h2>
              <p>Hover over any icon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chart;