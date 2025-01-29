function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-100px'; // スクロールダウンでナビゲーションバーを完全に隠す
    } else {
        navbar.style.top = '0'; // スクロールアップでナビゲーションバーを表示
    }
    lastScrollTop = scrollTop;
});

document.addEventListener('mousemove', function(e) {
    let navbar = document.getElementById('navbar');
    if (e.clientY < 50) {
        navbar.style.top = '0'; // マウスが画面上部にあるときにナビゲーションバーを表示
    } else if (window.pageYOffset > 0) {
        navbar.style.top = '-100px'; // マウスが画面上部にないときにナビゲーションバーを隠す
    }
});

// Chart.jsを使用してグラフを描画
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('capacityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['最大受け入れ人数', '現在の受け入れ人数'],
            datasets: [{
                label: '人数',
                data: [156, 63],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});