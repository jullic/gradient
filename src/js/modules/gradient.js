let allColors = [];
let gradientValue;

const gradient = (inputSelector) => {
    const inputs = document.querySelectorAll(inputSelector);
    const correctChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F'];
    const gradientConfigBtns = document.querySelectorAll('.gradient__config-btn');
    const gradientConfigs = document.querySelectorAll('.gradient__config');
    class Input {
        constructor (input) {
            this.input = input;
            this.value = this.input.value;
            this.colorBtn = this.input.parentElement.parentElement.children[0];
            this.correctChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
        }
        init() {
            this.input.addEventListener('input', () => {
                this.lenght = this.input.value.length;
                this.checkLenght();
                this.checkCorrect();

                this.lastValue = this.input.value;
            }); 
            this.input.addEventListener('change', () => {
                this.lastValue = this.input.value;
            });
            this.colorBtn.addEventListener('click', () => {
                this.randomColor();
            });
            
        }
        checkLenght() {
            if (this.lenght > 6) {
                this.checkValue();
            }
        }
        checkCorrect() {
            this.input.value = this.input.value.replace(/[^0-9a-f]/gi, '');
        }
        checkValue() {
            if (this.lastValue !== this.value) {
                this.input.value = this.lastValue;
            }
        }
        randomColor() {
            this.input.value = '';
            for (let i = 0; i < 6; i++) {
                let random = Math.round(Math.random() * 16);
                this.input.value += correctChars[random];
            }
            this.lastValue = this.input.value;
        }
    }

    class Config {
        constructor(config) {
            this.config = config;
            this.inputs = this.config.querySelectorAll('input');
            this.mainBtn = this.config.querySelector('.gradient__config-btn');
            this.correctChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
            this.place = document.querySelector('.gradient__place');
            this.btns = this.config.querySelectorAll('button');
        }
        init() {
            this.mainBtn.addEventListener('click', () => {
                this.randomColor();
            });
            this.btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.showColor();
                    allColors = this.colors;
                    gradientValue = this.gradient;
                });
            });
            this.inputs.forEach(input => {
                input.addEventListener('change', () => {
                    this.showColor();
                    allColors = this.colors;
                    gradientValue = this.gradient;
                });
            })
        }   
        randomColor() {
            for (let i = 0; i < this.inputs.length; i++) {
                this.inputs[i].value = '';
                for (let j = 0; j < 6; j++) {
                    let random = Math.round(Math.random() * 16);
                    this.inputs[i].value += correctChars[random];
                }
            }
        }
        showColor() {
            let stringColor = '';
            let cssText = 'linear-gradient(45deg,'
            let colors;
            for (let i = 0; i < this.inputs.length; i++) {
                stringColor += this.inputs[i].value;
                stringColor += ' ';
                if (this.inputs[i].value === '') {
                    return;
                }
            }   
            colors = stringColor.split(' ');
            colors.pop();
            this.colors = colors;
            
            for (let i = 0; i < colors.length; i++) {
                cssText += ' #';
                if (i < colors.length - 1) {
                    cssText += colors[i] + ',';
                }
                else {
                    cssText += colors[i];
                }
            }
            cssText += ')';
            this.gradient = cssText;
            this.place.style.background = cssText;
        }
    }
    inputs.forEach(input => {
        new Input(input).init();
    });
    gradientConfigs.forEach(config => {
        new Config(config).init();
    })

    gradientConfigBtns.forEach((gradientConfigBtn, index) => {
        gradientConfigBtn.addEventListener('click', () => {

        });
        
    });

    // document.body.style.background = 'linear-gradient(45deg, #fff, #000)';
};

export {gradient, allColors, gradientValue};