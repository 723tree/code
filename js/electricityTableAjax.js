function view(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td>电站名称</td>"
    html+="<td>发电量（kwh）</td>"
    html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1){
            html += '<tr class="even">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].power_account +'</td>';
            html += '</tr>';
        }
        if(i% 2 == 0){
            html += '<tr class="odd">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].power_account +'</td>';
            html += '</tr>';
        }
    }
    $('#dataTable').html(html);
}
/* ajax 请求更新数据 */
function sendAjax(page,size){
    var url = '';
    view(data.data[page-1].con);
}
