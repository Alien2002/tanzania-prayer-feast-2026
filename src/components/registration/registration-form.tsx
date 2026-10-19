"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
import { regions } from "@/data/registration";
function RadioGroup({
  name,
  legend,
  options,
  onChange,
}: {
  name: string;
  legend: string;
  options: string[];
  onChange?: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="opts">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={name}
              value={option}
              required
              onChange={() => onChange?.(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
export default function RegistrationForm() {
  const [student, setStudent] = useState(false);
  const [link, setLink] = useState("");
  const confirmation = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (link) {
      confirmation.current?.focus();
      confirmation.current?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    }
  }, [link]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    const lines = [
      "Hello TYPA, I would like to register for Prayer Feast 2026 (9 December 2026).",
      "",
      "Full name: " + value("name"),
      "Gender: " + value("gender"),
      "Phone: " + value("phone"),
      "Region of residence: " + value("region"),
      "College or university student: " + value("student"),
    ];
    if (student)
      lines.push(
        "College or university: " + value("college"),
        "Coming from: " + value("from"),
      );
    lines.push("Heard about us through: " + value("heard"));
    if (value("note"))
      lines.push("Comment or prayer request: " + value("note"));
    lines.push(
      "I agree that TYPA may use these details to contact me and share information about TYPA events.",
    );
    setLink(whatsappLink(site.contacts.info, lines.join("\n")));
  }
  return (
    <>
      <form className="fm" onSubmit={submit} onChange={() => setLink("")}>
        <label>
          Full name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            pattern=".*\S.*"
          />
        </label>
        <RadioGroup
          name="gender"
          legend="Gender"
          options={["Male", "Female"]}
        />
        <label>
          Phone number (WhatsApp or normal)
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+255 ..."
            required
            pattern={String.raw`[+0-9 \(\)\-]{7,20}`}
            title="Enter 7–20 characters using digits, spaces, +, parentheses or hyphens."
          />
        </label>
        <label>
          Region of residence
          <input
            name="region"
            type="text"
            list="regions"
            placeholder="e.g. Dar es Salaam"
            autoComplete="address-level1"
            required
            maxLength={100}
            pattern=".*\S.*"
          />
          <datalist id="regions">
            {regions.map((region) => (
              <option value={region} key={region} />
            ))}
          </datalist>
        </label>
        <RadioGroup
          name="student"
          legend="Are you a college or university student?"
          options={["Yes", "No"]}
          onChange={(value) => setStudent(value === "Yes")}
        />
        {student && (
          <div className="fm">
            <label>
              College or university name
              <input
                name="college"
                type="text"
                required
                maxLength={160}
                pattern=".*\S.*"
              />
            </label>
            <label>
              Where do you come from?
              <input
                name="from"
                type="text"
                required
                placeholder="Home region or town"
                maxLength={100}
                pattern=".*\S.*"
              />
            </label>
          </div>
        )}
        <label>
          How did you hear about this conference?
          <select name="heard" required defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {[
              "Instagram",
              "YouTube",
              "WhatsApp",
              "A friend or family member",
              "Church or fellowship",
              "Poster or flyer",
              "Other",
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          Comment or prayer request (optional)
          <textarea name="note" rows={4} maxLength={1000} />
        </label>
        <label className="agree">
          <input name="agree" type="checkbox" required />
          <span>
            I agree that TYPA may use these details to contact me and to share
            information about Prayer Feast 2026 and other TYPA events.
          </span>
        </label>
        <p className="m-0 text-sm text-muted">
          These details are prepared in your browser and sent to TYPA only when
          you send the WhatsApp message.
        </p>
        <button className="btn" type="submit">
          Prepare registration
        </button>
      </form>
      {link && (
        <div
          ref={confirmation}
          tabIndex={-1}
          className="done"
          aria-live="polite"
        >
          <h3>Almost done</h3>
          <p>
            Tap the button to send your details to the TYPA team on WhatsApp.
            Your place is confirmed when we reply.
          </p>
          <a
            className="btn"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="wa" />
            Send on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
