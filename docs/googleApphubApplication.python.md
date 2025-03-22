# `googleApphubApplication` Submodule <a name="`googleApphubApplication` Submodule" id="@cdktf/provider-google-beta.googleApphubApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApphubApplication <a name="GoogleApphubApplication" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application google_apphub_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  location: str,
  scope: GoogleApphubApplicationScope,
  attributes: GoogleApphubApplicationAttributes = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApphubApplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. User-defined description of an Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. User-defined name for the Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#id GoogleApphubApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#project GoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#application_id GoogleApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.location"></a>

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#location GoogleApphubApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#scope GoogleApphubApplication#scope}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#attributes GoogleApphubApplication#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.description"></a>

- *Type:* str

Optional. User-defined description of an Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#description GoogleApphubApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. User-defined name for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#id GoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#project GoogleApphubApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#timeouts GoogleApphubApplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes"></a>

```python
def put_attributes(
  business_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]] = None,
  criticality: GoogleApphubApplicationAttributesCriticality = None,
  developer_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]] = None,
  environment: GoogleApphubApplicationAttributesEnvironment = None,
  operator_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]] = None
) -> None
```

###### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.businessOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#business_owners GoogleApphubApplication#business_owners}

---

###### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.criticality"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#criticality GoogleApphubApplication#criticality}

---

###### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.developerOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#developer_owners GoogleApphubApplication#developer_owners}

---

###### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.environment"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#environment GoogleApphubApplication#environment}

---

###### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putAttributes.parameter.operatorOwners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#operator_owners GoogleApphubApplication#operator_owners}

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope"></a>

```python
def put_scope(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putScope.parameter.type"></a>

- *Type:* str

Required. Scope Type.   Possible values: REGIONAL GLOBAL Possible values: ["REGIONAL", "GLOBAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#create GoogleApphubApplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#delete GoogleApphubApplication#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#update GoogleApphubApplication#update}.

---

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleApphubApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleApphubApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleApphubApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleApphubApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApphubApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference">GoogleApphubApplicationAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference">GoogleApphubApplicationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference">GoogleApphubApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributesInput">attributes_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scopeInput">scope_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributes"></a>

```python
attributes: GoogleApphubApplicationAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference">GoogleApphubApplicationAttributesOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scope"></a>

```python
scope: GoogleApphubApplicationScopeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference">GoogleApphubApplicationScopeOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeouts"></a>

```python
timeouts: GoogleApphubApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference">GoogleApphubApplicationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.attributesInput"></a>

```python
attributes_input: GoogleApphubApplicationAttributes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.scopeInput"></a>

```python
scope_input: GoogleApphubApplicationScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleApphubApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApphubApplicationAttributes <a name="GoogleApphubApplicationAttributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributes(
  business_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]] = None,
  criticality: GoogleApphubApplicationAttributesCriticality = None,
  developer_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]] = None,
  environment: GoogleApphubApplicationAttributesEnvironment = None,
  operator_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.businessOwners">business_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]</code> | business_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | criticality block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.developerOwners">developer_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]</code> | developer_owners block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.operatorOwners">operator_owners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]</code> | operator_owners block. |

---

##### `business_owners`<sup>Optional</sup> <a name="business_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.businessOwners"></a>

```python
business_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]

business_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#business_owners GoogleApphubApplication#business_owners}

---

##### `criticality`<sup>Optional</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.criticality"></a>

```python
criticality: GoogleApphubApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

criticality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#criticality GoogleApphubApplication#criticality}

---

##### `developer_owners`<sup>Optional</sup> <a name="developer_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.developerOwners"></a>

```python
developer_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]

developer_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#developer_owners GoogleApphubApplication#developer_owners}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.environment"></a>

```python
environment: GoogleApphubApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#environment GoogleApphubApplication#environment}

---

##### `operator_owners`<sup>Optional</sup> <a name="operator_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes.property.operatorOwners"></a>

