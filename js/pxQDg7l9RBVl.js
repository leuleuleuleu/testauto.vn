((t,e,i)=>{const d=t=>{let d=i(e).find("#quick_buy_"+t+"_button");d.length>0&&(d.removeAttr("disabled"),d.parent().show())};i((()=>{const t=i(e);t.on("click",".wcqb_button",(function(){let t=i(this).attr("data-product-id"),e=i("form.cart input#wc_quick_buy_hook_"+t).parent(),d=e.find('[type="submit"]');e.append('<input type="hidden" value="true" name="quick_buy" />'),d.is(":disabled")?i("html, body").animate({scrollTop:d.offset().top-200},900):e.find('[type="submit"]').click()})),t.on("change","form.cart",(function(){let t=i(".wcqb_button");i(this).find('[type="submit"]').is(":disabled")?t.attr("disabled","disable"):t.hasClass("wcqb-product-in-cart")||t.removeAttr("disabled")})),t.on("click",'.quick_buy_a_tag[disabled="disabled"]',(t=>t.preventDefault())),t.on("removed_from_cart",((t,e,i,a)=>d(a.attr("data-product_id"))))}))})(window,document,jQuery);