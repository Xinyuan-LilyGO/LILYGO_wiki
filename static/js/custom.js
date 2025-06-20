// static/js/custom.js

// 初始化侧边栏 Tooltip
function initSidebarTooltips() {
    // 获取侧边栏容器 - 使用更可靠的选择器
    const sidebarContainer = document.querySelector('.teedoc-plugin-sidebar');
    if (!sidebarContainer) {
        console.log('Sidebar container not found, retrying...');
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 确保侧边栏内容已加载
    const sidebarContent = sidebarContainer.querySelector('.teedoc-plugin-sidebar-content');
    if (!sidebarContent) {
        console.log('Sidebar content not found, retrying...');
        setTimeout(initSidebarTooltips, 300);
        return;
    }
    
    // 遍历所有菜单项
    const menuItems = sidebarContent.querySelectorAll('.teedoc-plugin-sidebar-item');
    
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
    const categoryTitles = sidebarContent.querySelectorAll('.teedoc-plugin-sidebar-category-title');
    categoryTitles.forEach(title => {
        title.classList.add('sidebar-category');
    });
    
    console.log('Sidebar tooltips initialized successfully!');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化侧边栏 Tooltip
    initSidebarTooltips();
    
    // 监听整个文档的变化（如果动态加载）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // 检查是否有新节点添加
            if (mutation.addedNodes.length) {
                // 检查是否添加了侧边栏
                let foundSidebar = false;
                mutation.addedNodes.forEach(node => {
                    if (node.classList && node.classList.contains('teedoc-plugin-sidebar')) {
                        foundSidebar = true;
                    }
                });
                
                if (foundSidebar) {
                    console.log('Sidebar added dynamically, initializing...');
                    initSidebarTooltips();
                }
            }
        });
    });
    
    // 观察整个文档的变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // 添加折叠/展开按钮的 Tooltip
    setTimeout(() => {
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
    }, 1000);
});