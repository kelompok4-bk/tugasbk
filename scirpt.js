const consultationForm = document.getElementById("consultationForm");

consultationForm.addEventListener("submit", function(e) {

    e.preventDefault();

    alert(
        "Permohonan konsultasi berhasil dikirim. Guru BK akan segera menghubungi Anda."
    );

    consultationForm.reset();
});
