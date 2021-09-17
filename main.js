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

    countSiswa() {
        console.log('Available 100 Siswa');
    }

}

// let addSiswa = new Siswa('Angga', '123123', 'OOP');
// addSiswa.join();

class Subs extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    paketSubs() {
        console.log('Hi ' + this.username + ' subs paket ' + this.paket);
    }
}

let addSubs = new Subs('Angga', 'Premium');
addSubs.countSiswa();