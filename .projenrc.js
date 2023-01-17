const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "google-beta@~> 4.17",
  cdktfVersion: "^0.14.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "14.17.0",
  jsiiVersion: "^1.53.0",
});

// This is a temporary workaround since the API.md file is growing too large
// and the GitHub Action fails to upload it as an artifact.
project.gitignore.addPatterns("API.md");

project.synth();
