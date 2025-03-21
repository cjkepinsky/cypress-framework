import HomePage from "../pages/homePage";

describe("Product Details", () => {
    const homePage = new HomePage();

    it("should display product details", () => {
        homePage
        .openPage()
        .isBookItemVisible("Tipping the Velvet");
    });
});