// get Element
const skills_holder = document.getElementById('data');

// ES6

// ES6
// member
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    join() {
        console.log(this.username + ' Joined ' + this.nama_kelas);
    }

}

let addSiswa = new Siswa('Angga', '123123', 'OOP');
addSiswa.join();