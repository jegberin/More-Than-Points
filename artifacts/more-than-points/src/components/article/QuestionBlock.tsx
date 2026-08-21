import type { ReactNode } from "react";

const colors = {
  primary: "#4d6451",
  onPrimary: "#ffffff",
  secondary: "#545f72",
  surfaceContainerLow: "#f6f3ec",
  onSurface: "#1c1c18",
};

type QuestionBlockProps = {
  number?: number;
  question: string;
  children: ReactNode;
};

/** A numbered question with its explanation — for "questions worth asking" sections. */
export default function QuestionBlock({ number, question, children }: QuestionBlockProps) {
  return (
    <div
      style={{
        backgroundColor: colors.surfaceContainerLow,
        borderRadius: "0.875rem",
        padding: "1.5rem 1.75rem",
        maxWidth: "44rem",
      }}
    >
      <div style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: "0.625rem" }}>
        {number !== undefined && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1.75rem",
              height: "1.75rem",
              borderRadius: "9999px",
              backgroundColor: colors.primary,
              color: colors.onPrimary,
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              flexShrink: 0,
            }}
          >
            {number}
          </span>
        )}
        <h3
          style={{
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontSize: "1.1875rem",
            fontWeight: 700,
            color: colors.onSurface,
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          {question}
        </h3>
      </div>
      <div
        style={{
          color: colors.secondary,
          fontSize: "1rem",
          lineHeight: 1.75,
          paddingLeft: number !== undefined ? "2.625rem" : 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        {children}
      </div>
    </div>
  );
}
