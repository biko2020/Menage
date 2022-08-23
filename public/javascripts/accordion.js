window.onload = () => {
    
    // on va chercher tous les elements
    const elements = document.querySelectorAll(".accordion-element");
    // on recupere l'element active

    const firstActive = document.querySelector(".accordion .active");
    // selectionner la balise p 
    let section = firstActive!.children[1].querySelector("p");

    // récuperer la hauteur du balise p
    const h = 20;
    let sectionHeight = section?.offsetHeight? + h
    



    // on defini la hauteur de accordion-content
    if(firstActive != null)
    {
        firstActive.children[1].style.height = sectionHeight+"px";
    }
    

    for(let element of elements ) {
        element.addEventListener("click", function(){
            // récupérer l'élément actif
            const active = document.querySelector(".accordion .active");
            // on lui retire la class "active"

            active?.classList.remove("active");
            // reduire la hauteur
            this.children[1].style.height = 0;

            // on met la class active a l' élement cliqué
            this.classList.add("active");

            // récuperer la hauteur de p
            let section = this.children[1].
            querySelector("p");
        
            // récuperer la hauteur du balise p
            let sectionHeight = section.offsetHeight 
            + 20;
        
            // on defini la hauteur de accordion-content
            this.children[1].style.height = 
            sectionHeight+"px";


        })
    }





}