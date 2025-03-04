# `googleDataprocMetastoreFederation` Submodule <a name="`googleDataprocMetastoreFederation` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreFederation <a name="GoogleDataprocMetastoreFederation" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation google_dataproc_metastore_federation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_metastores: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]],
  federation_id: str,
  version: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleDataprocMetastoreFederationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.backendMetastores">backend_metastores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]</code> | backend_metastores block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.federationId">federation_id</a></code> | <code>str</code> | The ID of the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.version">version</a></code> | <code>str</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_metastores`<sup>Required</sup> <a name="backend_metastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.backendMetastores"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}

---

##### `federation_id`<sup>Required</sup> <a name="federation_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.federationId"></a>

- *Type:* str

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.version"></a>

- *Type:* str

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.location"></a>

- *Type:* str

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores">put_backend_metastores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backend_metastores` <a name="put_backend_metastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores"></a>

```python
def put_backend_metastores(
  value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putBackendMetastores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreFederation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocMetastoreFederation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocMetastoreFederation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreFederation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores">backend_metastores</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri">endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput">backend_metastores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput">federation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId">federation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_metastores`<sup>Required</sup> <a name="backend_metastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastores"></a>

```python
backend_metastores: GoogleDataprocMetastoreFederationBackendMetastoresList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList">GoogleDataprocMetastoreFederationBackendMetastoresList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `endpoint_uri`<sup>Required</sup> <a name="endpoint_uri" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.endpointUri"></a>

```python
endpoint_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeouts"></a>

```python
timeouts: GoogleDataprocMetastoreFederationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference">GoogleDataprocMetastoreFederationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `backend_metastores_input`<sup>Optional</sup> <a name="backend_metastores_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.backendMetastoresInput"></a>

```python
backend_metastores_input: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]

---

##### `federation_id_input`<sup>Optional</sup> <a name="federation_id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationIdInput"></a>

```python
federation_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocMetastoreFederationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `federation_id`<sup>Required</sup> <a name="federation_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.federationId"></a>

```python
federation_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreFederationBackendMetastores <a name="GoogleDataprocMetastoreFederationBackendMetastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores(
  metastore_type: str,
  name: str,
  rank: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType">metastore_type</a></code> | <code>str</code> | The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name">name</a></code> | <code>str</code> | The relative resource name of the metastore that is being federated. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank">rank</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}. |

---

##### `metastore_type`<sup>Required</sup> <a name="metastore_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

The type of the backend metastore. Possible values: ["METASTORE_TYPE_UNSPECIFIED", "DATAPROC_METASTORE", "BIGQUERY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#metastore_type GoogleDataprocMetastoreFederation#metastore_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.name"></a>

```python
name: str
```

- *Type:* str

The relative resource name of the metastore that is being federated.

The formats of the relative resource names for the currently supported metastores are listed below: Dataplex: projects/{projectId}/locations/{location}/lakes/{lake_id} BigQuery: projects/{projectId} Dataproc Metastore: projects/{projectId}/locations/{location}/services/{serviceId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#name GoogleDataprocMetastoreFederation#name}

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores.property.rank"></a>

```python
rank: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#rank GoogleDataprocMetastoreFederation#rank}.

---

### GoogleDataprocMetastoreFederationConfig <a name="GoogleDataprocMetastoreFederationConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_metastores: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]],
  federation_id: str,
  version: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: GoogleDataprocMetastoreFederationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores">backend_metastores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]</code> | backend_metastores block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId">federation_id</a></code> | <code>str</code> | The ID of the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version">version</a></code> | <code>str</code> | The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the metastore federation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location">location</a></code> | <code>str</code> | The location where the metastore federation should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_metastores`<sup>Required</sup> <a name="backend_metastores" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.backendMetastores"></a>

```python
backend_metastores: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]

backend_metastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#backend_metastores GoogleDataprocMetastoreFederation#backend_metastores}

---

##### `federation_id`<sup>Required</sup> <a name="federation_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.federationId"></a>

```python
federation_id: str
```

- *Type:* str

The ID of the metastore federation.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#federation_id GoogleDataprocMetastoreFederation#federation_id}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#version GoogleDataprocMetastoreFederation#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#id GoogleDataprocMetastoreFederation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the metastore federation.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#labels GoogleDataprocMetastoreFederation#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the metastore federation should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#location GoogleDataprocMetastoreFederation#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#project GoogleDataprocMetastoreFederation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocMetastoreFederationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#timeouts GoogleDataprocMetastoreFederation#timeouts}

---

### GoogleDataprocMetastoreFederationTimeouts <a name="GoogleDataprocMetastoreFederationTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#create GoogleDataprocMetastoreFederation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#delete GoogleDataprocMetastoreFederation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_dataproc_metastore_federation#update GoogleDataprocMetastoreFederation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreFederationBackendMetastoresList <a name="GoogleDataprocMetastoreFederationBackendMetastoresList" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDataprocMetastoreFederationBackendMetastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDataprocMetastoreFederationBackendMetastores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]]

---


### GoogleDataprocMetastoreFederationBackendMetastoresOutputReference <a name="GoogleDataprocMetastoreFederationBackendMetastoresOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput">metastore_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput">rank_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType">metastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank">rank</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metastore_type_input`<sup>Optional</sup> <a name="metastore_type_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreTypeInput"></a>

```python
metastore_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rank_input`<sup>Optional</sup> <a name="rank_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rankInput"></a>

```python
rank_input: str
```

- *Type:* str

---

##### `metastore_type`<sup>Required</sup> <a name="metastore_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.rank"></a>

```python
rank: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocMetastoreFederationBackendMetastores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationBackendMetastores">GoogleDataprocMetastoreFederationBackendMetastores</a>]

---


### GoogleDataprocMetastoreFederationTimeoutsOutputReference <a name="GoogleDataprocMetastoreFederationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_federation

googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocMetastoreFederationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreFederation.GoogleDataprocMetastoreFederationTimeouts">GoogleDataprocMetastoreFederationTimeouts</a>]

---



