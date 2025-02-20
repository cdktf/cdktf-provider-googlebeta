# `googleArtifactRegistryRepository` Submodule <a name="`googleArtifactRegistryRepository` Submodule" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleArtifactRegistryRepository <a name="GoogleArtifactRegistryRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository google_artifact_registry_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  format: str,
  repository_id: str,
  cleanup_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]] = None,
  cleanup_policy_dry_run: typing.Union[bool, IResolvable] = None,
  description: str = None,
  docker_config: GoogleArtifactRegistryRepositoryDockerConfig = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  maven_config: GoogleArtifactRegistryRepositoryMavenConfig = None,
  mode: str = None,
  project: str = None,
  remote_repository_config: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig = None,
  timeouts: GoogleArtifactRegistryRepositoryTimeouts = None,
  virtual_repository_config: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig = None,
  vulnerability_scanning_config: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.cleanupPolicies">cleanup_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]</code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.cleanupPolicyDryRun">cleanup_policy_dry_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.dockerConfig">docker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.location">location</a></code> | <code>str</code> | The name of the repository's location. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.mavenConfig">maven_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.mode">mode</a></code> | <code>str</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.remoteRepositoryConfig">remote_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.virtualRepositoryConfig">virtual_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.vulnerabilityScanningConfig">vulnerability_scanning_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | vulnerability_scanning_config block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.format"></a>

- *Type:* str

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#format GoogleArtifactRegistryRepository#format}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.repositoryId"></a>

- *Type:* str

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_id GoogleArtifactRegistryRepository#repository_id}

---

##### `cleanup_policies`<sup>Optional</sup> <a name="cleanup_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.cleanupPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#cleanup_policies GoogleArtifactRegistryRepository#cleanup_policies}

---

##### `cleanup_policy_dry_run`<sup>Optional</sup> <a name="cleanup_policy_dry_run" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.cleanupPolicyDryRun"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#cleanup_policy_dry_run GoogleArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.description"></a>

- *Type:* str

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `docker_config`<sup>Optional</sup> <a name="docker_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.dockerConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#docker_config GoogleArtifactRegistryRepository#docker_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#kms_key_name GoogleArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#labels GoogleArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.location"></a>

- *Type:* str

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#location GoogleArtifactRegistryRepository#location}

---

##### `maven_config`<sup>Optional</sup> <a name="maven_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.mavenConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#maven_config GoogleArtifactRegistryRepository#maven_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.mode"></a>

- *Type:* str

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#mode GoogleArtifactRegistryRepository#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}.

---

##### `remote_repository_config`<sup>Optional</sup> <a name="remote_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.remoteRepositoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#remote_repository_config GoogleArtifactRegistryRepository#remote_repository_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#timeouts GoogleArtifactRegistryRepository#timeouts}

---

##### `virtual_repository_config`<sup>Optional</sup> <a name="virtual_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.virtualRepositoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#virtual_repository_config GoogleArtifactRegistryRepository#virtual_repository_config}

---

##### `vulnerability_scanning_config`<sup>Optional</sup> <a name="vulnerability_scanning_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.Initializer.parameter.vulnerabilityScanningConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

vulnerability_scanning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#vulnerability_scanning_config GoogleArtifactRegistryRepository#vulnerability_scanning_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies">put_cleanup_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig">put_docker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig">put_maven_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig">put_remote_repository_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig">put_virtual_repository_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig">put_vulnerability_scanning_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicies">reset_cleanup_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicyDryRun">reset_cleanup_policy_dry_run</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDockerConfig">reset_docker_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig">reset_maven_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetRemoteRepositoryConfig">reset_remote_repository_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVirtualRepositoryConfig">reset_virtual_repository_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVulnerabilityScanningConfig">reset_vulnerability_scanning_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cleanup_policies` <a name="put_cleanup_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies"></a>

