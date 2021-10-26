const state0=0;
const state1=1;
const state2=2;
const state3=3;
const state4=4;
const state5=5;
const state6=6;


function manageChart(state) {
  switch (state) {

    case state1:
      document.getElementById('div0').style.display = 'block';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'none';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'none';
      break;
    case state2:
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'block';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'none';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'none';
      break;
    case state3:
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'block';
      document.getElementById('div3').style.display = 'none';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'none';
      break;
    case state4:
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'block';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'none';
      break;
    case state5:
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'none';
      document.getElementById('div4').style.display = 'block';
      document.getElementById('div5').style.display = 'none';
      break;
    case state6:
      document.getElementById('div0').style.display = 'none';
      document.getElementById('div1').style.display = 'none';
      document.getElementById('div2').style.display = 'none';
      document.getElementById('div3').style.display = 'none';
      document.getElementById('div4').style.display = 'none';
      document.getElementById('div5').style.display = 'block';
      break;
    default:
      break;
  }

}