async function loadData() {
    const response1 = await fetch('conservation.section1.json');
    const section1 = await response1.json();
  
    
    return [section1];
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const sections = await loadData();
  
    document.getElementById('heading10').textContent = sections[0].about.title;
    document.getElementById('image10').src = sections[0].about.image;
    document.getElementById('explain').innerHTML = sections[0].about.description;
  
    
  });
  