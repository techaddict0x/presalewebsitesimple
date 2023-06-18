$(document).ready(function(){
	
	$('#back-btn').on('click', function() {
		$('.step-2').addClass('d-none');
		$('.step-1').removeClass('d-none');
		$('.step-indicator.side-step-2').removeClass('is-active');
		$('.step-indicator.side-step-1').addClass('is-active');
	});
	
	$('#try-btn').on('click', function() {
		$('.vector-section').addClass('d-none');
		$('.step').removeClass('d-none');
		$('.step-indicator.side-step-3').removeClass('is-active');
		$('.step-indicator.side-step-2').addClass('is-active');
		$('.footer-2').addClass('d-none');
	});
});