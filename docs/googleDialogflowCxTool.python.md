# `googleDialogflowCxTool` Submodule <a name="`googleDialogflowCxTool` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTool <a name="GoogleDialogflowCxTool" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxTool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  display_name: str,
  data_store_spec: GoogleDialogflowCxToolDataStoreSpec = None,
  function_spec: GoogleDialogflowCxToolFunctionSpec = None,
  id: str = None,
  open_api_spec: GoogleDialogflowCxToolOpenApiSpec = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxToolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.description">description</a></code> | <code>str</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dataStoreSpec">data_store_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.functionSpec">function_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.description"></a>

- *Type:* str

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.displayName"></a>

- *Type:* str

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `data_store_spec`<sup>Optional</sup> <a name="data_store_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.dataStoreSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.parent"></a>

- *Type:* str

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec">put_data_store_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec">put_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec">put_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec">reset_data_store_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec">reset_function_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec">reset_open_api_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_store_spec` <a name="put_data_store_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec"></a>

```python
def put_data_store_spec(
  data_store_connections: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]],
  fallback_prompt: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt
) -> None
```

###### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec.parameter.dataStoreConnections"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}

---

###### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec.parameter.fallbackPrompt"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}

---

##### `put_function_spec` <a name="put_function_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec"></a>

```python
def put_function_spec(
  input_schema: str = None,
  output_schema: str = None
) -> None
```

###### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec.parameter.inputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}

---

###### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec.parameter.outputSchema"></a>

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}

---

##### `put_open_api_spec` <a name="put_open_api_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec"></a>

```python
def put_open_api_spec(
  text_schema: str,
  authentication: GoogleDialogflowCxToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowCxToolOpenApiSpecTlsConfig = None
) -> None
```

###### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.textSchema"></a>

- *Type:* str

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}

---

###### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}

---

###### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.serviceDirectoryConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}

---

###### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}.

---

##### `reset_data_store_spec` <a name="reset_data_store_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec"></a>

```python
def reset_data_store_spec() -> None
```

##### `reset_function_spec` <a name="reset_function_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec"></a>

```python
def reset_function_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_open_api_spec` <a name="reset_open_api_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec"></a>

```python
def reset_open_api_spec() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxTool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxTool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxTool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxTool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDialogflowCxTool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDialogflowCxTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec">data_store_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType">tool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput">data_store_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput">function_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput">open_api_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_store_spec`<sup>Required</sup> <a name="data_store_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec"></a>

```python
data_store_spec: GoogleDialogflowCxToolDataStoreSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a>

---

##### `function_spec`<sup>Required</sup> <a name="function_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowCxToolFunctionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `open_api_spec`<sup>Required</sup> <a name="open_api_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowCxToolOpenApiSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxToolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a>

---

##### `tool_type`<sup>Required</sup> <a name="tool_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType"></a>

```python
tool_type: str
```

- *Type:* str

---

##### `data_store_spec_input`<sup>Optional</sup> <a name="data_store_spec_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput"></a>

```python
data_store_spec_input: GoogleDialogflowCxToolDataStoreSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `function_spec_input`<sup>Optional</sup> <a name="function_spec_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput"></a>

```python
function_spec_input: GoogleDialogflowCxToolFunctionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `open_api_spec_input`<sup>Optional</sup> <a name="open_api_spec_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput"></a>

```python
open_api_spec_input: GoogleDialogflowCxToolOpenApiSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDialogflowCxToolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolConfig <a name="GoogleDialogflowCxToolConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str,
  display_name: str,
  data_store_spec: GoogleDialogflowCxToolDataStoreSpec = None,
  function_spec: GoogleDialogflowCxToolFunctionSpec = None,
  id: str = None,
  open_api_spec: GoogleDialogflowCxToolOpenApiSpec = None,
  parent: str = None,
  timeouts: GoogleDialogflowCxToolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description">description</a></code> | <code>str</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName">display_name</a></code> | <code>str</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec">data_store_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec">function_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec">open_api_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent">parent</a></code> | <code>str</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `data_store_spec`<sup>Optional</sup> <a name="data_store_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec"></a>

```python
data_store_spec: GoogleDialogflowCxToolDataStoreSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `function_spec`<sup>Optional</sup> <a name="function_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec"></a>

```python
function_spec: GoogleDialogflowCxToolFunctionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `open_api_spec`<sup>Optional</sup> <a name="open_api_spec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec"></a>

```python
open_api_spec: GoogleDialogflowCxToolOpenApiSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts"></a>

```python
timeouts: GoogleDialogflowCxToolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

### GoogleDialogflowCxToolDataStoreSpec <a name="GoogleDialogflowCxToolDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec(
  data_store_connections: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]],
  fallback_prompt: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections">data_store_connections</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]</code> | data_store_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt">fallback_prompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections"></a>

