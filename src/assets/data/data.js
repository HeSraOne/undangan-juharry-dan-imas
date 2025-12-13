export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Juharry',
            child: 'Putra ke 2',
            father: 'Adan Sudana',
            mother: 'Sapniah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Imas Samsiah',
            child: 'Putri ke 5',
            father: 'H. Komarudin (Alm.)',
            mother: 'Hj. Khodijah (Almh.)',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Desember',
            date: '27',
            day: 'Sabtu',
            hours: {
                start: '08.00',
                finish: '09.00'
            }
        },
        reception: {
            year: '2025',
            month: 'Desember',
            date: '27',
            day: 'Sabtu',
            hours: {
                start: '09.00',
                finish: 'Selesai'
            }
        },
        address: 'Ponpes Al-Barkah Jl. Aria Natamanggala, Kp Cijujung RT 04 RW 06, Desa Bobojong, Kec. Mande, Kabupaten Cianjur, Jawa Barat 43292'
    },

    link: {
        calendar: 'https://calendar.app.google/5snbDE21LutjPvT869',
        map: 'https://maps.app.goo.gl/eSgdXM6XqSFtTtQB9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Juharry',
            icon: './src/assets/images/bca.png',
            rekening: '4860372148'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bca.png',
            rekening: '1832700007'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyVhwP4_gi7We3JM7PefglOe7zNFNrpyj4rLFTvGwqgu6nbMTgOY_DoR3KX3fxcqRv0HQ/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
