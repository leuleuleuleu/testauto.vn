jQuery(function (e) {
    if ("undefined" == typeof wc_cart_fragments_params) return !1;
    var t = !0,
        r = wc_cart_fragments_params.cart_hash_key;
    try {
        (t = "sessionStorage" in window && null !== window.sessionStorage),
            window.sessionStorage.setItem("wc", "test"),
            window.sessionStorage.removeItem("wc"),
            window.localStorage.setItem("wc", "test"),
            window.localStorage.removeItem("wc");
    } catch (e) {
        t = !1;
    }
    function o() {
        t && sessionStorage.setItem("wc_cart_created", new Date().getTime());
    }
    function a(e) {
        t && (localStorage.setItem(r, e), sessionStorage.setItem(r, e));
    }
    // var n = {
    //     url: wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_refreshed_fragments"),
    //     type: "POST",
    //     data: { time: new Date().getTime() },
    //     timeout: wc_cart_fragments_params.request_timeout,
    //     success: function (r) {
    //         r &&
    //             r.fragments &&
    //             (e.each(r.fragments, function (t, r) {
    //                 e(t).replaceWith(r);
    //             }),
    //             t && (sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(r.fragments)), a(r.cart_hash), r.cart_hash && o()),
    //             e(document.body).trigger("wc_fragments_refreshed"));
    //     },
    //     error: function () {
    //         e(document.body).trigger("wc_fragments_ajax_error");
    //     },
    // };
    // function s() {
    //     e.ajax(n);
    // }
    // if (t) {
    //     var i = null;
    //     e(document.body).on("wc_fragment_refresh updated_wc_div", function () {
    //         s();
    //     }),
    //         e(document.body).on("added_to_cart removed_from_cart", function (e, t, n) {
    //             var s = sessionStorage.getItem(r);
    //             (null != s && "" !== s) || o(), sessionStorage.setItem(wc_cart_fragments_params.fragment_name, JSON.stringify(t)), a(n);
    //         }),
    //         e(document.body).on("wc_fragments_refreshed", function () {
    //             clearTimeout(i), (i = setTimeout(s, 864e5));
    //         }),
    //         e(window).on("storage onstorage", function (e) {
    //             r === e.originalEvent.key && localStorage.getItem(r) !== sessionStorage.getItem(r) && s();
    //         }),
    //         e(window).on("pageshow", function (t) {
    //             t.originalEvent.persisted && (e(".widget_shopping_cart_content").empty(), e(document.body).trigger("wc_fragment_refresh"));
    //         });
    //     try {
    //         var c = e.parseJSON(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),
    //             _ = sessionStorage.getItem(r),
    //             g = Cookies.get("woocommerce_cart_hash"),
    //             m = sessionStorage.getItem("wc_cart_created");
    //         if (((null != _ && "" !== _) || (_ = ""), (null != g && "" !== g) || (g = ""), _ && (null == m || "" === m))) throw "No cart_created";
    //         if (m) {
    //             var d = 1 * m + 864e5,
    //                 w = new Date().getTime();
    //             if (d < w) throw "Fragment expired";
    //             i = setTimeout(s, d - w);
    //         }
    //         if (!c || !c["div.widget_shopping_cart_content"] || _ !== g) throw "No fragment";
    //         e.each(c, function (t, r) {
    //             e(t).replaceWith(r);
    //         }),
    //             e(document.body).trigger("wc_fragments_loaded");
    //     } catch (e) {
    //         s();
    //     }
    // } else s();
    // 0 < Cookies.get("woocommerce_items_in_cart") ? e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show() : e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),
    //     e(document.body).on("adding_to_cart", function () {
    //         e(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show();
    //     }),
    //     "undefined" != typeof wp &&
    //         wp.customize &&
    //         wp.customize.selectiveRefresh &&
    //         wp.customize.widgetsPreview &&
    //         wp.customize.widgetsPreview.WidgetPartial &&
    //         wp.customize.selectiveRefresh.bind("partial-content-rendered", function () {
    //             s();
    //         });
});
