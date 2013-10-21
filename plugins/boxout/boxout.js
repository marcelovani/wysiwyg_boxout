(function ($) {
  Drupal.wysiwyg.plugins['boxout'] = {
    /**
     * Return whether the passed node belongs to this plugin.
     */
    isNode: function(node) {
      // Check for boxout wrapper and inner elements. @TODO loop through.
      var is_boxout = ($(node).is('.boxout') || $(node).parent().is('.boxout')
              || $(node).parent().parent().is('.boxout'));
      return (is_boxout);
    },

    /**
     * Execute the button.
     */
    invoke: function(data, settings, instanceId) {
      this.show_popup(settings, instanceId);
    },

    /**
     * Shows the popup.
     */
    show_popup: function(settings, instanceId) {
      // Check if the form is not yet on the DOM.
      if ($('.boxout-popup').length == 0) {
        // Print the form on the page.
        jQuery("body").append(settings.form_markup);
      }
      // Display popup centered on screen.
      jQuery(".boxout-popup").center().show(function() {
        // Listeners for buttons.
        jQuery("#edit-boxout-cancel").click(function() {
        	alert("a");
          jQuery(".boxout-popup").remove();
        });

        jQuery("#edit-boxout-insert").click(function() {
        	        	alert("b");
          if (typeof(jQuery("#edit-boxout-header").val()) != "undefined") {
            // Content markup.
            var content = settings.header_markup['prefix'] +
                    jQuery("#edit-boxout-header").val() +
                    settings.header_markup['suffix'] +
                    settings.body_markup['prefix'] +
                    jQuery("#edit-boxout-body").val() +
                    settings.body_markup['suffix'];
            // Insert content.
            Drupal.wysiwyg.instances[instanceId].insert(content);
          }
          // Close popup.
          jQuery(".boxout-popup").remove();
        });

        // Catch keyboard events.
        jQuery(document).keydown(function(e) {
          // Esc key pressed.
          if (e.keyCode == 27) {
            jQuery(".boxout-popup").remove();
          }
        });

        jQuery("#edit-boxout-header").focus();
      });
    },
  };
})(jQuery);

/**
 * Center the element on the screen.
 */
if (!jQuery.fn.center) {
  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, ((jQuery(window).height() - jQuery(this).outerHeight()) / 2) +
                                                  jQuery(window).scrollTop()) + "px");
      this.css("left", Math.max(0, ((jQuery(window).width() - jQuery(this).outerWidth()) / 2) +
                                                  jQuery(window).scrollLeft()) + "px");
      return this;
  }
}
