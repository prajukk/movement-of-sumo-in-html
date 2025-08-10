// Traffic Signal Control Logic
const junctions = [
    { id: 1, vehicles: Math.floor(Math.random() * 10) },
    { id: 2, vehicles: Math.floor(Math.random() * 10) },
    { id: 3, vehicles: Math.floor(Math.random() * 10) },
    { id: 4, vehicles: Math.floor(Math.random() * 10) }
  ];
  
  function updateSignals() {
    const maxTrafficJunction = junctions.reduce((max, junction) =>
      junction.vehicles > max.vehicles ? junction : max
    );
  
    junctions.forEach(junction => {
      const signal = document.getElementById(`signal${junction.id}`);
      signal.innerHTML = `
        <div class="${junction.id === maxTrafficJunction.id ? 'green' : 'red'}"></div>
      `;
    });
  
    animateVehicles(maxTrafficJunction.id);
  }
  
  function animateVehicles(activeJunction) {
    junctions.forEach(junction => {
      const vehicles = document.getElementById(`vehicles${junction.id}`);
      vehicles.innerHTML = '';
      for (let i = 0; i < junction.vehicles; i++) {
        const vehicle = document.createElement('div');
        vehicle.className = `vehicle ${i % 3 === 0 ? 'bus' : ''}`;
        vehicles.appendChild(vehicle);
      }
      if (junction.id === activeJunction) {
        vehicles.style.animation = 'moveVehicles 5s linear infinite';
      } else {
        vehicles.style.animation = 'none';
      }
    });
  }
  
  // Initialize and Update Every 5 Seconds
  updateSignals();
  setInterval(() => {
    junctions.forEach(j => (j.vehicles = Math.floor(Math.random() * 10)));
    updateSignals();
  }, 5000);
  