(function () {
  'use strict';

  var button = document.querySelector('#quote-b');
  var compute = document.querySelector('#compute');
  var g = document.querySelector('input[name=gallons]');

  function ajax(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('get', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.response);
      } else if (xhr.readyState == 4) {
        console.log(xhr.response);
      }
    }

    xhr.send();
  }

  function insertQuote(res) {
    var r = JSON.parse(res);
    var h = document.querySelector('#quote-h');
    var p = document.querySelector('#quote-p');
    var f = document.querySelector('#quote-f');

    h.textContent = r.header;
    p.textContent = r.body;
    f.textContent = r.footer;
  }

  function insertResult(res) {
    var r = res;
    var l = document.querySelector('input[name=liters]');

    l.value = res;
  }

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    ajax('http://localhost:5000/api/quote', insertQuote);
  });

  compute.addEventListener('click', function () {
    ajax('http://localhost:5000/api/convert/' + g.value,  insertResult);
  })
})();
