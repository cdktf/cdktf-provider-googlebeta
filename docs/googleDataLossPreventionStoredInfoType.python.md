# `googleDataLossPreventionStoredInfoType` Submodule <a name="`googleDataLossPreventionStoredInfoType` Submodule" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLossPreventionStoredInfoType <a name="GoogleDataLossPreventionStoredInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  description: str = None,
  dictionary: GoogleDataLossPreventionStoredInfoTypeDictionary = None,
  display_name: str = None,
  id: str = None,
  large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary = None,
  regex: GoogleDataLossPreventionStoredInfoTypeRegex = None,
  stored_info_type_id: str = None,
  timeouts: GoogleDataLossPreventionStoredInfoTypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the info type in any of the following formats:. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the info type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User set display name of the info type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#id GoogleDataLossPreventionStoredInfoType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | large_custom_dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.regex">regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the info type in any of the following formats:.

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#parent GoogleDataLossPreventionStoredInfoType#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.description"></a>

- *Type:* str

A description of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#description GoogleDataLossPreventionStoredInfoType#description}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.dictionary"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#dictionary GoogleDataLossPreventionStoredInfoType#dictionary}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.displayName"></a>

- *Type:* str

User set display name of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#display_name GoogleDataLossPreventionStoredInfoType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#id GoogleDataLossPreventionStoredInfoType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `large_custom_dictionary`<sup>Optional</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.largeCustomDictionary"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

large_custom_dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#large_custom_dictionary GoogleDataLossPreventionStoredInfoType#large_custom_dictionary}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.regex"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#regex GoogleDataLossPreventionStoredInfoType#regex}

---

##### `stored_info_type_id`<sup>Optional</sup> <a name="stored_info_type_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.storedInfoTypeId"></a>

- *Type:* str

The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;

that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#stored_info_type_id GoogleDataLossPreventionStoredInfoType#stored_info_type_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#timeouts GoogleDataLossPreventionStoredInfoType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putDictionary">put_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putLargeCustomDictionary">put_large_custom_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putRegex">put_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDictionary">reset_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetLargeCustomDictionary">reset_large_custom_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetStoredInfoTypeId">reset_stored_info_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dictionary` <a name="put_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putDictionary"></a>

```python
def put_dictionary(
  cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath = None,
  word_list: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct = None
) -> None
```

###### `cloud_storage_path`<sup>Optional</sup> <a name="cloud_storage_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putDictionary.parameter.cloudStoragePath"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_path GoogleDataLossPreventionStoredInfoType#cloud_storage_path}

---

###### `word_list`<sup>Optional</sup> <a name="word_list" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putDictionary.parameter.wordList"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#word_list GoogleDataLossPreventionStoredInfoType#word_list}

---

##### `put_large_custom_dictionary` <a name="put_large_custom_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putLargeCustomDictionary"></a>

```python
def put_large_custom_dictionary(
  output_path: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  big_query_field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField = None,
  cloud_storage_file_set: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet = None
) -> None
```

###### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.outputPath"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

output_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#output_path GoogleDataLossPreventionStoredInfoType#output_path}

---

###### `big_query_field`<sup>Optional</sup> <a name="big_query_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.bigQueryField"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

big_query_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#big_query_field GoogleDataLossPreventionStoredInfoType#big_query_field}

---

###### `cloud_storage_file_set`<sup>Optional</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.cloudStorageFileSet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

cloud_storage_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_file_set GoogleDataLossPreventionStoredInfoType#cloud_storage_file_set}

---

##### `put_regex` <a name="put_regex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putRegex"></a>

```python
def put_regex(
  pattern: str,
  group_indexes: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putRegex.parameter.pattern"></a>

- *Type:* str

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#pattern GoogleDataLossPreventionStoredInfoType#pattern}

---

###### `group_indexes`<sup>Optional</sup> <a name="group_indexes" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putRegex.parameter.groupIndexes"></a>

- *Type:* typing.List[typing.Union[int, float]]

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#group_indexes GoogleDataLossPreventionStoredInfoType#group_indexes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#create GoogleDataLossPreventionStoredInfoType#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#delete GoogleDataLossPreventionStoredInfoType#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#update GoogleDataLossPreventionStoredInfoType#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dictionary` <a name="reset_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDictionary"></a>