```python
data_store_connections: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}

---

##### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt"></a>

```python
fallback_prompt: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}

---

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections(
  data_store: str = None,
  data_store_type: str = None,
  document_processing_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore">data_store</a></code> | <code>str</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType">data_store_type</a></code> | <code>str</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | The document processing mode for the data store connection. |

---

##### `data_store`<sup>Optional</sup> <a name="data_store" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store GoogleDialogflowCxTool#data_store}

---

##### `data_store_type`<sup>Optional</sup> <a name="data_store_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_type GoogleDialogflowCxTool#data_store_type}

---

##### `document_processing_mode`<sup>Optional</sup> <a name="document_processing_mode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#document_processing_mode GoogleDialogflowCxTool#document_processing_mode}

---

### GoogleDialogflowCxToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt()
```


### GoogleDialogflowCxToolFunctionSpec <a name="GoogleDialogflowCxToolFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec(
  input_schema: str = None,
  output_schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema">input_schema</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema">output_schema</a></code> | <code>str</code> | Optional. |

---

##### `input_schema`<sup>Optional</sup> <a name="input_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}

---

##### `output_schema`<sup>Optional</sup> <a name="output_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}

---

### GoogleDialogflowCxToolOpenApiSpec <a name="GoogleDialogflowCxToolOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec(
  text_schema: str,
  authentication: GoogleDialogflowCxToolOpenApiSpecAuthentication = None,
  service_directory_config: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig = None,
  tls_config: GoogleDialogflowCxToolOpenApiSpecTlsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema">text_schema</a></code> | <code>str</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication"></a>

```python
authentication: GoogleDialogflowCxToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}

---

##### `service_directory_config`<sup>Optional</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}

---

##### `tls_config`<sup>Optional</sup> <a name="tls_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowCxToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolOpenApiSpecAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication(
  api_key_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}

---

##### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}

---

##### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}

---

##### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">key_name</a></code> | <code>str</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">request_location</a></code> | <code>str</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">api_key</a></code> | <code>str</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | Optional. |

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}

---

##### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig(
  secret_version_for_token: str = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>str</code> | Optional. |

---

##### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId">client_id</a></code> | <code>str</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | Optional. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}

---

##### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig(
  service_agent_auth: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | Optional. |

---

##### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}

---

### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig(
  service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>str</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig(
  ca_certs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts">ca_certs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]</code> | ca_certs block. |

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts"></a>

```python
ca_certs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts(
  cert: str,
  display_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>str</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName">display_name</a></code> | <code>str</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```python
cert: str
```

- *Type:* str

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#cert GoogleDialogflowCxTool#cert}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

### GoogleDialogflowCxToolTimeouts <a name="GoogleDialogflowCxToolTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]

---


### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">reset_data_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">reset_data_store_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">reset_document_processing_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_store` <a name="reset_data_store" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```python
def reset_data_store() -> None
```

##### `reset_data_store_type` <a name="reset_data_store_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```python
def reset_data_store_type() -> None
```

##### `reset_document_processing_mode` <a name="reset_document_processing_mode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```python
def reset_document_processing_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">data_store_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">document_processing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">data_store</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">document_processing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_input`<sup>Optional</sup> <a name="data_store_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```python
data_store_input: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `document_processing_mode_input`<sup>Optional</sup> <a name="document_processing_mode_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```python
document_processing_mode_input: str
```

- *Type:* str

---

##### `data_store`<sup>Required</sup> <a name="data_store" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```python
data_store: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `document_processing_mode`<sup>Required</sup> <a name="document_processing_mode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```python
document_processing_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]

---


### GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections">put_data_store_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt">put_fallback_prompt</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_store_connections` <a name="put_data_store_connections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```python
def put_data_store_connections(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]

---

##### `put_fallback_prompt` <a name="put_fallback_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```python
def put_fallback_prompt() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections">data_store_connections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt">fallback_prompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">data_store_connections_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput">fallback_prompt_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_connections`<sup>Required</sup> <a name="data_store_connections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```python
data_store_connections: GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `fallback_prompt`<sup>Required</sup> <a name="fallback_prompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```python
fallback_prompt: GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `data_store_connections_input`<sup>Optional</sup> <a name="data_store_connections_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```python
data_store_connections_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolDataStoreSpecDataStoreConnections]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections">GoogleDialogflowCxToolDataStoreSpecDataStoreConnections</a>]]

---

