document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progress-bar");
    const progressText = document.getElementById("progress-text");
    const dateTimeDisplay = document.getElementById("date-time");
    const daysLeftDisplay = document.getElementById("days-left");
  
    function updateProgress() {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
  
      const totalMs = endOfYear - startOfYear;
      const elapsedMs = now - startOfYear;
      const progress = (elapsedMs / totalMs) * 100;
  
      const daysInYear = Math.floor(totalMs / (1000 * 60 * 60 * 24));
      const daysPassed = Math.floor(elapsedMs / (1000 * 60 * 60 * 24));
      const daysRemaining = daysInYear - daysPassed;
  
      // Update progress bar
      progressBar.style.width = `${progress}%`;
      progressText.textContent = `${Math.floor(progress)}% of the year has passed`;
  
      // Update date/time display
      const formatted = now.toLocaleString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      dateTimeDisplay.textContent = formatted;
  
      // Update days remaining
      daysLeftDisplay.textContent = `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} remaining in ${now.getFullYear()}`;
    }
  
    updateProgress();
    setInterval(updateProgress, 1000);
  });
  