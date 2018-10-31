<template>    
    <div>
        <no-ssr>
            <div id="fb-root"></div>
            <div class="fb-page text-center" data-href="https://www.facebook.com/Concrelit" 
                data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" 
                data-hide-cover="false" data-show-facepile="true" adapt_container_width="true">
                <blockquote cite="https://www.facebook.com/Concrelit" class="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/Concrelit">Concrelit</a>
                </blockquote>
            </div>
            <script>
                (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.2';
                fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            </script>
        </no-ssr>
    </div>
</template>

<script>
export default {
    
    name: 'CFacebookPlugin'
}
</script>