```python
def put_cleanup_policies(
  value: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putCleanupPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]

---

##### `put_docker_config` <a name="put_docker_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig"></a>

```python
def put_docker_config(
  immutable_tags: typing.Union[bool, IResolvable] = None
) -> None
```

###### `immutable_tags`<sup>Optional</sup> <a name="immutable_tags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putDockerConfig.parameter.immutableTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#immutable_tags GoogleArtifactRegistryRepository#immutable_tags}

---

##### `put_maven_config` <a name="put_maven_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig"></a>

```python
def put_maven_config(
  allow_snapshot_overwrites: typing.Union[bool, IResolvable] = None,
  version_policy: str = None
) -> None
```

###### `allow_snapshot_overwrites`<sup>Optional</sup> <a name="allow_snapshot_overwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig.parameter.allowSnapshotOverwrites"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#allow_snapshot_overwrites GoogleArtifactRegistryRepository#allow_snapshot_overwrites}

---

###### `version_policy`<sup>Optional</sup> <a name="version_policy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putMavenConfig.parameter.versionPolicy"></a>

- *Type:* str

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#version_policy GoogleArtifactRegistryRepository#version_policy}

---

##### `put_remote_repository_config` <a name="put_remote_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig"></a>

```python
def put_remote_repository_config(
  apt_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository = None,
  common_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository = None,
  description: str = None,
  disable_upstream_validation: typing.Union[bool, IResolvable] = None,
  docker_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository = None,
  maven_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository = None,
  npm_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository = None,
  python_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository = None,
  upstream_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials = None,
  yum_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository = None
) -> None
```

###### `apt_repository`<sup>Optional</sup> <a name="apt_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.aptRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#apt_repository GoogleArtifactRegistryRepository#apt_repository}

---

###### `common_repository`<sup>Optional</sup> <a name="common_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.commonRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

common_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#common_repository GoogleArtifactRegistryRepository#common_repository}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.description"></a>

- *Type:* str

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

###### `disable_upstream_validation`<sup>Optional</sup> <a name="disable_upstream_validation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.disableUpstreamValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#disable_upstream_validation GoogleArtifactRegistryRepository#disable_upstream_validation}

---

###### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.dockerRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#docker_repository GoogleArtifactRegistryRepository#docker_repository}

---

###### `maven_repository`<sup>Optional</sup> <a name="maven_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.mavenRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#maven_repository GoogleArtifactRegistryRepository#maven_repository}

---

###### `npm_repository`<sup>Optional</sup> <a name="npm_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.npmRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#npm_repository GoogleArtifactRegistryRepository#npm_repository}

---

###### `python_repository`<sup>Optional</sup> <a name="python_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.pythonRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#python_repository GoogleArtifactRegistryRepository#python_repository}

---

###### `upstream_credentials`<sup>Optional</sup> <a name="upstream_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.upstreamCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#upstream_credentials GoogleArtifactRegistryRepository#upstream_credentials}

---

###### `yum_repository`<sup>Optional</sup> <a name="yum_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putRemoteRepositoryConfig.parameter.yumRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#yum_repository GoogleArtifactRegistryRepository#yum_repository}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}.

---

##### `put_virtual_repository_config` <a name="put_virtual_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig"></a>

```python
def put_virtual_repository_config(
  upstream_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]] = None
) -> None
```

###### `upstream_policies`<sup>Optional</sup> <a name="upstream_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVirtualRepositoryConfig.parameter.upstreamPolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#upstream_policies GoogleArtifactRegistryRepository#upstream_policies}

---

##### `put_vulnerability_scanning_config` <a name="put_vulnerability_scanning_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig"></a>

```python
def put_vulnerability_scanning_config(
  enablement_config: str = None
) -> None
```

###### `enablement_config`<sup>Optional</sup> <a name="enablement_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.putVulnerabilityScanningConfig.parameter.enablementConfig"></a>

- *Type:* str

This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#enablement_config GoogleArtifactRegistryRepository#enablement_config}

---

##### `reset_cleanup_policies` <a name="reset_cleanup_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicies"></a>

```python
def reset_cleanup_policies() -> None
```

##### `reset_cleanup_policy_dry_run` <a name="reset_cleanup_policy_dry_run" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetCleanupPolicyDryRun"></a>

```python
def reset_cleanup_policy_dry_run() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_docker_config` <a name="reset_docker_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetDockerConfig"></a>

```python
def reset_docker_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_maven_config` <a name="reset_maven_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMavenConfig"></a>

```python
def reset_maven_config() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remote_repository_config` <a name="reset_remote_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetRemoteRepositoryConfig"></a>

```python
def reset_remote_repository_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_repository_config` <a name="reset_virtual_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVirtualRepositoryConfig"></a>

```python
def reset_virtual_repository_config() -> None
```

##### `reset_vulnerability_scanning_config` <a name="reset_vulnerability_scanning_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.resetVulnerabilityScanningConfig"></a>

```python
def reset_vulnerability_scanning_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleArtifactRegistryRepository to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleArtifactRegistryRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleArtifactRegistryRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicies">cleanup_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList">GoogleArtifactRegistryRepositoryCleanupPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfig">docker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference">GoogleArtifactRegistryRepositoryDockerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig">maven_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfig">remote_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfig">virtual_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfig">vulnerability_scanning_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPoliciesInput">cleanup_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRunInput">cleanup_policy_dry_run_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfigInput">docker_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput">maven_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfigInput">remote_repository_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfigInput">virtual_repository_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfigInput">vulnerability_scanning_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRun">cleanup_policy_dry_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cleanup_policies`<sup>Required</sup> <a name="cleanup_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicies"></a>

```python
cleanup_policies: GoogleArtifactRegistryRepositoryCleanupPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList">GoogleArtifactRegistryRepositoryCleanupPoliciesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `docker_config`<sup>Required</sup> <a name="docker_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfig"></a>

```python
docker_config: GoogleArtifactRegistryRepositoryDockerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference">GoogleArtifactRegistryRepositoryDockerConfigOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maven_config`<sup>Required</sup> <a name="maven_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfig"></a>

```python
maven_config: GoogleArtifactRegistryRepositoryMavenConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference">GoogleArtifactRegistryRepositoryMavenConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_repository_config`<sup>Required</sup> <a name="remote_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfig"></a>

```python
remote_repository_config: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryRepositoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference">GoogleArtifactRegistryRepositoryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `virtual_repository_config`<sup>Required</sup> <a name="virtual_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfig"></a>

```python
virtual_repository_config: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference</a>

---

##### `vulnerability_scanning_config`<sup>Required</sup> <a name="vulnerability_scanning_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfig"></a>

```python
vulnerability_scanning_config: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference</a>

---

##### `cleanup_policies_input`<sup>Optional</sup> <a name="cleanup_policies_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPoliciesInput"></a>

```python
cleanup_policies_input: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]

---

##### `cleanup_policy_dry_run_input`<sup>Optional</sup> <a name="cleanup_policy_dry_run_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRunInput"></a>

```python
cleanup_policy_dry_run_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `docker_config_input`<sup>Optional</sup> <a name="docker_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.dockerConfigInput"></a>

```python
docker_config_input: GoogleArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maven_config_input`<sup>Optional</sup> <a name="maven_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mavenConfigInput"></a>

```python
maven_config_input: GoogleArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remote_repository_config_input`<sup>Optional</sup> <a name="remote_repository_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.remoteRepositoryConfigInput"></a>

```python
remote_repository_config_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleArtifactRegistryRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>]

---

##### `virtual_repository_config_input`<sup>Optional</sup> <a name="virtual_repository_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.virtualRepositoryConfigInput"></a>

```python
virtual_repository_config_input: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---

##### `vulnerability_scanning_config_input`<sup>Optional</sup> <a name="vulnerability_scanning_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.vulnerabilityScanningConfigInput"></a>

```python
vulnerability_scanning_config_input: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---

##### `cleanup_policy_dry_run`<sup>Required</sup> <a name="cleanup_policy_dry_run" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.cleanupPolicyDryRun"></a>

```python
cleanup_policy_dry_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepository.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleArtifactRegistryRepositoryCleanupPolicies <a name="GoogleArtifactRegistryRepositoryCleanupPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies(
  id: str,
  action: str = None,
  condition: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition = None,
  most_recent_versions: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.action">action</a></code> | <code>str</code> | Policy action. Possible values: ["DELETE", "KEEP"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions">most_recent_versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | most_recent_versions block. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.action"></a>

```python
action: str
```

- *Type:* str

Policy action. Possible values: ["DELETE", "KEEP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#action GoogleArtifactRegistryRepository#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.condition"></a>

```python
condition: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#condition GoogleArtifactRegistryRepository#condition}

---

##### `most_recent_versions`<sup>Optional</sup> <a name="most_recent_versions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies.property.mostRecentVersions"></a>

