async function loadData() {
    const response1 = await fetch('leopards.section1.json');
    const section1 = await response1.json();
  
    const response2 = await fetch('leopard.section2.json');
    const section2 = await response2.json();
  
    const response3 = await fetch('leopards.section3.json');
    const section3 = await response3.json();
  
    const response4 = await fetch('leopard.section4.json');
    const section4 = await response4.json();
  
    return [section1, section2, section3, section4];
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const sections = await loadData();
  
    document.querySelector('.headings10').textContent = sections[0].heading;
    document.querySelector('#image img').src = sections[0].image.source;
    document.querySelector('#explain').innerHTML = sections[0].explanation;
  
    document.querySelector('.headings11').textContent = sections[1].heading;
    document.querySelector('#image01 img').src = sections[1].image.source;
    document.querySelector('#explain01').innerHTML = sections[1].explanation;
  
    document.querySelector('.headings12').textContent = sections[2].heading;
    document.querySelector('#image02 img').src = sections[2].image.source;
    document.querySelector('#explain02').innerHTML = sections[2].explanation;
  
    document.querySelector('.headings').textContent = sections[3].heading;
    document.querySelector('#pic2 img').src = sections[3].image.source;
    document.querySelector('#intro2').innerHTML = sections[3].explanation;
  });
  