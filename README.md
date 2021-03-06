# javascript-basic

Belajar Bahasa Pemrograman JavaScript Materi Fundamental lewat course dicoding <https://www.dicoding.com/academies/256>

## Daftar Materi Course

### A. Fundamental

    1. Variabel
    2. Data Type
    3. Operators
    4. IF Statement
    5. Switch Case
    6. loop

### B. Data Structure

    1. Object
    2. Array
    3. Spread Operator
    4. Destructuring Object
    5. Destructuring Array
    6. Map
    7. Set
    8. Weakmap
    9. Weakset

    Rangkuman :

        A.  Object adalah tipe data kompleks untuk menyimpan banyak data dengan format key-value. Key pada object harus berupa string.
        B.  Array digunakan untuk menyimpan banyak data. Data pada array disusun secara berurutan dan diakses menggunakan index.
        C.  Map menyimpan banyak data dengan format key-value seperti object. Namun, key pada Map dapat bertipe apa pun.
        D.  Set digunakan untuk menyimpan banyak data secara unik, tidak ada duplikasi, tidak berurutan, dan tidak diindeks.

### C. Functions

    1. functions
    2. Declaring Function
    3. Arrow Function
    4. Variable Scope
    5. Closure

### D. Object Oriented Programming (OOP)

    paradigma OOP terdapat 4 pilar utama, yaitu encapsulation, abstraction, inheritance, dan polymorphism.
    1. Class
    2. Property & Method
    3. Encapsulation
    4. Inheritance
    5. Overriding
    6. Object Composition
    7. Build In Class

### E. Functional Programming

    Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

    3 konsep besar yang ada di FP. Yakni Pure Function, Immutability, dan High-Order Function.

    1. Pure Function
    2. Immutability
    3. Higher-Order Function
    4. Reusable Function

### F. Setup Environment Node Js

    1.   Create Project

        1.1 Buat sebuah directory (folder) project app
        1.2 Open directory yang sudah dibuat di editor kesayangan
        1.3 Open Terminal dan ketikan : 'npm init'
        1.4 Selanjutnya akan muncul beberapa pertanyaan untuk mengisi nilai package.
        1.5 jika berhasil maka akan muncul sebuah file baru bernama 'package.json'

    2.   Menjalankan Project Node Js
        2.1 Buka File package.json
        2.2 Pada Object scripts tambahkan nilai baru bernama "start": "node index.js" di bawah nilai 'test'
        2.3 untuk menjalankan program jalan perintah 'npm run start' pada terminal

### G. Module

    1. Export dan Import
    2. Multiple export value in node js
    3. ES6 Module
        3.1 Tambahkan properti 'type' dengan nilai 'module' pada berkas package.json : "type": "module",

### H. Error Handling

    1. try_catch
    2. throwing errors
    3. custom error

### I. Concurrency

    Concurrency sendiri berarti beberapa komputasi yang terjadi pada saat yang bersamaan

    1. Synchronous vs Asynchronous
    2. setTimeout
    3. Callback Function
    4. Promise
    5. Constructing Promise Object
    6. Consuming Promises
    7. onRejected with Catch Method
    8. Chaining Promises
    9. Promise All
    10. Async-await
    11. Quiz

### J. Node Package Manager

    1. npm help
    2. npm install -h (melihat detail penggunaan perintah intall)
    3. init (Membuat berkas package.json pada project)
    4. install <package-name> (Memasang dan mendaftarkan package pada berkas package.json)
    5. run-script <command> (Menjalankan perintah yang terdapat pada objek scripts di berkas package.json)
    6. uninstall <package-name> (Menghapus dan mengeluarkan package dari berkas package.json)
    7. version (Untuk melihat versi package yang tersedia secara global atau lokal)

### K. Testing

    1. Static test
    Memastikan tidak adanya typo (naming convention yang standar) dan memastikan tidak ada error types.

    2. Unit test
    Dilakukan untuk memastikan bahwa setiap unit kode yang kita tulis sudah bisa bekerja sesuai harapan. Unit sendiri berarti komponen terkecil yang dapat diuji secara terisolasi dalam perangkat lunak yang kita buat, dapat berupa fungsi bahkan kelas jika kita menggunakan paradigma OOP. Proses ini juga dapat diautomasikan.

    3. Integration test
    Memastikan beberapa serangkaian fungsi yang saling ketergantungan satu sama lain berjalan semestinya. Proses pengujian ini dapat dilakukan secara diautomasikan dengan menuliskan script test.

    4. End-to-End test
    Proses pengujian sebuah aplikasi untuk menguji flow dari awal hingga akhir, layaknya seorang user saat menggunakan aplikasi. Memastikan bahwasanya aplikasi berfungsi selayaknya. Biasanya proses ini dapat dilakukan secara otomatis maupun manual oleh tester.

    Ketika kita menulis sebuah kasus pengujian (test case), maka ada beberapa poin yang harus kita definisikan terlebih dahulu:

    1. Apa yang ingin diuji?
    Misalkan: Melakukan uji pada fungsi menghitung rata-rata nilai siswa, atau dapat juga melakukan pengujian pada proses registrasi akun, dan lain sebagainya.

    2. Ekspektasi apa yang diharapkan?
    Untuk kasus menghitung nilai rata-rata:
        2.1 Menghasilkan output perhitungan yang sesuai berdasarkan input yang diberikan.
        2.2 Input harus berupa angka.

    3. Untuk kasus proses registrasi akun
        3.1 Pengguna dapat melakukan registrasi secara normal.
        3.2 Pengguna dengan email sama tidak dapat melakukan registrasi.
        3.3 dan lain sebagainya.
