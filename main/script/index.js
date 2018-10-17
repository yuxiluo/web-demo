
(function(){
    // 通过数据渲染列表
    function createCaseListHmtl(){
        var xiCaseitems = tools.$('.xi-caseitems')[0];
        var caseHtml = '<ul>';
        caseList.forEach(function(item){
            caseHtml += caseListTemplate(item);
        }); 
        caseHtml += '</ul>'
        xiCaseitems.innerHTML = caseHtml;  
    }
    createCaseListHmtl();

    // case列表模版
    function caseListTemplate(item){
        var tpl = `
        <li>
            <a href="#" title=""><img src="${ item.coverUrl }" alt=""></a>
            <h2 class="sllips"><a href="#" title="">${ item.title }</a></h2>
            <p class="info">
                <span class="time" title="">${ item.time }</span> 
                <span class="view"><span title="">点击(207)</span> <span title="">下载(3)</span></span>
            </p>
        </li>
        `;
        return tpl;
    }  
}());