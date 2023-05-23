# `google_workstations_workstation_config`

Refer to the Terraform Registory for docs: [`google_workstations_workstation_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config).

# `googleWorkstationsWorkstationConfig` Submodule <a name="`googleWorkstationsWorkstationConfig` Submodule" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleWorkstationsWorkstationConfigA <a name="GoogleWorkstationsWorkstationConfigA" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config google_workstations_workstation_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  workstation_cluster_id: str,
  workstation_config_id: str,
  annotations: typing.Mapping[str] = None,
  container: GoogleWorkstationsWorkstationConfigContainer = None,
  display_name: str = None,
  encryption_key: GoogleWorkstationsWorkstationConfigEncryptionKey = None,
  host: GoogleWorkstationsWorkstationConfigHost = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  persistent_directories: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]] = None,
  project: str = None,
  timeouts: GoogleWorkstationsWorkstationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.host">host</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories">persistent_directories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]</code> | persistent_directories block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.location"></a>

- *Type:* str

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#location GoogleWorkstationsWorkstationConfigA#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.workstationClusterId"></a>

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_cluster_id GoogleWorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.workstationConfigId"></a>

- *Type:* str

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_config_id GoogleWorkstationsWorkstationConfigA#workstation_config_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#annotations GoogleWorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.container"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#container GoogleWorkstationsWorkstationConfigA#container}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#display_name GoogleWorkstationsWorkstationConfigA#display_name}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.encryptionKey"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#encryption_key GoogleWorkstationsWorkstationConfigA#encryption_key}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.host"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#host GoogleWorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#labels GoogleWorkstationsWorkstationConfigA#labels}

---

##### `persistent_directories`<sup>Optional</sup> <a name="persistent_directories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.persistentDirectories"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#persistent_directories GoogleWorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#timeouts GoogleWorkstationsWorkstationConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey">put_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost">put_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories">put_persistent_directories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetContainer">reset_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetEncryptionKey">reset_encryption_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetPersistentDirectories">reset_persistent_directories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_container` <a name="put_container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer"></a>

```python
def put_container(
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  run_as_user: typing.Union[int, float] = None,
  working_dir: str = None
) -> None
```

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.args"></a>

- *Type:* typing.List[str]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#args GoogleWorkstationsWorkstationConfigA#args}

---

###### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.command"></a>

- *Type:* typing.List[str]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#command GoogleWorkstationsWorkstationConfigA#command}

---

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.env"></a>

- *Type:* typing.Mapping[str]

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#env GoogleWorkstationsWorkstationConfigA#env}

---

###### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.image"></a>

- *Type:* str

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#image GoogleWorkstationsWorkstationConfigA#image}

---

###### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.runAsUser"></a>

- *Type:* typing.Union[int, float]

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#run_as_user GoogleWorkstationsWorkstationConfigA#run_as_user}

---

###### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putContainer.parameter.workingDir"></a>

- *Type:* str

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#working_dir GoogleWorkstationsWorkstationConfigA#working_dir}

---

##### `put_encryption_key` <a name="put_encryption_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey"></a>

```python
def put_encryption_key(
  kms_key: str,
  kms_key_service_account: str
) -> None
```

###### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey.parameter.kmsKey"></a>

- *Type:* str

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key GoogleWorkstationsWorkstationConfigA#kms_key}

---

###### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putEncryptionKey.parameter.kmsKeyServiceAccount"></a>

- *Type:* str

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key_service_account GoogleWorkstationsWorkstationConfigA#kms_key_service_account}

---

##### `put_host` <a name="put_host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost"></a>

```python
def put_host(
  gce_instance: GoogleWorkstationsWorkstationConfigHostGceInstance = None
) -> None
```

###### `gce_instance`<sup>Optional</sup> <a name="gce_instance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putHost.parameter.gceInstance"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#gce_instance GoogleWorkstationsWorkstationConfigA#gce_instance}

---

##### `put_persistent_directories` <a name="put_persistent_directories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories"></a>

```python
def put_persistent_directories(
  value: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putPersistentDirectories.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_container` <a name="reset_container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetContainer"></a>

```python
def reset_container() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_encryption_key` <a name="reset_encryption_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetEncryptionKey"></a>

```python
def reset_encryption_key() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_persistent_directories` <a name="reset_persistent_directories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetPersistentDirectories"></a>

```python
def reset_persistent_directories() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList">GoogleWorkstationsWorkstationConfigConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference">GoogleWorkstationsWorkstationConfigContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.degraded">degraded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference">GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.host">host</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference">GoogleWorkstationsWorkstationConfigHostOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectories">persistent_directories</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList">GoogleWorkstationsWorkstationConfigPersistentDirectoriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference">GoogleWorkstationsWorkstationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.containerInput">container_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKeyInput">encryption_key_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.hostInput">host_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectoriesInput">persistent_directories_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterIdInput">workstation_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigIdInput">workstation_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.conditions"></a>

```python
conditions: GoogleWorkstationsWorkstationConfigConditionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList">GoogleWorkstationsWorkstationConfigConditionsList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.container"></a>

```python
container: GoogleWorkstationsWorkstationConfigContainerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference">GoogleWorkstationsWorkstationConfigContainerOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `degraded`<sup>Required</sup> <a name="degraded" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.degraded"></a>

```python
degraded: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKey"></a>

```python
encryption_key: GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference">GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.host"></a>

```python
host: GoogleWorkstationsWorkstationConfigHostOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference">GoogleWorkstationsWorkstationConfigHostOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent_directories`<sup>Required</sup> <a name="persistent_directories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectories"></a>

```python
persistent_directories: GoogleWorkstationsWorkstationConfigPersistentDirectoriesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList">GoogleWorkstationsWorkstationConfigPersistentDirectoriesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeouts"></a>

```python
timeouts: GoogleWorkstationsWorkstationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference">GoogleWorkstationsWorkstationConfigTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.containerInput"></a>

```python
container_input: GoogleWorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.encryptionKeyInput"></a>

```python
encryption_key_input: GoogleWorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.hostInput"></a>

```python
host_input: GoogleWorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `persistent_directories_input`<sup>Optional</sup> <a name="persistent_directories_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.persistentDirectoriesInput"></a>

```python
persistent_directories_input: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GoogleWorkstationsWorkstationConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>, cdktf.IResolvable]

