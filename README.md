# BINTI Bride

Site de BINTI Bride à Lubumbashi. Il présente le projet, la location de robes de mariée, les essayages et les conseils, avec une prise de rendez-vous sur WhatsApp.

## Développement local

Utiliser Node.js 24 et la version de pnpm indiquée dans `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Le site est accessible à l’adresse `http://localhost:3000`.

## Hébergement

Copier `.env.example` vers `.env.local` pour un essai sur sa machine, ou déclarer les variables correspondantes chez l’hébergeur.

- `SITE_URL` contient l’adresse HTTPS finale du site. Elle sert à générer les URL canoniques, le sitemap et les données structurées. Sans cette variable, les pages sont en mode aperçu avec `noindex`.
- `NEXT_PUBLIC_BASE_PATH` est utile si l’adresse publique a un sous-répertoire. Par exemple, pour `https://exemple.com/binti/`, utiliser `NEXT_PUBLIC_BASE_PATH=/binti`.
- `GOOGLE_SITE_VERIFICATION` accepte facultativement la valeur de la balise de vérification fournie par Google Search Console.

Sur un hébergement Next.js, exécuter `pnpm build`, puis `pnpm start`. Pour un hébergement statique, définir `BINTI_STATIC_EXPORT=1` lors de la compilation et publier le dossier `out`.

Les pages publiques figurent dans `sitemap.xml`. Une fois le domaine en ligne et la propriété Search Console vérifiée, soumettre l’adresse de ce sitemap. Pour un site hébergé dans un sous-répertoire, vérifier aussi les règles du fichier `/robots.txt` à la racine du domaine.
