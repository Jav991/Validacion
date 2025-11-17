document.getElementById('iimgBtn').addEventListener('click', function(){
    if(!file){
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
        }
    }
})