---

##### `workstation_cluster_id_input`<sup>Optional</sup> <a name="workstation_cluster_id_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterIdInput"></a>

```python
workstation_cluster_id_input: str
```

- *Type:* str

---

##### `workstation_config_id_input`<sup>Optional</sup> <a name="workstation_config_id_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigIdInput"></a>

```python
workstation_config_id_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleWorkstationsWorkstationConfigAConfig <a name="GoogleWorkstationsWorkstationConfigAConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  workstation_cluster_id: str,
  workstation_config_id: str,
  annotations: typing.Mapping[str] = None,
  container: GoogleWorkstationsWorkstationConfigContainer = None,
  display_name: str = None,
  encryption_key: GoogleWorkstationsWorkstationConfigEncryptionKey = None,
  host: GoogleWorkstationsWorkstationConfigHost = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  persistent_directories: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]] = None,
  project: str = None,
  timeouts: GoogleWorkstationsWorkstationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.location">location</a></code> | <code>str</code> | The location where the workstation cluster config should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationClusterId">workstation_cluster_id</a></code> | <code>str</code> | The ID of the parent workstation cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationConfigId">workstation_config_id</a></code> | <code>str</code> | The ID to be assigned to the workstation cluster config. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Client-specified annotations. This is distinct from labels. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable name for this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.encryptionKey">encryption_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.host">host</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | host block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.persistentDirectories">persistent_directories</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]</code> | persistent_directories block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the workstation cluster config should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#location GoogleWorkstationsWorkstationConfigA#location}

---

##### `workstation_cluster_id`<sup>Required</sup> <a name="workstation_cluster_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationClusterId"></a>

```python
workstation_cluster_id: str
```

- *Type:* str

The ID of the parent workstation cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_cluster_id GoogleWorkstationsWorkstationConfigA#workstation_cluster_id}

---

##### `workstation_config_id`<sup>Required</sup> <a name="workstation_config_id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.workstationConfigId"></a>

```python
workstation_config_id: str
```

- *Type:* str

The ID to be assigned to the workstation cluster config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_config_id GoogleWorkstationsWorkstationConfigA#workstation_config_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified annotations. This is distinct from labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#annotations GoogleWorkstationsWorkstationConfigA#annotations}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.container"></a>

```python
container: GoogleWorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#container GoogleWorkstationsWorkstationConfigA#container}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#display_name GoogleWorkstationsWorkstationConfigA#display_name}

