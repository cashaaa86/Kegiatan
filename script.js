// Variabel untuk menyimpan data logbook
let logbookEntries = [];

// Fungsi untuk menampilkan logbook entries
function displayLogbookEntries() {
  const logEntriesDiv = document.getElementById('logEntries');
  logEntriesDiv.innerHTML = ''; // Bersihkan konten sebelum menampilkan logbook

  logbookEntries.forEach(function(entry, index) {
    const logEntry = document.createElement('div');
    logEntry.innerHTML = `
      <h3>Entri ${index + 1}</h3>
      <p><strong>Waktu Mulai:</strong> ${entry.startTime}</p>
      <p><strong>Waktu Selesai:</strong> ${entry.endTime}</p>
      <p><strong>Kegiatan:</strong> ${entry.activity === 'lainnya' ? entry.otherActivity : entry.activity}</p>
      <hr>
    `;
    logEntriesDiv.appendChild(logEntry);
  });
}

// Event listener untuk form submit
document.getElementById('logForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Hindari pengiriman default form

  const startTime = document.getElementById('startTime').value;
  const endTime = document.getElementById('endTime').value;
  const activity = document.getElementById('activity').value;
  const otherActivity = document.getElementById('otherActivity').value;

  // Buat objek baru untuk log entry
  const newLogEntry = {
    startTime: startTime,
    endTime: endTime,
    activity: activity,
    otherActivity: otherActivity
  };

  // Tambahkan log entry baru ke dalam array logbookEntries
  logbookEntries.push(newLogEntry);

  // Panggil fungsi untuk menampilkan logbook entries yang terbaru
  displayLogbookEntries();

  // Kosongkan nilai input setelah submit
  document.getElementById('startTime').value = '';
  document.getElementById('endTime').value = '';
  document.getElementById('activity').value = '';
  document.getElementById('otherActivity').value = '';
});
