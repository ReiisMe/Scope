function getPost(){
	$('#loadmorebutton').remove();
  $('p').remove();
	$('#innercontainer').append('<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fapplemusic%2Fposts%2F2656644727684561%3A0&width=500" width="500" height="632" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
	$('#innercontainer').append('<div id= id="loadmorebutton"><p><button class="btn btn-outline-primary btn-lg" onclick="getPost()" id="loadmorebutton">See More</button></p></div>');
}
