import $ from 'jquery';
import debounce from 'lodash/debounce';

$(document).ready(function() {
  const body = $('body');
  let count = 0;

  const paragraphs = [
    'Holberton Dashboard',
    'Dashboard data for the students',
  ];

  paragraphs.forEach(text => {
    const paragraph = $('<p>').text(text);
    body.append(paragraph);
  });

  const button = $('<button>').text('Click here to get started');
  body.append(button);

  const countParagraph = $('<p>').attr('id', 'count');
  body.append(countParagraph);

  const copyright = $('<p>').text('Copyright - Holberton School');
  body.append(copyright);

  // Update the counter and display count
  const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  };

  // Bind the debounced updateCounter function to the button
  const debouncedUpdateCounter = debounce(updateCounter, 300); // Debounce with a 300ms delay
  button.on('click', debouncedUpdateCounter);
});