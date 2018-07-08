var box = document.getElementById('box1');
var arr = ['img/image1.jpg','img/image2.jpg','img/image3.jpg'];
var z = 9999999;
var index = 0;
boom();
function boom(){
    var oParentNode = document.createElement('div');
    oParentNode.style.zIndex = z;
    z--;
    box.appendChild(oParentNode);
    var x = 16;
    var y = 10;
    for(var i = 0;i < y;i ++){
        for(var j = 0;j < x;j ++){
            var oDiv = document.createElement('div');
            oDiv.style.width = box.clientWidth / x + 'px';
            oDiv.style.height = box.clientHeight / y + 'px';
            oDiv.style.left = (box.clientWidth / x) * j + 'px';
            oDiv.style.top = (box.clientHeight / y) * i + 'px';
            oDiv.style.background = 'url('+arr[index]+')';
            oDiv.style.backgroundPositionX = (box.clientWidth / x) * -j + 'px';
            oDiv.style.backgroundPositionY = (box.clientHeight / y) * -i + 'px';
            oDiv.style.transition = (Math.random()*1+0.5)+'s';
            oParentNode.appendChild(oDiv);
        }
    }
    var allDiv = oParentNode.children;
    setTimeout(function(){
        index++;
        index == arr.length && (index = 0);
        boom();
        for(var i = 0;i < allDiv.length;i ++){
            allDiv[i].style.transform = 'perspective(800px) translateX('+ (Math.random()*600-300) +'px) translateY('+ (Math.random()                *400-200) +'px) translateZ('+(Math.random()*200 + 100)+'px) rotateX('+(Math.random()*360 - 180)+'deg) rotateY('+(Math                    .random()*360 - 180)+'deg)';
            allDiv[i].style.opacity = 0;
        };
    },2000);
    setTimeout(function(){
        oParentNode.remove();
    },3500);
}