##### `fallback_prompt_input`<sup>Optional</sup> <a name="fallback_prompt_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```python
fallback_prompt_input: GoogleDialogflowCxToolDataStoreSpecFallbackPrompt
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolDataStoreSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolFunctionSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema">reset_input_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema">reset_output_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_input_schema` <a name="reset_input_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema"></a>

```python
def reset_input_schema() -> None
```

##### `reset_output_schema` <a name="reset_output_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema"></a>

```python
def reset_output_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput">input_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput">output_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema">input_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema">output_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_schema_input`<sup>Optional</sup> <a name="input_schema_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```python
input_schema_input: str
```

- *Type:* str

---

##### `output_schema_input`<sup>Optional</sup> <a name="output_schema_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```python
output_schema_input: str
```

- *Type:* str

---

##### `input_schema`<sup>Required</sup> <a name="input_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema"></a>

```python
input_schema: str
```

- *Type:* str

---

##### `output_schema`<sup>Required</sup> <a name="output_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema"></a>

```python
output_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolFunctionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">reset_secret_version_for_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_secret_version_for_api_key` <a name="reset_secret_version_for_api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```python
def reset_secret_version_for_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">request_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secret_version_for_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">request_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secret_version_for_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `request_location_input`<sup>Optional</sup> <a name="request_location_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```python
request_location_input: str
```

- *Type:* str

---

##### `secret_version_for_api_key_input`<sup>Optional</sup> <a name="secret_version_for_api_key_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```python
secret_version_for_api_key_input: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```python
request_location: str
```

- *Type:* str

---

##### `secret_version_for_api_key`<sup>Required</sup> <a name="secret_version_for_api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```python
secret_version_for_api_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">reset_secret_version_for_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">reset_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_version_for_token` <a name="reset_secret_version_for_token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```python
def reset_secret_version_for_token() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```python
def reset_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secret_version_for_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secret_version_for_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_version_for_token_input`<sup>Optional</sup> <a name="secret_version_for_token_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```python
secret_version_for_token_input: str
```

- *Type:* str

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `secret_version_for_token`<sup>Required</sup> <a name="secret_version_for_token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```python
secret_version_for_token: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">reset_secret_version_for_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```

##### `reset_secret_version_for_client_secret` <a name="reset_secret_version_for_client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```python
def reset_secret_version_for_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauth_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secret_version_for_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">token_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauth_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secret_version_for_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_grant_type_input`<sup>Optional</sup> <a name="oauth_grant_type_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```python
oauth_grant_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret_input`<sup>Optional</sup> <a name="secret_version_for_client_secret_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```python
secret_version_for_client_secret_input: str
```

- *Type:* str

---

##### `token_endpoint_input`<sup>Optional</sup> <a name="token_endpoint_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```python
token_endpoint_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```python
oauth_grant_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secret_version_for_client_secret`<sup>Required</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```python
secret_version_for_client_secret: str
```

- *Type:* str

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">put_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">put_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">put_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">put_service_agent_auth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">reset_api_key_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">reset_bearer_token_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">reset_oauth_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">reset_service_agent_auth_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key_config` <a name="put_api_key_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```python
def put_api_key_config(
  key_name: str,
  request_location: str,
  api_key: str = None,
  secret_version_for_api_key: str = None
) -> None
```

###### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.keyName"></a>

- *Type:* str

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}

---

###### `request_location`<sup>Required</sup> <a name="request_location" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.requestLocation"></a>

- *Type:* str

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}

---

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.apiKey"></a>

- *Type:* str

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}

---

###### `secret_version_for_api_key`<sup>Optional</sup> <a name="secret_version_for_api_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.secretVersionForApiKey"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}

---

##### `put_bearer_token_config` <a name="put_bearer_token_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```python
def put_bearer_token_config(
  secret_version_for_token: str = None,
  token: str = None
) -> None
```

###### `secret_version_for_token`<sup>Optional</sup> <a name="secret_version_for_token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.secretVersionForToken"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}

---

###### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.token"></a>

- *Type:* str

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}

---

##### `put_oauth_config` <a name="put_oauth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```python
def put_oauth_config(
  client_id: str,
  oauth_grant_type: str,
  token_endpoint: str,
  client_secret: str = None,
  scopes: typing.List[str] = None,
  secret_version_for_client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientId"></a>

- *Type:* str

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}

---

###### `oauth_grant_type`<sup>Required</sup> <a name="oauth_grant_type" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.oauthGrantType"></a>

- *Type:* str

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}

---

###### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.tokenEndpoint"></a>

- *Type:* str

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.clientSecret"></a>

- *Type:* str

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}

---

###### `secret_version_for_client_secret`<sup>Optional</sup> <a name="secret_version_for_client_secret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.secretVersionForClientSecret"></a>

- *Type:* str

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}

---

