// console.log('hello world');

function cetakNama(nama) {
    return `halo, nama saya ${nama}`;
}

// console.log(cetakNama('sandhika'));

const PI = 3.14;

const mahasiswa = {
    nama: 'doddy',
    umur: 20,
    cetakMhs() {
        return `halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

class Orang {
    constructor() {
        console.log('objek orang telah dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang };