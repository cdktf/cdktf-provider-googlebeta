# `googleApihubCuration` Submodule <a name="`googleApihubCuration` Submodule" id="@cdktf/provider-google-beta.googleApihubCuration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApihubCuration <a name="GoogleApihubCuration" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation google_apihub_curation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCuration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  curation_id: str,
  display_name: str,
  endpoint: GoogleApihubCurationEndpoint,
  location: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubCurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.curationId">curation_id</a></code> | <code>str</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the curation. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the curation. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.curationId"></a>

- *Type:* str

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified ID is already used by another curation resource in the API
  hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#curation_id GoogleApihubCuration#curation_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#display_name GoogleApihubCuration#display_name}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.endpoint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#endpoint GoogleApihubCuration#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#location GoogleApihubCuration#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.description"></a>

- *Type:* str

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#description GoogleApihubCuration#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#timeouts GoogleApihubCuration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint">put_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_endpoint` <a name="put_endpoint" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint"></a>

```python
def put_endpoint(
  application_integration_endpoint_details: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails
) -> None
```

###### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putEndpoint.parameter.applicationIntegrationEndpointDetails"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#application_integration_endpoint_details GoogleApihubCuration#application_integration_endpoint_details}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#create GoogleApihubCuration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#delete GoogleApihubCuration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#update GoogleApihubCuration#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApihubCuration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCuration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCuration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCuration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCuration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApihubCuration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApihubCuration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApihubCuration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApihubCuration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference">GoogleApihubCurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorCode">last_execution_error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorMessage">last_execution_error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionState">last_execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.pluginInstanceActions">plugin_instance_actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList">GoogleApihubCurationPluginInstanceActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference">GoogleApihubCurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationIdInput">curation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpointInput">endpoint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationId">curation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpoint"></a>

```python
endpoint: GoogleApihubCurationEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference">GoogleApihubCurationEndpointOutputReference</a>

---

##### `last_execution_error_code`<sup>Required</sup> <a name="last_execution_error_code" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorCode"></a>

```python
last_execution_error_code: str
```

- *Type:* str

---

##### `last_execution_error_message`<sup>Required</sup> <a name="last_execution_error_message" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionErrorMessage"></a>

```python
last_execution_error_message: str
```

- *Type:* str

---

##### `last_execution_state`<sup>Required</sup> <a name="last_execution_state" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.lastExecutionState"></a>

```python
last_execution_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `plugin_instance_actions`<sup>Required</sup> <a name="plugin_instance_actions" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.pluginInstanceActions"></a>

```python
plugin_instance_actions: GoogleApihubCurationPluginInstanceActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList">GoogleApihubCurationPluginInstanceActionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeouts"></a>

```python
timeouts: GoogleApihubCurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference">GoogleApihubCurationTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `curation_id_input`<sup>Optional</sup> <a name="curation_id_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationIdInput"></a>

```python
curation_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.endpointInput"></a>

```python
endpoint_input: GoogleApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApihubCurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.curationId"></a>

```python
curation_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCuration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApihubCurationConfig <a name="GoogleApihubCurationConfig" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  curation_id: str,
  display_name: str,
  endpoint: GoogleApihubCurationEndpoint,
  location: str,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApihubCurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.curationId">curation_id</a></code> | <code>str</code> | The ID to use for the curation resource, which will become the final component of the curations's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the curation. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.description">description</a></code> | <code>str</code> | The description of the curation. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `curation_id`<sup>Required</sup> <a name="curation_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.curationId"></a>

```python
curation_id: str
```

- *Type:* str

The ID to use for the curation resource, which will become the final component of the curations's resource name.

This field is optional.

* If provided, the same will be used. The service will throw an error if
  the specified ID is already used by another curation resource in the API
  hub.
* If not provided, a system generated ID will be used.

This value should be 4-500 characters, and valid characters
are /a-z[0-9]-_/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#curation_id GoogleApihubCuration#curation_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#display_name GoogleApihubCuration#display_name}

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.endpoint"></a>

```python
endpoint: GoogleApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#endpoint GoogleApihubCuration#endpoint}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#location GoogleApihubCuration#location}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the curation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#description GoogleApihubCuration#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#id GoogleApihubCuration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#project GoogleApihubCuration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationConfig.property.timeouts"></a>

