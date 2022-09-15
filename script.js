//obtendo todos os elementos necessários
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passando o comprimento total da img para a variável totalImg
        let newIndex = i; //passando o valor i para a variável newIndex
        let clickedImgIndex; //criando nova variavel
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passando o índice da imagem clicada para a variável criada (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passando o índice img atual para a variável currentImg com a adição de +1
                let imageURL = gallery[newIndex].querySelector("img").src; //obtendo o usuário clicado img url
                previewImg.src = imageURL; //passando a url da img clicada pelo usuário em previewImg src
            }
            preview(); //chamando a função acima
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //se o valor do índice for igual a 0 então oculta prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //se o valor do índice for maior e igual ao comprimento da galeria em -1, ocultar nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //diminui o índice
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //incrementa o índice
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //atribuindo o primeiro índice img clicado pelo usuário para newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}