```python
def reset_dictionary() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_large_custom_dictionary` <a name="reset_large_custom_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetLargeCustomDictionary"></a>

```python
def reset_large_custom_dictionary() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_stored_info_type_id` <a name="reset_stored_info_type_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetStoredInfoTypeId"></a>

```python
def reset_stored_info_type_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataLossPreventionStoredInfoType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataLossPreventionStoredInfoType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataLossPreventionStoredInfoType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference">GoogleDataLossPreventionStoredInfoTypeRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference">GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dictionaryInput">dictionary_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.largeCustomDictionaryInput">large_custom_dictionary_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.regexInput">regex_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.storedInfoTypeIdInput">stored_info_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dictionary"></a>

```python
dictionary: GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference</a>

---

##### `large_custom_dictionary`<sup>Required</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.largeCustomDictionary"></a>

```python
large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.regex"></a>

```python
regex: GoogleDataLossPreventionStoredInfoTypeRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference">GoogleDataLossPreventionStoredInfoTypeRegexOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.timeouts"></a>

```python
timeouts: GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference">GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dictionary_input`<sup>Optional</sup> <a name="dictionary_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.dictionaryInput"></a>

```python
dictionary_input: GoogleDataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `large_custom_dictionary_input`<sup>Optional</sup> <a name="large_custom_dictionary_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.largeCustomDictionaryInput"></a>

```python
large_custom_dictionary_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.regexInput"></a>

```python
regex_input: GoogleDataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a>

---

##### `stored_info_type_id_input`<sup>Optional</sup> <a name="stored_info_type_id_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.storedInfoTypeIdInput"></a>

```python
stored_info_type_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataLossPreventionStoredInfoTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `stored_info_type_id`<sup>Required</sup> <a name="stored_info_type_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.storedInfoTypeId"></a>

```python
stored_info_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLossPreventionStoredInfoTypeConfig <a name="GoogleDataLossPreventionStoredInfoTypeConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  description: str = None,
  dictionary: GoogleDataLossPreventionStoredInfoTypeDictionary = None,
  display_name: str = None,
  id: str = None,
  large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary = None,
  regex: GoogleDataLossPreventionStoredInfoTypeRegex = None,
  stored_info_type_id: str = None,
  timeouts: GoogleDataLossPreventionStoredInfoTypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the info type in any of the following formats:. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.description">description</a></code> | <code>str</code> | A description of the info type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.displayName">display_name</a></code> | <code>str</code> | User set display name of the info type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#id GoogleDataLossPreventionStoredInfoType#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | large_custom_dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the info type in any of the following formats:.

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#parent GoogleDataLossPreventionStoredInfoType#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#description GoogleDataLossPreventionStoredInfoType#description}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.dictionary"></a>

```python
dictionary: GoogleDataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#dictionary GoogleDataLossPreventionStoredInfoType#dictionary}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User set display name of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#display_name GoogleDataLossPreventionStoredInfoType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#id GoogleDataLossPreventionStoredInfoType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `large_custom_dictionary`<sup>Optional</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary"></a>

```python
large_custom_dictionary: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

large_custom_dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#large_custom_dictionary GoogleDataLossPreventionStoredInfoType#large_custom_dictionary}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.regex"></a>

```python
regex: GoogleDataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#regex GoogleDataLossPreventionStoredInfoType#regex}

---

##### `stored_info_type_id`<sup>Optional</sup> <a name="stored_info_type_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId"></a>

```python
stored_info_type_id: str
```

- *Type:* str

The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;

that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#stored_info_type_id GoogleDataLossPreventionStoredInfoType#stored_info_type_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeConfig.property.timeouts"></a>

```python
timeouts: GoogleDataLossPreventionStoredInfoTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#timeouts GoogleDataLossPreventionStoredInfoType#timeouts}

---

### GoogleDataLossPreventionStoredInfoTypeDictionary <a name="GoogleDataLossPreventionStoredInfoTypeDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary(
  cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath = None,
  word_list: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath">cloud_storage_path</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary.property.wordList">word_list</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | word_list block. |

---

##### `cloud_storage_path`<sup>Optional</sup> <a name="cloud_storage_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath"></a>

```python
cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_path GoogleDataLossPreventionStoredInfoType#cloud_storage_path}

---

##### `word_list`<sup>Optional</sup> <a name="word_list" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary.property.wordList"></a>

