import Header from '../components/Header';
import toom from '../images/nook.png'
import nabo from '../images/nabo.png'
import mininook from '../images/mininook.png'
import dog from '../images/dog.png'
import HomeCard from '../components/HomeCard';
import Footer from '../components/Footer';
import New from '../components/New';
import Publication from '../components/Publication';

const Home = () => {
  return (
    <div>
      <Header />
      <div className=''>
        <section className='py-14 bg-green-200 lg:py-24'>
          <div className='container text-center lg:text-left'>
            <div className='grid lg:grid-cols-2 mb-12 lg:mb-16'>
              <div className='col-span-1'>
                <h2 className='text-3xl lg:text-4xl text-primary-dark-blue pb-5'>La mejor comunidad de Animal Crossing</h2>
                <p className='text-neutral-grayish-blue  text-sm lg:text-base leading-5'>Conoce a otros jugadores, comercia con nabos, particia en eventos, chatea</p>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4'>
              <div className='justify-center'>
                <div className='flex justify-center lg:justify-start'>
                  <HomeCard 
                    img={toom} 
                    title="Conoce otros jugadores" 
                    description="Ayuda a otras personas, chatea con ellas, visita sus islas"/>
                </div>
              </div>

              <div className='justify-center'>
                <div className='flex justify-center lg:justify-start'>
                  <HomeCard 
                    img={nabo} 
                    title="Vende nabos al mejor precio" 
                    description="Puedes anunciar el precio de tus nabos y ver los precios mas altos del dia, inscribirte en la lista y vender tus nabos"/>
                </div>
              </div>
             
              <div className='justify-center'>
                <div className='flex justify-center lg:justify-start'>
                  <HomeCard 
                    img={mininook}
                    title="Participa en eventos" 
                    description="Crea eventos o participa en eventos creados por jugadores para disfrutar un buen rato"/>
                </div>
              </div>

              <div className='justify-center'>
                <div className='flex justify-center lg:justify-start'>
                <HomeCard 
                  img={dog} 
                  title="Concursos para la comunidad" 
                  description="Gana bayas o objetos participando en concursos de diferentes tematicas, una gran oportunidad para demostrar lo que vales"/>
                </div>
              </div>
              
              
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='text-center text-3xl text-primary-dark-blue mb-5'>Ultimas Publicaciones</h2>
            <div className='grid grid-cols-1 gap-9 lg:gap-6 lg:grid-cols-4'>
              <article>
                <Publication/>
              </article>
              <article>
                <Publication />
              </article>
              <article>
                <Publication />
              </article>
              <article>
                <Publication />
              </article>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-center text-3xl text-primary-dark-blue mb-5'>Venta de Nabos</h2>
          <div className='container no-scrollbar flex lg:justify-center overflow-x-auto lg:gap-9'>
            <New />
            <New />
            <New />
          </div>
        </section>
        <Footer />  
      </div>
    </div>
  )
}

export default Home