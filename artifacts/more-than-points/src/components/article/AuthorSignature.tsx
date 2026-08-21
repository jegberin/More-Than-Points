const colors = {
  primary: "#4d6451",
  secondary: "#545f72",
  onSurface: "#1c1c18",
  outlineVariant: "#c3c8c0",
};

/** Angela's sign-off, rendered by ArticleLayout at the end of every article. */
export default function AuthorSignature() {
  return (
    <div
      style={{
        borderTop: `1px solid ${colors.outlineVariant}`,
        paddingTop: "1.5rem",
        marginTop: "3rem",
        maxWidth: "44rem",
      }}
    >
      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: "1.0625rem",
          color: colors.onSurface,
          marginBottom: "0.25rem",
        }}
      >
        Angela O'Sullivan
      </p>
      <p style={{ color: colors.primary, fontSize: "0.9375rem", fontStyle: "italic" }}>
        Coaching for Life Beyond the Points
      </p>
    </div>
  );
}
