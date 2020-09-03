//                      Bài 1
// $(document).ready(function () {
//     $('.nutso2').click(function(event) {
//         $('.dangky').animate({opacity: 0, marginLeft: -150});
//         $('.dangnhap').animate({opacity: 1, marginLeft: 0});
//     });

//     $('.nutso1').click(function(event) {
//         $('.dangky').animate({opacity: 1, marginLeft: 0});
//         $('.dangnhap').animate({opacity: 0, marginLeft: -150});
//     });
// });


//                      Bài 2

// $(document).ready(function () {
//     // Cho tất cả nội dung thu lại
//     $('.contentblock').slideUp();

//     $('.block h3').click(function() {
//         // $('.contentblock').slideUp();

//         $(this).next('.contentblock').slideToggle();
//         $(this).toggleClass('blue');
        
//     });
// });

				// bài 3
// $(document).ready(function(){
// 	$('.btn').click(function(){
// 		$('.boxchild, .background').addClass('show');
// 	});

// 	$('.background').click(function(){
// 		$('.boxchild, .background').removeClass('show');
// 	});
// });


	// Bài 4 animation 
	// Giải phương trình bậc 2.	
// $(document).ready(function() {
// 	$('.Send').click(function() {
// 	 	let a = document.getElementById('ip1').value;
// 	 	let b = document.getElementById('ip2').value;
// 	 	let c = document.getElementById('ip3').value;
// 	 	let denta = (b*b) - (4*a*c);

// 	 	if (denta == 0) {
// 	 		console.log('Phương trình có 1 nghiệm x=' + ((-b/(2*a))));
// 	 	}
// 	 	if (denta < 0) {
// 	 		console.log('Phương trình vô nghiệm')
// 	 	}
// 	 	if (denta > 0){
// 	 		console.log('Phương trình có nghiệm x1 =' + ((-b + (Math.sqrt(denta))/(2*a))));
// 	 		console.log('Phương trình có nghiệm x2 =' + ((-b - (Math.sqrt(denta))/(2*a))));
// 	 	}
// 	 });
// });


 




	// var a = confirm('hello');
	// var second = 3;
	// var b = setInterval(function() {
	// 	if (a ==1){
	// 		if ( second == 0) {
	// 			clearInterval(b);
	// 		}
	// 	var abc = document.getElementById('aaa');
	// 	abc.innerHTML = second;
	// 	second--;
	// 	}
	// }, 1000);


	// duyệt mảng và đưa vào html
	// var mang = ['Hà Nội', 'Ninh Bình', 'Hồ Chí Minh','Đà Nẵng'];
	
	// var select = document.getElementById('choose');


	// var html = '';
	// for (var i = 0; i < mang.length; i++){

	// 	html += '<option>' + mang[i] + '</option>';

	// 	select.innerHTML = html;
	// }

	// Duyệt mảng bên trong chứa các object.
	// var ae = [
	// 	{
	// 		name: 'Kiên',
	// 		age: 21
	// 	},

	// 	{
	// 		name: 'Linh',
	// 		age: 24
	// 	}

	// ];

	// var html = '<ul>';

	// 	for(var i = 0; i < ae.length; i++){
	// 		html += '<li>';
	// 			html += '<h3>' + ae[i].name + '</h3>';
	// 			html += '<p>' + ae[i].age + '</p>';
	// 		html += '</li>';
	// 	}

	// html += '</ul>';

	// var sibling = document.getElementById('sibling');

	// sibling.innerHTML = html;
	

	// duyệt json vào html bằng JSON.parse
	// var sibling = document.querySelector('#sibling');

				/* cách set và get attribute trong Javascript */
	// sibling.className = 'Hello';
	// sibling.setAttribute('tittle', 'heading');
	// sibling.getAttribute('tittle', 'heading');
	// var myJson ='[{"name" : "Nguyen kien", "age": 21},{"name" : "Trung kien", "age": 22}]';
	// var myArray = JSON.parse(myJson);

	// var length = myArray.length;

	// var html = '<ul>';
	// 	for(var i = 0; i < length; i++){
	// 		var a = myArray[i];
	// 		html += '<li>' + a.name + '</li>';
	// 		html += '<li>' + a.age + '</li>';
	// 	}
	// html += '</ul>';	

	// sibling.innerHTML = html;


				/* duyệt phần tử trên localStorage  */
				// localStorage.setItem('key', 'nộidung') lưu vào storage
				// localStorage.getItem('key', 'nộidung') lấy ra
				// localStorage.removeItem('key') xóa đi


	// var list = localStorage.getItem('students');

	// var listt = JSON.parse(list);
	// // console.log(listt);

	// var length = listt.length;

	// var html = '<ul>'
	// 	for(var i = 0; i < length; i++){
	// 	var bla = listt[i];
	// 	html += '<li>' + bla.name + '</li>';
	// 	html += '<li>' + bla.age + '</li>';
	// };
	// html += '</ul>'


	// var sib = document.querySelector('#sibling');
	// sib.innerHTML = html;



				/* AJAX javascript */

		/* Tạo 1 XMLHttpRequest */
	var http = new XMLHttpRequest();

	http.open("GET","https://jsonplaceholder.typicode.com/posts", true);
	http.send();
		/* Chú giải: http.open() là chỉ định loại yêu cầu
					 	trong đó GET là phương thức yêu cầu (có 2 loại GET và POST)
					 	https://jsonplaceholder.typicode.com/posts là đường dẫn API
					 	true là bất đồng bộ, false là đồng bộ.
					 http.send() là gửi yêu cầu đi
		 */
	console.log(http);

	http.onreadystatechange = function() {
		var abc = JSON.parse(http.response)
			/* Lọc phần tử trong mảng bằng hàm filter() */
		var check = abc.filter(function checkUserId(user) {
			return user.userId === 8;
		});

		var change = check.map(function(item) {
			return item.id = 70,  item.userId = 1;
		});
			/* Kết thúc lọc và duyệt bình thường */
		var length = check.length;
		var html = '<ul>'
			for(var i= 0; i < length; i++){
				var list = check[i];
				html += '<li class="helo">'  
					html += '<strong>' + list.userId + '</strong>';
					html += '<strong>' + list.id + '</strong>'
					html += '<p>' + list.title + '</p>'
				html += '</li>' + '<hr>'
				
			}
		html += '</ul>'
		ae.innerHTML = html;
	}
	var ae = document.querySelector('#sibling');







	// var abc = document.querySelector('#aaa');
	 // abc.innerText = 'Hello';

	// abc.textContent = 'Hello';


