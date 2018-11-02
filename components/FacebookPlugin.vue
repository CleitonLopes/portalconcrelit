<template>    
    <div>
        <no-ssr>
            <h2 class="titulo">Rede Social</h2>
            <h5>Curta nossa Fan Page</h5>
            <div id="fb-root"></div>
            <div class="fb-page text-center" data-href="https://www.facebook.com/Concrelit" 
                data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" 
                data-hide-cover="false" data-show-facepile="true" adapt_container_width="true">
                <blockquote cite="https://www.facebook.com/Concrelit" class="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/Concrelit"></a>
                </blockquote>
            </div>
            <script> 
                window.fbAsyncInit = function(){
                    FB.Event.subscribe("xfbml.render", function(){
                        SocialBoxesLoaded();
                    });
                };

                (function(d, s, id){

                    FB = null;
                    var js, fjs = d.getElementsByTagName(s)[0];
                    // if (d.getElementById(id)) return;
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));

                function SocialBoxesLoaded(){
                    
                    document.getElementById('loaded-plugin-facebook').style.display = 'block';
                    document.getElementById('loader-facebook').style.display = 'none';
                }
            </script>
        </no-ssr>
    </div>
</template>

<script>
export default {
    
    name: 'CFacebookPlugin'
}
</script>

<style scoped>

.blog .titulo {
	color: #ff6501;
	font-size: 40px;
	text-align: left;
}

</style>

