$(function() {
    console.log("██╗  ██╗ █████╗ ███╗   ██╗██████╗ ███████╗ ██████╗ ███╗   ███╗███████╗██╗    ██╗██╗   ██╗\n██║  ██║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔═══██╗████╗ ████║██╔════╝██║    ██║██║   ██║\n███████║███████║██╔██╗ ██║██║  ██║███████╗██║   ██║██╔████╔██║█████╗  ██║ █╗ ██║██║   ██║\n██╔══██║██╔══██║██║╚██╗██║██║  ██║╚════██║██║   ██║██║╚██╔╝██║██╔══╝  ██║███╗██║██║   ██║\n██║  ██║██║  ██║██║ ╚████║██████╔╝███████║╚██████╔╝██║ ╚═╝ ██║███████╗╚███╔███╔╝╚██████╔╝\n╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝ ╚══╝╚══╝  ╚═════╝ \n");
    //先获取要插入数据的位置的dom     
    var parentDom = document.getElementsByName('newscenter123')[0];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function work() {
        if (xhr.readyState == 4 && xhr.status == 200) {                 // // 为了避免解析过程的中不兼容,先使用这个方法，然后再解析
            // var responseData=JSON.stringify(xhr.responseText)                                       
            var s = JSON.parse(xhr.responseText);                 //打开控制台查看返回的数据字段是什么样的 然后用正确的方式解析出来
            //json的教程： https://blog.csdn.net/yanqing_happy/article/details/98871448                       
            var dataGet = s.data.info;
            for (var s in dataGet) {                     //js操作dom    
                var div1 = document.createElement('div');
                var div2 = document.createElement('div');
                var div3 = document.createElement('div');
                var img = document.createElement('img');
                var time = document.createElement('p');  
                var header = document.createElement('p');
                div1.setAttribute('myid', dataGet[s].id);
                $(div1).addClass('newsbox');
                $(div2).addClass('test1');
                $(div3).addClass('test2');
                $(img).addClass('hideover');
                $(time).addClass('news_date');
                $(header).addClass('xxx');
                time.innerText = dataGet[s].time;
                header.innerHTML = "康盛农业"; 
                div3.innerHTML = dataGet[s].title; 
                img.src = dataGet[s].picture;              
                parentDom.appendChild(div1);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div2.appendChild(img);
                div3.appendChild(time);
                div3.appendChild(header);
            }
            var boxes = document.querySelectorAll('.newsbox');
            console.log(boxes);
            for (var i = 0; i < boxes.length; i++) {
                add(boxes[i].getAttribute('myid'));
            }
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].onclick = function() {
                    for (var i = 0; i < boxes.length; i++) {
                        $('.newsbox').hide();
                        var myid = this.getAttribute('myid');
                        var newsdetails = document.getElementsByName('NewsDetails');
                        for (var j = 0; j < newsdetails.length; j++) {
                            // newsdetails[j].className = 'hide';
                            $(newsdetails[j]).hide();
                            if (newsdetails[j].getAttribute('myid') === myid) {
                                // newsdetails[j].className = 'navchecked';
                                $(newsdetails[j]).show();
                            }
                        }
                        $(newsdetails).addClass('news_margin');
                    }
                    var a = document.getElementById('NewsPage');
                    $(a).show();
                    $('.ReturnBtn').show();
                }
            }
        }
    }
    xhr.open("Get", "http://47.104.189.198:8075/news/listGet?pageSize=100&pageNo=1", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.send();
    // var data = new FormData();
    // var newsboxes = document.querySelectorAll('.newsbox')
    var boxes = document.querySelectorAll('.box1');
    var navs = document.querySelectorAll('#nav');
    var smallnavs = document.querySelectorAll('#smallnav');
    var lis = document.querySelectorAll('#approachkangsheng');
    var lis1 = document.querySelectorAll('#ProductIntroduce');
    for (var i = 0; i < boxes.length; i++) { //实现导航栏点击底部变色
        boxes[i].setAttribute('index', i);
        boxes[i].addEventListener('click', function() {
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].className = 'box1';
            }
            this.className = 'current box1';
        })
        boxes[i].addEventListener('click', function() {
            for (var i = 0; i < boxes.length; i++) {
                navs[i].className = 'hide  interval';
            }
            var index = this.getAttribute('index');
            navs[index].className = 'navchecked interval';
        })
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = ' ';
            }
            this.className = 'navchecked1';
        })
        lis[i].addEventListener('click', function() {
            for (var i = 0; i < lis.length; i++) {
                smallnavs[i].className = 'hide';
            }
            var index = this.getAttribute('index');
            smallnavs[index].className = 'navchecked';
        })
    }
    for (var i = 0; i < lis1.length; i++) {
        lis1[i].setAttribute('index', i);
        lis1[i].addEventListener('click', function() {
            for (var i = 0; i < lis1.length; i++) {
                lis1[i].className = ' ';
            }
            this.className = 'navchecked1';
        })
        lis1[i].addEventListener('click', function() {
            for (var i = 0; i < lis1.length; i++) {
                smallnavs1[i].className = 'hide';
            }
            var index = this.getAttribute('index');
            smallnavs1[index].className = 'navchecked';
        })
    }
    //新闻中心返回键
    var ReturnBtn = document.querySelector('.ReturnBtn');
    ReturnBtn.addEventListener('click', function() {
            $('.newsbox').show();
            $(this).hide();
            var abc = document.getElementsByName('NewsDetails');
            $(abc).hide();
        })
        //人力资源返回键
    var ReturnBtn1 = document.querySelector('.ReturnBtn1');
    ReturnBtn1.addEventListener('click', function() {
            $('.newsbox1').show();
            $(this).hide();
            var abc = document.getElementsByName('details1');
            console.log(abc);
            $(abc).hide();
        })
        //查看更多点击事件
    var readmore = document.querySelector('#ReadMore');
    readmore.addEventListener('click', function() {
        console.log(234);
        navs[0].className = "hide interval";
        navs[1].className = "navchecked interval";
        boxes[0].className = "box1";
        boxes[1].className = "box1 current";

    })

    //地图
    var map = new AMap.Map("container", {
        zoom: 15, //设置地图显示的缩放级别
        center: [117.207414, 34.138411] //设置地图中心点坐标
    });

    // 创建一个 Marker 实例：（标记点）
    var marker = new AMap.Marker({
        position: new AMap.LngLat(117.207414, 34.138411),
        title: "位置标题"
    });

    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);

})

