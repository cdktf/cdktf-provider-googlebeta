# `googleNetworkServicesEdgeCacheKeyset` Submodule <a name="`googleNetworkServicesEdgeCacheKeyset` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesEdgeCacheKeyset <a name="GoogleNetworkServicesEdgeCacheKeyset" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset google_network_services_edge_cache_keyset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  public_key: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]] = None,
  timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeouts = None,
  validation_shared_keys: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.publicKey">public_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]</code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.validationSharedKeys">validation_shared_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]</code> | validation_shared_keys block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#name GoogleNetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#description GoogleNetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#labels GoogleNetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.publicKey"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#public_key GoogleNetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#timeouts GoogleNetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validation_shared_keys`<sup>Optional</sup> <a name="validation_shared_keys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.Initializer.parameter.validationSharedKeys"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#validation_shared_keys GoogleNetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey">put_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys">put_validation_shared_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys">reset_validation_shared_keys</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_public_key` <a name="put_public_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey"></a>

```python
def put_public_key(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putPublicKey.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}.

---

##### `put_validation_shared_keys` <a name="put_validation_shared_keys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys"></a>

```python
def put_validation_shared_keys(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.putValidationSharedKeys.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validation_shared_keys` <a name="reset_validation_shared_keys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.resetValidationSharedKeys"></a>

```python
def reset_validation_shared_keys() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesEdgeCacheKeyset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesEdgeCacheKeyset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesEdgeCacheKeyset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesEdgeCacheKeyset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey">public_key</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys">validation_shared_keys</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput">public_key_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput">validation_shared_keys_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKey"></a>

```python
public_key: GoogleNetworkServicesEdgeCacheKeysetPublicKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList">GoogleNetworkServicesEdgeCacheKeysetPublicKeyList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference">GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a>

---

##### `validation_shared_keys`<sup>Required</sup> <a name="validation_shared_keys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeys"></a>

```python
validation_shared_keys: GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.publicKeyInput"></a>

```python
public_key_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheKeysetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>]

---

##### `validation_shared_keys_input`<sup>Optional</sup> <a name="validation_shared_keys_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput"></a>

```python
validation_shared_keys_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeyset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesEdgeCacheKeysetConfig <a name="GoogleNetworkServicesEdgeCacheKeysetConfig" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  public_key: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]] = None,
  timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeouts = None,
  validation_shared_keys: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey">public_key</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]</code> | public_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys">validation_shared_keys</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]</code> | validation_shared_keys block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#name GoogleNetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#description GoogleNetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the EdgeCache resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#labels GoogleNetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#project GoogleNetworkServicesEdgeCacheKeyset#project}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.publicKey"></a>

```python
public_key: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#public_key GoogleNetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesEdgeCacheKeysetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#timeouts GoogleNetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validation_shared_keys`<sup>Optional</sup> <a name="validation_shared_keys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys"></a>

```python
validation_shared_keys: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#validation_shared_keys GoogleNetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

### GoogleNetworkServicesEdgeCacheKeysetPublicKey <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKey" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey(
  id: str,
  managed: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id">id</a></code> | <code>str</code> | The ID of the public key. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true to have the CDN automatically manage this public key value. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value">value</a></code> | <code>str</code> | The base64-encoded value of the Ed25519 public key. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.id"></a>

```python
id: str
```

- *Type:* str

The ID of the public key.

The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#id GoogleNetworkServicesEdgeCacheKeyset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true to have the CDN automatically manage this public key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#managed GoogleNetworkServicesEdgeCacheKeyset#managed}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey.property.value"></a>

```python
value: str
```

- *Type:* str

The base64-encoded value of the Ed25519 public key.

The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#value GoogleNetworkServicesEdgeCacheKeyset#value}

---

### GoogleNetworkServicesEdgeCacheKeysetTimeouts <a name="GoogleNetworkServicesEdgeCacheKeysetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#create GoogleNetworkServicesEdgeCacheKeyset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#delete GoogleNetworkServicesEdgeCacheKeyset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#update GoogleNetworkServicesEdgeCacheKeyset#update}.

---

### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys(
  secret_version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion">secret_version</a></code> | <code>str</code> | The name of the secret version in Secret Manager. |

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

The name of the secret version in Secret Manager.

The resource name of the secret version must be in the format 'projects/* /secrets/* /versions/*' where the '*' values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.

* If you are using HMAC-SHA1, we suggest 20-byte secrets.
* If you are using HMAC-SHA256, we suggest 32-byte secrets.
  See RFC 2104, Section 3 for more details on these recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_network_services_edge_cache_keyset#secret_version GoogleNetworkServicesEdgeCacheKeyset#secret_version}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesEdgeCacheKeysetPublicKeyList <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetPublicKey]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]]

---


### GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput">managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput"></a>

```python
managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheKeysetPublicKey]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetPublicKey">GoogleNetworkServicesEdgeCacheKeysetPublicKey</a>]

---


### GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheKeysetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetTimeouts">GoogleNetworkServicesEdgeCacheKeysetTimeouts</a>]

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]]

---


### GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference <a name="GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_edge_cache_keyset

googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput">secret_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_input`<sup>Optional</sup> <a name="secret_version_input" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput"></a>

```python
secret_version_input: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesEdgeCacheKeyset.GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys">GoogleNetworkServicesEdgeCacheKeysetValidationSharedKeys</a>]

---



