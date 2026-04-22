import { useState } from “react”;

const questions = [
{
id: 1,
category: “Experience”,
question: “How many years of bartending experience do you have?”,
type: “single”,
options: [
{ text: “Less than 6 months”, score: 0 },
{ text: “6 months – 1 year”, score: 1 },
{ text: “1–2 years”, score: 2 },
{ text: “3–5 years”, score: 3 },
{ text: “5+ years”, score: 4 },
],
},
{
id: 2,
category: “Experience”,
question: “What is the highest-volume environment you’ve regularly worked in?”,
type: “single”,
options: [
{ text: “Low-volume bar or lounge (under 50 covers/night)”, score: 0 },
{ text: “Mid-volume restaurant bar (50–150 covers/night)”, score: 1 },
{ text: “High-volume bar or pub (150–300 covers/night)”, score: 2 },
{ text: “Nightclub, stadium, or event bar (300+ covers/night)”, score: 3 },
],
},
{
id: 3,
category: “Technique”,
question: “A guest orders a Negroni. What are the correct base ingredients?”,
type: “single”,
options: [
{ text: “Gin, Campari, Sweet Vermouth”, score: 3 },
{ text: “Vodka, Campari, Dry Vermouth”, score: 0 },
{ text: “Gin, Aperol, Sweet Vermouth”, score: 1 },
{ text: “Rum, Campari, Sweet Vermouth”, score: 0 },
],
},
{
id: 4,
category: “Technique”,
question: “What does it mean to ‘build’ a cocktail versus ‘shake’ one?”,
type: “single”,
options: [
{ text: “Building means making multiple drinks; shaking means a single drink”, score: 0 },
{ text: “Built drinks are assembled directly in the serving glass; shaken drinks are mixed with ice in a shaker tin and strained”, score: 3 },
{ text: “Built drinks are cold; shaken drinks are warm”, score: 0 },
{ text: “There is no difference — it’s just personal preference”, score: 0 },
],
},
{
id: 5,
category: “Technique”,
question: “A guest asks for their martini ‘extra dry.’ What does this mean?”,
type: “single”,
options: [
{ text: “More ice, less vermouth”, score: 1 },
{ text: “Very little or no vermouth”, score: 3 },
{ text: “Served with no ice at all”, score: 0 },
{ text: “A splash of olive brine added”, score: 0 },
],
},
{
id: 6,
category: “Technique”,
question: “What proof is a spirit that contains 40% ABV?”,
type: “single”,
options: [
{ text: “40 proof”, score: 0 },
{ text: “80 proof”, score: 3 },
{ text: “100 proof”, score: 0 },
{ text: “20 proof”, score: 0 },
],
},
{
id: 16,
category: “Technique”,
question: “A guest asks for a wine recommendation to pair with a grilled steak. What would you suggest?”,
type: “single”,
options: [
{ text: “Pinot Grigio or Sauvignon Blanc — crisp whites cut through the fat”, score: 0 },
{ text: “Cabernet Sauvignon or Malbec — full-bodied reds complement red meat”, score: 3 },
{ text: “Rosé — it works with everything”, score: 1 },
{ text: “I wouldn’t make a recommendation — wine isn’t my area”, score: 0 },
],
},
{
id: 7,
category: “Hospitality”,
question: “A guest seems dissatisfied with their drink but hasn’t said anything. What do you do?”,
type: “single”,
options: [
{ text: “Wait for them to complain before acting”, score: 0 },
{ text: “Proactively check in, ask if everything is to their liking, and offer to fix or replace it”, score: 3 },
{ text: “Offer them a free round right away”, score: 1 },
{ text: “Ask a coworker to check on them”, score: 1 },
],
},
{
id: 8,
category: “Hospitality”,
question: “It’s a busy Friday night. A regular guest arrives and the bar is completely packed. How do you handle it?”,
type: “single”,
options: [
{ text: “Acknowledge them with eye contact and a nod so they know you see them, then serve them as soon as possible”, score: 3 },
{ text: “Ignore them until you have a free moment”, score: 0 },
{ text: “Tell them to find a seat somewhere”, score: 0 },
{ text: “Stop what you’re doing and greet them fully”, score: 1 },
],
},
{
id: 9,
category: “Hospitality”,
question: “A guest becomes rude and belligerent after you’ve cut them off. How do you respond?”,
type: “single”,
options: [
{ text: “Argue back and explain all the reasons they’ve been cut off”, score: 0 },
{ text: “Ignore them completely”, score: 0 },
{ text: “Stay calm, remain firm on your decision, offer water or food, and involve a manager if needed”, score: 3 },
{ text: “Serve them one more drink to calm them down”, score: 0 },
],
},
{
id: 10,
category: “Hospitality”,
question: “How do you typically remember a regular guest’s preferences?”,
type: “single”,
options: [
{ text: “I don’t — there are too many guests to track”, score: 0 },
{ text: “I pay attention and make a mental note during their visit, and greet them with their usual next time”, score: 3 },
{ text: “I ask them every time they visit”, score: 1 },
{ text: “I write it down after my shift”, score: 2 },
],
},
{
id: 11,
category: “Compliance & Safety”,
question: “What is the primary sign you should look for when determining if a guest is approaching intoxication?”,
type: “multi”,
options: [
{ text: “Slurred speech”, score: 1 },
{ text: “Loss of coordination / balance”, score: 1 },
{ text: “Increased loudness or aggression”, score: 1 },
{ text: “They ordered a second drink”, score: 0 },
{ text: “Glassy or bloodshot eyes”, score: 1 },
],
},
{
id: 12,
category: “Compliance & Safety”,
question: “A guest presents an ID that looks altered or suspicious. What do you do?”,
type: “single”,
options: [
{ text: “Serve them — they probably just have an old ID”, score: 0 },
{ text: “Ask security or management for a second opinion before making a call”, score: 3 },
{ text: “Ask them to come back with a better ID later”, score: 1 },
{ text: “Ask a coworker to decide”, score: 1 },
],
},
{
id: 13,
category: “Speed & Volume”,
question: “You’re alone at the bar and a rush hits — 8 guests are waiting and tickets are piling up. What’s your move?”,
type: “single”,
options: [
{ text: “Take orders one at a time and work through them individually”, score: 0 },
{ text: “Quickly acknowledge all waiting guests, batch similar drinks together, pre-pull bottles, and work the rail efficiently”, score: 3 },
{ text: “Call for help before doing anything else”, score: 1 },
{ text: “Focus on the loudest guests first to manage the energy”, score: 0 },
],
},
{
id: 17,
category: “Speed & Volume”,
question: “Which of the following habits most helps a bartender stay fast and consistent during a high-volume rush? (Select all that apply)”,
type: “multi”,
options: [
{ text: “Pre-batching common cocktail bases before service”, score: 1 },
{ text: “Keeping a clean and organized rail throughout the shift”, score: 1 },
{ text: “Memorizing the most common orders to reduce hesitation”, score: 1 },
{ text: “Taking detailed notes on each drink before making it”, score: 0 },
{ text: “Setting up garnishes and glassware in advance”, score: 1 },
],
},
{
id: 18,
category: “Speed & Volume”,
question: “What’s your typical approach to handling a large group order of 8–10 drinks at once?”,
type: “single”,
options: [
{ text: “Make each drink one at a time from start to finish”, score: 0 },
{ text: “Group by spirit or method — batch what you can, work efficiently across the rail”, score: 3 },
{ text: “Ask the group to break their order into smaller rounds”, score: 1 },
{ text: “Start with the most complicated drinks and work backwards”, score: 1 },
],
},
{
id: 14,
category: “Operations”,
question: “At the end of a shift, what does a proper bar breakdown typically include? (Select all that apply)”,
type: “multi”,
options: [
{ text: “Restocking bottles and garnishes”, score: 1 },
{ text: “Cleaning and sanitizing the bar top and tools”, score: 1 },
{ text: “Sweeping and mopping the bar floor”, score: 1 },
{ text: “Wipe all bottles and speed rail”, score: 1 },
{ text: “Leaving setup for the next shift”, score: 1 },
],
},
{
id: 15,
category: “Culture Fit”,
question: “What’s your approach when a new menu or cocktail list launches and you’re unfamiliar with the drinks?”,
type: “single”,
options: [
{ text: “Wing it and learn on the fly”, score: 0 },
{ text: “Study the menu beforehand, ask questions, taste everything available, and be upfront with guests if needed”, score: 3 },
{ text: “Stick to the drinks I already know”, score: 0 },
{ text: “Let other bartenders handle those orders”, score: 0 },
],
},
];

