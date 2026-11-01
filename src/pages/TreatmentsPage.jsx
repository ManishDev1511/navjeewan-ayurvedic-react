import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { treatmentsData, getCategories } from '../data/treatmentsData';
import { useLanguage } from '../context/LanguageContext';

export const TreatmentsPage = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => ['All', ...getCategories()], []);

  const filteredTreatments = useMemo(() => {
    return treatmentsData.filter((treatment) => {
      const matchesCategory =
        selectedCategory === 'All' || treatment.category === selectedCategory;
      const matchesSearch =
        treatment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        treatment.idealFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* Header */}
      <div className="py-5 bg-white border-bottom">
        <div className="container text-center max-w-700 mx-auto">
          <span className="badge bg-gold-subtle text-gold px-3 py-1 rounded-pill mb-2">
            Clinical Catalog
          </span>
          <h1 className="font-cinzel fw-bold mb-2">Ayurvedic Clinical Treatments &amp; Therapies</h1>
          <p className="text-muted">
            Holistic, evidence-based treatments prescribed by <strong>Dr. Sharvan Kumar</strong> (BAMS, NET, JRF, SRF, Ph.D.) to eliminate chronic illness at its root.
          </p>
        </div>
      </div>

      <section className="py-5 bg-ayur-cream">
        <div className="container">
          {/* Controls: Category Filter & Search */}
          <div className="bg-white p-3 p-md-4 rounded-4 border shadow-sm mb-5">
            <div className="row g-3 align-items-center">
              <div className="col-lg-8">
                <div className="d-flex flex-wrap gap-1 gap-sm-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`btn btn-sm rounded-pill px-2 px-sm-3 ${
                        selectedCategory === cat
                          ? 'btn-ayur-primary'
                          : 'btn-outline-secondary'
                      }`}
                      onClick={() => setSelectedCategory(cat)}
                      style={{ fontSize: '0.82rem' }}
                    >
                      {cat === 'All' ? t('filterAll') : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-lg-4">
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0">
                    <i className="fa-solid fa-magnifying-glass text-muted"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-sm border-start-0"
                    placeholder="Search treatment, condition, or dosha..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => setSearchQuery('')}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredTreatments.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border p-5">
              <i className="fa-solid fa-leaf text-gold fs-1 mb-3"></i>
              <h4 className="fw-bold">No Treatments Found</h4>
              <p className="text-muted">Try adjusting your search criteria or category filter.</p>
              <button
                className="btn btn-ayur-primary btn-sm rounded-pill px-4"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredTreatments.map((treatment) => (
                <div key={treatment.id} className="col-lg-4 col-md-6 mb-4">
                  <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden treatment-card bg-white">
                    <div className="position-relative" style={{ height: '210px' }}>
                      <img
                        src={treatment.imageUrl}
                        alt={treatment.title}
                        className="w-100 h-100 object-fit-cover"
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-gold text-dark fw-bold shadow-sm">
                          {treatment.tag}
                        </span>
                      </div>
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <span className="badge bg-dark-green-glass text-gold border border-warning shadow-sm">
                          {treatment.sanskritName}
                        </span>
                      </div>
                    </div>

                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className={`${treatment.iconClass} text-gold fs-5`}></i>
                        <span className="text-muted small text-uppercase tracking-wider fw-bold">
                          {treatment.category}
                        </span>
                      </div>

                      <h5 className="font-cinzel fw-bold mb-2 text-ayur-primary">
                        {treatment.title}
                      </h5>

                      <p className="text-muted small flex-grow-1 mb-3">
                        {treatment.shortDescription}
                      </p>

                      <div className="bg-light p-2 rounded-3 mb-3 small">
                        <strong>Ideal For:</strong> {treatment.idealFor}
                      </div>

                      <div className="border-top pt-3 mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <span className="small text-muted d-inline-flex align-items-center" style={{ fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
                            <i className="fa-regular fa-clock me-1.5 text-gold"></i> {treatment.duration}
                          </span>
                          <span className="badge bg-light text-dark border px-2 py-1 text-truncate" style={{ fontSize: '0.74rem', maxWidth: '145px' }}>
                            {treatment.category}
                          </span>
                        </div>
                        <div className="d-flex gap-2">
                          <Link
                            to={`/treatment/${treatment.id}`}
                            className="btn btn-outline-secondary btn-sm rounded-pill flex-fill text-center py-2"
                            style={{ fontSize: '0.82rem', padding: '0.42rem 0.6rem', whiteSpace: 'nowrap', fontWeight: 600 }}
                          >
                            Details
                          </Link>
                          <Link
                            to={`/book?category=${encodeURIComponent(treatment.category)}`}
                            className="btn btn-ayur-primary btn-sm rounded-pill flex-fill text-center py-2"
                            style={{ fontSize: '0.82rem', padding: '0.42rem 0.6rem', whiteSpace: 'nowrap', fontWeight: 600 }}
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
