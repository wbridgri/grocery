/**
 * click on a cell
 * get price of each item in cell
 * when a cell is clicked, freeze cell
 * enter weight for item 
 * calculate weight times price 
 * display results 
 */
//1 Build Dataset
const data = [
    {
        id: 1,
        item: 'romaTomato',
        itemDisplay: 'Roma Tomato',
        pricePerPound: 0.70

    },
    {
        id: 2,
        item: 'cherryTomato',
        itemDisplay: 'Cherry Tomato',
        pricePerPound: 1.20

    },
    {
        id: 3,
        item: 'bellPepper',
        itemDisplay: 'Bell Pepper',
        pricePerPound: 1.00

    },
    {
        id: 4,
        item: 'jalapenoPepper',
        itemDisplay: 'Jalapeno Pepper',
        pricePerPound: 2.00

    },
    {
        id: 5,
        item: 'greenOnion',
        itemDisplay: 'Green Onion',
        pricePerPound: 0.75

    },
    {
        id: 6,
        item: 'yellowOnion',
        itemDisplay: 'Yellow Onion',
        pricePerPound: 1.00

    },
    {
        id: 7,
        item: 'redOnion',
        itemDisplay: 'Red Onion',
        pricePerPound: 1.75

    },
    {
        id: 8,
        item: 'whiteOnion',
        itemDisplay: 'White Onion',
        pricePerPound: 1.75

    },
    {
        id: 9,
        item: 'arugala',
        itemDisplay: 'Arugala',
        pricePerPound: 2.50 

    }
]
// 2 Display data on browser 

//.map() => return a copied array after performing a task on an original array.

// let arr1 = ['JOSH', 'MARY', 'EZEKIEL']

// let arr2 = arr1.map(name => name.toLowerCase())


let results = {
    item: '',
    weight: 0,
    price: 0,
    pricePerPound: 0
}



const cells = data.map(item => {
    const cell = document.createElement('div')
    cell.classList.add('item')
    cell.setAttribute('data-item', `${item.item}`)
    cell.innerText = `${item.itemDisplay} - ${item.pricePerPound} per lb.`
    return cell
})

cells.forEach(cell => {

    document.getElementById('itemSection').appendChild(cell)
//3 click on a cell
    cell.addEventListener('click', ()=>
    {
        console.log('clicked')

        const itemDisplay = document.getElementById('itemDisplay')
        for(let obj of data) {
            if(obj.item == cell.getAttribute('data-item')) {
                results.item = obj.itemDisplay
                results.pricePerPound = obj.pricePerPound

                itemDisplay.innerText = results.item


            }
        }
    })
})

const setWeight = () => {
    const scale = parseFloat(document.getElementById('scale').value)

    // console.log(scale)

    results.weight = scale

    setPrice(results.weight, results.pricePerPound)
}

const setPrice = (w, p) => {

    results.price = w * p
    return results.price


}

const displayResults = ()=> {
    const itemDisplay = document.getElementById('itemDisplay')
    const weightDisplay = document.getElementById('weightDisplay')
    const priceDisplay = document.getElementById('priceDisplay')


    itemDisplay.innerText = results.item
    weightDisplay.innerText = results.weight
    priceDisplay.innerText = (results.price).toFixed(2)
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    setWeight()
    displayResults()

})


