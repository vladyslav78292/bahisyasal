import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { Helmet } from "react-helmet";
import jackpot from '../../images/jackpot.svg';
import minBet from '../../images/min-bet.svg';
import linesNumber from '../../images/lines-number.svg';
import maxGain from '../../images/max-gain.svg';
import maxBet from '../../images/max-bet.svg';
import refresh from '../../images/refresh-cw.svg';
import fs from '../../images/fs.svg';
import gift from '../../images/gift.svg';
import drums from '../../images/drums.svg';
import wild from '../../images/wild.svg';
import scater from '../../images/scater.svg';
import risk from '../../images/risk-game.svg';
import dogHouse from '../../images/dog-house.jpg';
import play from '../../images/play.png';
import moneyTrain from '../../images/money-train.jpg';
import shadowsBook from '../../images/shadows-book.jpg';
import wildRiches from '../../images/wild-riches.jpg';
import buffalo from '../../images/buffalo.jpg';
import doghouse1 from '../../images/doghouse1.jpg';
import doghouse2 from '../../images/doghouse2.jpg';
import doghouse3 from '../../images/doghouse3.jpg';
import paribahis from '../../images/paribahis.jpg';
import pinup from '../../images/pin-up.png';
import jojobet from '../../images/jojobet.png';
import truvabet from '../../images/Truvabet.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const DogHouse = () => (
  <>
    	  <Helmet>
        <title>Dog House - Oyna Pragmatic Play</title>
      {'<link rel="canonical" href="https://bahisyasal.com/slots/dog-house/" />'}
      {'<meta name="description" content="The Dog House Megaways bedava oyna. Pragmatic play demo versiyonu ile size özel hazır.">'}
      </Helmet>
    <Header />
    <main id="single-game" className="main game">
	<div className="game_topImage__empty"></div>
	<div className="container">
		<div className="game-box"> 
    <img className="game-box__image" src={dogHouse} alt="Dog House" width="300" height="240" loading="eager" />
			<div className="game-box__element">
				<div className="game-box__rating">Değerlendirme:
					<p className="game-box__values"> <span>6.44</span> / <span>10</span> oy verildi (<span>9</span>)</p>
				</div>
				<h1 className="game-box__title">Dog House</h1> <Link className="game-box__vendor" to="/vendors/pragmaticplay/">Pragmatic Play</Link>
				<p className="game-box__val">RTP (oyuncu ödeme yüzdesi) <b>96.55%</b> </p>
				<p className="game-box__val">Oynaklık: <b>Ortalamanın üstü</b></p>
			</div>
		</div>
		<div className="game_frame">
			<picture className="game_frame__picture">
        <img src={dogHouse} width="1170" height="660" alt="Dog House ekran görüntüsü oyunu" />
           </picture> <button className="button_play" type="button" data-game="the_dog_house">
<img src={play} alt="Demo oyna" />
<span className="play_text">Demo oyna</span>
</button> </div>
<ul className="game_values">
			<li> <img src={jackpot} width={20} height={20} alt="Ikramiye" loading="lazy" /> <span>Ikramiye:</span> <span>Evet</span> </li>
			<li> <img src={minBet} width={20} height={20} alt="Мin. bahis" loading="lazy" /> <span>Мin. bahis:</span> <span>0.05</span> </li>
			<li> <img src={maxGain} width={20} height={20} alt="Maks. kazanç" loading="lazy" /> <span>Maks. kazanç:</span> <span>500</span> </li>
			<li> <img src={maxBet} width={20} height={20} alt="Maks. bahis" loading="lazy" /> <span>Maks. bahis:</span> <span>x6750</span> </li>
			<li> <img src={refresh} width={20} height={20} alt="Otomatik oynatma" loading="lazy" /> <span>Otomatik oynatma:</span> <span>Evet</span> </li>
			<li> <img src={fs} width={20} height={20} alt="Bonus dönüşler" loading="lazy" /> <span>Bonus dönüşler:</span> <span>Evet</span> </li>
			<li> <img src={gift} width={20} height={20} alt="Bonus oyun" loading="lazy" /> <span>Bonus oyun:</span> <span>Evet</span> </li>
			<li> <img src={drums} width={20} height={20} alt="Davul sayısı" loading="lazy" /> <span>Davul sayısı:</span> <span>6x6</span> </li>
			<li> <img src={wild} width={20} height={20} alt="Vahşi sembol" loading="lazy" /> <span>Vahşi sembol:</span> <span>Evet</span> </li>
			<li> <img src={scater} width={20} height={20} alt="Dağılım" loading="lazy" /> <span>Dağılım:</span> <span>Numara</span> </li>
			<li> <img src={linesNumber} width={20} height={20} alt="Satır sayısı" loading="lazy" /> <span>Satır sayısı:</span> <span>40</span> </li>
			<li> <img src={risk} width={20} height={20} alt="Risk oyunu" loading="lazy" /> <span>Risk oyunu:</span> <span>Evet</span> </li>
		</ul>
		<div className="game_casinos_related">
			<p className="game_section__title">Dog House Slotlu kumarhaneler</p>
			<ul className="game_casinos_related__list">
				<li className="game_casinos_related__item"> <Link className="game_casinos_related__link" to="/truvabet/">
