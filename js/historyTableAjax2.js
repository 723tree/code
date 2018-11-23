function view3(data){
    var html = [];
    html+="<tr class='title'>"
        +"<td>电表序列号</td>"
        +"<td>倍率</td>"
        +"<td>电压(V)</td>"
        +"<td>电流(I)</td>"
        +"<td>有功功率(W)</td>"
        +"<td>无功功率(W)</td>"
        +"<td>功率因数(W)</td>"
        +"<td>频率(Hz)</td>"
        +"<td>正向电能(kWh)</td>"
        +"<td>反向电能(kWh)</td>"
        +"<td>更新时间</td>"
        +"</tr>";
    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1){
            html += '<tr class="even">'
            +'<td>'+ data[i].electricNumber+'</td>'
            +'<td>'+ data[i].multipleRate+'</td>'
            +'<td>'+ data[i].acVoltage +'</td>'
            +'<td>'+ data[i].acCurrent+'</td>'
            +'<td>'+ data[i].activePower+'</td>'
            +'<td>'+ data[i].reactivePower+'</td>'
            +'<td>'+ data[i].powerFactor+'</td>'
            +'<td>'+ data[i].frequency+'</td>'
            +'<td>'+ data[i].positivePower+'</td>'
            +'<td>'+ data[i].reversePower+'</td>'
            +'<td>'+ data[i].upTime+'</td>'
            +'</tr>'
        }
        if(i% 2 == 0){
            html+='<tr class="odd">'
                +'<td>'+ data[i].electricNumber+'</td>'
                +'<td>'+ data[i].multipleRate+'</td>'
                +'<td>'+ data[i].acVoltage +'</td>'
                +'<td>'+ data[i].acCurrent+'</td>'
                +'<td>'+ data[i].activePower+'</td>'
                +'<td>'+ data[i].reactivePower+'</td>'
                +'<td>'+ data[i].powerFactor+'</td>'
                +'<td>'+ data[i].frequency+'</td>'
                +'<td>'+ data[i].positivePower+'</td>'
                +'<td>'+ data[i].reversePower+'</td>'
                +'<td>'+ data[i].upTime+'</td>'
                +'</tr>'
        }
    }
    $('#dataTable3').html(html);
}
function view4(data){
    var html = [];
    html+="<tr class='title'>"
    +"<td>风速</td>"
    +"<td>风向</td>"
    +"<td>大气温度(℃)</td>"
    +"<td>大气湿度</td>"
    +"<td>总辐射(Gy)</td>"
    +"<td>组件温度(℃)</td>"

    for(var i = 0; i < data.length;i++) {
        if(i% 2 == 1){
            html += '<tr class="even">'
                +'<td>'+ data[i].windSpeed+'</td>'
                +'<td>'+ data[i].windDirection+'</td>'
                +'<td>'+ data[i].airTemperature +'</td>'
                + '<td>'+ data[i].airHumidity+'</td>'
                +'<td>'+ data[i].irrdiance+'</td>'
                + '<td>'+ data[i].componentTemperature+'</td>'
                + '</tr>';
        }
        if(i% 2 == 0){
            html += '<tr class="odd">'
            + '<td>'+ data[i].windSpeed+'</td>'
            + '<td>'+ data[i].windDirection+'</td>'
            + '<td>'+ data[i].airTemperature +'</td>'
            + '<td>'+ data[i].airHumidity+'</td>'
            + '<td>'+ data[i].irrdiance+'</td>'
            + '<td>'+ data[i].componentTemperature+'</td>'
            + '</tr>';
        }
    }
    $('#dataTable4').html(html);
}
/* ajax 请求更新数据 */
function sendAjax3(page,size){
    var url = '';
    view3(data.data3[page-1].con);
}
function sendAjax4(page,size){
    var url = '';
    view4(data.data4[page-1].con);
}

