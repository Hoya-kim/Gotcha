let tabBtn = document.querySelectorAll('.viewTab-btnMove');

let basicInfo = document.querySelector('.basic-info');
let contentDetail = document.querySelector('.content-detail');
let similarContent = document.querySelector('.similar-content');
let viewTab = document.querySelector('.viewTab');

//탭 생성 및 이미지 처리
tabBtn[0].addEventListener('click', function(e){
  contentDetail.style.display = 'none';
  similarContent.style.display = 'none';
  basicInfo.style.display = 'block';
  viewTab.setAttribute('style','backdrop-filter:none;');
});
tabBtn[1].addEventListener('click', function(e){
  similarContent.style.display = 'none';
  basicInfo.style.display = 'none';
  contentDetail.style.display = 'flex';
  viewTab.setAttribute('style','backdrop-filter:brightness(30%);');
});
tabBtn[2].addEventListener('click', function(e){
  contentDetail.style.display = 'none';
  basicInfo.style.display = 'none';
  similarContent.style.display = 'block';
  viewTab.setAttribute('style','backdrop-filter:brightness(30%);');
});
