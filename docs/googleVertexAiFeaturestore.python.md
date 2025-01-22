# `googleVertexAiFeaturestore` Submodule <a name="`googleVertexAiFeaturestore` Submodule" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeaturestore <a name="GoogleVertexAiFeaturestore" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore google_vertex_ai_featurestore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_spec: GoogleVertexAiFeaturestoreEncryptionSpec = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  online_serving_config: GoogleVertexAiFeaturestoreOnlineServingConfig = None,
  online_storage_ttl_days: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiFeaturestoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.onlineServingConfig">online_serving_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.onlineStorageTtlDays">online_storage_ttl_days</a></code> | <code>typing.Union[int, float]</code> | TTL in days for feature values that will be stored in online serving storage. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.region">region</a></code> | <code>str</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#encryption_spec GoogleVertexAiFeaturestore#encryption_spec}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#force_destroy GoogleVertexAiFeaturestore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#labels GoogleVertexAiFeaturestore#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.name"></a>

- *Type:* str

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#name GoogleVertexAiFeaturestore#name}

---

##### `online_serving_config`<sup>Optional</sup> <a name="online_serving_config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.onlineServingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#online_serving_config GoogleVertexAiFeaturestore#online_serving_config}

---

##### `online_storage_ttl_days`<sup>Optional</sup> <a name="online_storage_ttl_days" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.onlineStorageTtlDays"></a>

- *Type:* typing.Union[int, float]

TTL in days for feature values that will be stored in online serving storage.

The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#online_storage_ttl_days GoogleVertexAiFeaturestore#online_storage_ttl_days}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.region"></a>

- *Type:* str

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#region GoogleVertexAiFeaturestore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#timeouts GoogleVertexAiFeaturestore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig">put_online_serving_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig">reset_online_serving_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays">reset_online_storage_ttl_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#kms_key_name GoogleVertexAiFeaturestore#kms_key_name}

---

##### `put_online_serving_config` <a name="put_online_serving_config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig"></a>

```python
def put_online_serving_config(
  fixed_node_count: typing.Union[int, float] = None,
  scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScaling = None
) -> None
```

###### `fixed_node_count`<sup>Optional</sup> <a name="fixed_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig.parameter.fixedNodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes for each cluster.

The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#fixed_node_count GoogleVertexAiFeaturestore#fixed_node_count}

---

###### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putOnlineServingConfig.parameter.scaling"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#scaling GoogleVertexAiFeaturestore#scaling}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}.

---

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_online_serving_config` <a name="reset_online_serving_config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineServingConfig"></a>

```python
def reset_online_serving_config() -> None
```

##### `reset_online_storage_ttl_days` <a name="reset_online_storage_ttl_days" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetOnlineStorageTtlDays"></a>

```python
def reset_online_storage_ttl_days() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVertexAiFeaturestore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVertexAiFeaturestore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVertexAiFeaturestore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeaturestore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig">online_serving_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput">online_serving_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput">online_storage_ttl_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays">online_storage_ttl_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiFeaturestoreEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference">GoogleVertexAiFeaturestoreEncryptionSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `online_serving_config`<sup>Required</sup> <a name="online_serving_config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfig"></a>

```python
online_serving_config: GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeaturestoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference">GoogleVertexAiFeaturestoreTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleVertexAiFeaturestoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `online_serving_config_input`<sup>Optional</sup> <a name="online_serving_config_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineServingConfigInput"></a>

```python
online_serving_config_input: GoogleVertexAiFeaturestoreOnlineServingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---

##### `online_storage_ttl_days_input`<sup>Optional</sup> <a name="online_storage_ttl_days_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDaysInput"></a>

```python
online_storage_ttl_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVertexAiFeaturestoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `online_storage_ttl_days`<sup>Required</sup> <a name="online_storage_ttl_days" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.onlineStorageTtlDays"></a>

```python
online_storage_ttl_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeaturestoreConfig <a name="GoogleVertexAiFeaturestoreConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  encryption_spec: GoogleVertexAiFeaturestoreEncryptionSpec = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  online_serving_config: GoogleVertexAiFeaturestoreOnlineServingConfig = None,
  online_storage_ttl_days: typing.Union[int, float] = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleVertexAiFeaturestoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, any EntityTypes and Features for this Featurestore will also be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A set of key/value label pairs to assign to this Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name">name</a></code> | <code>str</code> | The name of the Featurestore. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig">online_serving_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | online_serving_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays">online_storage_ttl_days</a></code> | <code>typing.Union[int, float]</code> | TTL in days for feature values that will be stored in online serving storage. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region">region</a></code> | <code>str</code> | The region of the dataset. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleVertexAiFeaturestoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#encryption_spec GoogleVertexAiFeaturestore#encryption_spec}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, any EntityTypes and Features for this Featurestore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#force_destroy GoogleVertexAiFeaturestore#force_destroy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#id GoogleVertexAiFeaturestore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A set of key/value label pairs to assign to this Featurestore.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#labels GoogleVertexAiFeaturestore#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Featurestore.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#name GoogleVertexAiFeaturestore#name}

