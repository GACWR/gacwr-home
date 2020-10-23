
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', '250309821', 'auto');
ga('send', 'pageview');

$(".nav-link").click((function(obj){
	var topic = obj.currentTarget.href
	ga('send', 'event', {
	  'eventCategory': 'Nav-Link Pressed: '+topic,
	  'eventAction': 'Action'
	});
}))



$(".learn_more").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Learn More Pressed: ',
	  'eventAction': 'Action'
	});
}))

$(".example_campaign").click((function(obj){
	var camp = obj.currentTarget.dataset.camp
	ga('send', 'event', {
	  'eventCategory': 'Example campaign: '+camp,
	  'eventAction': 'click'
	});
}))

$(".browse_campaigns").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Browse Campaigns button',
	  'eventAction': 'click'
	});
}))

$(".createbtn").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Create Button',
	  'eventAction': 'click'
	});
}))

$(".twbtn").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Twitter button',
	  'eventAction': 'click'
	});
}))

$(".igbtn").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Instagram button',
	  'eventAction': 'click'
	});
}))

$(".fbbtn").click((function(obj){
	ga('send', 'event', {
	  'eventCategory': 'Facebook button',
	  'eventAction': 'click'
	});
}))
