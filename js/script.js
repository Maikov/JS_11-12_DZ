 $(function() {

  	var html = $('#cv').html();
  	var data = {
      name: 'Майков Антон Петрович',
  		img: '"img/anton.jpg"',
  		speciality: 'Студент GoIT (FED)',
  		firstLine: 'Моя цель освоить профессию Front-End разработчика',
  		secondLine: 'Глобальная цель: купить квартиру',
  		thirdLine: 'Меня заводит результат моей работы',
      phoneNumber: '+380956298741',
  		vk: '"https://www.facebook.com/maikoanton"',
  		feedback: 'Согласен много учиться, чтобы найти работу и делать то, что нравится!',
  	};
   	var content = tmpl(html, data);
   
  	$('body').append(content);
  	
    $('.carousel-hider').carousel();
  });