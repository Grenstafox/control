const cards          = document.getElementById('cards')
const items          = document.getElementById('items')

const templateCard   = document.getElementById('template-card').content 
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content 

const fragmento      = document.createDocumentFragment()

let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

items.addEventListener('click', e => {
    addCarrito(e)
})

cards.addEventListener('click', e => {
    btnAccion(e)
})

const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
        mostrarProductos(data)
    }catch (error) {
        console.log(error)
    }
}

//mostrarProductos

    const mostrarProductos = data => {
        console.log(data)
        data.forEach(producto => {
            templateCard.querySelector('h5').textContent = producto.title
            templateCard.querySelector('p').textContent = producto.precio
            templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
            templateCard.querySelector('.btn-dark').dataset.id = producto.id
            const clone = templateCard.cloneNode(true)
            fragmento.appendChild(clone)
        });
        items.appendChild(fragmento)

    }

    const addCarrito = e => {
        //console.log(e.target)
        //console.log(e.target.classlist.contains('btn-dark'))

        if(e.target.classList.contains('btn-dark')){
            setCarrito(e.target.parentElement)
        }
        e.stopPropagation()

    }

    const setCarrito = objeto =>{
        //console.log(objeto)
        const producto ={
            id: objeto.querySelector('.btn-dark').dataset.id,
            title: objeto.querySelector('h5').textContent,
            precio: objeto.querySelector('p').textContent,
            cantidad: 1
        }

        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }
        carrito[producto.id] = {...producto}
        mostrarCarrito()
    }

    const mostrarCarrito = () => {
        //console.log(carrito)
        //reset items cada vez que compre
        items.innerHTML=''
        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector('th').textContent = producto.id
            templateCarrito.querySelectorAll('td')[0].textContent = producto.title
            templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            templateCarrito.querySelector('.btn-info').dataset.id = producto.id
            templateCarrito.querySelector('.brn-danger').dataset.id = producto.id
            templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

            const cloneProducto = templateCarrito.cloneNode(true)
            fragmento.appendChild(cloneProducto)
        })
        items.appendChild(fragmento)

        mostrarFooter() 
    }
    const mostrarFooter = () => {

        mostrarFooter.innerHTML = ''
        if(Object.keys(carrito).length === 0) {
            mostrarFooter.innerHTML =
            <th scope="row" colspan="5">carrito vacio - comience a comprar !</th>
        }
    }