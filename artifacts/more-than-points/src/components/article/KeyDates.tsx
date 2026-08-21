const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  tertiary: "#775a19",
  tertiaryFixed: "#ffdea5",
  surfaceContainerLowest: "#ffffff",
  onSurface: "#1c1c18",
};

export type KeyDateItem = {
  /** Display string, e.g. "Wed 26 August". Never parsed. */
  date: string;
  /** Optional machine-readable date for <time dateTime>. */
  isoDate?: string;
  label: string;
  detail?: string;
};

type KeyDatesProps = {
  heading?: string;
  items: KeyDateItem[];
  footnote?: string;
};

/** A dated timeline card — "what happens when". */
export default function KeyDates({ heading, items, footnote }: KeyDatesProps) {
  return (
    <div
      style={{
        backgroundColor: colors.surfaceContainerLowest,
        borderRadius: "1rem",
        padding: "1.75rem",
        margin: "2rem 0",
        boxShadow: "0 4px 12px rgba(28,28,24,0.05)",
        maxWidth: "44rem",
      }}
    >
      {heading && (
        <p
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.primary,
            marginBottom: "1.25rem",
          }}
        >
          {heading}
        </p>
      )}

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map(({ date, isoDate, label, detail }) => (
          <li key={`${date}-${label}`} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: colors.tertiaryFixed,
                color: colors.tertiary,
                borderRadius: "9999px",
                padding: "0.3125rem 0.875rem",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {isoDate ? <time dateTime={isoDate}>{date}</time> : date}
            </span>
            <span style={{ flex: 1, minWidth: "12rem" }}>
              <span style={{ fontWeight: 700, color: colors.onSurface, fontSize: "1rem" }}>{label}</span>
              {detail && (
                <span style={{ display: "block", color: colors.secondary, fontSize: "0.9375rem", lineHeight: 1.6, marginTop: "0.25rem" }}>
                  {detail}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {footnote && (
        <p style={{ marginTop: "1.25rem", fontSize: "0.875rem", color: colors.secondary, lineHeight: 1.6 }}>{footnote}</p>
      )}
    </div>
  );
}
