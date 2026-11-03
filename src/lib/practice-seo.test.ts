import { describe, expect, test } from "bun:test";
import { practiceSchema } from "./practice-seo";

describe("Published practice hours", () => {
  const hours = practiceSchema["@graph"][0].openingHoursSpecification;
  test("weekdays are 08:00 to 19:00", () => {
    expect(hours?.[0]).toMatchObject({ dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" });
  });
  test("both weekend days are 08:00 to 14:00", () => {
    expect(hours?.[1]).toMatchObject({ dayOfWeek: ["Saturday", "Sunday"], opens: "08:00", closes: "14:00" });
  });
});
describe("Two distinct LifePoint consulting addresses", () => {
  const [mayorsWalk, manor] = practiceSchema["@graph"];
  test("Mayors Walk remains the main surgery", () => {
    expect(mayorsWalk.address?.streetAddress).toContain("68 Mayors Walk Road");
  });
  test("Manor is inside the pharmacy and has no assumed opening hours", () => {
    expect(manor.name).toContain("Manor consulting room");
    expect(manor.address?.streetAddress).toContain("2 Ohrtmann Road");
    expect("openingHoursSpecification" in manor).toBe(false);
  });
});
