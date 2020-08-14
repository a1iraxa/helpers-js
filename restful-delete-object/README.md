# restful-delete-object
Restful DELETE request using &lt;a>

##### Inspired By: https://gist.github.com/dirkpostma/5442850

```
if (typeof jQuery === "undefined") {
    throw new Error("jQuery plugins need to be before this file");
}

"use strict";

/* globals jQuery, $, Notifications */
/* jshint strict:false */

$(document).ready(function () {

    /*
    Add click handler to hyperlinks to send restful DELETE requests
    Example:	
    <a href="/delete/1" class="rest-delete">delete</a>
    <script>restful.init('.rest-delete');</script> 
    */
    
    var restful = {
	/*
	TODO: add various configurations, e.g.
	- do_confirm: [ true | false ]
	- confirm_message: "Are you sure?"
	- do_remove_parent: [ true | false ]
	- parent_selector: '.li' '.div' ...
	- success: (closure)
	*/
        
        init: function (elem_class) {
            $(document).on('click', elem_class, function (e) {
                var self = $(this);
                e.preventDefault();
                if (confirm('Are you sure?')) {
                    $.ajax({
		    	url: self.attr('href'),
			type: 'POST',
			data: { '_method': 'DELETE'},
                        success: function (data) {
                            if (data.success) {
                                console.log('Success', 'Deleted.');
                            } else {
                                console.log('Warning', data.message);
                            }

                            if (data.remove) {
                                self.parents('tr')[0].remove();// todo: make configurable
                            }

                            if (data.hide) {
                                self.parents('tr')[0].hide();// todo: make configurable
                            }

                            if (data.reload) {
                                window.location.reload(true);
                            }
                        },
                        error: function (data) {
                            alert("Error while deleting.");
                            console.log(data);
                        }
                    });
                };

            });
        },
    };

    restful.init('.rest-delete');    
});
```
