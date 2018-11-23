function view(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td>电站名称</td>"
    html+="<td>故障时间</td>"
    html+="<td>故障内容</td>"
    html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1){
            html += '<tr class="even">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].fault_time +'</td>';
            html += '<td>'+ data[i].fault_content+'</td>';
            html += '</tr>';
        }
        if(i% 2 == 0){
            html += '<tr class="odd">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].fault_time +'</td>';
            html += '<td>'+ data[i].fault_content+'</td>';
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
