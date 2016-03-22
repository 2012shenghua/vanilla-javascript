if(typeof(window.hmoe)==='undefined'){
	window.hmoe = Object();
}

window.hmoe.InitIndex = function(){ 
    //高频防抖函数
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    $(function () {
        //排行榜异步加载
        var videoRank, rank, articleRank, drawRank, pop, $videoItem, $articleItem, $drawItem, $pop;
        
        rank="";
        videoRank="<img src='../images/index-rank.png' alt=''>",
        videoRank+="<h5 class='rank-first pull-left'>我是可爱标题君</h5><p><br></p><p>我是视频简介是视频简介是视频</p>",
        videoRank+="<ul class='iconlist clearfix'><li><i class='glyphicon glyphicon-eye-open'></i>2333</li>",
        videoRank+="<li><i class='glyphicon glyphicon-comment'></i>233</li><li><i class='glyphicon glyphicon-heart'></i>233</li></ul>";
        
        for (var i = 0; i < 8; i++) {
            rank+="<li><a href=''>我是可爱的标题君</a></li>";
        }
        
        $videoItem=$(videoRank);
        $("#videoRank, #musicRank").find("a:eq(0)").append($videoItem);     
            
        articleRank="<h5 class='rank-first pull-left'>我是可爱的标题君</h5><p><br></p><p>我是简介我是简介我是简介我是文章内容</p>",
        articleRank+="<ul class='iconlist clearfix'><li><i class='glyphicon glyphicon-eye-open'></i>2333</li>",
        articleRank+="<li><i class='glyphicon glyphicon-comment'></i>233</li><li><i class='glyphicon glyphicon-heart'></i>233</li></ul>";
        
        $articleItem=$(articleRank);   
        $("#articleRank").find("a:eq(0)").append($articleItem);   
        
        drawRank="<img src='../images/index-drawrank.png' alt=''>",
        drawRank+="<h5 class='rank-first pull-left'>我是可爱标题君</h5><p><br></p><p>我是视频简介是视频简介是视频</p><div class='clear'></div>",
        drawRank+="<ul class='iconlist clearfix'><li><i class='glyphicon glyphicon-eye-open'></i>2333</li>",
        drawRank+="<li><i class='glyphicon glyphicon-comment'></i>233</li><li><i class='glyphicon glyphicon-heart'></i>233</li></ul>";
        $drawItem=$(drawRank);    
        $("#drawRank").find("a:eq(0)").append($drawItem); 
        $('.rank-content ol').each(function () {
            $(this).append(rank);
        });
        
        pop='<div class="pop"><h5>我是可爱的标题君</h5><p>2016-2-21 8:00</p><hr class="center-block">';
        pop+='<img src="../images/index-rank.png" alt=""><span>我是说明我是说明我是说明我是说明</span><div class="clear"></div>';
        pop+='<ul class="iconlist clearfix"><li><i class="glyphicon glyphicon-eye-open"></i>2333</li>';
        pop+='<li><i class="glyphicon glyphicon-comment"></i>233</li><li><i class="glyphicon glyphicon-heart"></i>233</li></ul></div>';
        
        $pop=$(pop);       
        
        //此处效果同b站排行榜移上有详情出现，加入高频防抖函数
        $('.rank ol>li').on('mouseenter', debounce(function (event) {    
            $(this).prepend($pop);               
            $(this).find('.pop').fadeIn();                       
        }, 500));
        
        $('.rank ol>li').on('mouseleave', debounce(function (event) {  
            $(this).find('.pop').fadeOut(function () {
                    $(this).find('.pop').detach();
            });                  
        }, 500));
               
        loadMore(); 
    });   
    
    //瀑布流代码
    function checkScrollSlide(obj) {  
        var lastBoxDis=this.offsetTop+Math.floor(this.outerHeight/2),
            scrollTop=$(window).scrollTop(),
            documentH=$(document).height();
            
        return (lastBoxDis<scrollTop+documentH)?1:0;       
    }
    
    function loadMore() {
        $.ajax ({
            url: url,
            dataType: 'json',
            success: function(data) {
                data.map(function (item) {           
                    // 找出当前高度最小的列, 新内容添加到该列  
                    var iHeight = -1,
                        iTempHeight,
                        $row;  
                    $('.draw-list').each(function () {  
                        iTempHeight = Number( this.height );  
                        if(iHeight==-1 || iHeight>iTempHeight)  
                        {  
                            iHeight = iTempHeight;  
                            $row = this;  
                        }  
                    });  
                      
                    var appendDiv='<a href=""><div class="video-list">';
                        appendDiv+='<img class="video-img" src="'+item.image+'" alt=""><img class="hazx" src="../images/index-hazx.png" alt="">',
                        appendDiv+='<p>我是可爱的标题君</p><span class="uphazx">h渣</span><hr class="center-block">',       
                        appendDiv+='<ul class="iconlist clearfix"><li><i class="glyphicon glyphicon-eye-open"></i>2333</li><li><i class="glyphicon glyphicon-comment"></i>233</li>',
                        appendDiv+='<li><i class="glyphicon glyphicon-heart"></i>233</li></ul></div></a> '; 
                              
                    var $item=$(appendDiv).hide();                                                                                                                                                                                                                                                                      
                    $row.append($item); 
                    $item.fadeIn();
                });
            }
        });
    } 
    
    $(window).scroll(function () {
        $('.draw-list div:last').each(function () {
            if(checkScrollSlide(this)){
                loadMore();
            }
        });
    }); 
}

            


