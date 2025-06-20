// static/js/custom.js

// 初始化侧边栏 Tooltip
function initSidebarTooltips() {
    // 获取侧边栏容器 - 使用您提供的实际 ID
    const sidebarWrapper = document.getElementById('sidebar_wrapper');
    if (!sidebarWrapper) {
        console.log('Sidebar wrapper not found, retrying...');
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 获取侧边栏内容容器
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.log('Sidebar container not found, retrying...');
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 查找所有菜单项 - 使用更可靠的选择器
    const menuItems = sidebar.querySelectorAll('a'); // 选择所有链接
    
    menuItems.forEach(item => {
        // 检查是否已经添加过 Tooltip
        if (item.dataset.tooltipAdded) return;
        
        // 标记为已处理
        item.dataset.tooltipAdded = 'true';
        
        // 创建 Tooltip 容器
        const tooltip = document.createElement('div');
        tooltip.className = 'sidebar-tooltip';
        
        // 设置 Tooltip 内容为菜单项的标题
        tooltip.textContent = item.textContent.trim();
        
        // 添加到菜单项
        item.appendChild(tooltip);
        
        // 添加悬停类
        item.classList.add('sidebar-item');
    });
    
    console.log('Sidebar tooltips initialized successfully!');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化侧边栏 Tooltip
    initSidebarTooltips();
    
    // 监听整个文档的变化
    const observer = new MutationObserver(function(mutations) {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                // 检查是否有新添加的节点
                for (const node of mutation.addedNodes) {
                    // 检查是否添加了侧边栏
                    if (node.id === 'sidebar_wrapper' || node.id === 'sidebar') {
                        console.log('Sidebar added dynamically, initializing...');
                        setTimeout(initSidebarTooltips, 500);
                    }
                }
            }
        }
    });
    
    // 观察整个文档的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});