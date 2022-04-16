const colorConfig = (countColorsSelector, configSelector) => {
    const countColors = document.querySelectorAll(countColorsSelector);
    const configs = document.querySelectorAll(configSelector);
    
    countColors.forEach((item, index) => {
        item.addEventListener('click', () => {
            let activeConfig = 0;
            countColors.forEach(count => {
                count.classList.remove('active');
            });
            configs.forEach(config => {
                config.classList.remove('active');
            });
            if(!item.classList.contains('acitve')) {
                item.classList.add('active');
            }
            configs[index].classList.add('active');
        });


    });
};

export default colorConfig;