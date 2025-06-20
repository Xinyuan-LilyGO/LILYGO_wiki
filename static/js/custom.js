// static/js/custom.js

// 初始化侧边栏 Tooltip
function initSidebarTooltips() {
    // 获取侧边栏容器
    const sidebarContainer = document.querySelector('.teedoc-plugin-sidebar-content');
    if (!sidebarContainer) {
        console.log('Sidebar container not found, retrying...');
        setTimeout(initSidebarTooltips, 500);
        return;
    }
    
    // 遍历所有菜单项
    const menuItems = sidebarContainer.querySelectorAll('.teedoc-plugin-sidebar-item');
    
    menuItems.forEach(item => {
        // 检查是否已经添加过 Tooltip
        if (item.querySelector('.sidebar-tooltip')) return;
        
        // 获取菜单链接
        const link = item.querySelector('a');
        if (!link) return;
        
        // 创建 Tooltip 容器
        const tooltip = document.createElement('div');
        tooltip.className = 'sidebar-tooltip';
        
        // 设置 Tooltip 内容为菜单项的标题
        tooltip.textContent = link.textContent.trim();
        
        // 添加到菜单项
        item.appendChild(tooltip);
        item.classList.add('sidebar-item');
    });
    
    // 添加分类标题样式
    const categoryTitles = sidebarContainer.querySelectorAll('.teedoc-plugin-sidebar-category-title');
    categoryTitles.forEach(title => {
        title.classList.add('sidebar-category');
    });
    
    console.log('Sidebar tooltips initialized');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化侧边栏 Tooltip
    initSidebarTooltips();
    
    // 监听侧边栏变化（如果动态加载）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                initSidebarTooltips();
            }
        });
    });
    
    const sidebar = document.querySelector('.teedoc-plugin-sidebar-content');
    if (sidebar) {
        observer.observe(sidebar, {
            childList: true,
            subtree: true
        });
    }
    
    // 添加折叠/展开按钮的 Tooltip
    const collapseButtons = document.querySelectorAll('.teedoc-plugin-sidebar-collapse-btn');
    collapseButtons.forEach(button => {
        // 创建 Tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'sidebar-tooltip';
        
        // 根据当前状态设置 Tooltip 内容
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        tooltip.textContent = isExpanded ? '收起' : '展开';
        
        // 添加到按钮
        button.appendChild(tooltip);
        
        // 更新状态变化
        button.addEventListener('click', function() {
            setTimeout(() => {
                const newState = button.getAttribute('aria-expanded') === 'true';
                tooltip.textContent = newState ? '收起' : '展开';
            }, 100);
        });
    });
});