---

##### `online_serving_config`<sup>Optional</sup> <a name="online_serving_config" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineServingConfig"></a>

```python
online_serving_config: GoogleVertexAiFeaturestoreOnlineServingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

online_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#online_serving_config GoogleVertexAiFeaturestore#online_serving_config}

---

##### `online_storage_ttl_days`<sup>Optional</sup> <a name="online_storage_ttl_days" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.onlineStorageTtlDays"></a>

```python
online_storage_ttl_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

TTL in days for feature values that will be stored in online serving storage.

The Feature Store online storage periodically removes obsolete feature values older than onlineStorageTtlDays since the feature generation time. Note that onlineStorageTtlDays should be less than or equal to offlineStorageTtlDays for each EntityType under a featurestore. If not set, default to 4000 days

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#online_storage_ttl_days GoogleVertexAiFeaturestore#online_storage_ttl_days}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#project GoogleVertexAiFeaturestore#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The region of the dataset. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#region GoogleVertexAiFeaturestore#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreConfig.property.timeouts"></a>

```python
timeouts: GoogleVertexAiFeaturestoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#timeouts GoogleVertexAiFeaturestore#timeouts}

---

### GoogleVertexAiFeaturestoreEncryptionSpec <a name="GoogleVertexAiFeaturestoreEncryptionSpec" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource.

Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#kms_key_name GoogleVertexAiFeaturestore#kms_key_name}

---

### GoogleVertexAiFeaturestoreOnlineServingConfig <a name="GoogleVertexAiFeaturestoreOnlineServingConfig" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig(
  fixed_node_count: typing.Union[int, float] = None,
  scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScaling = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount">fixed_node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes for each cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | scaling block. |

---

##### `fixed_node_count`<sup>Optional</sup> <a name="fixed_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.fixedNodeCount"></a>

```python
fixed_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes for each cluster.

The number of nodes will not scale automatically but can be scaled manually by providing different values when updating.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#fixed_node_count GoogleVertexAiFeaturestore#fixed_node_count}

---

##### `scaling`<sup>Optional</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig.property.scaling"></a>

```python
scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#scaling GoogleVertexAiFeaturestore#scaling}

---

### GoogleVertexAiFeaturestoreOnlineServingConfigScaling <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of nodes to scale up to.

Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#max_node_count GoogleVertexAiFeaturestore#max_node_count}

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#min_node_count GoogleVertexAiFeaturestore#min_node_count}

---

### GoogleVertexAiFeaturestoreTimeouts <a name="GoogleVertexAiFeaturestoreTimeouts" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#create GoogleVertexAiFeaturestore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#delete GoogleVertexAiFeaturestore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#update GoogleVertexAiFeaturestore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeaturestoreEncryptionSpecOutputReference <a name="GoogleVertexAiFeaturestoreEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeaturestoreEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreEncryptionSpec">GoogleVertexAiFeaturestoreEncryptionSpec</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling">put_scaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount">reset_fixed_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling">reset_scaling</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scaling` <a name="put_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling"></a>

```python
def put_scaling(
  max_node_count: typing.Union[int, float],
  min_node_count: typing.Union[int, float]
) -> None
```

###### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

The maximum number of nodes to scale up to.

Must be greater than minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#max_node_count GoogleVertexAiFeaturestore#max_node_count}

---

###### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.putScaling.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_vertex_ai_featurestore#min_node_count GoogleVertexAiFeaturestore#min_node_count}

---

##### `reset_fixed_node_count` <a name="reset_fixed_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetFixedNodeCount"></a>

```python
def reset_fixed_node_count() -> None
```

##### `reset_scaling` <a name="reset_scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.resetScaling"></a>

```python
def reset_scaling() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling">scaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput">fixed_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput">scaling_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount">fixed_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scaling`<sup>Required</sup> <a name="scaling" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scaling"></a>

```python
scaling: GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference">GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference</a>

---

##### `fixed_node_count_input`<sup>Optional</sup> <a name="fixed_node_count_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCountInput"></a>

```python
fixed_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scaling_input`<sup>Optional</sup> <a name="scaling_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.scalingInput"></a>

```python
scaling_input: GoogleVertexAiFeaturestoreOnlineServingConfigScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---

##### `fixed_node_count`<sup>Required</sup> <a name="fixed_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.fixedNodeCount"></a>

```python
fixed_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeaturestoreOnlineServingConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfig">GoogleVertexAiFeaturestoreOnlineServingConfig</a>

---


### GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference <a name="GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScalingOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVertexAiFeaturestoreOnlineServingConfigScaling
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreOnlineServingConfigScaling">GoogleVertexAiFeaturestoreOnlineServingConfigScaling</a>

---


### GoogleVertexAiFeaturestoreTimeoutsOutputReference <a name="GoogleVertexAiFeaturestoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vertex_ai_featurestore

googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVertexAiFeaturestoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVertexAiFeaturestore.GoogleVertexAiFeaturestoreTimeouts">GoogleVertexAiFeaturestoreTimeouts</a>]

---



