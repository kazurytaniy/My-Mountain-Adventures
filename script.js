let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // 3秒ごとに画像を切り替える
}

document.addEventListener('DOMContentLoaded', function() {
    // 全ての.item要素を取得
    const items = document.querySelectorAll('.item');
    
    items.forEach(function(item) {
        const img = item.querySelector('img');
        
        // 初期状態で画像を非表示にする
        img.style.opacity = '0';
        
        // Intersection Observerの設定
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    img.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        // 画像の監視を開始
        observer.observe(item);
        
        // マウスが要素の上にあるとき
        item.addEventListener("mouseover", function () {
            img.classList.add("hover");
        });

        // マウスが要素から離れたとき
        item.addEventListener("mouseout", function () {
            img.classList.remove("hover");
        });
    });
});