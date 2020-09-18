function timePicker1(id) {
    var input = document.getElementById('timePicker');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime1"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime1");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker2(id) {
    var input = document.getElementById('timePicker2');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker3(id) {
    var input = document.getElementById('timePicker3');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker4(id) {
    var input = document.getElementById('timePicker4');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker5(id) {
    var input = document.getElementById('timePicker5');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker6(id) {
    var input = document.getElementById('timePicker6');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker7(id) {
    var input = document.getElementById('timePicker7');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
};

function timePicker8(id) {
    var input = document.getElementById('timePicker8');
    var timePicker = document.createElement('div');
    timePicker.classList.add('time-picker');
    input.value = '08:30';

    //open timepicker
    input.onclick = function () {
        timePicker.classList.toggle('open');

        this.setAttribute('disabled', 'disabled');
        timePicker.innerHTML += `
      <div class="set-time">
         <div class="label">
            <a id="minusH" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="hour" value="08">
            <a id="plusH" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
:
         <div class="label">
            <a id="minusM" style="background-image: url(../img/next.png);"></a>
            <input class="set" type="text" id="minute" value="30">
            <a id="plusM" style="background-image: url(../img/arrow-icon-left-cal.png);"></a>
         </div>
      </div>
      <div id="submitTime"></div>`;
        this.after(timePicker);
        var plusH = document.getElementById('plusH');
        var minusH = document.getElementById('minusH');
        var plusM = document.getElementById('plusM');
        var minusM = document.getElementById('minusM');
        var h = parseInt(document.getElementById('hour').value);
        var m = parseInt(document.getElementById('minute').value);
        //increment hour
        plusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 23) {
                h = -1;
            }
            h++;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //decrement hour
        minusH.onclick = function () {
            h = isNaN(h) ? 0 : h;
            if (h === 0) {
                h = 24;
            }
            h--;
            document.getElementById('hour').value = (h < 10 ? '0' : 0) + h;
        }
        //increment hour
        plusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 59) {
                m = -1;
            }
            m = m + 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }
        //decrement hour
        minusM.onclick = function () {
            m = isNaN(m) ? 0 : m;
            if (m === 0) {
                m = 60;
            }
            m = m - 1;
            document.getElementById('minute').value = (m < 10 ? '0' : 0) + m;
        }

        //submit timepicker
        var submit = document.getElementById("submitTime");
        submit.onclick = function () {
            input.value = document.getElementById('hour').value + ':' + document.getElementById('minute').value;
            input.removeAttribute('disabled');
            timePicker.classList.toggle('open');
            timePicker.innerHTML = '';
        }
    }
}

timePicker1('timePicker');
timePicker2('timePicker');
timePicker3('timePicker');
timePicker4('timePicker');
timePicker5('timePicker');
timePicker6('timePicker');
timePicker7('timePicker');
timePicker8('timePicker');
