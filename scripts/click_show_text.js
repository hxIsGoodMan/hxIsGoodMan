var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        console.log(e.target);
        var color="#BAB9B5";
        var fontWeight="bold";
        
       
        var a = new Array
        ("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");

        if($(e.target).hasClass("copy")){
            a=new Array("复制成功");
            color="red";
            fontWeight="";
        }
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": fontWeight,
            "color": color});
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
			3000,
			function() {
			    $i.remove();
			});
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}