```python
most_recent_versions: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

most_recent_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#most_recent_versions GoogleArtifactRegistryRepository#most_recent_versions}

---

### GoogleArtifactRegistryRepositoryCleanupPoliciesCondition <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesCondition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition(
  newer_than: str = None,
  older_than: str = None,
  package_name_prefixes: typing.List[str] = None,
  tag_prefixes: typing.List[str] = None,
  tag_state: str = None,
  version_name_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan">newer_than</a></code> | <code>str</code> | Match versions newer than a duration. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan">older_than</a></code> | <code>str</code> | Match versions older than a duration. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes">package_name_prefixes</a></code> | <code>typing.List[str]</code> | Match versions by package prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes">tag_prefixes</a></code> | <code>typing.List[str]</code> | Match versions by tag prefix. Applied on any prefix match. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState">tag_state</a></code> | <code>str</code> | Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes">version_name_prefixes</a></code> | <code>typing.List[str]</code> | Match versions by version name prefix. Applied on any prefix match. |

---

##### `newer_than`<sup>Optional</sup> <a name="newer_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.newerThan"></a>

```python
newer_than: str
```

- *Type:* str

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#newer_than GoogleArtifactRegistryRepository#newer_than}

---

##### `older_than`<sup>Optional</sup> <a name="older_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.olderThan"></a>

```python
older_than: str
```

- *Type:* str

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#older_than GoogleArtifactRegistryRepository#older_than}

---

##### `package_name_prefixes`<sup>Optional</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.packageNamePrefixes"></a>

```python
package_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

##### `tag_prefixes`<sup>Optional</sup> <a name="tag_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagPrefixes"></a>

```python
tag_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#tag_prefixes GoogleArtifactRegistryRepository#tag_prefixes}

---

##### `tag_state`<sup>Optional</sup> <a name="tag_state" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.tagState"></a>

```python
tag_state: str
```

- *Type:* str

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#tag_state GoogleArtifactRegistryRepository#tag_state}

---

##### `version_name_prefixes`<sup>Optional</sup> <a name="version_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition.property.versionNamePrefixes"></a>

```python
version_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#version_name_prefixes GoogleArtifactRegistryRepository#version_name_prefixes}

---

### GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions(
  keep_count: typing.Union[int, float] = None,
  package_name_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount">keep_count</a></code> | <code>typing.Union[int, float]</code> | Minimum number of versions to keep. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes">package_name_prefixes</a></code> | <code>typing.List[str]</code> | Match versions by package prefix. Applied on any prefix match. |

---

##### `keep_count`<sup>Optional</sup> <a name="keep_count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.keepCount"></a>

```python
keep_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#keep_count GoogleArtifactRegistryRepository#keep_count}

---

##### `package_name_prefixes`<sup>Optional</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions.property.packageNamePrefixes"></a>

```python
package_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

### GoogleArtifactRegistryRepositoryConfig <a name="GoogleArtifactRegistryRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  format: str,
  repository_id: str,
  cleanup_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]] = None,
  cleanup_policy_dry_run: typing.Union[bool, IResolvable] = None,
  description: str = None,
  docker_config: GoogleArtifactRegistryRepositoryDockerConfig = None,
  id: str = None,
  kms_key_name: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  maven_config: GoogleArtifactRegistryRepositoryMavenConfig = None,
  mode: str = None,
  project: str = None,
  remote_repository_config: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig = None,
  timeouts: GoogleArtifactRegistryRepositoryTimeouts = None,
  virtual_repository_config: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig = None,
  vulnerability_scanning_config: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format">format</a></code> | <code>str</code> | The format of packages that are stored in the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | The last part of the repository name, for example: "repo1". |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicies">cleanup_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]</code> | cleanup_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun">cleanup_policy_dry_run</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the cleanup pipeline is prevented from deleting versions in this repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description">description</a></code> | <code>str</code> | The user-provided description of the repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dockerConfig">docker_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | docker_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location">location</a></code> | <code>str</code> | The name of the repository's location. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig">maven_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | maven_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mode">mode</a></code> | <code>str</code> | The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig">remote_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | remote_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig">virtual_repository_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | virtual_repository_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig">vulnerability_scanning_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | vulnerability_scanning_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of packages that are stored in the repository.

