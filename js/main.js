document.addEventListener("keyup", e=>{

  if (e.target.matches("#buscador")){

      if (e.key ==="Escape")e.target.value = ""

      document.querySelectorAll(".juego").forEach(game =>{

          game.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?game.classList.remove("filtro")
            :game.classList.add("filtro")
      })

  }


})