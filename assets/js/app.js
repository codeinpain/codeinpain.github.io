$(function(){

    var model = {
        data: [

        ]
    };

    var octopus = {
        init: function() {
            view.init();
        }
    };

    var view = {
        init: function() {

            view.events();

        },
        events: function() {
            $(".trabalhos article h4").click(function(){
                $(".trabalhos article .content").hide()
                $(this).siblings(".content").toggle("slow")
            })
        }
    };

    octopus.init();
});