Supported formats
can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
You can only create alpha formats if you are a member of the
[alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#format GoogleArtifactRegistryRepository#format}

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

The last part of the repository name, for example: "repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_id GoogleArtifactRegistryRepository#repository_id}

---

##### `cleanup_policies`<sup>Optional</sup> <a name="cleanup_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicies"></a>

```python
cleanup_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]

cleanup_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#cleanup_policies GoogleArtifactRegistryRepository#cleanup_policies}

---

##### `cleanup_policy_dry_run`<sup>Optional</sup> <a name="cleanup_policy_dry_run" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.cleanupPolicyDryRun"></a>

```python
cleanup_policy_dry_run: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the cleanup pipeline is prevented from deleting versions in this repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#cleanup_policy_dry_run GoogleArtifactRegistryRepository#cleanup_policy_dry_run}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-provided description of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `docker_config`<sup>Optional</sup> <a name="docker_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.dockerConfig"></a>

```python
docker_config: GoogleArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

docker_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#docker_config GoogleArtifactRegistryRepository#docker_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource name of the customer managed encryption key that’s used to encrypt the contents of the Repository.

Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
This value may not be changed after the Repository has been created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#kms_key_name GoogleArtifactRegistryRepository#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels with user-defined metadata.

This field may contain up to 64 entries. Label keys and values may be no
longer than 63 characters. Label keys must begin with a lowercase letter
and may only contain lowercase letters, numeric characters, underscores,
and dashes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#labels GoogleArtifactRegistryRepository#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The name of the repository's location.

In addition to specific regions,
special values for multi-region locations are 'asia', 'europe', and 'us'.
See [here](https://cloud.google.com/artifact-registry/docs/repositories/repo-locations),
or use the
[google_artifact_registry_locations](https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/artifact_registry_locations)
data source for possible values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#location GoogleArtifactRegistryRepository#location}

---

##### `maven_config`<sup>Optional</sup> <a name="maven_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mavenConfig"></a>

```python
maven_config: GoogleArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

maven_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#maven_config GoogleArtifactRegistryRepository#maven_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#mode GoogleArtifactRegistryRepository#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}.

---

##### `remote_repository_config`<sup>Optional</sup> <a name="remote_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.remoteRepositoryConfig"></a>

```python
remote_repository_config: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

remote_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#remote_repository_config GoogleArtifactRegistryRepository#remote_repository_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.timeouts"></a>

```python
timeouts: GoogleArtifactRegistryRepositoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#timeouts GoogleArtifactRegistryRepository#timeouts}

---

##### `virtual_repository_config`<sup>Optional</sup> <a name="virtual_repository_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.virtualRepositoryConfig"></a>

```python
virtual_repository_config: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

virtual_repository_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#virtual_repository_config GoogleArtifactRegistryRepository#virtual_repository_config}

---

##### `vulnerability_scanning_config`<sup>Optional</sup> <a name="vulnerability_scanning_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryConfig.property.vulnerabilityScanningConfig"></a>

```python
vulnerability_scanning_config: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

vulnerability_scanning_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#vulnerability_scanning_config GoogleArtifactRegistryRepository#vulnerability_scanning_config}

---

### GoogleArtifactRegistryRepositoryDockerConfig <a name="GoogleArtifactRegistryRepositoryDockerConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig(
  immutable_tags: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.property.immutableTags">immutable_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The repository which enabled this flag prevents all tags from being modified, moved or deleted. |

---

##### `immutable_tags`<sup>Optional</sup> <a name="immutable_tags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig.property.immutableTags"></a>

```python
immutable_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The repository which enabled this flag prevents all tags from being modified, moved or deleted.

This does not prevent tags from being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#immutable_tags GoogleArtifactRegistryRepository#immutable_tags}

---

### GoogleArtifactRegistryRepositoryMavenConfig <a name="GoogleArtifactRegistryRepositoryMavenConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig(
  allow_snapshot_overwrites: typing.Union[bool, IResolvable] = None,
  version_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites">allow_snapshot_overwrites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The repository with this flag will allow publishing the same snapshot versions. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy">version_policy</a></code> | <code>str</code> | Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]. |

---

##### `allow_snapshot_overwrites`<sup>Optional</sup> <a name="allow_snapshot_overwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.allowSnapshotOverwrites"></a>

```python
allow_snapshot_overwrites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The repository with this flag will allow publishing the same snapshot versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#allow_snapshot_overwrites GoogleArtifactRegistryRepository#allow_snapshot_overwrites}

---

##### `version_policy`<sup>Optional</sup> <a name="version_policy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig.property.versionPolicy"></a>

```python
version_policy: str
```

- *Type:* str

Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#version_policy GoogleArtifactRegistryRepository#version_policy}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfig <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig(
  apt_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository = None,
  common_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository = None,
  description: str = None,
  disable_upstream_validation: typing.Union[bool, IResolvable] = None,
  docker_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository = None,
  maven_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository = None,
  npm_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository = None,
  python_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository = None,
  upstream_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials = None,
  yum_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository">apt_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | apt_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository">common_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | common_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.description">description</a></code> | <code>str</code> | The description of the remote source. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation">disable_upstream_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the remote repository upstream and upstream credentials will not be validated. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository">docker_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | docker_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository">maven_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | maven_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository">npm_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | npm_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository">python_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | python_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials">upstream_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | upstream_credentials block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository">yum_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | yum_repository block. |

---

##### `apt_repository`<sup>Optional</sup> <a name="apt_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.aptRepository"></a>

```python
apt_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

apt_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#apt_repository GoogleArtifactRegistryRepository#apt_repository}

---

##### `common_repository`<sup>Optional</sup> <a name="common_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.commonRepository"></a>

```python
common_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

common_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#common_repository GoogleArtifactRegistryRepository#common_repository}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the remote source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}

---

##### `disable_upstream_validation`<sup>Optional</sup> <a name="disable_upstream_validation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.disableUpstreamValidation"></a>

```python
disable_upstream_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the remote repository upstream and upstream credentials will not be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#disable_upstream_validation GoogleArtifactRegistryRepository#disable_upstream_validation}

---

##### `docker_repository`<sup>Optional</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.dockerRepository"></a>

```python
docker_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

docker_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#docker_repository GoogleArtifactRegistryRepository#docker_repository}

---

##### `maven_repository`<sup>Optional</sup> <a name="maven_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.mavenRepository"></a>

```python
maven_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

maven_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#maven_repository GoogleArtifactRegistryRepository#maven_repository}

---

##### `npm_repository`<sup>Optional</sup> <a name="npm_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.npmRepository"></a>

```python
npm_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

npm_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#npm_repository GoogleArtifactRegistryRepository#npm_repository}

---

##### `python_repository`<sup>Optional</sup> <a name="python_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.pythonRepository"></a>

```python
python_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

python_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#python_repository GoogleArtifactRegistryRepository#python_repository}

---

##### `upstream_credentials`<sup>Optional</sup> <a name="upstream_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.upstreamCredentials"></a>

```python
upstream_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

upstream_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#upstream_credentials GoogleArtifactRegistryRepository#upstream_credentials}

---

##### `yum_repository`<sup>Optional</sup> <a name="yum_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig.property.yumRepository"></a>

```python
yum_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

yum_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#yum_repository GoogleArtifactRegistryRepository#yum_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository(
  public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository">public_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository.property.publicRepository"></a>

```python
public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository(
  repository_base: str,
  repository_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase">repository_base</a></code> | <code>str</code> | A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath">repository_path</a></code> | <code>str</code> | Specific repository from the base. |

---

##### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryBase"></a>

```python
repository_base: str
```

- *Type:* str

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

##### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository.property.repositoryPath"></a>

```python
repository_path: str
```

- *Type:* str

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository(
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri">uri</a></code> | <code>str</code> | One of: a. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

One of: a.

Artifact Registry Repository resource, e.g. 'projects/UPSTREAM_PROJECT_ID/locations/REGION/repositories/UPSTREAM_REPOSITORY'
b. URI to the registry, e.g. '"https://registry-1.docker.io"'
c. URI to Artifact Registry Repository, e.g. '"https://REGION-docker.pkg.dev/UPSTREAM_PROJECT_ID/UPSTREAM_REPOSITORY"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository = None,
  public_repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository">public_repository</a></code> | <code>str</code> | Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]. |

---

##### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri">uri</a></code> | <code>str</code> | Specific uri to the registry, e.g. '"https://registry-1.docker.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository = None,
  public_repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository">public_repository</a></code> | <code>str</code> | Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]. |

---

##### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri">uri</a></code> | <code>str</code> | Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository = None,
  public_repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository">public_repository</a></code> | <code>str</code> | Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]. |

---

##### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri">uri</a></code> | <code>str</code> | Specific uri to the registry, e.g. '"https://registry.npmjs.org"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository = None,
  public_repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | custom_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository">public_repository</a></code> | <code>str</code> | Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]. |

---

##### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository(
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri">uri</a></code> | <code>str</code> | Specific uri to the registry, e.g. '"https://pypi.io"'. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials(
  username_password_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials">username_password_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | username_password_credentials block. |

---

##### `username_password_credentials`<sup>Optional</sup> <a name="username_password_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials.property.usernamePasswordCredentials"></a>

```python
username_password_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#username_password_credentials GoogleArtifactRegistryRepository#username_password_credentials}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials(
  password_secret_version: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion">password_secret_version</a></code> | <code>str</code> | The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username">username</a></code> | <code>str</code> | The username to access the remote repository. |

---

##### `password_secret_version`<sup>Optional</sup> <a name="password_secret_version" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.passwordSecretVersion"></a>

```python
password_secret_version: str
```

- *Type:* str

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#password_secret_version GoogleArtifactRegistryRepository#password_secret_version}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#username GoogleArtifactRegistryRepository#username}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository(
  public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository">public_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | public_repository block. |

---

##### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository.property.publicRepository"></a>

```python
public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository(
  repository_base: str,
  repository_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase">repository_base</a></code> | <code>str</code> | A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath">repository_path</a></code> | <code>str</code> | Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'. |

---

##### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryBase"></a>

```python
repository_base: str
```

- *Type:* str

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

##### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository.property.repositoryPath"></a>

```python
repository_path: str
```

- *Type:* str

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

### GoogleArtifactRegistryRepositoryTimeouts <a name="GoogleArtifactRegistryRepositoryTimeouts" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}.

---

### GoogleArtifactRegistryRepositoryVirtualRepositoryConfig <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig(
  upstream_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies">upstream_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]</code> | upstream_policies block. |

---

##### `upstream_policies`<sup>Optional</sup> <a name="upstream_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig.property.upstreamPolicies"></a>

```python
upstream_policies: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]

upstream_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#upstream_policies GoogleArtifactRegistryRepository#upstream_policies}

---

### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies(
  id: str = None,
  priority: typing.Union[int, float] = None,
  repository: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id">id</a></code> | <code>str</code> | The user-provided ID of the upstream policy. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Entries with a greater priority value take precedence in the pull order. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository">repository</a></code> | <code>str</code> | A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

The user-provided ID of the upstream policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Entries with a greater priority value take precedence in the pull order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#priority GoogleArtifactRegistryRepository#priority}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies.property.repository"></a>

```python
repository: str
```

- *Type:* str

A reference to the repository resource, for example: "projects/p1/locations/us-central1/repository/repo1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository GoogleArtifactRegistryRepository#repository}

---

### GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig <a name="GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig(
  enablement_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig">enablement_config</a></code> | <code>str</code> | This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"]. |

---

##### `enablement_config`<sup>Optional</sup> <a name="enablement_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig.property.enablementConfig"></a>

```python
enablement_config: str
```

- *Type:* str

This configures whether vulnerability scanning is automatically performed for artifacts pushed to this repository. Possible values: ["INHERITED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#enablement_config GoogleArtifactRegistryRepository#enablement_config}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan">reset_newer_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan">reset_older_than</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes">reset_package_name_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes">reset_tag_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState">reset_tag_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes">reset_version_name_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_newer_than` <a name="reset_newer_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetNewerThan"></a>

```python
def reset_newer_than() -> None
```

##### `reset_older_than` <a name="reset_older_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetOlderThan"></a>

```python
def reset_older_than() -> None
```

##### `reset_package_name_prefixes` <a name="reset_package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetPackageNamePrefixes"></a>

```python
def reset_package_name_prefixes() -> None
```

##### `reset_tag_prefixes` <a name="reset_tag_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagPrefixes"></a>

```python
def reset_tag_prefixes() -> None
```

##### `reset_tag_state` <a name="reset_tag_state" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetTagState"></a>

```python
def reset_tag_state() -> None
```

##### `reset_version_name_prefixes` <a name="reset_version_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.resetVersionNamePrefixes"></a>

```python
def reset_version_name_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput">newer_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput">older_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput">package_name_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput">tag_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput">tag_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput">version_name_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan">newer_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan">older_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes">package_name_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes">tag_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState">tag_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes">version_name_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `newer_than_input`<sup>Optional</sup> <a name="newer_than_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThanInput"></a>

```python
newer_than_input: str
```

- *Type:* str

---

##### `older_than_input`<sup>Optional</sup> <a name="older_than_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThanInput"></a>

```python
older_than_input: str
```

- *Type:* str

---

##### `package_name_prefixes_input`<sup>Optional</sup> <a name="package_name_prefixes_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixesInput"></a>

```python
package_name_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_prefixes_input`<sup>Optional</sup> <a name="tag_prefixes_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixesInput"></a>

```python
tag_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_state_input`<sup>Optional</sup> <a name="tag_state_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagStateInput"></a>

```python
tag_state_input: str
```

- *Type:* str

---

##### `version_name_prefixes_input`<sup>Optional</sup> <a name="version_name_prefixes_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixesInput"></a>

```python
version_name_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `newer_than`<sup>Required</sup> <a name="newer_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.newerThan"></a>

```python
newer_than: str
```

- *Type:* str

---

##### `older_than`<sup>Required</sup> <a name="older_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.olderThan"></a>

```python
older_than: str
```

- *Type:* str

---

##### `package_name_prefixes`<sup>Required</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.packageNamePrefixes"></a>

```python
package_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_prefixes`<sup>Required</sup> <a name="tag_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagPrefixes"></a>

```python
tag_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_state`<sup>Required</sup> <a name="tag_state" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.tagState"></a>

```python
tag_state: str
```

- *Type:* str

---

##### `version_name_prefixes`<sup>Required</sup> <a name="version_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.versionNamePrefixes"></a>

```python
version_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesList <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesList" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryCleanupPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]]

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount">reset_keep_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes">reset_package_name_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_keep_count` <a name="reset_keep_count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetKeepCount"></a>

```python
def reset_keep_count() -> None
```

##### `reset_package_name_prefixes` <a name="reset_package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.resetPackageNamePrefixes"></a>

```python
def reset_package_name_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput">keep_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput">package_name_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount">keep_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes">package_name_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keep_count_input`<sup>Optional</sup> <a name="keep_count_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCountInput"></a>

```python
keep_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_name_prefixes_input`<sup>Optional</sup> <a name="package_name_prefixes_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixesInput"></a>

```python
package_name_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keep_count`<sup>Required</sup> <a name="keep_count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.keepCount"></a>

```python
keep_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_name_prefixes`<sup>Required</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.packageNamePrefixes"></a>

```python
package_name_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---


### GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference <a name="GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions">put_most_recent_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions">reset_most_recent_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition"></a>

```python
def put_condition(
  newer_than: str = None,
  older_than: str = None,
  package_name_prefixes: typing.List[str] = None,
  tag_prefixes: typing.List[str] = None,
  tag_state: str = None,
  version_name_prefixes: typing.List[str] = None
) -> None
```

###### `newer_than`<sup>Optional</sup> <a name="newer_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.newerThan"></a>

- *Type:* str

Match versions newer than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#newer_than GoogleArtifactRegistryRepository#newer_than}

---

###### `older_than`<sup>Optional</sup> <a name="older_than" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.olderThan"></a>

- *Type:* str

Match versions older than a duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#older_than GoogleArtifactRegistryRepository#older_than}

---

###### `package_name_prefixes`<sup>Optional</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.packageNamePrefixes"></a>

- *Type:* typing.List[str]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

###### `tag_prefixes`<sup>Optional</sup> <a name="tag_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.tagPrefixes"></a>

- *Type:* typing.List[str]

Match versions by tag prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#tag_prefixes GoogleArtifactRegistryRepository#tag_prefixes}

---

###### `tag_state`<sup>Optional</sup> <a name="tag_state" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.tagState"></a>

- *Type:* str

Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#tag_state GoogleArtifactRegistryRepository#tag_state}

---

###### `version_name_prefixes`<sup>Optional</sup> <a name="version_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putCondition.parameter.versionNamePrefixes"></a>

- *Type:* typing.List[str]

Match versions by version name prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#version_name_prefixes GoogleArtifactRegistryRepository#version_name_prefixes}

---

##### `put_most_recent_versions` <a name="put_most_recent_versions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions"></a>

```python
def put_most_recent_versions(
  keep_count: typing.Union[int, float] = None,
  package_name_prefixes: typing.List[str] = None
) -> None
```

###### `keep_count`<sup>Optional</sup> <a name="keep_count" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.keepCount"></a>

- *Type:* typing.Union[int, float]

Minimum number of versions to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#keep_count GoogleArtifactRegistryRepository#keep_count}

---

###### `package_name_prefixes`<sup>Optional</sup> <a name="package_name_prefixes" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.putMostRecentVersions.parameter.packageNamePrefixes"></a>

- *Type:* typing.List[str]

Match versions by package prefix. Applied on any prefix match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_most_recent_versions` <a name="reset_most_recent_versions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.resetMostRecentVersions"></a>

```python
def reset_most_recent_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions">most_recent_versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput">most_recent_versions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.condition"></a>

```python
condition: GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference</a>

---

##### `most_recent_versions`<sup>Required</sup> <a name="most_recent_versions" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersions"></a>

```python
most_recent_versions: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.conditionInput"></a>

```python
condition_input: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesCondition">GoogleArtifactRegistryRepositoryCleanupPoliciesCondition</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `most_recent_versions_input`<sup>Optional</sup> <a name="most_recent_versions_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.mostRecentVersionsInput"></a>

```python
most_recent_versions_input: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions">GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleArtifactRegistryRepositoryCleanupPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryCleanupPolicies">GoogleArtifactRegistryRepositoryCleanupPolicies</a>]

---


### GoogleArtifactRegistryRepositoryDockerConfigOutputReference <a name="GoogleArtifactRegistryRepositoryDockerConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags">reset_immutable_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_immutable_tags` <a name="reset_immutable_tags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.resetImmutableTags"></a>

```python
def reset_immutable_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput">immutable_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags">immutable_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immutable_tags_input`<sup>Optional</sup> <a name="immutable_tags_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTagsInput"></a>

```python
immutable_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `immutable_tags`<sup>Required</sup> <a name="immutable_tags" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.immutableTags"></a>

```python
immutable_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryDockerConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryDockerConfig">GoogleArtifactRegistryRepositoryDockerConfig</a>

---


### GoogleArtifactRegistryRepositoryMavenConfigOutputReference <a name="GoogleArtifactRegistryRepositoryMavenConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites">reset_allow_snapshot_overwrites</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy">reset_version_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_snapshot_overwrites` <a name="reset_allow_snapshot_overwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetAllowSnapshotOverwrites"></a>

```python
def reset_allow_snapshot_overwrites() -> None
```

##### `reset_version_policy` <a name="reset_version_policy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.resetVersionPolicy"></a>

```python
def reset_version_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput">allow_snapshot_overwrites_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput">version_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites">allow_snapshot_overwrites</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy">version_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_snapshot_overwrites_input`<sup>Optional</sup> <a name="allow_snapshot_overwrites_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwritesInput"></a>

```python
allow_snapshot_overwrites_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_policy_input`<sup>Optional</sup> <a name="version_policy_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicyInput"></a>

```python
version_policy_input: str
```

- *Type:* str

---

##### `allow_snapshot_overwrites`<sup>Required</sup> <a name="allow_snapshot_overwrites" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.allowSnapshotOverwrites"></a>

```python
allow_snapshot_overwrites: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_policy`<sup>Required</sup> <a name="version_policy" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.versionPolicy"></a>

```python
version_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryMavenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryMavenConfig">GoogleArtifactRegistryRepositoryMavenConfig</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository">put_public_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_repository` <a name="put_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository"></a>

```python
def put_public_repository(
  repository_base: str,
  repository_path: str
) -> None
```

###### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.repositoryBase"></a>

- *Type:* str

A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

###### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.putPublicRepository.parameter.repositoryPath"></a>

- *Type:* str

Specific repository from the base.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repository_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repository_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase">repository_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath">repository_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_base_input`<sup>Optional</sup> <a name="repository_base_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```python
repository_base_input: str
```

- *Type:* str

---

##### `repository_path_input`<sup>Optional</sup> <a name="repository_path_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```python
repository_path_input: str
```

- *Type:* str

---

##### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```python
repository_base: str
```

- *Type:* str

---

##### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```python
repository_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository">put_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository">reset_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_repository` <a name="put_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository"></a>

```python
def put_custom_repository(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.putCustomRepository.parameter.uri"></a>

- *Type:* str

Specific uri to the registry, e.g. '"https://registry-1.docker.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

##### `reset_custom_repository` <a name="reset_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetCustomRepository"></a>

```python
def reset_custom_repository() -> None
```

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput">custom_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_repository`<sup>Required</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepositoryOutputReference</a>

---

##### `custom_repository_input`<sup>Optional</sup> <a name="custom_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.customRepositoryInput"></a>

```python
custom_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository">put_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository">reset_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_repository` <a name="put_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository"></a>

```python
def put_custom_repository(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.putCustomRepository.parameter.uri"></a>

- *Type:* str

Specific uri to the registry, e.g. '"https://repo.maven.apache.org/maven2"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

##### `reset_custom_repository` <a name="reset_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetCustomRepository"></a>

```python
def reset_custom_repository() -> None
```

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput">custom_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_repository`<sup>Required</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepositoryOutputReference</a>

---

##### `custom_repository_input`<sup>Optional</sup> <a name="custom_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.customRepositoryInput"></a>

```python
custom_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository">put_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository">reset_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_repository` <a name="put_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository"></a>

```python
def put_custom_repository(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.putCustomRepository.parameter.uri"></a>

- *Type:* str

Specific uri to the registry, e.g. '"https://registry.npmjs.org"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

##### `reset_custom_repository` <a name="reset_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetCustomRepository"></a>

```python
def reset_custom_repository() -> None
```

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput">custom_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_repository`<sup>Required</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepositoryOutputReference</a>

---

##### `custom_repository_input`<sup>Optional</sup> <a name="custom_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.customRepositoryInput"></a>

```python
custom_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository">put_apt_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository">put_common_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository">put_docker_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository">put_maven_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository">put_npm_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository">put_python_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials">put_upstream_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository">put_yum_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository">reset_apt_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository">reset_common_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation">reset_disable_upstream_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository">reset_docker_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository">reset_maven_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository">reset_npm_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository">reset_python_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials">reset_upstream_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository">reset_yum_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_apt_repository` <a name="put_apt_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository"></a>

```python
def put_apt_repository(
  public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository = None
) -> None
```

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putAptRepository.parameter.publicRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `put_common_repository` <a name="put_common_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository"></a>

```python
def put_common_repository(
  uri: str
) -> None
```

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putCommonRepository.parameter.uri"></a>

- *Type:* str

One of: a.

Artifact Registry Repository resource, e.g. 'projects/UPSTREAM_PROJECT_ID/locations/REGION/repositories/UPSTREAM_REPOSITORY'
b. URI to the registry, e.g. '"https://registry-1.docker.io"'
c. URI to Artifact Registry Repository, e.g. '"https://REGION-docker.pkg.dev/UPSTREAM_PROJECT_ID/UPSTREAM_REPOSITORY"'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

##### `put_docker_repository` <a name="put_docker_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository"></a>

```python
def put_docker_repository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository = None,
  public_repository: str = None
) -> None
```

###### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.customRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putDockerRepository.parameter.publicRepository"></a>

- *Type:* str

Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `put_maven_repository` <a name="put_maven_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository"></a>

```python
def put_maven_repository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository = None,
  public_repository: str = None
) -> None
```

###### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.customRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putMavenRepository.parameter.publicRepository"></a>

- *Type:* str

Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `put_npm_repository` <a name="put_npm_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository"></a>

```python
def put_npm_repository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository = None,
  public_repository: str = None
) -> None
```

###### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.customRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putNpmRepository.parameter.publicRepository"></a>

- *Type:* str

Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `put_python_repository` <a name="put_python_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository"></a>

```python
def put_python_repository(
  custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository = None,
  public_repository: str = None
) -> None
```

###### `custom_repository`<sup>Optional</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.customRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

custom_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#custom_repository GoogleArtifactRegistryRepository#custom_repository}

---

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putPythonRepository.parameter.publicRepository"></a>

- *Type:* str

Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `put_upstream_credentials` <a name="put_upstream_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials"></a>

```python
def put_upstream_credentials(
  username_password_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials = None
) -> None
```

###### `username_password_credentials`<sup>Optional</sup> <a name="username_password_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putUpstreamCredentials.parameter.usernamePasswordCredentials"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

username_password_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#username_password_credentials GoogleArtifactRegistryRepository#username_password_credentials}

---

##### `put_yum_repository` <a name="put_yum_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository"></a>

```python
def put_yum_repository(
  public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository = None
) -> None
```

###### `public_repository`<sup>Optional</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.putYumRepository.parameter.publicRepository"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

public_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}

---

##### `reset_apt_repository` <a name="reset_apt_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetAptRepository"></a>

```python
def reset_apt_repository() -> None
```

##### `reset_common_repository` <a name="reset_common_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetCommonRepository"></a>

```python
def reset_common_repository() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_upstream_validation` <a name="reset_disable_upstream_validation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDisableUpstreamValidation"></a>

```python
def reset_disable_upstream_validation() -> None
```

##### `reset_docker_repository` <a name="reset_docker_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetDockerRepository"></a>

```python
def reset_docker_repository() -> None
```

##### `reset_maven_repository` <a name="reset_maven_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetMavenRepository"></a>

```python
def reset_maven_repository() -> None
```

##### `reset_npm_repository` <a name="reset_npm_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetNpmRepository"></a>

```python
def reset_npm_repository() -> None
```

##### `reset_python_repository` <a name="reset_python_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetPythonRepository"></a>

```python
def reset_python_repository() -> None
```

##### `reset_upstream_credentials` <a name="reset_upstream_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetUpstreamCredentials"></a>

```python
def reset_upstream_credentials() -> None
```

##### `reset_yum_repository` <a name="reset_yum_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.resetYumRepository"></a>

```python
def reset_yum_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository">apt_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository">common_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository">docker_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository">maven_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository">npm_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository">python_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials">upstream_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository">yum_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput">apt_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput">common_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput">disable_upstream_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput">docker_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput">maven_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput">npm_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput">python_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput">upstream_credentials_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput">yum_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation">disable_upstream_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apt_repository`<sup>Required</sup> <a name="apt_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepository"></a>

```python
apt_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference</a>

---

##### `common_repository`<sup>Required</sup> <a name="common_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepository"></a>

```python
common_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepositoryOutputReference</a>

---

##### `docker_repository`<sup>Required</sup> <a name="docker_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepository"></a>

```python
docker_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference</a>

---

##### `maven_repository`<sup>Required</sup> <a name="maven_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepository"></a>

```python
maven_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference</a>

---

##### `npm_repository`<sup>Required</sup> <a name="npm_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepository"></a>

```python
npm_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference</a>

---

##### `python_repository`<sup>Required</sup> <a name="python_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepository"></a>

```python
python_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference</a>

---

##### `upstream_credentials`<sup>Required</sup> <a name="upstream_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentials"></a>

```python
upstream_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference</a>

---

##### `yum_repository`<sup>Required</sup> <a name="yum_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepository"></a>

```python
yum_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference</a>

---

##### `apt_repository_input`<sup>Optional</sup> <a name="apt_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.aptRepositoryInput"></a>

```python
apt_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository</a>

---

##### `common_repository_input`<sup>Optional</sup> <a name="common_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.commonRepositoryInput"></a>

```python
common_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigCommonRepository</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_upstream_validation_input`<sup>Optional</sup> <a name="disable_upstream_validation_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidationInput"></a>

```python
disable_upstream_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `docker_repository_input`<sup>Optional</sup> <a name="docker_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.dockerRepositoryInput"></a>

```python
docker_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository</a>

---

##### `maven_repository_input`<sup>Optional</sup> <a name="maven_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.mavenRepositoryInput"></a>

```python
maven_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository</a>

---

##### `npm_repository_input`<sup>Optional</sup> <a name="npm_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.npmRepositoryInput"></a>

```python
npm_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository</a>

---

##### `python_repository_input`<sup>Optional</sup> <a name="python_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.pythonRepositoryInput"></a>

```python
python_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---

##### `upstream_credentials_input`<sup>Optional</sup> <a name="upstream_credentials_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.upstreamCredentialsInput"></a>

```python
upstream_credentials_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---

##### `yum_repository_input`<sup>Optional</sup> <a name="yum_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.yumRepositoryInput"></a>

```python
yum_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_upstream_validation`<sup>Required</sup> <a name="disable_upstream_validation" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.disableUpstreamValidation"></a>

```python
disable_upstream_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfig">GoogleArtifactRegistryRepositoryRemoteRepositoryConfig</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository">put_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository">reset_custom_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_repository` <a name="put_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository"></a>

```python
def put_custom_repository(
  uri: str = None
) -> None
```

###### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.putCustomRepository.parameter.uri"></a>

- *Type:* str

Specific uri to the registry, e.g. '"https://pypi.io"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#uri GoogleArtifactRegistryRepository#uri}

---

##### `reset_custom_repository` <a name="reset_custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetCustomRepository"></a>

```python
def reset_custom_repository() -> None
```

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository">custom_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput">custom_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_repository`<sup>Required</sup> <a name="custom_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepository"></a>

```python
custom_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepositoryOutputReference</a>

---

##### `custom_repository_input`<sup>Optional</sup> <a name="custom_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.customRepositoryInput"></a>

```python
custom_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryCustomRepository</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials">put_username_password_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials">reset_username_password_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_username_password_credentials` <a name="put_username_password_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials"></a>

```python
def put_username_password_credentials(
  password_secret_version: str = None,
  username: str = None
) -> None
```

###### `password_secret_version`<sup>Optional</sup> <a name="password_secret_version" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.passwordSecretVersion"></a>

- *Type:* str

The Secret Manager key version that holds the password to access the remote repository. Must be in the format of 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#password_secret_version GoogleArtifactRegistryRepository#password_secret_version}

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.putUsernamePasswordCredentials.parameter.username"></a>

- *Type:* str

The username to access the remote repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#username GoogleArtifactRegistryRepository#username}

---

##### `reset_username_password_credentials` <a name="reset_username_password_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.resetUsernamePasswordCredentials"></a>

```python
def reset_username_password_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials">username_password_credentials</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput">username_password_credentials_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_password_credentials`<sup>Required</sup> <a name="username_password_credentials" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentials"></a>

```python
username_password_credentials: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference</a>

---

##### `username_password_credentials_input`<sup>Optional</sup> <a name="username_password_credentials_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.usernamePasswordCredentialsInput"></a>

```python
username_password_credentials_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentials</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion">reset_password_secret_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password_secret_version` <a name="reset_password_secret_version" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetPasswordSecretVersion"></a>

```python
def reset_password_secret_version() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput">password_secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion">password_secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_secret_version_input`<sup>Optional</sup> <a name="password_secret_version_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersionInput"></a>

```python
password_secret_version_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password_secret_version`<sup>Required</sup> <a name="password_secret_version" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.passwordSecretVersion"></a>

```python
password_secret_version: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigUpstreamCredentialsUsernamePasswordCredentials</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository">put_public_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository">reset_public_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_public_repository` <a name="put_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository"></a>

```python
def put_public_repository(
  repository_base: str,
  repository_path: str
) -> None
```

###### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.repositoryBase"></a>

- *Type:* str

A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}

---

###### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.putPublicRepository.parameter.repositoryPath"></a>

- *Type:* str

Specific repository from the base, e.g. '"pub/rocky/9/BaseOS/x86_64/os"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}

---

##### `reset_public_repository` <a name="reset_public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.resetPublicRepository"></a>

```python
def reset_public_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository">public_repository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput">public_repository_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_repository`<sup>Required</sup> <a name="public_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepository"></a>

```python
public_repository: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference</a>

---

##### `public_repository_input`<sup>Optional</sup> <a name="public_repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.publicRepositoryInput"></a>

```python
public_repository_input: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository</a>

---


### GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference <a name="GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput">repository_base_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput">repository_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase">repository_base</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath">repository_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_base_input`<sup>Optional</sup> <a name="repository_base_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBaseInput"></a>

```python
repository_base_input: str
```

- *Type:* str

---

##### `repository_path_input`<sup>Optional</sup> <a name="repository_path_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPathInput"></a>

```python
repository_path_input: str
```

- *Type:* str

---

##### `repository_base`<sup>Required</sup> <a name="repository_base" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryBase"></a>

```python
repository_base: str
```

- *Type:* str

---

##### `repository_path`<sup>Required</sup> <a name="repository_path" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.repositoryPath"></a>

```python
repository_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository">GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository</a>

---


### GoogleArtifactRegistryRepositoryTimeoutsOutputReference <a name="GoogleArtifactRegistryRepositoryTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleArtifactRegistryRepositoryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryTimeouts">GoogleArtifactRegistryRepositoryTimeouts</a>]

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies">put_upstream_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies">reset_upstream_policies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_upstream_policies` <a name="put_upstream_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies"></a>

```python
def put_upstream_policies(
  value: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.putUpstreamPolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]

---

##### `reset_upstream_policies` <a name="reset_upstream_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.resetUpstreamPolicies"></a>

```python
def reset_upstream_policies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies">upstream_policies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput">upstream_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `upstream_policies`<sup>Required</sup> <a name="upstream_policies" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPolicies"></a>

```python
upstream_policies: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList</a>

---

##### `upstream_policies_input`<sup>Optional</sup> <a name="upstream_policies_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.upstreamPoliciesInput"></a>

```python
upstream_policies_input: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfig">GoogleArtifactRegistryRepositoryVirtualRepositoryConfig</a>

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]]

---


### GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference <a name="GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository">reset_repository</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.resetRepository"></a>

```python
def reset_repository() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies">GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies</a>]

---


### GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference <a name="GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_artifact_registry_repository

googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig">reset_enablement_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enablement_config` <a name="reset_enablement_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.resetEnablementConfig"></a>

```python
def reset_enablement_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState">enablement_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason">enablement_state_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput">enablement_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig">enablement_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enablement_state`<sup>Required</sup> <a name="enablement_state" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementState"></a>

```python
enablement_state: str
```

- *Type:* str

---

##### `enablement_state_reason`<sup>Required</sup> <a name="enablement_state_reason" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementStateReason"></a>

```python
enablement_state_reason: str
```

- *Type:* str

---

##### `enablement_config_input`<sup>Optional</sup> <a name="enablement_config_input" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfigInput"></a>

```python
enablement_config_input: str
```

- *Type:* str

---

##### `enablement_config`<sup>Required</sup> <a name="enablement_config" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.enablementConfig"></a>

```python
enablement_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleArtifactRegistryRepository.GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig">GoogleArtifactRegistryRepositoryVulnerabilityScanningConfig</a>

---



