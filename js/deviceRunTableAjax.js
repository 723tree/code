function view(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td>电站名称</td>"
    html+="<td>设备SN</td>"
    html+="<td>设备状态</td>"
    html+="<td>状态时间</td>"
    html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1){
            html += '<tr class="even">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].state+'</td>';
            html += '<td>'+ data[i].time+'</td>';
            html += '</tr>';
        }
        if(i% 2 == 0){
            html += '<tr class="odd">';
            html += '<td>'+ data[i].power_name +'</td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].state+'</td>';
            html += '<td>'+ data[i].time+'</td>';
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
