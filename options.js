// Saves options to chrome.storage
function save_options() {
  var tabSize = document.getElementById('tab-size').value;
  chrome.storage.sync.set({
    tabSize: tabSize,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    tabSize: 4,
  }, function(items) {
    document.getElementById('tab-size').value = items.tabSize;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
