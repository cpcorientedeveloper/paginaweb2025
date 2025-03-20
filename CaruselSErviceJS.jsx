import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiciosCarrusel = () => {
  return (
    <div id="serviciosCarrusel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <Carousel className="carousel-inner">
        {/* Fila 1: Dos servicios a la vez */}
        <Carousel.Item className="active">
          <div className="row">
            <div className="col-6">
              <a href="#" className="service-card-link">
                <div className="service-card">
                  <div
                    className="service-img"
                    style={{
                      backgroundImage: 'url("img/gestion.webp?height=200&width=300")',
                    }}
                  />
                  <div className="service-content">
                    <h3>Gestión de proyectos</h3>
                    <p>---.</p>
                    <span className="btninfo">Más información</span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6">
              <a href="#" className="service-card-link">
                <div className="service-card">
                  <div
                    className="service-img"
                    style={{
                      backgroundImage: 'url("img/transformacion.webp?height=200&width=300")',
                    }}
                  />
                  <div className="service-content">
                    <h3>Transformación digital</h3>
                    <p>----</p>
                    <span className="btninfo">Más información</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Carousel.Item>

        {/* Fila 2: Dos servicios a la vez */}
        <Carousel.Item>
          <div className="row">
            <div className="col-6">
              <a href="#" className="service-card-link">
                <div className="service-card">
                  <div
                    className="service-img"
                    style={{
                      backgroundImage: 'url("img/desarrollo.webp?height=200&width=300")',
                    }}
                  />
                  <div className="service-content">
                    <h3>Desarrollo de capacidades</h3>
                    <p>----</p>
                    <a href="#" className="btninfo">
                      Más información
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-6">
              <a href="#" className="service-card-link">
                <div className="service-card">
                  <div
                    className="service-img"
                    style={{
                      backgroundImage: 'url("img/innovacion.webp?height=200&width=300")',
                    }}
                  />
                  <div className="service-content">
                    <h3>Innovación y productividad</h3>
                    <p>----</p>
                    <a href="#" className="btninfo">
                      Más información
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ServiciosCarrusel;
