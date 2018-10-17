/* 
 - 公共页脚
 - @time 2018/09/22
 */

;(function() {
    var wrapOut = tools.$('.xi-container')[0],
        footerEl = tools.$('.xi-footer', wrapOut)[0];
    
    if( !footerEl ) {
        var footerTemplate = [ 
        '	<div class="xi-plateauto">', 
        '		<p>© CopyRight 2019 yuxi0530</p>',
        '	</div>'
        ].join('');
        
        var oFooter = document.createElement('div'); 
        oFooter.className = 'xi-footer';
        oFooter.innerHTML = footerTemplate;
        wrapOut.appendChild(oFooter); 
    } 
}());
