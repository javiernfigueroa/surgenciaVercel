import Carousel from 'react-bootstrap/Carousel'
import { useEffect } from 'react'
import useFindAllBanners from '../../../../hooks/useFindAllBanners'
import './HeroBannerSection.css'

const HeroBannerSection = () => {
  const { banners, isLoading } = useFindAllBanners()

  useEffect(() => {}, [banners])

  return (
    <Carousel className="w-75 m-auto mt-5">
      {isLoading
        ? 'Cargando...'
        : banners?.map(banner => (
            <Carousel.Item key={banner.id}>
              <div className="d-flex">
                <div className="carousel-image-container">
                  <img
                    src={banner.imageUrl}
                    alt={banner.title}
                    onError={() => console.error(`Error al cargar la imagen para el banner con ID ${banner.id}`)}
                  />
                </div>
                <div>
                  <Carousel.Caption className="h-50 mb-5 caption-container">
                    <h3 className="text-shadow text-uppercase">{banner.title}</h3>
                    <p className="text-shadow mt-4">{banner.info}</p>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          ))}
    </Carousel>
  )
}

export default HeroBannerSection
