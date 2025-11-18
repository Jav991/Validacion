function conversor(){
   let image = document.getElementById('iimgBtn').addEventListener('click', function(){
    if(!image){
        alert("Por favor seleccione un JPG primero")
        return
    }

    const reader = new FileReader()
    reader.onload = function(e){
        const img = new Image()
        img.src = e.target.result
        
        img.onload = function (){
            const canvas = document.createElement('canvas')
            canvas.width = img.width
            canvas.height = img.height
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)

            const webData = canvas.toDataURL('image/webp', 0.8)

            const link = document.getElementById('enlace')
            link.href = webData;
            link.download = "imagen.webp"
            link.style.display = "inline-block"
            link.textContent = "Descargar Imagen Webp"
        }
    }
})
}