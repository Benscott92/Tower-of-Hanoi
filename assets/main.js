

let body = document.querySelector('body')

let tower1 = document.querySelector('#first')
let tower2 = document.querySelector('#second')
let tower3 = document.querySelector('#third')

for(let index = 1; index <= 4; index++){
    let block = document.createElement('div')
    
    block.className = 'block' + index
    tower1.append(block)
}
let moveAbleBlock = null
let canMove = false
function selectBlock(block){
    if(canMove === false && block.currentTarget.childElementCount !=0){ 
    let currentTarget = block.currentTarget
    
    moveAbleBlock = currentTarget.lastElementChild
    return canMove = true
    }
    else if(block.currentTarget.childElementCount !=0 && moveAbleBlock.clientWidth > block.currentTarget.lastElementChild.clientWidth){
        moveAbleBlock = null
        canMove = false
        return alert("I'm sorry, Dave. I'm afraid I can't do that")
    } 
        // Quote from '2001: A Space Odyssey'
    else if(canMove === false && block.currentTarget.childElementCount === 0){
        return alert('That Tower Is Empty')
    }
    block.currentTarget.append(moveAbleBlock)
    if(tower3.childElementCount === 4){
        return alert('Victory!! Victory For Zim!!!')
        // Quote from 'Invader Zim'
    }
    moveAbleBlock = null
    return canMove = false
}

tower1.addEventListener('click', selectBlock)

tower2.addEventListener('click', selectBlock)

tower3.addEventListener('click', selectBlock)
