var por = {
  ownerEnd: "&4O&cw&6n&ee&ar&8]&4~",
  mod: "&9[&6Mod&9]&b",
  ninniy: "Ninniy",
  drWily: "DrWily",
  otterP: "OtterP"
};

var staff = [
  {
    name: por.ninniy,
    uuid: "03b187c5f22642469af2a7952f652d31",
    nick: "&8[" + por.ownerEnd + "&7" + por.ninniy,
    desc: "The owner of the server. An intergalactic sea slug. \
    <del>She</del> It likes rice."
  },
  {
    name: "1b8",
    uuid: "34eb9e87564d44a185918608ab491376",
    nick: "&8[&6Co&8-" + por.ownerEnd + "D&ar_Po&ek&ae",
    desc: ""
  },
  {
    name: "DrWily",
    uuid: "bf23c66fc64c42c9893f785991a3956f",
    nick: por.mod + por.drWily,
    desc: ""
  },
  {
    name: "Cpl_" + por.otterP + "aws",
    uuid: "b4325bccf1624874831cec1dac1850c9",
    nick: por.mod + "&3Captain_&b" + por.otterP + "irate",
    desc: ""
  }
]

var table = $("<tbody></tbody>");

for (var i = 0; i < staff.length; i++) {
  var memb = staff[i];
  table.append('<tr>\
    <td><img src="https://crafatar.com/renders/body/' + memb.uuid + '?helm&scale=5"></td>\
    <td>\
      <h2>' + memb.name + '</h2>\
      <p>Chat name: ' + aCodesToHTML(memb.nick) + '<br>' + memb.desc + '</p>\
    </td>\
  </tr>');
}
$("#staff-table").append(table);