const categoryColors = {
Experience: “#C8A96E”,
Technique: “#7EB8A4”,
Hospitality: “#D4846A”,
“Compliance & Safety”: “#8A7EB8”,
“Speed & Volume”: “#E8844A”,
Operations: “#7E9EB8”,
“Culture Fit”: “#B87E9E”,
};

const maxScores = {
Experience: 7,
Technique: 15,
Hospitality: 12,
“Compliance & Safety”: 7,
“Speed & Volume”: 9,
Operations: 5,
“Culture Fit”: 3,
};

export default function Assessment({ onBack }) {
const [stage, setStage] = useState(“intro”);
const [candidateName, setCandidateName] = useState(””);
const [candidateEmail, setCandidateEmail] = useState(””);
const [answers, setAnswers] = useState({});
const [current, setCurrent] = useState(0);
const [submitted, setSubmitted] = useState(null);
const [adminCode, setAdminCode] = useState(””);
const [adminError, setAdminError] = useState(false);
const [allResults, setAllResults] = useState([]);

const handleSelect = (qId, optionText, isMulti) => {
if (isMulti) {
const prev = answers[qId] || [];
const exists = prev.includes(optionText);
setAnswers({ …answers, [qId]: exists ? prev.filter((o) => o !== optionText) : […prev, optionText] });
} else {
setAnswers({ …answers, [qId]: optionText });
}
};

const calcScore = (ans) => {
let total = 0;
let byCategory = {};
questions.forEach((q) => {
const selected = ans[q.id];
if (!selected) return;
const selectedArr = Array.isArray(selected) ? selected : [selected];
q.options.forEach((opt) => {
if (selectedArr.includes(opt.text)) {
total += opt.score;
byCategory[q.category] = (byCategory[q.category] || 0) + opt.score;
}
});
});
return { total, byCategory };
};

const maxTotal = Object.values(maxScores).reduce((a, b) => a + b, 0);
const pct = (val, max) => Math.round((val / max) * 100);

const getRating = (score) => {
const p = pct(score.total, maxTotal);
if (p >= 80) return { label: “Highly Qualified”, color: “#7EB8A4” };
if (p >= 60) return { label: “Strong Candidate”, color: “#C8A96E” };
if (p >= 40) return { label: “Some Experience”, color: “#D4846A” };
return { label: “Needs Development”, color: “#B87E9E” };
};

const canProceed = () => {
const q = questions[current];
const ans = answers[q.id];
if (!ans) return false;
if (Array.isArray(ans) && ans.length === 0) return false;
return true;
};

const handleSubmit = () => {
const score = calcScore(answers);
const result = { name: candidateName, email: candidateEmail, score, answers, date: new Date().toLocaleDateString(), id: Date.now() };
setAllResults((prev) => […prev, result]);
setSubmitted(result);
setStage(“results”);
};

if (stage === “adminLogin”) {
return (
<div style={styles.page}>
<div style={styles.card}>
<button style={styles.backBtn} onClick={() => setStage(“intro”)}>← Back</button>
<h2 style={styles.title}>Manager Access</h2>
<p style={styles.subtitle}>Enter the access code to view candidate results.</p>
<input style={styles.input} type=“password” placeholder=“Access code” value={adminCode} onChange={(e) => setAdminCode(e.target.value)} />
{adminError && <p style={{ color: “#D4846A”, marginTop: 8, fontSize: 13 }}>Incorrect code. Try: 1234</p>}
<button style={styles.btn} onClick={() => { if (adminCode === “1234”) { setStage(“admin”); setAdminError(false); } else setAdminError(true); }}>Access Results</button>
</div>
</div>
);
}

if (stage === “admin”) {
const sorted = […allResults].sort((a, b) => b.score.total - a.score.total);
return (
<div style={{ …styles.page, padding: “40px 20px” }}>
<div style={{ maxWidth: 820, margin: “0 auto” }}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 32 }}>
<h1 style={{ …styles.title, textAlign: “left”, marginBottom: 0 }}>Candidate Results</h1>
<div style={{ display: “flex”, gap: 10 }}>
<button style={styles.btnSm} onClick={() => setStage(“intro”)}>← Exit</button>
<button style={{ …styles.btnSm, background: “#1a1a1a”, color: “#fff”, border: “none” }} onClick={onBack}>🏠 Home</button>
</div>
</div>
{sorted.length === 0 && <div style={{ …styles.card, textAlign: “center”, color: “#888” }}>No submissions yet.</div>}
{sorted.map((r) => {
const rating = getRating(r.score);
return (
<div key={r.id} style={{ …styles.card, marginBottom: 20 }}>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “flex-start”, flexWrap: “wrap”, gap: 12 }}>
<div>
<h3 style={{ fontFamily: “‘Playfair Display’, Georgia, serif”, fontSize: 22, margin: 0, color: “#1a1a1a” }}>{r.name}</h3>
<p style={{ color: “#888”, margin: “4px 0 0”, fontSize: 14 }}>{r.email} · {r.date}</p>
</div>
<div style={{ textAlign: “right” }}>
<div style={{ fontSize: 28, fontWeight: “bold”, color: rating.color, fontFamily: “Georgia, serif” }}>{r.score.total}<span style={{ fontSize: 16, color: “#aaa” }}>/{maxTotal}</span></div>
<div style={{ fontSize: 13, color: rating.color, fontWeight: 600 }}>{rating.label}</div>
</div>
</div>
<div style={{ marginTop: 16, display: “grid”, gridTemplateColumns: “repeat(auto-fill, minmax(180px, 1fr))”, gap: 12 }}>
{Object.entries(r.score.byCategory).map(([cat, score]) => (
<div key={cat}>
<div style={{ display: “flex”, justifyContent: “space-between”, fontSize: 12, color: “#555”, marginBottom: 4 }}>
<span>{cat}</span><span style={{ color: categoryColors[cat] }}>{score}/{maxScores[cat]}</span>
</div>
<div style={{ height: 6, background: “#f0f0f0”, borderRadius: 4, overflow: “hidden” }}>
<div style={{ height: “100%”, width: `${pct(score, maxScores[cat])}%`, background: categoryColors[cat], borderRadius: 4 }} />
</div>
</div>
))}
</div>
</div>
);
})}
</div>
</div>
);
}

if (stage === “intro”) {
return (
<div style={styles.page}>
<div style={styles.card}>
<button style={styles.backBtn} onClick={onBack}>← Home</button>
<div style={{ textAlign: “center” }}>
<div style={{ fontSize: 44, marginBottom: 12 }}>🍸</div>
<h1 style={styles.title}>Bartender Pre-Interview Assessment</h1>
<p style={styles.subtitle}>This short assessment helps us understand your bar experience and hospitality skills. Be honest — your answers help us place you in the right role.</p>
<div style={styles.metaRow}>
<span style={styles.meta}>📋 18 Questions</span>
<span style={styles.meta}>⏱ ~8 Minutes</span>
<span style={styles.meta}>🎯 7 Categories</span>
</div>
</div>
<div style={styles.fieldGroup}>
<label style={styles.label}>Full Name</label>
<input style={styles.input} placeholder=“Jane Smith” value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />
<label style={styles.label}>Email Address</label>
<input style={styles.input} placeholder=“jane@email.com” value={candidateEmail} onChange={(e) => setCandidateEmail(e.target.value)} />
</div>
<button style={{ …styles.btn, opacity: candidateName && candidateEmail ? 1 : 0.4 }} disabled={!candidateName || !candidateEmail} onClick={() => { setCurrent(0); setAnswers({}); setStage(“form”); }}>
Begin Assessment →
</button>
<p style={styles.adminLink} onClick={() => setStage(“adminLogin”)}>Hiring manager? View results</p>
</div>
</div>
);
}

if (stage === “form”) {
const q = questions[current];
const progress = (current / questions.length) * 100;
const catColor = categoryColors[q.category] || “#C8A96E”;
return (
<div style={styles.page}>
<div style={styles.card}>
<div style={styles.progressBar}><div style={{ …styles.progressFill, width: `${progress}%`, background: catColor }} /></div>
<div style={{ display: “flex”, justifyContent: “space-between”, alignItems: “center”, marginBottom: 24 }}>
<span style={{ …styles.categoryBadge, background: catColor + “22”, color: catColor }}>{q.category}</span>
<span style={{ color: “#aaa”, fontSize: 13, fontFamily: “Georgia, serif” }}>{current + 1} / {questions.length}</span>
</div>
<h2 style={styles.questionText}>{q.question}</h2>
{q.type === “multi” && <p style={{ color: “#aaa”, fontSize: 13, marginBottom: 16, fontStyle: “italic” }}>Select all that apply</p>}
<div style={styles.optionList}>
{q.options.map((opt) => {
const sel = q.type === “multi” ? (answers[q.id] || []).includes(opt.text) : answers[q.id] === opt.text;
return (
<button key={opt.text} style={{ …styles.optionBtn, borderColor: sel ? catColor : “#e8e8e8”, background: sel ? catColor + “15” : “#fff” }} onClick={() => handleSelect(q.id, opt.text, q.type === “multi”)}>
<span style={{ …styles.optionDot, borderColor: sel ? catColor : “#ccc”, background: sel ? catColor : “transparent” }} />
{opt.text}
</button>
);
})}
</div>
<div style={styles.navRow}>
{current > 0 && <button style={styles.btnSecondary} onClick={() => setCurrent(current - 1)}>← Back</button>}
<div style={{ flex: 1 }} />
{current < questions.length - 1
? <button style={{ …styles.btn, opacity: canProceed() ? 1 : 0.3, margin: 0, width: “auto”, padding: “12px 24px” }} disabled={!canProceed()} onClick={() => setCurrent(current + 1)}>Next →</button>
: <button style={{ …styles.btn, opacity: canProceed() ? 1 : 0.3, background: “#7EB8A4”, margin: 0, width: “auto”, padding: “12px 24px” }} disabled={!canProceed()} onClick={handleSubmit}>Submit ✓</button>
}
</div>
</div>
</div>
);
}

if (stage === “results” && submitted) {
const rating = getRating(submitted.score);
return (
<div style={styles.page}>
<div style={styles.card}>
<div style={{ textAlign: “center”, marginBottom: 28 }}>
<div style={{ fontSize: 48 }}>🍸</div>
<h2 style={styles.title}>Assessment Complete</h2>
<p style={{ color: “#888”, fontFamily: “Georgia, serif”, fontSize: 14 }}>Thank you, {submitted.name}. Your responses have been recorded.</p>
</div>
<div style={{ textAlign: “center”, marginBottom: 28 }}>
<div style={{ fontSize: 48, fontWeight: “bold”, color: rating.color, fontFamily: “‘Playfair Display’, Georgia, serif” }}>{submitted.score.total}<span style={{ fontSize: 22, color: “#ccc” }}>/{maxTotal}</span></div>
<div style={{ fontSize: 14, color: rating.color, fontWeight: 600, marginTop: 4 }}>{rating.label}</div>
</div>
<div style={{ display: “grid”, gridTemplateColumns: “1fr 1fr”, gap: 12, marginBottom: 28 }}>
{Object.entries(submitted.score.byCategory).map(([cat, score]) => (
<div key={cat} style={{ background: “#fafafa”, borderRadius: 12, padding: “12px 14px” }}>
<div style={{ fontSize: 11, color: “#888”, marginBottom: 5 }}>{cat}</div>
<div style={{ display: “flex”, alignItems: “center”, gap: 8 }}>
<div style={{ flex: 1, height: 6, background: “#ebebeb”, borderRadius: 4, overflow: “hidden” }}>
<div style={{ height: “100%”, width: `${pct(score, maxScores[cat])}%`, background: categoryColors[cat], borderRadius: 4 }} />
</div>
<span style={{ fontSize: 12, color: categoryColors[cat], fontWeight: 600 }}>{score}/{maxScores[cat]}</span>
</div>
</div>
))}
</div>
<div style={{ background: “#f9f5ef”, borderRadius: 12, padding: “16px 18px”, fontSize: 13, color: “#666”, lineHeight: 1.7 }}>
Our team will review your responses and be in touch at <strong>{submitted.email}</strong> if you’ve been selected to move forward. Thank you for your time!
</div>
<button style={{ …styles.btn, background: “#1a1a1a”, marginTop: 16 }} onClick={onBack}>← Return Home</button>
</div>
</div>
);
}

return null;
}

const styles = {
page: { minHeight: “100vh”, background: “linear-gradient(135deg, #1a1205 0%, #2c1e08 50%, #1a1205 100%)”, display: “flex”, alignItems: “center”, justifyContent: “center”, padding: “20px”, fontFamily: “system-ui, sans-serif” },
card: { background: “#fff”, borderRadius: 24, padding: “36px 32px”, width: “100%”, maxWidth: 560, boxShadow: “0 24px 80px rgba(0,0,0,0.4)” },
backBtn: { background: “none”, border: “none”, color: “#bbb”, fontSize: 13, cursor: “pointer”, padding: “0 0 16px”, fontFamily: “inherit” },
title: { fontFamily: “‘Playfair Display’, Georgia, serif”, fontSize: 26, fontWeight: 700, color: “#1a1a1a”, textAlign: “center”, marginBottom: 10, lineHeight: 1.2 },
subtitle: { color: “#666”, fontSize: 14, textAlign: “center”, lineHeight: 1.65, marginBottom: 20, fontFamily: “Georgia, serif” },
metaRow: { display: “flex”, justifyContent: “center”, gap: 16, marginBottom: 24, flexWrap: “wrap” },
meta: { fontSize: 12, color: “#999”, fontFamily: “Georgia, serif” },
fieldGroup: { display: “flex”, flexDirection: “column”, gap: 10, marginBottom: 20 },
label: { fontSize: 12, color: “#555”, fontWeight: 600 },
input: { border: “1.5px solid #e8e8e8”, borderRadius: 10, padding: “11px 13px”, fontSize: 14, color: “#1a1a1a”, outline: “none”, fontFamily: “inherit” },
btn: { background: “#C8A96E”, color: “#fff”, border: “none”, borderRadius: 12, padding: “14px 28px”, fontSize: 15, fontWeight: 700, cursor: “pointer”, fontFamily: “inherit”, width: “100%”, marginTop: 8 },
btnSm: { background: “transparent”, color: “#888”, border: “1.5px solid #e0e0e0”, borderRadius: 10, padding: “8px 16px”, fontSize: 13, cursor: “pointer”, fontFamily: “inherit” },
btnSecondary: { background: “transparent”, color: “#aaa”, border: “1.5px solid #e8e8e8”, borderRadius: 12, padding: “11px 18px”, fontSize: 13, cursor: “pointer”, fontFamily: “inherit” },
adminLink: { textAlign: “center”, color: “#bbb”, fontSize: 12, marginTop: 14, cursor: “pointer”, textDecoration: “underline”, fontFamily: “Georgia, serif” },
progressBar: { height: 4, background: “#f0f0f0”, borderRadius: 4, overflow: “hidden”, marginBottom: 22 },
progressFill: { height: “100%”, borderRadius: 4, transition: “width 0.4s ease” },
categoryBadge: { fontSize: 11, fontWeight: 700, padding: “3px 10px”, borderRadius: 20, letterSpacing: “0.5px”, textTransform: “uppercase” },
questionText: { fontFamily: “‘Playfair Display’, Georgia, serif”, fontSize: 19, color: “#1a1a1a”, lineHeight: 1.45, marginBottom: 18 },
optionList: { display: “flex”, flexDirection: “column”, gap: 9, marginBottom: 24 },
optionBtn: { border: “1.5px solid”, borderRadius: 11, padding: “12px 14px”, textAlign: “left”, fontSize: 13, cursor: “pointer”, fontFamily: “inherit”, lineHeight: 1.4, display: “flex”, alignItems: “flex-start”, gap: 11, transition: “all 0.15s ease”, color: “#333” },
optionDot: { width: 15, height: 15, borderRadius: “50%”, border: “2px solid”, flexShrink: 0, marginTop: 1, transition: “all 0.15s ease” },
navRow: { display: “flex”, alignItems: “center”, gap: 10 },
};
