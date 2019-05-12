// 崩溃欺骗
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
        // $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = "╭(°A°`)╮Don't leave me alone ~";
         clearTimeout(titleTime)
     }
     else {
       //  $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) good to see you~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });