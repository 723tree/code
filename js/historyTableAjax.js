function view1(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td>状态</td>"
    html+="<td>采集器序列号</td>"
    html+="<td>通信方式</td>"
    html+="<td>信号强度</td>"
    html+="<td>更新时间</td>"
    html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1&&data[i].state=="在线"){
            html += '<tr class="even">';
            html += '<td><i class="fa fa-check-circle"></i></td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].communication +'</td>';
            html += '<td><i class="glyphicon glyphicon-signal"></i><span class="strength">'+ data[i].signal +'</td>';
            html += '<td>'+ data[i].time+'</td>';
            html += '</tr>';
        }
        if(i% 2 == 1&&data[i].state=="离线"){
            html += '<tr class="even">';
            html += '<td><i class="fa fa-times-circle"></i></td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].communication +'</td>';
            html += '<td><i class="glyphicon glyphicon-signal"></i><span class="strength">'+ data[i].signal +'</td>';
            html += '<td>'+ data[i].time+'</td>';
            html += '</tr>';
        }
        if(i% 2 == 0&&data[i].state=="在线"){
            html += '<tr class="odd">';
            html += '<td><i class="fa fa-check-circle"></i></td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].communication +'</td>';
            html += '<td><i class="glyphicon glyphicon-signal"></i><span class="strength">'+ data[i].signal +'</td>';
            html += '<td>'+ data[i].time+'</td>';
            html += '</tr>';
        }
        if(i% 2 == 0&&data[i].state=="离线"){
            html += '<tr class="odd">';
            html += '<td><i class="fa fa-times-circle"></i></td>';
            html += '<td>'+ data[i].power_sn +'</td>';
            html += '<td>'+ data[i].communication +'</td>';
            html += '<td><i class="glyphicon glyphicon-signal"></i><span class="strength">'+ data[i].signal +'</td>';
            html += '<td>'+ data[i].time+'</td>';
            html += '</tr>';
        }
    }
    $('#dataTable1').html(html);
}
function view2(data){
    var html = [];
    html+="<tr class='title'>";
    html+="<td rowspan='2' class='text-center'>逆变器序列号</td>";
    html+="<td colspan='3' class='text-center'>直流输入</td>";
    html+="<td colspan='5' class='text-center'>交流输出</td>";
    html+="<td rowspan='2' class='text-center'>当日电量(kWh)</td>";
    html+="<td rowspan='2' class='text-center'>累计电量(kWh)</td>";
    html+="<td rowspan='2' class='text-center'>逆变温度(℃)</td>";
    html+="<td rowspan='2' class='text-center'>更新时间</td>";
    html+="</tr>";
    html+="<tr class='even'>";
    html+="<td>通道</td>";
    html+="<td>电压（Vdc）</td>";
    html+="<td>电流（Adc）</td>";
    html+="<td>相位</td>";
    html+="<td>电压（V）</td>";
    html+="<td>电流(A)</td>";
    html+="<td>功率（W）</td>";
    html+="<td>频率（Hz）</td>";
    html+="</tr>";

    for(var i = 0; i < data.length;i++) {
        html += '<tr class="odd">';
        html += '<td rowspan="3" class="td3">'+ data[i].sn+'</td>';
        html += '<td>'+ data[i].passageway1 +'</td>';
        html += '<td>'+ data[i].DCvoltage1 +'</td>';
        html += '<td>'+ data[i].DCcurrent1 +'</td>';
        html += '<td>'+ data[i].ACphase1+'</td>';
        html += '<td>'+ data[i].ACvoltage1+'</td>';
        html += '<td>'+ data[i].ACcurrent1+'</td>';
        html += '<td rowspan="3" class="td3">'+ data[i].ACpower+'</td>';
        html += '<td rowspan="3" class="td3">'+ data[i].Frequency+'</td>';
        html += '<td rowspan="3" class="td3">'+ data[i].ElectricDay+'</td>';
        html += '<td rowspan="3" class="td3">'+ data[i].ElectricCount+'</td>';
        html += '<td rowspan="3" class="td3">'+ data[i].Temperature+'</td>';
        html += '<td rowspan="3" class="td3"><span class="time-date">'+data[i].time+'</span></td>';
        html += '</tr>';

        html += '<tr class="even">';
        html += '<td>'+ data[i].passageway2 +'</td>';
        html += '<td>'+ data[i].DCvoltage2 +'</td>';
        html += '<td>'+ data[i].DCcurrent2 +'</td>';
        html += '<td>'+ data[i].ACphase2+'</td>';
        html += '<td>'+ data[i].ACvoltage2+'</td>';
        html += '<td>'+ data[i].ACcurrent2+'</td>';
        html += '</tr>';

        html += '<tr class="odd">';
        html += '<td>'+ data[i].passageway2 +'</td>';
        html += '<td>'+ data[i].DCvoltage2 +'</td>';
        html += '<td>'+ data[i].DCcurrent2 +'</td>';
        html += '<td>'+ data[i].ACphase2+'</td>';
        html += '<td>'+ data[i].ACvoltage2+'</td>';
        html += '<td>'+ data[i].ACcurrent2+'</td>';
        html += '</tr>';
    }
    $('#dataTable2').html(html);
}
/* ajax 请求更新数据 */
function sendAjax(page,size){
    var url = '';
    view1(data.data1[page-1].con);
}
function sendAjax2(page,size){
    var url = '';
    view2(data.data2[page-1].con);

}