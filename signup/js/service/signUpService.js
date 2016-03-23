'use strict';
app.factory('signUpService',function($http){
	return{
		
		signUp:function(data,scope){
			
			var  api  = 'https://mandrillapp.com/api/1.0/messages/send.json';
			var username = data.userName;
			var lastName = data.lastName;
			var email    = data.userEmail;
			var language = data.userLanguage;
			
			var content = "Hello " + username + " " + lastName + ",";
			
			content += "</br>";
			content += "Thank you for your registration in our website.Here is your information :";
			content += "\n";
			content += "Email : " + email;
			content += "\n";
			content += "Language : " + language;
			
			var message = {
						'key': 'SAMCBFVD5NEqlo8gRTidSw',
						'message': {
						  'from_email': 'dev@your.rentals',
						  'to': [
							  {
								'email': email,
								'name': 'RECIPIENT NAME 1',
								'type': 'to'
							  }
							],
						  'autotext': 'true',
						  'subject': 'Vacasol - confirmation of your registration  !',
						  'html': content
						} 
					};
			
			//send email
			var request = $http({
				method: 'POST',
				url: api,
				data: message,
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			});
			
			request.success(function(data, headers) {
				scope.result='You are signed up successfully';
				console.log('send email success');
			});
			request.error(function(data, headers) {
				scope.result='Your sign up is not success';
				console.log('send email unsuccess');
			});
			
		
		},
		
	}

});