```python
word_list: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#word_list GoogleDataLossPreventionStoredInfoType#word_list}

---

### GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath <a name="GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path">path</a></code> | <code>str</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path"></a>

```python
path: str
```

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}

---

### GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct <a name="GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct(
  words: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words">words</a></code> | <code>typing.List[str]</code> | Words or phrases defining the dictionary. |

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words"></a>

```python
words: typing.List[str]
```

- *Type:* typing.List[str]

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#words GoogleDataLossPreventionStoredInfoType#words}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary(
  output_path: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  big_query_field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField = None,
  cloud_storage_file_set: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath">output_path</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | output_path block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField">big_query_field</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | big_query_field block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet">cloud_storage_file_set</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | cloud_storage_file_set block. |

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath"></a>

```python
output_path: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

output_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#output_path GoogleDataLossPreventionStoredInfoType#output_path}

---

##### `big_query_field`<sup>Optional</sup> <a name="big_query_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField"></a>

```python
big_query_field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

big_query_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#big_query_field GoogleDataLossPreventionStoredInfoType#big_query_field}

---

##### `cloud_storage_file_set`<sup>Optional</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet"></a>

```python
cloud_storage_file_set: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

cloud_storage_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_file_set GoogleDataLossPreventionStoredInfoType#cloud_storage_file_set}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField(
  field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  table: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field">field</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | field block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | table block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field"></a>

```python
field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#field GoogleDataLossPreventionStoredInfoType#field}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table"></a>

```python
table: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#table GoogleDataLossPreventionStoredInfoType#table}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name">name</a></code> | <code>str</code> | Name describing the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name"></a>

```python
name: str
```

- *Type:* str

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#name GoogleDataLossPreventionStoredInfoType#name}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID of the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId">project_id</a></code> | <code>str</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId">table_id</a></code> | <code>str</code> | The name of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#dataset_id GoogleDataLossPreventionStoredInfoType#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#project_id GoogleDataLossPreventionStoredInfoType#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#table_id GoogleDataLossPreventionStoredInfoType#table_id}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url">url</a></code> | <code>str</code> | The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url"></a>

```python
url: str
```

- *Type:* str

The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#url GoogleDataLossPreventionStoredInfoType#url}

---

### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path">path</a></code> | <code>str</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path"></a>

```python
path: str
```

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}

---

### GoogleDataLossPreventionStoredInfoTypeRegex <a name="GoogleDataLossPreventionStoredInfoTypeRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex(
  pattern: str,
  group_indexes: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex.property.pattern">pattern</a></code> | <code>str</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex.property.groupIndexes">group_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#pattern GoogleDataLossPreventionStoredInfoType#pattern}

---

##### `group_indexes`<sup>Optional</sup> <a name="group_indexes" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex.property.groupIndexes"></a>

```python
group_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#group_indexes GoogleDataLossPreventionStoredInfoType#group_indexes}

---

### GoogleDataLossPreventionStoredInfoTypeTimeouts <a name="GoogleDataLossPreventionStoredInfoTypeTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#create GoogleDataLossPreventionStoredInfoType#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#delete GoogleDataLossPreventionStoredInfoType#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#update GoogleDataLossPreventionStoredInfoType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#create GoogleDataLossPreventionStoredInfoType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#delete GoogleDataLossPreventionStoredInfoType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#update GoogleDataLossPreventionStoredInfoType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---


### GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath">put_cloud_storage_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList">put_word_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath">reset_cloud_storage_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList">reset_word_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_path` <a name="put_cloud_storage_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath"></a>

```python
def put_cloud_storage_path(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath.parameter.path"></a>

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}

---

##### `put_word_list` <a name="put_word_list" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList"></a>

```python
def put_word_list(
  words: typing.List[str]
) -> None
```

###### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList.parameter.words"></a>

- *Type:* typing.List[str]

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#words GoogleDataLossPreventionStoredInfoType#words}

---

##### `reset_cloud_storage_path` <a name="reset_cloud_storage_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath"></a>

```python
def reset_cloud_storage_path() -> None
```

##### `reset_word_list` <a name="reset_word_list" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList"></a>

```python
def reset_word_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath">cloud_storage_path</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList">word_list</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput">cloud_storage_path_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput">word_list_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_path`<sup>Required</sup> <a name="cloud_storage_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath"></a>

```python
cloud_storage_path: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a>

