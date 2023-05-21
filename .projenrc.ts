import { typescript } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'tech-analysis',
  projenrcTs: true,
  authorName: 'Yadav, Sunil',
  authorEmail: 'atworksunil@gmail.com',
  authorUrl: 'https://ysunil016.github.io/',
  packageName: '@ta-kit/tech-analysis',
  deps: [], /* Runtime dependencies of this module. */
  description: 'Technical Analysis, for Candles', /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [], /* Build dependencies for this module. */
  homepage: 'https://github.com/Ysunil016/tech-analysis',
  npmAccess: NpmAccess.PUBLIC,
  repository: 'https://github.com/Ysunil016/tech-analysis',
});

project.synth();