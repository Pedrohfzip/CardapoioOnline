$(document).ready(function() {
    cardapio.eventos.init();
})

var cardapio = {};

cardapio.eventos = {
    init: () => {
        cardapio.metodos.obterItensCardapio();
    }
}

cardapio.metodos = {
    obterItensCardapio: (categoria = 'burgers', vermais = false) => {
        var filtro = MENU[categoria]
        console.log(filtro)

        $('#itensCardapio').html('')

        $.each(filtro, (i,e) => {

            let temp = cardapio.templates.item
            .replace(/\${img}/g, e.img)
            .replace(/\${name}/g, e.name)
            .replace(/\${price}/g, e.price);

            if(vermais && i >= 8 && i < 12){
                $('#itensCardapio').append(temp)
            }

            if(!vermais && i < 8){
                $('#itensCardapio').append(temp)
            }

            
        })

        
    }
}

cardapio.templates = {
    item: `
        <div class="col-3">
            <div class="card card-item">
                <div class="img-produto">
                    <img src="\${img}" alt="">
                </div>
                <p class="title-produto text-center mt-4">
                    <b> \${name} </b>
                </p>
                <p class="price-produto text-center">
                    <b>R$\${price},00 </b>
                </p>
                <div class="add-carrinho text-center">
                    <span class="btn-menos"><i class="fas fa-minus"></i></span>
                    <span class="add-numero-itens">0</span>
                    <span class="btn-mais"><i class="fas fa-plus"></i></span>
                    <span class="btn btn-add"><i class="fas fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    `
}