##### `put_service_agent_auth_config` <a name="put_service_agent_auth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```python
def put_service_agent_auth_config(
  service_agent_auth: str = None
) -> None
```

###### `service_agent_auth`<sup>Optional</sup> <a name="service_agent_auth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.serviceAgentAuth"></a>

- *Type:* str

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}

---

##### `reset_api_key_config` <a name="reset_api_key_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```python
def reset_api_key_config() -> None
```

##### `reset_bearer_token_config` <a name="reset_bearer_token_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```python
def reset_bearer_token_config() -> None
```

##### `reset_oauth_config` <a name="reset_oauth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```python
def reset_oauth_config() -> None
```

##### `reset_service_agent_auth_config` <a name="reset_service_agent_auth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```python
def reset_service_agent_auth_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">api_key_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearer_token_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">service_agent_auth_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">api_key_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearer_token_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauth_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">service_agent_auth_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_config`<sup>Required</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```python
api_key_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearer_token_config`<sup>Required</sup> <a name="bearer_token_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```python
bearer_token_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauth_config`<sup>Required</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```python
oauth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `service_agent_auth_config`<sup>Required</sup> <a name="service_agent_auth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```python
service_agent_auth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `api_key_config_input`<sup>Optional</sup> <a name="api_key_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```python
api_key_config_input: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearer_token_config_input`<sup>Optional</sup> <a name="bearer_token_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```python
bearer_token_config_input: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauth_config_input`<sup>Optional</sup> <a name="oauth_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```python
oauth_config_input: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `service_agent_auth_config_input`<sup>Optional</sup> <a name="service_agent_auth_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```python
service_agent_auth_config_input: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">reset_service_agent_auth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_agent_auth` <a name="reset_service_agent_auth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```python
def reset_service_agent_auth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">service_agent_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">service_agent_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_agent_auth_input`<sup>Optional</sup> <a name="service_agent_auth_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```python
service_agent_auth_input: str
```

- *Type:* str

---

##### `service_agent_auth`<sup>Required</sup> <a name="service_agent_auth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```python
service_agent_auth: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig">put_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig">put_tls_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">reset_service_directory_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig">reset_tls_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication"></a>

```python
def put_authentication(
  api_key_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig = None,
  bearer_token_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig = None,
  oauth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig = None,
  service_agent_auth_config: GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig = None
) -> None
```

###### `api_key_config`<sup>Optional</sup> <a name="api_key_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.apiKeyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}

---

###### `bearer_token_config`<sup>Optional</sup> <a name="bearer_token_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.bearerTokenConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}

---

###### `oauth_config`<sup>Optional</sup> <a name="oauth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}

---

###### `service_agent_auth_config`<sup>Optional</sup> <a name="service_agent_auth_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.serviceAgentAuthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}

---

##### `put_service_directory_config` <a name="put_service_directory_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```python
def put_service_directory_config(
  service: str
) -> None
```

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.service"></a>

- *Type:* str

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}

---

##### `put_tls_config` <a name="put_tls_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig"></a>

```python
def put_tls_config(
  ca_certs: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
) -> None
```

###### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig.parameter.caCerts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_service_directory_config` <a name="reset_service_directory_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```python
def reset_service_directory_config() -> None
```

##### `reset_tls_config` <a name="reset_tls_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```python
def reset_tls_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">service_directory_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig">tls_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">service_directory_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput">text_schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput">tls_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema">text_schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication"></a>

```python
authentication: GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `service_directory_config`<sup>Required</sup> <a name="service_directory_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```python
service_directory_config: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tls_config`<sup>Required</sup> <a name="tls_config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```python
tls_config: GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```python
authentication_input: GoogleDialogflowCxToolOpenApiSpecAuthentication
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `service_directory_config_input`<sup>Optional</sup> <a name="service_directory_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```python
service_directory_config_input: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `text_schema_input`<sup>Optional</sup> <a name="text_schema_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```python
text_schema_input: str
```

- *Type:* str

---

##### `tls_config_input`<sup>Optional</sup> <a name="tls_config_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```python
tls_config_input: GoogleDialogflowCxToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `text_schema`<sup>Required</sup> <a name="text_schema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema"></a>

```python
text_schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```python
cert_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```python
cert: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts">put_ca_certs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ca_certs` <a name="put_ca_certs" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```python
def put_ca_certs(
  value: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts">ca_certs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">ca_certs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certs`<sup>Required</sup> <a name="ca_certs" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```python
ca_certs: GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `ca_certs_input`<sup>Optional</sup> <a name="ca_certs_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```python
ca_certs_input: typing.Union[IResolvable, typing.List[GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDialogflowCxToolOpenApiSpecTlsConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolTimeoutsOutputReference <a name="GoogleDialogflowCxToolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dialogflow_cx_tool

googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDialogflowCxToolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>]

---



