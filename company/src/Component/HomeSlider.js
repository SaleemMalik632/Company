import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image1 from './we-are-hiring-digital-collage.jpg'
import Image2 from './close-up-portrait-beautiful-young-brunette-female-sitting-white-desk-front-computer-home.jpg'
import Image3 from './smiling-young-pretty-student-girl-wearing-back-bag-holding-using-laptop-isolated-orange-wall.jpg'
import Image4 from './we-are-hiring-digital-collage (1).jpg'




const images = [
    { url:  Image1  },
    { url:  Image2  },
    { url:  Image3  },
    { url:  Image4  },
]


const ImageSlider = () => {

    return (
        <>
            <div>
                <Carousel autoPlay={true} infiniteLoop={true} >
                    {
                        images.map((image) => {
                            return (
                                <div>
                                    <div style={{marginTop:'55px'}}>
                                        <img style={{maxHeight:'600px'}} src={image.url} alt='Loading' />
                                    </div>
                                </div>
                            );

                        })
                    }
                </Carousel>
            </div>
        </>

    );
};

export default ImageSlider;
