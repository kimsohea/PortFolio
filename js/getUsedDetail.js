$(document).ready(function(){
    let a = location.href.split('?')[1];
    let idx = a.split(`=`)[1];
    $(`.detailContent`).html(`
        <div class="productInfo">
            <figure>
                <img src="`+usedItemId[idx].thumb+`" alt="`+usedItemId[idx].name+`">
            </figure>
            <div class="paraGrup used">
                <h1>`+usedItemId[idx].name+` <span class="titleCaption">`+usedItemId[idx].caption+`</span></h1>
                <dl>
                    <dt>새상품 정가</dt>
                    <dd>`+usedItemId[idx].newListPrice+`</dd>
                    <dt>새상품 판매가</dt>
                    <dd>`+usedItemId[idx].newPrice+`</dd>
                    <dt>알라딘 직접배송 중고</dt>
                    <dd>`+usedItemId[idx].usedDirect+`</dd>
                    <dt>매장 배송 중고</dt>
                    <dd>`+usedItemId[idx].usedStore+`</dd>
                    <dt>판매자 배송 중고</dt>
                    <dd>`+usedItemId[idx].usedSeller+`</dd>
                </dl>
                <table>
                    <caption>알라딘에 팔기 예상가</caption>
                    <tr>
                        <th>최상</th>
                        <th>상</th>
                        <th>중</th>
                    </tr>
                    <tr>
                        <td>`+usedItemId[idx].bestProduct+`</td>
                        <td>`+usedItemId[idx].betterProduct+`</td>
                        <td>`+usedItemId[idx].goodProduct+`</td>
                    </tr>
                </table>
            </div>
            <form>
                <button>알라딘에 팔기</button>
                <button>회원에게 팔기</button>
                <button>중고등록 알림 신청</button>
            </form>
        </div>
        <div class="subBanner swiper">
            <ul class="swiper-wrapper">
                <li class="swiper-slide"><a href="#"><img src="./img/subbanner03_01.jpg" alt="품절/절판샵 이 광활한 우주에서 이미 사라진 책을 읽는다는 것 품절/절판 베스트 도서 보러가기"></a></li>
                <li class="swiper-slide"><a href="#"><img src="./img/subbanner03_02.jpg" alt="대학교 장터 대학교 중고 장터 우리 학교 중고교재 확인하기 대학교 장터는 알라딘의 중고 C2C시스템으로 운영됩니다."></a></li>
                <li class="swiper-slide"><a href="#"><img src="./img/subbanner03_03.jpg" alt="자주묻는 질문 (FAQ) 알라딘에 팔기 간단 안내 많이 받은 질문으로 구성한 FAQ 1:1 고객 센터에서 느린 답장 기다리기 보단 빠른 답변 보기"></a></li>
                <li class="swiper-slide"><a href="#"><img src="./img/subbanner03_04.jpg" alt="첫 이용자를 위한 안내 회원에게 중고팔기 스텝별로 확인해보기 회원이시더라도 중고상품 판매를 위해서는 '판매자매니저'로 등록!"></a></li>
                <li class="swiper-slide"><a href="#"><img src="./img/subbanner03_05.jpg" alt="알라딘 서점 이벤트 블로그 중고매장 소식 새로운 매장 정보를 제공하는 블로그 What’s Up? 새로운 매장 그리고 이벤트들을 블로그에서 확인해보세요"></a></li>
            </ul>
        </div>`);
})