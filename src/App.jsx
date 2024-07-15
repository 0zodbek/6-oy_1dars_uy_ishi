import "./App.css";

import logo from "./assets/images/logo.svg";

function App() {
  return (
    <>
      <header className="header container">
        <nav className="nav1">
          <span className="logo_span">
            <img
              width={28}
              height={28}
              src={logo}
              alt="logo_icon"
            />
            <p>Destinize</p>
          </span>
          <span className="search_span">
            <img
              width={16}
              height={16}
              src="src/assets/images/search-normal.svg"
              alt="logo _icon"
            />
            <input
              type="text"
              id="search"
              placeholder="Cari apapun disini..."
            />
          </span>
          <span className="brauzer_span">
            <img
              width={20}
              height={20}
              src="src/assets/images/earth.svg"
              alt="brauzer_icon"
            />
            <select id="">
              <option value=" Bahasa Indonesia"> Bahasa Indonesia</option>
            </select>
          </span>

          <span className="location_span">
            <a href="https://www.google.com/maps/place/%D0%94%D0%B6%D0%BE%D0%BA%D1%8C%D1%8F%D0%BA%D0%B0%D1%80%D1%82%D0%B0,+Yogyakarta+City,+%D0%94%D0%B6%D0%BE%D0%BA%D1%8C%D1%8F%D0%BA%D0%B0%D1%80%D1%82%D0%B0,+%D0%98%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5%D0%B7%D0%B8%D1%8F/@-7.8032504,110.3748449,13z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5787bd5b6bc5:0x21723fd4d3684f71!8m2!3d-7.8013672!4d110.3647568!16zL20vMGRnNnl4?entry=ttu"><img
              src="src/assets/images/location.svg"
              alt="location_icon"
            /></a>
            <span>
              <p>Lokasi</p>
              <select id="">
                <option value="Indonesia, Yogyakarta">
                  Indonesia, Yogyakarta
                </option>
              </select>
            </span>
          </span>
        </nav>

        <nav className="nav2">
          <ul>
            <li>
              <select id="">
                <option value="Gunung">Gunung</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Pantai">Pantai</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Kuliner">Kuliner</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Outbond">Outbond</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Sejarah">Sejarah</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Edukasi">Edukasi</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Romantis">Romantis</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Alam">Alam</option>
              </select>
            </li>
          </ul>

          <div className="delete_div">
            <span>
              <img src="src/assets/images/bag copy.svg" alt="delete icon" />
            </span>
            <span>
              <img src="src/assets/images/user.svg" alt="user icon" />
            </span>
          </div>
        </nav>
      </header>

      <div className="container hero-part ">
        <div className="hero-info-part">
          <a href="https://www.uzairways.com/uz">✈️ • Explore the wonderful indonesia!</a>
          <h1>
            Liburan & nikmati
            <span> tempatbaru</span> di <br />
            indonesia ️🏝️
          </h1>
          <p>
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
          <div className="buttons">
            <button>Mulai sekarang →</button><button><img src="src/assets/images/Polygon 1.svg" alt="" /><span>Putar Demo</span></button>
          </div>
        </div>

        <div className="hero-img-part">
          <img src="src/assets/images/turist.png" alt="" />
        </div>
      </div>
      <div className="company container">
        <img className="axon" src="src/assets/images/axon.svg" alt="" />
        <img className="jetstar" src="src/assets/images/jetstar.svg" alt="" />
        <img className="expediya" src="src/assets/images/expediya.svg" alt="" />
        <img className="qantas" src="src/assets/images/qantas.svg" alt="" />
        <img className="alitalia" src="src/assets/images/alitalia.svg" alt="" />
      </div>
      <div className="temukan container">
        <div className="head-temukan">
          <div className="left-part"><a href="#">DESTINASI FAVORIT</a>
            <h2>✈️ • Temukan Destinasi Favoritmu  </h2>
          </div>
        </div>
        <div className="main-temukan">
          <div className="card">
            <img src="src/assets/images/img1.png" alt="" />
            <div className="info-card">
            <h3>Raja Ampat</h3>
            <p>Bali</p>
            </div>
          </div>
          <div className="card">
            <img src="src/assets/images/img2.png" alt="" />
            <div className="info-card">
            <h3>Raja Ampat</h3>
            <p>Bali</p>
            </div>
            <div className="bg"></div>
          </div>
          <div className="card">
            <img src="src/assets/images/img3.png" alt="" />
            <div className="info-card">
            <h3>Raja Ampat</h3>
            <p>Bali</p>
            </div>
          </div>
          <div className="card">
            <img src="src/assets/images/img4.png" alt="" />
            <div className="info-card">
            <h3>Raja Ampat</h3>
            <p>Bali</p>
            </div>
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
