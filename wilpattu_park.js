async function loadData() {
  const response1 = await fetch('wilpattu.section1.json');
  const section1 = await response1.json();

  const response2 = await fetch('wilpattu.section2.json');
  const section2 = await response2.json();

  const response3 = await fetch('wilpattu.section3.json');
  const section3 = await response3.json();

  return [section1, section2, section3];
}

document.addEventListener('DOMContentLoaded', async () => {
  const sections = await loadData();

  document.getElementById('heading10').textContent = sections[0].about.title;
  document.getElementById('image10').src = sections[0].about.image;
  document.getElementById('explain').innerHTML = sections[0].about.description;

  document.getElementById('heading11').textContent = sections[1].safariJeepTours.title;
  document.getElementById('image11').src = sections[1].safariJeepTours.image;
  document.getElementById('explain01').innerHTML = sections[1].safariJeepTours.description;

  document.getElementById('heading12').textContent = sections[2].bestTimeToVisit.title;
  document.getElementById('image12').src = sections[2].bestTimeToVisit.image;
  document.getElementById('explain02').innerHTML = sections[2].bestTimeToVisit.description;
});
