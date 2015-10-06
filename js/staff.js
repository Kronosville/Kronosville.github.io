// NOTE Remember to update staff.min.js after editing, using jscompress.com

function loadStaff(staff, prefixes) {
  var tBody = $('<tbody></tbody>');

  for (var i = 0; i < staff.length; i++) {
    var memb = staff[i];

    tBody.append('<tr>\
<td><img src="https://crafatar.com/renders/body/' + memb.uuid + '?helm&scale=5"></td>\
<td>\
<h2>' + memb.name + '</h2>\
<p>Chat name: ' + aCodesToHTML(prefixes[memb.rank] + (memb.nick === "off" ? memb.name : memb.nick)) + '<br>' + memb.desc + '</p>\
</td>\
</tr>');
  }

  $('#staff-table').append(tBody);

}

$.getJSON('json/staff/staff.json', function(staff) {
  $.getJSON('json/staff/prefixes.json', function(prefixes) {
    loadStaff(staff, prefixes);
  });
});
