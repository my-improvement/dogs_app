<p align="center">
  <img src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github" height="18.5"/>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=crocodication.dogs_app" width="82" height="20"/>
</p>

# Dogs App

> Projek Contoh Untuk Komponen dan Fetch di React-Native Menggunakan TypeScript

<p align="center">
  <img src="./screenshots/0.png" alt="App Preview" width="300"/>
</p>

# Catatan

Projek ini di init menggunakan perintah ```npx react-native init dogs_app --template react-native-template-typescript``` menggunakan **Node.js 15.5.0**

# Running Project

- ```git clone https://github.com/crocodication/dogs_app.git```
- ```cd dogs_app```
- ```npm install```

Jika menggunakan MacOS, lakukan juga

- ```cd ios; pod install; cd ..```

Kemudian

- ```npx react-native run-android``` / ```npx react-native run-ios```

# Tujuan 

Semoga dengan sample project ini bisa mengambil poin - poin sebagai berikut

- Pemetaan Type untuk props komponen, berguna untuk memunculkan suggest auto-complete props pada komponen custom

![Type untuk props komponen](./screenshots/1.png)

- Pemetaan Type untuk respon API, berguna untuk memunculkan suggest auto-complete saat mendapatkan data dari API

![Type untuk respon API](./screenshots/2.png)