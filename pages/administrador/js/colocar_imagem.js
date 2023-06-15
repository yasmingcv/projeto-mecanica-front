const inputFile = document.querySelector('#input_imag');

const imageProfessor = document.querySelector('.image_professor');

const textImage = 'importe a imagem';

imageProfessor.innerHTML = textImage;

inputFile.addEventListener('change', function(eventImage) {
      const inputTarget= eventImage.target;
      console.log(inputTarget);  
      const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        
        reader.addEventListener('load', function(eventImage) {
            const readerTarget = eventImage.target
            
            const img = document.createElement('img');
            img.src = readerTarget.result;
            img.classList.add('image_professor');

            imageProfessor.innerHTML = "";
            imageProfessor.appendChild(img);
        });
        
        reader.readAsDataURL(file)
        imageProfessor.innerHTML = 'selecione uma imagem';
    } else {
        imageProfessor.innerHTML = textImage;
    }
})

