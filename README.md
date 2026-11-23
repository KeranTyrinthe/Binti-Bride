# BINTI Bride

Site de BINTI Bride à Lubumbashi, en français. Les pages présentent le projet, la location de robes de mariée, les essayages et les conseils, avec une prise de rendez-vous sur WhatsApp.

## Développement

Avec Node.js 24 et la version de pnpm spécifiée dans `package.json` :

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Publication et référencement

Le workflow GitHub Actions génère les pages HTML et les publie sur GitHub Pages à chaque mise à jour de la branche `main`. Il déduit l’URL publique et le préfixe des chemins de la configuration GitHub Pages. Les URL françaises du site figurent dans `sitemap.xml`. Les anciennes URL redirigent vers les pages correspondantes.

Pour publier chez un autre hébergeur, renseigner `SITE_URL` avec l’adresse HTTPS publique. Si le site est servi dans un sous-répertoire, renseigner aussi `NEXT_PUBLIC_BASE_PATH` (par exemple `/Binti-Bride`). Pour un hébergement statique, ajouter `BINTI_STATIC_EXPORT=1` à l’environnement de compilation et publier le dossier `out`.

Le sitemap peut être soumis dans une propriété Google Search Console vérifiée. La variable facultative `GOOGLE_SITE_VERIFICATION` du dépôt est utilisée pour la vérification par balise HTML. Sur GitHub Pages, le site est servi dans un sous-répertoire. Les règles d’exploration effectives dépendent du fichier `/robots.txt` à la racine du domaine.
