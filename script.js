const dropdowns = document.querySelectorAll('.dropdown');
const semester_option = document.getElementsByClassName("option")[0]
var semester_selected, matkul_selected;

semester_option.querySelectorAll("p").forEach(function(e, i){
    e.addEventListener("click", function() {
        semester_option.parentNode.firstChild.textContent = e.textContent;
        this.style.display = "none";
        if(semester_selected != null) {
            semester_selected.style.display = "block";
        }
        document.getElementsByClassName("matkul")[0].firstChild.textContent = "Mata Kuliah:"
        semester_selected = this;
        matkul_selected = null
        
        generateMatkul(i + 1);
    });
});
document.addEventListener("click", function(event, i) {
    dropdowns.forEach(function(e) {
        option = e.getElementsByClassName("option")[0]
        if (option.getElementsByTagName("p")[0] != null) {
            if (!e.contains(event.target)) {
                if (option.style.display == "block") {
                    option.style.display = "none";
                    e.getElementsByTagName("i")[0].classList.remove("active")
                }
            } else {
                if (option.style.display == "block") {
                    option.style.display = "none";
                    e.getElementsByTagName("i")[0].classList.remove("active")
                } else {
                    option.style.display = "block";
                    e.getElementsByTagName("i")[0].classList.add("active")
                    submit = document.getElementsByClassName("submit")[0]
                    submit.style.display = "none"
                }   
            }
        }
    })
})

function generateMatkul(semester) {
    var matkul, mata_kuliah, matkul_element, submit;
    if (semester == 1) mata_kuliah = ["PAI", "Kalkulus", "DDAI", "Alpro Dasar", "Bahasa Inggris", "Pancasila", "DMS"];
    if (semester == 2) mata_kuliah = ["Aljabar Linear", "Statistika", "Struktur Data", "Alpro Lanjut", "Bahasa Indonesia", "Jaringan Komputer"];
    matkul = document.getElementsByClassName("matkul")[0].getElementsByClassName("option")[0]
    matkul.querySelectorAll("p").forEach(function(e) {
        e.remove();
    });
    mata_kuliah.forEach(function(e) {
        matkul_element = document.createElement("p");
        matkul_element.innerHTML = e;
        matkul.appendChild(matkul_element);
        matkul_element.addEventListener("click", function() {
            matkul.parentNode.firstChild.textContent = e;
            this.style.display = "none";
            if(matkul_selected != null) {
                matkul_selected.style.display = "block";
            }
            matkul_selected = this;
            submit = document.getElementsByClassName("submit")[0]
            submit.style.display = "block"
            submit.setAttribute("href", "/Semester/" + semester + "/" + matkul_selected.textContent)

        });
    });
    
}