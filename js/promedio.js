
    function promedio(){
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);
        let n3 = Number(document.getElementById("n3").value);
        let total = parseInt(n1)+ parseInt(n2) + parseInt(n3);
        let promedio = total/3;
        let divResp = document.getElementById("alerta");
        divResp.innerText = `Promedio ${promedio}`;
        divResp.classList.add("alert");
        
    }
    function aprobar() {
        
        // Hacemos el llamado mediante id 

        let alumno = document.getElementById("alumno").value;
        let not1 = Number(document.getElementById("not1").value);
        let not2 = Number(document.getElementById("not2").value);
        let not3 = Number(document.getElementById("not3").value);
        let total = not1 + not2 + not3;
        let promedio = Math.round(total/3);
    
        if (promedio >= 7) {
            var mensaje = "Aprobado";
        } else {
            var mensaje = "Reprobado";
        }
        let divList = document.getElementById("lista");
        divList.innerHTML = `<li class="list-group-item"> Alumno : ${alumno}</li>
                            <li class="list-group-item">Leccion : ${not1}</li>
                            <li class="list-group-item">Aporte : ${not2}</li>
                            <li class="list-group-item">Examen : ${not3}</li>
                            <li class="list-group-item">Promedio : ${promedio}</li>
                            <li class="list-group-item">Estado ; ${mensaje}</li>`;
        
    }
    function mayor(){
        let edad = document.getElementById("edad").value;
        if (edad <= 18) {
            var total = "Menor de edad";
        } else if (edad <= 65) {
            var total = "Mayor de edad";
        } else {
            var total = "Adulto mayor";
        }
        
        let divResul = document.getElementById("mayor");
        divResul.innerText = `Eres ${total}`;
    }
    
