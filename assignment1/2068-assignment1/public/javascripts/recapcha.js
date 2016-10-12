/* 
    File name: recapcha.js
    Author: Matthew Walichnowsky
    Website name: walichnowsky.com
    File description: This page contains my Google capcha function.
*/

$(document).ready(function() 
{
	$('#comment_form').submit(function() 
	{
		$(this).ajaxSubmit(
		{
			error: function(xhr) 
			{
				status('Error: ' + xhr.status);
			},
			success: function(response) 
			{
				console.log(response);
			}
		});
		//Very important line, it disable the page refresh.
		return false;
	});
});
