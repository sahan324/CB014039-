// index.js

async function loadData() {
    const response1 = await fetch('wildlife.section1.json');
    const section1 = await response1.json();
  
    const response2 = await fetch('wildlife.section2.json');
    const section2 = await response2.json();
  
    
  
    return [section1, section2, ];
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const sections = await loadData();
  
    document.getElementById('heading10').textContent = sections[0].heading;
    document.getElementById('image10').src = sections[0].image.source;
    document.getElementById('explain').innerHTML = sections[0].explanation;
  
    document.getElementById('heading11').textContent = sections[1].heading;
    document.getElementById('image11').src = sections[1].image.source;
    document.getElementById('explain01').innerHTML = sections[1].explanation;
  
   
  });
  