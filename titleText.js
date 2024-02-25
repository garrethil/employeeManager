const cfonts = require('cfonts');

function renderTitle() {
    cfonts.say('Employee\nManager', {
        font: '3d',              
        align: 'left',              
        colors: ['green', 'blue'],         
        background: 'transparent',  
        letterSpacing: 1,           
        lineHeight: 1,              
        space: true,         
        maxLength: '0',           
    });
    
}

module.exports = renderTitle;