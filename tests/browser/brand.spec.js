import { test, expect } from "@playwright/test";

test("studies hold the offer constant and preserve the demo interaction", async ({
  page,
}, testInfo) => {
  for (const [key, file] of [
    ["a", "modernist.html"],
    ["b", "postmodernist.html"],
  ]) {
    for (const width of [1280, 375]) {
      await page.setViewportSize({ width, height: 812 });
      await page.goto(`/explorations/${file}`);
      await expect(page.locator("h1")).toHaveText("Take the side street.");
      await expect(page.locator(".product-intro")).toHaveText(
        "A white tee for plans you find along the way.",
      );
      await expect(page.locator(".price")).toHaveText("$28 USD");
      await expect(
        page.getByRole("button", { name: "Add to demo bag" }),
      ).toBeVisible();
      expect(
        await page
          .locator(".shirt-image")
          .evaluate((img) => img.complete && img.naturalWidth > 0),
      ).toBeTruthy();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBeTruthy();
      await page.screenshot({
        path: testInfo.outputPath(`${key}-${width}.png`),
      });
      if (width === 1280) {
        await page.getByRole("button", { name: "Add to demo bag" }).click();
        await expect(page.getByRole("alert")).toBeVisible();
        await expect(page.locator("#bag-count")).toHaveText("0");
        await page.getByRole("radio", { name: "M", exact: true }).check();
        await page.getByRole("button", { name: "Add to demo bag" }).click();
        await expect(page.locator("#bag-count")).toHaveText("1");
      }
    }
  }
});

test("live guide uses the storefront's actual identity at desktop and phone widths", async ({
  page,
}) => {
  for (const width of [1280, 375]) {
    await page.setViewportSize({ width, height: 812 });
    const presentations = [];
    for (const route of ["/", "/styleguide.html"]) {
      await page.goto(route);
      const styles = {};
      for (const selector of [
        ".brand-headline",
        ".product-intro",
        ".button-primary",
      ]) {
        styles[selector] = await page.locator(selector).evaluate((element) => {
          const css = getComputedStyle(element);
          return Object.fromEntries(
            [
              "fontFamily",
              "fontSize",
              "fontWeight",
              "fontStyle",
              "color",
              "backgroundColor",
              "padding",
            ].map((property) => [property, css[property]]),
          );
        });
      }
      const logo = page.locator("header img.wordmark");
      await expect(logo).toHaveAttribute("src", "assets/wordmark.svg");
      expect(
        await logo.evaluate((img) => img.getBoundingClientRect().width),
      ).toBe(width === 1280 ? 156 : 140);
      presentations.push(styles);
    }
    expect(presentations[1]).toEqual(presentations[0]);
  }
});

test("chosen phone storefront preserves the offer and usable purchase feedback", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Take the side street.");
  await expect(page.locator(".price")).toHaveText("$28 USD");
  await page
    .getByRole("button", { name: "Add to demo bag", exact: true })
    .click();
  await expect(page.locator("#size-error")).toBeVisible();
  await expect(page.locator("#bag-count")).toHaveText("0");
  await page.getByRole("radio", { name: "M", exact: true }).check();
  await page
    .getByRole("button", { name: "Add to demo bag", exact: true })
    .click();
  await expect(page.locator("#bag-count")).toHaveText("1");
  await expect(page.locator("#bag-status")).toContainText("M");
  await page.screenshot({
    path: testInfo.outputPath("kept-phone.png"),
    fullPage: true,
  });
});
