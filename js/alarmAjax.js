
function view(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td><span>电站名称</span></td>"
    html+="<td><span>报警内容</span></td>"
    html+="<td><span>报警时间</span></td>"
    html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        html += '<tr>';
        html += '<td>'+ data[i].powerName +'</td>';
        html += '<td>'+ data[i].alarmInfo +'</td>';
        html += '<td>'+ data[i].alarmData+'</td>';
        html += '</tr>';
    }
    $('#dataTable').html(html);
}
/* ajax 请求更新数据 */
function sendAjax(page,size){
    var url = '';
    view(data.data[page-1].con);
}
