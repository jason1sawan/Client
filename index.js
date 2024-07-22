function RenderStudent()
{
let ddl_Students = document.getElementById('ddl_Student')
fetch('https://excel-kkhy.onrender.com/Students')
.then(response => response.json())
.then(Data =>{ Data.forEach(student => {
    let option = document.createElement('option')
    option.innerHTML = student.name;
    ddl_Students.appendChild(option)

      });
})
}

RenderStudent();