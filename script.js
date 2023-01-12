const verificar = () => {
   let data = new Date()
   let anoAtual = data.getFullYear()
   let anoNasci = Number(document.getElementById("txtano").value)
   let res = document.querySelector("div#res")
   if(anoNasci.value > anoAtual || anoNasci.value == 0 ) {
        window.alert("[Erro] verifique os dados")
    } else {
        let sex = document.getElementsByName("sexo")
        let idade = anoAtual - anoNasci
        let genero = ``
        
        let img = document.createElement ("img") //criando tag img dinamicamente 
        img.setAttribute("id","foto") //atribuindo um id a tag criada
        img.style.width = "269px"
        img.style.height ="250px"
        img.style.marginTop="15px"
        
        
        if (sex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src","/img/criançaMasculino.jpg")
            } else if (idade > 10 && idade <= 21) {
                img.setAttribute("src","/img/menino.jpg")
            } else if (idade > 21 && idade < 60) {
                img.setAttribute("src","img/homem.jpg")
            } else {
                img.setAttribute("src","img/idoso.jpg")
            }
        } else {
            genero = `Mulher`
            if (idade >= 0 && idade <= 10) {
                img.setAttribute("src","/img/criança menina.jpg")
            } else if (idade > 10 && idade <= 21) {
                img.setAttribute("src","/img/menina.jpg")
            } else if (idade > 21 && idade < 60) {
                img.setAttribute("src","img/mulher.jpg")
            } else {
                img.setAttribute("src","img/idosa.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
   
}