```python
timeouts: GoogleApihubCurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#timeouts GoogleApihubCuration#timeouts}

---

### GoogleApihubCurationEndpoint <a name="GoogleApihubCurationEndpoint" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationEndpoint(
  application_integration_endpoint_details: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.property.applicationIntegrationEndpointDetails">application_integration_endpoint_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | application_integration_endpoint_details block. |

---

##### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint.property.applicationIntegrationEndpointDetails"></a>

```python
application_integration_endpoint_details: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

application_integration_endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#application_integration_endpoint_details GoogleApihubCuration#application_integration_endpoint_details}

---

### GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails <a name="GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails(
  trigger_id: str,
  uri: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId">trigger_id</a></code> | <code>str</code> | The API trigger ID of the Application Integration workflow. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri">uri</a></code> | <code>str</code> | The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'. |

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#trigger_id GoogleApihubCuration#trigger_id}

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails.property.uri"></a>

```python
uri: str
```

- *Type:* str

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#uri GoogleApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleApihubCurationPluginInstanceActions <a name="GoogleApihubCurationPluginInstanceActions" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationPluginInstanceActions()
```


### GoogleApihubCurationTimeouts <a name="GoogleApihubCurationTimeouts" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#create GoogleApihubCuration#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#delete GoogleApihubCuration#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#update GoogleApihubCuration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#create GoogleApihubCuration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#delete GoogleApihubCuration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#update GoogleApihubCuration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference <a name="GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput">trigger_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trigger_id_input`<sup>Optional</sup> <a name="trigger_id_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerIdInput"></a>

```python
trigger_id_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---


### GoogleApihubCurationEndpointOutputReference <a name="GoogleApihubCurationEndpointOutputReference" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails">put_application_integration_endpoint_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_integration_endpoint_details` <a name="put_application_integration_endpoint_details" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails"></a>

```python
def put_application_integration_endpoint_details(
  trigger_id: str,
  uri: str
) -> None
```

###### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.triggerId"></a>

- *Type:* str

The API trigger ID of the Application Integration workflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#trigger_id GoogleApihubCuration#trigger_id}

---

###### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.putApplicationIntegrationEndpointDetails.parameter.uri"></a>

- *Type:* str

The endpoint URI should be a valid REST URI for triggering an Application Integration. Format: 'https://integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute' or 'https://{location}-integrations.googleapis.com/v1/{name=projects/* /locations/* /integrations/*}:execute'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.42.0/docs/resources/google_apihub_curation#uri GoogleApihubCuration#uri}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails">application_integration_endpoint_details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput">application_integration_endpoint_details_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_integration_endpoint_details`<sup>Required</sup> <a name="application_integration_endpoint_details" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetails"></a>

```python
application_integration_endpoint_details: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetailsOutputReference</a>

---

##### `application_integration_endpoint_details_input`<sup>Optional</sup> <a name="application_integration_endpoint_details_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.applicationIntegrationEndpointDetailsInput"></a>

```python
application_integration_endpoint_details_input: GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails">GoogleApihubCurationEndpointApplicationIntegrationEndpointDetails</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubCurationEndpoint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationEndpoint">GoogleApihubCurationEndpoint</a>

---


### GoogleApihubCurationPluginInstanceActionsList <a name="GoogleApihubCurationPluginInstanceActionsList" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApihubCurationPluginInstanceActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleApihubCurationPluginInstanceActionsOutputReference <a name="GoogleApihubCurationPluginInstanceActionsOutputReference" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.actionId">action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance">plugin_instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions">GoogleApihubCurationPluginInstanceActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_id`<sup>Required</sup> <a name="action_id" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.actionId"></a>

```python
action_id: str
```

- *Type:* str

---

##### `plugin_instance`<sup>Required</sup> <a name="plugin_instance" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.pluginInstance"></a>

```python
plugin_instance: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApihubCurationPluginInstanceActions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationPluginInstanceActions">GoogleApihubCurationPluginInstanceActions</a>

---


### GoogleApihubCurationTimeoutsOutputReference <a name="GoogleApihubCurationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apihub_curation

googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApihubCurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApihubCuration.GoogleApihubCurationTimeouts">GoogleApihubCurationTimeouts</a>]

---



