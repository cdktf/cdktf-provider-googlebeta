# `googleHealthcareConsentStore` Submodule <a name="`googleHealthcareConsentStore` Submodule" id="@cdktf/provider-google-beta.googleHealthcareConsentStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareConsentStore <a name="GoogleHealthcareConsentStore" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store google_healthcare_consent_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStore(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  default_consent_ttl: str = None,
  enable_consent_create_on_update: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: GoogleHealthcareConsentStoreTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of this ConsentStore, for example: "consent1". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.defaultConsentTtl">default_consent_ttl</a></code> | <code>str</code> | Default time to live for consents in this store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.enableConsentCreateOnUpdate">enable_consent_create_on_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#id GoogleHealthcareConsentStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize Consent stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.dataset"></a>

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#dataset GoogleHealthcareConsentStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.name"></a>

- *Type:* str

The name of this ConsentStore, for example: "consent1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#name GoogleHealthcareConsentStore#name}

---

##### `default_consent_ttl`<sup>Optional</sup> <a name="default_consent_ttl" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.defaultConsentTtl"></a>

- *Type:* str

Default time to live for consents in this store.

Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#default_consent_ttl GoogleHealthcareConsentStore#default_consent_ttl}

---

##### `enable_consent_create_on_update`<sup>Optional</sup> <a name="enable_consent_create_on_update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.enableConsentCreateOnUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#enable_consent_create_on_update GoogleHealthcareConsentStore#enable_consent_create_on_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#id GoogleHealthcareConsentStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize Consent stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}'

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}\p{N}_-]{0,63}'

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#labels GoogleHealthcareConsentStore#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#timeouts GoogleHealthcareConsentStore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetDefaultConsentTtl">reset_default_consent_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetEnableConsentCreateOnUpdate">reset_enable_consent_create_on_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#create GoogleHealthcareConsentStore#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#delete GoogleHealthcareConsentStore#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#update GoogleHealthcareConsentStore#update}.

---

##### `reset_default_consent_ttl` <a name="reset_default_consent_ttl" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetDefaultConsentTtl"></a>

```python
def reset_default_consent_ttl() -> None
```

##### `reset_enable_consent_create_on_update` <a name="reset_enable_consent_create_on_update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetEnableConsentCreateOnUpdate"></a>

```python
def reset_enable_consent_create_on_update() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleHealthcareConsentStore resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStore.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStore.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStore.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStore.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleHealthcareConsentStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleHealthcareConsentStore to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleHealthcareConsentStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareConsentStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference">GoogleHealthcareConsentStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.datasetInput">dataset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.defaultConsentTtlInput">default_consent_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.enableConsentCreateOnUpdateInput">enable_consent_create_on_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.defaultConsentTtl">default_consent_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.enableConsentCreateOnUpdate">enable_consent_create_on_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.timeouts"></a>

```python
timeouts: GoogleHealthcareConsentStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference">GoogleHealthcareConsentStoreTimeoutsOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.datasetInput"></a>

```python
dataset_input: str
```

- *Type:* str

---

##### `default_consent_ttl_input`<sup>Optional</sup> <a name="default_consent_ttl_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.defaultConsentTtlInput"></a>

```python
default_consent_ttl_input: str
```

- *Type:* str

---

##### `enable_consent_create_on_update_input`<sup>Optional</sup> <a name="enable_consent_create_on_update_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.enableConsentCreateOnUpdateInput"></a>

```python
enable_consent_create_on_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleHealthcareConsentStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `default_consent_ttl`<sup>Required</sup> <a name="default_consent_ttl" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.defaultConsentTtl"></a>

```python
default_consent_ttl: str
```

- *Type:* str

---

##### `enable_consent_create_on_update`<sup>Required</sup> <a name="enable_consent_create_on_update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.enableConsentCreateOnUpdate"></a>

```python
enable_consent_create_on_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStore.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareConsentStoreConfig <a name="GoogleHealthcareConsentStoreConfig" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset: str,
  name: str,
  default_consent_ttl: str = None,
  enable_consent_create_on_update: typing.Union[bool, IResolvable] = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  timeouts: GoogleHealthcareConsentStoreTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.dataset">dataset</a></code> | <code>str</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.name">name</a></code> | <code>str</code> | The name of this ConsentStore, for example: "consent1". |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.defaultConsentTtl">default_consent_ttl</a></code> | <code>str</code> | Default time to live for consents in this store. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate">enable_consent_create_on_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#id GoogleHealthcareConsentStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-supplied key-value pairs used to organize Consent stores. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#dataset GoogleHealthcareConsentStore#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of this ConsentStore, for example: "consent1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#name GoogleHealthcareConsentStore#name}

---

##### `default_consent_ttl`<sup>Optional</sup> <a name="default_consent_ttl" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.defaultConsentTtl"></a>

```python
default_consent_ttl: str
```

- *Type:* str

Default time to live for consents in this store.

Must be at least 24 hours. Updating this field will not affect the expiration time of existing consents.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#default_consent_ttl GoogleHealthcareConsentStore#default_consent_ttl}

---

##### `enable_consent_create_on_update`<sup>Optional</sup> <a name="enable_consent_create_on_update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.enableConsentCreateOnUpdate"></a>

```python
enable_consent_create_on_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, [consents.patch] [google.cloud.healthcare.v1.consent.UpdateConsent] creates the consent if it does not already exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#enable_consent_create_on_update GoogleHealthcareConsentStore#enable_consent_create_on_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#id GoogleHealthcareConsentStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-supplied key-value pairs used to organize Consent stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}'

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: '[\p{Ll}\p{Lo}\p{N}_-]{0,63}'

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#labels GoogleHealthcareConsentStore#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreConfig.property.timeouts"></a>

```python
timeouts: GoogleHealthcareConsentStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#timeouts GoogleHealthcareConsentStore#timeouts}

---

### GoogleHealthcareConsentStoreTimeouts <a name="GoogleHealthcareConsentStoreTimeouts" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#create GoogleHealthcareConsentStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#delete GoogleHealthcareConsentStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#update GoogleHealthcareConsentStore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#create GoogleHealthcareConsentStore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#delete GoogleHealthcareConsentStore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_healthcare_consent_store#update GoogleHealthcareConsentStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareConsentStoreTimeoutsOutputReference <a name="GoogleHealthcareConsentStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_healthcare_consent_store

googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleHealthcareConsentStoreTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleHealthcareConsentStore.GoogleHealthcareConsentStoreTimeouts">GoogleHealthcareConsentStoreTimeouts</a>]

---



