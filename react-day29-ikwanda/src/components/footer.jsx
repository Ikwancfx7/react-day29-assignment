function Footer() {
    return (
      <footer className="w-full bg-black p-10 text-amber-100">
        <div className="flex flex-col items-center justify-center">
            <div className="container2 flex flex-col items-center lg:grid lg:grid-cols-3 lg:justify-center lg:items-start">
            <div className="flex flex-col items-center py-5 lg:hidden ">
                <h1>NEWSLETTER</h1>
                <label for="newsletter" className="opacity-70">Dapatkan informasi dan promo terbaru dari kami.</label>
                <form className="flex flex-col justify-center items-center opacity-90">
                    <input type="email" className="bg-gray-950 h-12 w-90 my-3" placeholder="Masukkan alamat email"/>
                    <label for="subscribe" className="subscribe"><p>Subscribe</p></label>
                    <input type="submit" id="subscribe" className="hidden"/>
                </form>
            </div>
            <div className="flex flex-col items-center py-5">
              <h1>ADDRESS</h1>
              <p className="text-justify opacity-70">Jl. Gatot Subroto, Purwokerto Barat, Banyumas, 11450021 2295 6067 | info@ikwanresto.com</p>
            </div>
            <div className="flex flex-col items-center py-5">
              <h1>OPEN HOURS</h1>
              <div className="grid grid-cols-2 lg:hidden opacity-70">
                <p>Setiap Hari</p>
                <p>07:00 - 20:00</p>
              </div>
              <div className="hidden lg:grid lg:grid-cols-2 opacity-70">
                        <div>
                            <p>Senin</p>
                            <p>Selasa</p>
                            <p>Rabu</p>
                            <p>Kamis</p>
                            <p>Jumat</p>
                            <p>Sabtu</p>
                            <p>Minggu</p>
                        </div>
                        <div>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                            <p>07:00 - 20:00</p>
                        </div>
                    </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:py-5 lg:justify-center">
                    <h1>NEWSLETTER</h1>
                    <label for="newsletter" className="opacity-70">Dapatkan informasi dan promo terbaru dari kami.</label>
                    <form className="flex flex-col justify-center items-center opacity-90">
                        <input type="email" className="bg-gray-950 h-12 w-90 my-3" placeholder="Masukkan alamat email"/>
                        <label for="subscribe" className="subscribe"><p>Subscribe</p></label>
                        <input type="submit" id="subscribe" className="hidden"/>
                    </form>
            </div>
          </div>
          <div>
            <h1 className="opacity-70">©2025 <b>Ikwan Resto</b> - All rights reserved</h1>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;
  