---

##### `encryption_key`<sup>Optional</sup> <a name="encryption_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.encryptionKey"></a>

```python
encryption_key: GoogleWorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#encryption_key GoogleWorkstationsWorkstationConfigA#encryption_key}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.host"></a>

```python
host: GoogleWorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

host block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#host GoogleWorkstationsWorkstationConfigA#host}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#labels GoogleWorkstationsWorkstationConfigA#labels}

---

##### `persistent_directories`<sup>Optional</sup> <a name="persistent_directories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.persistentDirectories"></a>

```python
persistent_directories: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]

persistent_directories block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#persistent_directories GoogleWorkstationsWorkstationConfigA#persistent_directories}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigAConfig.property.timeouts"></a>

```python
timeouts: GoogleWorkstationsWorkstationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#timeouts GoogleWorkstationsWorkstationConfigA#timeouts}

---

### GoogleWorkstationsWorkstationConfigConditions <a name="GoogleWorkstationsWorkstationConfigConditions" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions()
```


### GoogleWorkstationsWorkstationConfigContainer <a name="GoogleWorkstationsWorkstationConfigContainer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer(
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Mapping[str] = None,
  image: str = None,
  run_as_user: typing.Union[int, float] = None,
  working_dir: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments passed to the entrypoint. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.command">command</a></code> | <code>typing.List[str]</code> | If set, overrides the default ENTRYPOINT specified by the image. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.env">env</a></code> | <code>typing.Mapping[str]</code> | Environment variables passed to the container. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.image">image</a></code> | <code>str</code> | Docker image defining the container. This image must be accessible by the config's service account. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | If set, overrides the USER specified in the image with the given uid. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.workingDir">working_dir</a></code> | <code>str</code> | If set, overrides the default DIR specified by the image. |

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments passed to the entrypoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#args GoogleWorkstationsWorkstationConfigA#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

If set, overrides the default ENTRYPOINT specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#command GoogleWorkstationsWorkstationConfigA#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables passed to the container.

The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#env GoogleWorkstationsWorkstationConfigA#env}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.image"></a>

```python
image: str
```

- *Type:* str

Docker image defining the container. This image must be accessible by the config's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#image GoogleWorkstationsWorkstationConfigA#image}

---

##### `run_as_user`<sup>Optional</sup> <a name="run_as_user" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, overrides the USER specified in the image with the given uid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#run_as_user GoogleWorkstationsWorkstationConfigA#run_as_user}

---

##### `working_dir`<sup>Optional</sup> <a name="working_dir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

If set, overrides the default DIR specified by the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#working_dir GoogleWorkstationsWorkstationConfigA#working_dir}

---

### GoogleWorkstationsWorkstationConfigEncryptionKey <a name="GoogleWorkstationsWorkstationConfigEncryptionKey" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey(
  kms_key: str,
  kms_key_service_account: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKey">kms_key</a></code> | <code>str</code> | The name of the Google Cloud KMS encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | The service account to use with the specified KMS key. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

The name of the Google Cloud KMS encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key GoogleWorkstationsWorkstationConfigA#kms_key}

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

The service account to use with the specified KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key_service_account GoogleWorkstationsWorkstationConfigA#kms_key_service_account}

---

### GoogleWorkstationsWorkstationConfigHost <a name="GoogleWorkstationsWorkstationConfigHost" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost(
  gce_instance: GoogleWorkstationsWorkstationConfigHostGceInstance = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.property.gceInstance">gce_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | gce_instance block. |

---

##### `gce_instance`<sup>Optional</sup> <a name="gce_instance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost.property.gceInstance"></a>

```python
gce_instance: GoogleWorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

gce_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#gce_instance GoogleWorkstationsWorkstationConfigA#gce_instance}

---

### GoogleWorkstationsWorkstationConfigHostGceInstance <a name="GoogleWorkstationsWorkstationConfigHostGceInstance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance(
  boot_disk_size_gb: typing.Union[int, float] = None,
  confidential_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig = None,
  disable_public_ip_addresses: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  pool_size: typing.Union[int, float] = None,
  service_account: str = None,
  shielded_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the boot disk in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses">disable_public_ip_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether instances have no public IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.machineType">machine_type</a></code> | <code>str</code> | The name of a Compute Engine machine type. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | Number of instances to pool for faster workstation startup. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | Email address of the service account that will be used on VM instances used to support this config. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | Network tags to add to the Compute Engine machines backing the Workstations. |

