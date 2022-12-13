jQuery((function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;function a(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),t(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)}a.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},a.prototype.run=function(){var a=this,r=a.requests[0].complete;a.requests[0].complete=function(){"function"==typeof r&&r(),a.requests.shift(),0<a.requests.length&&a.run()},t.ajax(this.requests[0])},a.prototype.onAddToCart=function(a){var r=t(this);if(r.is(".ajax_add_to_cart")){if(!r.attr("data-product_id"))return!0;a.preventDefault(),r.removeClass("added"),r.addClass("loading");var e={};t.each(r.data(),(function(t,a){e[t]=a})),t(document.body).trigger("adding_to_cart",[r,e]),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:e,success:function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,r]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},a.prototype.onRemoveFromCart=function(a){var r=t(this),e=r.closest(".woocommerce-mini-cart-item");a.preventDefault(),e.block({message:null,overlayCSS:{opacity:.6}}),a.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:r.data("cart_item_key")},success:function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash,r]):window.location=r.attr("href")},error:function(){window.location=r.attr("href")},dataType:"json"})},a.prototype.updateButton=function(a,r,e,o){(o=void 0!==o&&o)&&(o.removeClass("loading"),o.addClass("added"),wc_add_to_cart_params.is_cart||0!==o.parent().find(".added_to_cart").length||o.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[o]))},a.prototype.updateFragments=function(a,r){r&&(t.each(r,(function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})})),t.each(r,(function(a,r){t(a).replaceWith(r),t(a).stop(!0).css("opacity","1").unblock()})),t(document.body).trigger("wc_fragments_loaded"))},new a}));