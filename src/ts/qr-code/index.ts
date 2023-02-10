export default function qrCode() {
    fetch('https://qr-api-vks7.onrender.com/api/qr/yana', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            textString: 'apex.ua',
            bgColor: '#0cbb52',
            descr: 'descr',
        }),
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
}