// $(document).ready(function() {

// 	setInterval(function(){
// 		$('.btn-next').trigger('click');
// 	}, 4000);

// 	// button next
// 	$('.btn-next').click(function() {
// 		// cancel time setting
		
// 		// đặt biến cho cái thẻ div đằng sau class active
// 		let behind = $('.active').next();

// 		let location = $('.active-btn').index() + 1;
// 		$('.btn-small ul li').removeClass('active-btn');
// 		if ( location == $('.btn-small ul li').length) {
// 			location = 0;
// 		}

// 		$('.btn-small ul li:nth-child('+ (location +1) +')').addClass('active-btn');



// 		if (behind.length == 1) {
// 				$('.active').addClass('hidden').one('webkitAnimationEnd', function(event) {
// 				$('.hidden').removeClass('hidden');
// 				$('.active').removeClass('active');
// 			});
// 			behind.addClass('show-up').one('webkitAnimationEnd', function(event) {
// 				$('.show-up').addClass('active').removeClass('show-up');
// 			});
// 		}
// 		else {
// 			$('.active').addClass('hidden').one('webkitAnimationEnd', function(event) {
// 			$('.hidden').removeClass('hidden');
// 		});

// 			$('.image:nth-child(1)').addClass('show-up').one('webkitAnimationEnd', function(event) {
// 				// sau khi chạy xong sẽ xóa active ở cái cuối cùng và thêm vào cái đầu tiên.
// 				$('.active').removeClass('active');
// 				$('.show-up').addClass('active').removeClass('show-up');

// 			});
// 		}

// 	});

// 	// button previous
// 	$('.btn-previous').click(function() {

// 		let front = $('.active').prev();
// 		let location = $('.active-btn').index() + 1;
// 		$('.btn-small ul li').removeClass('active-btn');
// 		if ( location == 1) {
// 			location = $('.btn-small ul li').length;
// 		}

// 		$('.btn-small ul li:nth-child('+ (location -1) +')').addClass('active-btn');


// 		if (front.length == 1) {
// 				$('.active').addClass('hidden-prev').one('webkitAnimationEnd', function(event) {
// 				$('.hidden-prev').removeClass('hidden-prev');
				
// 			});
// 			front.addClass('show-prev').one('webkitAnimationEnd', function(event) {
// 				$('.active').removeClass('active');
// 				$('.show-prev').addClass('active').removeClass('show-prev');
// 			});
// 		}
// 		else {
// 			$('.active').addClass('hidden-prev').one('webkitAnimationEnd', function(event) {
// 			$('.hidden-prev').removeClass('hidden-prev');
// 		});

// 			$('.image:last-child()').addClass('show-prev').one('webkitAnimationEnd', function(event) {
// 				$('.active').removeClass('active');
// 				$('.show-prev').addClass('active').removeClass('show-prev');

// 			});
// 		}
// 	});

// 	//list button under image

// 	$('.btn-small ul li').click(function() {
// 		// Remove all class avtive-btn.
// 		$('.btn-small ul li').removeClass('active-btn');
// 		// Add class active-btn when clicking on it.
// 		$(this).addClass('active-btn');

// 		$('.active').addClass('hidden').one('webkitAnimationEnd', function(event) {
// 			$('.hidden').removeClass('hidden');
// 		});

// 			$('.image:nth-child('+ ($(this).index() + 1) +')').addClass('show-up').one('webkitAnimationEnd', function(event) {
// 				// sau khi chạy xong sẽ xóa active ở cái cuối cùng và thêm vào cái đầu tiên.
// 				$('.active').removeClass('active');
// 				$('.show-up').addClass('active').removeClass('show-up');

// 			});
// 	});

// });

