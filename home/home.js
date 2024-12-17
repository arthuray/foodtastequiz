// Function to open the sidebar
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add('sidebar-open');
}

// Function to close the sidebar
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove('sidebar-open');
}
