/**
 * 提交scheduler数据
 */
(function(win, $) {

    var scheduler = {};

    scheduler.checkSubmit = function() {
        return false;
    };

    scheduler.getSubmitData = function(form) {
        var $form = $(form);
        var formdata = {};
        formdata.name = $form.find("[name='name']").val();
        formdata.group = $form.find("[name='group']").val();
        formdata.cron = $form.find("[name='cronExpression']").val();
        formdata.className = $form.find("[name='className']").val();
        formdata.crawlerType = $form.find("[name='crawlerType']").val();
        formdata.listNodeSelector = $form.find("[name='listNodeSelector']").val();
        formdata.startUrl = $form.find("[name='startUrl']").val();
        if (formdata.crawlerType && formdata.crawlerType == 2) {
            //区域列表需要设置区域块样式
            if (!formdata.ListNodeSelector) {

            }
        }
        //字段解析设置
        var attributes = new Array();
        $(".row_attribute").each(function() {
            var attribute = {};
            var $row = $(this);
            attribute.name = $row.find("td:first input").val();
            attribute.selectType = $row.find("td:eq(1) select").val();
            attribute.selector = $row.find("td:eq(2) input").val();
            attribute.selectMethod = $row.find("td:eq(3) select").val();

            if (!attribute.name || !attribute.selectType || !attribute.selector || !attribute.selectMethod) {
                return false;
            }
            attributes.push(attribute);
        });
        if (attributes.length > 0) {
            formdata.attributes = attributes;
        } else {
            //解析字段必须设置
            return false;
        }
        return formdata;
    };

    win.scheduler = scheduler;

})(window, jQuery);
