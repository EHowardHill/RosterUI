function openTab(groupClass, tabName) {
    // If tabName is not provided, select the first tab
    if (!tabName) {
        var firstButton = $('.' + groupClass + '.tab-button').first();
        if (firstButton.length > 0) {
            var onclickAttr = firstButton.attr('onclick');
            if (onclickAttr) {
                var match = onclickAttr.match(/openTab\('[^']*',\s*'([^']*)'\)/);
                if (match && match[1]) {
                    tabName = match[1];
                }
            }
        }
        // If no tabName is found, exit gracefully
        if (!tabName) {
            console.warn('No tab buttons found for group:', groupClass);
            return;
        }
    }

    // Hide all tab content in the group
    $('.' + groupClass + '.tab-content').css('display', 'none');

    // Show the selected tab content, ensuring it's part of the group
    var selectedTab = $('#' + tabName + '.' + groupClass + '.tab-content');
    if (selectedTab.length > 0) {
        selectedTab.css('display', 'block');
    } else {
        console.warn('Tab content not found for tabName:', tabName, 'in group:', groupClass);
    }

    // Remove 'active' class from all tab buttons in the group
    $('.' + groupClass + '.tab-button').removeClass('active');

    // Find the button corresponding to tabName and add 'active' class
    var activeButtons = $('.' + groupClass + '.tab-button[onclick*="' + tabName + '"]');
    if (activeButtons.length > 0) {
        activeButtons.first().addClass('active');
    }
}