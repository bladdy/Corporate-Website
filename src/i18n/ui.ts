import type { notFound } from "astro:i18n";

export const ui = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      testimonials: "Testimonials",
      contact_us: "Contact Us"
    },
    hero: {
      title: "Professional Cleaning for Homes and Offices",
      subtitle: "Reliable cleaning services for houses, apartments and offices.",
      button: "Request Service",
      view_services: "View Services"
    },
    services: {
      title: "Our Services",
      description: "We offer a variety of cleaning services to meet your needs.",
      card_services: [
        {
          title: "Residential Cleaning",
          description: "Comprehensive cleaning to keep your home spotless."
        },
        {
          title: "Office Cleaning",
          description: "Maintaining clean and organized workspaces for your business."
        },
        {
          title: "Deep Cleaning",
          description: "Thorough cleaning to eliminate dirt and germs in all areas."
        }
      ]
    },
    aboutus: {
      title: "About Us",
      description: "We are a professional cleaning company dedicated to providing top-quality services for homes and offices. With years of experience, our team is committed to ensuring your space is clean, healthy, and welcoming.",
      team: "Our team is trained to ensure high-quality results.",
      img: "Image of our cleaning team"
    },
    testimonials: {
      title: "Testimonials",
      description: "What our clients say about our cleaning services.",
      testimonials: [
        {
          name: "John Doe",
          feedback: "Excellent service, my home has never been this clean. I highly recommend this company!"
        },
        {
          name: "Jane Smith",
          feedback: "Professional and reliable. My office is always spotless thanks to them."
        },
        {
          name: "Robert Johnson",
          feedback: "The deep cleaning made a huge difference in my home. Very satisfied with the results!"
        }
      ]
    },
    contact_us: {
      title: "Contact Us",
      description: "Do you have any questions or want to request our services? We're here to help! Contact us through the form below or by phone.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        button: "Send Message"
      }
    },
    footer: {
      company_name: "XYZ Cleaning Company",
      contact: "Contact",
      description: "We provide professional cleaning services for homes and offices. Contact us today for a free quote!",
      address: "123 Main Street, City, Country",
      phone: "+1 (555) 123-4567",
      email: "info@xyzcleaningcompany.com",
      link: "Links",  
      links: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        testimonials: "Testimonials"
      },
      service: "Services",
      services: {
        residential: "Residential Cleaning",
        office: "Office Cleaning",
        commercial: "Commercial Cleaning",
        industrial: "Industrial Cleaning",
        specialized: "Specialized Cleaning",
        deep: "Deep Cleaning"
      },
      rights: "All rights reserved."
    },
    notFoundPage: {
      title: "Page Not Found",
      description: "Sorry, the page you are looking for does not exist.",
      button: "Go Back Home"
    },     

  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      testimonials: "Testimonios",
      contact_us: "Contáctanos"
    },

    hero: {
      title: "Limpieza Profesional para Hogares y Oficinas",
      subtitle: "Servicios confiables de limpieza para casas, apartamentos y oficinas.",
      button: "Solicitar Servicio",
      view_services: "Ver Servicios"
    },
    services: {
      title: "Nuestros Servicios",
      description: "Ofrecemos una variedad de servicios de limpieza para satisfacer tus necesidades.",
      card_services: [
        {
          title: "Limpieza Residencial",
          description: "Limpieza completa para tu hogar, incluyendo habitaciones, cocina y baños."
        },
        {
          title: "Limpieza de Oficinas",
          description: "Mantenimiento de espacios de trabajo limpios y organizados para tu empresa."
        },
        {
          title: "Limpieza Profunda",
          description: "Limpieza exhaustiva para eliminar suciedad y gérmenes en todas las áreas."
        }
      ]
    },
    aboutus: {
      title: "Sobre Nosotros",
      description: "Somos una empresa de limpieza profesional dedicada a brindar servicios de alta calidad para hogares y oficinas. Con años de experiencia, nuestro equipo se compromete a garantizar que tu espacio esté limpio, saludable y acogedor.",
      team: "Nuestro equipo está capacitado para garantizar resultados de alta calidad.",
      img: "Imagen de nuestro equipo de limpieza"
    },
    testimonials: {
      title: "Testimonios",
      description: "Lo que nuestros clientes dicen sobre nuestros servicios de limpieza.",
      testimonials: [
        {
          name: "María López",
          feedback: "Excelente servicio, mi casa nunca había estado tan limpia. ¡Recomiendo esta empresa!"
        },
        {
          name: "Carlos García",
          feedback: "Profesionales y confiables. Mi oficina siempre está impecable gracias a ellos."
        },
        {
          name: "Ana Martínez",
          feedback: "La limpieza profunda hizo una gran diferencia en mi hogar. ¡Muy satisfecho con el resultado!"
        }
      ]
    },
    contact_us: {
      title: "Contáctanos",
      description: "¿Tienes preguntas o quieres solicitar nuestros servicios? ¡Estamos aquí para ayudarte! Contáctanos a través del siguiente formulario o por teléfono.",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        message: "Mensaje",
        button: "Enviar Mensaje"
      }
    },
    footer: {
      company_name: "Empresa de Limpieza XYZ",
      contact: "Contactos",
      description: "Brindamos servicios de limpieza profesional para hogares y oficinas. ¡Contáctanos hoy para una cotización gratuita!",
      address: "123 Calle Principal, Ciudad, País",
      phone: "+1 (555) 123-4567",
      email: "info@empresadelimpiezaxyz.com",
      link: "Enlaces",
      links: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
        testimonials: "Testimonios"
      },
      service: "Servicios",
      services: {
        residential: "Limpieza Residencial",
        commercial: "Limpieza Comercial",
        office: "Limpieza de Oficinas",
        industrial: "Limpieza Industrial",
        specialized: "Limpieza Especializada",
        deep: "Limpieza Profunda"
      },

      rights: "Todos los derechos reservados."
    },
    notFoundPage: {
      title: "Página No Encontrada",
      description: "Lo sentimos, la página que buscas no existe.",
      button: "Volver al Inicio"
    },
  },
};