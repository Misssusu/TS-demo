var Calculator = /** @class */ (function () {
    function Calculator() {
        this.createCalculator();
        this.createOutput();
        this.createBtn();
        this.bindEvents();
    }
    Calculator.prototype.createCalculator = function () {
        this.calculator = document.createElement('div');
        this.calculator.className = 'calculator';
        document.body.appendChild(this.calculator);
    };
    Calculator.prototype.createOutput = function () {
        this.output = document.createElement('div');
        this.output.className = 'output';
        this.output.textContent = '0';
        this.calculator.appendChild(this.output);
    };
    Calculator.prototype.createBtn = function () {
        var _this = this;
        var arr = [
            ['Clear', '/'],
            ['7', '8', '9', 'x'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '=']
        ];
        arr.forEach(function (itemList) {
            var div = document.createElement('div');
            itemList.forEach(function (item) {
                createBtn(item, div);
            });
            _this.calculator.appendChild(div);
        });
        function createBtn(content, cotainer) {
            var btn = document.createElement('button');
            btn.textContent = content;
            cotainer.appendChild(btn);
        }
    };
    Calculator.prototype.bindEvents = function () {
        var _this = this;
        this.calculator.addEventListener('click', function (event) {
            if (event.target instanceof HTMLButtonElement) {
                var content = event.target.textContent;
                //判断点击的按钮类型
                if ('1,2,3,4,5,6,7,8,9,0'.indexOf(content) >= 0) {
                    if (_this.operate) {
                        if (_this.n2) {
                            _this.n2 = parseInt(_this.n2.toString() + content);
                        }
                        else {
                            _this.n2 = parseInt(content);
                        }
                        _this.output.textContent = _this.n2.toString();
                    }
                    else {
                        if (_this.n1) {
                            _this.n1 = parseInt(_this.n1.toString() + content);
                        }
                        else {
                            _this.n1 = parseInt(content);
                        }
                        _this.output.textContent = _this.n1.toString();
                    }
                }
                else if ('+,-,*,/'.indexOf(content) >= 0) {
                    _this.operate = content;
                }
                else if ('='.indexOf(content) >= 0) {
                    if (_this.operate === '+') {
                        _this.result = _this.n1 + _this.n2;
                    }
                    else if (_this.operate === '-') {
                        _this.result = _this.n1 - _this.n2;
                    }
                    else if (_this.operate === '*') {
                        _this.result = _this.n1 * _this.n2;
                    }
                    else if (_this.operate === '/') {
                        _this.result = _this.n1 / _this.n2;
                    }
                    console.log(_this.result);
                    _this.output.textContent = _this.result.toString();
                }
                console.log(_this.n1, _this.operate, _this.n2);
            }
        });
    };
    return Calculator;
}());
new Calculator();
