# `googleCertificateManagerTrustConfig` Submodule <a name="`googleCertificateManagerTrustConfig` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerTrustConfig <a name="GoogleCertificateManagerTrustConfig" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig(
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
  name: str,
  allowlisted_certificates: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleCertificateManagerTrustConfigTimeouts = None,
  trust_stores: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates">allowlisted_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.trustStores">trust_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]</code> | trust_stores block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.location"></a>

- *Type:* str

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#location GoogleCertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#name GoogleCertificateManagerTrustConfig#name}

---

##### `allowlisted_certificates`<sup>Optional</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#allowlisted_certificates GoogleCertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.description"></a>

- *Type:* str

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#description GoogleCertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#labels GoogleCertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#timeouts GoogleCertificateManagerTrustConfig#timeouts}

---

##### `trust_stores`<sup>Optional</sup> <a name="trust_stores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.Initializer.parameter.trustStores"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#trust_stores GoogleCertificateManagerTrustConfig#trust_stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates">put_allowlisted_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores">put_trust_stores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetAllowlistedCertificates">reset_allowlisted_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTrustStores">reset_trust_stores</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowlisted_certificates` <a name="put_allowlisted_certificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates"></a>

```python
def put_allowlisted_certificates(
  value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putAllowlistedCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#create GoogleCertificateManagerTrustConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#delete GoogleCertificateManagerTrustConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#update GoogleCertificateManagerTrustConfig#update}.

---

##### `put_trust_stores` <a name="put_trust_stores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores"></a>

```python
def put_trust_stores(
  value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]

---

##### `reset_allowlisted_certificates` <a name="reset_allowlisted_certificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetAllowlistedCertificates"></a>

```python
def reset_allowlisted_certificates() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trust_stores` <a name="reset_trust_stores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.resetTrustStores"></a>

```python
def reset_trust_stores() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCertificateManagerTrustConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificates">allowlisted_certificates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList">GoogleCertificateManagerTrustConfigAllowlistedCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference">GoogleCertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStores">trust_stores</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList">GoogleCertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificatesInput">allowlisted_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStoresInput">trust_stores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowlisted_certificates`<sup>Required</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificates"></a>

```python
allowlisted_certificates: GoogleCertificateManagerTrustConfigAllowlistedCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList">GoogleCertificateManagerTrustConfigAllowlistedCertificatesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeouts"></a>

```python
timeouts: GoogleCertificateManagerTrustConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference">GoogleCertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `trust_stores`<sup>Required</sup> <a name="trust_stores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStores"></a>

```python
trust_stores: GoogleCertificateManagerTrustConfigTrustStoresList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList">GoogleCertificateManagerTrustConfigTrustStoresList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allowlisted_certificates_input`<sup>Optional</sup> <a name="allowlisted_certificates_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.allowlistedCertificatesInput"></a>

```python
allowlisted_certificates_input: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>]

---

##### `trust_stores_input`<sup>Optional</sup> <a name="trust_stores_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.trustStoresInput"></a>

```python
trust_stores_input: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerTrustConfigAllowlistedCertificates <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates(
  pem_certificate: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM certificate that is allowlisted. |

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM certificate that is allowlisted.

The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

### GoogleCertificateManagerTrustConfigConfig <a name="GoogleCertificateManagerTrustConfigConfig" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  allowlisted_certificates: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleCertificateManagerTrustConfigTimeouts = None,
  trust_stores: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.location">location</a></code> | <code>str</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.allowlistedCertificates">allowlisted_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.trustStores">trust_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]</code> | trust_stores block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#location GoogleCertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#name GoogleCertificateManagerTrustConfig#name}

---

##### `allowlisted_certificates`<sup>Optional</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.allowlistedCertificates"></a>

```python
allowlisted_certificates: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#allowlisted_certificates GoogleCertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#description GoogleCertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#id GoogleCertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#labels GoogleCertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#project GoogleCertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleCertificateManagerTrustConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#timeouts GoogleCertificateManagerTrustConfig#timeouts}

---

##### `trust_stores`<sup>Optional</sup> <a name="trust_stores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigConfig.property.trustStores"></a>

```python
trust_stores: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#trust_stores GoogleCertificateManagerTrustConfig#trust_stores}

---

### GoogleCertificateManagerTrustConfigTimeouts <a name="GoogleCertificateManagerTrustConfigTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#create GoogleCertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#delete GoogleCertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#update GoogleCertificateManagerTrustConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#create GoogleCertificateManagerTrustConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#delete GoogleCertificateManagerTrustConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#update GoogleCertificateManagerTrustConfig#update}.

---

### GoogleCertificateManagerTrustConfigTrustStores <a name="GoogleCertificateManagerTrustConfigTrustStores" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores(
  intermediate_cas: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]] = None,
  trust_anchors: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.intermediateCas">intermediate_cas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | intermediate_cas block. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.trustAnchors">trust_anchors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | trust_anchors block. |

---

##### `intermediate_cas`<sup>Optional</sup> <a name="intermediate_cas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```python
intermediate_cas: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#intermediate_cas GoogleCertificateManagerTrustConfig#intermediate_cas}

---

##### `trust_anchors`<sup>Optional</sup> <a name="trust_anchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```python
trust_anchors: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#trust_anchors GoogleCertificateManagerTrustConfig#trust_anchors}

---

### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_certificate_manager_trust_config#pem_certificate GoogleCertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerTrustConfigAllowlistedCertificatesList <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificatesList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]]

---


### GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference <a name="GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigAllowlistedCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigAllowlistedCertificates">GoogleCertificateManagerTrustConfigAllowlistedCertificates</a>]

---


### GoogleCertificateManagerTrustConfigTimeoutsOutputReference <a name="GoogleCertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTimeouts">GoogleCertificateManagerTrustConfigTimeouts</a>]

---


### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---


### GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]

---


### GoogleCertificateManagerTrustConfigTrustStoresList <a name="GoogleCertificateManagerTrustConfigTrustStoresList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCertificateManagerTrustConfigTrustStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]]

---


### GoogleCertificateManagerTrustConfigTrustStoresOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">put_intermediate_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">put_trust_anchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">reset_intermediate_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">reset_trust_anchors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intermediate_cas` <a name="put_intermediate_cas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```python
def put_intermediate_cas(
  value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---

##### `put_trust_anchors` <a name="put_trust_anchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```python
def put_trust_anchors(
  value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---

##### `reset_intermediate_cas` <a name="reset_intermediate_cas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```python
def reset_intermediate_cas() -> None
```

##### `reset_trust_anchors` <a name="reset_trust_anchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```python
def reset_trust_anchors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">intermediate_cas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">trust_anchors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">intermediate_cas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">trust_anchors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_cas`<sup>Required</sup> <a name="intermediate_cas" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```python
intermediate_cas: GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```python
trust_anchors: GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `intermediate_cas_input`<sup>Optional</sup> <a name="intermediate_cas_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```python
intermediate_cas_input: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas">GoogleCertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---

##### `trust_anchors_input`<sup>Optional</sup> <a name="trust_anchors_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```python
trust_anchors_input: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigTrustStores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStores">GoogleCertificateManagerTrustConfigTrustStores</a>]

---


### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---


### GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_certificate_manager_trust_config

googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCertificateManagerTrustConfig.GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors">GoogleCertificateManagerTrustConfigTrustStoresTrustAnchors</a>]

---