```python
operator_owners: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]

operator_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#operator_owners GoogleApphubApplication#operator_owners}

---

### GoogleApphubApplicationAttributesBusinessOwners <a name="GoogleApphubApplicationAttributesBusinessOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.displayName">display_name</a></code> | <code>str</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationAttributesCriticality <a name="GoogleApphubApplicationAttributesCriticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesCriticality(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.property.type">type</a></code> | <code>str</code> | Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality.property.type"></a>

```python
type: str
```

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationAttributesDeveloperOwners <a name="GoogleApphubApplicationAttributesDeveloperOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.displayName">display_name</a></code> | <code>str</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationAttributesEnvironment <a name="GoogleApphubApplicationAttributesEnvironment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesEnvironment(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.property.type">type</a></code> | <code>str</code> | Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment.property.type"></a>

```python
type: str
```

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationAttributesOperatorOwners <a name="GoogleApphubApplicationAttributesOperatorOwners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners(
  email: str,
  display_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.email">email</a></code> | <code>str</code> | Required. Email address of the contacts. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.displayName">display_name</a></code> | <code>str</code> | Optional. Contact's name. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.email"></a>

```python
email: str
```

- *Type:* str

Required. Email address of the contacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#email GoogleApphubApplication#email}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. Contact's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

### GoogleApphubApplicationConfig <a name="GoogleApphubApplicationConfig" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  location: str,
  scope: GoogleApphubApplicationScope,
  attributes: GoogleApphubApplicationAttributes = None,
  description: str = None,
  display_name: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleApphubApplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | Required. The Application identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.location">location</a></code> | <code>str</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | scope block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | attributes block. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.description">description</a></code> | <code>str</code> | Optional. User-defined description of an Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. User-defined name for the Application. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#id GoogleApphubApplication#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#project GoogleApphubApplication#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Required. The Application identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#application_id GoogleApphubApplication#application_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#location GoogleApphubApplication#location}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.scope"></a>

```python
scope: GoogleApphubApplicationScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#scope GoogleApphubApplication#scope}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.attributes"></a>

```python
attributes: GoogleApphubApplicationAttributes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#attributes GoogleApphubApplication#attributes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. User-defined description of an Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#description GoogleApphubApplication#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. User-defined name for the Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#display_name GoogleApphubApplication#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#id GoogleApphubApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#project GoogleApphubApplication#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationConfig.property.timeouts"></a>

```python
timeouts: GoogleApphubApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#timeouts GoogleApphubApplication#timeouts}

---

### GoogleApphubApplicationScope <a name="GoogleApphubApplicationScope" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationScope(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.property.type">type</a></code> | <code>str</code> | Required. Scope Type.   Possible values: REGIONAL GLOBAL Possible values: ["REGIONAL", "GLOBAL"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope.property.type"></a>

```python
type: str
```

- *Type:* str

