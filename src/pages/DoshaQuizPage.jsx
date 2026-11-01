import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doshaQuestionsData, doshaProfiles } from '../data/doshaQuestionsData';
import { useLanguage } from '../context/LanguageContext';

export const DoshaQuizPage = () => {
  const { lang } = useLanguage();
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const totalQuestions = doshaQuestionsData.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (questionId, dosha) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: dosha
    }));
  };

  const calculateResults = (e) => {
    e.preventDefault();
    if (answeredCount < totalQuestions) {
      alert('Please answer all 6 questions to calculate your Ayurvedic constitution.');
      return;
    }

    const counts = { vata: 0, pitta: 0, kapha: 0 };
    Object.values(answers).forEach(dosha => {
      if (counts[dosha] !== undefined) {
        counts[dosha] += 1;
      }
    });

    // Find highest dosha
    let dominant = 'vata';
    if (counts.pitta > counts[dominant]) dominant = 'pitta';
    if (counts.kapha > counts[dominant]) dominant = 'kapha';

    setResult({
      dominant,
      counts,
      profile: doshaProfiles[dominant]
    });

    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Free Self-Assessment
          </span>
          <h1 className="font-cinzel fw-bold mb-2">
            Discover Your Ayurvedic Constitution (Prakriti)
          </h1>
          <p className="text-muted">
            Answer these 6 intuitive questions to find out your dominant Dosha —{' '}
            <strong>Vata</strong>, <strong>Pitta</strong>, or <strong>Kapha</strong> — and receive
            personalized dietary and lifestyle recommendations!
          </p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container" style={{ maxWidth: '850px' }}>
          {!result ? (
            <div className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2 small text-muted">
                <span>Progress: {answeredCount} of {totalQuestions} Answered</span>
                <span className="fw-bold text-ayur-primary">{progressPercent}%</span>
              </div>
              <div className="progress mb-4" style={{ height: '8px' }}>
                <div
                  className="progress-bar bg-gold"
                  role="progressbar"
                  style={{ width: `${progressPercent}%`, transition: 'width 0.3s ease' }}
                ></div>
              </div>

              <form onSubmit={calculateResults}>
                {doshaQuestionsData.map((q) => (
                  <div key={q.id} className="quiz-question mb-4 pb-3 border-bottom">
                    <h5 className="fw-bold mb-3">
                      <span className="badge bg-ayur-primary me-2">{q.id}</span>
                      {lang === 'hi' ? q.titleHi : q.title}
                    </h5>
                    <div className="d-flex flex-column gap-2">
                      {q.options.map((opt) => {
                        const isSelected = answers[q.id] === opt.dosha;
                        return (
                          <label
                            key={opt.dosha}
                            className={`p-3 border rounded-3 cursor-pointer d-flex align-items-center gap-3 transition-all ${
                              isSelected ? 'border-success bg-gold-subtle shadow-sm' : 'hover-bg-light'
                            }`}
                            style={{ cursor: 'pointer' }}
                          >
                            <input
                              type="radio"
                              name={`q_${q.id}`}
                              value={opt.dosha}
                              checked={isSelected}
                              onChange={() => handleSelectOption(q.id, opt.dosha)}
                              className="form-check-input mt-0 flex-shrink-0"
                            />
                            <span className="small">
                              {lang === 'hi' ? opt.labelHi : opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 pt-3">
                  <span className="text-muted small text-center text-sm-start">
                    {answeredCount < totalQuestions
                      ? `Please answer all questions (${totalQuestions - answeredCount} remaining)`
                      : 'All questions completed! Ready to analyze.'}
                  </span>
                  <button
                    type="submit"
                    className="btn btn-ayur-primary btn-lg rounded-pill px-4 px-sm-5 py-2 py-sm-3 shadow-sm w-100 w-sm-auto text-center"
                    disabled={answeredCount < totalQuestions}
                  >
                    <i className="fa-solid fa-wand-magic-sparkles me-2"></i> Reveal My Dosha
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Result Card */
            <div className="bg-white p-3 p-sm-4 p-md-5 rounded-4 border shadow-sm">
              <div className="text-center pb-4 border-bottom mb-4">
                <span className="badge bg-gold text-dark px-3 py-1 rounded-pill fw-bold mb-2">
                  Prakriti Assessment Result
                </span>
                <h2 className="font-cinzel fw-bold mb-1 text-ayur-primary">
                  Your Dominant Constitution is: {result.profile.name}
                </h2>
                <div className="text-muted small mb-3">
                  Governing Elements: <strong>{result.profile.element}</strong>
                </div>

                {/* Score breakdown pills */}
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <span className="badge bg-primary-subtle text-primary border px-3 py-2">
                    Vata Score: {result.counts.vata} / 6
                  </span>
                  <span className="badge bg-danger-subtle text-danger border px-3 py-2">
                    Pitta Score: {result.counts.pitta} / 6
                  </span>
                  <span className="badge bg-success-subtle text-success border px-3 py-2">
                    Kapha Score: {result.counts.kapha} / 6
                  </span>
                </div>
              </div>

              {/* Constitution Overview */}
              <div className="mb-4">
                <h5 className="font-cinzel fw-bold text-ayur-primary mb-2">
                  <i className="fa-solid fa-circle-info text-gold me-2"></i> Constitutional Characteristics
                </h5>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.8' }}>
                  {result.profile.summary}
                </p>
              </div>

              {/* Common Imbalance Signs */}
              <div className="p-3 bg-light rounded-3 border mb-4">
                <h6 className="fw-bold text-danger mb-1 small">
                  <i className="fa-solid fa-triangle-exclamation me-1"></i> Common Signs of Imbalance (विकृति):
                </h6>
                <p className="small text-muted mb-0">{result.profile.imbalanceSigns}</p>
              </div>

              {/* Diet Chart */}
              <div className="mb-4">
                <h5 className="font-cinzel fw-bold text-ayur-primary mb-3">
                  <i className="fa-solid fa-apple-whole text-gold me-2"></i> Recommended Dietary Guidelines (आहार)
                </h5>
                <div className="row g-2">
                  {result.profile.dietAdvice.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="p-3 bg-light rounded-3 border d-flex align-items-start gap-2 h-100">
                        <i className="fa-solid fa-check text-success fs-5 mt-0.5"></i>
                        <span className="small">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Routine */}
              <div className="mb-4">
                <h5 className="font-cinzel fw-bold text-ayur-primary mb-3">
                  <i className="fa-solid fa-sun text-gold me-2"></i> Daily Lifestyle Recommendations (दिनचर्या)
                </h5>
                <div className="row g-2">
                  {result.profile.lifestyleAdvice.map((item, idx) => (
                    <div key={idx} className="col-md-6">
                      <div className="p-3 bg-light rounded-3 border d-flex align-items-start gap-2 h-100">
                        <i className="fa-solid fa-spa text-gold fs-5 mt-0.5"></i>
                        <span className="small">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 bg-dark-green-glass text-white rounded-4 border border-warning shadow-sm mt-4 text-center">
                <h5 className="font-cinzel fw-bold mb-2 text-white">
                  Get a Comprehensive Pulse Diagnosis (Nadi Pariksha)
                </h5>
                <p className="text-light-muted small mb-3">
                  Consult with Dr. Sharvan Kumar to get your personalized herbal formulation and complete pulse analysis.
                </p>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                  <Link to="/book" className="btn btn-ayur-gold rounded-pill px-4 fw-bold text-dark">
                    <i className="fa-solid fa-calendar-check me-2"></i> Book Consultation (₹100 OPD)
                  </Link>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-outline-light rounded-pill px-4"
                  >
                    <i className="fa-solid fa-rotate-left me-1"></i> Retake Quiz
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
