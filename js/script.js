const   burgerBtn = document.querySelector('.burger-menu__btn'),
        menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.menu__close'),
        body = document.querySelector('body');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active');
    body.classList.add('hidden');
})
closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active');
    body.classList.remove('hidden');
})


class Select  {
    constructor(option){
        this.elements = document.querySelectorAll(option.el);
        
        this.elements.forEach(el => {
            let btn = el.querySelector('.select__btn'),
                icon = el.querySelector('.select__icon'),
                items = el.querySelectorAll('.select__item'); 
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openList(btn, items)
            })
            btn.addEventListener('focusout', () =>  {
                setTimeout(() => {btn.classList.remove('active')}, 100)
            })
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                this.openList(btn, items)
            })
        })
    }
    openList(btnOpen, choose) {
        btnOpen.classList.toggle('active');
        if(btnOpen.classList.contains('active')){
            this.targetItem(choose, btnOpen)
        }
    }
    targetItem(elem, btn){
        elem.forEach(item => {
            item.addEventListener('click', () => {
                elem.forEach(el => el.classList.remove('selected'));
                item.classList.add('selected'); 
                btn.textContent = item.textContent;
                btn.classList.remove('active');
            })
        })
    }
}


const formSelect = new Select({
    el: '.select'
})


class FillForm {
    constructor(option){
        this.form = document.querySelector(option.el); 
        this.inputs = this.form.querySelectorAll('input');
        this.btn = this.form.querySelector('button');  
        this.inputs.forEach(inp => {
            if(inp.getAttribute('data-type') == 'phone'){
                inp.addEventListener('input', () => {
                    let Temp = inp.value.replace(/[^\d]/g, '').substring(0,16); 
                inp.value = Temp;
                }) 
            } 
        }) 
    }
     
     
}

const form = new FillForm({
    el: '.form'
})

 