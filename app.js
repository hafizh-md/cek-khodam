document.getElementById('checkButton').addEventListener('click', function() {
	const name = document.getElementById('name').value;
	const result = document.getElementById('result');

	if (name) {
		const khodam = checkKhodam(name);
		result.innerHTML = `khodam anda adalah : <strong>${khodam}</strong>`;
	} else {
		result.innerHTML = '<span style="color: red;">Silahkan masukkan nama anda!</span>';
	}
});

function checkKhodam(name) {
	const khodams = ['Biawak Alaska', 'Monyet Kayang', 'Macan Goyang', 'Elang Mabok', 'Tuyul Kepala Kotak', 'Boboiboy', 'kosong', 'gada yang mau jadi khodam kamu'];
	const index = Math.floor(Math.random() * khodams.length);
	return khodams[index];
}
