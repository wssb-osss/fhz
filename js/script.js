// 页面滚动时触发动画效果
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
});

// 检测元素是否在视口内
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 添加动画类
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // 检查自动播放
    audio.play().catch(() => {
        // 自动播放失败时，监听用户交互后再播放
        document.body.addEventListener("click", () => {
            audio.play();
        });
    });
});
