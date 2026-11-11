import { describe, expect, test } from "bun:test";
import { careTeam, practitionerBookingMessage, practitionerSelectionLabel } from "./care-team";
import { practiceSchema } from "./practice-seo";

describe("Visiting clinic enquiries", () => {
  test("the dermatologist's last-Sunday schedule reaches the booking request", () => {
    const request = practitionerBookingMessage("Dr Cele");
    expect(request).toContain("Last Sunday of every month");
    expect(request).toContain("Please confirm availability");
    expect(practitionerSelectionLabel("dr-cele")).toContain("Last Sunday of every month");
  });

  test("the unnamed paediatrician has a monthly enquiry, not the dermatology schedule", () => {
    const request = practitionerBookingMessage("Visiting paediatrician");
    expect(request).toContain("the visiting paediatrician");
    expect(request).toContain("Once a month");
    expect(request).not.toContain("Sunday");
    const listing = practiceSchema["@graph"].find((entry) =>
      entry["@id"].endsWith("#visiting-paediatrician"),
    );
    expect(listing?.["@type"]).toBe("Service");
    expect(careTeam.find((person) => person.id === "visiting-paediatrician")?.unnamed).toBe(true);
  });

  test("dietitian availability stays booking based and GPs inherit no specialist schedule", () => {
    expect(practitionerSelectionLabel("njabulo-mvundla")).toContain("Available upon booking");
    expect(practitionerBookingMessage("Dr T. Mncwango")).not.toContain("Sunday");
    expect(practitionerSelectionLabel("")).toBe("Any available practitioner");
  });
});
