// 初始化侧边栏 Tooltip
function initSidebarTooltips() {
    // 获取侧边栏容器
    const sidebarWrapper = document.getElementById('sidebar_wrapper');
    if (!sidebarWrapper) {
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 获取侧边栏内容容器
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 查找所有菜单项
    const menuItems = sidebar.querySelectorAll('.teedoc-plugin-sidebar-item a');
    
    menuItems.forEach(item => {
        // 检查是否已经添加过 Tooltip
        if (item.dataset.tooltipAdded) return;
        
        // 标记为已处理
        item.dataset.tooltipAdded = 'true';
        
        // 创建 Tooltip 容器
        const tooltip = document.createElement('div');
        tooltip.className = 'sidebar-tooltip theme'; // 使用主题色样式
        
        // 设置 Tooltip 内容为菜单项的标题
        tooltip.textContent = item.textContent.trim();
        
        // 添加到菜单项
        item.parentNode.appendChild(tooltip);
        item.parentNode.classList.add('sidebar-item');
    });
    
    console.log('Tooltip 样式已应用');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initSidebarTooltips();
    
    // 监听整个文档的变化
    const observer = new MutationObserver(function() {
        setTimeout(initSidebarTooltips, 500);
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});