## JavaScript'e giriş
Javascript en başta "web sitelerini interaktif hale getirmek" için oluşturulmuştur. 
JavaScript'de yazılan programlar "script" olarak adlandırılır ve web sayfasının HTML'i içersinde yer alır.

> En başta JavaScript'in ismi "LiveScript" di. Ancak o zamanlar Java çok popülerdi ve Java'nın kardeşi olarak bu dile JavaScript ismini vermek bu popülariteden faydalanmak için güzel bir fırsattı. Daha sonra JavaScript hızla gelişerek ECMAScript adını aldı ve şu an Java ile hiçbir bağlantısı bulunmuyor.

Günümüzde JavaScript sadece tarayıcıda değil sunucu tarafında da çalışabilmektedir, daha doğrusu JavaScript engine içeren herhangi bir cihazda çalışabilir.

V8 –  Chrome ve Opera.

SpiderMonkey – Firefox.

IE için “Chakra", Microsoft Edge için “ChakraCore”...

### JavaScript ile tarayıcıda neler yapılabilir?

- Sayfaya yeni HTML eklemek, var olanı değiştirmek, stillendirmek.
- Kullanıcı aksiyonlarıyla çalışmak (Mouse tıklamaları, klavye tuşlarına basılması, mouse imlecinin hareketi)
- Uzak sunuculara istekler yollamak, dosya yüklemek ve indirmek,
- Cookiler yazmak ce okumak, kullanıcıya mesajlar göstermek,
- Client-side data tutmak (LocalStorage)

### Hello, World!
Şimdi JavaScript'i çalıştırmak için bir ortama ihtiyacımız var. Tarayıcının iyi bir seçim olabileceğini bu aşamada biliyoruz.

#### Script tag'i
JavaScript kodları HTML'de hemen her yere script tagları içersinde yerleştirilebilir.

```html
<!DOCTYPE HTML>
<html>
<body>
  <p>Script öncesi...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>Script sonrası</p>
</body>
</html>
```

>type attribute'u: <script type="text/javascript">
Eski HTML standardı olan HTML4, script tagi ile birlikte type attribute'u verilmesini gerektiriyordu. Şu anda artık böyle bir ihtiyacımız yok.
  
### External Scriptler
```html
<script src="/path/to/script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

### Daha fazlası
- JavaScript en başta sadece tarayıcıda çalışacak şekilde tasarlandı, ancak şu an başka ortamlarda da kullanılabilmekte
- JavaScript, tarayıcıda HTML, CSS ile entegre çalışarak şu anda alternatifsiz pozisyonda
- Şu anda JavaScripte transpile olabilen(çevrilebilen) bir çok dil de bulunmakta. (Typescript, CoffeScript, Flow...)

### Tasks
- Kullanıcıya "Hello, World" mesajı çıkartan bir alert gösteriniz.
- Yukarıdaki taski external script kullanarak yapınız.