---

##### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}

---

##### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#confidential_instance_config GoogleWorkstationsWorkstationConfigA#confidential_instance_config}

---

##### `disable_public_ip_addresses`<sup>Optional</sup> <a name="disable_public_ip_addresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.disablePublicIpAddresses"></a>

```python
disable_public_ip_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disable_public_ip_addresses GoogleWorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}

---

##### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#service_account GoogleWorkstationsWorkstationConfigA#service_account}

---

##### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#shielded_instance_config GoogleWorkstationsWorkstationConfigA#shielded_instance_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#tags GoogleWorkstationsWorkstationConfigA#tags}

---

### GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig(
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the instance has confidential compute enabled. |

---

##### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_confidential_compute GoogleWorkstationsWorkstationConfigA#enable_confidential_compute}

---

### GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the instance has the vTPM enabled. |

---

##### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_integrity_monitoring GoogleWorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_secure_boot GoogleWorkstationsWorkstationConfigA#enable_secure_boot}

---

##### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_vtpm GoogleWorkstationsWorkstationConfigA#enable_vtpm}

---

### GoogleWorkstationsWorkstationConfigPersistentDirectories <a name="GoogleWorkstationsWorkstationConfigPersistentDirectories" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories(
  gce_pd: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd = None,
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | gce_pd block. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.mountPath">mount_path</a></code> | <code>str</code> | Location of this directory in the running workstation. |

---

##### `gce_pd`<sup>Optional</sup> <a name="gce_pd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.gcePd"></a>

```python
gce_pd: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

gce_pd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#gce_pd GoogleWorkstationsWorkstationConfigA#gce_pd}

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Location of this directory in the running workstation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#mount_path GoogleWorkstationsWorkstationConfigA#mount_path}

---

### GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd(
  disk_type: str = None,
  fs_type: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType">disk_type</a></code> | <code>str</code> | Type of the disk to use. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType">fs_type</a></code> | <code>str</code> | Type of file system that the disk should be formatted with. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"]. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | Size of the disk in GB. Must be empty if sourceSnapshot is set. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | The snapshot to use as the source for the disk. |

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

Type of the disk to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}

---

##### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#fs_type GoogleWorkstationsWorkstationConfigA#fs_type}

---

##### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#reclaim_policy GoogleWorkstationsWorkstationConfigA#reclaim_policy}

---

##### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Size of the disk in GB. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#size_gb GoogleWorkstationsWorkstationConfigA#size_gb}

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

The snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, sizeGb and fsType must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#source_snapshot GoogleWorkstationsWorkstationConfigA#source_snapshot}

---

### GoogleWorkstationsWorkstationConfigTimeouts <a name="GoogleWorkstationsWorkstationConfigTimeouts" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleWorkstationsWorkstationConfigConditionsList <a name="GoogleWorkstationsWorkstationConfigConditionsList" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkstationsWorkstationConfigConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleWorkstationsWorkstationConfigConditionsOutputReference <a name="GoogleWorkstationsWorkstationConfigConditionsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions">GoogleWorkstationsWorkstationConfigConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.details"></a>

```python
details: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigConditions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigConditions">GoogleWorkstationsWorkstationConfigConditions</a>

---


### GoogleWorkstationsWorkstationConfigContainerOutputReference <a name="GoogleWorkstationsWorkstationConfigContainerOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetImage">reset_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser">reset_run_as_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir">reset_working_dir</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_image` <a name="reset_image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetImage"></a>

```python
def reset_image() -> None
```

##### `reset_run_as_user` <a name="reset_run_as_user" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetRunAsUser"></a>

```python
def reset_run_as_user() -> None
```

##### `reset_working_dir` <a name="reset_working_dir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.resetWorkingDir"></a>

```python
def reset_working_dir() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput">run_as_user_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput">working_dir_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.env">env</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUser">run_as_user</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDir">working_dir</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `run_as_user_input`<sup>Optional</sup> <a name="run_as_user_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUserInput"></a>

```python
run_as_user_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir_input`<sup>Optional</sup> <a name="working_dir_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDirInput"></a>

```python
working_dir_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.runAsUser"></a>

