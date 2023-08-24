import $ from "jquery";

$(document).ready(function() {
  const paragraphs = [
    "Holberton Dashboard",
    "Dashboard data for the students",
    "Copyright - Holberton School"
  ];

  const body = $('body');

  paragraphs.forEach(text => {
    const paragraph = $('<p>').text(text);
    body.append(paragraph);
  });
});
