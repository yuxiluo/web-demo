// 列表推拽删除
(function(){
    // 初始化 - 渲染列表数据
    var layoutMain = tools.$('.layout-main')[0];
     
    layoutMain.innerHTML = defaultMailTemplate(cusTree.mailList);

    // 列表html模版
    function defaultMailTemplate(data){
        var tpl = `
        <div class="mail-top">
            <em class="icon-checkbox"></em>
            <div class="tips"><!-- 已选择<span>2</span>项 -->全选/反选</div>
        </div> 
        <div class="mail-list">
            <ul> 
        `;
        data.forEach(function(item){
            tpl += `
            <li data-id="${ item.id }">
                <em class="icon-checkbox"></em>
                <div class="cont">
                    <p class="name sllips">${ item.title }</p>
                    <p class="des sllips">${ item.des }</p>
                    <span class="time">${ item.time }</span>
                </div>
            </li> 
            `;
        }); 
        tpl += '</ul></div>';
        return tpl;
    }

    // 点击全选/反选
    selectedMethods();
    function selectedMethods(){ 
        var mailTop = tools.$('.mail-top', layoutMain)[0],
            checkAll = tools.$('.icon-checkbox', mailTop)[0];

        tools.addEvent(checkAll, 'click', function(){
            var edClass = 'icon-checkboxed',
                checkbox = tools.$('.icon-checkbox'),
                hasCheck = tools.hasClass(this, edClass);

            // 判断当前点击的是否选中, 如果选中则取消选中, 否则设置为选中
            if( hasCheck ){
                tools.removeClass(this, edClass);
            }else{
                tools.addClass(this, edClass);
            }  

            for(var i = 0, len = checkbox.length; i < len; i++){
                if( hasCheck ){
                    tools.removeClass(checkbox[i], edClass); 
                }else{
                    tools.addClass(checkbox[i], edClass); 
                }
            } 
        });

        // 点击列表中的单个复选框
        var mailList = tools.$('.mail-list', layoutMain)[0],
            checkbox = tools.$('.icon-checkbox', mailList);

        for(var i = 0; i < checkbox.length; i++){
            tools.addEvent(checkbox[i], 'click', function(){
                var edClass = 'icon-checkboxed', 
                    hasCheck = tools.hasClass(this, edClass);
                
                // 判断当前点击的是否选中, 如果选中则取消选中, 否则设置为选中
                if( hasCheck ){
                    tools.removeClass(this, edClass);
                    tools.removeClass(this.parentNode, 'active');
                }else{
                    tools.addClass(this, edClass);
                    tools.addClass(this.parentNode, 'active');
                }  
                var checked = tools.$('.icon-checkboxed', mailList); 
                if( checked.length == checkbox.length ) {
                    tools.addClass(checkAll, edClass); 
                }else{
                    tools.removeClass(checkAll, edClass); 
                } 
            });
        }
    }

    // 删除选中数据
    var mailDel = tools.$('.mail-del')[0];
    tools.addEvent(mailDel, 'click', delSelectList); 
    function delSelectList(){
        var mailList = tools.$('.mail-list', layoutMain)[0];
        var checked = tools.$('.icon-checkboxed', mailList);

        for(var i = 0;i < checked.length;i++){
            var parent = checked[i].parentNode,
                curId = parseInt(parent.getAttribute('data-id'));
            
            // 删除DOM
            parent.remove();
            i--;
            // 删除数据
            var mailList = cusTree.mailList;
            for(var k = 0; k< mailList.length;k++){ 
                if(mailList[k].id == curId){
                    mailList.splice(k, 1); 
                }
            } 
        }
        
        var mailTop = tools.$('.mail-top', layoutMain)[0],
            checkAll = tools.$('.icon-checkbox', mailTop)[0];
        
        tools.removeClass(checkAll, 'icon-checkboxed');
    }

    // 鼠标按下移动碰撞选中
    moveSelectCheckbox();
    function moveSelectCheckbox(){
        var cDiv = null, disX = 0, disY = 0;
        var mailList = tools.$('.mail-list', layoutMain)[0];
        var mailLi = tools.$('li', mailList);
        tools.addEvent(document, 'mousedown', function(event) {
            var event = event || window.event,
                target = event.target || event.srcElement; 

            if( tools.hasClass(target, 'layout-main') ){
                disX = event.clientX;
                disY = event.clientY;

                tools.addEvent(document, 'mousemove', moveFn); 
                tools.addEvent(document, 'mouseup', upFn);
            } 
        });

        function moveFn(event) {
            var event = event || window.event, 
                w = Math.abs(event.clientX - disX),
                h = Math.abs(event.clientY - disY); 

            // 限定创建元素的范围
            if( w > 20 || h > 20 ){ 
                // 如果元素不存在，则创建一个div
                if( !cDiv ) {
                    cDiv = document.createElement('div');
                    cDiv.className = 'selectTab';
                    document.body.appendChild(cDiv);
                }
                // 设置cDiv的宽度和高度，并修改对应的坐标位置
                cDiv.style.width = w + 'px';
                cDiv.style.height = h + 'px';
                // 坐标位置的修改，取点击和移动时的鼠标位置的最小值
                cDiv.style.left = Math.min(event.clientX, disX) + 'px';
                cDiv.style.top = Math.min(event.clientY, disY) + 'px';

                collisionSelectEl();
            }

            // 取消默认事件，防止移动时候选取页面中的文字
            tools.cancelHandler(event);
        } 

        function upFn(){
            tools.removeEvent(document, 'mousemove', moveFn);
            tools.removeEvent(document, 'mouseup', upFn);
            if( cDiv ){
                cDiv.remove();
                cDiv = null;
            }
        }

        // 移动选中
        function collisionSelectEl(){ 
            for(var i = 0; i < mailLi.length; i++){
                var item = mailLi[i];
                var checkbox = tools.$('.icon-checkbox', item)[0]; 
                if( tools.collisionRect(item, cDiv) ){
                    tools.addClass(checkbox, 'icon-checkboxed');
                    tools.addClass(item, 'active'); 
                }else{ 
                    tools.removeClass(checkbox, 'icon-checkboxed');
                    tools.removeClass(item, 'active');
                }
            }

            var mailTop = tools.$('.mail-top', layoutMain)[0],
                checkAll = tools.$('.icon-checkbox', mailTop)[0];
            var checked = tools.$('.icon-checkboxed', mailList); 
            var checkbox = tools.$('.icon-checkbox', mailList); 
    
            if( checked.length == checkbox.length ) {
                tools.addClass(checkAll, 'icon-checkboxed'); 
            }else{
                tools.removeClass(checkAll, 'icon-checkboxed'); 
            } 
        }
    }

    // 拖拽删除：
    // 1. 鼠标按下时候当前元素是选中的，则拖拽所有选中元素
    // 2. 鼠标按下时如果当前元素未选中，则列表中有其他元素被选中的，则清除其他选中，只选中当前的这条
    var mailList = tools.$('.mail-list', layoutMain)[0];
    var mailLi = tools.$('li', mailList);

    for(var i = 0;i<mailLi.length;i++){

        tools.addEvent(mailLi[i], 'mousedown', function(event){
            var checkbox = tools.$('.icon-checkbox', this)[0];
            var hasSelected = tools.hasClass(checkbox, 'icon-checkboxed');
            var dialogSelect = tools.$('.dialog-moveselect')[0];
            var mailDel = tools.$('.mail-del')[0]; 
            
            if( !hasSelected ){ 
                for(var j = 0;j<mailLi.length;j++){ 
                    tools.removeClass(tools.$('.icon-checkbox', mailLi[j])[0], 'icon-checkboxed');
                    tools.removeClass(mailLi[j], 'active');
                }
                tools.addClass(checkbox, 'icon-checkboxed');
                tools.addClass(this, 'active');
            }

            tools.addEvent(document, 'mousemove', moveFn); 
            tools.addEvent(document, 'mouseup', upFn);

            function moveFn(event){ 
                var event = event || window.event;
                var checked = tools.$('.icon-checkboxed', mailList);
                dialogSelect.innerHTML = '选中'+checked.length+'封邮件';
                dialogSelect.style.display = 'block';
                dialogSelect.style.left = event.clientX + 2 + 'px';
                dialogSelect.style.top = event.clientY + 2 + 'px';

                // 碰撞检测 
                if( tools.collisionRect(dialogSelect, mailDel) ){
                    // 碰撞上了, 改变移动框的样式, 来提醒用户可以释放执行对应的操作
                    tools.addClass(dialogSelect, 'selected');
                }else{
                    tools.removeClass(dialogSelect, 'selected');
                }
            }
            function upFn(){
                tools.removeEvent(document, 'mousemove', moveFn);
                tools.removeEvent(document, 'mouseup', upFn); 

                if( tools.collisionRect(dialogSelect, mailDel) ){
                    delSelectList();
                }
                dialogSelect.removeAttribute('style');
            }

            tools.cancelHandler(event);
        });
    }

}());