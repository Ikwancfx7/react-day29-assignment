import AyamGeprek from '../assets/ayam-geprek.jpg';
import NasiGoreng from '../assets/Nasi-goreng.jpg';
import NilaBakar from '../assets/Nila-bakar.jpg';
import MieGoreng from '../assets/Mie-goreng.jpg';
import JusAlpukat from '../assets/jus-alpukat.jpg';
import JusMangga from '../assets/jus-mangga.jpg';
import EsTeler from '../assets/es-teler.jpg';
import EsTeh from '../assets/esteh.png';

function ContentSection() {
  return (
    <section className="w-full bg-amber-50 p-10">
      <div className="container2 grid md:grid-cols-2 text-amber-950 md:gap-10 md:px-10">
        <div className="md:p-8 flex items-center">
          <h1 className="text-sm lg:text-xl text-justify font-extralight">
                Berdiri sejak tahun 2015, Ikwan Resto telah menghadirkan cita rasa autentik kuliner khas 
                daerah dengan masakan berkualitas tinggi dan rasa yang menggugah selera. Tempat yang sempurna 
                untuk menikmati hidangan lezat bersama keluarga tercinta!
          </h1>
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:p-15">
          <div>
            <img className="aspect-square object-cover" src={AyamGeprek} alt="" />
            <img className="aspect-video object-cover" src={NasiGoreng} alt="" />
          </div>
          <div>
            <img className="aspect-video object-cover" src={NilaBakar} alt="" />
            <img className="aspect-square object-cover" src={MieGoreng} alt="" />
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:p-15">
            <div>
                <img className="aspect-square object-cover" src={JusAlpukat} alt=""/>
                <img className="aspect-video object-cover" src={JusMangga} alt=""/>   
            </div>
                <div>
                <img className="aspect-video object-cover" src={EsTeler} alt=""/>
                <img className="aspect-square object-cover" src={EsTeh} alt=""/>
                </div>
        </div>
        {/* Small screen */}
        <div className="grid grid-cols-2 rounded-lg p-15 md:hidden">
            <div>
                <img className="aspect-square object-cover" src={JusAlpukat} alt=""/>
                <img className="aspect-video object-cover" src={NasiGoreng} alt=""/>
                <img className="aspect-square object-cover" src={AyamGeprek} alt=""/> 
            </div>
            <div>
                <img className="aspect-video object-cover" src={NilaBakar} alt=""/>
                <img className="aspect-square object-cover" src={MieGoreng} alt=""/>
                <img className="aspect-square object-cover" src={EsTeh} alt=""/>   
            </div>
        </div>
        
        <div className="p-8 flex justify-center items-center">
          <h1 className="text-sm lg:text-xl text-justify font-extralight">
                Nikmati hidangan khas dengan cita rasa autentik, disajikan dengan kelezatan yang 
                memanjakan lidah. Kami menyediakan beragam masakan dan minuman istimewa untuk Anda dan keluarga. 
                Melalui website kami, Anda dapat dengan mudah melakukan reservasi meja atau memesan makanan 
                secara online—praktis dan tanpa ribet! Selamat menikmati pengalaman kuliner terbaik bersama kami!
          </h1>
        </div>
      </div>
    </section>
  )
}

export default ContentSection;
