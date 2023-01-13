$(document).ready(function(){
    let a = location.href.split('?')[1];
    let idx = a.split(`=`)[1];
    // console.log(idx);
    $(`.detailContent`).html(`
    <p class="productCategory">`+itemId[idx].genre+`</p>
    <div class="productInfo">
        <figure>
            <img src="`+itemId[idx].thumb+`" alt="`+itemId[idx].title+`">
        </figure>
        <div class="paraGrup">
            <p class="productEvent">`+itemId[idx].event+`</p>
            <h1>`+itemId[idx].title+`</h1>
            <dl>
                <dt>정가</dt>
                <dd>`+itemId[idx].listPrice+`</dd>
                <dt>판매가</dt>
                <dd>`+itemId[idx].price+`</dd>
                <dt>마일리지</dt>
                <dd>`+itemId[idx].mileage+`</dd>
                <dt>배송료</dt>
                <dd>`+itemId[idx].deliveryFee+`</dd>
                <dt>수령예상일</dt>
                <dd>`+itemId[idx].receiptDate+`</dd>
            </dl>
            <p>`+itemId[idx].bookPoint+`</p>
            <figure>
                <img src="`+itemId[idx].grade+`" alt="평점">
            </figure>
            <p>100자평(11)  리뷰(3)</p>
            <ul class="priceInfo">
                <li>카드/간편결제 할인</li>
                <li>무이자 할부</li>
                <li>소득공제 570원</li>
            </ul>
            <form>
                <label for="count">수량</label>
                <input type="number" id="count" min="1" value="1">
                <button>바로구매</button>
                <button><figure><img src="./img/cart.png" alt="장바구니 아이콘"></figure></button>
                <button><figure><img src="./img/present.png" alt="선물하기 아이콘"></figure></button>
                <button><figure><img src="./img/plus.png" alt="추가사항 아이콘"></figure></button>
            </form>
            <p>중고 등록알림 신청</p>
            <p>중고로 팔기</p>
        </div>
    `);
});