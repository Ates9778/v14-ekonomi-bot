module.exports = {
    bot: {
        token: "MTIxMzQzNjMzMzYyOTExMjMyMQ.GOxCV5.nG8V4TxxvQA-HYRS-SbH1P8H7OZWjnZSJd5vI8", //botun tokeni
        prefix: ".", //botun prefixi
        mongoDb: "", //MongoDB Url. Youtubede araştırarak nasıl alınacagını öürenebilirsiniz
        owners: ["owner-id-1"]
    },
    coinflip: {
        coinFlipMax: 250000, //Coinflip en fazla oynayabilecekleri para
    },
    meslek: {
        doktorMaas: 50000, //Doktor Maaşı
        yazilimciMaas: 25000, //Yazilimci maaşı
        ogretmenMaas: 20000, //Öğretmen maaşı
    },
    daily: {
        min: 1000, //Günlük Ödül minimum gelecek para
        max: 10000, //Günlük Ödül maximum gelecek para
    },
}
