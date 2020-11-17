let toggleButton = document.getElementById("toggleButton");

toggleButton.onclick = function (element) {
  let isToggle = element.target.checked;
  chrome.storage.sync.set({ toggle: isToggle }, function () {
    console.log("Value is set to " + isToggle);
  });
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { toggle: isToggle }, () => {
      console.log("hi");
    });
  });
};

chrome.storage.sync.get("toggle", function (result) {
  if (!result) return;
  if (result.toggle) {
    toggleButton.setAttribute("checked", "true");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { toggle: true }, () => {});
    });
  } else {
    toggleButton.removeAttribute("checked");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { toggle: false }, () => {});
    });
  }
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    if (key === "toggle") {
      if (storageChange.newValue) {
        toggleButton.setAttribute("checked", "true");
      } else {
        toggleButton.removeAttribute("checked");
      }
    }

    // console.log(
    //   'Storage key "%s" in namespace "%s" changed. ' +
    //     'Old value was "%s", new value is "%s".',
    //   key,
    //   namespace,
    //   storageChange.oldValue,
    //   storageChange.newValue
    // );
  }
  return true;
});
