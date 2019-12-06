class Calculator{
    public calculator: HTMLElement;
    public output: HTMLElement;
    public n1: number;
    public n2: number;
    public operate: string;
    public result: number;
    constructor(){
        this.createCalculator();
        this.createOutput();
        this.createBtn();
        this.bindEvents()
    }
    createCalculator(){
        this.calculator = document.createElement('div');
        this.calculator.className = 'calculator';
        document.body.appendChild(this.calculator);
    }
    createOutput(){
        this.output = document.createElement('div');
        this.output.className = 'output';
        this.output.textContent = '0';
        this.calculator.appendChild(this.output)
    }
    createBtn(){
        let arr: Array<Array<string>> = [
            ['Clear','/'],
            ['7','8','9','x'],
            ['4','5','6','-'],
            ['1','2','3','+'],
            ['0','.','=']
        ];
        arr.forEach((itemList: Array<string>) => {
            let div = document.createElement('div');
            itemList.forEach((item: string) => {
                createBtn(item,div);
            });
            this.calculator.appendChild(div)
        });
        function createBtn(content: string, cotainer: HTMLElement){
            let btn: HTMLButtonElement = document.createElement('button');
            btn.textContent = content;
            cotainer.appendChild(btn);
        }
    }
    bindEvents(){
        this.calculator.addEventListener('click',(event)=>{
            if(event.target instanceof HTMLButtonElement){
                let content: string = event.target.textContent;
                //判断点击的按钮类型
                if('1,2,3,4,5,6,7,8,9,0'.indexOf(content)>=0){
                    if(this.operate){
                        if(this.n2) {
                            this.n2 = parseInt(this.n2.toString() + content);
                        }else {
                            this.n2 = parseInt(content)
                        }
                        this.output.textContent = this.n2.toString()

                    }else {
                        if(this.n1) {
                            this.n1 = parseInt(this.n1.toString() + content);
                        }else {
                            this.n1 = parseInt(content)
                        }
                        this.output.textContent = this.n1.toString()

                    }
                }else if('+,-,*,/'.indexOf(content)>=0){
                    this.operate = content;
                }else if('='.indexOf(content)>=0){
                    if(this.operate === '+'){
                        this.result = this.n1 + this.n2;
                    }else if(this.operate === '-'){
                        this.result = this.n1 - this.n2;
                    }else if(this.operate === '*'){
                        this.result = this.n1 * this.n2;
                    }else if(this.operate === '/'){
                        this.result = this.n1 / this.n2
                    }
                    console.log(this.result);
                    this.output.textContent = this.result.toString()
                }
                console.log(this.n1,this.operate,this.n2)
            }
        })
    }
}
new Calculator()



