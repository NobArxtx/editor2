$(document).ready(function(){
		fm = $('#result').contents().find('body');
		fm.css("margin","2px");
		fm.html('<span id="html"></span><style id="css"></style>');
		
		$('#html').on('keyup',function(){
			var htm = $('#html').val();
			fm.find("#html").html(htm);
		});
		
		$('#css').on('keyup',function(){
			var cs = $('#css').val();
			fm.find("#css").html(cs);
		});
		
		$('#js').on('change',function(){
			var cs = $('#js').val();
			fm.append(('<script type="text\/javascript">'+$('#js').val()+'<\/script>'));
		});
	});