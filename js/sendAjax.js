  /* 动态写入数据 */
 function view(data){
    var html = [];
     html+="<tr>";
     html+="<td>二级账号</td>"
     html+="<td>选择关联账号</td>"
     html+="</tr>";
    for(var i = 0; i < data.length;i++) {
        html += '<tr>';
        html += '<td class="usersname">'+ data[i].usersname +'</td>';
        html += '<td class="text-center"><input type="radio" value="'+data[i].usersname+'" name="name" id="'+data[i].id+'" onclick="save(this.id)"/></td>';
        html += '</tr>';
    }
    $('#list-wrap').html(html);
 }
  function view2(data){
      var html = [];
      html+="<tr>";
      html+="<td>三级账号</td>"
      html+="<td>选择关联账号</td>"
      html+="</tr>";
      for(var i = 0; i < data.length;i++) {
          html += '<tr>';
          html += '<td class="usersname2">'+ data[i].usersname +'</td>';
          html += '<td class="text-center"><input type="checkbox" value="'+data[i].usersname+'" name="name2" id="'+data[i].id+'" onclick="save2(this.id)"/></td>';
          html += '</tr>';
      }
      $('#list-wrap2').html(html);
  }
  /* ajax 请求更新数据 */
  function sendAjax(page,size){
      var url = '';
      view(data.data[page-1].con);
  }

 function sendAjax2(page,size){
    var url = '';
    view2(data.data2[page-1].con);
 }