function add(myid) {
    //先获取要插入数据的位置的dom     
    var parentDom = document.getElementsByName('newscenter123')[0];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function work() {
        if (xhr.readyState == 4 && xhr.status == 200) {                 // // 为了避免解析过程的中不兼容,先使用这个方法，然后再解析
            // var responseData=JSON.stringify(xhr.responseText)                                       
            var s = JSON.parse(xhr.responseText);                 //打开控制台查看返回的数据字段是什么样的 然后用正确的方式解析出来
            //json的教程： https://blog.csdn.net/yanqing_happy/article/details/98871448                       
            var dataGet = s.data;                   //js操作dom                                               
            var ele = document.createElement('div'); 
            var newstitle = document.createElement('div');
            var newsdetails = document.createElement('div');
            newstitle.innerHTML = dataGet.title;  
            ele.setAttribute('myid', myid);
            ele.setAttribute('name', 'NewsDetails');  
            $(newsdetails).html(dataGet.text);
            ele.appendChild(newstitle);
            ele.appendChild(newsdetails);
            $(newstitle).addClass('titletext');
            $(ele).addClass('hide');      
            // ele.innerText = decode(dataGet.text);
            parentDom.appendChild(ele);
        }
    }
    xhr.open("Get", "http://47.104.189.198:8075/news/get?id=" + myid + "", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    var data = new FormData();
    xhr.send();
}
window.addEventListener('load', function() {
    //先获取要插入数据的位置的dom     
    var parentDom = document.getElementsByName('humanresources123')[0];
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function work() {
        if (xhr.readyState == 4 && xhr.status == 200) {                 // // 为了避免解析过程的中不兼容,先使用这个方法，然后再解析
            // var responseData=JSON.stringify(xhr.responseText)                                       
            var s = JSON.parse(xhr.responseText);                 //打开控制台查看返回的数据字段是什么样的 然后用正确的方式解析出来
            //json的教程： https://blog.csdn.net/yanqing_happy/article/details/98871448                       
            var dataGet = s.data.info;
            for (var s in dataGet) {                     //js操作dom    
                var div1 = document.createElement('div');
                var div2 = document.createElement('div');
                var div3 = document.createElement('div');
                var img = document.createElement('img');
                var time = document.createElement('p');  
                var synopsis = document.createElement('p');
                var header = document.createElement('p');
                var details = document.createElement('div');
                var newstitle = document.createElement('div');
                var detailtext = document.createElement('div');
                div1.setAttribute('myid', dataGet[s].id);
                details.setAttribute('myid', dataGet[s].id);
                $(div1).addClass('newsbox1');
                $(div2).addClass('test11');
                $(div3).addClass('test21');
                $(img).addClass('hideover1');
                $(time).addClass('news_date1');
                $(header).addClass('xxx1');
                $(synopsis).addClass('overhide');
                $(details).addClass('hide1');
                $(newstitle).addClass('titletext');
                details.setAttribute('name', 'details1');
                detailtext.innerHTML = dataGet[s].synopsis; 
                time.innerText = dataGet[s].time;
                synopsis.innerHTML = dataGet[s].synopsis; 
                div3.innerHTML = dataGet[s].title; 
                img.src = dataGet[s].picture;
                newstitle.innerHTML = dataGet[s].title;
                header.innerHTML = "康盛农业";
                details.appendChild(newstitle); 
                details.appendChild(detailtext);          
                parentDom.appendChild(div1);
                parentDom.appendChild(details);
                div1.appendChild(div2);
                div1.appendChild(div3);
                div2.appendChild(img);
                div3.appendChild(time);
                div3.appendChild(synopsis);
                div3.appendChild(header);
            }
            var details1 = document.querySelectorAll('.hide1');
            var boxes = document.querySelectorAll('.newsbox1');
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].onclick = function() {
                    for (var i = 0; i < boxes.length; i++) {
                        $('.newsbox1').hide();
                        var myid = this.getAttribute('myid');
                        for (var j = 0; j < details1.length; j++) {
                            $(details1[j]).hide();
                            if (details1[j].getAttribute('myid') === myid) {
                                $(details1[j]).show();
                            }
                        }
                        $(details1).addClass('news_margin');
                        var a = document.getElementById('HumanResourcePage');
                        $(a).show();
                        $('.ReturnBtn1').show();
                    }
                }
            }
        }
    }
    xhr.open("Get", "http://47.104.189.198:8075/human/listGet?pageSize=20&pageNo=1", true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
    xhr.send();
})

function CreateBottom(ParentDom, judge) {
    var img = document.createElement('img');
    img.src = "./image/bottom.png";
    $(img).addClass('img-fluid');
    $(img).hide();
    if (judge == 1) {
        img.setAttribute('id', 'NewsPage');
    } else {
        img.setAttribute('id', 'HumanResourcePage');
    }
    ParentDom.appendChild(img);
}