---

##### `word_list`<sup>Required</sup> <a name="word_list" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList"></a>

```python
word_list: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a>

---

##### `cloud_storage_path_input`<sup>Optional</sup> <a name="cloud_storage_path_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput"></a>

```python
cloud_storage_path_input: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---

##### `word_list_input`<sup>Optional</sup> <a name="word_list_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput"></a>

```python
word_list_input: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionary">GoogleDataLossPreventionStoredInfoTypeDictionary</a>

---


### GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput">words_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words">words</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `words_input`<sup>Optional</sup> <a name="words_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput"></a>

```python
words_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words"></a>

```python
words: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct">GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField">put_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable">put_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field` <a name="put_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField"></a>

```python
def put_field(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField.parameter.name"></a>

- *Type:* str

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#name GoogleDataLossPreventionStoredInfoType#name}

---

##### `put_table` <a name="put_table" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable"></a>

```python
def put_table(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.datasetId"></a>

- *Type:* str

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#dataset_id GoogleDataLossPreventionStoredInfoType#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.projectId"></a>

- *Type:* str

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#project_id GoogleDataLossPreventionStoredInfoType#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.tableId"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#table_id GoogleDataLossPreventionStoredInfoType#table_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput">field_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput">table_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field"></a>

```python
field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table"></a>

```python
table: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput"></a>

```python
field_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput"></a>

```python
table_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---


### GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField">put_big_query_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet">put_cloud_storage_file_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath">put_output_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField">reset_big_query_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet">reset_cloud_storage_file_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_big_query_field` <a name="put_big_query_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField"></a>

```python
def put_big_query_field(
  field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  table: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField.parameter.field"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#field GoogleDataLossPreventionStoredInfoType#field}

---

###### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#table GoogleDataLossPreventionStoredInfoType#table}

---

##### `put_cloud_storage_file_set` <a name="put_cloud_storage_file_set" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet"></a>

```python
def put_cloud_storage_file_set(
  url: str
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet.parameter.url"></a>

- *Type:* str

The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#url GoogleDataLossPreventionStoredInfoType#url}

---

##### `put_output_path` <a name="put_output_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath"></a>

```python
def put_output_path(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath.parameter.path"></a>

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}

---

##### `reset_big_query_field` <a name="reset_big_query_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField"></a>

```python
def reset_big_query_field() -> None
```

##### `reset_cloud_storage_file_set` <a name="reset_cloud_storage_file_set" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet"></a>

```python
def reset_cloud_storage_file_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField">big_query_field</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet">cloud_storage_file_set</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath">output_path</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput">big_query_field_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput">cloud_storage_file_set_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput">output_path_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `big_query_field`<sup>Required</sup> <a name="big_query_field" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField"></a>

```python
big_query_field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a>

---

##### `cloud_storage_file_set`<sup>Required</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet"></a>

```python
cloud_storage_file_set: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a>

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath"></a>

```python
output_path: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a>

---

##### `big_query_field_input`<sup>Optional</sup> <a name="big_query_field_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput"></a>

```python
big_query_field_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---

##### `cloud_storage_file_set_input`<sup>Optional</sup> <a name="cloud_storage_file_set_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput"></a>

```python
cloud_storage_file_set_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---

##### `output_path_input`<sup>Optional</sup> <a name="output_path_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput"></a>

```python
output_path_input: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary">GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---


### GoogleDataLossPreventionStoredInfoTypeRegexOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeRegexOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes">reset_group_indexes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_indexes` <a name="reset_group_indexes" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes"></a>

```python
def reset_group_indexes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput">group_indexes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes">group_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_indexes_input`<sup>Optional</sup> <a name="group_indexes_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput"></a>

```python
group_indexes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `group_indexes`<sup>Required</sup> <a name="group_indexes" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes"></a>

```python
group_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeRegex">GoogleDataLossPreventionStoredInfoTypeRegex</a>

---


### GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference <a name="GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_data_loss_prevention_stored_info_type

googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataLossPreventionStoredInfoTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataLossPreventionStoredInfoType.GoogleDataLossPreventionStoredInfoTypeTimeouts">GoogleDataLossPreventionStoredInfoTypeTimeouts</a>]

---



