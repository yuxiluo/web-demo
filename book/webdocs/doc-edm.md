#### 什么是EDM
EDM营销(Email Direct Marketing), 也叫Email营销、电子邮件营销。  
是指企业向目标客户发送EDM邮件, 可以发送电子广告、产品信息、销售信息、市场调查、市场推广活动信息等.  

#### 邮件环境
邮件内容所在上下文或者说所在外部容器(以下简称环境)都是由邮箱服务商决定的, 这就要求邮件内容需要在任何一种情况下都正确显示.  
> 可能有以下几种情况:  
> 可能是个iframe, 你的内容是被放在body里面
> 可能值是个div, 你的内容是被放在div里面
> 可能邮箱自身设置了些css, 可能对你产生未知的影响
> 可能根本没有申明doctype, 即使声明了, 也不是你想要的doctype

#### 避免嵌套在不正确的容器里
> 疑惑: 因为容器可能是body或div, 所有, 我们邮件内容不应该是一个完整的html  
> 解答: 所以邮件内容应该是以 div 为根节点的 html 片段  

#### 避免css冲突或被覆盖
> 疑惑: 因为环境中可能已经设置了css, 比如一些reset、和class
> 解答: 所以我们只能使用行内 style 来确保我们的效果, 并且在内容根节点上设置基础 style, 并且尽量使用 div、span等无语义标签  

```HTML
<!-- 根节点 -->
<div style="width:600px;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff">
    内容区域
</div>

<!-- 根节点-邮件内容居中 -->
<div style="text-align:cener;">
    <div style="width:600px;text-align:left;color:#000;font:normal 12px/15px arial,simsun;background:#fff">
        内容区域
    </div>
</div>

<!-- 如果使用语义化标签, 那么需要多写一些style, 以避免被环境中的css覆盖 -->
<h2 style="width:100px;height:100px;margin:0;padding:0;font-weight:normal;font-size:12px;"></h2>

<!-- 而使用无语义标签, 可以少写很多style -->
<div style="width:100px;height:100px;"></div>
```

#### 避免盒模型错误
> 疑惑: 因为doctype的不确定性, 会影响盒模型的解析  
> 解答: 所有我们要将盒模型拆分开来写, 比如我们将原本要定义在某个div上的height和padding分别写到这个div和他的父元素和子元素上  

```HTML
<div style="height:100px;padding:20px 0;">内容</div>
<!-- 上面的写法应该改成以下写法 -->
<div style="padding:20px 0;">
    <div style="height:100px;">内容</div>
</div>
```

#### 注意事项
- 因为只能使用行内style, 所有清除浮动需要使用额外标签  
- 避免使用绝对定位, 可能会被过滤  
- 避免使用js, 可能会被过滤  
- 避免使用table布局, 不易于修改维护  
- 背景图片或内容图片上的文字信息, 必须在代码中可见  
- 如果没有特殊要求, 所有a链接都从新窗口代开, 即target="_blank", 且a标签内容不能为空  
- 所有链接必须设置使用颜色、是否下划线, 即style="text-decoration:;color:;"  
[参考资料](https://github.com/rain-team/edm-spec)

#### EDM-HTML 框架
```HTML
<!-- 水平居左的邮件 -->
<table width="600" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td>
    <div style="width:600px;text-align:left;font:12px/15px simsun;color:#000;background:#fff;">
        邮件内容
    </div>
</td></tr></tbody></table>

<!-- 水平居中的邮件 -->
<div style="text-align:center;">
    <table style="margin:0 auto;" width="600" cellpadding="0" cellspacing="0" border="0"><tbody><tr><td>
        <div style="width:600px;text-align:left;font:12px/15px simsun;color:#000;background:#fff;">
            邮件内容
        </div>
    </td></tr></tbody></table>
</div>
```

#### 参考资料
[MailChimp](https://templates.mailchimp.com/)  

