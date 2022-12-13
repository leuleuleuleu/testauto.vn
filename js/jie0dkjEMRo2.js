jQuery(document).ready(function (t) {
    "use strict";
    if ("undefined" != typeof yith_qv) {
        var i = t(document).find("#yith-quick-view-modal"),
            n = i.find(".yith-quick-view-overlay"),
            o = i.find("#yith-quick-view-content"),
            e = i.find("#yith-quick-view-close"),
            a = i.find(".yith-wcqv-wrapper"),
            c = a.width(),
            d = a.height(),
            u = function () {
                var i = t(window).width(),
                    n = t(window).height(),
                    o = c < i - 60 ? c : i - 60,
                    e = d < n - 120 ? d : n - 120;
                a.css({ left: i / 2 - o / 2, top: n / 2 - e / 2, width: o + "px", height: e + "px" });
            };
        // t.fn.yith_quick_view = function () {
        //     t(document)
        //         .off("click", ".yith-wcqv-button")
        //         .on("click", ".yith-wcqv-button", function (n) {
        //             n.preventDefault();
        //             var o = t(this),
        //                 e = o.data(""),
        //                 a = !1;
        //             void 0 !== yith_qv.loader &&
        //                 ((a = !0),
        //                 o.block({ message: null, overlayCSS: { background: "#fff url(" + yith_qv.loader + ") no-repeat center", opacity: 0.5, cursor: "none" } }),
        //                 i.hasClass("loading") || i.addClass("loading"),
        //                 t(document).trigger("qv_loading")),
        //                 r(o, e, a);
        //         });
        // };
        var r = function (n, e, a) {
            t.ajax({
                url: yith_qv.ajaxurl,
                data: { action: "yith_load_product_quick_view", product_id: e, lang: yith_qv.lang },
                dataType: "html",
                type: "POST",
                success: function (e) {
                    o.html(e),
                        yith_qv.is2_2 &&
                            o
                                .find("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)")
                                .addClass("buttons_added")
                                .append('<input type="button" value="+" class="plus" />')
                                .prepend('<input type="button" value="-" class="minus" />');
                    var c = o.find(".variations_form");
                    c.each(function () {
                        t(this).wc_variation_form(), void 0 !== t.fn.yith_wccl && t(this).yith_wccl();
                    }),
                        c.trigger("check_variations"),
                        c.trigger("reset_image"),
                        void 0 !== t.fn.prettyPhoto && o.find("a[data-rel^='prettyPhoto'], a.zoom").prettyPhoto({ hook: "data-rel", social_tools: !1, theme: "pp_woocommerce", horizontal_padding: 20, opacity: 0.8, deeplinking: !1 }),
                        void 0 !== t.fn.wc_product_gallery &&
                            o.find(".woocommerce-product-gallery").each(function () {
                                t(this).wc_product_gallery();
                            }),
                        i.hasClass("open") || (i.removeClass("loading").addClass("open"), a && n.unblock()),
                        t(document).trigger("qv_loader_stop");
                },
            });
        };
        !(function () {
            n.on("click", function (t) {
                a();
            }),
                t(document).keyup(function (t) {
                    27 === t.keyCode && a();
                }),
                e.on("click", function (t) {
                    t.preventDefault(), a();
                });
            var a = function () {
                i.removeClass("open").removeClass("loading"),
                    setTimeout(function () {
                        o.html("");
                    }, 1e3);
            };
        })(),
            u(),
            t(window).on("resize", u),
            // t.fn.yith_quick_view(),
            t(document).on("yith_infs_adding_elem yith-wcan-ajax-filtered", function () {
                t.fn.yith_quick_view();
            });
    }
});
