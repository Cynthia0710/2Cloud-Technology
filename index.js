$(".dropdown").hover(
    function () {
        $(this).addClass("show");
        $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
        $(this).removeClass("show");
        $(this).find(".dropdown-menu").removeClass("show");
    }
);

$(".contact-page-phone").hover(
    function () {
        $(this).css("text-decoration", "underline");
    },
    function () {
        $(this).css("text-decoration", "none");
    }
);

const trustImages = ["images/trust-1.png", "images/trust-2.png"];
var currentImageIndex = 0;
setInterval(function () {
    currentImageIndex =
        currentImageIndex < trustImages.length - 1 ? currentImageIndex + 1 : 0;
    $("#trust-image").attr("src", trustImages[currentImageIndex]);
}, 3000);

$(function () {
    $("#latest-products").trigger("click");
});

$("#latest-products").click(function () {
    $(".product-card").addClass("d-none");
    $(".latest-products-item").removeClass("d-none");
    $("#more-product-btn-text").text("SEE ALL LATEST PRODUCTS");
});

$("#best-sellers").click(function () {
    $(".product-card").addClass("d-none");
    $(".best-sellers-item").removeClass("d-none");
    $("#more-product-btn-text").text("SEE ALL BEST SELLERS");
});

$("#express-products").click(function () {
    $(".product-card").addClass("d-none");
    $(".express-products-item").removeClass("d-none");
    $("#more-product-btn-text").text("SEE ALL EXPRESS PRODUCTS");
});

$("#clothing").click(function () {
    $(".product-card").addClass("d-none");
    $(".clothing-item").removeClass("d-none");
    $("#more-product-btn-text").text("SEE ALL CLOTHING & APPAREL");
});

$("#eco").click(function () {
    $(".product-card").addClass("d-none");
    $(".eco-item").removeClass("d-none");
    $("#more-product-btn-text").text("SEE ALL ECO FRIENDLY PRODUCTS");
});

$("#benefit-email").hover(
    function () {
        $("#benefit-email").css("background-color", "#FFFFFF");
        $("#benefit-email-logo").css("color", "#214fff");
    },
    function () {
        $("#benefit-email").css("background-color", "#214fff");
        $("#benefit-email-logo").css("color", "#FFFFFF");
    }
);

$("#benefit-tel").hover(
    function () {
        $("#benefit-tel").css("background-color", "#FFFFFF");
        $("#benefit-tel-logo").css("color", "#214fff");
    },
    function () {
        $("#benefit-tel").css("background-color", "#214fff");
        $("#benefit-tel-logo").css("color", "#FFFFFF");
    }
);

$("#benefit-fb").hover(
    function () {
        $("#benefit-fb").css("background-color", "#FFFFFF");
        $("#benefit-fb-logo").css("color", "#214fff");
    },
    function () {
        $("#benefit-fb").css("background-color", "#214fff");
        $("#benefit-fb-logo").css("color", "#FFFFFF");
    }
);

$("#benefit-mel-logo").hover(
    function () {
        $("#benefit-mel-text").html("3/2 DARLING ST<br>SOUTH YARRA VIC 3141");
    },
    function () {
        $("#benefit-mel-text").text("MELBOURNE");
    }
);

$("#benefit-syd-logo").hover(
    function () {
        $("#benefit-syd-text").html("16/285A CROWN ST<br>SURRY HILLS NSW 2010");
    },
    function () {
        $("#benefit-syd-text").text("SYDNEY");
    }
);

$("#benefit-gold-logo").hover(
    function () {
        $("#benefit-gold-text").html(
            "6/194 VARSITY PARADE<br>VARSITY LAKES QLD 4227"
        );
    },
    function () {
        $("#benefit-gold-text").text("GOLD COAST");
    }
);

$("#headingOne-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseOne)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseOne").hasClass("show")) {
        $("#basicAccordionCollapseOne").removeClass("show");
    } else {
        $("#basicAccordionCollapseOne").addClass("show");
    }
});

$("#headingTwo-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseTwo)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseTwo").hasClass("show")) {
        $("#basicAccordionCollapseTwo").removeClass("show");
    } else {
        $("#basicAccordionCollapseTwo").addClass("show");
    }
});

$("#headingThree-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseThree)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseThree").hasClass("show")) {
        $("#basicAccordionCollapseThree").removeClass("show");
    } else {
        $("#basicAccordionCollapseThree").addClass("show");
    }
});

$("#headingFour-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseFour)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseFour").hasClass("show")) {
        $("#basicAccordionCollapseFour").removeClass("show");
    } else {
        $("#basicAccordionCollapseFour").addClass("show");
    }
});

$("#headingFive-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseFive)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseFive").hasClass("show")) {
        $("#basicAccordionCollapseFive").removeClass("show");
    } else {
        $("#basicAccordionCollapseFive").addClass("show");
    }
});

$("#headingSix-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseSix)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseSix").hasClass("show")) {
        $("#basicAccordionCollapseSix").removeClass("show");
    } else {
        $("#basicAccordionCollapseSix").addClass("show");
    }
});

$("#headingSeven-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseSeven)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseSeven").hasClass("show")) {
        $("#basicAccordionCollapseSeven").removeClass("show");
    } else {
        $("#basicAccordionCollapseSeven").addClass("show");
    }
});

$("#headingEight-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseEight)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseEight").hasClass("show")) {
        $("#basicAccordionCollapseEight").removeClass("show");
    } else {
        $("#basicAccordionCollapseEight").addClass("show");
    }
});

$("#headingNine-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseNine)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseNine").hasClass("show")) {
        $("#basicAccordionCollapseNine").removeClass("show");
    } else {
        $("#basicAccordionCollapseNine").addClass("show");
    }
});

$("#headingTen-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseTen)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseTen").hasClass("show")) {
        $("#basicAccordionCollapseTen").removeClass("show");
    } else {
        $("#basicAccordionCollapseTen").addClass("show");
    }
});

$("#headingEleven-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseEleven)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseEleven").hasClass("show")) {
        $("#basicAccordionCollapseEleven").removeClass("show");
    } else {
        $("#basicAccordionCollapseEleven").addClass("show");
    }
});

$("#headingTwelve-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseTwelve)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseTwelve").hasClass("show")) {
        $("#basicAccordionCollapseTwelve").removeClass("show");
    } else {
        $("#basicAccordionCollapseTwelve").addClass("show");
    }
});

$("#headingThirteen-btn").click(function () {
    $(".accordion-collapse:not(#basicAccordionCollapseThirteen)").removeClass(
        "show"
    );
    if ($("#basicAccordionCollapseThirteen").hasClass("show")) {
        $("#basicAccordionCollapseThirteen").removeClass("show");
    } else {
        $("#basicAccordionCollapseThirteen").addClass("show");
    }
});