Required. Scope Type.   Possible values: REGIONAL GLOBAL Possible values: ["REGIONAL", "GLOBAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

### GoogleApphubApplicationTimeouts <a name="GoogleApphubApplicationTimeouts" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#create GoogleApphubApplication#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#delete GoogleApphubApplication#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#update GoogleApphubApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#create GoogleApphubApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#delete GoogleApphubApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#update GoogleApphubApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApphubApplicationAttributesBusinessOwnersList <a name="GoogleApphubApplicationAttributesBusinessOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubApplicationAttributesBusinessOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]

---


### GoogleApphubApplicationAttributesBusinessOwnersOutputReference <a name="GoogleApphubApplicationAttributesBusinessOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApphubApplicationAttributesBusinessOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]

---


### GoogleApphubApplicationAttributesCriticalityOutputReference <a name="GoogleApphubApplicationAttributesCriticalityOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

---


### GoogleApphubApplicationAttributesDeveloperOwnersList <a name="GoogleApphubApplicationAttributesDeveloperOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubApplicationAttributesDeveloperOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]

---


### GoogleApphubApplicationAttributesDeveloperOwnersOutputReference <a name="GoogleApphubApplicationAttributesDeveloperOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApphubApplicationAttributesDeveloperOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]

---


### GoogleApphubApplicationAttributesEnvironmentOutputReference <a name="GoogleApphubApplicationAttributesEnvironmentOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

---


### GoogleApphubApplicationAttributesOperatorOwnersList <a name="GoogleApphubApplicationAttributesOperatorOwnersList" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleApphubApplicationAttributesOperatorOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]

---


### GoogleApphubApplicationAttributesOperatorOwnersOutputReference <a name="GoogleApphubApplicationAttributesOperatorOwnersOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApphubApplicationAttributesOperatorOwners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]

---


### GoogleApphubApplicationAttributesOutputReference <a name="GoogleApphubApplicationAttributesOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners">put_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality">put_criticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners">put_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners">put_operator_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetBusinessOwners">reset_business_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetCriticality">reset_criticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetDeveloperOwners">reset_developer_owners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetOperatorOwners">reset_operator_owners</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_business_owners` <a name="put_business_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners"></a>

```python
def put_business_owners(
  value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putBusinessOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]

---

##### `put_criticality` <a name="put_criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality"></a>

```python
def put_criticality(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putCriticality.parameter.type"></a>

- *Type:* str

Criticality type. Possible values: ["MISSION_CRITICAL", "HIGH", "MEDIUM", "LOW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

##### `put_developer_owners` <a name="put_developer_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners"></a>

```python
def put_developer_owners(
  value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putDeveloperOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]

---

##### `put_environment` <a name="put_environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment"></a>

```python
def put_environment(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putEnvironment.parameter.type"></a>

- *Type:* str

Environment type. Possible values: ["PRODUCTION", "STAGING", "TEST", "DEVELOPMENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_apphub_application#type GoogleApphubApplication#type}

---

##### `put_operator_owners` <a name="put_operator_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners"></a>

```python
def put_operator_owners(
  value: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.putOperatorOwners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]

---

##### `reset_business_owners` <a name="reset_business_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetBusinessOwners"></a>

```python
def reset_business_owners() -> None
```

##### `reset_criticality` <a name="reset_criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetCriticality"></a>

```python
def reset_criticality() -> None
```

##### `reset_developer_owners` <a name="reset_developer_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetDeveloperOwners"></a>

```python
def reset_developer_owners() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_operator_owners` <a name="reset_operator_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.resetOperatorOwners"></a>

```python
def reset_operator_owners() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwners">business_owners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList">GoogleApphubApplicationAttributesBusinessOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticality">criticality</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference">GoogleApphubApplicationAttributesCriticalityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwners">developer_owners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList">GoogleApphubApplicationAttributesDeveloperOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference">GoogleApphubApplicationAttributesEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwners">operator_owners</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList">GoogleApphubApplicationAttributesOperatorOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwnersInput">business_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticalityInput">criticality_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwnersInput">developer_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environmentInput">environment_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwnersInput">operator_owners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `business_owners`<sup>Required</sup> <a name="business_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwners"></a>

```python
business_owners: GoogleApphubApplicationAttributesBusinessOwnersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwnersList">GoogleApphubApplicationAttributesBusinessOwnersList</a>

---

##### `criticality`<sup>Required</sup> <a name="criticality" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticality"></a>

```python
criticality: GoogleApphubApplicationAttributesCriticalityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticalityOutputReference">GoogleApphubApplicationAttributesCriticalityOutputReference</a>

---

##### `developer_owners`<sup>Required</sup> <a name="developer_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwners"></a>

```python
developer_owners: GoogleApphubApplicationAttributesDeveloperOwnersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwnersList">GoogleApphubApplicationAttributesDeveloperOwnersList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environment"></a>

```python
environment: GoogleApphubApplicationAttributesEnvironmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironmentOutputReference">GoogleApphubApplicationAttributesEnvironmentOutputReference</a>

---

##### `operator_owners`<sup>Required</sup> <a name="operator_owners" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwners"></a>

```python
operator_owners: GoogleApphubApplicationAttributesOperatorOwnersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwnersList">GoogleApphubApplicationAttributesOperatorOwnersList</a>

---

##### `business_owners_input`<sup>Optional</sup> <a name="business_owners_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.businessOwnersInput"></a>

```python
business_owners_input: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesBusinessOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesBusinessOwners">GoogleApphubApplicationAttributesBusinessOwners</a>]]

---

##### `criticality_input`<sup>Optional</sup> <a name="criticality_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.criticalityInput"></a>

```python
criticality_input: GoogleApphubApplicationAttributesCriticality
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesCriticality">GoogleApphubApplicationAttributesCriticality</a>

---

##### `developer_owners_input`<sup>Optional</sup> <a name="developer_owners_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.developerOwnersInput"></a>

```python
developer_owners_input: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesDeveloperOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesDeveloperOwners">GoogleApphubApplicationAttributesDeveloperOwners</a>]]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.environmentInput"></a>

```python
environment_input: GoogleApphubApplicationAttributesEnvironment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesEnvironment">GoogleApphubApplicationAttributesEnvironment</a>

---

##### `operator_owners_input`<sup>Optional</sup> <a name="operator_owners_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.operatorOwnersInput"></a>

```python
operator_owners_input: typing.Union[IResolvable, typing.List[GoogleApphubApplicationAttributesOperatorOwners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOperatorOwners">GoogleApphubApplicationAttributesOperatorOwners</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubApplicationAttributes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationAttributes">GoogleApphubApplicationAttributes</a>

---


### GoogleApphubApplicationScopeOutputReference <a name="GoogleApphubApplicationScopeOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScopeOutputReference.property.internalValue"></a>

```python
internal_value: GoogleApphubApplicationScope
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationScope">GoogleApphubApplicationScope</a>

---


### GoogleApphubApplicationTimeoutsOutputReference <a name="GoogleApphubApplicationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_apphub_application

googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleApphubApplicationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleApphubApplication.GoogleApphubApplicationTimeouts">GoogleApphubApplicationTimeouts</a>]

---



