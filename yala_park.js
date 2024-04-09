// index.js

async function loadData() {
    const response1 = await fetch('yala.section1.json');
    const section1 = await response1.json();
  
    const response2 = await fetch('yala.section2.json');
    const section2 = await response2.json();
  
    const response3 = await fetch('yala.section3.json');
    const section3 = await response3.json();
  
    return [section1, section2, section3];
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const sections = await loadData();
  
    document.getElementById('heading10').textContent = sections[0].heading;
    document.getElementById('image10').src = sections[0].image.source;
    document.getElementById('explain').innerHTML = sections[0].explanation;
  
    document.getElementById('heading11').textContent = sections[1].heading;
    document.getElementById('image11').src = sections[1].image.source;
    document.getElementById('explain01').innerHTML = sections[1].explanation;
  
    document.getElementById('heading12').textContent = sections[2].heading;
    document.getElementById('image12').src = sections[2].image.source;
    document.getElementById('explain02').innerHTML = sections[2].explanation;
  });
  