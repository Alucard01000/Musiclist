import React from 'react';

export default function HomePage() {
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8"> {/* on utilise des classes Bootstrap !!! On va donc utiliser Bootstrap pour le design CSS !!! */ }
          C'est la HomePage !!!
        </div>
        <aside className="col-sm-12 col-lg-4">
          C'est la barre latérale !
        </aside>
      </div>
    </section>
  );
}