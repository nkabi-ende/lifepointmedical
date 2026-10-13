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