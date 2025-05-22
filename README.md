# Wordle
GAZİ ÜNİVERSİTESİ
TEKNOLOJİ FAKÜLTESİ
BİLGİSAYAR MÜHENDİSLİĞİ BÖLÜMÜ
PROJE RAPORU
Proje Adı: Wordle Web Oyunu
Ders: Web Arayüz Geliştirme
Hazırlayanlar : Zhanarbek Turdimatov                       Öğrenci No :  22181616072
                         Abdülselam İsmail                              Öğrenci  No : 23181616010
                         Bektur MUKHTARBEKOV               Öğrenci  No : 23181616407
                        Soltan Sanjar Akyyev                           Öğrenci  No : 23181616416

Tarih: 21.05.2025
 
1. GİRİŞ
Günümüzde web tabanlı uygulamalar, hem eğlence hem de eğitim alanında önemli bir yer edinmiştir. Bu bağlamda geliştirilen Wordle oyunu, kelime bilgisi üzerine kurulu basit ama etkili bir eğitsel oyun örneğidir. Bu projede, HTML, CSS ve JavaScript gibi temel web teknolojileri kullanılarak Wordle oyununun bir prototipi geliştirilmiştir. Oyun, kullanıcı dostu bir arayüzle, belirli sayıda tahmin hakkı içerisinde doğru kelimeyi bulmaya dayanır. Bu süreçte kullanıcıya her tahminden sonra renklerle geri bildirim verilir.
Bu proje, hem oyun algoritması kurmak hem de web programlamaya dair pratik bilgiler edinmek açısından değerli bir uygulamadır.
2. PROJENİN AMACI
Projenin temel amacı, web tabanlı bir oyun geliştirerek HTML, CSS ve JavaScript becerilerini pekiştirmektir. Ayrıca kullanıcı deneyimi (UX) açısından sade ve anlaşılır bir arayüz tasarımı hedeflenmiştir. Proje sonunda kullanıcılar, oyun sayesinde eğlenceli vakit geçirirken aynı zamanda kelime dağarcıklarını geliştirebilirler.

Bu projeyle birlikte:
- Front-end geliştirme teknikleri pekiştirilmiştir,
- Etkileşimli kullanıcı arayüzü tasarlanmıştır,
- Basit algoritma mantığı uygulanmıştır.
3. KULLANILAN TEKNOLOJİLER VE ARAÇLAR
- HTML5: Sayfa iskeleti ve yapısal elemanlar için kullanılmıştır.
- CSS3 & Bootstrap 5: Görsel tasarım, responsive yapı ve grid sistemi için tercih edilmiştir.
- JavaScript (ES6): Oyun mantığı, kontrol mekanizmaları ve olay yönetimi bu dil ile sağlanmıştır.
- Visual Studio Code: Geliştirme ortamı olarak kullanılmıştır.
- CDN (Bootstrap, jQuery): Harici kütüphaneler için bağlantı yapılmıştır.
4. PROJENİN YAPISI VE KOD DOSYALARI
Proje, tek sayfa üzerinden çalışan bir web uygulamasıdır. Klasör yapısı sade tutulmuş olup şu dosyaları içermektedir:

- index.html: Oyunun arayüzünü barındırır.
- style.css: Oyun tahtasının ve genel tasarımın stil dosyasıdır.
- keyboard.css: Ekran klavyesi için özel tasarım içerir.
- script.js: Oyun mantığını oluşturan JavaScript kodları yer alır.

Kod yapısı modüler düşünülmüş, işlevsel bölümler fonksiyonel olarak ayrılmıştır.
5. OYUNUN ÇALIŞMA MANTIĞI
1. Sayfa yüklendiğinde, sistem rastgele bir 5 harfli kelime belirler.
2. Kullanıcı sanal klavyeyi veya fiziksel klavyesini kullanarak giriş yapar.
3. Her tahmin sonrası:
   - Yeşil renk: Harf doğru konumda.
   - Sarı renk: Harf doğru ama yanlış konumda.
   - Gri renk: Harf kelimede yok.
4. Kullanıcının 6 deneme hakkı vardır.
5. Tahmin doğruysa başarı mesajı; tüm haklar bitince doğru cevap kullanıcıya gösterilir.
6. Sonuçlar, oyun sonu modal penceresinde gösterilir ve kullanıcı panoya kopyalayabilir.
6. KARŞILAŞILAN ZORLUKLAR VE ÇÖZÜMLER
Çektiğimiz en büyük zorluklardan biri kelime liste seçimiydi. Kelime listenin uygun formatta olması çok önemliydi. En son githubta bulduğumuz bir kelime listesi kullanmaya karar verdik. Fakat kelime listesi tam olarak uygun formatta değildi. Bize sadece 5 harfli sözcükler lazımdı ayrıca kelime control işlemi için sözcüklerin hep küçük haneli olmalıydı. Bunu sağlamak için kodla normalizasyon işlemi yaptık. Onu script.js $(document).ready(…) içerisinde görebiliriz.
7. TEST VE DEĞERLENDİRME
Geliştirilen uygulama farklı kullanıcı senaryolarıyla test edilmiştir. Başlıca test durumları şunlardır:

- Rastgele seçilen kelimenin doğru tahmin edilmesi durumunda başarılı mesajın gösterilmesi.
- Yanlış kelime girildiğinde sistemin doğru şekilde kullanıcıyı uyarması.
- Sanal klavye ile etkileşim ve renkli geri bildirimlerin doğruluğu.
- Mobil cihazlarda ekran uyumluluğu.

Tüm bu testler sonucunda uygulama, beklenen işlevselliği yerine getirmiş ve kullanıcı dostu bir deneyim sunmuştur.
8. GELİŞTİRME ÖNERİLERİ
Projeyi daha kapsamlı hale getirmek ve ileri seviye kullanıcı deneyimi sağlamak adına aşağıdaki geliştirmeler önerilmektedir:

- Kelime veri setinin genişletilmesi,
- Skor sistemi ve günlük istatistik ekranı eklenmesi,
- Oyuna zaman sınırlı mod veya günlük Wordle modu gibi özellikler eklenmesi,
- Koyu/açık tema desteği sunulması,
- Çok oyunculu rekabetçi versiyonların geliştirilmesi.
9. SONUÇ
Bu proje aracılığıyla web teknolojilerinde temel seviyede edinilmiş bilgilerin pratikte nasıl uygulandığı görülmüştür. HTML, CSS ve JavaScript dilleri yardımıyla hem görsel hem de fonksiyonel açıdan doyurucu bir uygulama ortaya konmuştur. Responsive tasarımın önemi, kullanıcı etkileşimleri ve hata ayıklama süreçleri gibi yazılım geliştirme yaşam döngüsünün temel taşları deneyimlenmiştir.

Proje süresince araştırma, problem çözme ve çözüm odaklı düşünme becerileri gelişmiş, öğrencinin yazılım dünyasına olan ilgisi artmıştır. Gelecekte daha büyük çaplı projelere temel oluşturabilecek bu uygulama, hem teknik bilgi hem de tasarım anlayışı açısından önemli bir adımdır.

