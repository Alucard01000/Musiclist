import React from 'react';

export default function ProfilePage(props) {  //on ajoute des props car on va récupérer l'id mis dans la requête URL !
  const { match } = props;
  return (
    <section className="page-content">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          C'est la page "profil". Le profil "id" est : {match.params.id}
        </div>
        <aside className="col-sm-12 col-lg-4">
          C'est la sidebar "profile page" !
        </aside>
      </div>
    </section>
  );
}