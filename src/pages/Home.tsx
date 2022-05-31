import Header from '../components/Header';
import toom from '../images/nook.png'
import nabo from '../images/nabo.png'
import mininook from '../images/mininook.png'
import dog from '../images/dog.png'
import HomeCard from '../components/HomeCard';
import Footer from '../components/Footer';
import New from '../components/New';
import Publication from '../components/Publication';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const Home = () => {

  const { user, checkUser } = useAuth()

  useEffect(() => {
    checkUser()
  }, [])

  return (
    <div>
      <Header />
      <div>
        <section className='py-14 bg-green-200 lg:py-24'>
          <div className='container text-center lg:text-left'>
            <div className='grid lg:grid-cols-2 mb-12 lg:mb-16'>
              <div className='col-span-1'>
                <h2 className='text-3xl lg:text-4xl text-primary-dark-blue pb-5'>La mejor comunidad de Animal Crossing</h2>
                <p className='text-neutral-grayish-blue  text-lg lg:text-base leading-5'>Conoce a otros jugadores, comercia con nabos, particia en eventos, chatea</p>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-4'>
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
              <h2 className='mt-2 text-center text-3xl text-primary-dark-blue mb-5'>Ultimas Publicaciones</h2>
              <div className='grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-4'>
                <article>
                  <Publication username='alex' timestamp='16:00' topic='Nabos' content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                </article>
                <article>
                  <Publication username='laura' timestamp='17:00' topic='Concurso' content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                </article>
                <article>
                  <Publication username='eduardo' timestamp='18:00' topic='Evento' content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '/>
                </article>
                <article>
                  <Publication username='javier' timestamp='19:00' topic='Presentaciones' content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'/>
                </article>
              </div>
            </div>
          </section>
          <section>
            <h2 className='mt-2 text-center text-3xl text-primary-dark-blue mb-5'>Venta de Nabos</h2>
            <div className='container no-scrollbar flex gap-2 lg:justify-center overflow-x-auto lg:gap-9'>
              <New island='Huawai' price='400'/>
              <New island='Peguaho' price='300'/>
              <New island='Patatas' price='200'/>
            </div>
          </section>
          <Footer />
      </div>
    </div>
  )
}

export default Home