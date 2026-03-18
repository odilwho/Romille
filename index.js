function selectSlot(element) {
    // Remove active class from all slots
    document.querySelectorAll('.slot').forEach(slot => {
        slot.classList.remove('active');
    });
    
    // Add active class to clicked slot
    element.classList.add('active');
    
    // Play a tiny bounce effect
    element.style.transform = "scale(0.9)";
    setTimeout(() => {
        element.style.transform = "scale(1.1)";
    }, 100);
}
