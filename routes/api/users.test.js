// On fait appel au module "supertest" et on le place dans une variable "request"
const request = require('supertest');

// entête du test: on décrit que l'on va tester l'API "User" !
describe('The User API', () => {
  // Test spécifique
  it('Retourne la liste de tous les utilisateurs', async () => {
    // on se connecte au serveur et on obtient une réponse
    // On attend une réponse avec un code "200" et un format "JSON"
    const res = await request('http://localhost:3000') // Vous voyez cette async avant la fonction que nous passons le test?
      .get('/api/users/list') // Cela nous dit de ne pas continuer jusqu'à ce que toutes les demandes d'attente (await) dans la fonction soient satisfaites, séquentiellement.
      .expect(200) // Nous travaillons avec cela sur la ligne suivante, lorsque nous disons que notre variable "res" doit attendre la réponse du serveur.
      .expect('Content-Type', /json/); // Une fois que nous aurons une réponse du serveur, la boucle "Async / Await" se terminera et le test continuera.
    // Maintenant, "res" est plein de toute la réponse de notre serveur, ce qui est tout un tas de choses, mais ce que nous voulons vraiment, c'est le "BODY", qui est le JSON que l'API renvoie.
    // Ces "attentes" suivantes, sont pour "Jest", pas "SuperTest" !
    // Tout d'abord, on attend un résultat en tableau (array) au niveau du BODY de la réponse
    expect(Array.isArray(res.body)).toBe(true);
    // Deuxièmement : on attend que le tableau soit rempli, qu'il y ai au moins un élément
    expect(res.body.length).toBeGreaterThan(0);
    // Troisièmement, on attend que le premier "username" du premier utilisateur soit "Administrator"
    expect(res.body[0].username).toBe('administrator');
  });
});
