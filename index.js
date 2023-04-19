 const card_1 = document.querySelector('.card__item_1');
 const card_2 = document.querySelector('.card__item_2');
 const card_3 = document.querySelector('.card__item_3');
 const popup = document.querySelector(".popup");
 const popupTitle = document.querySelector (".popup__title");
 const popupText = document.querySelector (".popup__text");
 const popupButtonExit = document.querySelector (".popup__button-exit");
 const titleCard_1 = card_1 .querySelector (".card__title");
 const titleCard_2 = card_2.querySelector (".card__title");
 const titleCard_3 = card_3 .querySelector (".card__title");

 function openPopup(elementPopup){
   elementPopup.classList.add("popup__opened");
 }


 function closePopup(elementPopup){
   elementPopup.classList.remove("popup__opened");
 }

 popupButtonExit.addEventListener('click', ()=>{
   closePopup(popup);
 })

 card_1.addEventListener('click', function(){
   popupTitle.textContent=titleCard_1.textContent;
   popupText .textContent =`Наверное не найдется человека, не пробовавшего пельмени.
    А откуда они появились, задумывается не каждый. Заимствовано это слово из пермских языков.
    Кто бы мог подумать, что переводится это вкусное слово, как «хлебное ухо».
    В.В. Похлебкин предположил, что пельмени к нам пришли с Урала в начале 15 века.
    В это же время в документах встречаются фамилии Пельменников и Пельменев.
    Предположили, что они образовались именно от этого слова: “пельмень”.`

    openPopup(popup);
 })


 
 card_2.addEventListener('click', function(){
  popupTitle.textContent=titleCard_2.textContent;
    popupText.textContent =`Это блюдо придумали после того, как в 1552 году впервые в Европу завезли
    из Перу помидоры. Помимо томатов, неаполитанскую пиццу наполняли сыром, морепродуктами, мясом, грибами и овощами.
    В те времена пицца считалась едой бедняков. Но однажды она полюбилась и представителем аристократии.
    Первой, кто не скрыла своей любви к этому народному продукту, 
    была супруга неаполитанского короля Фердинанда IV Мария-Каролина Габсбург-Лотарингская.`

    openPopup(popup);
 })


 card_3.addEventListener('click', function(){
  popupTitle.textContent=titleCard_3.textContent;
    popupText.textContent =`История роллов началась с того, что работая в одном из ресторанов Лос-Анджелеса,
     Ичиро Машита захотел удивить посетителей. Он изменил технологию приготовления классических суши 
     и создал рулетики из риса с добавлением морепродуктов и овощей в качестве начинки.
     Такой вариант подачи традиционного блюда больше соответствовал вкусовым предпочтениям американской публики.
    `
    openPopup(popup);
    
 })