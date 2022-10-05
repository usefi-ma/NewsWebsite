var $table = $('#table')
var selections = []


function get_query_params(p) {
    return {
        extraParam: 'abc',
        search: p.title,
        sort: p.sort,
        order: p.order,
        limit: p.limit,
        offset: p.offset
    }
}


function responseHandler(res) {
    $.each(res.rows, function (i, row) {
        row.state = $.inArray(row.id, selections) !== -1
    })
    return res
}

function detailFormatter(index, row) {
    var html = []
    $.each(row, function (key, value) {
        if (key != "state" && key != "Id" && key != 'آدرس' && key != "ردیف")
            html.push('<p><b>' + key + ':</b> ' + value + '</p>')
        if (key == 'آدرس') {
            var url = '@string.Format("{0}://{1}", Context.Request.Scheme, Context.Request.Host)' + '/' + row.Id + '/' + value;
            html.push('<p><b>' + key + ':</b> ' + '<a href="' + url + '">' + url + '</a>' + '</p>')
        }
    })
    return html.join('')
}


function operateFormatter(value, row, index) {
    return [
        '<button type="button" class="btn-link text-success" data-toggle="ajax-modal" data-url=@Url.Action("RenderCategory", "Category")?categoryId=' + row.Id + ' title="ویرایش">',
        '<i class="fa fa-edit"></i>',
        '</button >',

        '<button type="button" class="btn-link text-danger" data-toggle="ajax-modal" data-url=@Url.Action("Delete", "Category")/?categoryId=' + row.Id + ' title="حذف">',
        '<i class="fa fa-trash"></i>',
        '</button >'
    ].join('')
}

function checkBoxFormat(value, row) {
    return '<input type="checkbox" name="btSelectItem" value="' + row.Id + '" />';
}


function totalTextFormatter(data) {
    return 'تعداد'
}

function totalNameFormatter(data) {
    return data.length
}


function initTable() {
    $table.bootstrapTable('destroy').bootstrapTable({
        height: 600,
        locale: 'fa-IR',
        columns: [
            [{
                field: 'state',
                checkbox: true,
                rowspan: 2,
                align: 'center',
                valign: 'middle',
                formatter: checkBoxFormat
            }, {
                title: 'ردیف',
                field: 'row',
                rowspan: 2,
                align: 'center',
                valign: 'middle',
                footerFormatter: totalTextFormatter
            }, {
                title: 'جزئیات اطلاعات دسته بندی ها',
                colspan: 3,
                align: 'center'
            }],
            [{
                field: 'categoryName',
                title: 'دسته',
                sortable: true,
                footerFormatter: totalNameFormatter,
                align: 'center'
            }, {
                field: 'parentCategoryName',
                title: 'دسته پدر',
                sortable: true,
                align: 'center'
            }, {
                field: 'operate',
                title: 'عملیات',
                align: 'center',
                events: window.operateEvents,
                formatter: operateFormatter
            }]
        ]
    })
}

$(function () {
    initTable()
    $('#locale').change(initTable)
})