//1.创建0-9数字按钮并显示在页面上
var calculator = document.createElement('div');
var output = document.createElement('div');
output.className = 'output';
output.textContent = '0';
calculator.className = 'calculator';
document.body.appendChild(calculator);
calculator.appendChild(output);
function createBtn(content, cotainer) {
    var btn = document.createElement('button');
    btn.textContent = content;
    cotainer.appendChild(btn);
}
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
    calculator.appendChild(div);
});
var n1, n2, operate, result;
calculator.addEventListener('click', function (event) {
    if (event.target instanceof HTMLButtonElement) {
        var content = event.target.textContent;
        if ('1,2,3,4,5,6,7,8,9,0'.indexOf(content) >= 0) {
            if (operate) {
                if (n2) {
                    n2 = parseInt(n2.toString() + content);
                }
                else {
                    n2 = parseInt(content);
                }
            }
            else {
                if (n1) {
                    n1 = parseInt(n1.toString() + content);
                }
                else {
                    n1 = parseInt(content);
                }
            }
        }
        else if ('+,-,*,/'.indexOf(content) >= 0) {
            operate = content;
        }
        else if ('='.indexOf(content) >= 0) {
            if (operate === '+') {
                result = n1 + n2;
            }
            else if (operate === '-') {
                result = n1 - n2;
            }
            else if (operate === '*') {
                result = n1 * n2;
            }
            else if (operate === '/') {
                result = n1 / n2;
            }
            console.log(result);
            output.textContent = result.toString();
        }
        console.log(n1, operate, n2);
    }
});