```python
run_as_user: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `working_dir`<sup>Required</sup> <a name="working_dir" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.workingDir"></a>

```python
working_dir: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainerOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigContainer
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigContainer">GoogleWorkstationsWorkstationConfigContainer</a>

---


### GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference <a name="GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">kms_key_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kms_key_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key_service_account_input`<sup>Optional</sup> <a name="kms_key_service_account_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```python
kms_key_service_account_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `kms_key_service_account`<sup>Required</sup> <a name="kms_key_service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```python
kms_key_service_account: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigEncryptionKey">GoogleWorkstationsWorkstationConfigEncryptionKey</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">reset_enable_confidential_compute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_confidential_compute` <a name="reset_enable_confidential_compute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```python
def reset_enable_confidential_compute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">enable_confidential_compute_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">enable_confidential_compute</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_confidential_compute_input`<sup>Optional</sup> <a name="enable_confidential_compute_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```python
enable_confidential_compute_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_confidential_compute`<sup>Required</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```python
enable_confidential_compute: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig">put_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig">put_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb">reset_boot_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig">reset_confidential_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses">reset_disable_public_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize">reset_pool_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig">reset_shielded_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_confidential_instance_config` <a name="put_confidential_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig"></a>

```python
def put_confidential_instance_config(
  enable_confidential_compute: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_confidential_compute`<sup>Optional</sup> <a name="enable_confidential_compute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putConfidentialInstanceConfig.parameter.enableConfidentialCompute"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has confidential compute enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_confidential_compute GoogleWorkstationsWorkstationConfigA#enable_confidential_compute}

---

##### `put_shielded_instance_config` <a name="put_shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig"></a>

```python
def put_shielded_instance_config(
  enable_integrity_monitoring: typing.Union[bool, IResolvable] = None,
  enable_secure_boot: typing.Union[bool, IResolvable] = None,
  enable_vtpm: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_integrity_monitoring`<sup>Optional</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableIntegrityMonitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has integrity monitoring enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_integrity_monitoring GoogleWorkstationsWorkstationConfigA#enable_integrity_monitoring}

---

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has Secure Boot enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_secure_boot GoogleWorkstationsWorkstationConfigA#enable_secure_boot}

---

###### `enable_vtpm`<sup>Optional</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.putShieldedInstanceConfig.parameter.enableVtpm"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the instance has the vTPM enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_vtpm GoogleWorkstationsWorkstationConfigA#enable_vtpm}

---

##### `reset_boot_disk_size_gb` <a name="reset_boot_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetBootDiskSizeGb"></a>

```python
def reset_boot_disk_size_gb() -> None
```

##### `reset_confidential_instance_config` <a name="reset_confidential_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetConfidentialInstanceConfig"></a>

```python
def reset_confidential_instance_config() -> None
```

##### `reset_disable_public_ip_addresses` <a name="reset_disable_public_ip_addresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetDisablePublicIpAddresses"></a>

```python
def reset_disable_public_ip_addresses() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_pool_size` <a name="reset_pool_size" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetPoolSize"></a>

```python
def reset_pool_size() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_shielded_instance_config` <a name="reset_shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetShieldedInstanceConfig"></a>

```python
def reset_shielded_instance_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig">confidential_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig">shielded_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput">boot_disk_size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput">confidential_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput">disable_public_ip_addresses_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput">pool_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput">shielded_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb">boot_disk_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses">disable_public_ip_addresses</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize">pool_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidential_instance_config`<sup>Required</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfig"></a>

```python
confidential_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference</a>

---

##### `shielded_instance_config`<sup>Required</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfig"></a>

```python
shielded_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference</a>

---

##### `boot_disk_size_gb_input`<sup>Optional</sup> <a name="boot_disk_size_gb_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGbInput"></a>

```python
boot_disk_size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidential_instance_config_input`<sup>Optional</sup> <a name="confidential_instance_config_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.confidentialInstanceConfigInput"></a>

```python
confidential_instance_config_input: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

---

##### `disable_public_ip_addresses_input`<sup>Optional</sup> <a name="disable_public_ip_addresses_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddressesInput"></a>

```python
disable_public_ip_addresses_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `pool_size_input`<sup>Optional</sup> <a name="pool_size_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSizeInput"></a>

