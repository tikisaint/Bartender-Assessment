import { useState } from “react”;

const criteria = [
{ id: “presence”, label: “First Impression & Presence”, description: “Punctuality, appearance, energy, eye contact” },
{ id: “communication”, label: “Communication”, description: “Clear, confident, articulate — could they talk to guests easily?” },
{ id: “volume_exp”, label: “High-Volume Experience”, description: “Do their examples suggest real speed under pressure?” },
{ id: “hospitality”, label: “Hospitality Instinct”, description: “Do they naturally think about the guest, or just the drink?” },
{ id: “teamwork”, label: “Team Player”, description: “How do they talk about past coworkers and managers?” },
{ id: “coachability”, label: “Coachability”, description: “Open to feedback? Humble about gaps?” },
{ id: “culture”, label: “Culture Fit”, description: “Would this person thrive in your specific environment?” },
];

const ratingLabels = [””, “Poor”, “Below Avg”, “Average”, “Good”, “Excellent”];
const ratingColors = [””, “#c0392b”, “#e67e22”, “#f1c40f”, “#27ae60”, “#2ecc71”];

const recOptions = [
{ label: “Strong Yes — Move Forward”, color: “#7EB8A4”, icon: “✓✓” },
{ label: “Yes — Proceed to Trial Shift”, color: “#C8A96E”, icon: “✓” },
{ label: “Maybe — Follow Up Needed”, color: “#8A7EB8”, icon: “?” },
{ label: “No — Not the Right Fit”, color: “#D4846A”, icon: “✗” },
];

export default function ScoreSheet({ onBack }) {
const [name, setName] = useState(””);
const [position, setPosition] = useState(“Bartender”);
const [date, setDate] = useState(new Date().toISOString().split(“T”)[0]);
const [assessmentScore, setAssessmentScore] = useState(””);
const [assessmentMax] = useState(58);
const [ratings, setRatings] = useState({});
const [notes, setNotes] = useState({});
const [recommendation, setRecommendation] = useState(null);
const [finalNotes, setFinalNotes] = useState(””);
const [saved, setSaved] = useState(false);
const [allSheets, setAllSheets] = useState([]);
const [view, setView] = useState(“form”);

const setRating = (id, val) => setRatings((r) => ({ …r, [id]: val }));
const setNote = (id, val) => setNotes((n) => ({ …n, [id]: val }));

const interviewTotal = Object.values(ratings).reduce((a, b) => a + b, 0);
const interviewMax = criteria.length * 5;
const interviewPct = Math.round((interviewTotal / interviewMax) * 100) || 0;
const assessmentPct = assessmentScore ? Math.round((parseFloat(assessmentScore) / assessmentMax) * 100) : null;
const combinedPct = assessmentPct !== null ? Math.round(interviewPct * 0.5 + assessmentPct * 0.5) : interviewPct;

const getOverallRating = (pct) => {
if (pct >= 80) return { label: “Highly Qualified”, color: “#7EB8A4” };
if (pct >= 65) return { label: “Strong Candidate”, color: “#C8A96E” };
if (pct >= 45) return { label: “Borderline”, color: “#8A7EB8” };
return { label: “Not Recommended”, color: “#D4846A” };
};

const overall = getOverallRating(combinedPct);

const handleSave = () => {
const sheet = { id: Date.now(), name, position, date, assessmentScore, ratings, notes, recommendation, finalNotes, interviewPct, assessmentPct, combinedPct, overall };
setAllSheets((prev) => […prev, sheet]);
setSaved(true);
};

const handleNew = () => {
setName(””); setPosition(“Bartender”); setDate(new Date().toISOString().split(“T”)[0]);
setAssessmentScore(””); setRatings({}); setNotes({});
setRecommendation(null); setFinalNotes(””); setSaved(false); setView(“form”);
};

if (view === “saved”) {
const sorted = […allSheets].sort((a, b) => b.combinedPct - a.combinedPct);
return (
<div style={styles.page}>
<div style={{ maxWidth: 700, margin: “0 auto”, padding: “40px 20px” }}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 28 }}>
<h1 style={{ …styles.heading, fontSize: 26, margin: 0 }}>All Candidates</h1>
<div style={{ display: “flex”, gap: 10 }}>
<button style={styles.btnSecondary} onClick={() => setView(“form”)}>← Back</button>
<button style={styles.btnPrimary} onClick={handleNew}>+ New</button>
<button style={{ …styles.btnPrimary, background: “#555” }} onClick={onBack}>🏠 Home</button>
</div>
</div>
{sorted.length === 0 && <div style={{ …styles.card, textAlign: “center”, color: “#888”, padding: 40 }}>No candidates saved yet.</div>}
{sorted.map((s, i) => (
<div key={s.id} style={{ …styles.card, marginBottom: 14, display: “flex”, justifyContent: “space-between”, alignItems: “center”, flexWrap: “wrap”, gap: 10 }}>
<div>
<div style={{ display: “flex”, alignItems: “center”, gap: 8 }}>
<span style={{ fontFamily: “‘Playfair Display’, Georgia, serif”, fontSize: 19, color: “#1a1a1a” }}>{s.name || “Unnamed”}</span>
{i === 0 && <span style={{ background: “#C8A96E22”, color: “#C8A96E”, fontSize: 10, fontWeight: 700, padding: “2px 7px”, borderRadius: 10 }}>TOP</span>}
</div>
<div style={{ color: “#999”, fontSize: 12, marginTop: 3 }}>{s.date} · {s.recommendation || “No recommendation”}</div>
</div>
<div style={{ textAlign: “right” }}>
<div style={{ fontSize: 24, fontWeight: 700, color: s.overall.color, fontFamily: “Georgia, serif” }}>{s.combinedPct}<span style={{ fontSize: 13, color: “#ccc” }}>%</span></div>
<div style={{ fontSize: 11, color: s.overall.color, fontWeight: 600 }}>{s.overall.label}</div>
</div>
</div>
))}
</div>
</div>
);
}

return (
<div style={styles.page}>
<div style={{ maxWidth: 680, margin: “0 auto”, padding: “40px 20px 80px” }}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, marginBottom: 28, flexWrap: “wrap”, gap: 10 }}>
<div>
<div style={{ fontSize: 11, color: “#C8A96E”, fontWeight: 700, letterSpacing: “2px”, textTransform: “uppercase”, marginBottom: 4 }}>Interview Evaluation</div>
<h1 style={{ …styles.heading, margin: 0 }}>Score Sheet</h1>
</div>
<div style={{ display: “flex”, gap: 8 }}>
{allSheets.length > 0 && <button style={styles.btnSecondary} onClick={() => setView(“saved”)}>View All ({allSheets.length})</button>}
<button style={{ …styles.btnSecondary }} onClick={onBack}>🏠 Home</button>
</div>
</div>

```
    {/* Candidate Info */}
    <div style={styles.card}>
      <div style={styles.sectionLabel}>Candidate Info</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {[
          { label: "Candidate Name", val: name, set: setName, placeholder: "Jane Smith", type: "text" },
          { label: "Position", val: position, set: setPosition, placeholder: "Bartender", type: "text" },
          { label: "Date", val: date, set: setDate, placeholder: "", type: "date" },
          { label: `Assessment Score (out of ${assessmentMax})`, val: assessmentScore, set: setAssessmentScore, placeholder: "e.g. 44", type: "number" },
        ].map((f) => (
          <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <label style={styles.label}>{f.label}</label>
            <input style={styles.input} type={f.type} placeholder={f.placeholder} value={f.val} min={f.type === "number" ? 0 : undefined} max={f.type === "number" ? assessmentMax : undefined} onChange={(e) => f.set(e.target.value)} />
          </div>
        ))}
      </div>
      {assessmentScore && (
        <div style={{ marginTop: 12, padding: "9px 13px", background: "#f9f5ef", borderRadius: 9, fontSize: 13, color: "#666" }}>
          Assessment: <strong style={{ color: "#1a1a1a" }}>{assessmentScore}/{assessmentMax}</strong>
          <span style={{ marginLeft: 6, color: "#C8A96E", fontWeight: 600 }}>({assessmentPct}%)</span>
        </div>
      )}
    </div>

    {/* Interview Ratings */}
    <div style={styles.card}>
      <div style={styles.sectionLabel}>Interview Ratings</div>
      <p style={{ color: "#999", fontSize: 12, marginBottom: 18, fontStyle: "italic" }}>Rate each area 1–5. Add notes where needed.</p>
      {criteria.map((c) => {
        const r = ratings[c.id] || 0;
        return (
          <div key={c.id} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: "1px solid #f0f0f0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: "#1a1a1a", marginBottom: 2 }}>{c.label}</div>
                <div style={{ fontSize: 12, color: "#aaa" }}>{c.description}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} onClick={() => setRating(c.id, n)} style={{ width: 34, height: 34, borderRadius: 7, border: r === n ? "2px solid " + ratingColors[n] : "1.5px solid #e8e8e8", background: r === n ? ratingColors[n] + "20" : "#fff", color: r === n ? ratingColors[n] : "#bbb", fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all 0.15s" }}>{n}</button>
                  ))}
                </div>
                {r > 0 && <div style={{ fontSize: 10, color: ratingColors[r], fontWeight: 600 }}>{ratingLabels[r]}</div>}
              </div>
            </div>
            <textarea style={{ ...styles.input, minHeight: 46, resize: "vertical", fontSize: 12, marginTop: 10, width: "100%", boxSizing: "border-box" }} placeholder={`Notes on ${c.label}...`} value={notes[c.id] || ""} onChange={(e) => setNote(c.id, e.target.value)} />
          </div>
        );
      })}
    </div>

    {/* Score Summary */}
    <div style={styles.card}>
      <div style={styles.sectionLabel}>Score Summary</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[
          { label: "Assessment", pct: assessmentPct, note: assessmentScore ? `${assessmentScore}/${assessmentMax}` : "Not entered" },
          { label: "Interview", pct: interviewPct, note: `${interviewTotal}/${interviewMax} pts` },
          { label: "Combined", pct: combinedPct, note: "50/50 weighted", highlight: true },
        ].map((s) => (
          <div key={s.label} style={{ background: s.highlight ? "#1a1a1a" : "#f9f5ef", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 10, color: s.highlight ? "#888" : "#aaa", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 5 }}>{s.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "Georgia, serif", color: s.pct === null ? "#ccc" : s.highlight ? "#fff" : overall.color }}>{s.pct === null ? "—" : s.pct}<span style={{ fontSize: 12, opacity: 0.5 }}>%</span></div>
            <div style={{ fontSize: 10, color: s.highlight ? "#666" : "#ccc", marginTop: 3 }}>{s.note}</div>
          </div>
        ))}
      </div>
      <div style={{ background: overall.color + "18", border: "1.5px solid " + overall.color + "44", borderRadius: 10, padding: "11px 15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 600, color: "#555", fontSize: 13 }}>Overall Rating</span>
        <span style={{ fontWeight: 700, color: overall.color, fontSize: 14 }}>{overall.label}</span>
      </div>
    </div>

    {/* Recommendation */}
    <div style={styles.card}>
      <div style={styles.sectionLabel}>Recommendation</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
        {recOptions.map((r) => (
          <button key={r.label} onClick={() => setRecommendation(r.label)} style={{ border: recommendation === r.label ? "2px solid " + r.color : "1.5px solid #e8e8e8", background: recommendation === r.label ? r.color + "18" : "#fff", borderRadius: 11, padding: "11px 12px", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: 9, transition: "all 0.15s", fontFamily: "inherit" }}>
            <span style={{ fontSize: 15, color: r.color, fontWeight: 700, minWidth: 18 }}>{r.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: recommendation === r.label ? "#1a1a1a" : "#555" }}>{r.label}</span>
          </button>
        ))}
      </div>
      <label style={styles.label}>Final Notes</label>
      <textarea style={{ ...styles.input, minHeight: 75, resize: "vertical", width: "100%", boxSizing: "border-box" }} placeholder="Overall impressions, red flags, standout qualities..." value={finalNotes} onChange={(e) => setFinalNotes(e.target.value)} />
    </div>

    {!saved
      ? <button style={{ ...styles.btnPrimary, width: "100%", padding: 15, fontSize: 15 }} onClick={handleSave}>Save & Add to Candidate Pool</button>
      : <div style={{ display: "flex", gap: 10 }}>
          <button style={{ ...styles.btnSecondary, flex: 1, padding: 13 }} onClick={() => setView("saved")}>View All Candidates →</button>
          <button style={{ ...styles.btnPrimary, flex: 1, padding: 13 }} onClick={handleNew}>+ New Score Sheet</button>
        </div>
    }
  </div>
</div>
```

);
}

const styles = {
page: { minHeight: “100vh”, background: “#f4f1ec”, fontFamily: “system-ui, sans-serif” },
card: { background: “#fff”, borderRadius: 16, padding: “22px 22px”, marginBottom: 14, boxShadow: “0 2px 12px rgba(0,0,0,0.06)” },
heading: { fontFamily: “‘Playfair Display’, Georgia, serif”, fontSize: 30, fontWeight: 700, color: “#1a1a1a” },
sectionLabel: { fontSize: 10, fontWeight: 700, color: “#C8A96E”, textTransform: “uppercase”, letterSpacing: “2px”, marginBottom: 14 },
label: { fontSize: 11, fontWeight: 600, color: “#777”, marginBottom: 2 },
input: { border: “1.5px solid #e8e8e8”, borderRadius: 9, padding: “9px 11px”, fontSize: 13, color: “#1a1a1a”, outline: “none”, fontFamily: “inherit”, background: “#fff” },
btnPrimary: { background: “#1a1a1a”, color: “#fff”, border: “none”, borderRadius: 11, fontSize: 13, fontWeight: 700, cursor: “pointer”, fontFamily: “inherit”, padding: “11px 18px” },
btnSecondary: { background: “transparent”, color: “#888”, border: “1.5px solid #e0e0e0”, borderRadius: 11, fontSize: 13, cursor: “pointer”, fontFamily: “inherit”, padding: “11px 18px” },
};
