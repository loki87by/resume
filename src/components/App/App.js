// **импорты
import React from 'react';
import { TranslationContext, translations } from '../../contexts/translationContext';
import { picArray } from '../../utils/consts';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../vendor/normalize.css';
import './App.css';

function App() {
  // **стейты
  const [lang, setLang] = React.useState('ru');
  const [isGame, setIsGame] = React.useState(false);
  const [luft, setLuft] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [imagesIsLoad, setImagesIsLoad] = React.useState(false);
  const gameRef = React.useRef(isGame);
  const Mobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
  const mobileRef = React.useRef(Mobile);

  // **проверка типа устройства пользователя
  React.useEffect(() => {
    setInterval(() => {
      const Mobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);
      mobileRef.current = Mobile
    }, 15000);
  })

  // **отсеживание высоты страницы
  React.useEffect(() => {
    function fromTop() {
      const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
      if (window.pageYOffset > scrollHeight * (0.73 + luft)) {
        gameRef.current = true;
      } else {
        gameRef.current = false;
      }
      // console.log(window.pageYOffset, 'window.pageYOffset', scrollHeight, 'scrollHeight', gameRef.current, 'gameRef.current')
      setIsGame(gameRef.current);
    }
    window.addEventListener("scroll", fromTop);
  })

  React.useEffect(() => {
  for(let i=0; i<picArray.length; i++){
    let img = new Image();
    img.src = picArray[i];
    const imagesArray = images || []
    imagesArray.push(img)
    setImages(imagesArray);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

React.useEffect(() => {
    images[picArray.length - 1].onload = function() {
      setImagesIsLoad(true)}
})

  // **DOM
  return (
      <>
        <TranslationContext.Provider value={translations[lang]}>
          <Header setLang={setLang} lang={lang}/>
          {imagesIsLoad ?
          <Main isMobile={mobileRef.current} isGame={gameRef} lang={lang} images={images} setLuft={setLuft}/>
          : <h2>Жди</h2>}
          <Footer />
        </ TranslationContext.Provider>
      </>
  );
}

// **экспорт
export default App;