```python
pool_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `shielded_instance_config_input`<sup>Optional</sup> <a name="shielded_instance_config_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.shieldedInstanceConfigInput"></a>

```python
shielded_instance_config_input: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `boot_disk_size_gb`<sup>Required</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.bootDiskSizeGb"></a>

```python
boot_disk_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_public_ip_addresses`<sup>Required</sup> <a name="disable_public_ip_addresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.disablePublicIpAddresses"></a>

```python
disable_public_ip_addresses: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `pool_size`<sup>Required</sup> <a name="pool_size" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.poolSize"></a>

```python
pool_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

---


### GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference <a name="GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">reset_enable_integrity_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">reset_enable_vtpm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_integrity_monitoring` <a name="reset_enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```python
def reset_enable_integrity_monitoring() -> None
```

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```

##### `reset_enable_vtpm` <a name="reset_enable_vtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```python
def reset_enable_vtpm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">enable_integrity_monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">enable_vtpm_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">enable_integrity_monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">enable_vtpm</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_integrity_monitoring_input`<sup>Optional</sup> <a name="enable_integrity_monitoring_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```python
enable_integrity_monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm_input`<sup>Optional</sup> <a name="enable_vtpm_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```python
enable_vtpm_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_integrity_monitoring`<sup>Required</sup> <a name="enable_integrity_monitoring" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```python
enable_integrity_monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_vtpm`<sup>Required</sup> <a name="enable_vtpm" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```python
enable_vtpm: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

---


### GoogleWorkstationsWorkstationConfigHostOutputReference <a name="GoogleWorkstationsWorkstationConfigHostOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance">put_gce_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resetGceInstance">reset_gce_instance</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gce_instance` <a name="put_gce_instance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance"></a>

```python
def put_gce_instance(
  boot_disk_size_gb: typing.Union[int, float] = None,
  confidential_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig = None,
  disable_public_ip_addresses: typing.Union[bool, IResolvable] = None,
  machine_type: str = None,
  pool_size: typing.Union[int, float] = None,
  service_account: str = None,
  shielded_instance_config: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig = None,
  tags: typing.List[str] = None
) -> None
```

###### `boot_disk_size_gb`<sup>Optional</sup> <a name="boot_disk_size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.bootDiskSizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the boot disk in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}

---

###### `confidential_instance_config`<sup>Optional</sup> <a name="confidential_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.confidentialInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#confidential_instance_config GoogleWorkstationsWorkstationConfigA#confidential_instance_config}

---

###### `disable_public_ip_addresses`<sup>Optional</sup> <a name="disable_public_ip_addresses" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.disablePublicIpAddresses"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether instances have no public IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disable_public_ip_addresses GoogleWorkstationsWorkstationConfigA#disable_public_ip_addresses}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.machineType"></a>

- *Type:* str

The name of a Compute Engine machine type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}

---

###### `pool_size`<sup>Optional</sup> <a name="pool_size" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.poolSize"></a>

- *Type:* typing.Union[int, float]

Number of instances to pool for faster workstation startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}

---

###### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.serviceAccount"></a>

- *Type:* str

Email address of the service account that will be used on VM instances used to support this config.

This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#service_account GoogleWorkstationsWorkstationConfigA#service_account}

---

###### `shielded_instance_config`<sup>Optional</sup> <a name="shielded_instance_config" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.shieldedInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig">GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#shielded_instance_config GoogleWorkstationsWorkstationConfigA#shielded_instance_config}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.putGceInstance.parameter.tags"></a>

- *Type:* typing.List[str]

Network tags to add to the Compute Engine machines backing the Workstations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#tags GoogleWorkstationsWorkstationConfigA#tags}

---

##### `reset_gce_instance` <a name="reset_gce_instance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.resetGceInstance"></a>

```python
def reset_gce_instance() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstance">gce_instance</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput">gce_instance_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gce_instance`<sup>Required</sup> <a name="gce_instance" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstance"></a>