<img className="similar_img" src={truvabet} alt="Truvabet" width="300" height="240" loading="lazy" />
</Link> <Link className="btn btn_game_casinos" to="/bettilt-giris/" target="_blank" rel="nofollow noopener noreferrer">Oyun oynamak</Link> </li>
				<li className="game_casinos_related__item"> <Link className="game_casinos_related__link" to="/pinp-up/">
<img className="similar_img" src={pinup} alt="Pin-Up" width="300" height="240" loading="lazy" />
</Link> <a className="btn btn_game_casinos" href="https://redpinuplink.com/8v9l85Im/" target="_blank" rel="nofollow noopener noreferrer">Oyun oynamak</a> </li>
				<li className="game_casinos_related__item"> <Link className="game_casinos_related__link" to="/jojobet/">
<img className="similar_img" src={jojobet} alt="Jojobet" width="300" height="240" loading="lazy" />
</Link> <Link className="btn btn_game_casinos" to="/bahsegel-giris/" target="_blank" rel="nofollow noopener noreferrer">Oyun oynamak</Link> </li>
				<li className="game_casinos_related__item"> <Link className="game_casinos_related__link" to="/paribahis/">
<img className="similar_img" src={paribahis} alt="Paribahis" width="300" height="240" loading="lazy" />
</Link> <a className="btn btn_game_casinos" href="https://parimatch.wqetxrk.com/?partner=p2855p15746p240b&source=bahisyasal#registration" target="_blank" rel="nofollow noopener noreferrer">Oyun oynamak</a> </li>
			</ul>
		</div>
		<div className="bl_ceo">
			<h2 className="wp-block-heading"> <strong>D</strong>og House Slot Oyunu Nasıl Oynanır?</h2>
			<p>Casino oyunu sevenlerin eğlenceli buldukları oyunlardan biri de Dog House! Peki bu zevkli ve kazançlı oyun nasıl oynanır?</p>
			<p>Öncelikle casino sitelerinde yer alan bu oyunun oldukça kolay bir ara yüzü var. Ayarlar menüsünden oyunu özelleştirmek ve kişisel zevkine uygun olarak düzenlemek mümkün. Türkçesi köpek evi olan bu slot oyununda hedef aynı sembolleri aynı çizgiye denk getirmek! Bu sembollerin her birinin ayrı bir katsayı çarpanı var ve bu semboller yakalandığında katsayısı kadar çarpanı ile oyuncular para kazanıyor. En çok kazandıran sembol ise mavi kutulu köpek olarak öne çıkıyor. En az kazandıran sembol ise rakamlardan oluşan kombinasyonlar!</p>
			<h2 className="wp-block-heading">Dog House Slot Oyununun Kuralları</h2>
			<p>Tüm slot oyunlarında olduğu gibi Dog House oyunun da bazı kuralları var. Bu kuralları en anlaşılabilir şekilde sıralamak gerekirse;</p>
			<ul>
				<li>Oyunda yer alan her sembol en soldaki makaradan başlıyor ve soldan sağa doğru ilerliyor.</li>
				<li>Oyundaki kazanç hesaplaması hat başına oynanan bahislerle çarpılarak belirlenir.</li>
				<li>Tüm değerlerin ifade edilişi jeton cinsinden belirlenir.</li>
				<li>Ödeme çizgisinde birden fazla kazanç sağlanırsa en yüksek sembolün tutarı ödenir.</li>
				<li>Olası teknik aksaklıklarda oyun geçersiz sayılır.</li>
			</ul>
			<h2 className="wp-block-heading">Dog House Nasıl Oynanır?</h2>
			<p>Bu sevimli köpek sembolleri ile süslü oyunu oynamak için önce oyuncuların bahis tutarlarını belirlemeleri gerekiyor. Bahis tutarı belirledikten sonra otomatik çevirme ya da manuel çevirme seçeneklerinden birinin tercih edilmesi gerekiyor. Otomatik çevirmede bilgisayar hızlı bir şekilde sembolleri döndürmeye başlıyor. Bu sembollerin aynı sütunda denk gelmesi durumunda ise oyuncu kazanç sağlıyor. En çok kazandıran sembol mavi kutulu köpek sembolü, en az kazanç getiren semboller ise rakamlar! Ayrıca ekranda üç pati denk gelirse oyuncu ekstra çevirme hakkı kazanıyor. Bu patilerin 3 adet olması gerekiyor. Bu yakalanınca ekranda 9 adet değirmen sembolü beliriyor. Tamamen şans faktörü ile belirlenen bu değirmenlerin her birinde 1 ila 3 arası free spin kazancı var. Bu değirmenler ile oyuncular en az 9 en fazla 27 free spin kazanıyor ve oyuna devam etme şansı yakalıyorlar. Dog&nbsp; House oyununda birbirinden farklı 20 kombinasyon bulunuyor. Kazanç için şekilli sembollerin yakalanması önemli. Çünkü sayı kombinasyonları çok fazla kazanç sağlamıyor. Şekillerin her birinin ayrı bir katsayısı var. Bu katsayılar şekillere göre 5 katı, 10 katı, 15 katı olarak değişiklik gösteriyor. Ayrıca oyunda bonusların biriktiği kulübeler de mevcut. Bu bonuslar sayesinde oyuncular kazanma şanslarını artırıyorlar. Bu kulübelerin de katsayıları var.&nbsp;</p>
			<p>Grafik tasarımı da son derece eğlenceli olarak tasarlanan Dog House oyununda ekranda sevimli köpekler görünüyor. Oyunda her zaman şekillerden oluşan kombinasyonlar rakamlardan oluşan sembollere oranla çok daha yüksek kazançlar veriyor. Yine 3 pati yakalanması durumunda biriken bonuslarla oyuncular slot çevirmeye devam edebiliyorlar. Oyunda kazanç sağlamak için ise 3 aynı sembolü aynı hizada denk getirebilmekten geçiyor. Kulübelerde normal, 2 katı ve 3 katı bedava çevirme hakları var ve bu çevirme hakları katsayıya oranla oyunculara kazanç olarak geri dönüyor.&nbsp; Elbette maksimum kazanç oyunun ana sembolü olan mavi kutulu köpek sembolünün üçünü aynı hizada yakalamak ile sağlanıyor.&nbsp;</p>
			<p>Dog House ile oyuncular hem slot oyunu heyecanını yaşıyor hem de eğlenceli bir şekilde vakit geçiriyorlar. Kombinasyon seçeneklerinin çok olması ise kazancın da artması anlamına geliyor. Casino oyunları hizmeti veren birçok site üzerinden siz de Dog House oyunuyla eğlenirken kazanma şansı yakalayabilirsiniz. Üstelik oyunun verdiği bonuslar ve free spinlerle kazanma şansınızı da arttırabilirsniz.</p>
		</div>
		<div className="section bl_screenshots">
			<p className="game_section__title">Dog House slot'in ekran görüntüleri</p>
			<div className="bl_screenshots__list">
				<figure className="bl_screenshots__item">
           <img className="lightbox" src={doghouse1} alt="Kazanan kombinasyon" data-image="https://bahisyasal1.com/wp-content/uploads/2022/02/The-Dog-House-Megaways-Icons.jpg" width="352" height="268" loading="lazy" />
					<figcaption>Kazanan kombinasyon</figcaption>
				</figure>
				<figure className="bl_screenshots__item">
           <img className="lightbox" src={doghouse2} alt="Oyun bonusları" data-image="https://bahisyasal1.com/wp-content/uploads/2022/02/The-Dog-House-Megaways-Maps.jpg" width="352" height="268" loading="lazy" />
					<figcaption>Oyun bonusları</figcaption>
				</figure>
				<figure className="bl_screenshots__item"> 
        <img className="lightbox" src={doghouse3} alt="Süper galibiyet" data-image="https://bahisyasal1.com/wp-content/uploads/2022/02/The-Dog-House-Megaways-MegaWin.jpg" width="352" height="268" loading="lazy" />
					<figcaption>Süper galibiyet</figcaption>
				</figure>
			</div>
		</div>
		<div className="section similar">
			<p className="game_section__title">Benzer slot makineleri</p>
			<div className="similar_list"> <Link className="similar_item" to="/slots/book-of-shadows/">
<img className="similar_img" src={shadowsBook} alt="Book Of Shadows" width="300" height="240" loading="lazy" />
<p className="similar_text">Book Of Shadows</p>
</Link> <Link className="similar_item" to="/slots/money-train/">
<img className="similar_img" src={moneyTrain} alt="Money Train" width="300" height="240" loading="lazy" />
<p className="similar_text">Money Train</p>
</Link> <Link className="similar_item" to="/slots/wild-wild-riches/">
<img className="similar_img" src={wildRiches} alt="Wild Wild Riches Slot Oyunu Ücretsiz ve Gerçek Parayla Oyna" width="300" height="240" loading="lazy" />
<p className="similar_text">Wild Wild Riches Slot Oyunu Ücretsiz ve Gerçek Parayla Oyna</p>
</Link> <Link className="similar_item" to="/slots/buffalo-king/">
<img className="similar_img" src={buffalo} alt="Buffalo King" width="300" height="240" loading="lazy" />
<p className="similar_text">Buffalo King</p>
</Link> </div>
		</div>
	</div>
</main>
    <Footer />
  </>
);

export default DogHouse;
