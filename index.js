async function loadData() {
    const response1 = await fetch('index.section1.json');
    const section1 = await response1.json();

    const response2 = await fetch('index.section2.json');
    const section2 = await response2.json();

    const response3 = await fetch('index.section3.json');
    const section3 = await response3.json();

    return [section1, section2, section3];
}

document.addEventListener('DOMContentLoaded', async () => {
    const sections = await loadData();

    document.getElementById('headings10').textContent = sections[0].heading;
    document.getElementById('image').innerHTML = `<a href=""><img src="${sections[0].image.source}" alt=""></a>`;
    document.getElementById('explain').innerHTML = sections[0].explanation;

    document.getElementById('headings11').textContent = sections[1].heading;
    document.getElementById('image01').innerHTML = `<a href=""><img src="${sections[1].image.source}" alt=""></a>`;
    document.getElementById('explain01').innerHTML = sections[1].explanation;

    document.getElementById('headings12').textContent = sections[2].heading;
    document.getElementById('image02').innerHTML = `<a href=""><img src="${sections[2].image.source}" alt=""></a>`;
    document.getElementById('explain02').innerHTML = sections[2].explanation;
});

function subscribe() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
  
    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }
  
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  
    emailInput.value = ''; // Clear input after subacaribe
  
    alert("Thank you for subscribing!");
  }

  const isAdmin = true; 
    if (isAdmin) {
    const adminButton = document.createElement('button');
    adminButton.textContent = "Admin Dashboard";
    adminButton.addEventListener('click', function() {
        window.location.href = "dashboard.html";
    });

    document.querySelector('footer').appendChild(adminButton);
    }