```python
gce_instance: GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference">GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference</a>

---

##### `gce_instance_input`<sup>Optional</sup> <a name="gce_instance_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.gceInstanceInput"></a>

```python
gce_instance_input: GoogleWorkstationsWorkstationConfigHostGceInstance
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostGceInstance">GoogleWorkstationsWorkstationConfigHostGceInstance</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHostOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigHost
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigHost">GoogleWorkstationsWorkstationConfigHost</a>

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType">reset_fs_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy">reset_reclaim_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb">reset_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```

##### `reset_fs_type` <a name="reset_fs_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetFsType"></a>

```python
def reset_fs_type() -> None
```

##### `reset_reclaim_policy` <a name="reset_reclaim_policy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetReclaimPolicy"></a>

```python
def reset_reclaim_policy() -> None
```

##### `reset_size_gb` <a name="reset_size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSizeGb"></a>

```python
def reset_size_gb() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput">fs_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput">reclaim_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput">size_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType">fs_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy">reclaim_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `fs_type_input`<sup>Optional</sup> <a name="fs_type_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsTypeInput"></a>

```python
fs_type_input: str
```

- *Type:* str

---

##### `reclaim_policy_input`<sup>Optional</sup> <a name="reclaim_policy_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicyInput"></a>

```python
reclaim_policy_input: str
```

- *Type:* str

---

##### `size_gb_input`<sup>Optional</sup> <a name="size_gb_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGbInput"></a>

```python
size_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `fs_type`<sup>Required</sup> <a name="fs_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.fsType"></a>

```python
fs_type: str
```

- *Type:* str

---

##### `reclaim_policy`<sup>Required</sup> <a name="reclaim_policy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.reclaimPolicy"></a>

```python
reclaim_policy: str
```

- *Type:* str

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference.property.internalValue"></a>

```python
internal_value: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesList <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesList" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleWorkstationsWorkstationConfigPersistentDirectories]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>]]

---


### GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference <a name="GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd">put_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd">reset_gce_pd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_gce_pd` <a name="put_gce_pd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd"></a>

```python
def put_gce_pd(
  disk_type: str = None,
  fs_type: str = None,
  reclaim_policy: str = None,
  size_gb: typing.Union[int, float] = None,
  source_snapshot: str = None
) -> None
```

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.diskType"></a>

- *Type:* str

Type of the disk to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}

---

###### `fs_type`<sup>Optional</sup> <a name="fs_type" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.fsType"></a>

- *Type:* str

Type of file system that the disk should be formatted with.

The workstation image must support this file system type. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#fs_type GoogleWorkstationsWorkstationConfigA#fs_type}

---

###### `reclaim_policy`<sup>Optional</sup> <a name="reclaim_policy" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.reclaimPolicy"></a>

- *Type:* str

What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#reclaim_policy GoogleWorkstationsWorkstationConfigA#reclaim_policy}

---

###### `size_gb`<sup>Optional</sup> <a name="size_gb" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.sizeGb"></a>

- *Type:* typing.Union[int, float]

Size of the disk in GB. Must be empty if sourceSnapshot is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#size_gb GoogleWorkstationsWorkstationConfigA#size_gb}

---

###### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.putGcePd.parameter.sourceSnapshot"></a>

- *Type:* str

The snapshot to use as the source for the disk.

This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, sizeGb and fsType must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#source_snapshot GoogleWorkstationsWorkstationConfigA#source_snapshot}

---

##### `reset_gce_pd` <a name="reset_gce_pd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetGcePd"></a>

```python
def reset_gce_pd() -> None
```

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd">gce_pd</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput">gce_pd_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gce_pd`<sup>Required</sup> <a name="gce_pd" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePd"></a>

```python
gce_pd: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference</a>

---

##### `gce_pd_input`<sup>Optional</sup> <a name="gce_pd_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.gcePdInput"></a>

```python
gce_pd_input: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd">GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd</a>

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleWorkstationsWorkstationConfigPersistentDirectories, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigPersistentDirectories">GoogleWorkstationsWorkstationConfigPersistentDirectories</a>, cdktf.IResolvable]

---


### GoogleWorkstationsWorkstationConfigTimeoutsOutputReference <a name="GoogleWorkstationsWorkstationConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_workstations_workstation_config

googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleWorkstationsWorkstationConfigTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleWorkstationsWorkstationConfig.GoogleWorkstationsWorkstationConfigTimeouts">GoogleWorkstationsWorkstationConfigTimeouts</a>, cdktf.IResolvable]

---



