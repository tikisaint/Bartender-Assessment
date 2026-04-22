import { useState } from “react”;
import Assessment from “./Assessment”;
import ScoreSheet from “./ScoreSheet”;

export default function App() {
const [tool, setTool] = useState(null); // null | ‘assessment’ | ‘scoresheet’

if (tool === “assessment”) return <Assessment onBack={() => setTool(null)} />;
if (tool === “scoresheet”) return <ScoreSheet onBack={() => setTool(null)} />;

return (
<div style={styles.page}>
<div style={styles.card}>
<div style={{ textAlign: “center”, marginBottom: 36 }}>
<div style={{ fontSize: 48, marginBottom: 16 }}>🍸</div>
<h1 style={styles.title}>Bartender Hiring Suite</h1>
<p style={styles.sub}>Select a tool to get started</p>
</div>
<div style={styles.toolGrid}>
<button style={styles.toolBtn} onClick={() => setTool(“assessment”)}>
<span style={styles.toolIcon}>📋</span>
<span style={styles.toolLabel}>Candidate Assessment</span>
<span style={styles.toolDesc}>Pre-interview test sent to or given to candidates. 15 scored questions across 6 categories.</span>
<span style={styles.toolArrow}>→</span>
</button>
<button style={styles.toolBtn} onClick={() => setTool(“scoresheet”)}>
<span style={styles.toolIcon}>📝</span>
<span style={styles.toolLabel}>Interviewer Score Sheet</span>
<span style={styles.toolDesc}>For your use during the interview. Rate candidates and build a ranked comparison pool.</span>
<span style={styles.toolArrow}>→</span>
</button>
</div>
</div>
</div>
);
}

const styles = {
page: {
minHeight: “100vh”,
background: “linear-gradient(135deg, #1a1205 0%, #2c1e08 50%, #1a1205 100%)”,
display: “flex”,
alignItems: “center”,
justifyContent: “center”,
padding: 20,
fontFamily: “system-ui, sans-serif”,
},
card: {
background: “#fff”,
borderRadius: 24,
padding: “44px 36px”,
width: “100%”,
maxWidth: 520,
boxShadow: “0 24px 80px rgba(0,0,0,0.4)”,
},
title: {
fontFamily: “‘Playfair Display’, Georgia, serif”,
fontSize: 30,
fontWeight: 700,
color: “#1a1a1a”,
margin: “0 0 8px”,
},
sub: {
color: “#999”,
fontSize: 15,
fontFamily: “Georgia, serif”,
margin: 0,
},
toolGrid: {
display: “flex”,
flexDirection: “column”,
gap: 14,
},
toolBtn: {
background: “#faf8f4”,
border: “1.5px solid #e8e0d0”,
borderRadius: 16,
padding: “20px 22px”,
textAlign: “left”,
cursor: “pointer”,
display: “flex”,
flexDirection: “column”,
gap: 6,
transition: “all 0.15s ease”,
fontFamily: “inherit”,
position: “relative”,
},
toolIcon: { fontSize: 24 },
toolLabel: {
fontSize: 17,
fontWeight: 700,
color: “#1a1a1a”,
fontFamily: “‘Playfair Display’, Georgia, serif”,
},
toolDesc: {
fontSize: 13,
color: “#888”,
lineHeight: 1.5,
},
toolArrow: {
position: “absolute”,
right: 20,
top: “50%”,
transform: “translateY(-50%)”,
fontSize: 18,
color: “#C8A96E”,
fontWeight: 700,
},
};
