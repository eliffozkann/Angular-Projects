/*

HTTP Request Nedir?
Request istemcinin sunucu tarafına gerçekleştirdiği istek çağırma mesajlarıdır. Tam olarak Web sitesi ilgili ne yapacağımızı bildiririz. Bu sayede 
Post ile veri gönderebilir, Get ile verileri çekebilir, put ile bilgileri güncelleyebilir, delete ile silme işlemi gerçekleştiririz.
En çok kullanılan http requestleri get, post, put ve delete'dir.

Tipleri:
-- GET: bu istek bir web sunucusundan veri okumak yada alıp ekrana yansıtmak için kullanılır. 
Veriler sunucudan başarıyla alınırsa GET, 200 (OK) değerinde bir HTTP durum kodu döndürür .

-- POST: Sunucuya veri göndermek için kullanılır. İşlem başarılı bir şekilde gerçekleştiğinde, 201 HTTP durum kodunu döndürür. 
genellikle id değerini göndermeye gerek yoktur.

-- PUT: Sunucudaki verileri değiştirmek için kullanılır. Belirli bir konumdaki tüm içeriği, body'e iletilen verilerle değiştirir. 
İstekle eşleşen kaynak yoksa, bir tane random oluşturur.

-- PATCH: PUT isteğine benzer, ancak tek fark, verilerin bir bölümünü değiştirmesidir. Yalnızca güncellemek istediğiniz içeriği değiştirir.
Verilerin kaybına sebebiyet verdiği için pek tercih edilmez.

-- DELETE: Belirtilen bir konumdaki sunucudaki verileri silmek için bir DELETE isteği kullanılır.

-- HEAD: GET metoduyla benzer göreve sahiptir ancak geri dönen yanıtta mesaj gövdesi bulunmaz (başlıklar ve içerikleri GET metoduyla aynıdır). 
Bu nedenle GET mesajı gönderilmeden önce bir kaynağın var olup olmadığını kontrol etmek için kullanılabilmektedir.
*/