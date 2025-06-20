// static/js/custom.js

document.addEventListener('DOMContentLoaded', function() {
    // 为所有标题（h1到h6）添加提示效果
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headers.forEach(header => {
        // 获取标题的data-tooltip属性
        const tooltipText = header.getAttribute('data-tooltip');
        
        // 如果有data-tooltip属性，则添加提示
        if (tooltipText) {
            // 创建提示容器
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = tooltipText;
            
            // 添加到标题
            header.appendChild(tooltip);
            header.classList.add('section-title');
        }
    });
});